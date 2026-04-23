# MPC Studios — Sitemap & Layout Inventory

A living map of every page on the site and every row layout (CSS grid template) currently in use. Update this file whenever a page is added, removed, or restructured.

---

## Pages

| Path | File | Description |
|------|------|-------------|
| `/` | `app/page.tsx` | **Homepage.** Composes the full marketing narrative: `Nav` → `Hero` → `ClientLogos` → `Services` → `Work` → `About` → `Testimonials` → `CTA` → `Footer`. |
| `/services` | `app/services/page.tsx` | **Services.** Hero intro → dark services list (5 services, each links to its detail page) → 4-step process → CTA. |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | **Service detail.** Hero → overview → dark deliverables grid → optional "how we work" cards → 4-step process → industries tags → next-service link → CTA. Slugs: `website-design-development`, `custom-software`, `ai-automation`, `content-creation`, `digital-marketing`. |
| `/work` | `app/work/page.tsx` | **Work / portfolio.** Hero intro → offset 2-column project grid of 6 real clients (First Community Bank, Roerig Oliveira & Fisher, Nick Turk-Browne Lab, D. Wilson Construction, Texas National Bank, Alfred T. Denham) → testimonials → CTA. |
| `/about` | `app/about/page.tsx` | **About.** Hero intro → stats grid → dark values grid → team grid → CTA. |
| `/resources` | `app/resources/page.tsx` | **Resources / blog.** Hero intro → featured post → 3-column blog grid → dark newsletter signup → CTA. |
| `/contact` | `app/contact/page.tsx` | **Contact.** Hero intro → contact form + contact info panel (no CTA; page is itself the conversion). |
| `/client-resources` | `app/client-resources/page.tsx` | **Client Resources.** Hero intro → 3-column grid of resource cards (Webmail, Remote Support, Support Requests, Large Files, eNewsletters) → contact helper → CTA. Linked only from the footer. |

All pages share `Nav` and `Footer`, plus `Cursor` and `RevealInit` for custom cursor and scroll-reveal animations.

---

## Row Layout Catalog

Every `gridTemplateColumns` value currently in the codebase, grouped by purpose. When introducing a new layout, prefer reusing one of these before inventing a new ratio.

### Hero / asymmetric splits
| Layout | Used in | Purpose |
|--------|---------|---------|
| `11fr 9fr` | `components/Hero.tsx` | Homepage hero: copy column slightly wider than the floating-card visual. |
| `1.5fr 1fr` | `app/contact/page.tsx` | Contact form (wider) + info sidebar. |
| `1fr 2fr` | `components/Testimonials.tsx` | Section heading column + testimonial cards column. |

### Even 2-column
| Layout | Used in | Purpose |
|--------|---------|---------|
| `1fr 1fr` | `components/Work.tsx`, `app/work/page.tsx` (project grid, offset via `margin-top` on right col), `app/work/page.tsx` (testimonials), `components/Testimonials.tsx` (inner), `app/contact/page.tsx` (nested form rows — name/email, service/budget) | General balanced two-column content. |

### Services row (content + price/meta + arrow)
| Layout | Used in | Purpose |
|--------|---------|---------|
| `1fr 1fr auto` | `components/Services.tsx`, `app/services/page.tsx` | Service title · description/tags · trailing arrow or CTA cell. |

### 3-column grids
| Layout | Used in | Purpose |
|--------|---------|---------|
| `repeat(3, 1fr)` | `app/about/page.tsx` (values, team), `app/resources/page.tsx` (blog grid) | Card triptychs — values, team members, blog posts. |

### 4-column grids
| Layout | Used in | Purpose |
|--------|---------|---------|
| `repeat(4, 1fr)` | `components/About.tsx`, `app/about/page.tsx` (stats), `app/services/page.tsx` (process) | Stat quads and 4-step process cards. |

### Marquee / variable
| Layout | Used in | Purpose |
|--------|---------|---------|
| `repeat(${COLS}, 1fr)` | `components/ClientLogos.tsx` | Dynamic column count for the logo marquee. |

---

## Responsive Rules

All multi-column layouts collapse to a single column at ≤1024px via overrides in `app/globals.css` (`.about-grid`, `.testi-outer-grid`, `.testi-inner-grid`, `.work-grid-offset`, `.hero-grid .content-wrap`). New grids should opt into the same breakpoint pattern — see the `@media (max-width: 1024px)` block in `globals.css`.

---

*Keep this file in sync with the codebase. If a page or a row layout lands without a SITEMAP.MD update, the update is part of the change.*
