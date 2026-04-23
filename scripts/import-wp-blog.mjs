/**
 * Import blog posts from mpcstudios.com (WordPress) into the Tina `blog`
 * collection as MDX files.
 *
 * Env flags:
 *   DRY_RUN=true    → write output to `scripts/out/` instead of `content/blog/`
 *   LIMIT=N         → only import the first N posts (after skips)
 *   CATEGORY=ID     → WP category ID to filter to (default 1 = Blog)
 *
 * Usage:
 *   DRY_RUN=true LIMIT=3 node scripts/import-wp-blog.mjs
 *   node scripts/import-wp-blog.mjs
 */

import fs from "node:fs/promises";
import fssync from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";
import TurndownService from "turndown";

const ROOT = path.resolve(process.cwd());
const API = "https://www.mpcstudios.com/wp-json/wp/v2";
const CATEGORY_ID = Number(process.env.CATEGORY ?? 1);
const LIMIT = process.env.LIMIT ? Number(process.env.LIMIT) : Infinity;
const DRY_RUN = process.env.DRY_RUN === "true";

const CONTENT_DIR = path.join(
  ROOT,
  DRY_RUN ? "scripts/out/blog" : "content/blog",
);
const IMAGE_DIR = path.join(
  ROOT,
  DRY_RUN ? "scripts/out/uploads/blog" : "public/uploads/blog",
);
const IMAGE_PUBLIC_PREFIX = "/uploads/blog";
const REDIRECTS_OUT = path.join(ROOT, "scripts/wp-blog-redirects.json");
const DEFAULT_AUTHOR = "MPC Studios";

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

const decodeEntities = (s = "") =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&hellip;/g, "…")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));

const stripTags = (html = "") =>
  decodeEntities(html.replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();

/** Trim at the last whole word under `max` chars and append ellipsis if trimmed. */
function truncateAtWord(text, max = 300) {
  if (!text || text.length <= max) return text;
  const slice = text.slice(0, max);
  const cut = slice.replace(/\s+\S*$/, "").trimEnd();
  // Strip a trailing comma / hyphen / dash left dangling after the cut
  const cleaned = cut.replace(/[,\-–—:;]+$/, "").trimEnd();
  return `${cleaned}…`;
}

function mapCategory(title, slug, body) {
  const hay = `${title} ${slug} ${body}`.toLowerCase();
  if (/\b(ai|automat|llm|agent|chatgpt|gpt|rag|ml)\b/.test(hay)) return "AI & Automation";
  if (/\b(seo|aeo|search|ranking|google|ads|ppc|marketing|content marketing)\b/.test(hay))
    return "Digital Marketing";
  if (/\b(content|copywriting|writing|editorial)\b/.test(hay)) return "Content";
  if (/\b(brand|identity|logo|rebrand)\b/.test(hay)) return "Branding";
  if (/\b(software|saas|app|code|engineering|developer)\b/.test(hay)) return "Software";
  if (/\b(website|web design|redesign|homepage|landing|conversion)\b/.test(hay)) return "Web Design";
  return "Strategy";
}

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  hr: "---",
  bulletListMarker: "-",
  emDelimiter: "_",
});

// Don't let <figure>/<figcaption> emit weird blocks
turndown.addRule("figure", {
  filter: ["figure"],
  replacement: (content) => `\n\n${content.trim()}\n\n`,
});
turndown.addRule("figcaption", {
  filter: ["figcaption"],
  replacement: (content) => `\n\n_${content.trim()}_\n\n`,
});

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`${url} → ${res.status} ${body.slice(0, 120)}`);
  }
  return {
    json: await res.json(),
    total: res.headers.get("x-wp-total"),
    totalPages: res.headers.get("x-wp-totalpages"),
  };
}

async function downloadImage(url, destDir) {
  // Sanitize filename — keep extension, strip query strings
  const parsed = new URL(url);
  let filename = path.basename(parsed.pathname);
  filename = filename.replace(/[^\w.\-]/g, "_");
  const dest = path.join(destDir, filename);
  await fs.mkdir(destDir, { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`img ${url} → ${res.status}`);
  await pipeline(
    Readable.fromWeb(res.body),
    fssync.createWriteStream(dest),
  );
  return filename;
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

function wordCount(md) {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*_`>\-[\]()!]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function readTime(md) {
  return `${Math.max(1, Math.ceil(wordCount(md) / 225))} min`;
}

function yamlStr(s = "") {
  // Single-quoted YAML string — escape internal single quotes by doubling
  return `'${String(s).replace(/'/g, "''")}'`;
}

/* -------------------------------------------------------------------------- */
/*  Per-post import                                                           */
/* -------------------------------------------------------------------------- */

