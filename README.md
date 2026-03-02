# gemm-apps Landing Page

Production-ready single-page website for **gemm-apps** — a boutique digital product studio.

Built with Next.js 14 (App Router) + TypeScript + plain CSS Modules.

---

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** — zero Tailwind, zero UI libraries
- **next/font/google** — Space Grotesk (headings + body)
- **CSS @font-face** — Driftline (accent words, optional)
- **No animation libraries** — motion via CSS only
- **No i18n libraries** — custom `LanguageContext` with JSON dictionaries

---

## Setup

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev

# Build for production
yarn build
```

The dev server starts at http://localhost:3000.

---

## Required assets

### 1. Fonts

Place your Driftline font file at:

```
/public/fonts/Driftline.woff2
```

The project runs without it (fallback to Space Grotesk), but the accent typography
(`--font-drift` CSS variable) will not use Driftline until the file is present.

**Upgrading to `next/font/local`** (recommended for production):

Once `Driftline.woff2` is in `/public/fonts/`, open `src/app/layout.tsx` and
uncomment the `localFont` block:

```tsx
import localFont from "next/font/local";

const driftline = localFont({
  src: "../../public/fonts/Driftline.woff2",
  variable: "--font-drift",
  display: "swap",
});
```

Then add `driftline.variable` to the `className` on `<html>`:

```tsx
<html className={`${spaceGrotesk.variable} ${driftline.variable}`}>
```

And remove the `@font-face` block from `src/app/globals.css`.

### 2. Logo SVGs

Replace the placeholder SVGs in `/public/brand/` with your real artwork:

| File | Usage |
|---|---|
| `logo-icon.svg` | Favicon / apple-touch-icon |
| `logo-horizontal-white.svg` | Header logo on dark theme |
| `logo-horizontal-black.svg` | Header logo on light theme |

Recommended dimensions: `logo-icon` 48×48 px; horizontals ~200×40 px.

### 3. OG image

Add a social preview image at `/public/og-image.png` (1200×630 px, dark background).

---

## Project structure

```
/
├── public/
│   ├── brand/
│   │   ├── logo-icon.svg
│   │   ├── logo-horizontal-black.svg
│   │   └── logo-horizontal-white.svg
│   └── fonts/
│       └── Driftline.woff2          ← place your font here
├── src/
│   ├── app/
│   │   ├── globals.css              ← design tokens, reset, @font-face
│   │   ├── layout.tsx               ← metadata, fonts, Providers
│   │   ├── page.tsx                 ← assembles all sections
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── Providers.tsx            ← wraps Theme + Language providers
│   │   ├── Header/
│   │   ├── sections/
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Products/
│   │   │   ├── FromTheStudio/
│   │   │   ├── Philosophy/
│   │   │   ├── Collaborations/
│   │   │   ├── Founder/
│   │   │   └── Contact/
│   │   └── ui/
│   │       ├── ThemeToggle/
│   │       └── LangSwitch/
│   ├── context/
│   │   ├── ThemeContext.tsx          ← dark/light toggle, persisted in localStorage
│   │   └── LanguageContext.tsx       ← ES/EN toggle, t() helper, persisted in localStorage
│   └── i18n/
│       ├── es.json                  ← Spanish (default)
│       └── en.json                  ← English (fallback)
```

---

## Internationalisation

All visible copy lives in `/src/i18n/es.json` and `/src/i18n/en.json`.

Usage inside components:

```tsx
const { t } = useLanguage();
// ...
<h2>{t("products.title")}</h2>
```

Keys use dot notation: `"section.subsection.key"`.

To add a new language:

1. Create `/src/i18n/fr.json` mirroring the `es.json` structure.
2. Add `"fr"` to the `Lang` type in `LanguageContext.tsx`.
3. Import and register the dictionary in the `dicts` object.
4. Add an `FR` button to `LangSwitch.tsx`.

---

## Theme

Controlled by `ThemeContext`. The `data-theme` attribute is set on `<html>`:

- `data-theme="dark"` → `#121212` background, white text
- `data-theme="light"` → `#ffffff` background, `#121212` text

All colour values are CSS variables in `globals.css`. Accent colours
(magenta `#B50B81`, red `#ED2B1C`, orange `#FC691F`) are constant across themes.

An inline `<script>` in `layout.tsx` reads `localStorage` and sets `data-theme`
before React hydrates, preventing flash of wrong theme.

---

## Customising copy

Edit `/src/i18n/es.json` (and `/src/i18n/en.json` for the English version).
All section titles, CTA labels, form placeholders, and footer text are keys
in those files — no hardcoded strings in components.

---

## Deployment

```bash
yarn build
yarn start
```

Or deploy to Vercel:

```bash
npx vercel
```

Set your production domain in `src/app/layout.tsx` → `metadataBase` and in
`src/app/sitemap.ts` → `base`.
