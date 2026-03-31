# Teendom Africa — CLAUDE.md

## Scope
**This project is frontend-only.**
We are building and designing the React frontend here. No backend work in this repo.

## Project Location
- Frontend: `frontend/` (React + Vite + Tailwind + Framer Motion)
- Static assets: `public/` (images, logos — served from root by Vite)

## Running the dev server
```bash
cd frontend
npm install
npm run dev
```

## Design System
- **Light mode only** — no dark backgrounds
- **Minimal gradients** — use solid colors, borders, and typography for visual weight
- **No generic emojis/icons** as decorative elements
- Font stacks:
  - Display: Playfair Display, DM Serif Display
  - Compressed/Streetwear: **Anton** (NOT Barlow Condensed — user called it "childish")
  - Modern Sans: Space Grotesk, Inter, Poppins
  - Friendly: Fredoka, Nunito

## Homepage Variations (UI Showcase)
Four homepage designs live in `frontend/src/pages/`:
| File | Vibe | BG | Key Font |
|------|------|----|----------|
| `Y2KLight.jsx` | Y2K Chrome & Glass | #FFFFFF | Playfair Display + Space Grotesk |
| `SoftMaxHome.jsx` | Soft Maximalism | #FDFCF5 | Playfair Display + Fredoka |
| `StreetwearMinimal.jsx` | Gritty Streetwear | #F4F4F4 | Anton |
| `BrightZine.jsx` | Bright Gen-Z | #FFFFFF | Poppins Black |

Entry point: `VibeSelector.jsx` — lets user preview all 4 and pick one.
- Sticky nav with logo + Home 1–4 quick links + "4 Designs Ready" lime badge
- Floating bottom exit bar when previewing a vibe (with quick-switch buttons)

## Abstract Art Card System (`src/components/ArtCard.jsx`)
The core energy solution: abstract art images from `public/images/a.1.abstract art background/` serve as full-bleed backgrounds for article cards. Text floats over them via a dark gradient overlay.

**`ART_BACKGROUNDS`** — 7 image paths (paint splatter, psychedelic circles, Bauhaus geometric, pop art, navy curves, b&w geometric, etc.)

Four card variants, one per theme:
| Export | Theme | Style |
|--------|-------|-------|
| `Y2KArtCard` | Y2K | Silver border, chrome glow on hover, Playfair Display title |
| `SoftMaxArtCard` | Soft Max | Black border, slight tilt alternating ±1.2deg, sticker labels, Playfair Display |
| `StreetwearArtCard` | Streetwear | 4px black border, Anton title, neon lime category badge, overlapping negative margins |
| `GenZArtCard` | Bright Gen-Z | Bold colored border (cycling CARD_COLORS), tilted, reaction bar with like toggle, Poppins |

All 4 homepage files now import and use their respective card variant.

## Image Paths
- Creative images: `public/images/a..2.creative images for sections/`
  Reference: `/images/a..2.creative images for sections/filename.png`
- Abstract art backgrounds: `public/images/a.1.abstract art background/`
  Reference: `/images/a.1.abstract art background/filename.jpg`
- Typography inspiration: `public/images/a.3.typography and articles inspiration/`

Vite's `publicDir: '../public'` serves the root `public/` folder — no copying needed.

## Shared Data (`src/data/articles.js`)
- `mockArticles` — 6 articles with: `id`, `title`, `excerpt`, `author`, `category`, `readTime`, `issue`, `featured`, `image`, `reactions: { fire, hundred, clap }`
- `categories` — array with `name` + `color`

## Key Implementation Decisions
- **Abstract art as card backgrounds**: Every article card uses one of the 7 abstract art images as a full-bleed background. This is the primary source of visual energy — not dark backgrounds, not heavy gradients.
- **Anton over Barlow Condensed**: Anton is the streetwear/compressed font. Barlow Condensed was explicitly rejected by the user as "childish".
- **`publicDir: '../public'`** in `vite.config.js`: serves the root `public/` folder so all assets are accessible via `/images/...` paths.
- **VibeSelector as the entry point**: App renders VibeSelector, which wraps all 4 home previews.
- **Spaces in image paths**: Paths with spaces (e.g. `a..2.creative images for sections`) work in JSX `src` attributes — browsers encode spaces automatically.

## Current Status
All 4 homepage variants complete with abstract art card backgrounds:
- `Y2KLight.jsx` ✅ — uses `Y2KArtCard`
- `SoftMaxHome.jsx` ✅ — uses `SoftMaxArtCard`
- `StreetwearMinimal.jsx` ✅ — uses `StreetwearArtCard`
- `BrightZine.jsx` ✅ — uses `GenZArtCard`

User has not yet selected a final homepage direction. Next phase will be full page development (Articles, YCP, Awards pages) once a homepage is chosen.
