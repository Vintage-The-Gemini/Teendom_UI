# Teendom Africa — CLAUDE.md

## Project Overview
**Teendom Africa** is a pan-African platform shaping, equipping, and recognizing the next generation of civic leaders. The website is the digital home for the Teendom ecosystem — driving youth engagement, program applications, partnerships, and long-term growth.

Target audience: Young people aged 13–25 across Africa (current focus: Kenya).

**This project is frontend-only.** React + Vite + Tailwind + Framer Motion. No backend work in this repo.

---

## Project Location & Setup
- Frontend: `frontend/` (React + Vite + Tailwind + Framer Motion)
- Static assets: `public/` (images, logos — served from root by Vite)
- Git remote: `https://github.com/Vintage-The-Gemini/Teendom_UI`
- Deployed: Render static site (`render.yaml` at project root)

```bash
cd frontend
npm install
npm run dev
```

`vite.config.js` uses `publicDir: '../public'` — all assets accessible via `/images/...` paths.

---

## Chosen Theme: Neo-Brutalist / Gritty Editorial

The selected and active design direction is **`StreetwearMinimal.jsx`** — a neo-brutalist editorial theme. All other homepage variants (Y2KLight, SoftMaxHome, BrightZine) have been removed from the active app. VibeSelector now shows only this one theme.

### Why Neo-Brutalist?
- Credibility + edge — feels serious without being corporate
- Raw, structural beauty — the grid IS the design
- Strong contrast makes content pop on any device
- Youth-coded without being childish (this was explicitly important — Anton font, not Barlow Condensed)

---

## Design System (LOCK THIS IN — Do Not Drift)

### Colors
```
Brand Red (PRIMARY):   #DC2626   — Used for CTAs, category badges, accents, dividers
Black:                 #000000   — Borders (always 4px solid), headers, text panels
Off-White/Grey BG:     #F4F4F4   — Page background throughout
Dark panels:           #000000   — Feature sections, editorial spotlights, footer
```

**NOTE FROM MASTER BRIEF:** The official Teendom Africa brand palette includes:
- Deep red: `#7e171e` (brand primary — slightly darker than current `#DC2626`)
- Gold accent: `#c3952e`
- White: `#ffffff`
- Grey: `#7d7679`
- Black: `#000000` / `#252827`
- Warm cream: `#fef8eb`
- Light grey: `#d2d2d1`

The brief also calls for **less black** overall and **white/light grey as the dominant backgrounds**, with gradients used subtly. This is a direction to evolve toward in the next phase without losing the brutalist edge.

### Typography
```
Display/Headlines:  Anton, sans-serif           — The signature font. Bold, compressed, impactful.
Body/Labels/Mono:   "Space Mono", monospace     — All caps labels, metadata, buttons, captions
```

**Critical font rule:** Anton is non-negotiable for headlines. Barlow Condensed was explicitly rejected as "childish." Never substitute Anton.

### Borders
- **Always 4px solid #000** — this is the signature brutalist detail
- Never rounded corners anywhere in the brutalist theme
- Borders used as structural dividers, not just decoration

### Layout Rules
- **Mobile-first always.** Base styles = mobile, `md:` = tablet, `lg:` = desktop
- **No stacking on mobile for image+text sections** — if it's side by side on desktop, it's side by side on mobile too (using grid-cols-12 or grid-cols-2 always, not md: breakpoints)
- All grids for card lists: `grid-cols-2 lg:grid-cols-3`
- Font sizes always use `clamp()` to scale between devices
- Padding on sections: `px-4 md:px-6`, never hardcoded large values on mobile

### Spacing & Scale
- Section padding: `py-10 md:py-16`
- Max content width: `max-w-7xl mx-auto`
- Borders between sections: `borderTop: '4px solid #000'`

---

## File Structure (Active Pages)

