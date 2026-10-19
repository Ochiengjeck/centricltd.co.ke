# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This directory holds the rebuild of the centricltd.co.ke marketing site. It has two parts:

- `centricltd.co.ke/` — the live rebuild: a React 19 + Vite SPA styled with Tailwind CSS v4, using `react-router`
  (not `react-router-dom`, not v8) for client-side routing and `react-helmet-async` for per-route SEO tags.
  There is no backend/server — this is a static SPA by deliberate choice (SEO tradeoffs documented inline via
  `lib/seo.jsx`'s comments and the `Seo` component's usage).
- `docs/` — reference content captured from the live WordPress site, used as source material while building the
  new site. `docs/README.md` indexes per-page content files and the defects that were fixed (not carried over)
  when porting content into `src/data/*.js` — phone number formatting, broken mailto links, several copy errors,
  dead nav/footer anchors (Leadership Team dropped, Clients/Testimonials folded into `AboutPage` as real sections).

There is no git repository here yet.

## Commands (run from `centricltd.co.ke/`)

- `npm install` — install dependencies
- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build (outputs `dist/`, including `public/_headers`, `public/_redirects`,
  `public/robots.txt`, `public/sitemap.xml` copied verbatim)
- `npm run preview` — preview the production build locally
- `npm run lint` — ESLint (flat config in `eslint.config.js`; `dist/` is ignored)

No test runner is configured. There is no `npm test` script.

## Architecture

- **Routing** (`src/App.jsx`): one `<Route>` per live-site URL slug (e.g. `/sap-s4hana/`, `/revenue-management/`),
  kept trailing-slash-exact to match the old site's URLs for SEO/backlink continuity. The 5 SAP product pages and
  5 Innovative Solutions pages all render through one shared `src/pages/ProductDetailPage.jsx` template, fed by a
  `product` object pulled from `src/data/sapProducts.js` / `src/data/solutions.js` — **adding a 6th product or
  solution is a new entry in one of those two data files, not a new page component.**
- **Content lives in `src/data/*.js`**, not hardcoded in JSX: `siteMeta.js` (contact details/social links),
  `nav.js` (header+footer link structure), `sapProducts.js`/`solutions.js` (the 10 templated detail pages),
  `clients.js`, `testimonials.js`, `aboutContent.js`, `insightsPosts.js`, `privacyPolicy.js`, and `brand.js`
  (logo image re-exports). Each entry's shape is documented by example in the existing array — match it exactly
  when adding entries, since the shared page templates destructure specific fields (`heroImage`, `sections[].bullets`, etc).
- **SEO**: `src/lib/seo.jsx`'s `Seo` component sets per-route title/description/canonical/OG/Twitter tags via
  `react-helmet-async`; `src/lib/jsonld.js` builds the JSON-LD (Organization/ProfessionalService/Service/
  BreadcrumbList/Article) injected alongside it. `public/sitemap.xml` is hand-maintained (small, fixed route
  count) — update it when routes change. Known limitation, intentional: this is pure client-side rendering, so
  non-JS-executing crawlers only see `index.html`'s static tags, not the per-route ones.
- **Security**: `public/_headers` carries CSP (currently `Content-Security-Policy-Report-Only` — flip to
  enforcing once confirmed clean in production) and standard security headers, scoped to allow the live-chat
  widget's actual dependencies (Pusher realtime, Cloudflare Turnstile) — re-check this file if the widget script
  tag in `index.html` ever changes. `public/_redirects` has the SPA fallback rewrite. Both files use
  Netlify/Cloudflare Pages syntax; translate to `vercel.json` if hosting moves to Vercel, and note GitHub Pages
  can't enforce the same headers at all.
- **Contact form** (`src/components/forms/ContactForm.jsx`): no backend — validates client-side, then builds a
  `mailto:` link via `src/lib/mailto.js` and navigates to it. Don't add a server integration without also
  updating `src/data/privacyPolicy.js`'s "Contact form" section, which currently states no data is transmitted
  to Centric before the visitor sends the email themselves.
- **Design tokens** live in `src/index.css` under Tailwind v4's `@theme` block (CSS custom properties, no
  `tailwind.config.js`) — reference `bg-accent`/`text-foreground`/etc. utilities, never hardcode hex in components.
- **Dark mode**: class-based (`@custom-variant dark (&:where(.dark, .dark *));` in `index.css`, not the OS-only
  media-query default), toggled by `src/components/ui/ThemeToggle.jsx` (persists to `localStorage('theme')`).
  `--color-primary`/`--color-accent`-as-*background* stay fixed brand navy/blue in both themes (`Footer`,
  `CTASection`, `Button`'s secondary variant are deliberately navy regardless of theme) — only the neutral
  surface/text tokens (`--color-background`, `--color-foreground`, `--color-card`, `--color-muted`, `--color-border`,
  plus `--color-accent`/`--color-on-accent` since accent doubles as button/link color) get dark overrides in the
  `.dark { ... }` block. **Never use `text-primary` or `border-primary` for body/heading text or borders that sit
  on `bg-card`/`bg-background`** — those flip dark and navy-on-navy disappears; use `text-foreground` (adapts
  automatically) instead. `text-primary`/`border-primary` are only safe on surfaces that are *always* navy
  (Footer, CTASection) or as the deliberate `dark:`-overridden exception in `Button.jsx`'s `outline` variant.
  A flash-of-wrong-theme-on-load guard lives as an inline `<script>` in `index.html`'s `<head>` — if you ever edit
  that script, recompute its CSP hash (`sha256-...`) and update `public/_headers`' `script-src`, or the browser
  will silently block it once CSP enforcement is turned on.

## Working on this repo

- When sourcing new copy, prefer `docs/*.md` (exact live-site transcripts) over re-fetching the site, and check
  `docs/README.md`'s defects list before porting anything from there verbatim.
- `docs/assets.md` notes which images are free stock vs. licensed (`iStock-*`); the licensed one was deliberately
  skipped when downloading assets into `src/assets/`.
- `lucide-react` no longer ships trademarked brand glyphs (LinkedIn/Twitter/Facebook) — social icons are hand-drawn
  inline SVGs in `src/components/ui/SocialIcons.jsx`, not imported from the icon library.
