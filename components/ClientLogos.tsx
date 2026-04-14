"use client";

const logos = [
  "/brand/client-logos/TNB-Navy_New-Logo-01.png",
  "/brand/client-logos/bentley-&-eckelkamp-pllc-logo-full-color-rgb.svg",
  "/brand/client-logos/dwilson-logo.svg",
  "/brand/client-logos/logo.png",
  "/brand/client-logos/Boy and Girls Club Pharr.png",
  "/brand/client-logos/CMOB Logo.svg",
  "/brand/client-logos/FCB Logos-01.svg",
  "/brand/client-logos/TRB-Secondary_TM_Full-Color_v2.png",
  "/brand/client-logos/University_of_Texas_at_Austin_logo.svg.png",
  "/brand/client-logos/Yale_University_logo.svg",
  "/brand/client-logos/images (7).svg",
];

export default function ClientLogos() {
  return (
    <section
      style={{
        background: "#fff",
        paddingBottom: "60px",
      }}
    >
      <div className="content-wrap" style={{ padding: "0 48px" }}>
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "none",
            marginTop: "40px",
          }}
        >
          {logos.map((src, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px 24px",
                borderBottom: i < logos.length - (logos.length % 4 || 4) ? "1px solid #E8E6E2" : "none",
                borderRight: (i + 1) % 4 !== 0 ? "1px solid #E8E6E2" : "none",
                cursor: "default",
              }}
            >
              <img
                className="client-logo"
                src={src}
                alt=""
                style={{
                  height: "50px",
                  width: "auto",
                  maxWidth: "160px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
