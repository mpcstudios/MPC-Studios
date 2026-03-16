"use client";

import Link from "next/link";

const serviceLinks = [
  "Website Design & Dev",
  "Brand Identity",
  "Content Marketing",
  "AI & Automations",
  "SEO & Growth",
];
const companyLinks = ["About Us", "Our Work", "Blog", "Careers", "Contact"];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0E0E0E",
        padding: "60px 48px 40px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
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
        <div>
          <Link
            href="/"
            style={{
              fontFamily:
                'var(--font-display, "Bricolage Grotesque", sans-serif)',
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              display: "block",
            }}
          >
            MPC<span style={{ color: "#F77837" }}>.</span>
          </Link>
          <span
            style={{
              display: "block",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.3)",
              marginTop: "4px",
            }}
          >
            Design &amp; Digital Studio · Est. 1998 · Texas
          </span>
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
                { label: "hello@mpcstudios.com", href: "mailto:hello@mpcstudios.com" },
                { label: "+1 (512) 555-0198", href: "tel:+15125550198" },
                { label: "Schedule a call ↗", href: "#" },
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
          {["Li", "X", "Ig", "Be"].map((s) => (
            <Link
              key={s}
              href="#"
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
                fontSize: "0.78rem",
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
              {s}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
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
        {items.map((item) => (
          <li key={item}>
            <Link
              href="#"
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
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
