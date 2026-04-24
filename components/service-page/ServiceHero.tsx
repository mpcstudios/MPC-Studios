import Link from "next/link";
import type { ReactNode } from "react";

export type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  summary: string;
  /** "All services" back link href. Defaults to /services. */
  backHref?: string;
  backLabel?: string;
  /** Optional visual rendered on the right half of the hero. */
  visual?: ReactNode;
};

export default function ServiceHero({
  eyebrow,
  title,
  titleAccent,
  summary,
  backHref = "/services",
  backLabel = "← All services",
  visual,
}: ServiceHeroProps) {
  const hasVisual = Boolean(visual);

  return (
    <section
      className="service-hero"
      style={{
        background: "#F4F3F1",
        padding: "200px 0 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-140px",
          right: "-160px",
          width: "620px",
          height: "620px",
          background:
            "radial-gradient(circle, rgba(247,120,55,0.14) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div className="content-wrap" style={{ position: "relative", zIndex: 1 }}>
        <Link
          href={backHref}
          className="reveal"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#7A7670",
            textDecoration: "none",
            marginBottom: "28px",
          }}
        >
          {backLabel}
        </Link>

        <div
          className="service-hero-grid"
          style={
            hasVisual
              ? {
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 11fr) minmax(0, 9fr)",
                  gap: "60px",
                  alignItems: "center",
                }
              : undefined
          }
        >
          <div className="reveal reveal-d1" style={{ maxWidth: "820px" }}>
            <p
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#F77837",
                marginBottom: "20px",
              }}
            >
              {eyebrow}
            </p>
            <h1
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "clamp(2.8rem, 5vw, 4.75rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#0E0E0E",
                marginBottom: "28px",
              }}
            >
              {title}
              {titleAccent && (
                <>
                  {" "}
                  <span style={{ color: "#F77837" }}>{titleAccent}</span>
                </>
              )}
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.6,
                color: "#7A7670",
                maxWidth: "680px",
              }}
            >
              {summary}
            </p>
          </div>

          {hasVisual && (
            <div
              className="service-hero-visual-wrap reveal reveal-d2"
              style={{ position: "relative" }}
            >
              {visual}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
