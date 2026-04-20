"use client";

import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const services = [
  {
    name: "Website Design & Development",
    description:
      "Custom-built websites engineered for performance, security, and conversion. No templates, no shortcuts — built from scratch to match your business goals.",
  },
  {
    name: "Custom Software Applications",
    description:
      "Internal tools, portals, and full-stack applications built to solve the problems off-the-shelf software won't touch. Designed for scale and built to last.",
  },
  {
    name: "AI & Automation",
    description:
      "Intelligent workflows, chatbots, and data-driven tools that reduce manual work and give your team a competitive edge.",
  },
  {
    name: "Content Creation",
    description:
      "Photography, video, and branded content that tells your story and connects with your audience across every platform.",
  },
  {
    name: "Digital Marketing Strategy",
    description:
      "SEO, paid media, and growth strategies grounded in data. We focus on results that actually move the needle for your business.",
  },
];

const process = [
  { num: "01", title: "Discovery", desc: "We learn your business, goals, and audience inside out." },
  { num: "02", title: "Strategy", desc: "We map out a plan tailored to your specific objectives." },
  { num: "03", title: "Build", desc: "Our team brings the strategy to life with precision and craft." },
  { num: "04", title: "Launch", desc: "We deploy, test, and optimize for real-world performance." },
];

export default function ServicesPage() {
  return (
    <>
      <Cursor />
      <RevealInit />
      <Nav />

      <main>
        {/* Hero */}
        <section
          style={{
            background: "#F4F3F1",
            padding: "200px 0 100px",
          }}
        >
          <div className="content-wrap">
            <div className="reveal" style={{ maxWidth: "720px" }}>
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
                What we do
              </p>
              <h1
                style={{
                  fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.12,
                  letterSpacing: "-0.03em",
                  color: "#0E0E0E",
                  marginBottom: "24px",
                }}
              >
                Services built to grow your business
              </h1>
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.75,
                  color: "#7A7670",
                }}
              >
                We offer a full suite of digital services — from design and development to AI-powered automation. Every engagement is tailored to your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section
          className="section-pad"
          style={{ background: "#0E0E0E", color: "#fff" }}
        >
          <div className="content-wrap">
            <div
              className="reveal"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {services.map((service) => (
                <div
                  key={service.name}
                  data-hover
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr auto",
                    alignItems: "center",
                    gap: "40px",
                    padding: "32px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    cursor: "none",
                    transition: "padding-left 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.paddingLeft = "16px";
                    const nameEl = el.querySelector<HTMLElement>("[data-name]");
                    if (nameEl) nameEl.style.color = "#F77837";
                    const arrowEl = el.querySelector<HTMLElement>("[data-arrow]");
                    if (arrowEl) {
                      arrowEl.style.background = "#F77837";
                      arrowEl.style.borderColor = "#F77837";
                      arrowEl.style.color = "#fff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.paddingLeft = "0";
                    const nameEl = el.querySelector<HTMLElement>("[data-name]");
                    if (nameEl) nameEl.style.color = "#fff";
                    const arrowEl = el.querySelector<HTMLElement>("[data-arrow]");
                    if (arrowEl) {
                      arrowEl.style.background = "transparent";
                      arrowEl.style.borderColor = "rgba(255,255,255,0.15)";
                      arrowEl.style.color = "rgba(255,255,255,0.5)";
                    }
                  }}
                >
                  <span
                    data-name
                    style={{
                      fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      color: "#fff",
                      transition: "color 0.2s",
                    }}
                  >
                    {service.name}
                  </span>
                  <p
                    style={{
                      fontSize: "1.125rem",
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.6)",
                      maxWidth: "480px",
                    }}
                  >
                    {service.description}
                  </p>
                  <div
                    data-arrow
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.15)",
                      background: "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      color: "rgba(255,255,255,0.5)",
                      flexShrink: 0,
                      transition: "background 0.2s, color 0.2s, border-color 0.2s",
                    }}
                  >
                    ↗
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          className="section-pad"
          style={{ background: "#F4F3F1" }}
        >
          <div className="content-wrap">
            <div className="reveal" style={{ marginBottom: "60px" }}>
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
                Our process
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                  fontWeight: 800,
                  lineHeight: 1.18,
                  letterSpacing: "-0.02em",
                  color: "#0E0E0E",
                }}
              >
                How we work
              </h2>
            </div>

            <div
              className="reveal reveal-d1"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "24px",
              }}
            >
              {process.map(({ num, title, desc }) => (
                <div
                  key={num}
                  style={{
                    background: "#fff",
                    borderRadius: "20px",
                    padding: "32px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                      fontSize: "2.4rem",
                      fontWeight: 800,
                      color: "#F77837",
                      lineHeight: 1.2,
                      marginBottom: "12px",
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#0E0E0E",
                      marginBottom: "10px",
                    }}
                  >
                    {title}
                  </div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: "#7A7670",
                    }}
                  >
                    {desc}
                  </p>
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
