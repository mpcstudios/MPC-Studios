"use client";

import Link from "next/link";
import type { IndustryConfig } from "@/content/industries/industries";

export default function IndustryCards({
  industries,
}: {
  industries: IndustryConfig[];
}) {
  return (
    <div
      className="industry-cards-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "32px",
      }}
    >
      {industries.map((industry, i) => (
        <Link
          key={industry.slug}
          href={`/industries/${industry.slug}`}
          className={i === 0 ? "reveal" : `reveal reveal-d${Math.min(i + 1, 4)}`}
          style={{
            display: "block",
            background: "#F4F3F1",
            borderRadius: "24px",
            padding: "40px",
            textDecoration: "none",
            color: "inherit",
            transition: "transform 0.3s, background 0.3s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform =
              "translateY(-6px)";
            (e.currentTarget as HTMLElement).style.background = "#0E0E0E";
            const text =
              e.currentTarget.querySelectorAll<HTMLElement>("[data-light]");
            text.forEach((el) => (el.style.color = "#fff"));
            const muted =
              e.currentTarget.querySelectorAll<HTMLElement>("[data-muted]");
            muted.forEach(
              (el) => (el.style.color = "rgba(255,255,255,0.6)"),
            );
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.background = "#F4F3F1";
            const text =
              e.currentTarget.querySelectorAll<HTMLElement>("[data-light]");
            text.forEach((el) => (el.style.color = "#0E0E0E"));
            const muted =
              e.currentTarget.querySelectorAll<HTMLElement>("[data-muted]");
            muted.forEach((el) => (el.style.color = "#7A7670"));
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "8px 14px",
                borderRadius: "100px",
                background: "rgba(247,120,55,0.10)",
                color: "#F77837",
                border: "1px solid rgba(247,120,55,0.25)",
              }}
            >
              {industry.navTitle}
            </span>
            <span
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#F77837",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
              }}
            >
              ↗
            </span>
          </div>
          <h2
            data-light
            style={{
              fontFamily:
                'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#0E0E0E",
              lineHeight: 1.18,
              marginBottom: "16px",
              transition: "color 0.3s",
            }}
          >
            {industry.hero.title}
            {industry.hero.titleAccent && (
              <>
                {" "}
                <span style={{ color: "#F77837" }}>
                  {industry.hero.titleAccent}
                </span>
              </>
            )}
          </h2>
          <p
            data-muted
            style={{
              fontSize: "1rem",
              lineHeight: 1.65,
              color: "#7A7670",
              transition: "color 0.3s",
            }}
          >
            {industry.hero.summary}
          </p>
        </Link>
      ))}
    </div>
  );
}
