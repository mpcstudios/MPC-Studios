"use client";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    num: "01",
    name: "Website Design & Development",
    description:
      "Custom-built websites engineered for performance, security, and conversion. No templates, no shortcuts — built from scratch for your business.",
    tags: ["Custom Design", "Next.js", "CMS"],
  },
  {
    num: "02",
    name: "Custom Software Applications",
    description:
      "Internal tools, portals, and full-stack applications built to solve the problems off-the-shelf software won't touch.",
    tags: ["Portals", "Full-Stack", "Integrations"],
  },
  {
    num: "03",
    name: "AI & Automation",
    description:
      "Intelligent workflows, chatbots, and data-driven tools that reduce manual work and give your team a competitive edge.",
    tags: ["Workflows", "Chatbots", "AI Tools"],
  },
  {
    num: "04",
    name: "Content Creation",
    description:
      "Photography, video, and branded content that tells your story and connects with your audience across every platform.",
    tags: ["Photography", "Video", "Branded Content"],
  },
  {
    num: "05",
    name: "Digital Marketing Strategy",
    description:
      "SEO, paid media, and growth strategies grounded in data. We focus on results that actually move the needle for your business.",
    tags: ["SEO", "Paid Media", "Analytics"],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="section-pad"
      style={{
        background: "#0E0E0E",
        color: "#fff",
      }}
    >
      <div className="content-wrap">
        {/* Header */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "60px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <p
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "16px",
              }}
            >
              <span style={{ color: "#F77837" }}>•</span> Our expertise
            </p>
            <h2
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.18,
                letterSpacing: "-0.02em",
                color: "#fff",
              }}
            >
              How we take your
              <br />
              business further
            </h2>
          </div>
          <Link
            href="#contact"
            className="reveal reveal-d1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#F77837",
              color: "#fff",
              fontSize: "0.92rem",
              fontWeight: 500,
              padding: "16px 34px",
              borderRadius: "100px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#FF8C55")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#F77837")
            }
          >
            Start a project ↗
          </Link>
        </div>

        {/* Service rows */}
        <div
          className="reveal reveal-d1"
          style={{ borderTop: "none" }}
        >
          {services.map((service, i) => (
            <ServiceRow
              key={service.num}
              service={service}
              isOpen={openIndex === i}
              onHoverIn={() => setOpenIndex(i)}
              onHoverOut={() => setOpenIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  isOpen,
  onHoverIn,
  onHoverOut,
}: {
  service: (typeof services)[0];
  isOpen: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
}) {
  return (
    <>
      {/* Dead zone above — not hoverable */}
      <div style={{ height: "8px", borderBottom: "1px solid rgba(255,255,255,0.08)" }} />
      <div
        data-hover
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
        style={{
          cursor: "none",
          transition: "padding-left 0.3s",
          paddingLeft: isOpen ? "16px" : "0",
        }}
      >
        {/* Top row — number, name, arrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "28px 0",
            paddingBottom: isOpen ? "0" : "28px",
            transition: "padding-bottom 0.3s",
          }}
        >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <span
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.22)",
              minWidth: "28px",
            }}
          >
            {service.num}
          </span>
          <span
            style={{
              fontFamily:
                'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: isOpen ? "#F77837" : "#fff",
              transition: "color 0.2s",
            }}
          >
            {service.name}
          </span>
        </div>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: isOpen
              ? "1px solid #F77837"
              : "1px solid rgba(255,255,255,0.15)",
            background: isOpen ? "#F77837" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
            color: isOpen ? "#fff" : "rgba(255,255,255,0.5)",
            flexShrink: 0,
            transition: "background 0.2s, color 0.2s, border-color 0.2s",
          }}
        >
          ↗
        </div>
      </div>

      {/* Accordion body — description + tags */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? "200px" : "0",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.4s ease, opacity 0.3s ease",
        }}
      >
        <div style={{ paddingLeft: "52px", paddingTop: "16px", paddingBottom: "32px" }}>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.5)",
              maxWidth: "560px",
              marginBottom: "16px",
            }}
          >
            {service.description}
          </p>
          <div
            style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
            className="service-tags-wrap"
          >
            {service.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "5px 14px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "100px",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
