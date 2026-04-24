/**
 * Chat conversation mock for the AI & Automation hero visual.
 * A stack of chat bubbles (user → AI) inside a dark card, plus a
 * floating accent metric. Primary card bobs with anim-float1.
 */
export type ServiceHeroChatProps = {
  userMessage?: string;
  assistantMessage?: string;
  accentLabel?: string;
  accentValue?: string;
  accentSubLabel?: string;
};

export default function ServiceHeroChat({
  userMessage = "Summarize yesterday's support tickets and group them by theme.",
  assistantMessage = "Yesterday: 47 tickets across 4 themes — password resets (18), billing (12), feature requests (11), and integration errors (6). Here's a breakdown…",
  accentLabel = "Reclaimed weekly",
  accentValue = "40hr",
  accentSubLabel = "Across ops & support",
}: ServiceHeroChatProps) {
  return (
    <div
      className="service-hero-visual"
      style={{ position: "relative", width: "100%", height: "380px" }}
    >
      {/* Chat card */}
      <div
        className="anim-float1"
        style={{
          position: "absolute",
          top: "10px",
          right: "0",
          width: "min(440px, 100%)",
          background: "#0E0E0E",
          color: "#fff",
          borderRadius: "22px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 18px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #F77837 0%, #ffc14f 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "0.72rem",
              color: "#0E0E0E",
            }}
          >
            AI
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "0.78rem", fontWeight: 700 }}>
              MPC Assistant
            </p>
            <p
              style={{
                fontSize: "0.65rem",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              Online · trained on your docs
            </p>
          </div>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#4ade80",
              boxShadow: "0 0 0 3px rgba(74,222,128,0.18)",
            }}
          />
        </div>

        {/* Messages */}
        <div
          style={{
            padding: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {/* User bubble */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div
              style={{
                maxWidth: "75%",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "14px 14px 4px 14px",
                padding: "10px 14px",
                fontSize: "0.82rem",
                lineHeight: 1.4,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              {userMessage}
            </div>
          </div>

          {/* Assistant bubble */}
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div
              style={{
                maxWidth: "85%",
                background:
                  "linear-gradient(135deg, rgba(247,120,55,0.18), rgba(255,193,79,0.08))",
                border: "1px solid rgba(247,120,55,0.25)",
                borderRadius: "14px 14px 14px 4px",
                padding: "10px 14px",
                fontSize: "0.82rem",
                lineHeight: 1.5,
                color: "#fff",
              }}
            >
              {assistantMessage}
            </div>
          </div>

          {/* Typing indicator */}
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: "14px",
                padding: "10px 14px",
                display: "flex",
                gap: "4px",
                alignItems: "center",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.55)",
                    animation: `float 1.2s ease-in-out ${i * 0.15}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div
          style={{
            padding: "12px 18px 16px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "100px",
              padding: "8px 14px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            <span style={{ flex: 1 }}>Ask anything…</span>
            <span
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #F77837, #ffc14f)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                color: "#0E0E0E",
                fontWeight: 800,
              }}
            >
              ↑
            </span>
          </div>
        </div>
      </div>

      {/* Accent card */}
      <div
        className="anim-float3"
        style={{
          position: "absolute",
          bottom: "0",
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
