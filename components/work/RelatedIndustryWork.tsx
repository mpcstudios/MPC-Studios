"use client";

import Link from "next/link";
import type { ProjectGridCardData } from "./ProjectGridCard";

/**
 * Bottom-of-page section on a /work/[slug] case study that surfaces
 * other projects in the same industry, with a CTA back to the matching
 * /industries/<slug> landing page.
 *
 * Compact text-led cards (no large thumbnail) — visitors have just
 * finished a case study, so this section is meant to nudge laterally
 * without competing visually with the body content above it.
 *
 * Not rendered when there are no other projects in the industry.
 */
export default function RelatedIndustryWork({
  industryLabel,
  industrySlug,
  projects,
}: {
  industryLabel: string;
  industrySlug: string | null;
  projects: ProjectGridCardData[];
}) {
  if (projects.length === 0) return null;

  const industryHref = industrySlug ? `/industries/${industrySlug}` : "/work";
  const ctaLabel = industrySlug
    ? `View all ${industryLabel.toLowerCase()} work →`
    : "View all work →";

  return (
    <section style={{ background: "#F4F3F1", padding: "80px 0" }}>
      <div className="content-wrap">
        {/* Header row */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "32px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#F77837",
                marginBottom: "10px",
              }}
            >
              More {industryLabel.toLowerCase()} work
            </p>
            <h2
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                fontWeight: 800,
                lineHeight: 1.18,
                letterSpacing: "-0.02em",
                color: "#0E0E0E",
                margin: 0,
              }}
            >
              Other {industryLabel.toLowerCase()} projects
            </h2>
          </div>
          <Link
            href={industryHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "transparent",
              color: "#0E0E0E",
              fontSize: "0.88rem",
              fontWeight: 600,
              padding: "12px 22px",
              borderRadius: "100px",
              textDecoration: "none",
              border: "1.5px solid rgba(14,14,14,0.18)",
              transition: "background 0.25s, color 0.25s, border-color 0.25s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#0E0E0E";
              el.style.color = "#fff";
              el.style.borderColor = "#0E0E0E";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "#0E0E0E";
              el.style.borderColor = "rgba(14,14,14,0.18)";
            }}
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Compact text-led cards */}
        <div
          className="related-work-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: "16px",
            alignItems: "stretch",
          }}
        >
          {projects.map((p) => (
            <RelatedCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedCard({ project }: { project: ProjectGridCardData }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-hover
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "24px 26px",
        background: "#fff",
        borderRadius: "16px",
        textDecoration: "none",
        color: "inherit",
        cursor: "none",
        border: "1px solid rgba(14,14,14,0.06)",
        transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-3px)";
        el.style.borderColor = "rgba(247,120,55,0.5)";
        el.style.boxShadow = "0 14px 30px -18px rgba(14,14,14,0.18)";
        const arrow =
          e.currentTarget.querySelector<HTMLElement>("[data-arrow]");
        if (arrow) arrow.style.transform = "translateX(4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "rgba(14,14,14,0.06)";
        el.style.boxShadow = "none";
        const arrow =
          e.currentTarget.querySelector<HTMLElement>("[data-arrow]");
        if (arrow) arrow.style.transform = "translateX(0)";
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#7A7670",
          }}
        >
          {project.client}
        </span>
        <span
          data-arrow
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#F77837",
            fontSize: "1.05rem",
            transition: "transform 0.25s",
          }}
        >
          →
        </span>
      </div>
      <h3
        style={{
          fontFamily:
            'var(--font-display, "Bricolage Grotesque", sans-serif)',
          fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
          fontWeight: 800,
          letterSpacing: "-0.01em",
          color: "#0E0E0E",
          lineHeight: 1.3,
          margin: 0,
        }}
      >
        {project.title}
      </h3>
      {project.description && (
        <p
          style={{
            fontSize: "0.85rem",
            lineHeight: 1.55,
            color: "#7A7670",
            margin: 0,
          }}
        >
          {project.description}
        </p>
      )}
    </Link>
  );
}
