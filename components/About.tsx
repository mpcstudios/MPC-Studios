"use client";
import Link from "next/link";

const stats = [
  { n: "500+", l: "Projects delivered" },
  { n: "25yr", l: "In the industry" },
  { n: "98%", l: "Client retention" },
  { n: "5★", l: "Google reviews" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ background: "#F4F3F1", padding: "120px 48px" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div className="reveal">
          <p className="section-label" style={{ marginBottom: "20px" }}>
            Who we are
          </p>
          <h2
            style={{
              fontFamily:
                'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
              color: "#0E0E0E",
              marginBottom: "28px",
            }}
          >
            A studio that cares about your brand &amp; results
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "#7A7670",
              marginBottom: "20px",
            }}
          >
            Founded in 1998, MPC Studios is a Texas-based full-service creative
            and digital agency. For over 25 years we&apos;ve partnered with
            businesses in banking, legal, and construction — helping them look
            exceptional and perform online.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "#7A7670",
              marginBottom: "40px",
            }}
          >
            We believe great design should drive real outcomes. Every project is
            crafted with both beauty and business goals in mind.
          </p>
          <Link
            href="#contact"
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
              el.style.background = "#F77837";
              el.style.borderColor = "#F77837";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#0E0E0E";
              el.style.borderColor = "#0E0E0E";
            }}
          >
            About MPC Studios ↗
          </Link>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginTop: "48px",
            }}
          >
            {stats.map(({ n, l }) => (
              <div
                key={l}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    fontFamily:
                      'var(--font-display, "Bricolage Grotesque", sans-serif)',
                    fontSize: "2.4rem",
                    fontWeight: 800,
                    color: "#F77837",
                    lineHeight: 1.2,
                    marginBottom: "6px",
                  }}
                >
                  {n}
                </div>
                <div style={{ fontSize: "0.82rem", color: "#7A7670" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual block */}
        <div
          className="about-right-col reveal reveal-d2"
          style={{ position: "relative", height: "520px" }}
        >
          {/* Main image block */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "85%",
              aspectRatio: "4 / 5",
              background: "#0E0E0E",
              borderRadius: "20px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "1.4rem",
                fontWeight: 800,
                color: "rgba(255,255,255,0.06)",
                textAlign: "center",
                padding: "20px",
                lineHeight: 1.4,
              }}
            >
              MPC STUDIOS INC
              <br />
              CREATIVE &amp; DIGITAL
              <br />
              EST. 1998 · TEXAS
            </p>
          </div>

          {/* Accent quote block */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "55%",
              background: "#F77837",
              borderRadius: "20px",
              padding: "28px",
              color: "#fff",
            }}
          >
            <p
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "1.05rem",
                fontWeight: 700,
                lineHeight: 1.4,
                marginBottom: "14px",
              }}
            >
              &ldquo;We don&apos;t just build websites — we build growth
              engines.&rdquo;
            </p>
            <p style={{ fontSize: "0.78rem", opacity: 0.75 }}>
              — Founder, MPC Studios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
