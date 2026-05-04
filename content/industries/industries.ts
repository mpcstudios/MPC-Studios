/**
 * Industry landing page configs. Each entry powers /industries/[slug]
 * and represents one vertical we serve. The `label` field must match the
 * `industry` value used on a project's frontmatter so the page can pull
 * matching case studies automatically.
 */

export type IndustryStat = {
  value: string;
  label: string;
};

export type IndustryWhy = {
  title: string;
  body: string;
};

export type IndustryConfig = {
  /** URL slug under /industries/<slug> */
  slug: string;
  /** Matches the `industry` value on project frontmatter for filtering */
  label: string;
  /** Short label used in the nav and breadcrumbs */
  navTitle: string;

  metaTitle: string;
  metaDescription: string;

  hero: {
    eyebrow: string;
    title: string;
    titleAccent?: string;
    summary: string;
  };

  intro: {
    eyebrow: string;
    headline: string;
    body: string;
  };

  stats: IndustryStat[];

  why: {
    eyebrow: string;
    headline: string;
    items: IndustryWhy[];
  };

  cta: {
    eyebrow: string;
    headline: string;
    body: string;
  };
};

export const INDUSTRIES: IndustryConfig[] = [
  /* ──────────────────────────  BANKING  ────────────────────────── */
  {
    slug: "banking",
    label: "Banking",
    navTitle: "Banking",
    metaTitle:
      "Banking Websites & Digital Marketing — MPC Studios",
    metaDescription:
      "Digital partner for community banks across Texas. Compliance-aware websites, secure platforms, and content that moves deposits.",
    hero: {
      eyebrow: "Banking",
      title: "Digital partners for",
      titleAccent: "community banks",
      summary:
        "Heritage doesn't have to feel old. We build modern, compliant banking sites that perform like fintech and read like the bank that's been on the corner for a hundred years.",
    },
    intro: {
      eyebrow: "Built for banks",
      headline:
        "A digital practice that respects the regulator and the customer.",
      body: "We've spent two decades building and maintaining sites for community banks across the Rio Grande Valley. We know the cadence — quarterly disclosures, rate changes, branch openings, holiday hours — and we know the technical bar: FDIC compliance, ADA accessibility, secure online-banking handoffs, and uptime that doesn't blink during Friday-afternoon payroll.",
    },
    stats: [
      { value: "20+", label: "Years partnered with community banks" },
      { value: "$1B+", label: "Assets managed by client banks" },
      { value: "FDIC", label: "Compliance handled in-stream" },
    ],
    why: {
      eyebrow: "Why MPC for banking",
      headline: "Three things community bank marketing teams tell us every quarter.",
      items: [
        {
          title: "Same-day content cadence",
          body: "Rate sheets, branch hour updates, foundation campaigns — your team sends a note, and it's live. No tickets, no queues, no agency calendar.",
        },
        {
          title: "Compliance as standard practice",
          body: "FDIC disclosures, ADA accessibility, secure online-banking handoffs, fraud-alert delivery, and TLS hygiene handled as part of the build, not as a separate audit cycle.",
        },
        {
          title: "Heritage without the dust",
          body: "Typography and photography direction that nods to the bank's history without locking it in amber. Modern enough to recruit a McAllen homebuyer; warm enough that a third-generation business owner feels at home.",
        },
      ],
    },
    cta: {
      eyebrow: "Let's build something",
      headline: "Ready to modernize your bank's digital presence?",
      body: "Tell us where you're at — a redesign, a foundation site, ongoing content, or a security audit — and we'll map out next steps.",
    },
  },

  /* ───────────────────────────  LEGAL  ─────────────────────────── */
  {
    slug: "legal",
    label: "Legal",
    navTitle: "Legal",
    metaTitle:
      "Law Firm Websites & Marketing — MPC Studios",
    metaDescription:
      "Authority-first websites and content marketing for South Texas law firms. Built around how attorneys actually evaluate counsel.",
    hero: {
      eyebrow: "Legal",
      title: "Websites that ",
      titleAccent: "win the referral check.",
      summary:
        "Most legal hires happen in five minutes — an attorney recommends a name, opposing counsel checks the website. We design firm sites that close that decision loop instead of starting another phone tree.",
    },
    intro: {
      eyebrow: "Built for firms",
      headline:
        "Information architecture that matches how counsel is actually evaluated.",
      body: "Firms come to us with the same problem: deep bench, distinct practice areas, decades of trial experience — and a site that buries all of it. We rebuild around how the buyer actually decides: claims directors picking outside counsel, attorneys booking a mediator, families looking for representation. Same firm. Different journey. We design for the journey.",
    },
    stats: [
      { value: "300+", label: "Years of combined trial experience represented" },
      { value: "5,500+", label: "Cases mediated through client practices" },
      { value: "5 min", label: "Average time to close a referral check" },
    ],
    why: {
      eyebrow: "Why MPC for legal",
      headline: "What firm marketing partners need from a web team.",
      items: [
        {
          title: "Practice-area architecture",
          body: "Each practice gets its own page, tied to the attorneys who handle it and the venues where they've tried it. Buyers find what they came for above the fold.",
        },
        {
          title: "Calendar-first booking",
          body: "Mediators, consult-driven practices, intake teams — all benefit from a booking flow that lives on every page. Five-minute referral check ends in a confirmed date.",
        },
        {
          title: "Content that targets the actual buyer",
          body: "Not consumer SEO. Not generic blog posts. Practice-area writing pitched at adjusters, claims directors, panel administrators, and referring attorneys. Defense-counsel selection material.",
        },
      ],
    },
    cta: {
      eyebrow: "Let's build something",
      headline: "Ready to modernize your firm's digital presence?",
      body: "From a single attorney bio rebuild to a full firm-wide IA overhaul — tell us where you're at and we'll map out next steps.",
    },
  },

  /* ─────────────────────────  CONSTRUCTION  ────────────────────── */
  {
    slug: "construction",
    label: "Construction",
    navTitle: "Construction",
    metaTitle:
      "Construction Company Websites — MPC Studios",
    metaDescription:
      "Performance-grade websites for commercial builders. Project portfolios, owner's-rep credibility, and search visibility that closes pre-bid conversations.",
    hero: {
      eyebrow: "Construction",
      title: "Sites built for",
      titleAccent: "the people who hire builders.",
      summary:
        "School superintendents, healthcare planners, owner's reps, and architects don't want a marketing site — they want a portfolio they can read in five minutes. We build for the audience that actually makes the call.",
    },
    intro: {
      eyebrow: "Built for GCs",
      headline:
        "Your reputation lives in the buildings. The site has to do the same.",
      body: "Touring the Rio Grande Valley is touring a commercial builder's portfolio. The pre-redesign site rarely matches the work — small images, hidden awards, no continuity story. We rebuild around the audiences that actually evaluate GCs: the people picking who builds the next school, the next hospital, the next civic project.",
    },
    stats: [
      { value: "$145M", label: "Annual revenue at flagship client" },
      { value: "ENR", label: "Top-100 listings continuously since 2005" },
      { value: "68", label: "Years of Texas building documented" },
    ],
    why: {
      eyebrow: "Why MPC for construction",
      headline: "What separates a builder's site that works.",
      items: [
        {
          title: "Project-first architecture",
          body: "Full-bleed imagery, named, dated, scoped, and sourced. Each project gets its own page with photography, owner, architect, and completion date. The portfolio shows up before any sales copy does.",
        },
        {
          title: "Credibility wall",
          body: "Repeat clients, ENR rankings, AGC awards, ribbon cuttings — surfaced where evaluators actually look. 'They've already built five buildings for the district next door' is the most important data point on the page.",
        },
        {
          title: "Search built for RFPs",
          body: "Structured project data and SEO foundations that put the firm in front of the right Texas commercial-construction queries. Not consumer SEO — bid-shortlist SEO.",
        },
      ],
    },
    cta: {
      eyebrow: "Let's build something",
      headline: "Ready to modernize your firm's digital presence?",
      body: "Whether you need a portfolio rebuild or a full rebrand — tell us where you're at and we'll map out next steps.",
    },
  },

  /* ──────────────────────────  RESEARCH  ───────────────────────── */
  {
    slug: "research",
    label: "Research",
    navTitle: "Research",
    metaTitle:
      "Research Lab Websites — MPC Studios",
    metaDescription:
      "Web design for academic research labs. Built around recruiting, peer credibility, and study participant communication.",
    hero: {
      eyebrow: "Research",
      title: "Lab sites that",
      titleAccent: "recruit.",
      summary:
        "A research lab's website has more jobs than a marketing site. Recruit grad students. Communicate with peers. Welcome study participants. House publications and news. We design sites that handle every audience without the bureaucratic-template feel.",
    },
    intro: {
      eyebrow: "Built for academia",
      headline:
        "A digital practice that matches the gravity of the science.",
      body: "Default university templates lean academic-bureaucratic. Custom builds lean personal-blog. Neither matches the bar of a top-tier research lab competing with the best programs in the country for grad-student and postdoc applicants. We design and build sites that read as serious, organize the work, and welcome the audiences a lab actually depends on.",
    },
    stats: [
      { value: "Yale", label: "Department of Psychology partner" },
      { value: "100+", label: "Peer-reviewed publications surfaced" },
      { value: "Award", label: "National-recognition launches handled" },
    ],
    why: {
      eyebrow: "Why MPC for research",
      headline: "What lab PIs and lab managers ask for from a web team.",
      items: [
        {
          title: "Recruit-grade design",
          body: "Prospective grad students and postdoc applicants are the highest-stakes audience. The site has to read as serious, current, and not generic. We design with that buyer first.",
        },
        {
          title: "Publications and news, current",
          body: "Filterable publication lists with PDFs where rights allow. A news section that surfaces awards, talks, and milestones — keeping the lab's perception aligned with its actual trajectory.",
        },
        {
          title: "Participate, parent-friendly",
          body: "Infant-cognition studies, intracranial recordings, neurofeedback — recruitment depends on community trust. We write the participate page in language parents and participants actually use, not in psych-PhD code.",
        },
      ],
    },
    cta: {
      eyebrow: "Let's build something",
      headline: "Ready to modernize your lab's digital presence?",
      body: "From a single PI page rebuild to a full lab-wide redesign — tell us where you're at and we'll map out next steps.",
    },
  },
];

export function getIndustryBySlug(slug: string): IndustryConfig | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export function getIndustryByLabel(
  label: string | null | undefined,
): IndustryConfig | undefined {
  if (!label) return undefined;
  return INDUSTRIES.find((i) => i.label === label);
}
