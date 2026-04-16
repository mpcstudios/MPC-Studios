"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="hero-grid"
      style={{
        padding: "260px 0 160px",
        position: "relative",
        overflow: "hidden",
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

      <div className="content-wrap" style={{ display: "grid", gridTemplateColumns: "11fr 9fr", alignItems: "center", gap: "60px" }}>
      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          className="anim-fu2"
          style={{
            fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontSize: "clamp(3.8rem, 6.5vw, 6.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#0E0E0E",
            marginBottom: "32px",
          }}
        >
          Your Goals.
          <br />
          <span style={{ color: "#F77837" }}>Our Solutions.</span>
        </h1>

        <p
          className="anim-fu3"
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.75,
            color: "#7A7670",
            maxWidth: "460px",
            marginBottom: "44px",
          }}
        >
          Custom websites. Content that connects. AI-powered solutions. Built
          by a Texas team with over 25 years of experience delivering results
          that matter.
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
            href="#contact"
            className="btn-gradient"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              color: "#fff",
              fontSize: "1.1rem",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: "100px",
              textDecoration: "none",
            }}
          >
            Let&apos;s Talk About Your Goals ↗
          </Link>
          <Link
            href="#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              color: "#0E0E0E",
              fontSize: "1.1rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#F77837")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#0E0E0E")
            }
          >
            View Our Work →
          </Link>
        </div>
      </div>

      {/* Hero Visual — floating cards */}
      <div
        className="hero-visual-wrap anim-fi"
        style={{ position: "relative", height: "440px" }}
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
            <span style={{ color: "#F77837" }}>.</span>
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
                background: "#F77837",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.125rem",
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
              color: "#F77837",
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
            background: "#F77837",
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
      </div>

    </section>
  );
}
