"use client";

import { type CSSProperties } from "react";
import Link from "next/link";
import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export type BlogCardItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  read: string;
  bg: string;
  coverImage?: string | null;
};

export default function CategoryPageClient({
  label,
  slug,
  posts,
  totalCount,
  currentPage,
  totalPages,
}: {
  label: string;
  slug: string;
  posts: BlogCardItem[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}) {
  return (
    <>
      <Cursor />
      <RevealInit />

      <main>
        {/* Hero */}
        <section className="resources-hero-pad" style={{ background: "#F4F3F1" }}>
          <div className="content-wrap">
            <div className="reveal" style={{ maxWidth: "820px" }}>
              <Link
                href="/blog"
                style={{
                  display: "inline-block",
                  fontSize: "0.85rem",
                  color: "#7A7670",
                  textDecoration: "none",
                  marginBottom: "24px",
                }}
              >
                ← All resources
              </Link>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#F77837",
                  marginBottom: "20px",
                }}
              >
                Category
              </p>
              <h1
                style={{
                  fontFamily:
                    'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "clamp(2.6rem, 4.6vw, 4rem)",
                  fontWeight: 800,
                  lineHeight: 1.12,
                  letterSpacing: "-0.03em",
                  color: "#0E0E0E",
                  marginBottom: "20px",
                }}
              >
                {label}
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#7A7670" }}>
                {totalCount} post{totalCount === 1 ? "" : "s"}
              </p>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section style={{ background: "#fff", padding: "60px 0 120px" }}>
          <div className="content-wrap">
            <div className="reveal resources-grid">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.3s",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-6px)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
                >
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 10",
                      background: post.coverImage
                        ? `#0E0E0E url(${post.coverImage}) center/cover no-repeat`
                        : post.bg,
                      borderRadius: "16px",
                      position: "relative",
                      overflow: "hidden",
                      marginBottom: "20px",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,107,43,0.08), transparent 60%)" }} />
                  </div>
                  <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#F77837", marginBottom: "10px" }}>{post.category}</p>
                  <h3 style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.01em", color: "#0E0E0E", lineHeight: 1.3, marginBottom: "10px" }}>{post.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#7A7670" }}>{post.date} · {post.read} read</p>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                slug={slug}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            )}
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pagination                                                                */
/* -------------------------------------------------------------------------- */

function Pagination({
  slug,
  currentPage,
  totalPages,
}: {
  slug: string;
  currentPage: number;
  totalPages: number;
}) {
  const pageHref = (n: number) =>
    n === 1
      ? `/blog/category/${slug}`
      : `/blog/category/${slug}?page=${n}`;

  const pages = new Set<number>();
  pages.add(1);
  pages.add(totalPages);
  for (let p = currentPage - 1; p <= currentPage + 1; p++) {
    if (p >= 1 && p <= totalPages) pages.add(p);
  }
  const ordered = Array.from(pages).sort((a, b) => a - b);

  const withGaps: Array<number | "gap"> = [];
  ordered.forEach((p, i) => {
    if (i > 0 && p - ordered[i - 1] > 1) withGaps.push("gap");
    withGaps.push(p);
  });

  const baseBtn: CSSProperties = {
    minWidth: "40px",
    height: "40px",
    padding: "0 12px",
    borderRadius: "10px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.9rem",
    fontWeight: 600,
    textDecoration: "none",
    transition: "background 0.18s, color 0.18s, border-color 0.18s",
    border: "1px solid rgba(14,14,14,0.12)",
    color: "#0E0E0E",
    background: "#fff",
  };
  const activeBtn: CSSProperties = {
    ...baseBtn,
    background: "#0E0E0E",
    color: "#fff",
    borderColor: "#0E0E0E",
    cursor: "default",
  };
  const disabledBtn: CSSProperties = {
    ...baseBtn,
    opacity: 0.35,
    cursor: "not-allowed",
    pointerEvents: "none",
  };

  return (
    <nav
      aria-label="Category pagination"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        marginTop: "64px",
        flexWrap: "wrap",
      }}
    >
      {currentPage > 1 ? (
        <Link href={pageHref(currentPage - 1)} style={baseBtn} aria-label="Previous page">
          ← Prev
        </Link>
      ) : (
        <span style={disabledBtn} aria-hidden="true">
          ← Prev
        </span>
      )}

      {withGaps.map((p, i) =>
        p === "gap" ? (
          <span key={`gap-${i}`} style={{ padding: "0 6px", color: "#7A7670" }}>
            …
          </span>
        ) : p === currentPage ? (
          <span key={p} style={activeBtn} aria-current="page">
            {p}
          </span>
        ) : (
          <Link key={p} href={pageHref(p)} style={baseBtn}>
            {p}
          </Link>
        ),
      )}

      {currentPage < totalPages ? (
        <Link href={pageHref(currentPage + 1)} style={baseBtn} aria-label="Next page">
          Next →
        </Link>
      ) : (
        <span style={disabledBtn} aria-hidden="true">
          Next →
        </span>
      )}
    </nav>
  );
}