```
frontend/src/
├── App.jsx                          — Router + ScrollToTop component
├── pages/
│   ├── StreetwearMinimal.jsx        — HOME (main landing page)
│   ├── StreetwearArticles.jsx       — STORIES/ARTICLES listing page
│   ├── StreetwearArticlePage.jsx    — Individual article detail page
│   ├── StreetwearYCP.jsx            — Young Citizens Program page
│   └── StreetwearAwards.jsx         — Awards page
├── components/
│   ├── ArtCard.jsx                  — Article card components (StreetwearArtCard is active)
│   └── PreviewBar.jsx               — Preview bar (legacy, kept for now)
└── data/
    └── articles.js                  — Mock article data + categories
```

### Inactive / Legacy (kept but not routed)
- `Y2KLight.jsx`, `SoftMaxHome.jsx`, `BrightZine.jsx` — other theme explorations
- `VibeSelector.jsx` — now shows only the streetwear theme

---

## Current Navigation Structure
```
TEENDOM (logo) | HOME | ARTICLES | YOUNG CITIZENS | [JOIN YCP button]
```
All pages have a hamburger menu on mobile (Menu/X from lucide-react) with full nav dropdown.

**Master Brief target nav (to build toward):**
```
Home | The Teendom Ecosystem | Programs (dropdown) | Stories | Get Involved | Contact
Programs dropdown: Teendom Civic Forum | Teendom Fellowship | Teendom Awards
```

---

## Homepage (`StreetwearMinimal.jsx`) — Section Order & Design

Sections in order from top to bottom:

1. **NAVBAR** — Fixed, `border-bottom: 4px solid #000`, hamburger on mobile
2. **HERO** — `grid grid-cols-12` always (5 col image / 7 col text). Headline: "YOUR VOICE. YOUR COUNTRY." Watermark "TEENDOM" ghost text behind on desktop. Stats bar at bottom.
3. **YOUR GENERATION IS READY** — `grid grid-cols-2`. Image uses `object-contain` in fixed 420px container (full image visible, not cropped). Text: "EMPOWERMENT · COMMUNITY · ACTION / YOUR GENERATION IS READY."
4. **STREET VOICES** — Teen changemaker profiles. Mobile: horizontal card rows. Desktop: masonry layout (tall left card, two stacked right).
5. **CATEGORY FILTER** — Pill buttons, red when active
6. **FEATURED** — Black section, `grid grid-cols-2`, featured article large + secondary strip
7. **ART CARD GRID** — `flex flex-wrap`, `StreetwearArtCard` components
8. **ABSTRACT ART BANNER** — 100px tall full-width strip using Pop Art abstract image
9. **PROGRAMS** — Desktop: 64px vertical "PROGRAMS" label (red overlay on art) + 2 program panels. Mobile: stacked cards.
10. **EDITORIAL SPOTLIGHT** — Always `grid grid-cols-2`. Abstract art + portrait collage left, quote right.
11. **COUNTY REACH** — `grid grid-cols-2`. Black text panel + abstract art stats panel. Stat numbers have `fontWeight: 900`.
12. **NEWSLETTER** — `grid grid-cols-2`. Abstract art left panel + form right.
13. **FOOTER** — Black, `© 2026 TEENDOM AFRICA`, social buttons (IG/TW/YT)

---

## Articles Page (`StreetwearArticles.jsx`)

- Header: always `flex flex-row`, "ALL STORIES." headline + stats side by side
- Category filter: horizontal scroll, active = red
- Article grid: `StreetwearArtCard` in `flex flex-wrap`, `w-full sm:w-1/2 lg:w-1/3`
- Latest Issue section: always `grid grid-cols-2` (black text panel + 2×2 teasers)
- Newsletter section + footer matching homepage

---

## Article Detail Page (`StreetwearArticlePage.jsx`)

