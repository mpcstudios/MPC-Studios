# MPC Studios — Website TODO

Living checklist of website work, derived from the May 1 + May 4, 2026
planning syncs and ongoing iteration. Update this file when items ship —
keep it accurate so the launch checklist stays honest.

**Launch target:** **Friday, May 8, 2026** — locked in at the May 4 team
meeting. Launch over polish; iteration continues post-launch.

---

## Navigation & global

- [x] Move Industries from header into footer (May 1 morning)
- [x] **Reverse course:** put Industries dropdown back in the header
      (Banking · Legal · Construction · Research) — confirmed at May 4
      meeting that Industries belongs in the header
- [x] Rename "Resources" to "Blog" everywhere (route + label + folder)
- [x] **Remove the "Contact" nav link** — May 4 decision: drop the
      redundant Contact item from the top nav and leave the
      "Start a project" CTA as the single contact path
- [x] Cross-link Industries ↔ Work pages
      - Each Industry page lists the relevant case studies (already done
        via auto-filter)
      - Each Work case study now ends with a "More <industry> work"
        section linking to the matching `/industries/<slug>` page
- [ ] FAQ section — **deferred to Phase 2**, not blocking launch

---

## Homepage

- [x] Wire homepage CTAs to real routes (no more `#anchor` placeholders)
- [x] Match active-link state in nav across routes
- [x] **Apply Work-index card layout to homepage Selected Work**
      (offset 2-column grid, floating stat overlay, corner arrow,
      industry badge — `ProjectGridCard` shared between both surfaces)
- [ ] **Cards need real cover images** instead of monogram placeholders
      — May 4 decision: use **existing live-site screenshots** for any
      project missing a hero image, no design placeholders
- [ ] **Hover interactions on cards** — pick one direction:
      - Card expands on hover to reveal more case-study content
      - Or a "Made by Shape"–style badge / label slide-in
      - Animations should **trigger on hover, not loop continuously**
- [ ] **Stat boxes (homepage hero floating cards) — finalize purpose**
      — David Watkins flagged at May 4 that the function isn't clear
- [ ] Confirm client-logo order
- [ ] Source ≥ 4 testimonials so the homepage row reads balanced
      (Kate chasing David Watkins + Heather; team-wide challenge from
      the May 1 sync — each member except Nico brings back 1 quote)

---

## Work / case studies

- [x] Replace numbered row index with industry badge + description + stat
- [x] Apply tan-hero / white-body pattern on detail pages
- [x] **Switch the Work index to a 2-column grid** with floating stat
      card overlay on each image (matches the homepage Selected Work
      look)
- [x] **Minimal Work hero** — bold title only ("Our work."), no
      subhead or decorative copy
- [x] **Stagger left/right columns** — left column sits ~96px higher
      than right (homepage rhythm applied to /work)
- [ ] **Add missing case studies** — Sal to generate using the
      case-study skill, prioritizing **AI / Automation / Portfolio**
      projects. Suggested examples from May 4: **Coursera integration**
      (custom software) and **Rialto** (AI/automation)
- [ ] **Rialto access for Kate** — David McDonald to either grant Kate
      Rialto admin access OR capture screenshots so it can be used as
      a case-study example
- [ ] **More images on individual project pages** — beyond the cover
      shot, add supporting visuals on each `/work/[slug]` page
- [ ] Project page imagery — Kate to produce static images first, then
      videos / animations (perf priority)

---

## Subpage hero pattern

- [x] All subpages open on tan (`#F4F3F1`), next section contrasts
- [ ] Standardize subpage headers to **minimal text-only style** so
      large imagery can lead the page (Work index already shipped this
      pattern)

---

## Industries

- [x] `/industries` index + four detail pages (banking, legal,
      construction, research) with hero, intro, stats, why MPC, filtered
      case studies, filtered testimonials, CTA
- [ ] Mirror the "industry layout" treatment from the
      `/services/website-design-development` page across the rest of
      the site (industry-specific landing pages linking to relevant work)
- [ ] **Consider a Banking sub-track for AI & Automation** — Sal's
      suggestion at May 4. Could be a banking-focused entry point on
      `/services/ai-automation` or a dedicated industry+service page

---

## Services

- [x] Per-service subpages with hero composition (browser / phone /
      chat / analytics / gallery visuals)
- [x] Hero accent overlap consistent across all five service pages
- [ ] **Black sections need life** — David flagged that the dark layout
      blocks Claude generated are competent but flat. Add one of:
      - subtle background texture
      - per-section animation
      - interaction on hover
- [ ] Replace the generic 01/02/03 numerals in dark sections with
      icons (Kate's idea)

---

## CTA component

- [ ] Customize the CTA section per-page rather than reusing the
      same block site-wide. Each page should have a CTA tailored to
      its context (e.g., "Talk to a banking specialist" on
      /industries/banking)

---

## Blog

- [x] Renamed from `/resources` → `/blog`
- [x] Featured rail: 1 hero (Digital Marketing) + 5 stacked
      (Web Design, AI & Automation, Branding, Content, Strategy)
- [x] Merged "Software" category into "AI & Automation"
- [x] Category rows: top 3 posts each + "View all" CTA
- [ ] Decide whether to ship guides / playbooks / AI education content
      tracks at launch or push to Phase 2 alongside FAQs

---

## About page

- [ ] **Team photos via Higsfield AI tool** — May 4 plan: 15-min
      session with Jen, Sal, and Kate to capture **80 selfies each**
      in front of a window. Selfies feed Higsfield to generate
      professional character photos for the site
      - [ ] Schedule the photo session (David McDonald, Jen, Sal, Kate)
      - [ ] Capture selfies (Jen, Sal, Kate — fallback if shoot is
            inconvenient)
- [ ] Add testimonials section to balance the page
- [ ] Apply same "needs life" pass to the dark blocks

---

## Feedback / review process

- [ ] **David Watkins to submit consolidated website feedback** — Kate
      Hurry triages and prioritizes the list to avoid a "quilted"
      patchwork of unrelated tweaks
- [ ] **Send NPC review link to Jen Sanchez** (David McDonald, Kate)

---

## Infrastructure / dev experience

- [x] Migrate to GitHub App auth + Infisical-managed secrets (merge
      from main)
- [x] Local Windows dev unblocked (corepack pin, Git Bash shim,
      Infisical bash exec, MSYS path workaround via `//sites/...`)
- [ ] Wire Infisical → Vercel **Preview** environment so the `mac`
      branch (and any future branch) builds cleanly without manual
      env-var copying

---

## Sales / outreach (non-website but tracked)

- [ ] David: announce launch date to the group, gather pushback
- [ ] Initiate proactive sales outreach (current pipeline is dry)
- [ ] Monday call challenge: each team member (except Nico) brings
      back 1 client testimonial

---

_Last updated: May 4, 2026 — incorporates May 4 team-meeting decisions._
