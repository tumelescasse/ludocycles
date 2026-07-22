# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A one-page marketing site for **Ludo Cycles**, a home-visit bicycle repair, maintenance, and electrification (Virvolt kit) service. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public/
│   ├── favicon.ico
│   └── placeholder.png
├── src/
│   ├── components/
│   │   └── BikeMechanicIllustration.tsx  # Inline SVG hero illustration (bike + mechanic).
│   ├── routes/
│   │   ├── __root.tsx   # Root layout: HTML shell, page metadata.
│   │   └── index.tsx    # The entire one-page site (nav, hero, sections, footer).
│   ├── router.tsx        # TanStack Router setup.
│   └── styles.css        # Tailwind import, font import, CSS variables, animations.
├── netlify.toml
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`:
- `__root.tsx` — root layout wrapping all pages
- `index.tsx` — route for `/`, the whole site lives here as a single component

### Content

The site is currently a single scrollable page (`src/routes/index.tsx`) composed of: announcement banner, nav, hero, "why choose us" grid, two service cards (repair/maintenance and Virvolt electrification), stats counters, client reviews, and footer. Copy, stats, and reviews are defined as small local arrays at the top of that file — update them there rather than hardcoding values inline.

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `styles.css` | Tailwind import + CSS custom properties (brand colors, fonts, keyframes) |

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
```

## Conventions

### Naming
- Components: PascalCase
- Routes: kebab-case files

### Styling
- Tailwind CSS utility classes throughout
- Brand tokens defined as CSS variables in `styles.css` (`--ink`, `--paper`, `--rust`, `--rust-dark`, `--volt`, `--steel`) — reuse these instead of introducing new colors
- Display font: "Big Shoulders Display" via `.font-display`; body font: "Work Sans"
- No emoji in UI — icons come from `lucide-react`

### TypeScript
- Strict mode enabled
- Import paths use `@/` alias

## Brand notes

- Name: Ludo Cycles
- Positioning: home-visit bike mechanic, all brands, certified Virvolt e-bike conversion kit installer
- Tone: industrial workshop, warm and hands-on rather than corporate
