# Working on freizeitban.de

## Read these, don't duplicate them

- [README.md](README.md) — stack, commands, project layout, styling
  conventions, deploy model. Start here.
- [CONTEXT.md](CONTEXT.md) — the domain glossary. German terms whose
  meaning you will not guess correctly from the code.
- [docs/brand.md](docs/brand.md) and [docs/writing.md](docs/writing.md) —
  authoritative over the README where they disagree with it.

Read the brand and writing guides **before touching user-facing copy,
colour, type, or the `/brand` page**. Skip them for config, build or
tooling work — they are 300 lines and most sessions don't need them.

## Rules

- **Run `npm run check` before calling work done.** `svelte-check` is the
  only verification gate in this repo; there is no linter and no test
  suite.
- **No test runner exists yet.** That is a "not yet", not a "never" — but
  adding one is its own decision. Ask before introducing Vitest, Playwright
  or a `test` script.
- **npm only.** One committed lockfile (`package-lock.json`). Never run
  `bun`, `yarn` or `pnpm` — Vercel builds from the npm lockfile, and a
  second lockfile breaks that silently.
- **Content lives in data, not in components.** Dates, prices, contact
  details, venue and registration URLs go in `src/data.json`; legal and
  long-form text goes in `src/content/*.md`. Never hardcode these into
  `.svelte` files.
- **Commit as `type(scope): description`.** Matching existing history:
  `feat(registration):`, `fix(copy):`, `docs(brand):`, `fix(styles):`.
- **German copy follows `docs/writing.md`** — in particular the Anrede
  split by audience and the gendering rules. Getting these wrong is more
  visible to readers than any code mistake in this repo.
