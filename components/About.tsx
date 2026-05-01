"use client";
import { useState } from "react";
import Link from "next/link";

type TeamMember = {
  name: string;
  role: string;
  slug: string;
  initials: string;
};

/* Drop photos into /public/team/<slug>.jpg to replace the initial avatars. */
const team: TeamMember[] = [
  { name: "David Watkins", role: "Owner",                 slug: "david-watkins", initials: "DW" },
  { name: "Kate Hurry",    role: "Creative Director",     slug: "kate-hurry",    initials: "KH" },
  { name: "Sean Clarke",   role: "Application Developer", slug: "sean-clarke",   initials: "SC" },
  { name: "David Winters", role: "General Manager",       slug: "david-winters", initials: "DW" },
  { name: "Jen Sanchez",   role: "Office Manager",        slug: "jen-sanchez",   initials: "JS" },
  { name: "Sal Yanez",     role: "Project Manager",       slug: "sal-yanez",     initials: "SY" },
];

/* Slot 0 is the active/front position; slots 1–2 fan out behind it.
   Slots 3+ are hidden — 6 interactive cards fan-stacked all at once just
   adds paint cost without reading cleanly; they'd peek from behind slot 2
   anyway. They still move (so the transition looks continuous when a hidden
   card rotates forward) but don't render. */
const slotPositions: Array<{
  x: number;
  y: number;
  rotate: number;
  z: number;
  zi: number;
  opacity: number;
}> = [
  { x: 30,  y: 60, rotate: 0,  z: 0,    zi: 10, opacity: 1 },
  { x: -20, y: 30, rotate: -9, z: -80,  zi: 5,  opacity: 1 },
  { x: 90,  y: 75, rotate: 9,  z: -120, zi: 4,  opacity: 1 },
  { x: 10,  y: 85, rotate: -5, z: -160, zi: 3,  opacity: 0 },
  { x: 70,  y: 40, rotate: 6,  z: -200, zi: 2,  opacity: 0 },
  { x: 35,  y: 55, rotate: -3, z: -240, zi: 1,  opacity: 0 },
];

const cardVariantFor = (i: number): "dark" | "light" | "accent" =>
  i === 0 ? "dark" : i % 3 === 1 ? "light" : "accent";

