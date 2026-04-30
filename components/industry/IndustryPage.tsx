"use client";

import Link from "next/link";
import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { IndustryConfig } from "@/content/industries/industries";
import type { WorkListItem, TestimonialListItem } from "@/app/work/WorkPageClient";

export type IndustryPageProps = {
  industry: IndustryConfig;
  projects: WorkListItem[];
  testimonials: TestimonialListItem[];
};

export default function IndustryPage({
  industry,
  projects,
  testimonials,
}: IndustryPageProps) {
  const hasProjects = projects.length > 0;
  const hasTestimonials = testimonials.length > 0;

  return (
    <>
      <Cursor />
      <RevealInit />

      <main>
        {/* ──────────────────  Hero  ────────────────── */}
        <section
          className="industry-hero-pad"
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
              top: "-160px",
              right: "-180px",
              width: "640px",
              height: "640px",
              background:
                "radial-gradient(circle, rgba(247,120,55,0.14) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <div
            className="content-wrap"
            style={{ position: "relative", zIndex: 1 }}
          >
            <Link
              href="/industries"
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
              ← All industries
            </Link>
            <div className="reveal reveal-d1" style={{ maxWidth: "880px" }}>
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
                {industry.hero.eyebrow}
              </p>
              <h1
                style={{
                  fontFamily:
                    'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "clamp(2.8rem, 5.4vw, 5rem)",
                  fontWeight: 800,
                  lineHeight: 1.06,
                  letterSpacing: "-0.03em",
                  color: "#0E0E0E",
                  marginBottom: "28px",
                }}
              >
                {industry.hero.title}
                {industry.hero.titleAccent && (
                  <>
                    {" "}
                    <span style={{ color: "#F77837" }}>
                      {industry.hero.titleAccent}
                    </span>
                  </>
                )}
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: 1.65,
                  color: "#7A7670",
                  maxWidth: "720px",
                  marginBottom: "36px",
                }}
              >
                {industry.hero.summary}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/contact"
                  className="btn-gradient"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    padding: "14px 26px",
                    borderRadius: "100px",
                    textDecoration: "none",
                  }}
                >
                  Start a project ↗
                </Link>
                {hasProjects && (
                  <a
                    href="#case-studies"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#0E0E0E",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      padding: "14px 26px",
                      borderRadius: "100px",
                      border: "1.5px solid rgba(14,14,14,0.16)",
                      textDecoration: "none",
                    }}
                  >
                    See {industry.navTitle.toLowerCase()} work
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────  Intro + Stats  ────────────────── */}
        <section className="section-pad" style={{ background: "#fff" }}>
          <div className="content-wrap">
            <div
              className="industry-intro-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
                gap: "clamp(40px, 6vw, 96px)",
                alignItems: "start",
              }}
            >
              <div className="reveal">
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#F77837",
                    marginBottom: "20px",
                  }}
                >
                  {industry.intro.eyebrow}
                </p>
                <h2
                  style={{
                    fontFamily:
                      'var(--font-display, "Bricolage Grotesque", sans-serif)',
                    fontSize: "clamp(2rem, 3.6vw, 3rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#0E0E0E",
                    lineHeight: 1.18,
                    marginBottom: "28px",
                  }}
                >
                  {industry.intro.headline}
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                    color: "#7A7670",
                  }}
                >
                  {industry.intro.body}
                </p>
              </div>

              <div
                className="reveal reveal-d1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {industry.stats.map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: "#F4F3F1",
                      borderRadius: "20px",
                      padding: "28px 32px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily:
                          'var(--font-display, "Bricolage Grotesque", sans-serif)',
                        fontSize: "clamp(2rem, 3.4vw, 2.8rem)",
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        color: "#F77837",
                        lineHeight: 1,
                        marginBottom: "8px",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.92rem",
                        fontWeight: 600,
                        color: "#0E0E0E",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────  Why MPC  ────────────────── */}
        <section
          className="section-pad"
          style={{ background: "#0E0E0E", color: "#fff" }}
        >
          <div className="content-wrap">
            <div className="reveal" style={{ marginBottom: "56px", maxWidth: "780px" }}>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#F77837",
                  marginBottom: "16px",
                }}
              >
                {industry.why.eyebrow}
              </p>
              <h2
                style={{
                  fontFamily:
                    'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "clamp(2rem, 3.6vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#fff",
                  lineHeight: 1.2,
                }}
              >
                {industry.why.headline}
              </h2>
            </div>
            <div
              className="industry-why-grid reveal reveal-d1"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
            >
              {industry.why.items.map((item, i) => (
                <div
                  key={item.title}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    padding: "32px",
                  }}
                >
                  <div
                    style={{
                      fontFamily:
                        'var(--font-display, "Bricolage Grotesque", sans-serif)',
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "#F77837",
                      letterSpacing: "-0.01em",
                      marginBottom: "16px",
                    }}
                  >
                    0{i + 1}
                  </div>
                  <h3
                    style={{
                      fontFamily:
                        'var(--font-display, "Bricolage Grotesque", sans-serif)',
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      letterSpacing: "-0.01em",
                      color: "#fff",
                      marginBottom: "12px",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.65,
                      color: "rgba(255,255,255,0.65)",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────  Case Studies  ────────────────── */}
        {hasProjects && (
          <section
            id="case-studies"
            className="section-pad"
            style={{ background: "#fff" }}
          >
            <div className="content-wrap">
              <div
                className="reveal"
                style={{ marginBottom: "64px", maxWidth: "780px" }}
              >
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#F77837",
                    marginBottom: "16px",
                  }}
                >
                  {industry.navTitle} case studies
                </p>
                <h2
                  style={{
                    fontFamily:
                      'var(--font-display, "Bricolage Grotesque", sans-serif)',
                    fontSize: "clamp(2rem, 3.6vw, 3rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#0E0E0E",
                    lineHeight: 1.2,
                  }}
                >
                  Recent {industry.navTitle.toLowerCase()} work
                </h2>
              </div>
              <div
                className="work-rows"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "100px",
                }}
              >
                {projects.map((p, i) => (
                  <ProjectRow
                    key={p.slug}
                    project={p}
                    imageSide={i % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ──────────────────  Testimonials  ────────────────── */}
        {hasTestimonials && (
          <section
            className="section-pad"
            style={{ background: "#F4F3F1" }}
          >
            <div className="content-wrap">
              <div
                className="reveal"
                style={{ marginBottom: "48px", maxWidth: "720px" }}
              >
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#F77837",
                    marginBottom: "16px",
                  }}
                >
                  Kind words
                </p>
                <h2
                  style={{
                    fontFamily:
                      'var(--font-display, "Bricolage Grotesque", sans-serif)',
                    fontSize: "clamp(2rem, 3.6vw, 3rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#0E0E0E",
                    lineHeight: 1.2,
                  }}
                >
                  What {industry.navTitle.toLowerCase()} clients say
                </h2>
              </div>
              <div
                className="reveal reveal-d1 industry-testimonial-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    testimonials.length > 1 ? "1fr 1fr" : "1fr",
                  gap: "24px",
                }}
              >
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    style={{
                      background: "#fff",
                      borderRadius: "20px",
                      padding: "36px",
                    }}
                  >
                    <div
                      style={{
                        color: "#F77837",
                        fontSize: "0.85rem",
                        letterSpacing: "2px",
                        marginBottom: "16px",
                      }}
                    >
                      ★★★★★
                    </div>
                    <p
                      style={{
                        fontSize: "1.125rem",
                        lineHeight: 1.7,
                        color: "#0E0E0E",
                        marginBottom: "24px",
                      }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: "#F77837",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: "0.8rem",
                        }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            color: "#0E0E0E",
                          }}
                        >
                          {t.name}
                        </div>
                        <div
                          style={{ fontSize: "0.8rem", color: "#7A7670" }}
                        >
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ──────────────────  CTA  ────────────────── */}
        <section
          className="section-pad"
          style={{ background: "#fff", textAlign: "center" }}
        >
          <div className="content-wrap">
            <div className="reveal" style={{ maxWidth: "720px", margin: "0 auto" }}>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#F77837",
                  marginBottom: "20px",
                }}
              >
                {industry.cta.eyebrow}
              </p>
              <h2
                style={{
                  fontFamily:
                    'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.18,
                  color: "#0E0E0E",
                  marginBottom: "20px",
                }}
              >
                {industry.cta.headline}
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  color: "#7A7670",
                  marginBottom: "32px",
                }}
              >
                {industry.cta.body}
              </p>
              <Link
                href="/contact"
                className="btn-gradient"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "16px 32px",
                  borderRadius: "100px",
                  textDecoration: "none",
                }}
              >
                Start a project ↗
              </Link>
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
/*  ProjectRow — copied from /work for now; ideal future home is shared util  */
/* -------------------------------------------------------------------------- */

function ProjectRow({
  project,
  imageSide,
}: {
  project: WorkListItem;
  imageSide: "left" | "right";
}) {
  const imageOnLeft = imageSide === "left";

  return (
    <Link
      href={`/work/${project.slug}`}
      className="reveal work-row"
      data-hover
      style={{
        display: "grid",
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
      }}
    >
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
      </div>

      <div
        className="work-row-text"
        style={{
          gridColumn: imageOnLeft ? 2 : 1,
          gridRow: 1,
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {project.industry && (
          <span
            style={{
              alignSelf: "flex-start",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "8px 14px",
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
            fontFamily:
              'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontSize: "1.1rem",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: "#0E0E0E",
            margin: 0,
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
            margin: 0,
          }}
        >
          {project.title}
        </h3>
        {project.description && (
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "#7A7670",
              margin: 0,
            }}
          >
            {project.description}
          </p>
        )}
        {project.stat && (
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "14px",
              marginTop: "4px",
              paddingTop: "18px",
              borderTop: "1px solid rgba(14,14,14,0.08)",
            }}
          >
            <span
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)",
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
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7A7670",
              }}
            >
              {project.stat.label}
            </span>
          </div>
        )}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "12px",
            fontSize: "0.92rem",
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
