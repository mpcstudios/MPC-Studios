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
        {/* Hero */}
        <section style={{ background: "#fff", padding: "200px 0 100px" }}>
          <div className="content-wrap">
            <div className="reveal" style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F77837", marginBottom: "20px" }}>
                Our work
              </p>
              <h1 style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "clamp(2.8rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.03em", color: "#0E0E0E", marginBottom: "24px" }}>
                Projects we&apos;re proud of
              </h1>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.75, color: "#7A7670" }}>
                A selection of recent work across web design, brand identity, and digital strategy for clients who demand results.
              </p>
            </div>
          </div>
        </section>

        {/* Project rows — each project gets its own full-width editorial row */}
        <section className="section-pad" style={{ background: "#fff" }}>
          <div className="content-wrap">
            <div
              className="work-rows"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "120px",
              }}
            >
              {projects.map((p, i) => (
                <ProjectRow
                  key={p.slug}
                  project={p}
                  index={i + 1}
                  /* Alternate image side per row for editorial rhythm. */
                  imageSide={i % 2 === 0 ? "left" : "right"}
                />
              ))}
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
/*  ProjectRow — a single project as its own full-width editorial row         */
/* -------------------------------------------------------------------------- */

function ProjectRow({
  project,
  index,
  imageSide,
}: {
  project: WorkListItem;
  index: number;
  imageSide: "left" | "right";
}) {
  const indexLabel = String(index).padStart(2, "0");
  const imageOnLeft = imageSide === "left";

  return (
    <Link
      href={`/work/${project.slug}`}
      className="reveal work-row"
      data-hover
      style={{
        display: "grid",
        /* Image side is always the wider 1.4fr column so left/right
           rows render with identical image dimensions. */
        gridTemplateColumns: imageOnLeft
          ? "minmax(0, 1.4fr) minmax(0, 1fr)"
          : "minmax(0, 1fr) minmax(0, 1.4fr)",
        gap: "clamp(40px, 6vw, 100px)",
        alignItems: "center",
        cursor: "none",
        textDecoration: "none",
        color: "inherit",
      }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector<HTMLElement>("[data-image]");
        if (img) img.style.transform = "scale(1.04)";
        const arrow = e.currentTarget.querySelector<HTMLElement>("[data-arrow]");
        if (arrow) {
          arrow.style.background = "#F77837";
          arrow.style.color = "#fff";
          arrow.style.transform = "translateX(6px)";
        }
        const idx = e.currentTarget.querySelector<HTMLElement>("[data-index]");
        if (idx) idx.style.color = "#F77837";
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector<HTMLElement>("[data-image]");
        if (img) img.style.transform = "scale(1)";
        const arrow = e.currentTarget.querySelector<HTMLElement>("[data-arrow]");
        if (arrow) {
          arrow.style.background = "transparent";
          arrow.style.color = "#0E0E0E";
          arrow.style.transform = "translateX(0)";
        }
        const idx = e.currentTarget.querySelector<HTMLElement>("[data-index]");
        if (idx) idx.style.color = "rgba(14,14,14,0.08)";
      }}
    >
      {/* Image */}
      <div
        className="work-row-image"
        style={{
          gridColumn: imageOnLeft ? 1 : 2,
          gridRow: 1,
          width: "100%",
          aspectRatio: "5 / 4",
          borderRadius: "24px",
          overflow: "hidden",
          position: "relative",
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
            }}
          >
            {project.client
              .split(" ")
              .map((w) => w[0])
              .filter((c) => /[A-Za-z]/.test(c))
              .join("")}
          </span>
        )}
      </div>

      {/* Text column */}
      <div
        className="work-row-text"
        style={{
          gridColumn: imageOnLeft ? 2 : 1,
          gridRow: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          data-index
          style={{
            fontFamily:
              'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontSize: "clamp(2.4rem, 4vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "rgba(14,14,14,0.08)",
            lineHeight: 1,
            transition: "color 0.3s",
          }}
        >
          {indexLabel}
        </div>

        <p
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#F77837",
          }}
        >
          {project.client}
        </p>

        <h3
          style={{
            fontFamily:
              'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontSize: "clamp(1.5rem, 2.4vw, 2.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#0E0E0E",
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "8px",
            fontSize: "0.95rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "#0E0E0E",
          }}
        >
          View case study
          <span
            data-arrow
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "1.5px solid #0E0E0E",
              background: "transparent",
              color: "#0E0E0E",
              fontSize: "1.05rem",
              transition:
                "background 0.25s, color 0.25s, transform 0.25s",
            }}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

