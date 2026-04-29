# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Development Commands

```bash
yarn dev      # Start dev server at http://localhost:3000
yarn build    # Build for production (validates TypeScript, builds Next.js)
yarn start    # Start production server (requires yarn build first)
yarn lint     # Run Next.js linter
```

No testing framework is configured.

---

## Architecture Overview

**gemm-apps** is a single-page marketing website built with Next.js 14 (App Router). The core architecture is:

### Directory Structure
```
src/
├── app/
│   ├── layout.tsx         ← fonts, metadata, theme prevention script, Providers wrapper
│   ├── page.tsx           ← assembles all sections in order
│   ├── globals.css        ← all design tokens, reset, utilities
│   ├── sitemap.ts
│   ├── robots.ts
│   └── resume/
│       └── page.tsx       ← separate /resume route with custom styling
├── components/
│   ├── Header/            ← sticky header with logo + nav + theme/lang toggles
│   ├── sections/          ← page sections (Hero, Statement, About, Products, etc.)
│   ├── resume/            ← resume page components
│   └── ui/                ← shared controls (ThemeToggle, LangSwitch)
├── context/
│   ├── ThemeContext.tsx   ← dark/light mode, persisted to localStorage
│   └── LanguageContext.tsx ← ES/EN, custom t() helper, persisted to localStorage
└── i18n/
    ├── es.json            ← Spanish (default language)
    └── en.json            ← English (fallback)
```

### Key Concepts

**Sections as Components**: The homepage (src/app/page.tsx) assembles sections in a fixed order: Hero → Statement → About → Products → FromTheStudio → Philosophy → Collaborations → Founder → Contact. Each section is a self-contained component under `src/components/sections/`.

**Theme System**: Dark/light mode is controlled by `ThemeContext`, which sets the `data-theme` attribute on `<html>`. An inline script in `layout.tsx` reads localStorage before React hydrates to prevent flash-of-unstyled-content (FOUC). Theme colors are CSS variables defined in `globals.css`.

**Language System**: Language switching is handled by `LanguageContext`, which imports static JSON dictionaries (`es.json`, `en.json`) and provides a `t(key)` helper using dot notation (e.g., `t("hero.title")`). Fallback to English if key not found in current language. All user-facing copy is in the JSON files—no hardcoded strings in components.

**CSS Modules**: All styling uses plain CSS Modules (no Tailwind, no UI libraries). Import as `import styles from "./Component.module.css"` and apply classes via `className={styles.className}`. CSS variables from `globals.css` are available globally.

**Fonts**:
- **Space Grotesk** (Google Fonts) via `next/font/google` → CSS var `--font-space`
- **Driftline** (custom) via `next/font/local` → CSS var `--font-drift`
- Both are passed to `<html>` as `className` to ensure they're available to all components.

---

## Brand & Design

### Colors (globals.css)
All colors are CSS variables. Dark mode is default; light mode overrides via `[data-theme="light"]`.

**Dark Mode** (`:root`):
- Background: `#121212`
- Text: `#ffffff`
- Accents: Magenta `#b50b81`, Red `#ed2b1c`, Orange `#fc691f`
- Secondary/tertiary text: `rgba(255, 255, 255, 0.5 / 0.25)`

**Light Mode** (`[data-theme="light"]`):
- Background: `#ffffff`
- Text: `#121212`
- Accents unchanged
- Secondary/tertiary text: `rgba(18, 18, 18, 0.5 / 0.25)`

### Design Tokens (globals.css)
```css
--color-bg, --color-text, --color-magenta, --color-red, --color-orange
--font-space (injected by next/font)
--font-drift (Driftline custom font)
--header-h: 4.5rem
--section-pad-x: clamp(1.5rem, 5vw, 5rem)    /* responsive section padding */
--section-pad-y: clamp(4rem, 8vw, 8rem)
--max-w: 1280px
--ease-out, --ease-in-out                      /* cubic-bezier() curves */
--dur-fast, --dur-base, --dur-slow            /* animation durations */
```

### Typography
- **Headings**: Space Grotesk (default font)
- **Accent words** (e.g., "With soul." in Hero, "evolucionar." in Statement): Driftline + magenta color
- **Hero headline**: `clamp(2.1rem, 3.5vw, 3.5rem)`, line-height 1.15

