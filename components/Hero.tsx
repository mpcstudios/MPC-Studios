"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="hero-grid"
      style={{
        padding: "130px 0 60px",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
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

      <div className="content-wrap" style={{ display: "grid", gridTemplateColumns: "11fr 9fr", alignItems: "center", gap: "60px", width: "100%" }}>
      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          className="anim-fu2"
          style={{
            fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
            fontSize: "clamp(3rem, 5.5vw, 5.25rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#0E0E0E",
            marginBottom: "24px",
          }}
        >
          Your Goals.
          <br />
          <span style={{ color: "#F77837" }}>Our Solutions.</span>
        </h1>

        <p
          className="anim-fu3"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.65,
            color: "#7A7670",
            maxWidth: "460px",
            marginBottom: "32px",
          }}
        >
          Custom websites. Content that connects. AI-powered solutions. Built
          by a Texas team with 28 years of experience delivering results
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
            href="/contact"
            className="btn-gradient"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              color: "#fff",
              fontSize: "0.92rem",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: "100px",
              textDecoration: "none",
            }}
          >
            Book a Strategy Call ↗
          </Link>
          <Link
            href="/work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              color: "#0E0E0E",
              fontSize: "0.92rem",
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

      {/* Hero Visual — goal/solution cards with idle bob cards around them */}
      <div
        className="hero-visual-wrap anim-fi"
        style={{ position: "relative", height: "440px" }}
      >
        {/* Primary card 1 — Sales (dark, focal) */}
        <div
          className="hero-goal-card"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "290px",
            background: "#0E0E0E",
            color: "#fff",
            borderRadius: "20px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.14)",
            padding: "22px 26px",
            zIndex: 3,
          }}
        >
          <p
            style={{
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.45)",
              marginBottom: "8px",
            }}
          >
            Goal
          </p>
          <p
            style={{
              fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "1.5rem",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            Generate sales
            <span style={{ color: "#F77837" }}>.</span>
          </p>
          <div
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.12)",
              margin: "16px 0",
            }}
          />
          <p
            style={{
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.45)",
              marginBottom: "6px",
            }}
          >
            Solution
          </p>
          <p
            style={{
              fontSize: "0.92rem",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.45,
            }}
          >
            Website Design & Development + Digital Marketing Strategy
          </p>
        </div>

        {/* Primary card 2 — Custom Software (white) */}
        <div
          className="hero-goal-card"
          style={{
            position: "absolute",
            top: "145px",
            right: "240px",
            width: "270px",
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.09)",
            padding: "22px 26px",
            zIndex: 2,
          }}
        >
          <p
            style={{
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "#7A7670",
              marginBottom: "8px",
            }}
          >
            Goal
          </p>
          <p
            style={{
              fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "1.5rem",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              color: "#0E0E0E",
            }}
          >
            Bring your idea to life
            <span style={{ color: "#F77837" }}>.</span>
          </p>
          <div
            style={{
              height: "1px",
              background: "rgba(0,0,0,0.08)",
              margin: "16px 0",
            }}
          />
          <p
            style={{
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "#7A7670",
              marginBottom: "6px",
            }}
          >
            Solution
          </p>
          <p
            style={{
              fontSize: "0.92rem",
              color: "#0E0E0E",
              lineHeight: 1.45,
            }}
          >
            Custom Software Applications built to spec
          </p>
        </div>

        {/* Primary card 3 — AI & Automations (white w/ gradient top edge) */}
        <div
          className="hero-goal-card"
          style={{
            position: "absolute",
            bottom: 0,
            right: "10px",
            width: "290px",
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 10px 40px rgba(247,120,55,0.18)",
            padding: "22px 26px",
            zIndex: 2,
            overflow: "hidden",
          }}
        >
          {/* Top gradient strip */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background:
                "linear-gradient(90deg, #ffc14f, #F77837, #ffc14f, #F77837)",
            }}
          />
          <p
            style={{
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "#7A7670",
              marginBottom: "8px",
            }}
          >
            Goal
          </p>
          <p
            style={{
              fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "1.5rem",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              color: "#0E0E0E",
            }}
          >
            Automate the boring stuff
            <span style={{ color: "#F77837" }}>.</span>
          </p>
          <div
            style={{
              height: "1px",
              background: "rgba(0,0,0,0.08)",
              margin: "16px 0",
            }}
          />
          <p
            style={{
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "#7A7670",
              marginBottom: "6px",
            }}
          >
            Solution
          </p>
          <p
            style={{
              fontSize: "0.92rem",
              color: "#0E0E0E",
              lineHeight: 1.45,
            }}
          >
            AI + automations that empower your team
          </p>
        </div>

        {/* Idle bob card — 150+ projects (anchored right so it tracks the dark card) */}
        <div
          className="anim-float1"
          style={{
            position: "absolute",
            top: "30px",
            right: "332px",
            width: "128px",
            textAlign: "center",
            background: "#fff",
            borderRadius: "18px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.10)",
            padding: "18px 16px",
            zIndex: 4,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "1.9rem",
              fontWeight: 800,
              color: "#F77837",
              lineHeight: 1.1,
            }}
          >
            150+
          </div>
          <div
            style={{ fontSize: "0.72rem", color: "#7A7670", marginTop: "4px" }}
          >
            Projects delivered
          </div>
        </div>

        {/* Idle bob card — Award-winning tag */}
        <div
          className="anim-float3"
          style={{
            position: "absolute",
            top: "245px",
            right: "-18px",
            background: "#F77837",
            color: "#fff",
            borderRadius: "16px",
            boxShadow: "0 8px 30px rgba(247,120,55,0.28)",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            zIndex: 4,
          }}
        >
          <span style={{ fontSize: "1.1rem" }}>🏆</span>
          <div>
            <p style={{ fontSize: "0.82rem", fontWeight: 700, lineHeight: 1.1 }}>
              Award-winning
            </p>
            <p style={{ fontSize: "0.72rem", opacity: 0.9, lineHeight: 1.1 }}>
              Design studio
            </p>
          </div>
        </div>

        {/* Idle bob card — 5-star rating */}
        <div
          className="anim-float2"
          style={{
            position: "absolute",
            top: "345px",
            left: "-25px",
            width: "145px",
            background: "#fff",
            borderRadius: "18px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.10)",
            padding: "16px 18px",
            zIndex: 4,
          }}
        >
          <div style={{ fontSize: "1.05rem", marginBottom: "4px" }}>
            ⭐⭐⭐⭐⭐
          </div>
          <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0E0E0E" }}>
            5-star rated
          </p>
          <p style={{ fontSize: "0.72rem", color: "#7A7670", lineHeight: 1.4 }}>
            on Google Reviews
          </p>
        </div>
      </div>
      </div>

    </section>
  );
}