- Hero: `.hero-grid` CSS class — always `60% 40%` split (no mobile stacking). Black text panel left, article image right.
- Art separator strip between hero and body
- Body: `max-w-800px`, alternating callout blocks + pull quote after paragraph 3
- Related articles: always `grid grid-cols-2 lg:grid-cols-3`
- Reactions bar: Zap / Heart / Share2 from lucide-react

---

## YCP Page (`StreetwearYCP.jsx`)

- Hero: always `grid grid-cols-12` (5/7 split), `borderRight: 4px solid #000` on image panel
- Three tracks, testimonials: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Abstract art used as track card backgrounds
- Join form at bottom

---

## Article Card (`StreetwearArtCard` in `ArtCard.jsx`)

- Fixed 360px height card
- Top 58%: article `image` as photo (NOT abstract art) — `object-cover`, `filter: contrast(1.05)`
- Bottom 42%: black text box with title (Anton), author (Space Mono)
- Category badge: red, top-left of image
- Issue stamp: grey, top-right of image
- `4px solid #000` border throughout
- Hover: image scales `group-hover:scale-105`

**Key decision:** Article images (real photos) on cards. Abstract art backgrounds moved to SECTION textures (Programs label column, County Reach, Newsletter, art banner).

---

## Abstract Art Images (Section Textures)
Located at `public/images/a.1.abstract art background/`:
- `download (15).jpg` — paint splatter
- `download (16).jpg` — psychedelic circles
- `download (18).jpg` — Bauhaus geometric (used in Programs label, YCP tracks)
- `download (19).jpg` — navy curves (used as ART_GEO constant)
- `How to Make Pop Art_ A Simple Guide for Beginners 2025.jpg` — pop art (used in art banner)
- `Geometric Masterpiece_...Etsy.jpg` — red/cream/black circles (used in Editorial Spotlight)
- `Blue Abstract pattern_...jpg` — blue pattern (used in County Reach)
- `Abstract Art.jpg` — mixed (used in Newsletter, YOUR GENERATION corner accent)

---

## Creative Section Images
Located at `public/images/a..2.creative images for sections/`:
- `dark fasion girl.png` — Hero image (homepage + article page)
- `hero section teens.png` — WANJIRU K. (Nairobi, Climate Activist) + YCP hero
- `minimalistic boy.png` — BARAKA M. (Mombasa, Student Leader) + Editorial Spotlight
- `bright genz boy.png` — YOUR GENERATION IS READY section

---

## People / Voices (Authentic Kenyan Names — Maintain This)

**VOICES (homepage Street Voices section):**
- WANJIRU K. — NAIROBI — Climate Activist
- BARAKA M. — MOMBASA — Student Leader
- AKINYI N. — KISUMU — Journalist

**YCP Testimonials:**
- MERCY ACHIENG — KISUMU COUNTY
- BRIAN MUTUA — MACHAKOS COUNTY
- DIANA WANJIKU — KIAMBU COUNTY

**Article Authors:**
- Wanjiru Kimani — Lifestyle Editor
- Kamau Mwangi — Culture Correspondent
- Faith Wangui — Business Desk
- Linet Chebet — Finance Writer
- Mental Health Desk — Wellness Team
- Dr. Keziah Odongo — Education Contributor

**Rule:** All names must be authentically Kenyan. Never use generic pan-African or Western names.

---

## ScrollToTop
`App.jsx` includes a `ScrollToTop` component that calls `window.scrollTo(0, 0)` on every route change. Every page loads from the top.

---

## Master Brief — Site Architecture (Next Phase)

The full site structure per the master brief (`public/TEENDOM WEBSITE MASTER BRIEF.pdf`):

### Pages to Build
| Page | Status | Notes |
|------|--------|-------|
| Home | ✅ Built | `StreetwearMinimal.jsx` |
| The Teendom Ecosystem | ❌ Not built | New page needed |
| Programs / Civic Forum | ❌ Not built | Dialogue + civic engagement |
| Programs / Fellowship | ❌ Not built | Application-focused, convert visitors → applicants |
| Programs / Awards | Partial | `StreetwearAwards.jsx` exists, needs content |
| Stories | ✅ Built | `StreetwearArticles.jsx` + article detail pages |
| Get Involved | ❌ Not built | 4 audiences: Students, Schools, Orgs, Sponsors |
| Contact | ❌ Not built | |

