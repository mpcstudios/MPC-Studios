"use client";
import Link from "next/link";

const projects = [
  {
    id: 1,
    client: "Lone Star Capital",
    title: "Digital rebrand for a Texas private equity firm",
    category: "Brand Identity · Web Design",
    bg: "#0d1a2e",
  },
  {
    id: 2,
    client: "Harrington Law Group",
    title: "Authority-first website for a regional law practice",
    category: "Web Design · Content Marketing",
    bg: "#1a0e08",
  },
  {
    id: 3,
    client: "Summit Build Co.",
    title: "High-performance site for a construction firm",
    category: "Web Design · SEO",
    bg: "#0a1a10",
  },
  {
    id: 4,
    client: "Meridian Bank",
    title: "AI-driven lead generation system and full rebrand",
    category: "AI & Automations · Brand Identity",
    bg: "#140820",
  },
  {
    id: 5,
    client: "Apex Ventures",
    title: "Growth-focused website for a venture capital firm",
    category: "Web Design · Digital Strategy",
    bg: "#1a1a0a",
  },
  {
    id: 6,
    client: "Bluebonnet Brands",
    title: "E-commerce platform and brand identity refresh",
    category: "Brand Identity · Web Development",
    bg: "#0e0a1a",
  },
];

const leftProjects = projects.filter((_, i) => i % 2 === 0);
const rightProjects = projects.filter((_, i) => i % 2 === 1);

export default function Work() {
  return (
    <section
      id="work"
      className="section-pad"
      style={{ background: "#fff" }}
    >
      <div className="content-wrap">
        {/* Header */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "64px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: "16px" }}>
              Selected work
            </p>
            <h2
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.18,
                letterSpacing: "-0.02em",
                color: "#0E0E0E",
              }}
            >
              Projects we&apos;re
              <br />
              proud of
            </h2>
          </div>
          <Link
            href="#"
            className="reveal reveal-d1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#0E0E0E",
              color: "#fff",
              fontSize: "0.92rem",
              fontWeight: 500,
              padding: "14px 28px",
              borderRadius: "100px",
              textDecoration: "none",
              border: "2px solid #0E0E0E",
              transition: "background 0.25s, border-color 0.25s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#F77837";
              el.style.borderColor = "#F77837";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#0E0E0E";
              el.style.borderColor = "#0E0E0E";
            }}
          >
            See all work ↗
          </Link>
        </div>

        {/* Offset grid */}
        <div
          className="work-grid-offset"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
            {leftProjects.map((p, i) => (
              <WorkCard key={p.id} project={p} delay={i} />
            ))}
          </div>

          {/* Right column — offset downward */}
          <div
            className="work-col-right"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "64px",
              marginTop: "96px",
            }}
          >
            {rightProjects.map((p, i) => (
              <WorkCard key={p.id} project={p} delay={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  project,
  delay,
}: {
  project: (typeof projects)[0];
  delay: number;
}) {
  const delayClass =
    delay === 0
      ? "reveal"
      : delay === 1
      ? "reveal reveal-d1"
      : delay === 2
      ? "reveal reveal-d2"
      : "reveal reveal-d3";

  return (
    <div
      className={delayClass}
      data-hover
      style={{
        overflow: "hidden",
        background: "transparent",
        position: "relative",
        cursor: "none",
        transition: "transform 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        const arrow = e.currentTarget.querySelector<HTMLElement>("[data-arrow]");
        if (arrow) {
          arrow.style.background = "#F77837";
          arrow.style.color = "#fff";
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        const arrow = e.currentTarget.querySelector<HTMLElement>("[data-arrow]");
        if (arrow) {
          arrow.style.background = "rgba(255,255,255,0.9)";
          arrow.style.color = "#0E0E0E";
        }
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 10",
          background: project.bg,
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(255,107,43,0.08), transparent 60%)",
          }}
        />
        <span
          style={{
            fontFamily:
              'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontWeight: 800,
            fontSize: "3rem",
            color: "rgba(255,255,255,0.05)",
            letterSpacing: "0.1em",
            position: "relative",
            zIndex: 1,
          }}
        >
          {project.client
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </span>
      </div>

      {/* Arrow button */}
      <div
        data-arrow
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.125rem",
          color: "#0E0E0E",
          transition: "background 0.2s, color 0.2s",
          zIndex: 2,
        }}
      >
        ↗
      </div>

      {/* Card body */}
      <div style={{ padding: "20px 4px" }}>
        <p
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
            color: "#7A7670",
            marginBottom: "8px",
          }}
        >
          {project.client}
        </p>
        <p
          style={{
            fontFamily:
              'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontSize: "1.5rem",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: "#0E0E0E",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </p>
      </div>
    </div>
  );
}
