import { notFound } from "next/navigation";
import Link from "next/link";
import Cursor from "@/components/Cursor";
import RevealInit from "@/components/RevealInit";
import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

type ServiceContent = {
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  summary: string;
  intro: string[];
  deliverables: { title: string; desc: string }[];
  capabilities?: { title: string; desc: string }[];
  process: { num: string; title: string; desc: string }[];
  industries?: string[];
  next: { slug: string; name: string };
};

const services: Record<string, ServiceContent> = {
  "website-design-development": {
    slug: "website-design-development",
    eyebrow: "Websites built to perform",
    title: "Website Design &",
    titleAccent: "Development",
    summary:
      "Custom websites engineered for performance, security, and conversion. Designed around your business goals — not a template library.",
    intro: [
      "Every MPC site is built from scratch to match the way your business actually works. We start with discovery — learning your audience, your goals, your competitive landscape — and design the site around the outcomes you need.",
      "Our builds range from focused brochure sites to multi-page platforms with advanced integrations, animations, and multi-language support. Whatever the scope, the foundations are the same: clean semantic code, modern performance, and SEO baked in from day one.",
    ],
    deliverables: [
      {
        title: "Fully custom design",
        desc: "No templates. Every page is designed for your brand, your content, and your audience.",
      },
      {
        title: "Performance-first build",
        desc: "Next.js, modern rendering, optimized media, and accessibility built into every component.",
      },
      {
        title: "SEO foundations",
        desc: "Keyword-targeted page structures, meta data, schema markup, and technical health on launch.",
      },
      {
        title: "Blog & CMS setup",
        desc: "Content models configured so your team — or ours — can publish without touching code.",
      },
      {
        title: "Integrations",
        desc: "CRMs, booking tools, payment processors, mapping, analytics — connected cleanly.",
      },
      {
        title: "ADA & multi-language ready",
        desc: "Accessibility baseline on every build; full ADA compliance and multi-language available at the top scope.",
      },
    ],
    capabilities: [
      {
        title: "Ownership, clearly defined",
        desc: "You own every word, image, and document you provide. MPC maintains the code, design, and infrastructure — so nothing rots between releases.",
      },
      {
        title: "Hosting & quick-fix support",
        desc: "Secure hosting, backups, software updates, and same-day quick-fix support for small content changes are included with every managed site.",
      },
      {
        title: "Financing available",
        desc: "Pay for your build upfront or fold it into a 12, 24, or 36-month payment plan alongside your hosting.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Discovery",
        desc: "We learn your business, audience, and goals — and define what success looks like.",
      },
      {
        num: "02",
        title: "Strategy & wireframes",
        desc: "Sitemap, content strategy, and wireframes signed off before design begins.",
      },
      {
        num: "03",
        title: "Design & build",
        desc: "Visual design, then engineering — iterating with you at each milestone.",
      },
      {
        num: "04",
        title: "Launch & optimize",
        desc: "QA, ADA checks, analytics wiring, and post-launch tuning.",
      },
    ],
    industries: [
      "Banks & credit unions",
      "Law firms",
      "Healthcare & dental",
      "Professional services",
      "Construction & industrial",
      "Government & nonprofits",
    ],
    next: { slug: "custom-software", name: "Custom Software Applications" },
  },

  "custom-software": {
    slug: "custom-software",
    eyebrow: "Applications built to spec",
    title: "Custom Software",
    titleAccent: "Applications",
    summary:
      "Internal tools, portals, and full-stack applications that solve problems off-the-shelf software can't. Designed for scale, built to last.",
    intro: [
      "When your workflow doesn't fit a SaaS product, we build the one that does. MPC has 28 years of application experience — from intranet portals and internal dashboards to customer-facing platforms that sit at the heart of a business.",
      "Every build starts with understanding the work: who uses the system, what they do with it, and what breaks when it's missing. From there we architect for the next five years, not the next sprint.",
    ],
    deliverables: [
      {
        title: "Internal tools & dashboards",
        desc: "Replace spreadsheets and disconnected tools with a single source of truth your team actually uses.",
      },
      {
        title: "Customer & client portals",
        desc: "Secure, branded experiences for your customers — document exchange, account access, self-service workflows.",
      },
      {
        title: "Full-stack web applications",
        desc: "Multi-user platforms with authentication, role-based access, and the data model your business needs.",
      },
      {
        title: "API & system integrations",
        desc: "Connect legacy systems, third-party APIs, and new tooling into one coherent workflow.",
      },
      {
        title: "Compliance-aware builds",
        desc: "Banking, healthcare, and legal clients get security practices and audit trails sized for their industry.",
      },
      {
        title: "Ongoing support",
        desc: "Every application we ship is an application we maintain — patches, updates, and feature work over time.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Discovery",
        desc: "Interviews, workflow mapping, and a written scope so everyone sees the same picture.",
      },
      {
        num: "02",
        title: "Architecture",
        desc: "Data model, user roles, integrations, and infrastructure planned before code is written.",
      },
      {
        num: "03",
        title: "Build in phases",
        desc: "Working software in weeks, not months — milestones you can try and react to.",
      },
      {
        num: "04",
        title: "Launch & evolve",
        desc: "Deploy, train your team, measure usage, and keep iterating against real data.",
      },
    ],
    industries: [
      "Banking & financial services",
      "Legal & professional services",
      "Construction & logistics",
      "Manufacturing & distribution",
      "Healthcare operations",
      "Government & public sector",
    ],
    next: { slug: "ai-automation", name: "AI & Automation" },
  },

  "ai-automation": {
    slug: "ai-automation",
    eyebrow: "Intelligent systems, real leverage",
    title: "AI &",
    titleAccent: "Automation",
    summary:
      "Chatbots, automation workflows, and AI-powered tooling that reduce manual work and give your team a competitive edge.",
    intro: [
      "AI is part of how MPC delivers every service — it's how our team produces higher-quality work at a pace traditional agencies can't match. For clients who need it, we also build AI and automation directly into their business.",
      "These aren't one-size-fits-all chatbots bolted onto a homepage. We design each system around a real workflow — handling support questions, routing leads, cleaning data, generating reports — and keep a human in the loop where it matters.",
    ],
    deliverables: [
      {
        title: "AI chatbots",
        desc: "Trained on your content, integrated with your site, and maintained as your knowledge base grows.",
      },
      {
        title: "Custom automation workflows",
        desc: "From lead intake to document routing to internal reporting — the repetitive work, handled automatically.",
      },
      {
        title: "AI-powered dashboards",
        desc: "Surfacing the insights buried in your analytics, reporting, and operational data.",
      },
      {
        title: "Content production acceleration",
        desc: "MPC's MPCSocial and content tooling pair AI drafts with human editors for faster, better output.",
      },
      {
        title: "Internal operations AI",
        desc: "Summaries, classifications, search, and assistants for the systems your team lives in.",
      },
      {
        title: "Ongoing training & expansion",
        desc: "Every deployment is a starting point — we tune, expand, and retrain as your business grows.",
      },
    ],
    capabilities: [
      {
        title: "Human-in-the-loop",
        desc: "We don't automate away accountability. Every AI workflow has review, oversight, and guardrails sized to the stakes.",
      },
      {
        title: "Built on your data",
        desc: "Chatbots and assistants are grounded in your documentation, policies, and content — not a generic model.",
      },
      {
        title: "Maintained, not launched",
        desc: "AI systems drift if you leave them alone. Our plans include ongoing monitoring, evaluation, and improvement.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Identify the workflow",
        desc: "Find the real repetitive work — not the demo-friendly use case.",
      },
      {
        num: "02",
        title: "Prototype",
        desc: "Build a working version fast, then measure it against the current manual process.",
      },
      {
        num: "03",
        title: "Integrate",
        desc: "Wire the tool into your systems — CRM, email, site, ops platform — with security and access controls.",
      },
      {
        num: "04",
        title: "Monitor & improve",
        desc: "Track quality, expand scope, and retrain as your content and business change.",
      },
    ],
    next: { slug: "content-creation", name: "Content Creation" },
  },

  "content-creation": {
    slug: "content-creation",
    eyebrow: "Stories that connect",
    title: "Content",
    titleAccent: "Creation",
    summary:
      "Photography, video, graphics, and written content that tells your story and connects with your audience across every platform.",
    intro: [
      "Great digital marketing needs something real to market. We produce the photography, video, graphics, and long-form content that feeds your website, your social, your email — the raw material your brand runs on.",
      "Our creative work is always in service of a strategy. Shoots are planned against content calendars; blog posts are tied to keyword targets; graphics are built to perform across every channel they land in.",
    ],
    deliverables: [
      {
        title: "Blog posts & long-form",
        desc: "Keyword-targeted articles, case studies, and thought-leadership pieces — AI-drafted, human-edited, published to your site.",
      },
      {
        title: "Social content",
        desc: "Branded posts, graphics, and short-form video produced on a regular cadence across your chosen platforms.",
      },
      {
        title: "Photography",
        desc: "On-location and studio shoots — team portraits, product, lifestyle, and brand imagery.",
      },
      {
        title: "Video",
        desc: "Brand films, testimonials, social clips, and executive interview content — scripted, shot, and edited in-house.",
      },
      {
        title: "Design & graphics",
        desc: "Illustrations, infographics, flyers, decks, and original graphics that extend your visual identity.",
      },
      {
        title: "Executive content",
        desc: "Recorded interviews with leadership, repurposed into blog posts, social content, and newsletter material.",
      },
    ],
    capabilities: [
      {
        title: "Voice & compliance",
        desc: "We adapt tone for your brand and build a compliance review step for regulated industries — banks, healthcare, legal.",
      },
      {
        title: "Cross-channel repurposing",
        desc: "One shoot, many deliverables. Content is planned so a single asset can live on site, social, email, and ads.",
      },
      {
        title: "Always on a calendar",
        desc: "You see the next month of content before it ships — approvals, edits, and swaps handled in one place.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Content strategy",
        desc: "Audience, themes, pillars, and platforms — aligned to the results you're measuring.",
      },
      {
        num: "02",
        title: "Calendar & briefs",
        desc: "A monthly calendar with briefs for every post, shoot, and article — shared for your review.",
      },
      {
        num: "03",
        title: "Produce",
        desc: "Write, shoot, design, edit — with your brand guidelines and compliance rules baked in.",
      },
      {
        num: "04",
        title: "Publish & repurpose",
        desc: "Distribute across channels, track engagement, and feed the next month's plan.",
      },
    ],
    next: { slug: "digital-marketing", name: "Digital Marketing Strategy" },
  },

  "digital-marketing": {
    slug: "digital-marketing",
    eyebrow: "A coordinated marketing system",
    title: "Digital Marketing",
    titleAccent: "Strategy",
    summary:
      "SEO, paid media, email, social, and local presence — working as a system, not a checklist. One team, one bill, compounding results.",
    intro: [
      "MPC Studios is not a vendor you hire for tasks. We're a marketing department that scales with your business. Your social feeds your content, your content powers your SEO, your SEO drives your site, your site converts traffic into email, and reporting ties the whole thing together.",
      "We pair senior strategists with AI-augmented delivery to produce more output per dollar than a traditional agency or freelancer setup — and to keep results compounding year over year.",
    ],
    deliverables: [
      {
        title: "Social Media Management",
        desc: "Content calendars, branded graphics, scheduled posting, and active engagement monitoring across your chosen platforms.",
      },
      {
        title: "Content Marketing",
        desc: "SEO-targeted blog posts, long-form content, and thought leadership — AI-drafted and human-edited, with compliance review where it's needed.",
      },
      {
        title: "SEO",
        desc: "Technical audits, keyword strategy, on-page optimization, backlink monitoring, and local SEO across all your locations.",
      },
      {
        title: "Email Marketing",
        desc: "Newsletters, campaigns, automations, and segmentation — from welcome sequences to full marketing automation.",
      },
      {
        title: "Paid Advertising",
        desc: "Google, Meta, and platform-specific campaigns. We manage strategy, creative, and optimization; you pay platforms directly — no ad-spend markup.",
      },
      {
        title: "Local Presence",
        desc: "Google Business Profile optimization, review monitoring and response, and citation consistency across the directories that matter.",
      },
    ],
    capabilities: [
      {
        title: "A senior strategist, not a coordinator",
        desc: "You work with a strategist who knows your business, reviews the data, and adjusts direction — not a rotating cast of account managers.",
      },
      {
        title: "Clear reporting",
        desc: "Every engagement includes performance reporting sized to scope — monthly snapshots at the entry level, comprehensive dashboards for full-system clients.",
      },
      {
        title: "Compounding results",
        desc: "Year two beats year one. The longer we work together, the more data, assets, and institutional knowledge we compound on your behalf.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Audit & goals",
        desc: "Review your current marketing, analytics, and competitive landscape — and agree on what we're measuring.",
      },
      {
        num: "02",
        title: "Plan",
        desc: "A coordinated plan across channels, with owners, cadences, and targets for each service.",
      },
      {
        num: "03",
        title: "Run",
        desc: "Execute across social, content, SEO, email, paid, and local — as one system, not five vendors.",
      },
      {
        num: "04",
        title: "Review & adjust",
        desc: "Regular strategy calls and reporting — so we're acting on data, not hunches.",
      },
    ],
    industries: [
      "Banks & credit unions",
      "Law firms",
      "Healthcare & dental",
      "Restaurants & hospitality",
      "Professional services",
      "Retail & e-commerce",
      "Manufacturing & industrial",
      "Real estate",
      "Nonprofits",
      "Government & public",
    ],
    next: { slug: "website-design-development", name: "Website Design & Development" },
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = services[slug];
  if (!data) notFound();

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
          <div className="content-wrap" style={{ position: "relative", zIndex: 1 }}>
            <Link
              href="/services"
              className="reveal"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#7A7670",
                textDecoration: "none",
                marginBottom: "28px",
              }}
            >
              ← All services
            </Link>
            <div className="reveal reveal-d1" style={{ maxWidth: "820px" }}>
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
                {data.eyebrow}
              </p>
              <h1
                style={{
                  fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "clamp(2.8rem, 5vw, 4.75rem)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: "#0E0E0E",
                  marginBottom: "28px",
                }}
              >
                {data.title}
                {data.titleAccent && (
                  <>
                    {" "}
                    <span style={{ color: "#F77837" }}>{data.titleAccent}</span>
                  </>
                )}
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: 1.6,
                  color: "#7A7670",
                  maxWidth: "680px",
                }}
              >
                {data.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="section-pad" style={{ background: "#fff" }}>
          <div className="content-wrap">
            <div
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "60px",
                alignItems: "start",
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
                Overview
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {data.intro.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "1.15rem",
                      lineHeight: 1.7,
                      color: "#0E0E0E",
                      maxWidth: "720px",
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section
          className="section-pad"
          style={{ background: "#0E0E0E", color: "#fff" }}
        >
          <div className="content-wrap">
            <div className="reveal" style={{ marginBottom: "60px", maxWidth: "720px" }}>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#F77837",
                  marginBottom: "16px",
                }}
              >
                What&apos;s included
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                Deliverables, not promises.
              </h2>
            </div>

            <div
              className="reveal reveal-d1"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "28px",
              }}
            >
              {data.deliverables.map((d) => (
                <div
                  key={d.title}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    padding: "28px",
                  }}
                >
                  <div
                    style={{
                      fontFamily:
                        'var(--font-display, "Bricolage Grotesque", sans-serif)',
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "10px",
                    }}
                  >
                    {d.title}
                  </div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities (optional) */}
        {data.capabilities && data.capabilities.length > 0 && (
          <section className="section-pad" style={{ background: "#F4F3F1" }}>
            <div className="content-wrap">
              <div
                className="reveal"
                style={{ marginBottom: "50px", maxWidth: "720px" }}
              >
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#F77837",
                    marginBottom: "16px",
                  }}
                >
                  How we work
                </p>
                <h2
                  style={{
                    fontFamily:
                      'var(--font-display, "Bricolage Grotesque", sans-serif)',
                    fontSize: "clamp(2rem, 3.5vw, 3rem)",
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    color: "#0E0E0E",
                  }}
                >
                  Built around the way your business actually runs.
                </h2>
              </div>
              <div
                className="reveal reveal-d1"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "24px",
                }}
              >
                {data.capabilities.map((c) => (
                  <div
                    key={c.title}
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
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "#0E0E0E",
                        marginBottom: "10px",
                      }}
                    >
                      {c.title}
                    </div>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        color: "#7A7670",
                      }}
                    >
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Process */}
        <section className="section-pad" style={{ background: "#fff" }}>
          <div className="content-wrap">
            <div className="reveal" style={{ marginBottom: "60px" }}>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#F77837",
                  marginBottom: "16px",
                }}
              >
                Our process
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.18,
                  letterSpacing: "-0.02em",
                  color: "#0E0E0E",
                }}
              >
                Four phases, every engagement.
              </h2>
            </div>
            <div
              className="reveal reveal-d1"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "24px",
              }}
            >
              {data.process.map((p) => (
                <div
                  key={p.num}
                  style={{
                    background: "#F4F3F1",
                    borderRadius: "20px",
                    padding: "32px",
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
                      marginBottom: "12px",
                    }}
                  >
                    {p.num}
                  </div>
                  <div
                    style={{
                      fontFamily:
                        'var(--font-display, "Bricolage Grotesque", sans-serif)',
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#0E0E0E",
                      marginBottom: "10px",
                    }}
                  >
                    {p.title}
                  </div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: "#7A7670",
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        {data.industries && data.industries.length > 0 && (
          <section
            className="section-pad"
            style={{ background: "#F4F3F1" }}
          >
            <div className="content-wrap">
              <div
                className="reveal"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "60px",
                  alignItems: "start",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#F77837",
                      marginBottom: "16px",
                    }}
                  >
                    Who it&apos;s for
                  </p>
                  <h2
                    style={{
                      fontFamily:
                        'var(--font-display, "Bricolage Grotesque", sans-serif)',
                      fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                      fontWeight: 800,
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                      color: "#0E0E0E",
                    }}
                  >
                    Industries we know well.
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  {data.industries.map((i) => (
                    <span
                      key={i}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        background: "#fff",
                        color: "#0E0E0E",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        padding: "12px 20px",
                        borderRadius: "100px",
                      }}
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Next service */}
        <section
          className="section-pad"
          style={{ background: "#fff", paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="content-wrap">
            <Link
              data-hover
              href={`/services/${data.next.slug}`}
              className="reveal"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "40px",
                padding: "40px 0",
                borderTop: "1px solid rgba(0,0,0,0.08)",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                textDecoration: "none",
                color: "#0E0E0E",
                cursor: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#7A7670",
                }}
              >
                Next service
              </span>
              <span
                style={{
                  fontFamily:
                    'var(--font-display, "Bricolage Grotesque", sans-serif)',
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  textAlign: "right",
                }}
              >
                {data.next.name} →
              </span>
            </Link>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
