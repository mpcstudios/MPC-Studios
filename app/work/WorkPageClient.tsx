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
  const leftProjects = projects.filter((_, i) => i % 2 === 0);
  const rightProjects = projects.filter((_, i) => i % 2 === 1);

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

        {/* Project Grid */}
        <section className="section-pad" style={{ background: "#fff" }}>
          <div className="content-wrap">
            <div className="work-grid-offset" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
                {leftProjects.map((p, i) => (
                  <ProjectCard key={p.slug} project={p} delay={i} />
                ))}
              </div>
              <div className="work-col-right" style={{ display: "flex", flexDirection: "column", gap: "64px", marginTop: "96px" }}>
                {rightProjects.map((p, i) => (
                  <ProjectCard key={p.slug} project={p} delay={i + 1} />
                ))}
              </div>
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

function ProjectCard({ project, delay }: { project: WorkListItem; delay: number }) {
  const delayClass = delay === 0 ? "reveal" : delay === 1 ? "reveal reveal-d1" : delay === 2 ? "reveal reveal-d2" : "reveal reveal-d3";
  return (
    <Link href={`/work/${project.slug}`} className={delayClass} data-hover style={{ overflow: "hidden", position: "relative", cursor: "none", transition: "transform 0.3s", textDecoration: "none", color: "inherit", display: "block" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        const arrow = e.currentTarget.querySelector<HTMLElement>("[data-arrow]");
        if (arrow) { arrow.style.background = "#F77837"; arrow.style.color = "#fff"; }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        const arrow = e.currentTarget.querySelector<HTMLElement>("[data-arrow]");
        if (arrow) { arrow.style.background = "rgba(255,255,255,0.9)"; arrow.style.color = "#0E0E0E"; }
      }}
    >
      <div style={{ width: "100%", aspectRatio: "16 / 10", background: project.coverImage ? `linear-gradient(180deg, rgba(13,26,46,0.15) 0%, rgba(13,26,46,0.45) 100%), url('${project.coverImage}') center top / cover no-repeat, ${project.bg}` : project.bg, borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        {!project.coverImage && (
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,107,43,0.08), transparent 60%)" }} />
        )}
        {!project.coverImage && (
          <span style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontWeight: 800, fontSize: "3rem", color: "rgba(255,255,255,0.05)", letterSpacing: "0.1em", position: "relative", zIndex: 1 }}>
            {project.client.split(" ").map((w) => w[0]).filter((c) => /[A-Za-z]/.test(c)).join("")}
          </span>
        )}
      </div>
      <div data-arrow style={{ position: "absolute", top: "16px", right: "16px", width: "38px", height: "38px", borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", color: "#0E0E0E", transition: "background 0.2s, color 0.2s", zIndex: 2 }}>↗</div>
      <div style={{ padding: "20px 4px" }}>
        <p style={{ fontSize: "1.125rem", fontWeight: 600, color: "#7A7670", marginBottom: "8px" }}>{project.client}</p>
        <p style={{ fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)', fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.01em", color: "#0E0E0E", lineHeight: 1.3 }}>{project.title}</p>
      </div>
    </Link>
  );
}
