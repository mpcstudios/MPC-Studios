"use client";

import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ProjectGridCard from "@/components/work/ProjectGridCard";

export type WorkListItem = {
  slug: string;
  client: string;
  title: string;
  bg: string;
  coverImage?: string;
  industry?: string;
  description?: string;
  stat?: { value: string; label: string };
};

export type TestimonialListItem = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export default function WorkPageClient({
  projects,
  testimonials,
}: {
  projects: WorkListItem[];
  testimonials: TestimonialListItem[];
}) {

  return (
    <>
      <Cursor />
      <RevealInit />

      <main>
        {/* Hero — minimal, bold title only */}
        <section
          style={{ background: "#F4F3F1", padding: "200px 0 80px" }}
        >
          <div className="content-wrap">
            <h1
              className="reveal"
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "clamp(3rem, 7vw, 6rem)",
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
                color: "#0E0E0E",
                margin: 0,
              }}
            >
              Our work.
            </h1>
          </div>
        </section>

        {/* 2-column grid of project cards with floating stat overlays.
            Left and right columns are split so the right side can be
            offset downward, creating a staggered editorial rhythm. */}
        <section className="section-pad" style={{ background: "#fff" }}>
          <div className="content-wrap">
            <div
              className="work-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
                alignItems: "start",
              }}
            >
              <div
                className="work-col-left"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "64px",
                }}
              >
                {projects
                  .filter((_, i) => i % 2 === 0)
                  .map((p, i) => (
                    <ProjectGridCard
                      key={p.slug}
                      project={p}
                      index={i * 2}
                    />
                  ))}
              </div>
              <div
                className="work-col-right"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "64px",
                  marginTop: "96px",
                }}
              >
                {projects
                  .filter((_, i) => i % 2 === 1)
                  .map((p, i) => (
                    <ProjectGridCard
                      key={p.slug}
                      project={p}
                      index={i * 2 + 1}
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-pad" style={{ background: "#F4F3F1" }}>
          <div className="content-wrap">
            <div className="reveal" style={{ marginBottom: "48px" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F77837", marginBottom: "16px" }}>
                Kind words
              </p>
              <h2 style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "clamp(2.2rem, 4vw, 3.8rem)", fontWeight: 800, lineHeight: 1.18, letterSpacing: "-0.02em", color: "#0E0E0E" }}>
                What our clients say
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              {testimonials.map(({ quote, name, role, initials }) => (
                <div key={name} style={{ background: "#fff", borderRadius: "20px", padding: "36px", transition: "transform 0.25s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-4px)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
                >
                  <div style={{ color: "#F77837", fontSize: "0.85rem", letterSpacing: "2px", marginBottom: "16px" }}>★★★★★</div>
                  <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#7A7670", marginBottom: "24px" }}>&ldquo;{quote}&rdquo;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#F77837", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0 }}>{initials}</div>
                    <div>
                      <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#0E0E0E" }}>{name}</div>
                      <div style={{ fontSize: "0.8rem", color: "#7A7670" }}>{role}</div>
                    </div>
                  </div>
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

