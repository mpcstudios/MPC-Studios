# MPC Studios — Website TODO

Living checklist of website work, derived from the May 1, 2026 planning
sync (David + Kate) and ongoing iteration. Update this file when items
ship — keep it accurate so the launch checklist stays honest.

**Launch target:** end of week of May 4, 2026 (announce + push back if needed)

---

## Navigation & global

- [x] Move Industries from header into footer (May 1 morning)
- [x] **Reverse course:** put Industries dropdown back in the header
      (Banking · Legal · Construction · Research)
- [x] Rename "Resources" to "Blog" everywhere (route + label + folder)
- [ ] Decide whether to keep both "Contact" link **and** "Start a project"
      CTA in the header — David Watkins wants a contact method visible.
      Likely fix: replace one with a visible **phone number** in the bar.
- [ ] Cross-link Industries ↔ Work pages
      - Each Industry page lists the relevant case studies (already done
        via auto-filter)
      - Each Work case study links to the matching Industry page
- [ ] FAQ section — **deferred to Phase 2**, not blocking launch

---

## Homepage

- [x] Wire homepage CTAs to real routes (no more `#anchor` placeholders)
- [x] Match active-link state in nav across routes
- [ ] **Cards need real images** instead of monogram placeholders
      (Selected Work + Services sections)
- [ ] **Hover interactions on cards** — pick one direction:
      - Card expands on hover to reveal more case-study content
      - Or a "Made by Shape"–style badge / label slide-in
      - Set animations to **trigger on hover, not loop continuously**
- [ ] Source ≥ 4 testimonials so the homepage row reads balanced
      (Kate to chase David Watkins + Heather; Monday challenge for the
      whole team to bring back 1 each except Nico)

---

## Work / case studies

- [x] Replace numbered row index with industry badge + description + stat
- [x] Apply tan-hero / white-body pattern on detail pages
- [x] **Switch the Work index to a 2-column grid** with floating stat
      card overlay on each image (matches the homepage Selected Work
      look)
- [x] **Minimal Work hero** — bold title only ("Our work."), no
      subhead or decorative copy
- [ ] Add the missing case studies to round out ~12 total
- [ ] Project page imagery — Kate to produce static images first,
      then videos / animations (perf priority)

---

## Subpage hero pattern

- [x] All subpages open on tan (`#F4F3F1`), next section contrasts
- [ ] Standardize subpage headers to **minimal text-only style** so
      large imagery can lead the page (Work page especially — see above)

---

## Industries

- [x] `/industries` index + four detail pages (banking, legal,
      construction, research) with hero, intro, stats, why MPC, filtered
      case studies, filtered testimonials, CTA
- [ ] Cross-link from each Industry detail page back to the Work index
      / individual case studies
- [ ] Mirror the "industry layout" treatment from the
      `/services/website-design-development` page across the rest of
      the site (industry-specific landing pages linking to relevant work)

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

- [ ] **Team photos** — David to schedule one-on-one photo sessions
      (~60 source images per person) and feed them through the
      Higsfield AI headshot tool
- [ ] Add testimonials section to balance the page
- [ ] Apply same "needs life" pass to the dark blocks

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

_Last updated: May 1, 2026_
