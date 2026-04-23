import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

type RedirectRule = {
  source: string;
  destination: string;
  permanent: boolean;
};

function loadWpRedirects(): RedirectRule[] {
  const p = path.join(process.cwd(), "scripts/wp-blog-redirects.json");
  try {
    const raw = fs.readFileSync(p, "utf8");
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (r): r is RedirectRule =>
        r &&
        typeof r.source === "string" &&
        typeof r.destination === "string" &&
        typeof r.permanent === "boolean",
    );
  } catch {
    return [];
  }
}

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Tina's cloud databaseClient (Upstash-backed) can be slow to warm up
  // during a cold Vercel build. The default 60s timeout was tripping
  // /work and / at 60s before the first successful response. 180s gives
  // enough headroom without hiding real regressions.
  staticPageGenerationTimeout: 180,
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
  async redirects() {
    return loadWpRedirects();
  },
};

export default nextConfig;
