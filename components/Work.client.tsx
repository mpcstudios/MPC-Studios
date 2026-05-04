"use client";
import Link from "next/link";
import ProjectGridCard, {
  type ProjectGridCardData,
} from "./work/ProjectGridCard";

export type WorkProject = ProjectGridCardData;

export default function Work({ projects }: { projects: WorkProject[] }) {
  const leftProjects = projects.filter((_, i) => i % 2 === 0);
  const rightProjects = projects.filter((_, i) => i % 2 === 1);
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
            href="/work"
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

        {/* Offset 2-column grid — same pattern as /work */}
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
            {leftProjects.map((p, i) => (
              <ProjectGridCard key={p.slug} project={p} index={i * 2} />
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
            {rightProjects.map((p, i) => (
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
  );
}
