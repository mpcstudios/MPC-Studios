# MPC Studios

**Texas-based digital agency delivering results since 1998.**

Bold. Modern. Built to perform.

---

## About

MPC Studios is a Texas-based agency with over 25 years of experience serving clients in banking, legal, construction, and related industries. We design and build digital experiences focused on performance, clarity, and measurable results.

### Core Services

- **Website Design & Development:** Custom, high-performance websites built for scale.
- **Content Marketing:** Strategic content that converts and builds authority.
- **AI & Automations:** Intelligent systems that streamline operations and reduce overhead.

---

## Design Direction

- **Color Scheme:** Near-black (`#0E0E0E`) and orange (`#F77837`).
- **Aesthetic:** Clean white backgrounds, bold typography, purposeful whitespace.
- **Display font:** Bricolage Grotesque (variable: `--font-display`) — all headings
- **Body font:** DM Sans (variable: `--font-body`)
- **Orange on typography:** solid `#F77837` via `.text-gradient` class
- **Orange on buttons:** warm gradient via `.btn-gradient` class (`#fe6e64` → `#ffc14f`)
- **Motion:** Staggered fade-up on hero (`.anim-fu1–4`), float on cards (`.anim-float`), scroll reveal (`.reveal`)

### Design References

- [Made By Shape](https://madebyshape.co.uk/) — Editorial hierarchy and whitespace.
- [Glide Design](https://www.glidedesign.com/) — Agency polish and service presentation.

---

## Tech Stack

- [Next.js 16](https://nextjs.org/) — App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) — CSS-first config in `globals.css`
- Package manager: npm

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install dependencies

```bash
npm install
# or
 # yarn
```

### Run the development server

```bash
npm run dev
# or
 # yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Sitemap & Layout Inventory

See [`SITEMAP.MD`](./SITEMAP.MD) for the canonical list of pages and every row layout (`gridTemplateColumns`) currently in use. **Update that file whenever a page is added, removed, or restructured, or when a new row layout is introduced.**

---

## Project Structure

```
mpc-studios/
├── app/
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── globals.css          # Tailwind v4 config, CSS variables, animations
│   ├── page.tsx             # Homepage (assembles components)
│   ├── services/page.tsx    # Services page (placeholder)
│   ├── work/page.tsx        # Work/portfolio page (placeholder)
│   ├── about/page.tsx       # About page (placeholder)
│   ├── resources/page.tsx   # Resources/blog page (placeholder)
│   └── contact/page.tsx     # Contact page (placeholder)
├── components/
│   ├── Nav.tsx              # Fixed top nav with logo + links
│   ├── Hero.tsx             # Two-column hero with floating cards
│   ├── Marquee.tsx          # Dark scrolling services ticker
│   ├── ClientLogos.tsx      # Animated logo marquee
│   ├── Work.tsx             # Project gallery
│   ├── Services.tsx         # Services list
│   ├── About.tsx            # About section
│   ├── Testimonials.tsx     # Client testimonials
│   ├── CTA.tsx              # Call-to-action section
│   ├── Footer.tsx           # Site footer
│   ├── Cursor.tsx           # Custom cursor
│   └── RevealInit.tsx       # Scroll reveal observer
└── public/
    └── brand/               # Logo files (Black MPC Studios Logo.svg, White Logo.svg)
```

---

## Git Workflow

- Commit and push regularly. If it's not on GitHub, it doesn't exist.

```bash
git add .
git commit -m "description of changes"
git push
```

---

## Mobile & Responsive Design

- **Mobile-first always** — design and build for small screens first, then enhance for larger viewports.
- All layouts must be fully functional and visually clean at 375px (iPhone SE) and up.
- Use fluid typography (`clamp()`) for headings rather than fixed sizes.
- Stack multi-column layouts to a single column on mobile.
- The hero visual (floating cards) hides on mobile — content column takes full width.
- The nav hides desktop links on mobile — a hamburger or simplified nav is used instead.
- Touch targets (buttons, links) must be at least 44px tall.
- No horizontal scroll at any viewport width.
- Test at 375px, 768px, and 1280px breakpoints before considering a section complete.

## Accessibility & Performance

- Prioritize semantic HTML and keyboard accessibility.
- Optimize images and use modern formats (WebP/AVIF) where appropriate.
- Measure performance with Lighthouse and address regressions early.

---

## Contact

For project inquiries or collaboration, replace the placeholders below with your real contact details:

- Email: hello@example.com
- Website: https://example.com

---

## Client Industries

Banking · Law · Construction · and more

---

*MPC Studios — Est. 1998 — Texas*
