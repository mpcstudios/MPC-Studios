export type ServiceIntroProps = {
  paragraphs: string[];
  eyebrow?: string;
  background?: string;
};

export default function ServiceIntro({
  paragraphs,
  eyebrow = "Overview",
  background = "#fff",
}: ServiceIntroProps) {
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
          <p
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#F77837",
            }}
          >
            {eyebrow}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.7,
                  color: "#0E0E0E",
                  maxWidth: "720px",
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