/* Pills stack vertically along the right edge of the card stack. */
const pillPositions: React.CSSProperties[] = [
  { top: "10px",  right: "0px"  },
  { top: "85px",  right: "10px" },
  { top: "160px", right: "0px"  },
  { top: "235px", right: "10px" },
  { top: "310px", right: "0px"  },
  { top: "385px", right: "10px" },
];

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
  const [activeIndex, setActiveIndex] = useState(0);

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
            minHeight: "600px",
          }}
        >
          {/* Left — copy */}
          <div className="reveal" style={{ maxWidth: "46%", position: "relative", zIndex: 1 }}>
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
              href="/about"
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

          {/* Right — decorative team card arrangement */}
          <div
            className="about-right-col reveal reveal-d2"
            style={{
              position: "absolute",
              top: "50%",
              right: "20px",
              transform: "translateY(-50%)",
              width: "520px",
              height: "540px",
              pointerEvents: "auto",
              zIndex: 0,
              perspective: "1400px",
              perspectiveOrigin: "50% 40%",
            }}
          >
            {team.map((member, i) => {
              const slot = (i - activeIndex + team.length) % team.length;
              const pos = slotPositions[slot] ?? slotPositions[slotPositions.length - 1];
              const isActive = slot === 0;
              /* Cap the visual progression at slot 2 — cards at slot 3+ are
                 hidden via opacity, so letting scale/tilt keep growing just
                 wastes range and muddies the compositor transform. */
              const cappedSlot = Math.min(slot, 2);
              const restScale = cappedSlot === 0 ? 1 : 1 - cappedSlot * 0.035;
              const restRotY = cappedSlot === 0 ? 0 : cappedSlot * 5;
              return (
                <TeamCard
                  key={member.slug}
                  member={member}
                  variant={cardVariantFor(slot)}
                  isActive={isActive}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    top: 0,
                    left: 0,
                    width: "240px",
                    zIndex: pos.zi,
                    opacity: pos.opacity,
                    pointerEvents: pos.opacity === 0 ? "none" : "auto",
                    transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px) rotate(${pos.rotate}deg) rotateY(${restRotY}deg) scale(${restScale})`,
                    cursor: isActive ? "default" : "pointer",
                  }}
                />
              );
            })}

            {/* Team pills — one per member */}
            {team.map((member, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={`pill-${member.slug}`}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`team-pill${isActive ? " is-active" : ""}`}
                  aria-pressed={isActive}
                  style={{
                    position: "absolute",
                    ...pillPositions[i],
                    background: isActive ? "#F77837" : "#fff",
                    color: isActive ? "#fff" : "#0E0E0E",
                    border: "none",
                    borderRadius: "100px",
                    padding: "8px 14px 8px 8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                    zIndex: 20,
                    font: "inherit",
                  }}
                >
                  <span
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: isActive ? "rgba(255,255,255,0.22)" : "#0E0E0E",
                      color: isActive ? "#fff" : "#F77837",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                      fontWeight: 800,
                      fontSize: "0.74rem",
                      flexShrink: 0,
                    }}
                  >
                    {member.initials}
                  </span>
                  <span style={{ textAlign: "left", lineHeight: 1.1 }}>
                    <span style={{ display: "block", fontSize: "0.78rem", fontWeight: 700 }}>
                      {member.name}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.66rem",
                        opacity: isActive ? 0.9 : 0.6,
                        marginTop: "2px",
                      }}
                    >
                      {member.role}
                    </span>
                  </span>
                </button>
              );
            })}
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

function TeamCard({
  member,
  variant,
  style,
  onClick,
  isActive,
}: {
  member: TeamMember;
  variant: "dark" | "light" | "accent";
  style: React.CSSProperties;
  onClick?: () => void;
  isActive?: boolean;
}) {
  const [photoFailed, setPhotoFailed] = useState(false);

  const isDark = variant === "dark";
  const bg = isDark ? "#0E0E0E" : "#fff";
  const labelColor = isDark ? "rgba(255,255,255,0.45)" : "#7A7670";
  const nameColor = isDark ? "#fff" : "#0E0E0E";
  const roleColor = isDark ? "rgba(255,255,255,0.72)" : "#7A7670";
  const shadow =
    variant === "accent"
      ? "0 10px 40px rgba(247,120,55,0.18)"
      : isDark
        ? "0 10px 40px rgba(0,0,0,0.14)"
        : "0 10px 40px rgba(0,0,0,0.09)";

  return (
    <div
      className={`team-card${isActive ? " is-active" : ""}`}
      onClick={onClick}
      style={{
        position: "absolute",
        background: bg,
        borderRadius: "20px",
        boxShadow: shadow,
        padding: "16px 16px 18px",
        overflow: "hidden",
        ...style,
      }}
    >
      {variant === "accent" && (
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
      )}

      {/* Photo area */}
      <div
        style={{
          width: "100%",
          aspectRatio: "4 / 5",
          borderRadius: "14px",
          overflow: "hidden",
          background: isDark ? "#1a1a1a" : "#F4F3F1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "12px",
        }}
      >
        {photoFailed ? (
          <span
            style={{
              fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "2.2rem",
              fontWeight: 800,
              color: "#F77837",
              letterSpacing: "-0.02em",
            }}
          >
            {member.initials}
          </span>
        ) : (
          <img
            src={`/team/${member.slug}.jpg`}
            alt={member.name}
            onError={() => setPhotoFailed(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        )}
      </div>

      <p
        style={{
          fontSize: "0.64rem",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: labelColor,
          marginBottom: "4px",
        }}
      >
        {member.role}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
          fontSize: "1rem",
          fontWeight: 800,
          letterSpacing: "-0.01em",
          lineHeight: 1.2,
          color: nameColor,
        }}
      >
        {member.name}
        <span style={{ color: "#F77837" }}>.</span>
      </p>
      <p style={{ display: "none", color: roleColor }} />
    </div>
  );
}
