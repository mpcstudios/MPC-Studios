export type ServiceIndustriesProps = {
  items: string[];
  eyebrow?: string;
  heading?: string;
  background?: string;
};

export default function ServiceIndustries({
  items,
  eyebrow = "Who it's for",
  heading = "Industries we know well.",
  background = "#F4F3F1",
}: ServiceIndustriesProps) {
  return (
    <section className="section-pad" style={{ background }}>
      <div className="content-wrap">
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "60px",
            alignItems: "start",
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
              {eyebrow}
            </p>
            <h2
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "#0E0E0E",
              }}
            >
              {heading}
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {items.map((i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "#fff",
                  color: "#0E0E0E",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  padding: "12px 20px",
                  borderRadius: "100px",
                }}
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
