"use client";
import Link from "next/link";

const services = [
  {
    num: "01",
    name: "Website Design & Development",
    tags: ["Custom Design", "Next.js", "CMS"],
  },
  {
    num: "02",
    name: "Brand Identity",
    tags: ["Logo", "Guidelines", "Collateral"],
  },
  {
    num: "03",
    name: "Content Marketing",
    tags: ["Strategy", "Copywriting", "SEO"],
  },
  {
    num: "04",
    name: "AI & Automations",
    tags: ["Workflows", "Integrations", "Chatbots"],
  },
  {
    num: "05",
    name: "SEO & Growth",
    tags: ["Technical SEO", "Analytics", "Paid Ads"],
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
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        {services.map(({ num, name, tags }) => (
          <ServiceRow key={num} num={num} name={name} tags={tags} />
        ))}
      </div>
    </section>
  );
}

function ServiceRow({
  num,
  name,
  tags,
}: {
  num: string;
  name: string;
  tags: string[];
}) {
  return (
    <div
      data-hover
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "32px 0",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        transition: "padding-left 0.25s",
        cursor: "none",
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
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <span
          style={{
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.22)",
            minWidth: "28px",
          }}
        >
          {num}
        </span>
        <span
          data-name
          style={{
            fontFamily:
              'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            color: "#fff",
            transition: "color 0.2s",
          }}
        >
          {name}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
          className="service-tags-wrap"
        >
          {tags.map((tag) => (
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
        <div
          data-arrow
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.15)",
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
    </div>
  );
}
