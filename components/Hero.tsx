"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "180px 48px 100px",
        position: "relative",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: "60px",
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-180px",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(255,107,43,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(255,107,43,0.07) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          className="anim-fu1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.85rem",
            color: "#7A7670",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              background: "#FF6B2B",
              borderRadius: "50%",
              flexShrink: 0,
              display: "inline-block",
            }}
          />
          Hiya, we&apos;re MPC Studios 👋
        </p>

        <h1
          className="anim-fu2"
          style={{
            fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontSize: "clamp(3.8rem, 7vw, 7.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#0E0E0E",
            marginBottom: "32px",
          }}
        >
          A creative{" "}
          <span style={{ color: "#FF6B2B" }}>design &amp;</span>
          <br />
          digital studio
        </h1>

        <p
          className="anim-fu3"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "#7A7670",
            maxWidth: "460px",
            marginBottom: "44px",
          }}
        >
          We build bold brands and high-performance digital experiences for
          businesses in banking, legal, and construction that want to stand out
          and grow.
        </p>

        <div
          className="anim-fu4"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#0E0E0E",
              color: "#fff",
              fontSize: "0.92rem",
              fontWeight: 500,
              padding: "14px 28px",
              borderRadius: "100px",
              textDecoration: "none",
              border: "2px solid #0E0E0E",
              transition: "background 0.25s, border-color 0.25s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#FF6B2B";
              el.style.borderColor = "#FF6B2B";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#0E0E0E";
              el.style.borderColor = "#0E0E0E";
            }}
          >
            View our work ↗
          </Link>
          <Link
            href="#about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              color: "#0E0E0E",
              fontSize: "0.92rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#FF6B2B")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#0E0E0E")
            }
          >
            Meet the team →
          </Link>
        </div>
      </div>

      {/* Hero Visual — floating cards */}
      <div
        className="hero-visual-wrap anim-fi"
        style={{ position: "relative", height: "560px" }}
      >
        {/* Main dark card */}
        <div
          className="anim-float"
          style={{
            position: "absolute",
            top: "20px",
            right: 0,
            width: "320px",
            background: "#0E0E0E",
            color: "#fff",
            borderRadius: "20px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
            padding: "28px 32px",
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "14px",
            }}
          >
            Current project
          </p>
          <p
            style={{
              fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "1.9rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Brand
            <br />
            Identity
            <span style={{ color: "#FF6B2B" }}>.</span>
          </p>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "#FF6B2B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1rem",
                flexShrink: 0,
              }}
            >
              ✦
            </div>
            <div>
              <p style={{ fontSize: "0.9rem", color: "#fff", fontWeight: 600 }}>
                Apex Ventures
              </p>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)" }}>
                Full rebrand + website
              </p>
            </div>
          </div>
        </div>

        {/* Stat card */}
        <div
          className="anim-float1"
          style={{
            position: "absolute",
            bottom: "100px",
            right: "30px",
            width: "160px",
            textAlign: "center",
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
            padding: "28px 32px",
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "2.4rem",
              fontWeight: 800,
              color: "#FF6B2B",
              lineHeight: 1.2,
            }}
          >
            150+
          </div>
          <div style={{ fontSize: "0.78rem", color: "#7A7670", marginTop: "4px" }}>
            Projects delivered
          </div>
        </div>

        {/* Tag card */}
        <div
          className="anim-float3"
          style={{
            position: "absolute",
            bottom: "60px",
            left: "20px",
            background: "#FF6B2B",
            color: "#fff",
            borderRadius: "20px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
            padding: "14px 22px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>🏆</span>
          <div>
            <p style={{ fontSize: "0.9rem", fontWeight: 600 }}>Award-winning</p>
            <p style={{ fontSize: "0.82rem" }}>Design studio</p>
          </div>
        </div>

        {/* Award card */}
        <div
          className="anim-float2"
          style={{
            position: "absolute",
            top: "200px",
            left: "10px",
            width: "170px",
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
            padding: "28px 24px",
          }}
        >
          <div style={{ fontSize: "1.4rem", marginBottom: "8px" }}>
            ⭐⭐⭐⭐⭐
          </div>
          <p style={{ fontSize: "0.86rem", fontWeight: 600, color: "#0E0E0E" }}>
            5-star rated
          </p>
          <p style={{ fontSize: "0.78rem", color: "#7A7670", lineHeight: 1.5 }}>
            on Google Reviews
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="anim-si"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "0.72rem",
            color: "#7A7670",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          className="anim-scroll-pulse"
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #FF6B2B, transparent)",
          }}
        />
      </div>
    </section>
  );
}
