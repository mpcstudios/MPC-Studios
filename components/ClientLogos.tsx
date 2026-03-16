"use client";

const clients = [
  "Lone Star Roofing",
  "Austin Wellness Co.",
  "TechFlow Solutions",
  "Houston Realty Group",
  "DFW Legal Partners",
  "Bluebonnet Brands",
];

// Duplicate for seamless loop
const allLogos = [...clients, ...clients];

export default function ClientLogos() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "48px 0",
        borderBottom: "1px solid #E8E6E2",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          fontSize: "0.78rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "#ccc",
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        Trusted by great companies
      </p>

      <div className="logo-marquee-track">
        {allLogos.map((name, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 48px",
              flexShrink: 0,
              opacity: 0.25,
              transition: "opacity 0.3s ease",
              cursor: "default",
              fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontWeight: 800,
              fontSize: "0.95rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#0E0E0E",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.25")}
          >
            {/* Swap this div for an <img> once logo files are in /public/brand/ */}
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
