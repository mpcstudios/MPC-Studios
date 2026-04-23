"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export type BlogCardItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  read: string;
  bg: string;
};

export default function ResourcesPageClient({
  posts,
  featured,
  currentPage,
  totalPages,
}: {
  posts: BlogCardItem[];
  featured: BlogCardItem | null;
  currentPage: number;
  totalPages: number;
}) {
  const [email, setEmail] = useState("");

  return (
    <>
      <Cursor />
      <RevealInit />
      <Nav />

      <main>
        {/* Hero */}
        <section style={{ background: "#F4F3F1", padding: "200px 0 100px" }}>
          <div className="content-wrap">
            <div className="reveal" style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F77837", marginBottom: "20px" }}>
                Resources
              </p>
              <h1 style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "clamp(2.8rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.03em", color: "#0E0E0E", marginBottom: "24px" }}>
                Insights &amp; ideas from our team
              </h1>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.75, color: "#7A7670" }}>
                Practical advice on design, development, and growing your business online.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featured && (
          <section className="section-pad" style={{ background: "#fff" }}>
            <div className="content-wrap">
              <Link href={`/blog/${featured.slug}`} className="reveal" style={{ display: "block", textDecoration: "none", color: "inherit", cursor: "pointer", transition: "transform 0.3s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
              >
                <div style={{ width: "100%", aspectRatio: "16 / 7", background: featured.bg, borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", marginBottom: "28px" }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,107,43,0.1), transparent 60%)" }} />
                  <span style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontWeight: 800, fontSize: "2rem", color: "rgba(255,255,255,0.04)", letterSpacing: "0.1em" }}>FEATURED</span>
                </div>
                <p style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F77837", marginBottom: "12px" }}>
                  {featured.category}
                </p>
                <h2 style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0E0E0E", marginBottom: "12px", lineHeight: 1.2 }}>
                  {featured.title}
                </h2>
                <p style={{ fontSize: "0.85rem", color: "#7A7670" }}>{featured.date} · {featured.read} read</p>
              </Link>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section style={{ background: "#fff", padding: "0 0 120px" }}>
          <div className="content-wrap">
            <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ cursor: "pointer", transition: "transform 0.3s", textDecoration: "none", color: "inherit" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-6px)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
                >
                  <div style={{ width: "100%", aspectRatio: "16 / 10", background: post.bg, borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", marginBottom: "20px" }}>
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,107,43,0.08), transparent 60%)" }} />
                  </div>
                  <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#F77837", marginBottom: "10px" }}>{post.category}</p>
                  <h3 style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.01em", color: "#0E0E0E", lineHeight: 1.3, marginBottom: "10px" }}>{post.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#7A7670" }}>{post.date} · {post.read} read</p>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} />
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="section-pad" style={{ background: "#0E0E0E", textAlign: "center" }}>
          <div className="content-wrap">
            <div className="reveal">
              <p style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F77837", marginBottom: "20px" }}>
                Stay updated
              </p>
              <h2 style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "clamp(2.2rem, 4vw, 3.8rem)", fontWeight: 800, lineHeight: 1.18, letterSpacing: "-0.02em", color: "#fff", marginBottom: "16px" }}>
                Get insights delivered to your inbox
              </h2>
              <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.4)", marginBottom: "40px", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.7 }}>
                No spam. Just practical advice on design, development, and growing your business.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                style={{ display: "flex", justifyContent: "center", gap: "12px", maxWidth: "500px", margin: "0 auto" }}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ flex: 1, background: "#1a1a1a", border: "none", borderRadius: "100px", padding: "16px 24px", fontSize: "1rem", color: "#fff", outline: "none", fontFamily: "inherit" }}
                />
                <button
                  type="submit"
                  className="btn-gradient"
                  style={{ color: "#fff", border: "none", borderRadius: "100px", padding: "16px 28px", fontSize: "0.92rem", fontWeight: 600, cursor: "pointer", flexShrink: 0 }}
                >
                  Subscribe ↗
                </button>
              </form>
            </div>
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
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const pageHref = (n: number) => (n === 1 ? "/resources" : `/resources?page=${n}`);

  // Show: first, last, current, neighbors (±1), with ellipses
  const pages = new Set<number>();
  pages.add(1);
  pages.add(totalPages);
  for (let p = currentPage - 1; p <= currentPage + 1; p++) {
    if (p >= 1 && p <= totalPages) pages.add(p);
  }
  const ordered = Array.from(pages).sort((a, b) => a - b);

  // Insert "…" where there are gaps
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
      aria-label="Blog pagination"
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
