"use client";

import { useState } from "react";
import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const posts = [
  { title: "5 Signs Your Brand Identity Needs a Refresh", category: "Branding", date: "Mar 28, 2026", read: "5 min", bg: "#1a0e08" },
  { title: "How AI Automation Is Changing Small Business", category: "AI & Automation", date: "Mar 15, 2026", read: "7 min", bg: "#140820" },
  { title: "SEO in 2026: What Actually Moves the Needle", category: "Digital Marketing", date: "Mar 3, 2026", read: "6 min", bg: "#0a1a10" },
  { title: "The ROI of Professional Photography", category: "Content", date: "Feb 20, 2026", read: "4 min", bg: "#1a1a0a" },
  { title: "Custom Software vs. Off-the-Shelf", category: "Software", date: "Feb 8, 2026", read: "8 min", bg: "#0e0a1a" },
  { title: "Building Trust Online: Lessons from Banking & Legal", category: "Strategy", date: "Jan 25, 2026", read: "6 min", bg: "#0d1a2e" },
];

export default function ResourcesPage() {
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
        <section className="section-pad" style={{ background: "#fff" }}>
          <div className="content-wrap">
            <div className="reveal" style={{ cursor: "pointer", transition: "transform 0.3s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
            >
              <div style={{ width: "100%", aspectRatio: "16 / 7", background: "#0d1a2e", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", marginBottom: "28px" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,107,43,0.1), transparent 60%)" }} />
                <span style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontWeight: 800, fontSize: "2rem", color: "rgba(255,255,255,0.04)", letterSpacing: "0.1em" }}>FEATURED</span>
              </div>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F77837", marginBottom: "12px" }}>
                Web Design
              </p>
              <h2 style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0E0E0E", marginBottom: "12px", lineHeight: 1.2 }}>
                Why Your Business Needs a Custom Website in 2026
              </h2>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#7A7670", maxWidth: "700px", marginBottom: "12px" }}>
                Off-the-shelf templates can only take you so far. Here&apos;s why investing in a custom-built website pays for itself — and what to look for in a development partner.
              </p>
              <p style={{ fontSize: "0.85rem", color: "#7A7670" }}>April 10, 2026 · 10 min read</p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section style={{ background: "#fff", padding: "0 0 120px" }}>
          <div className="content-wrap">
            <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
              {posts.map((post) => (
                <div
                  key={post.title}
                  style={{ cursor: "pointer", transition: "transform 0.3s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-6px)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
                >
                  <div style={{ width: "100%", aspectRatio: "16 / 10", background: post.bg, borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", marginBottom: "20px" }}>
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,107,43,0.08), transparent 60%)" }} />
                  </div>
                  <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#F77837", marginBottom: "10px" }}>{post.category}</p>
                  <h3 style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.01em", color: "#0E0E0E", lineHeight: 1.3, marginBottom: "10px" }}>{post.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#7A7670" }}>{post.date} · {post.read} read</p>
                </div>
              ))}
            </div>
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
