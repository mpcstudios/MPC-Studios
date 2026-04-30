import type { Metadata } from "next";
import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { INDUSTRIES } from "@/content/industries/industries";
import IndustryCards from "./IndustryCards";

export const metadata: Metadata = {
  title: "Industries We Serve — MPC Studios",
  description:
    "Banking, legal, construction, and research — vertical practices we know cold. See industry-specific work, expertise, and case studies.",
};

export default function IndustriesIndexPage() {
  return (
    <>
      <Cursor />
      <RevealInit />

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
              top: "-160px",
              right: "-180px",
              width: "640px",
              height: "640px",
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
            <div className="reveal" style={{ maxWidth: "780px" }}>
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
                Industries
              </p>
              <h1
                style={{
                  fontFamily:
                    'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.12,
                  letterSpacing: "-0.03em",
                  color: "#0E0E0E",
                  marginBottom: "24px",
                }}
              >
                Verticals we know cold
              </h1>
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.75,
                  color: "#7A7670",
                }}
              >
                We don&apos;t pretend to be everywhere. We&apos;ve gone deep on
                a handful of industries where the regulatory bar, the buyer
                journey, or the gravity of the work demands a digital partner
                who&apos;s seen it before.
              </p>
            </div>
          </div>
        </section>

        {/* Industry cards */}
        <section
          className="section-pad"
          style={{ background: "#fff" }}
        >
          <div className="content-wrap">
            <IndustryCards industries={INDUSTRIES} />
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
