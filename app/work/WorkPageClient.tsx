"use client";

import Link from "next/link";
import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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

/* -------------------------------------------------------------------------- */
/*  ProjectGridCard — image-led card with floating stat overlay               */
/* -------------------------------------------------------------------------- */

function ProjectGridCard({
  project,
  index,
}: {
  project: WorkListItem;
  index: number;
}) {
  /* Stagger reveal classes so cards fade up in sequence. */
  const revealClass =
    index === 0
      ? "reveal"
      : `reveal reveal-d${Math.min((index % 4) + 1, 4)}`;

  return (
    <Link
      href={`/work/${project.slug}`}
      className={revealClass}
      data-hover
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        cursor: "none",
        transition: "transform 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        const img = e.currentTarget.querySelector<HTMLElement>("[data-image]");
        if (img) img.style.transform = "scale(1.05)";
        const arrow = e.currentTarget.querySelector<HTMLElement>("[data-arrow]");
        if (arrow) {
          arrow.style.background = "#F77837";
          arrow.style.color = "#fff";
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        const img = e.currentTarget.querySelector<HTMLElement>("[data-image]");
        if (img) img.style.transform = "scale(1)";
        const arrow = e.currentTarget.querySelector<HTMLElement>("[data-arrow]");
        if (arrow) {
          arrow.style.background = "rgba(255,255,255,0.95)";
          arrow.style.color = "#0E0E0E";
        }
      }}
    >
      {/* Image with floating stat overlay */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4 / 3",
          borderRadius: "20px",
          overflow: "hidden",
          marginBottom: "24px",
        }}
      >
        <div
          data-image
          style={{
            position: "absolute",
            inset: 0,
            background: project.coverImage
              ? `linear-gradient(180deg, rgba(13,26,46,0.10) 0%, rgba(13,26,46,0.35) 100%), url('${project.coverImage}') center top / cover no-repeat, ${project.bg}`
              : project.bg,
            transition: "transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1)",
          }}
        />

        {!project.coverImage && (
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily:
                'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontWeight: 800,
              fontSize: "4rem",
              color: "rgba(255,255,255,0.06)",
              letterSpacing: "0.1em",
              pointerEvents: "none",
            }}
          >
            {project.client
              .split(" ")
              .map((w) => w[0])
              .filter((c) => /[A-Za-z]/.test(c))
              .join("")}
          </span>
        )}

        {/* Top-right corner arrow */}
        <div
          data-arrow
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.95)",
            color: "#0E0E0E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
            transition: "background 0.25s, color 0.25s",
            zIndex: 2,
          }}
        >
          ↗
        </div>

        {/* Floating stat card — bottom-left of image */}
        {project.stat && (
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              background: "#fff",
              borderRadius: "14px",
              padding: "12px 18px",
              display: "flex",
              alignItems: "baseline",
              gap: "12px",
              boxShadow: "0 10px 26px rgba(14,14,14,0.18)",
              zIndex: 2,
              maxWidth: "calc(100% - 40px)",
            }}
          >
            <span
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "clamp(1.5rem, 2.2vw, 1.9rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#F77837",
                lineHeight: 1,
              }}
            >
              {project.stat.value}
            </span>
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0E0E0E",
                lineHeight: 1.2,
              }}
            >
              {project.stat.label}
            </span>
          </div>
        )}
      </div>

      {/* Text below image */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "0 4px",
        }}
      >
        {project.industry && (
          <span
            style={{
              alignSelf: "flex-start",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "6px 12px",
              borderRadius: "100px",
              background: "rgba(247,120,55,0.10)",
              color: "#F77837",
              border: "1px solid rgba(247,120,55,0.25)",
            }}
          >
            {project.industry}
          </span>
        )}

        <p
          style={{
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "#7A7670",
            margin: 0,
          }}
        >
          {project.client}
        </p>

        <h3
          style={{
            fontFamily:
              'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontSize: "clamp(1.25rem, 1.8vw, 1.7rem)",
            fontWeight: 800,
            letterSpacing: "-0.01em",
            color: "#0E0E0E",
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          {project.title}
        </h3>

        {project.description && (
          <p
            style={{
              fontSize: "0.92rem",
              lineHeight: 1.55,
              color: "#7A7670",
              margin: 0,
            }}
          >
            {project.description}
          </p>
        )}
      </div>
    </Link>
  );
}

