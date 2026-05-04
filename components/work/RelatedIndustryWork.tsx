"use client";

import Link from "next/link";
import ProjectGridCard, {
  type ProjectGridCardData,
} from "./ProjectGridCard";

/**
 * Bottom-of-page section on a /work/[slug] case study that surfaces
 * other projects in the same industry, with a CTA back to the matching
 * /industries/<slug> landing page.
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
    <section
      style={{ background: "#F4F3F1", padding: "100px 0" }}
    >
      <div className="content-wrap">
        {/* Header row */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#F77837",
                marginBottom: "12px",
              }}
            >
              More {industryLabel.toLowerCase()} work
            </p>
            <h2
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
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
            {ctaLabel}
          </Link>
        </div>

        {/* Grid of related projects */}
        <div
          className="related-work-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              projects.length === 1
                ? "minmax(0, 1fr)"
                : "repeat(auto-fit, minmax(min(360px, 100%), 1fr))",
            gap: "32px",
            alignItems: "start",
          }}
        >
          {projects.map((p, i) => (
            <ProjectGridCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
