"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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

/* Slot 0 is the active/front position; other slots fan out behind. */
/* depth: 3D z translation; zi: DOM stacking order. */
const slotPositions: Array<{
  top: number;
  left: number;
  rotate: number;
  depth: number;
  zi: number;
}> = [
  { top: 60, left: 30,  rotate: 0,  depth: 0,    zi: 10 },
  { top: 30, left: -20, rotate: -9, depth: -80,  zi: 5  },
  { top: 75, left: 90,  rotate: 9,  depth: -120, zi: 4  },
  { top: 85, left: 10,  rotate: -5, depth: -160, zi: 3  },
  { top: 40, left: 70,  rotate: 6,  depth: -200, zi: 2  },
  { top: 55, left: 35,  rotate: -3, depth: -240, zi: 1  },
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
  const stackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isFirstRun = useRef(true);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      team.forEach((_, i) => {
        const slot = (i - activeIndex + team.length) % team.length;
        const pos = slotPositions[slot];
        const el = cardsRef.current[i];
        if (!el) return;

        // z-index updates partway through so the incoming card rises THROUGH the stack.
        tl.set(el, { zIndex: pos.zi }, slot === 0 ? 0.45 : 0);

        if (slot === 0) {
          // Incoming card: arc forward with a pop, then settle.
          tl
            .to(
              el,
              {
                z: 120,
                scale: 1.08,
                rotationY: -8,
                rotation: pos.rotate * 0.3,
                duration: 0.55,
                ease: "power2.out",
              },
              0,
            )
            .to(
              el,
              {
                top: pos.top,
                left: pos.left,
                z: pos.depth,
                rotation: pos.rotate,
                rotationY: 0,
                scale: 1,
                duration: 1.1,
                ease: "back.out(1.4)",
              },
              0.55,
            );
        } else {
          // Back cards: sink back with depth + tilt. Earlier slots settle sooner.
          tl.to(
            el,
            {
              top: pos.top,
              left: pos.left,
              z: pos.depth,
              rotation: pos.rotate,
              rotationY: slot * 5,
              scale: 1 - slot * 0.035,
              duration: 1.3,
              ease: "power2.inOut",
              delay: 0.05 + slot * 0.08,
            },
            0,
          );
        }
      });

      // First run: no animation, just set final state instantly.
      if (isFirstRun.current) {
        tl.progress(1);
        isFirstRun.current = false;
      }
    },
    { dependencies: [activeIndex], scope: stackRef },
  );

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

          {/* Right — decorative team card arrangement */}
          <div
            ref={stackRef}
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
              /* Initial layout is set in JSX so SSR matches; GSAP takes over on interaction. */
              return (
                <TeamCard
                  key={member.slug}
                  member={member}
                  variant={cardVariantFor(slot)}
                  onClick={() => setActiveIndex(i)}
                  cardRef={(el) => {
                    cardsRef.current[i] = el;
                  }}
                  style={{
                    top: `${pos.top}px`,
                    left: `${pos.left}px`,
                    width: "240px",
                    zIndex: pos.zi,
                    transform: `rotate(${pos.rotate}deg)`,
                    willChange: "transform, top, left",
                    cursor: isActive ? "default" : "pointer",
                  }}
                />
              );
            })}

            {/* Floating pills — one per team member */}
            {team.map((member, i) => {
              const isActive = i === activeIndex;
              const floatClass =
                ["anim-float", "anim-float1", "anim-float2", "anim-float3", "anim-float1", "anim-float2"][i] ||
                "anim-float";
              return (
                <button
                  key={`pill-${member.slug}`}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`${floatClass} team-pill${isActive ? " is-active" : ""}`}
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
  cardRef,
}: {
  member: TeamMember;
  variant: "dark" | "light" | "accent";
  style: React.CSSProperties;
  onClick?: () => void;
  cardRef?: React.Ref<HTMLDivElement>;
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
      ref={cardRef}
      className="team-card"
      onClick={onClick}
      style={{
        position: "absolute",
        background: bg,
        borderRadius: "20px",
        boxShadow: shadow,
        padding: "16px 16px 18px",
        overflow: "hidden",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
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
