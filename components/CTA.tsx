"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        background: "#0E0E0E",
        textAlign: "center",
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(255,107,43,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="content-wrap" style={{ position: "relative", zIndex: 1 }}>
        <p
          className="reveal"
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#F77837",
            marginBottom: "24px",
          }}
        >
          Let&apos;s work together
        </p>

        <h2
          className="reveal reveal-d1"
          style={{
            fontFamily:
              'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#fff",
            margin: "0 auto 20px",
            maxWidth: "820px",
          }}
        >
          Ready to take your
          <br />
          <span style={{ color: "#F77837" }}>business further?</span>
        </h2>

        <p
          className="reveal reveal-d2"
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.4)",
            maxWidth: "500px",
            margin: "0 auto 52px",
            lineHeight: 1.7,
          }}
        >
          Tell us about your project and let&apos;s create something
          extraordinary together.
        </p>

        <div
          className="reveal reveal-d3"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="mailto:sales@mpcstudios.com"
            className="btn-gradient"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              color: "#fff",
              fontSize: "0.92rem",
              fontWeight: 500,
              padding: "18px 38px",
              borderRadius: "100px",
              textDecoration: "none",
            }}
          >
            Start a project ↗
          </Link>
          <Link
            href="#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "transparent",
              color: "#fff",
              fontSize: "0.92rem",
              padding: "18px 38px",
              borderRadius: "100px",
              textDecoration: "none",
              border: "1.5px solid rgba(255,255,255,0.2)",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#F77837";
              el.style.color = "#F77837";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.2)";
              el.style.color = "#fff";
            }}
          >
            View our work →
          </Link>
        </div>
      </div>
    </section>
  );
}