async function importPost(post) {
  const slug = post.slug;

  // Check content/blog/<slug>.mdx — never the dry-run dir — so skip decisions
  // always reflect the real repo state.
  const realDest = path.join(ROOT, "content/blog", `${slug}.mdx`);
  if (await fileExists(realDest)) {
    console.log(`  ↷ skip existing: ${slug}`);
    return { skipped: true, slug };
  }

  const dest = path.join(CONTENT_DIR, `${slug}.mdx`);

  const title = decodeEntities(post.title?.rendered ?? "").trim();
  const excerpt = truncateAtWord(stripTags(post.excerpt?.rendered ?? ""), 300);
  const author = DEFAULT_AUTHOR;

  const featured = post._embedded?.["wp:featuredmedia"]?.[0];
  let coverImage;
  if (featured?.source_url) {
    try {
      const imgDir = path.join(IMAGE_DIR, slug);
      const fn = await downloadImage(featured.source_url, imgDir);
      coverImage = `${IMAGE_PUBLIC_PREFIX}/${slug}/${fn}`;
    } catch (e) {
      console.warn(`  ⚠ cover image failed for ${slug}: ${e.message}`);
    }
  }

  // Raw HTML → Markdown
  let md = turndown.turndown(post.content?.rendered ?? "");

  // Download & rewrite inline images in the markdown body
  const imgRefs = Array.from(md.matchAll(/!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g));
  for (const [whole, alt, url] of imgRefs) {
    // Skip images we already know are from external CDNs we can't host
    try {
      const imgDir = path.join(IMAGE_DIR, slug);
      const fn = await downloadImage(url, imgDir);
      md = md.replace(whole, `![${alt}](${IMAGE_PUBLIC_PREFIX}/${slug}/${fn})`);
    } catch (e) {
      console.warn(`  ⚠ inline image failed (${slug}): ${e.message}`);
    }
  }

  // Cleanup: collapse 3+ newlines, trim edges
  md = md.replace(/\n{3,}/g, "\n\n").trim();

  const category = mapCategory(title, slug, md);
  const rt = readTime(md);
  const isoDate = new Date(post.date_gmt ? `${post.date_gmt}Z` : post.date).toISOString();

  const lines = [
    "---",
    `title: ${yamlStr(title)}`,
    excerpt ? `excerpt: ${yamlStr(excerpt)}` : null,
    `category: ${yamlStr(category)}`,
    `date: ${isoDate}`,
    author ? `author: ${yamlStr(author)}` : null,
    `readTime: ${yamlStr(rt)}`,
    coverImage ? `coverImage: ${yamlStr(coverImage)}` : null,
    "status: published",
    "---",
    "",
    md,
    "",
  ].filter(Boolean);

  await fs.mkdir(CONTENT_DIR, { recursive: true });
  await fs.writeFile(dest, lines.join("\n"), "utf8");

  console.log(`  ✓ ${slug}  (${category}, ${rt})`);
  return { slug, originalLink: post.link, skipped: false };
}

/* -------------------------------------------------------------------------- */
/*  Main                                                                      */
/* -------------------------------------------------------------------------- */

async function main() {
  await fs.mkdir(CONTENT_DIR, { recursive: true });
  const perPage = 100;
  const imported = [];
  const skipped = [];
  let page = 1;

  console.log(
    `\nImporting from mpcstudios.com · category ${CATEGORY_ID} · ${DRY_RUN ? "DRY RUN" : "LIVE"}${LIMIT !== Infinity ? ` · limit ${LIMIT}` : ""}\n`,
  );

  while (imported.length + skipped.length < LIMIT) {
    const url = `${API}/posts?per_page=${perPage}&page=${page}&categories=${CATEGORY_ID}&_embed=1`;
    console.log(`→ page ${page}`);
    let resp;
    try {
      resp = await fetchJson(url);
    } catch (e) {
      // WP returns 400 "rest_post_invalid_page_number" when you page past end
      if (/→ 400/.test(String(e.message))) break;
      throw e;
    }
    if (!resp.json.length) break;

    for (const post of resp.json) {
      if (imported.length + skipped.length >= LIMIT) break;
      try {
        const r = await importPost(post);
        if (r.skipped) skipped.push(r.slug);
        else imported.push(r);
      } catch (e) {
        console.error(`  ✗ ${post.slug}: ${e.message}`);
      }
    }

    const totalPages = Number(resp.totalPages ?? 1);
    if (page >= totalPages) break;
    page++;
  }

  // Emit redirects file (only for newly-imported posts; existing redirects
  // for skipped slugs should already be in place from a prior run)
  const redirects = imported
    .map(({ slug, originalLink }) => {
      if (!originalLink) return null;
      try {
        const u = new URL(originalLink);
        const oldPath = u.pathname.replace(/\/+$/, "") || "/";
        if (oldPath === `/blog/${slug}` || oldPath === "") return null;
        return { source: oldPath, destination: `/blog/${slug}`, permanent: true };
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  // Merge with any existing redirects file so re-runs don't erase prior entries
  let existing = [];
  try {
    existing = JSON.parse(await fs.readFile(REDIRECTS_OUT, "utf8"));
  } catch {
    /* no prior file */
  }
  const bySource = new Map(existing.map((r) => [r.source, r]));
  for (const r of redirects) bySource.set(r.source, r);
  const merged = Array.from(bySource.values()).sort((a, b) =>
    a.source.localeCompare(b.source),
  );

  await fs.writeFile(REDIRECTS_OUT, JSON.stringify(merged, null, 2) + "\n", "utf8");

  console.log(
    `\nDone. Imported ${imported.length} · skipped ${skipped.length} · redirects file has ${merged.length} entries`,
  );
  console.log(`Content → ${path.relative(ROOT, CONTENT_DIR)}`);
  console.log(`Images  → ${path.relative(ROOT, IMAGE_DIR)}`);
  console.log(`Redirects → ${path.relative(ROOT, REDIRECTS_OUT)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
