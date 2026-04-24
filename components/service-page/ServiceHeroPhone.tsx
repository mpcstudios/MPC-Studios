/**
 * Phone-app mock for a service hero visual. Dark device frame with a
 * small dashboard-style screen. Bobs gently with anim-float1, an accent
 * metric card overlays the opposite corner on anim-float3.
 */
export type ServiceHeroPhoneProps = {
  appName?: string;
  primaryStat?: { label: string; value: string };
  secondaryStats?: { label: string; value: string }[];
  accentLabel?: string;
  accentValue?: string;
  accentSubLabel?: string;
};

export default function ServiceHeroPhone({
  appName = "Operations",
  primaryStat = { label: "Open work orders", value: "28" },
  secondaryStats = [
    { label: "Today", value: "12" },
    { label: "This week", value: "84" },
  ],
  accentLabel = "Always on",
  accentValue = "99.9%",
  accentSubLabel = "Uptime / 12 mo",
}: ServiceHeroPhoneProps) {
  return (
    <div
      className="service-hero-visual"
      style={{ position: "relative", width: "100%", height: "380px" }}
    >
      {/* Phone frame */}
      <div
        className="anim-float1"
        style={{
          position: "absolute",
          top: "0",
          right: "30px",
          width: "230px",
          height: "360px",
          background: "#0E0E0E",
          borderRadius: "36px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.22), inset 0 0 0 2px rgba(255,255,255,0.06)",
          padding: "10px",
          zIndex: 2,
        }}
      >
        {/* Screen */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#17171A",
            borderRadius: "28px",
            overflow: "hidden",
            position: "relative",
            padding: "22px 16px 16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Notch */}
          <div
            style={{
              position: "absolute",
              top: "8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "18px",
              background: "#0E0E0E",
              borderRadius: "100px",
            }}
          />

          {/* Header */}
          <div style={{ marginTop: "10px", marginBottom: "16px" }}>
            <p
              style={{
                fontSize: "0.62rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "4px",
              }}
            >
              {appName}
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
              Good morning, Alex
            </p>
          </div>

          {/* Primary stat card */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(247,120,55,0.22) 0%, rgba(255,193,79,0.10) 100%)",
              border: "1px solid rgba(247,120,55,0.35)",
              borderRadius: "14px",
              padding: "14px 14px 16px",
              marginBottom: "12px",
            }}
          >
            <p
              style={{
                fontSize: "0.58rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "8px",
              }}
            >
              {primaryStat.label}
            </p>
            <p
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1,
              }}
            >
              {primaryStat.value}
            </p>
          </div>

          {/* Secondary stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
              marginBottom: "14px",
            }}
          >
            {secondaryStats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.56rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontFamily:
                      'var(--font-display, "Bricolage Grotesque", sans-serif)',
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#fff",
                    marginTop: "2px",
                  }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          {/* Activity list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
            {[0.85, 0.7, 0.55].map((w, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "7px",
                    background:
                      i === 0
                        ? "linear-gradient(135deg, #F77837, #ffc14f)"
                        : "rgba(255,255,255,0.08)",
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      width: `${w * 100}%`,
                      height: "5px",
                      borderRadius: "3px",
                      background: "rgba(255,255,255,0.12)",
                      marginBottom: "3px",
                    }}
                  />
                  <div
                    style={{
                      width: `${w * 60}%`,
                      height: "4px",
                      borderRadius: "2px",
                      background: "rgba(255,255,255,0.08)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom tab bar */}
          <div
            style={{
              marginTop: "10px",
              padding: "10px 4px 2px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {[true, false, false, false].map((active, i) => (
              <div
                key={i}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: active ? "#F77837" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Accent floating card */}
      <div
        className="anim-float3"
        style={{
          position: "absolute",
          bottom: "10px",
          left: "0",
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
            fontSize: "1.6rem",
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
