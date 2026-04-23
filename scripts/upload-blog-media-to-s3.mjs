/**
 * Upload imported blog cover images / inline images from `public/uploads/blog/`
 * to the Tina S3 media store, then rewrite all references in
 * `content/blog/*.mdx` from the local path to the public S3 URL.
 *
 * Credentials come from `.env.local`:
 *   S3_ACCESS_KEY, S3_SECRET_KEY, S3_REGION, S3_BUCKET, S3_MEDIA_ROOT
 *
 * Env flags:
 *   DRY_RUN=true   → list what would be uploaded and rewritten, no S3 calls
 *
 * After a successful run, you can delete `public/uploads/blog/` manually.
 * This script never deletes anything.
 */

import fs from "node:fs/promises";
import fssync from "node:fs";
import path from "node:path";
import { S3Client, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import mime from "mime-types";

const ROOT = path.resolve(process.cwd());
const LOCAL_DIR = path.join(ROOT, "public/uploads/blog");
const LOCAL_URL_PREFIX = "/uploads/blog";
const CONTENT_GLOB_DIR = path.join(ROOT, "content/blog");
const DRY_RUN = process.env.DRY_RUN === "true";

/* -------------------------------------------------------------------------- */
/*  Env loader                                                                */
/* -------------------------------------------------------------------------- */

async function loadEnvLocal() {
  const p = path.join(ROOT, ".env.local");
  let raw;
  try {
    raw = await fs.readFile(p, "utf8");
  } catch {
    throw new Error(`.env.local not found at ${p}`);
  }
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (!m) continue;
    let [, key, val] = m;
    val = val.replace(/^['"]|['"]$/g, "");
    if (!process.env[key]) process.env[key] = val;
  }
}

/* -------------------------------------------------------------------------- */
/*  Main                                                                      */
/* -------------------------------------------------------------------------- */

async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else if (e.isFile()) out.push(full);
  }
  return out;
}

async function main() {
  await loadEnvLocal();
  const {
    S3_ACCESS_KEY,
    S3_SECRET_KEY,
    S3_REGION = "us-east-1",
    S3_BUCKET = "mpcstudios-media",
    S3_MEDIA_ROOT = "",
  } = process.env;

  if (!DRY_RUN && (!S3_ACCESS_KEY || !S3_SECRET_KEY)) {
    throw new Error("Missing S3_ACCESS_KEY or S3_SECRET_KEY in .env.local");
  }

  const mediaRoot = S3_MEDIA_ROOT.replace(/^\/|\/$/g, "");
  const publicUrl = (key) =>
    `https://${S3_BUCKET}.s3.${S3_REGION}.amazonaws.com/${key}`;

  const s3 = new S3Client({
    region: S3_REGION,
    credentials: { accessKeyId: S3_ACCESS_KEY, secretAccessKey: S3_SECRET_KEY },
  });

  console.log(`\nUpload blog media → s3://${S3_BUCKET}/${mediaRoot}/blog/`);
  console.log(`Mode: ${DRY_RUN ? "DRY RUN" : "LIVE"}\n`);

  // 1. Gather all local files under public/uploads/blog/
  let files;
  try {
    files = await walk(LOCAL_DIR);
  } catch (e) {
    if (e.code === "ENOENT") {
      console.log("No public/uploads/blog/ directory — nothing to do.");
      return;
    }
    throw e;
  }
  console.log(`Found ${files.length} local files.`);

  // localPath relative to public/ → S3 URL
  const rewriteMap = new Map();
  let uploaded = 0;
  let cached = 0;
  let failed = 0;

  for (const abs of files) {
    const relFromPublic = path.relative(path.join(ROOT, "public"), abs).replaceAll(path.sep, "/");
    // relFromPublic looks like "uploads/blog/<slug>/<file>.jpg"
    const localWebPath = `/${relFromPublic}`;

    // S3 key: <mediaRoot>/blog/<slug>/<file>.<ext>
    const keySuffix = relFromPublic.replace(/^uploads\/blog\//, "blog/");
    const key = mediaRoot ? `${mediaRoot}/${keySuffix}` : keySuffix;
    const url = publicUrl(key);

    rewriteMap.set(localWebPath, url);

    if (DRY_RUN) {
      console.log(`  ↑ ${localWebPath}\n      → ${url}`);
      continue;
    }

    // Check if already uploaded (HeadObject) — idempotent re-runs
    try {
      await s3.send(new HeadObjectCommand({ Bucket: S3_BUCKET, Key: key }));
      cached++;
      process.stdout.write(".");
      continue;
    } catch (e) {
      if (e.$metadata?.httpStatusCode !== 404 && e.name !== "NotFound") {
        // Not a "doesn't exist" — surface it
        console.error(`\n  ! head failed ${key}: ${e.message}`);
      }
    }

    try {
      const body = fssync.createReadStream(abs);
      const contentType = mime.lookup(abs) || "application/octet-stream";
      await s3.send(
        new PutObjectCommand({
          Bucket: S3_BUCKET,
          Key: key,
          Body: body,
          ContentType: contentType,
          CacheControl: "public, max-age=31536000, immutable",
        }),
      );
      uploaded++;
      process.stdout.write("✓");
    } catch (e) {
      failed++;
      console.error(`\n  ✗ upload failed ${key}: ${e.message}`);
    }
  }
  process.stdout.write("\n");

  console.log(
    `\nUploaded ${uploaded} · already-present ${cached} · failed ${failed}\n`,
  );

  // 2. Rewrite all references in content/blog/*.mdx
  const mdxFiles = (await fs.readdir(CONTENT_GLOB_DIR))
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => path.join(CONTENT_GLOB_DIR, f));

  let rewrittenFiles = 0;
  let rewrittenRefs = 0;

  for (const mdxPath of mdxFiles) {
    const raw = await fs.readFile(mdxPath, "utf8");
    let next = raw;
    let changed = 0;
    for (const [localWebPath, s3Url] of rewriteMap) {
      // Use a string replace — coverImage frontmatter uses single quotes
      // around the path; inline markdown uses parens. Both handled by
      // literal substring replacement since the path is unique.
      const pattern = new RegExp(escapeRegex(localWebPath), "g");
      const matches = next.match(pattern);
      if (matches) {
        changed += matches.length;
        next = next.replace(pattern, s3Url);
      }
    }
    if (changed > 0) {
      if (!DRY_RUN) await fs.writeFile(mdxPath, next, "utf8");
      rewrittenFiles++;
      rewrittenRefs += changed;
      console.log(`  ✎ ${path.relative(ROOT, mdxPath)}  (${changed} ref${changed === 1 ? "" : "s"})`);
    }
  }

  console.log(
    `\nRewrote ${rewrittenRefs} references across ${rewrittenFiles} MDX file${rewrittenFiles === 1 ? "" : "s"}.`,
  );
  if (!DRY_RUN && uploaded + cached > 0 && failed === 0) {
    console.log(
      `\n✅ Done. When you've verified the site reads from S3, you can remove:\n   ${path.relative(ROOT, LOCAL_DIR)}\n`,
    );
  }
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
