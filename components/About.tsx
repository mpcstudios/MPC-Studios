"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const stats = [
  {
    n: "28",
    title: "Years in Business",
    desc: "Founded in 1998 in Harlingen, Texas. Deep roots in the Rio Grande Valley, serving clients nationwide.",
  },
  {
    n: "6",
    title: "Dedicated People",
    desc: "A tight-knit crew of designers, developers, and strategists who know each other\u2019s strengths.",
  },
  {
    n: "100%",
    title: "Texas-Based",
    desc: "Every line of code written in the Rio Grande Valley. Local presence, national reach.",
  },
  {
    n: "0",
    title: "Shortcuts Taken",
    desc: "We take on the projects other agencies won\u2019t \u2014 compliance, legacy migrations, custom integrations.",
  },
];

export default function About() {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.parentElement!.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      el.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
    };

    const parent = el.parentElement!;
    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: "#F4F3F1" }}
    >
      <div className="content-wrap">
        <div
          className="about-grid"
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Left — copy */}
          <div className="reveal" style={{ maxWidth: "75%", position: "relative", zIndex: 1 }}>
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
              A studio that cares about your business &amp; results
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.75,
                color: "#7A7670",
                marginBottom: "20px",
              }}
            >
              Founded in 1998, MPC Studios is a digital agency based in Harlingen,
              Texas. For 28 years we&apos;ve designed and built websites, applications,
              and digital solutions for businesses across the United States — with
              deep roots in the Rio Grande Valley.
            </p>
            <p
              style={{
                fontSize: "1.125rem",
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
          </div>

          {/* Right — animated logo */}
          <div
            className="about-right-col reveal reveal-d2"
            style={{
              position: "absolute",
              top: "50%",
              right: "-5%",
              transform: "translateY(-50%)",
              cursor: "default",
              pointerEvents: "auto",
              zIndex: 0,
            }}
          >
            <img
              ref={logoRef}
              src="/brand/mpc-icon.png"
              alt="MPC Studios"
              style={{
                width: "600px",
                opacity: 0.07,
                transition: "transform 0.15s ease-out, opacity 0.4s ease",
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.12";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.07";
              }}
            />
          </div>
        </div>

        {/* Stats grid */}
        <div
          className="reveal reveal-d1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginTop: "64px",
          }}
        >
          {stats.map(({ n, title, desc }) => (
            <div
              key={title}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "28px",
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
                  marginBottom: "8px",
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontFamily:
                    'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "#0E0E0E",
                  marginBottom: "8px",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  color: "#7A7670",
                }}
              >
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
