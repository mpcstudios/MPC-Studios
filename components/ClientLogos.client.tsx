"use client";

export type LogoItem = {
  src: string;
  alt: string;
};

const COLS = 6;

export default function ClientLogos({ logos }: { logos: LogoItem[] }) {
  const lastRowStart = Math.floor((logos.length - 1) / COLS) * COLS;

  return (
    <section
      style={{
        background: "#fff",
        paddingBottom: "60px",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          fontSize: "0.92rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "#999",
          textAlign: "center",
          padding: "48px 0 0",
          marginBottom: "0",
        }}
      >
        Trusted by great companies
      </p>

      {/* Grid bleeds past edges — overflow:hidden clips the first/last columns at ~75% */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          marginTop: "40px",
          marginLeft: "calc(-100% / 6 * 0.25)",
          marginRight: "calc(-100% / 6 * 0.25)",
        }}
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 24px",
              borderBottom: i < lastRowStart ? "1px solid #E8E6E2" : "none",
              borderRight: (i + 1) % COLS !== 0 ? "1px solid #E8E6E2" : "none",
              cursor: "default",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="client-logo"
              src={logo.src}
              alt={logo.alt}
              style={{
                height: "60px",
                width: "auto",
                maxWidth: "160px",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
