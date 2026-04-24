export type ProcessStep = { num: string; title: string; desc: string };

export type ServiceProcessProps = {
  steps: ProcessStep[];
  eyebrow?: string;
  heading?: string;
  background?: string;
  cardBackground?: string;
};

export default function ServiceProcess({
  steps,
  eyebrow = "Our process",
  heading = "Four phases, every engagement.",
  background = "#fff",
  cardBackground = "#F4F3F1",
}: ServiceProcessProps) {
  return (
    <section className="section-pad" style={{ background }}>
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
            {eyebrow}
          </p>
          <h2
            style={{
              fontFamily:
                'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              fontWeight: 800,
              lineHeight: 1.18,
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
            gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
            gap: "24px",
          }}
        >
          {steps.map((p) => (
            <div
              key={p.num}
              style={{
                background: cardBackground,
                borderRadius: "20px",
                padding: "32px",
              }}
            >
              <div
                style={{
                  fontFamily:
                    'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "2.4rem",
                  fontWeight: 800,
                  color: "#F77837",
                  lineHeight: 1.2,
                  marginBottom: "12px",
                }}
              >
                {p.num}
              </div>
              <div
                style={{
                  fontFamily:
                    'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#0E0E0E",
                  marginBottom: "10px",
                }}
              >
                {p.title}
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "#7A7670",
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
