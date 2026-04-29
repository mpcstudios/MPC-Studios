/**
 * Media gallery mock for the Content Creation hero visual.
 * A bento-style grid of colored "media" tiles — one with a play
 * triangle suggesting video — plus a floating accent metric.
 */
export type ServiceHeroGalleryProps = {
  accentLabel?: string;
  accentValue?: string;
  accentSubLabel?: string;
};

export default function ServiceHeroGallery({
  accentLabel = "Pieces / month",
  accentValue = "48",
  accentSubLabel = "Across every channel",
}: ServiceHeroGalleryProps) {
  const tileStyle = {
    borderRadius: "14px",
    overflow: "hidden",
    position: "relative" as const,
  };

  return (
    <div
      className="service-hero-visual"
      style={{ position: "relative", display: "inline-block" }}
    >
      {/* Gallery card */}
      <div
        className="anim-float1"
        style={{
          position: "relative",
          width: "440px",
          background: "#0E0E0E",
          borderRadius: "22px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
          padding: "18px",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "14px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.62rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "3px",
              }}
            >
              Content calendar
            </p>
            <p
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              April · published
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "4px",
            }}
          >
            {["Photo", "Video", "Blog"].map((t, i) => (
              <span
                key={t}
                style={{
                  fontSize: "0.56rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "4px 8px",
                  borderRadius: "100px",
                  background:
                    i === 0
                      ? "linear-gradient(135deg, #F77837, #ffc14f)"
                      : "rgba(255,255,255,0.08)",
                  color: i === 0 ? "#0E0E0E" : "rgba(255,255,255,0.6)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bento grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gridTemplateRows: "120px 80px",
            gap: "8px",
          }}
        >
          {/* Big tile — video feel */}
          <div
            style={{
              ...tileStyle,
              gridRow: "span 2",
              background:
                "linear-gradient(135deg, #F77837 0%, #fe6e64 55%, #ffc14f 100%)",
            }}
          >
            {/* Play button */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "rgba(14,14,14,0.35)",
                backdropFilter: "blur(4px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 0,
                  height: 0,
                  borderLeft: "10px solid #fff",
                  borderTop: "7px solid transparent",
                  borderBottom: "7px solid transparent",
                  marginLeft: "2px",
                }}
              />
            </div>
            {/* Duration badge */}
            <span
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: "#fff",
                background: "rgba(0,0,0,0.45)",
                padding: "3px 8px",
                borderRadius: "100px",
              }}
            >
              0:42
            </span>
          </div>

          {/* Top-right tile */}
          <div
            style={{
              ...tileStyle,
              background:
                "linear-gradient(135deg, #2a2a2a 0%, #3d3d3d 100%)",
            }}
          >
            {/* Image corner lines */}
            <div
              style={{
                position: "absolute",
                inset: "10px",
                border: "1px dashed rgba(255,255,255,0.2)",
                borderRadius: "8px",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: "8px",
                right: "10px",
                fontSize: "0.56rem",
                fontWeight: 700,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.12em",
              }}
            >
              1/6
            </span>
          </div>

          {/* Bottom-right tile — blog card */}
          <div
            style={{
              ...tileStyle,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "10px 12px",
            }}
          >
            <p
              style={{
                fontSize: "0.56rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "rgba(247,120,55,0.9)",
                marginBottom: "4px",
                fontWeight: 700,
              }}
            >
              Blog
            </p>
            <div
              style={{
                width: "90%",
                height: "6px",
                borderRadius: "3px",
                background: "rgba(255,255,255,0.18)",
                marginBottom: "5px",
              }}
            />
            <div
              style={{
                width: "70%",
                height: "6px",
                borderRadius: "3px",
                background: "rgba(255,255,255,0.12)",
              }}
            />
          </div>
        </div>

        {/* Bottom row — asset chips */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            marginTop: "10px",
            alignItems: "center",
          }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "8px",
                background:
                  i % 2 === 0
                    ? "rgba(255,255,255,0.06)"
                    : "linear-gradient(135deg, rgba(247,120,55,0.2), rgba(255,193,79,0.08))",
                border: "1px solid rgba(255,255,255,0.06)",
                flexShrink: 0,
              }}
            />
          ))}
          <span
            style={{
              fontSize: "0.68rem",
              color: "rgba(255,255,255,0.45)",
              marginLeft: "2px",
            }}
          >
            +43
          </span>
        </div>
      </div>

      {/* Accent card */}
      <div
        className="anim-float3"
        style={{
          position: "absolute",
          bottom: "-20px",
          left: "-40px",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          zIndex: 3,
        }}
      >
        <div
          style={{
            fontFamily:
              'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontSize: "1.9rem",
            fontWeight: 800,
            color: "#F77837",
            lineHeight: 1,
          }}
        >
          {accentValue}
        </div>
        <div>
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "#0E0E0E",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              lineHeight: 1.2,
            }}
          >
            {accentLabel}
          </p>
          <p style={{ fontSize: "0.72rem", color: "#7A7670", lineHeight: 1.3 }}>
            {accentSubLabel}
          </p>
        </div>
      </div>
    </div>
  );
}
