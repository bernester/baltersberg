# Brand Book — Freizeit für Alle

How a new page or section on freizeitban.de should look. For how it should
*read*, see [writing.md](writing.md).

**See it rendered**: [`/brand`](../src/routes/brand/+page.svelte) is this
document as a live page — real fonts, real colour swatches, real annotations,
real buttons, and side-by-side copy examples. Run `npm run dev` and open
<http://localhost:5173/brand>. It builds from the same imports as the rest of
the site, so it cannot drift from what it documents.

The design tokens themselves live in [`src/app.css`](../src/app.css) and the
shared class strings in [`src/lib/styles.ts`](../src/lib/styles.ts). This
document does not repeat their values — it says **what each one means** and
**when to reach for it**, which the code cannot tell you.

## The four words

The [Manifest](../src/routes/manifest/+page.svelte) names four principles.
They are the brand, not a page: every design decision below traces back to one
of them, and when a new design question comes up, answer it with these.

| Word | In design terms |
|---|---|
| **Bunt** | Colour is used generously and never as the only carrier of meaning. Everyone can read the page. |
| **Laut** | Headlines are huge, uppercase, hand-drawn. The page has a voice. |
| **Wild** | Nothing is perfectly straight — annotations are sketched, buttons physically move, illustrations are loose. |
| **Geborgen** | Generous spacing, warm colours, soft squircle corners. The page never feels cramped or clinical. |

A design that is only loud is missing three quarters of the brand. Check a new
section against all four.

## Type

Two families, both already loaded — do not add a third.

- **Bolle** (`font-bolle`) — the hand-drawn headline face. **Always
  `uppercase`.** Headlines, prices, section titles. Never body text: it has no
  bold, no italics, and is hard to read below ~24px.
- **Lexend** (default on `body`) — everything else. Chosen for reading ease;
  it is the accessibility half of *geborgen*. Weights 300/400/700 are loaded.

Reach for the scale constants in `styles.ts` rather than writing sizes by hand:

| Constant | Use |
|---|---|
| `titleClasses` | The one `h1` per page, and top-level `h2` section titles |
| `headlineClasses` | `h2` inside a section, `h3` on dense pages |
| `subHeadlineClasses` | Card titles |
| `leadParagraphClasses` | The first paragraph after a title |
| `paragraphClasses` | Body copy |

Every page has exactly one `h1` and never skips a level.

## Colour

Each colour carries a job. Using one outside its job breaks the pattern readers
have already learned.

| Token | Job |
|---|---|
| `yellow` | The default accent. Highlights on parent- and participant-facing pages, primary button text on black. |
| `green` | Team recruitment only — `/mach-mit` and the block on the home page that links to it. Green means *this one is addressed to volunteers*. |
| `pink` | Hinweis boxes: a tip, a caution, a "you're already registered" pointer. Always paired with a `Box` outline. Note `--color-pink-transparent` is deliberately paler and cooler than `--color-pink` — it sits behind body text, where the full-strength pink would cost contrast. The other `-transparent` tokens are just their base at 0.8 alpha. |
| `red` | Negative status only — sold out, closed, an error. Never decorative. |
| `black` | Text, outlines, the button ledge shadow. It is a very dark blue, not pure black — always use the token. |

Colour never carries meaning alone: a pink hinweis box also has a border and a
heading, sold-out status is also stated in words. That is what makes the site
usable for colour-blind readers and matches the accessibility commitment on
[`/barrierefreiheit`](../src/content/barrierefreiheit.md).

## Annotations

The sketched marker, underline and circle from
[`src/lib/annotate.ts`](../src/lib/annotate.ts) are the site's signature. They
are also the easiest thing to overdo.

| Action | Use for |
|---|---|
| `Marker` | The key phrase in a headline — the two or three words that carry the meaning |
| `Underline` | The single most important phrase in a paragraph, or a `<strong>` lead-in in a list |
| `Circle` | Rare — one standout word per page ("kostet", "2026") |
| `Box` | Framing a whole card or hinweis block |
| `Brackets` | Available, currently unused |
| `Strike` | Checked-off packing-list items only |

**One annotation per headline, at most one per paragraph.** When everything is
highlighted, nothing is. The annotations draw when they scroll into view, so a
screen full of them fires all at once and reads as noise.

They already respect `prefers-reduced-motion`; use the actions rather than
reaching for `rough-notation` directly, and that stays true.

## Layout

- Width comes from `sectionClasses.default` (prose, single column) or
  `sectionClasses.wide` (two-column and grids). Legal and long-form pages use
  `max-w-(--breakpoint-sm)`.
- Vertical rhythm between sections on a page is `space-y-20`.
- Two-column blocks are `flex flex-col md:flex-row gap-12 md:gap-8` — they
  stack on mobile, always.
- Break long pages with `SeparatorLine` (between peer sections) or `Divider`
  (between the manifest's principles). Space out the loose SVG illustrations
  with `DecorativeImage`; give each a real `alt` describing what the children
  are doing, since they carry the *bunt* and *wild* of the page.

## Buttons and links

Compose geometry plus variant, never a one-off:

```
class={[buttonDefaultClasses, primaryButtonClasses]}
```

- **Primary** (black face, yellow text, hard ledge shadow) — the single main
  action of a section. One per section.
- **Secondary** (outlined, translucent white) — back links, side actions.
- **Text link** (`linkClasses`, dotted underline) — inside prose.

The ledge shadow and the 2px hover lift are the *wild* in an otherwise ordinary
control. They come free with `primaryButtonClasses` — do not rebuild them.

External links always carry `target="_blank"`, `rel="nofollow noopener
noreferrer"`, and an `aria-label` ending in `(öffnet in neuem Tab)`.

## Building a new page

1. `src/routes/<name>/+page.svelte`, `<BackLink />` first if it is a subpage.
2. A `<svelte:head>` with a `<title>` ending in `– Freizeit für Alle`, plus a
   `<meta name="description">` if the page should be found via search.
3. One `h1` in `titleClasses`, with the key phrase wrapped in `use:Marker`.
4. Sections in `<section class={sectionClasses.default}>`, wrapped in a
   `<div class="space-y-20">`.
5. Every date, price, address, phone number and form URL read from
   [`src/data.json`](../src/data.json) — never typed into the page.
6. Add the page to the footer in
   [`+layout.svelte`](../src/routes/+layout.svelte) if it is a legal or
   standing page.
7. `npm run check` before opening a PR.

## Accessibility floor

Non-negotiable, and part of what *bunt* actually means:

- Real heading order, one `h1`, no skipped levels.
- The single global `:focus-visible` outline in `app.css` covers every control
  — leave it alone rather than styling focus per component.
- Decorative images: `alt=""` plus `aria-hidden`. Meaningful ones get a real
  German description.
- Motion sits behind `motion-safe:` or `prefersReducedMotion`.
- Text over a coloured annotation stays black — the annotation colours are
  translucent so contrast survives.

## Light only

The site has one palette. There is no dark mode, and adding per-component dark
variants would break the colour jobs above.

That makes an explicit light background a brand requirement, not a detail:
without one, a visitor whose browser is in dark mode gets the site's very dark
blue text on the browser's own dark canvas. [`src/app.css`](../src/app.css)
therefore declares `color-scheme: light` on `:root` and paints `body` with
`--color-white` and `--color-black`. Leave both in place, and set colours from
the tokens rather than adding `dark:` variants.
