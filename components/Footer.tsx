"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type FooterItem = { label: string; href: string };
type SocialItem = { label: string; href: string; icon: ReactNode };

const socialLinks: SocialItem[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mpc-studios-inc./",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://twitter.com/mpcstudios",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/mpc.studios.inc",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/mpcstudios",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const serviceLinks: FooterItem[] = [
  { label: "Website Design & Development", href: "/services/website-design-development" },
  { label: "Custom Software Applications", href: "/services/custom-software" },
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "Content Creation", href: "/services/content-creation" },
  { label: "Digital Marketing Strategy", href: "/services/digital-marketing" },
  { label: "All services →", href: "/services" },
];
const companyLinks: FooterItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Resources", href: "/resources" },
  { label: "Client Resources", href: "/client-resources" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0E0E0E",
        padding: "60px 0 40px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="content-wrap">
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "60px",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* Logo + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            maxWidth: "320px",
          }}
        >
          <Link href="/" style={{ display: "inline-block" }}>
            <img
              src="/brand/White Logo.svg"
              alt="MPC Studios"
              style={{
                height: "clamp(52px, 5vw, 68px)",
                width: "auto",
                display: "block",
              }}
            />
          </Link>
          <span
            style={{
              display: "block",
              fontSize: "0.85rem",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Design &amp; Digital Studio · Est. 1998
          </span>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px 12px 14px",
              borderRadius: "100px",
              border: "1px solid rgba(247,120,55,0.35)",
              background:
                "linear-gradient(135deg, rgba(254,110,100,0.08) 0%, rgba(255,193,79,0.04) 100%)",
              alignSelf: "flex-start",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: "22px",
                height: "22px",
                flexShrink: 0,
                background:
                  "linear-gradient(135deg, #fe6e64 0%, #F77837 55%, #ffc14f 100%)",
                WebkitMask:
                  "url(/brand/texas-outline.svg) center/contain no-repeat",
                mask: "url(/brand/texas-outline.svg) center/contain no-repeat",
              }}
            />
            <span
              style={{
                fontFamily:
                  'var(--font-display, "Bricolage Grotesque", sans-serif)',
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              Made in Texas
            </span>
          </div>
        </div>

        {/* Columns */}
        <div
          style={{
            display: "flex",
            gap: "64px",
            flexWrap: "wrap",
          }}
        >
          <FooterCol title="Services" items={serviceLinks} />
          <FooterCol title="Company" items={companyLinks} />
          <div>
            <h4
              style={{
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.25)",
                marginBottom: "20px",
              }}
            >
              Contact
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", padding: 0, margin: 0 }}>
              {[
                { label: "sales@mpcstudios.com", href: "mailto:sales@mpcstudios.com" },
                { label: "+1 (956) 423-2233", href: "tel:+19564232233" },
                { label: "Schedule a call ↗", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#F77837")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.45)")
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "32px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.25)" }}>
          © 2026 MPC Studios, Inc. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#F77837";
                el.style.color = "#F77837";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.1)";
                el.style.color = "rgba(255,255,255,0.4)";
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: FooterItem[] }) {
  return (
    <div>
      <h4
        style={{
          fontSize: "0.72rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "rgba(255,255,255,0.25)",
          marginBottom: "20px",
        }}
      >
        {title}
      </h4>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", padding: 0, margin: 0 }}>
        {items.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#F77837")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.45)")
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
