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
            }}
          >
            {/* Replace src with client logo path when assets are ready */}
            <img
              src="/brand/Gray Logo.svg"
              alt={name}
              className="client-logo"
              style={{ height: "32px", width: "auto" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