### Homepage Content to Evolve
Per the brief, the homepage hero should say:
> **"Where Africa's Next Generation of Leaders Are Built."**
> Subtext: "Teendom is a pan-African platform equipping young people with the knowledge, skills, and opportunities to lead, serve, and shape their communities."
> CTAs: "Join the Movement" + "Inside Teendom"

Current hero says "YOUR VOICE. YOUR COUNTRY." — this can evolve in the next phase.

### The Teendom Ecosystem Page (Priority Build)
Key sections:
- Hero: "From Ideas to Impact: A Home for Young Civic Leaders"
- Vision & Mission
- The Ecosystem Structure (3 program cards: Civic Forum, Fellowship, Awards)
- The Teendom Journey: Learn → Grow → Be Recognized (visual flow)
- Why It Matters (problem/opportunity framing)
- Impact stats
- Closing CTA: "Be Part of the Ecosystem"

### Fellowship Page (Priority Build)
Goal: Convert visitors → applicants
Sections: What is it | Who it's for | What you gain | Program structure | CTA: Apply Now

### Civic Forum Page
Goal: Position as dialogue + civic engagement space
Sections: What it is | Why it matters | Topics | Format | CTA: Join/Participate

### Get Involved Page
Audience-segmented sections: Students | Schools | Organizations | Sponsors

---

## Brand Positioning (From Master Brief — Keep This Front of Mind)

> "A credible, vibrant, pan-African platform where young people are not just informed — but equipped, empowered, and recognized as leaders."

Four qualities every page must communicate:
1. **Serious** — credibility, structure, real programs
2. **Youthful** — energy, movement, belonging
3. **Impact-driven** — outcomes, not just activities
4. **Has a pipeline** — clear entry points, journey from Forum → Fellowship → Awards

### Language Rules (From Brief)
- Action-oriented: "Apply Now", "Join the Movement", "Explore the Program"
- Benefits-focused: emphasize what youth gain, not organizational info
- Shift perception: from "nice organization" → "movement I want to be part of"
- Every section should have a CTA

### Imagery Direction (From Brief)
- Real African youth — not stock-heavy, not staged
- Action shots: discussion, leadership, collaboration, engagement
- Bright but balanced

---

## Design Feel (Maintain Through All New Pages)

**The brutalist editorial aesthetic must be preserved:**
- 4px solid black borders are mandatory — they are the design signature
- Anton for all display headlines, Space Mono for all labels/body
- Red (#DC2626 currently, trending toward #7e171e brand red) as the only accent
- No rounded corners anywhere
- Abstract art as section texture, never as gratuitous decoration
- Section structure should be visible and intentional (grids, borders, stamps)
- Framer Motion scroll animations: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`

**What makes this theme feel premium:**
- The contrast between heavy black borders and the light `#F4F4F4` background
- Anton at large sizes with tight leading (`lineHeight: 0.85–0.9`)
- Category/issue stamps (red pill labels) over images
- The ghost watermark text behind hero sections
- Abstract art at full contrast used as raw textures, not pretty backgrounds

---

## Technical Notes
- **All images side by side on mobile** — never stack image+text sections. Use `grid grid-cols-12` or `grid grid-cols-2` without `md:` breakpoints.
- **Copyright:** `© 2026 TEENDOM AFRICA` in all footers
- **No Awards in nav** (removed per user request)
- **Spaces in image paths** work fine in JSX `src` attributes
- `lucide-react` used for icons: `Menu`, `X`, `ArrowLeft`, `Clock`, `Heart`, `Zap`, `Share2`
