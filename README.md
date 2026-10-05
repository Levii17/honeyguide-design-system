# HoneyGuide Design System

Documentation site for the HoneyGuide design system: tokens, components, motion, voice and accessibility.
React 19 + TypeScript + Vite. Mobile first, claymorphism to match the app.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # 38 tests (Vitest + Testing Library)
npm run typecheck
npm run build      # production bundle in dist/
```

## What's on the site

All 13 sections of the original: Principles, Brand, Colors, Typography, Icons, Musa, Illustration, Components,
Motion, Rewards, Sounds, Writing and Accessibility. The written content, hex values, type scale, motion table,
badge ladder and copy rules are carried over.

What's new:

- **Copy a token:** tap any swatch to copy its hex, and export every colour as CSS variables or JSON.
- **Live contrast checker** and a contrast table whose ratios are computed from the token values, not typed in.
- **Searchable icon gallery** with categories and usage notes, mirroring the app's icon registry.
- **Live specimens** for buttons (every state), cards, chips, answers, badges and leaderboard rows.
- **Motion demos** you can replay, with the four-bucket model kept.
- **Image lightbox**, lazy-loaded Musa animation clips, mobile drawer navigation with scroll-spy, skip link.

## Architecture

```
src/
  content/    Typed data, the single source of truth: tokens, a11y pairings, motion, icons, voice, Musa assets.
              Pages render from this; tests validate it.
  lib/        Pure functions: WCAG colour maths (color.ts), token exporters, clipboard, asset URLs.
  components/ Layout shell, shared blocks (Section, Figure, LazyVideo), specimens, contrast checker, token export.
  sections/   One file per area of the document; each composes components with content.
  hooks/      useScrollSpy, useMediaQuery.
  styles/     tokens.css, clay.css (component recipes), motion.css, docs.css (site layout).
```

To add a colour: add it to `content/tokens.ts` and `styles/tokens.css`. The swatch, the export and the tests pick it up.

## Assets

The original shipped about 36 MB of PNG and MP4. These are optimised to about 3.8 MB total:
character sheets are 1400px WebP, the four animation clips are re-encoded to 540px H.264 with poster frames,
and the app icons have transparent corners. Videos use `preload="none"` and only start loading near the viewport.

## Changes from the original (deliberate)

- **Focus ring uses Sky Dark (`#1F86BD`).** The documented sky-blue ring measured about 2.3:1 on the cream
  background, under the 3:1 non-text minimum. Sky Dark measures 3.5:1. The contrast table shows both.
- **Ink Soft and Sky Dark** are now documented tokens, since the system already depended on them.
- The checker's "known failures" (white on gold, white on coral, light sky ring) are tested to really fail.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` typechecks, tests, builds and deploys `main`; `ci.yml` runs the same checks on
pull requests. Set **Settings > Pages > Source: GitHub Actions**. The workflow sets `VITE_BASE=/<repo>/`; remove it
for a custom domain.

## Known gaps

- Fonts load from Google Fonts. Self-host them (e.g. `@fontsource`) for offline or privacy-strict use.
- Sounds is still a brief, as in the original, since no audio exists yet.
- The Musa name story is still a placeholder in the source material.
- Light theme only.
