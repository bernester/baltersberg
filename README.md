# freizeitban.de

Marketing site for **Freizeit für Alle**, the inclusive summer camp run by
Freizeitbande e.V. Built with SvelteKit 2, Svelte 5, Tailwind CSS v4, and
deployed to Vercel as fully prerendered static HTML.

## Stack

- **SvelteKit 2** with **Svelte 5** (runes mode)
- **Tailwind CSS v4** (CSS-first `@theme` config in `src/app.css`)
- **TypeScript**
- **Marked** for Markdown rendering on the legal pages
- **rough-notation** for the hand-drawn marker/underline annotations
- Deploy: **Vercel** via `@sveltejs/adapter-vercel` — every route is
  prerendered, so the deploy is effectively static HTML at the edge

## Local development

Requires Node `^20.19.0 || >=22.12.0` (Vite 8 / rolldown). The repo pins
this via `.nvmrc` and `engines-strict=true` in `.npmrc`.

```bash
nvm use            # picks up .nvmrc (Node 22 LTS)
npm install
npm run dev        # vite dev server with HMR
npm run check      # svelte-check (run before opening a PR)
npm run build      # production build + Vercel adapter
npm run preview    # preview the built site locally
```

## Project layout

```
src/
├── app.css                  Tailwind v4 @theme tokens + global focus style
├── app.html                 Doc shell, preloads the Bolle headline font
├── data.json                Site-wide data: dates, prices, contact, venue,
│                            registration URLs, arrival/departure times.
│                            Update this file, not component source.
├── hooks.server.ts          Permissions-Policy header (CSP lives in
│                            svelte.config.js → kit.csp)
├── components/
│   ├── Common/              Logo, BackLink, RegisterButton, separator
│   ├── Home/                Sections used on /
│   └── MachMit/             Sections used on /mach-mit
├── content/                 Markdown sources for the legal pages
│                            (impressum, datenschutz, barrierefreiheit,
│                            satzung, schutzkonzept, vereinssatzung)
├── lib/
│   ├── annotate.ts          Svelte 5 actions wrapping rough-notation
│   ├── markdown.ts          Loads + renders src/content/*.md
│   ├── styles.ts            Shared Tailwind class strings (buttons,
│   │                        headlines, section widths)
│   └── utils.ts             Date formatters
└── routes/                  +page.svelte per route + +page.server.ts
                             for routes that load markdown
```

## Editing content

- **Legal pages** (`/impressum`, `/datenschutz`, `/barrierefreiheit`,
  `/satzung`, `/schutzkonzept`): edit the matching file in
  `src/content/*.md`. The Markdown is loaded at build time via
  `src/lib/markdown.ts`.
- **Site-wide data** (camp dates, prices, contact info, venue address,
  arrival/departure times, Tally form URLs): edit
  [`src/data.json`](src/data.json). All consumers read from there.
- **Page copy** (home page, manifest, info page, mach-mit): edit the
  `+page.svelte` or the corresponding component in `src/components/`.

## Styling conventions

- Layout widths live in `sectionClasses` (`default`, `wide`) in
  [`src/lib/styles.ts`](src/lib/styles.ts). Buttons compose
  `buttonDefaultClasses` (geometry) + `primaryButtonClasses` or
  `secondaryButtonClasses` (variant) via the Svelte 5 class-array form:
  `class={[buttonDefaultClasses, primaryButtonClasses]}`.
- Headlines use the `headlineClasses` / `subHeadlineClasses` constants;
  emphasis inside them is wrapped in `use:Marker` / `use:Underline` /
  `use:Circle` annotations from
  [`src/lib/annotate.ts`](src/lib/annotate.ts).
- The site uses CSS `corner-shape: squircle` for buttons (with
  `rounded-3xl` as a fallback for browsers that don't yet support the
  property).

## Accessibility

- Single global focus style (`:focus-visible { outline: 2px solid black }`)
  in `src/app.css`.
- Skip-to-content link in `+layout.svelte`.
- Marker/Underline annotations respect `prefers-reduced-motion`.
- Each page sets its own `<title>` in a `<svelte:head>` block.

## Deploy

Pushing to `main` triggers Vercel. Every route is prerendered
(`src/routes/+layout.ts` sets `export const prerender = true`), so
deploys produce one static HTML file per route — zero serverless
invocations at runtime.
