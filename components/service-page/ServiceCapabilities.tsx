export type Capability = { title: string; desc: string };

export type ServiceCapabilitiesProps = {
  items: Capability[];
  eyebrow?: string;
  heading?: string;
  background?: string;
  cardBackground?: string;
  columns?: 2 | 3;
};

export default function ServiceCapabilities({
  items,
  eyebrow = "How we work",
  heading = "Built around the way your business actually runs.",
  background = "#F4F3F1",
  cardBackground = "#fff",
  columns = 3,
}: ServiceCapabilitiesProps) {
  return (
    <section className="section-pad" style={{ background }}>
      <div className="content-wrap">
        <div
          className="reveal"
          style={{ marginBottom: "50px", maxWidth: "720px" }}
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
            {eyebrow}
          </p>
          <h2
            style={{
              fontFamily:
                'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#0E0E0E",
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
            gap: "24px",
          }}
        >
          {items.map((c) => (
            <div
              key={c.title}
              style={{
                background: cardBackground,
                borderRadius: "20px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily:
                    'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#0E0E0E",
                  marginBottom: "10px",
                }}
              >
                {c.title}
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "#7A7670",
                }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
