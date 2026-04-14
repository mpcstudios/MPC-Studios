"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "14px 0" : "22px 0",
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.07)" : "none",
          transition: "padding 0.3s, box-shadow 0.3s",
        }}
      >
        <div className="content-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ flexShrink: 1, minWidth: 0, marginRight: "16px" }}>
          <img src="/brand/Black MPC Studios Logo.svg" alt="MPC Studios" style={{ height: "clamp(40px, 6vw, 72px)", width: "auto", display: "block" }} />
        </Link>

        {/* Desktop links + CTA grouped right */}
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
        <ul
          className="nav-links"
          style={{
            display: "flex",
            gap: "36px",
            listStyle: "none",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#0E0E0E",
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
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="nav-cta btn-gradient"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#fff",
            fontSize: "1.1rem",
            fontWeight: 700,
            padding: "11px 22px",
            borderRadius: "100px",
            textDecoration: "none",
            flexShrink: 0,
            marginLeft: "16px",
          }}
        >
          Start a project ↗
        </Link>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            minWidth: "44px",
            minHeight: "44px",
          }}
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: "24px", height: "2px", background: "#0E0E0E", transition: "transform 0.2s, opacity 0.2s", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "#0E0E0E", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "#0E0E0E", transition: "transform 0.2s, opacity 0.2s", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
        </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "#fff",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 32px",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {links.map(({ label, href }) => (
              <li key={label} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#0E0E0E",
                    textDecoration: "none",
                    padding: "20px 0",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-gradient"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: 600,
              padding: "16px 32px",
              borderRadius: "100px",
              textDecoration: "none",
              marginTop: "40px",
            }}
          >
            Start a project ↗
          </Link>
        </div>
      )}
    </>
  );
}
