export type Deliverable = { title: string; desc: string };

export type ServiceDeliverablesProps = {
  items: Deliverable[];
  eyebrow?: string;
  heading?: string;
  columns?: 2 | 3 | 4;
};

export default function ServiceDeliverables({
  items,
  eyebrow = "What's included",
  heading = "Deliverables, not promises.",
  columns = 3,
}: ServiceDeliverablesProps) {
  return (
    <section
      className="section-pad service-deliverables"
      style={{ background: "#0E0E0E", color: "#fff" }}
    >
      <div className="content-wrap">
        <div className="reveal" style={{ marginBottom: "60px", maxWidth: "720px" }}>
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
            {eyebrow}
          </p>
          <h2
            style={{
              fontFamily:
                'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {heading}
          </h2>
        </div>

        <div
          className="reveal reveal-d1"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: "28px",
          }}
        >
          {items.map((d) => (
            <div
              key={d.title}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily:
                    'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "10px",
                }}
              >
                {d.title}
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
