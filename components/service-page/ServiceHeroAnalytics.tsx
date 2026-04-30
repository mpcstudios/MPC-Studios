/**
 * Analytics dashboard mock for the Digital Marketing hero visual.
 * KPI row + SVG area chart with an upward trend + channel legend.
 * Primary card bobs with anim-float1, an accent metric with anim-float3.
 */
export type ServiceHeroAnalyticsProps = {
  kpis?: { label: string; value: string; delta: string }[];
  accentLabel?: string;
  accentValue?: string;
  accentSubLabel?: string;
};

export default function ServiceHeroAnalytics({
  kpis = [
    { label: "Sessions", value: "48.2K", delta: "+24%" },
    { label: "Leads", value: "1,204", delta: "+61%" },
    { label: "CTR", value: "4.8%", delta: "+12%" },
  ],
  accentLabel = "Organic growth",
  accentValue = "+230%",
  accentSubLabel = "12-month avg",
}: ServiceHeroAnalyticsProps) {
  // Area chart path — upward trend with natural noise
  const chartPath =
    "M 0 110 L 20 100 L 40 104 L 60 88 L 80 92 L 100 74 L 120 80 L 140 58 L 160 62 L 180 44 L 200 48 L 220 30 L 240 36 L 260 18 L 280 22 L 300 6 L 320 10 L 320 130 L 0 130 Z";
  const lineOnly =
    "M 0 110 L 20 100 L 40 104 L 60 88 L 80 92 L 100 74 L 120 80 L 140 58 L 160 62 L 180 44 L 200 48 L 220 30 L 240 36 L 260 18 L 280 22 L 300 6 L 320 10";

  return (
    <div
      className="service-hero-visual"
      style={{ position: "relative", display: "inline-block" }}
    >
      {/* Dashboard card */}
      <div
        className="anim-float1"
        style={{
          position: "relative",
          width: "440px",
          background: "#0E0E0E",
          color: "#fff",
          borderRadius: "22px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
          padding: "20px",
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
              Last 90 days
            </p>
            <p
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "0.95rem",
                fontWeight: 700,
              }}
            >
              Performance overview
            </p>
          </div>
          <span
            style={{
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "5px 10px",
              borderRadius: "100px",
              background: "rgba(74,222,128,0.15)",
              color: "#4ade80",
              border: "1px solid rgba(74,222,128,0.3)",
            }}
          >
            ● Live
          </span>
        </div>

        {/* KPIs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          {kpis.map((k) => (
            <div
              key={k.label}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px",
                padding: "10px 12px",
              }}
            >
              <p
                style={{
                  fontSize: "0.56rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "4px",
                }}
              >
                {k.label}
              </p>
              <p
                style={{
                  fontFamily:
                    'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  lineHeight: 1,
                  marginBottom: "3px",
                }}
              >
                {k.value}
              </p>
              <p
                style={{
                  fontSize: "0.62rem",
                  color: "#4ade80",
                  fontWeight: 700,
                }}
              >
                {k.delta}
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div
          style={{
            position: "relative",
            background:
              "linear-gradient(135deg, rgba(247,120,55,0.06), rgba(255,193,79,0.02))",
            borderRadius: "12px",
            padding: "12px 8px 8px",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 320 130"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "120px", display: "block" }}
          >
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F77837" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#F77837" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Gridlines */}
            {[0, 32, 64, 96].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y + 8}
                x2="320"
                y2={y + 8}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            ))}
            <path d={chartPath} fill="url(#chartGrad)" />
            <path
              d={lineOnly}
              fill="none"
              stroke="#F77837"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* End-of-line dot */}
            <circle cx="320" cy="10" r="4" fill="#F77837" />
            <circle
              cx="320"
              cy="10"
              r="8"
              fill="#F77837"
              fillOpacity="0.25"
            />
          </svg>
        </div>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            marginTop: "10px",
            fontSize: "0.68rem",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "2px",
                background: "#F77837",
              }}
            />
            Organic
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "2px",
                background: "rgba(255,255,255,0.25)",
              }}
            />
            Paid
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "2px",
                background: "rgba(255,255,255,0.15)",
              }}
            />
            Social
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
            fontSize: "1.7rem",
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
