# Ludo Cycles

A one-page marketing site for Ludo Cycles, a home-visit bicycle repair, maintenance, and electrification service specializing in Virvolt e-bike conversion kits.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router)
- Vite 7
- Tailwind CSS 4
- lucide-react icons
- Deployed on Netlify

## Running locally

```bash
npm install
npm run dev
```

The dev server runs at the port printed in the terminal.

## Building

```bash
npm run build
```

## Project structure

See [AGENTS.md](./AGENTS.md) for a full breakdown of the directory structure and conventions. The whole site lives in `src/routes/index.tsx`; edit the `whyUs`, `services`, `stats`, and `reviews` arrays at the top of that file to update copy and numbers.
