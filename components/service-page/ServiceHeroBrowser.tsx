/**
 * Placeholder "diagram" card for a service hero visual.
 *
 * Two stacked cards with the same bob animation used on the homepage hero:
 * a dark primary card mocked up like a browser window, plus a small
 * orange accent card floating off the corner. Swap this out per-service
 * later (real diagram, animated SVG, video loop, etc.).
 */
export type ServiceHeroPlaceholderProps = {
  label?: string;
  accentLabel?: string;
  accentValue?: string;
  accentSubLabel?: string;
};

export default function ServiceHeroPlaceholder({
  label = "yourbrand.com",
  accentLabel = "Built to perform",
  accentValue = "100",
  accentSubLabel = "Lighthouse score",
}: ServiceHeroPlaceholderProps) {
  return (
    <div
      className="service-hero-visual"
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {/* Primary card — mock browser window, bobs gently */}
      <div
        className="anim-float1"
        style={{
          position: "relative",
          width: "420px",
          background: "#0E0E0E",
          color: "#fff",
          borderRadius: "20px",
          boxShadow: "0 18px 50px rgba(0,0,0,0.18)",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        {/* Window chrome */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "14px 18px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ display: "flex", gap: "6px" }}>
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.18)",
              }}
            />
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.18)",
              }}
            />
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.18)",
              }}
            />
          </div>
          <div
            style={{
              flex: 1,
              height: "22px",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              paddingLeft: "12px",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.02em",
            }}
          >
            {label}
          </div>
        </div>

        {/* Fake content */}
        <div style={{ padding: "24px 20px 28px" }}>
          <div
            style={{
              width: "70%",
              height: "14px",
              borderRadius: "6px",
              background:
                "linear-gradient(90deg, #F77837, #ffc14f)",
              marginBottom: "14px",
            }}
          />
          <div
            style={{
              width: "90%",
              height: "8px",
              borderRadius: "4px",
              background: "rgba(255,255,255,0.12)",
              marginBottom: "8px",
            }}
          />
          <div
            style={{
              width: "78%",
              height: "8px",
              borderRadius: "4px",
              background: "rgba(255,255,255,0.12)",
              marginBottom: "22px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            <div
              style={{
                height: "62px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            />
            <div
              style={{
                height: "62px",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg, rgba(247,120,55,0.18), rgba(255,193,79,0.08))",
                border: "1px solid rgba(247,120,55,0.25)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Accent bobbing card */}
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
          <p
            style={{
              fontSize: "0.72rem",
              color: "#7A7670",
              lineHeight: 1.3,
            }}
          >
            {accentSubLabel}
          </p>
        </div>
      </div>
    </div>
  );
}