---

## Internationalization (i18n)

All visible copy lives in `/src/i18n/es.json` (Spanish, default) and `/src/i18n/en.json` (English, fallback).

### Usage in Components
```tsx
import { useLanguage } from "@/context/LanguageContext";

export function MyComponent() {
  const { t, currentLang } = useLanguage();
  return <h1>{t("section.title")}</h1>;
}
```

### Key Naming Convention
Keys use dot notation: `"section.subsection.key"`. Examples:
- `hero.line1`, `hero.line2`, `hero.cta1.label`
- `statement.line1`, `statement.line2prefix`, `statement.line2accent`
- `products.title`, `products.items.0.name`

### Adding a New Language
1. Create `/src/i18n/[lang].json` mirroring the structure of `es.json`.
2. Add the language type to `Lang` in `src/context/LanguageContext.tsx`.
3. Import and register the dictionary in the `dicts` object in `LanguageContext.tsx`.
4. Add a button to `src/components/ui/LangSwitch/LangSwitch.tsx`.

---

## Component Patterns

### Section Components
Each section follows this pattern:

```tsx
import styles from "./SectionName.module.css";

export function SectionName() {
  const { t } = useLanguage();
  return (
    <section className={styles.root}>
      <div className={styles.inner}>
        {/* content */}
      </div>
    </section>
  );
}
```

Use `.inner` or `.section-inner` utility from `globals.css` for max-width constraints and horizontal padding.

### Using Theme & Language
Both `useTheme()` and `useLanguage()` are client-side hooks (components marked `"use client"`). Import from:
- `@/context/ThemeContext` → `useTheme()` returns `{ theme: "dark" | "light", toggleTheme: () => void }`
- `@/context/LanguageContext` → `useLanguage()` returns `{ currentLang: "es" | "en", setLang, t }`

### CSS Module Scoping
Always use CSS Modules to avoid global class name collisions:

```tsx
import styles from "./Component.module.css";
export function Component() {
  return <div className={styles.root}>{/* ... */}</div>;
}
```

To style based on theme/language, use either:
- CSS variables (preferred): `color: var(--color-magenta);`
- `:global()` selector in Module CSS: `:global([data-theme="light"]) .className { ... }`

---

## Configuration

### next.config.mjs
Minimal config. Contains only:
- `reactStrictMode: true`
- Image format optimization (avif, webp)

### tsconfig.json
- Path alias: `@/*` → `./src/*`
- Strict mode enabled
- All standard Next.js 14 defaults

### Environment
No environment variables are currently configured. For future secrets, use `.env.local` (git-ignored).

---

## Important Notes

### No Animation Libraries
Framer Motion is listed as a dependency but is not currently used. All motion is CSS-based (transitions, animations, transforms). Before adding Framer Motion, consider if CSS animations can achieve the goal—keep motion simple and CSS-first.

### No UI Component Library
Zero Tailwind, zero shadcn, zero component libs. Build components from scratch with CSS Modules. This keeps the codebase minimal and customizable.

### CSS Reset
`globals.css` includes a basic reset (box-sizing, margins, padding). All brand colors are CSS variables defined at the root.

### Header
Fixed header at `height: 4.5rem`. Logo switches between `logo-horizontal-white.svg` (dark) and `logo-horizontal-black.svg` (light). Navigation links are `font-size: 0.83rem` with `gap: 2.25rem`.

### Deployment
Default domain in `src/app/layout.tsx` → `metadataBase: https://gemm-apps.com`. Update this and `sitemap.ts` for new domains. Build and deploy via Vercel or `yarn build && yarn start`.

---

## Common Edits

**Update homepage copy**: Edit keys in `/src/i18n/es.json` and `/src/i18n/en.json`.

**Change colors/tokens**: Edit CSS variables in `src/app/globals.css`.

**Add a new section**: Create a component under `src/components/sections/[SectionName]/`, import it in `src/app/page.tsx`, and add the JSX in the render order.

**Adjust spacing/layout**: Use CSS variables (`--section-pad-x`, `--section-pad-y`, `--max-w`) or define new ones in `globals.css`.

**Theme-aware styles**: Use CSS variables (e.g., `color: var(--color-text)`) or scoped `:global([data-theme="light"])` rules in CSS Modules.
