"use client";
const logos = [
  { name: "First National Bank", abbr: "FNB" },
  { name: "Comerica", abbr: "CMA" },
  { name: "Haynes Boone", abbr: "HB" },
  { name: "Thompson & Knight", abbr: "T&K" },
  { name: "Turner Construction", abbr: "TCO" },
  { name: "Hensel Phelps", abbr: "HP" },
];

export default function ClientLogos() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "72px 48px",
        borderBottom: "1px solid #E8E6E2",
      }}
    >
      <p
        style={{
          fontSize: "0.78rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "#7A7670",
          textAlign: "center",
          marginBottom: "48px",
        }}
      >
        Trusted by leading businesses across Texas
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "56px",
          flexWrap: "wrap",
        }}
      >
        {logos.map(({ name, abbr }) => (
          <div
            key={name}
            data-hover
            title={name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              opacity: 0.35,
              transition: "opacity 0.25s",
              cursor: "none",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.35")
            }
          >
            {/* Logo placeholder — replace with <Image> when assets are ready */}
            <div
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "1.05rem",
                fontWeight: 800,
                letterSpacing: "0.04em",
                color: "#0E0E0E",
                textTransform: "uppercase",
              }}
            >
              {abbr}
            </div>
            <div
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7A7670",
                textAlign: "center",
                maxWidth: "80px",
              }}
            >
              {name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
