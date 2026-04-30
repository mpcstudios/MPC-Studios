import { notFound } from "next/navigation";
import Link from "next/link";
import client from "@/tina/__generated__/databaseClient";
import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ProjectBody from "./ProjectBody";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let res;
  try {
    res = await client.queries.project({
      relativePath: `${slug}.mdx`,
    });
  } catch {
    notFound();
  }

  const project = res.data.project;

  return (
    <>
      <Cursor />
      <RevealInit />

      <main>
        <section style={{ background: "#fff", padding: "200px 0 80px" }}>
          <div className="content-wrap" style={{ maxWidth: "900px" }}>
            <Link
              href="/work"
              style={{
                fontSize: "0.85rem",
                color: "#7A7670",
                textDecoration: "none",
                marginBottom: "32px",
                display: "inline-block",
              }}
            >
              ← All work
            </Link>
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
              {project.client}
              {project.industry ? ` · ${project.industry}` : ""}
            </p>
            <h1
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.14,
                letterSpacing: "-0.02em",
                color: "#0E0E0E",
                marginBottom: "24px",
              }}
            >
              {project.title}
            </h1>
            {project.description && (
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.75,
                  color: "#7A7670",
                  marginBottom: "40px",
                }}
              >
                {project.description}
              </p>
            )}
            <div
              className="project-hero-card"
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                background: project.coverImage
                  ? `linear-gradient(180deg, rgba(13,26,46,0.55) 0%, rgba(13,26,46,0.78) 55%, rgba(13,26,46,0.94) 100%), url('${project.coverImage}') center top / cover no-repeat, ${project.bg ?? "#0E0E0E"}`
                  : `radial-gradient(120% 90% at 85% 15%, rgba(247,120,55,0.18), transparent 55%), radial-gradient(90% 80% at 10% 110%, rgba(255,255,255,0.06), transparent 60%), ${project.bg ?? "#0E0E0E"}`,
                borderRadius: "20px",
                marginBottom: "60px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-end",
                padding: "clamp(28px, 4vw, 48px)",
                boxShadow: "0 30px 80px -40px rgba(14,14,14,0.45)",
              }}
            >
              {project.heroLabel && (
                <span
                  style={{
                    position: "absolute",
                    top: "clamp(24px, 3vw, 36px)",
                    left: "clamp(28px, 4vw, 48px)",
                    fontFamily:
                      'var(--font-display, "Bricolage Grotesque", sans-serif)',
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#F77837",
                  }}
                >
                  {project.heroLabel}
                </span>
              )}
              {project.monogram && (
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingRight: "clamp(28px, 6vw, 80px)",
                    fontFamily:
                      'var(--font-display, "Bricolage Grotesque", sans-serif)',
                    fontSize: "clamp(7rem, 22vw, 18rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.06em",
                    lineHeight: 0.85,
                    color: "rgba(255,255,255,0.06)",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {project.monogram}
                </div>
              )}
              {project.stats && project.stats.length > 0 && (
                <div
                  style={{
                    position: "relative",
                    display: "grid",
                    gridTemplateColumns: `repeat(${project.stats.length}, minmax(0, auto))`,
                    gap: "clamp(24px, 5vw, 64px)",
                    color: "#fff",
                  }}
                >
                  {project.stats.map((stat, i) =>
                    stat ? (
                      <div key={i}>
                        <div
                          style={{
                            fontFamily:
                              'var(--font-display, "Bricolage Grotesque", sans-serif)',
                            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                            fontWeight: 800,
                            letterSpacing: "-0.02em",
                            lineHeight: 1,
                          }}
                        >
                          {stat.value}
                        </div>
                        <div
                          style={{
                            fontSize: "0.78rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.65)",
                            marginTop: "8px",
                          }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
              )}
            </div>
            {project.body && (
              <div
                className="prose"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "#2a2a2a",
                }}
              >
                <ProjectBody body={project.body} />
              </div>
            )}
            {project.url && (
              <p style={{ marginTop: "40px" }}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#F77837", fontWeight: 600 }}
                >
                  Visit live site ↗
                </a>
              </p>
            )}
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
