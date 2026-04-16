"use client";

const logos = [
  "/brand/client-logos/6998f24df708d6664b9cd170_Wordmark_Austin_Red-p-800.png",
  "/brand/client-logos/Boy and Girls Club Pharr.png",
  "/brand/client-logos/CMOB Logo.svg",
  "/brand/client-logos/FCB Logos-01.svg",
  "/brand/client-logos/FINAL-UT-Logo.png",
  "/brand/client-logos/Adams-Graham.png",
  "/brand/client-logos/Final Numeric Engineering Logo.svg",
  "/brand/client-logos/Yale_University_logo.svg",
  "/brand/client-logos/New-Logo-No-Background.webp",
  "/brand/client-logos/TNB-Navy_New-Logo-01.png",
  "/brand/client-logos/TRB-Secondary_TM_Full-Color_v2.png",
  "/brand/client-logos/Transparent CCRMA Logo-01.png",
  "/brand/client-logos/Updated BMW Law Logo.png",
  "/brand/client-logos/Foremost-Paving.png",
  "/brand/client-logos/bentley-&-eckelkamp-pllc-logo-full-color-rgb.svg",
  "/brand/client-logos/corso-logo-black.png",
  "/brand/client-logos/dwilson-logo.svg",
  "/brand/client-logos/sun_valley_aviation_logo.svg",
];

const COLS = 6;

export default function ClientLogos() {
  // Calculate which row is the last row
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
        {logos.map((src, i) => (
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
            <img
              className="client-logo"
              src={src}
              alt=""
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
