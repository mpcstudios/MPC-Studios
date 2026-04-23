"use client";

import Link from "next/link";
import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

type Resource = {
  title: string;
  description: string;
  cta: string;
  href: string;
  external?: boolean;
};

const resources: Resource[] = [
  {
    title: "Webmail",
    description: "Access your email from anywhere.",
    cta: "Login to Webmail",
    href: "https://apps.rackspace.com/index.php",
    external: true,
  },
  {
    title: "Remote Support",
    description: "Need help? Let us connect to your computer remotely.",
    cta: "Access Remote Support",
    href: "https://join.me/mpcstudios",
    external: true,
  },
  {
    title: "Support Requests",
    description: "Submit a new request or check the status of an open one.",
    cta: "Send a request",
    href: "/contact",
  },
  {
    title: "Large Files",
    description: "Too big for email? Send files to the team here.",
    cta: "Send Large Files",
    href: "https://x.onehub.com/dropboxes/68zm7qd2/drops/new",
    external: true,
  },
  {
    title: "eNewsletters",
    description: "Log in to Constant Contact to send eNewsletters.",
    cta: "Login to Constant Contact",
    href: "https://www.constantcontact.com/",
    external: true,
  },
];

export default function ClientResourcesPage() {
  return (
    <>
      <Cursor />
      <RevealInit />
      <Nav />

      <main>
        {/* Hero */}
        <section
          style={{
            background: "#F4F3F1",
            padding: "200px 0 100px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-140px",
              right: "-160px",
              width: "620px",
              height: "620px",
              background:
                "radial-gradient(circle, rgba(247,120,55,0.14) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <div
            className="content-wrap"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="reveal" style={{ maxWidth: "720px" }}>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#F77837",
                  marginBottom: "20px",
                }}
              >
                For our clients
              </p>
              <h1
                style={{
                  fontFamily:
                    'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "clamp(2.8rem, 5vw, 4.75rem)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: "#0E0E0E",
                  marginBottom: "24px",
                }}
              >
                Client <span style={{ color: "#F77837" }}>Resources</span>
              </h1>
              <p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.7,
                  color: "#7A7670",
                }}
              >
                Quick links to the tools you use with us every day — webmail,
                remote support, file transfers, and more. Bookmark this page.
              </p>
            </div>
          </div>
        </section>

        {/* Resource cards */}
        <section className="section-pad" style={{ background: "#fff" }}>
          <div className="content-wrap">
            <div
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
            >
              {resources.map((r) => (
                <Link
                  key={r.title}
                  href={r.href}
                  target={r.external ? "_blank" : undefined}
                  rel={r.external ? "noopener noreferrer" : undefined}
                  data-hover
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "20px",
                    background: "#F4F3F1",
                    borderRadius: "20px",
                    padding: "32px",
                    textDecoration: "none",
                    color: "#0E0E0E",
                    minHeight: "220px",
                    transition: "transform 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-4px)";
                    el.style.background = "#EFEDE8";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "none";
                    el.style.background = "#F4F3F1";
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily:
                          'var(--font-display, "Bricolage Grotesque", sans-serif)',
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                        marginBottom: "10px",
                      }}
                    >
                      {r.title}
                      <span style={{ color: "#F77837" }}>.</span>
                    </div>
                    <p
                      style={{
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        color: "#7A7670",
                      }}
                    >
                      {r.description}
                    </p>
                  </div>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: "#F77837",
                    }}
                  >
                    {r.cta} {r.external ? "↗" : "→"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact helper */}
        <section
          className="section-pad"
          style={{ background: "#F4F3F1", paddingTop: "60px", paddingBottom: "60px" }}
        >
          <div className="content-wrap">
            <div
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "40px",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#F77837",
                }}
              >
                Can&apos;t find it?
              </p>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  color: "#0E0E0E",
                }}
              >
                Give the team a call at{" "}
                <Link
                  href="tel:19564232233"
                  style={{ color: "#F77837", textDecoration: "none", fontWeight: 700 }}
                >
                  956.423.2233
                </Link>{" "}
                or{" "}
                <Link
                  href="/contact"
                  style={{ color: "#F77837", textDecoration: "none", fontWeight: 700 }}
                >
                  send us a message
                </Link>
                {" "}— we&apos;ll point you in the right direction.
              </p>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
