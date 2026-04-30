"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type NavChild = { label: string; href: string };
type NavLink = { label: string; href: string; children?: NavChild[] };

const serviceChildren: NavChild[] = [
  { label: "Website Design & Development", href: "/services/website-design-development" },
  { label: "Custom Software Applications", href: "/services/custom-software" },
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "Content Creation", href: "/services/content-creation" },
  { label: "Digital Marketing Strategy", href: "/services/digital-marketing" },
];

const industryChildren: NavChild[] = [
  { label: "Banking", href: "/industries/banking" },
  { label: "Legal", href: "/industries/legal" },
  { label: "Construction", href: "/industries/construction" },
  { label: "Research", href: "/industries/research" },
];

const links: NavLink[] = [
  { label: "Services", href: "/services", children: serviceChildren },
  { label: "Industries", href: "/industries", children: industryChildren },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [deferred, setDeferred] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Watch every other gradient CTA on the page. When at least one is in the
  // viewport, the nav CTA fades to an outline so only one primary CTA competes.
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // Defer a tick so the new page's CTAs are in the DOM after route changes.
    const t = window.setTimeout(() => {
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>(".btn-gradient"),
      ).filter((el) => !el.closest("nav"));

      if (targets.length === 0) {
        setDeferred(false);
        return;
      }

      const visible = new Set<Element>();
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) visible.add(entry.target);
            else visible.delete(entry.target);
          }
          setDeferred(visible.size > 0);
        },
        { threshold: 0.2, rootMargin: "-80px 0px 0px 0px" },
      );

      targets.forEach((el) => observer!.observe(el));
    }, 50);

    return () => {
      window.clearTimeout(t);
      observer?.disconnect();
    };
  }, [pathname]);

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
          background: "rgba(255,255,255,0.96)",
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
          {links.map(({ label, href, children }) => {
            const isActive =
              pathname === href ||
              (href !== "/" && (pathname?.startsWith(`${href}/`) ?? false));
            const restingColor = isActive ? "#F77837" : "#0E0E0E";
            return (
            <li
              key={label}
              style={{ position: "relative" }}
              onMouseEnter={() => children && setOpenMenu(label)}
              onMouseLeave={() => children && setOpenMenu(null)}
            >
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: openMenu === label ? "#F77837" : restingColor,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  paddingBottom: "4px",
                  borderBottom: `2px solid ${
                    isActive ? "#F77837" : "transparent"
                  }`,
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#F77837")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    openMenu === label ? "#F77837" : restingColor)
                }
              >
                {label}
                {children && (
                  <span
                    aria-hidden
                    style={{
                      fontSize: "0.7rem",
                      marginTop: "2px",
                      transform: openMenu === label ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  >
                    ▾
                  </span>
                )}
              </Link>

              {children && openMenu === label && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    paddingTop: "14px",
                  }}
                >
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: "10px",
                      background: "#fff",
                      borderRadius: "16px",
                      boxShadow: "0 14px 40px rgba(0,0,0,0.12)",
                      border: "1px solid rgba(0,0,0,0.05)",
                      minWidth: "280px",
                    }}
                  >
                    {children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpenMenu(null)}
                          style={{
                            display: "block",
                            padding: "10px 14px",
                            borderRadius: "10px",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            color: "#0E0E0E",
                            textDecoration: "none",
                            transition:
                              "background 0.15s, color 0.15s",
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = "#F4F3F1";
                            el.style.color = "#F77837";
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = "transparent";
                            el.style.color = "#0E0E0E";
                          }}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                    <li
                      style={{
                        borderTop: "1px solid rgba(0,0,0,0.06)",
                        marginTop: "6px",
                        paddingTop: "6px",
                      }}
                    >
                      <Link
                        href={href}
                        onClick={() => setOpenMenu(null)}
                        style={{
                          display: "block",
                          padding: "10px 14px",
                          borderRadius: "10px",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          color: "#F77837",
                          textDecoration: "none",
                        }}
                      >
                        All {label.toLowerCase()} →
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className={`nav-cta${deferred ? " is-deferred" : ""}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.92rem",
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
            {links.map(({ label, href, children }) => {
              const isActive =
                pathname === href ||
                (href !== "/" && (pathname?.startsWith(`${href}/`) ?? false));
              return (
              <li key={label} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    style={{
                      display: "block",
                      flex: 1,
                      fontFamily:
                        'var(--font-display, "Bricolage Grotesque", sans-serif)',
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: isActive ? "#F77837" : "#0E0E0E",
                      textDecoration: "none",
                      padding: "20px 0",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {label}
                  </Link>
                  {children && (
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-label="Toggle services submenu"
                      style={{
                        background: "none",
                        border: "none",
                        padding: "12px",
                        fontSize: "1.2rem",
                        color: "#0E0E0E",
                        cursor: "pointer",
                        transform: mobileServicesOpen
                          ? "rotate(180deg)"
                          : "none",
                        transition: "transform 0.2s",
                      }}
                    >
                      ▾
                    </button>
                  )}
                </div>
                {children && mobileServicesOpen && (
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0 0 16px 0",
                      margin: 0,
                    }}
                  >
                    {children.map((child) => {
                      const childActive = pathname === child.href;
                      return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={childActive ? "page" : undefined}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          style={{
                            display: "block",
                            fontSize: "1.05rem",
                            fontWeight: 600,
                            color: childActive ? "#F77837" : "#7A7670",
                            textDecoration: "none",
                            padding: "10px 0",
                          }}
                        >
                          {child.label}
                        </Link>
                      </li>
                      );
                    })}
                  </ul>
                )}
              </li>
              );
            })}
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
