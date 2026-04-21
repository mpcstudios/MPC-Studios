"use client";

import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const stats = [
  { n: "28", title: "Years in Business", desc: "Founded in 1998 in Harlingen, Texas. Deep roots in the Rio Grande Valley, serving clients nationwide." },
  { n: "6", title: "Dedicated People", desc: "A tight-knit crew of designers, developers, and strategists who know each other\u2019s strengths." },
  { n: "100%", title: "Texas-Based", desc: "Every line of code written in the Rio Grande Valley. Local presence, national reach." },
  { n: "0", title: "Shortcuts Taken", desc: "We take on the projects other agencies won\u2019t \u2014 compliance, legacy migrations, custom integrations." },
];

const values = [
  { title: "Craft over shortcuts", desc: "We take the time to build things right. No templates, no cookie-cutter solutions." },
  { title: "Partnerships, not transactions", desc: "We invest in long-term relationships. Your success is our success." },
  { title: "Results you can measure", desc: "Every decision is grounded in data. We focus on outcomes that matter." },
];

const team = [
  { initials: "DW", name: "David Watkins", role: "Owner" },
  { initials: "DW", name: "David Winters", role: "General Manager" },
  { initials: "KH", name: "Kate Hurry", role: "Creative Director" },
  { initials: "SC", name: "Sean Clarke", role: "Application Developer" },
  { initials: "JS", name: "Jen Sanchez", role: "Office Manager" },
  { initials: "SY", name: "Sal Yanez", role: "Project Manager" },
];

export default function AboutPage() {
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
                About us
              </p>
              <h1 style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "clamp(2.8rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.03em", color: "#0E0E0E", marginBottom: "28px" }}>
                A studio that cares about your business &amp; results
              </h1>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.75, color: "#7A7670", marginBottom: "20px" }}>
                Founded in 1998, MPC Studios is a digital agency based in Harlingen, Texas. For 28 years we&apos;ve designed and built websites, applications, and digital solutions for businesses across the United States — with deep roots in the Rio Grande Valley.
              </p>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.75, color: "#7A7670" }}>
                We believe great design should drive real outcomes. Every project is crafted with both beauty and business goals in mind.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-pad" style={{ background: "#fff" }}>
          <div className="content-wrap">
            <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
              {stats.map(({ n, title, desc }) => (
                <div key={title} style={{ background: "#F4F3F1", borderRadius: "20px", padding: "28px" }}>
                  <div style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "2.4rem", fontWeight: 800, color: "#F77837", lineHeight: 1.2, marginBottom: "8px" }}>{n}</div>
                  <div style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "1.125rem", fontWeight: 700, color: "#0E0E0E", marginBottom: "8px" }}>{title}</div>
                  <div style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "#7A7670" }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-pad" style={{ background: "#0E0E0E", color: "#fff" }}>
          <div className="content-wrap">
            <div className="reveal" style={{ marginBottom: "60px" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F77837", marginBottom: "16px" }}>
                Our values
              </p>
              <h2 style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "clamp(2.2rem, 4vw, 3.8rem)", fontWeight: 800, lineHeight: 1.18, letterSpacing: "-0.02em", color: "#fff" }}>
                What drives us
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {values.map(({ title, desc }) => (
                <div key={title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "36px" }}>
                  <h3 style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>{title}</h3>
                  <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-pad" style={{ background: "#F4F3F1" }}>
          <div className="content-wrap">
            <div className="reveal" style={{ marginBottom: "60px" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F77837", marginBottom: "16px" }}>
                The team
              </p>
              <h2 style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "clamp(2.2rem, 4vw, 3.8rem)", fontWeight: 800, lineHeight: 1.18, letterSpacing: "-0.02em", color: "#0E0E0E" }}>
                The people behind MPC
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {team.map(({ initials, name, role }) => (
                <div key={name} style={{ background: "#fff", borderRadius: "20px", padding: "36px", textAlign: "center", transition: "transform 0.25s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-4px)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
                >
                  <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#0E0E0E", display: "flex", alignItems: "center", justifyContent: "center", color: "#F77837", fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontWeight: 800, fontSize: "1.4rem", margin: "0 auto 20px" }}>{initials}</div>
                  <div style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "1.2rem", fontWeight: 700, color: "#0E0E0E", marginBottom: "6px" }}>{name}</div>
                  <div style={{ fontSize: "0.9rem", color: "#7A7670" }}>{role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
