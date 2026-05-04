"use client";

import Link from "next/link";

export type ProjectGridCardData = {
  slug: string;
  client: string;
  title: string;
  bg: string;
  coverImage?: string;
  industry?: string;
  description?: string;
  stat?: { value: string; label: string };
};

/**
 * Image-led project card used on both the Work index (/work) and the
 * homepage Selected Work section. Renders a 4:3 cover image with a
 * floating stat overlay, corner arrow CTA, and metadata stacked below
 * (industry badge, client, title, services description). Hover lifts
 * the card, scales the image, and flips the corner arrow to brand
 * orange.
 */
export default function ProjectGridCard({
  project,
  index = 0,
}: {
  project: ProjectGridCardData;
  index?: number;
}) {
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
