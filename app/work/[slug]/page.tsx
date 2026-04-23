import { notFound } from "next/navigation";
import Link from "next/link";
import client from "@/tina/__generated__/databaseClient";
import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import Nav from "@/components/Nav";
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
      <Nav />

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
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                background: project.bg ?? "#0E0E0E",
                borderRadius: "20px",
                marginBottom: "60px",
              }}
            />
            {project.body && (
              <div
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
