# Turza Podder Joy — Portfolio

**Live:** https://turzapodderjoy.github.io/turza-portfolio/  
**Repo:** https://github.com/Turzapodderjoy/turza-portfolio.git  
**Local:** http://127.0.0.1:8090/ (`python3 -m http.server 8090` from repo root)

## What this is
Static portfolio (HTML + CSS + TypeScript built with esbuild). No build step required to preview — any static server works. `script.js` is prebuilt; `npm run build` regenerates it from `src/main.ts`.

## Core rules (do not break)
- **Third person only.** No "I", "my", "me". No dashes/hyphens in copy; use `·`, commas, or "to".
- **Six expertise pillars** (exact labels, this order): Data analyst · Account management · RCM operations · Product management · Process automation.
- **Company logos** must keep real colors (Commure, NEXT Ventures, FundedNext). Never monochrome.
- **Logo wall label:** exactly `Companies`.
- **Portrait:** `assets/turza-portrait.jpg`.
- **Resume:** `assets/Turza-Podder-Joy-Resume.pdf`.

## File map
- `index.html` — page structure (About, Expertise, Work, Background, Contact)
- `styles.css` — dark slate/teal theme, layout, breakpoints
- `src/main.ts` — reveal animations, scroll spy, spotlight cursor, footer year → built to `script.js`
- `assets/` — portrait, logos, PDFs, project screenshots
- `package.json` — scripts: `build` (esbuild), `dev` (watch), `serve` (python http.server)

## Commands
```
npm run build      # rebuild script.js
npm run dev        # watch & rebuild
npm run serve      # python -m http.server 8090
```

## Deploy
GitHub Pages is enabled on `main` branch, root folder. Push to `main` and the site at `https://turzapodderjoy.github.io/turza-portfolio/` updates automatically. No CI needed.

## Edit anywhere
Clone this repo, open `index.html` / `styles.css` / `src/main.ts`, change, `npm run build` (optional for CSS/HTML-only edits), test locally, push. The next agent continues from the GitHub main branch.
