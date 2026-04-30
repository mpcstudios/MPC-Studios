"use client";

import { useState } from "react";
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

export type CategoryRow = {
  label: string;
  slug: string;
  posts: BlogCardItem[];
  totalCount: number;
};

export default function ResourcesPageClient({
  rows,
  featured,
}: {
  rows: CategoryRow[];
  featured: BlogCardItem | null;
}) {
  const [email, setEmail] = useState("");

  return (
    <>
      <Cursor />
      <RevealInit />

      <main>
        {/* Hero */}
        <section className="resources-hero-pad" style={{ background: "#F4F3F1" }}>
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

        {/* Featured Post (across all categories) */}
        {featured && (
          <section className="section-pad" style={{ background: "#fff" }}>
            <div className="content-wrap">
              <Link
                href={`/blog/${featured.slug}`}
                className="reveal"
                style={{ display: "block", textDecoration: "none", color: "inherit", cursor: "pointer", transition: "transform 0.3s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 7",
                    background: featured.coverImage
                      ? `#0E0E0E url(${featured.coverImage}) center/cover no-repeat`
                      : featured.bg,
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    marginBottom: "28px",
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,107,43,0.1), transparent 60%)" }} />
                  {!featured.coverImage && (
                    <span style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontWeight: 800, fontSize: "2rem", color: "rgba(255,255,255,0.04)", letterSpacing: "0.1em" }}>FEATURED</span>
                  )}
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

        {/* Category Rows */}
        <section style={{ background: "#fff", padding: "0 0 120px" }}>
          <div className="content-wrap" style={{ display: "flex", flexDirection: "column", gap: "96px" }}>
            {rows.map((row) => (
              <CategoryRowSection key={row.slug} row={row} />
            ))}
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
                className="newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ background: "#1a1a1a", border: "none", borderRadius: "100px", padding: "16px 24px", fontSize: "1rem", color: "#fff", outline: "none", fontFamily: "inherit" }}
                />
                <button
                  type="submit"
                  className="btn-gradient"
                  style={{ color: "#fff", border: "none", borderRadius: "100px", padding: "16px 28px", fontSize: "0.92rem", fontWeight: 600, cursor: "pointer" }}
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
/*  Category row — header + 3 recent cards + View all button                  */
/* -------------------------------------------------------------------------- */

function CategoryRowSection({ row }: { row: CategoryRow }) {
  const categoryHref = `/resources/category/${row.slug}`;

  return (
    <div className="reveal">
      {/* Row header */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: "24px",
          marginBottom: "28px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#F77837",
              marginBottom: "8px",
            }}
          >
            Category
          </p>
          <h2
            style={{
              fontFamily:
                'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#0E0E0E",
              lineHeight: 1.2,
            }}
          >
            {row.label}
          </h2>
        </div>

        {row.totalCount > row.posts.length && (
          <Link
            href={categoryHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 22px",
              borderRadius: "100px",
              border: "1px solid rgba(14,14,14,0.14)",
              color: "#0E0E0E",
              fontSize: "0.88rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
              background: "#fff",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#0E0E0E";
              el.style.color = "#fff";
              el.style.borderColor = "#0E0E0E";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#fff";
              el.style.color = "#0E0E0E";
              el.style.borderColor = "rgba(14,14,14,0.14)";
            }}
          >
            View all ({row.totalCount}) →
          </Link>
        )}
      </div>

      {/* 3-card row */}
      <div className="resources-grid">
        {row.posts.map((post) => (
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
    </div>
  );
}
