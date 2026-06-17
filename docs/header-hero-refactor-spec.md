# Header & Hero Refactor — Phase 0 Spec

Locked decisions for porting `digital-agency` header and hero into the main After Concept site (repo root). Phases 1+ implement against this document.

## Scope

| In scope (v1) | Out of scope (later) |
|---------------|----------------------|
| Reference-style `Header` + `HeroSection` on home | Full homepage section parity with `digital-agency` |
| Design tokens for header/hero (Phase 1) | `GlobalEnhancements` (custom cursor, etc.) |
| Theme toggle in header | Mega-menu hover panels |
| Route-based navigation | Hash-only single-page nav |
| Geometric hero art (reference right column) | Hero image carousel from current `app/page.tsx` |

## Locked decisions

### 1. Navigation — routes, not hashes

All header links use Next.js routes. No `#about` / `#services` anchors on the main site.

| Reference label | Route | Notes |
|-----------------|-------|--------|
| Logo | `/` | `agency.nameUpper` |
| About | `/about` | |
| Services | `/services` | Plain link; mega menu **disabled** v1 |
| Solutions | `/services` | Same destination until a dedicated solutions page exists |
| Work | `/work` | |
| Contact / Get Started | `/contact` | Primary CTA |

**Removed from reference (no main-site equivalent):** Industries (`#industries`).

### 2. Theme toggle — included

Port `ThemeToggle` with `data-theme` on `<html>` and `agency-theme` localStorage key (matches `digital-agency`). Default preference: `system`.

### 3. Hero right column — reference geometry

Use animated rotating squares from `digital-agency/sections/HeroSection.tsx`. Do **not** port the home page carousel (`heroCards`) in v1.

### 4. Mega menus — simplified

`enableMegaMenus: false` in `lib/header-nav.ts`. Services and Solutions render as standard nav links to `/services` (no hover panels).

### 5. Layout shell

- Fixed header total height: **108px** (marquee strip + main nav row).
- Root layout main offset: `pt-[108px]` (Phase 1).
- Hero min-height: `min-h-[calc(100vh-108px)]`.
- Hero section `id`: **`hero`** (not `about`, to avoid clash with `/about` page).

### 6. Content source of truth

- **New:** `lib/siteContent.ts` — agency, hero copy, brand strip, marquee (header/hero refactor).
- **Existing:** `lib/constants.ts` — footer, work page, legacy `navItems` until Navbar is replaced in Phase 2.

Keep `siteConfig.nameDisplay` and `agency.nameUpper` aligned manually until Phase 2 consolidates imports.

## Hero copy (v1)

| Field | Value |
|-------|--------|
| `headlineLine1` | After Concept Builds |
| `rotatingWords` | Modern Web Apps. · Gen AI Products. · ML Systems. · JS & Python Stacks. |
| `subtext` | See `lib/siteContent.ts` |
| Primary CTA | Start a Project → `/contact` |
| Secondary CTA | View Our Work → `/work` |
| Brand strip | Placeholder labels in `hero.trustedBrands` (replace with real clients later) |

## Header copy (v1)

| Element | Source |
|---------|--------|
| Marquee | `headerNav.marqueeText` in `lib/header-nav.ts` |
| Logo | `agency.nameUpper` |
| CTA | Get Started → `/contact` |

## Implementation phases (reminder)

1. **Phase 1** — CSS variables, Tailwind semantic tokens, Space Grotesk, `pt-[108px]`, theme init script.
2. **Phase 2** — `Header.tsx` + `ThemeToggle.tsx`; replace `Navbar` in `app/layout.tsx`.
3. **Phase 3** — `HeroSection.tsx`; replace inline hero in `app/page.tsx`.
4. **Phase 4** — QA, remove dead `Navbar` / unused hero carousel code.

## Reference files (copy sources)

- `digital-agency/components/Header.tsx`
- `digital-agency/sections/HeroSection.tsx`
- `digital-agency/components/ThemeToggle.tsx`
- `digital-agency/app/globals.css` (header/hero utilities only in Phase 1)
- `digital-agency/lib/siteContent.ts`

## Phase 0 checklist

- [x] Nav map documented (routes, no mega menus)
- [x] Hero copy in `lib/siteContent.ts`
- [x] Header nav config in `lib/header-nav.ts`
- [x] Theme, geometry, carousel decisions recorded
- [x] Header height / layout offset documented
- [ ] Visual baseline screenshots (manual — run both dev servers and compare)

## Phase 1 checklist

- [x] Theme CSS variables (`styles/refactor-tokens.css`) — dark/light via `data-theme`
- [x] Header/hero utilities (marquee, hero-grid, cta-sharp, hero buttons, scroll-dot)
- [x] Tailwind semantic tokens (`base`, `foreground`, `line`, `highlight`, `theme-accent`, etc.)
- [x] Legacy colors unchanged (`accent`, `surface`, `primary`, …)
- [x] Space Grotesk → `--font-heading` + `font-heading` in Tailwind
- [x] Theme init script (`lib/theme-init.ts`) in `app/layout.tsx`
- [x] Main offset `pt-header` (108px via `--header-offset`)
- [ ] Visual check: existing pages still render (legacy lavender UI intact)

## Phase 2 checklist

- [x] `components/ThemeToggle.tsx` (uses `THEME_STORAGE_KEY` from `lib/siteContent.ts`)
- [x] `components/layout/Header.tsx` — route-based `Link` nav, no mega menus
- [x] Marquee with link to `/work`
- [x] Mobile drawer + scroll lock
- [x] `app/layout.tsx` uses `Header` instead of `Navbar`
- [x] `Navbar.tsx` marked deprecated (remove in Phase 4)

## Phase 3 checklist

- [x] `components/sections/HeroSection.tsx` — reference hero with geometry, rotating words, routes
- [x] `app/page.tsx` — carousel hero removed; `<HeroSection />` at top
- [x] Section `id="hero"`; CTAs → `/contact`, `/work`
- [x] Copy from `lib/siteContent.ts` (`hero` object)

## Phase 4 checklist

- [x] Removed deprecated `components/layout/Navbar.tsx`
- [x] Removed unused `components/sections/Hero.tsx`
- [x] Removed unused `heroContent` from `lib/home-content.ts`
- [x] Kept `HeroArt.tsx` (still used by Work/Contact page heroes)
- [x] `prefers-reduced-motion` — CSS (marquee, grid, scroll dot) + HeroSection logic
- [x] Production build verified

## Manual QA (recommended)

- [ ] Home: header marquee, theme toggle, hero animations, mobile menu
- [ ] `/about`, `/services`, `/work`, `/contact` — header layout and nav active states
- [ ] OS “Reduce motion” on — hero shows static rotating line; no infinite spins
- [ ] Theme: dark / light / system cycles correctly after refresh

## Manual QA before Phase 1

1. Run root site: `npm run dev` (port 3000).
2. Run reference: `cd digital-agency && npm run dev` (port 3001 if needed).
3. Capture header + hero screenshots for regression comparison after each phase.
