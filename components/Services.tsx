"use client";
import Link from "next/link";

const services = [
  {
    name: "Website Design & Development",
    slug: "website-design-development",
    description:
      "Custom-built websites engineered for performance, security, and conversion. No templates, no shortcuts — built from scratch to match your business goals.",
  },
  {
    name: "Custom Software Applications",
    slug: "custom-software",
    description:
      "Internal tools, portals, and full-stack applications built to solve the problems off-the-shelf software won't touch. Designed for scale and built to last.",
  },
  {
    name: "AI & Automation",
    slug: "ai-automation",
    description:
      "Intelligent workflows, chatbots, and data-driven tools that reduce manual work and give your team a competitive edge.",
  },
  {
    name: "Content Creation",
    slug: "content-creation",
    description:
      "Photography, video, and branded content that tells your story and connects with your audience across every platform.",
  },
  {
    name: "Digital Marketing Strategy",
    slug: "digital-marketing",
    description:
      "SEO, paid media, and growth strategies grounded in data. We focus on results that actually move the needle for your business.",
  },
];

export default function Services() {
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
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#F77837",
                marginBottom: "16px",
              }}
            >
              Our expertise
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
            href="/contact"
            className="reveal reveal-d1 btn-gradient"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              color: "#fff",
              fontSize: "0.92rem",
              fontWeight: 500,
              padding: "16px 34px",
              borderRadius: "100px",
              textDecoration: "none",
            }}
          >
            Start a project ↗
          </Link>
        </div>

        {/* Service rows */}
        <div
          className="reveal reveal-d1"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {services.map((service) => (
            <ServiceRow key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service }: { service: (typeof services)[0] }) {
  return (
    <Link
      data-hover
      href={`/services/${service.slug}`}
      className="service-row"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr auto",
        alignItems: "center",
        gap: "40px",
        padding: "32px 0",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        cursor: "none",
        textDecoration: "none",
        color: "inherit",
        transition: "padding-left 0.3s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.paddingLeft = "16px";
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
        const arrowEl = el.querySelector<HTMLElement>("[data-arrow]");
        if (arrowEl) {
          arrowEl.style.background = "transparent";
          arrowEl.style.borderColor = "rgba(255,255,255,0.15)";
          arrowEl.style.color = "rgba(255,255,255,0.5)";
        }
      }}
    >
      {/* Title */}
      <span
        data-name
        className="service-title"
        style={{
          fontFamily:
            'var(--font-display, "Bricolage Grotesque", sans-serif)',
          fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
        }}
      >
        {service.name}
      </span>

      {/* Description */}
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

      {/* Arrow */}
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
    </Link>
  );
}
