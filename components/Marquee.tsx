const items = [
  "Brand Identity",
  "Web Design",
  "AI & Automations",
  "Content Marketing",
  "Digital Strategy",
  "UX & Product Design",
  "SEO & Growth",
  "Website Development",
];

// Duplicate for seamless loop
const allItems = [...items, ...items];

export default function Marquee() {
  return (
    <div
      style={{
        background: "#0E0E0E",
        padding: "22px 0",
        overflow: "hidden",
      }}
    >
      <div className="anim-marquee" style={{ display: "flex" }}>
        {allItems.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "20px",
              padding: "0 32px",
              fontFamily:
                'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              flexShrink: 0,
            }}
          >
            {item}
            <span style={{ color: "#F77837", fontSize: "1.1rem" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
