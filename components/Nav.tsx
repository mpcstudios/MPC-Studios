"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: scrolled ? "14px 48px" : "22px 48px",
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.07)" : "none",
        transition: "padding 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
          fontWeight: 800,
          fontSize: "1.3rem",
          color: "#0E0E0E",
          textDecoration: "none",
          letterSpacing: "-0.01em",
        }}
      >
        MPC<span style={{ color: "#F77837" }}>.</span>
      </Link>

      {/* Links */}
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
                fontSize: "0.9rem",
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

      {/* CTA */}
      <Link
        href="#contact"
        className="btn-gradient"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          color: "#fff",
          fontSize: "0.88rem",
          fontWeight: 500,
          padding: "11px 22px",
          borderRadius: "100px",
          textDecoration: "none",
        }}
      >
        Start a project ↗
      </Link>
    </nav>
  );
}
