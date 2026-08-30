# Writing Guide — Freizeit für Alle

How copy on freizeitban.de should read. For how it should look, see
[brand.md](brand.md).

The Anrede table, the gendering rule and the voice below are all rendered as
worked examples on [`/brand`](../src/routes/brand/+page.svelte) — including
side-by-side "so nicht / so schon" copy pairs.

Everything on the site is German. The four Manifest words — **bunt, laut, wild,
geborgen** — are the voice as much as the design: warm and direct, honest about
limits, never bureaucratic.

## Anrede: split by audience

Each page picks one form and holds it to the end. The form follows who is
actually being addressed.

| Audience | Form | Pages |
|---|---|---|
| Eltern und Sorgeberechtigte | **ihr / euch / eure** | `/`, `/info`, FAQ, Preise |
| Kinder und Jugendliche | **du / dir / deine** | Packliste, anything a child reads directly |
| Ehrenamtliche im Team | **du** | `/mach-mit` |
| Spendende | **du** | `/spenden` |

*Sie* is never used — not even on the legal pages, where the tone stays formal
but the address stays informal.

Where a page serves two audiences, split it by section rather than switching
mid-paragraph: `/info` addresses parents about Anreise and Gesundheit, and
switches to the child at the Packliste heading, which is the point where the
reader genuinely changes.

## Gendern: neutral first, then Gendersternchen

1. **Prefer a neutral form.** This is already the dominant style on the site
   and reads best aloud: *Teilnehmende*, *Betreuende*, *Sorgeberechtigte*,
   *Engagierte*, *Ehrenamtliche*, *das Team*, *Ansprechperson*.
2. **When no neutral form exists, use the Gendersternchen**: *Inklusions&shy;helfer\*in*,
   *Ärzt\*in*. The asterisk is the house form.

The Doppelpunkt (`:innen`) is not used — it behaves worse in screen readers.
A `Teilnehmer:innen` still in the source is a leftover to convert.

Where the site already speaks about children and teenagers, *Kinder und
Jugendliche* is the standing phrase — plural, neutral, no construction needed.

## Voice

**Say what a family gets, then how to get it.** Copy opens with the benefit and
closes with the action: "Post von zuhause versüßt das Zeltlager" comes before
the address to send it to.

**Short sentences, plain words.** Many readers are children, and many parents
are reading on a phone. Prefer *anmelden* to *Anmeldung vornehmen*, *kostet* to
*Teilnahmebeitrag beträgt*. Aim for one idea per sentence.

**Be concrete.** Numbers, dates and times beat adjectives: *10 Tage*, *32 Kinder
und Jugendliche*, *Betreuungsschlüssel von 1:2*, *4 leckere vegetarische
Mahlzeiten*. Pull each of them from [`src/data.json`](../src/data.json) where it
lives there, so copy never goes stale against the data.

**Warm, not saccharine.** The site is allowed *unfassbar lecker* and *ein
einzigartiges Sommerabenteuer*. It is not a brochure — it is a group of people
who like this camp writing about it.

**Honest about limits.** The strongest passage on the site is the FAQ answer on
Behinderung: it says yes, then names the terrain that is not barrierefrei, then
offers to find a solution together. Copy the shape. A limit stated plainly
builds more trust than a promise that cannot hold.

**Every difficulty ends with a door.** Money, allergies, missing equipment,
Heimweh — each is followed by a concrete next step and the address
`hallo@freizeitban.de`. Never leave a reader stuck at a problem.

## Inclusion in the wording

- **Behinderung**, not *Handicap* or *besondere Bedürfnisse*. *Menschen mit
  Behinderung*, *Kinder mit und ohne Behinderung*.
- Barriers sit in the environment, not in the person: *Wir bauen Barrieren ab*,
  not *trotz seiner Einschränkung*.
- Money is described without shame: the three prices go by *Einkommen*, and
  *Geld soll niemals ein Grund sein, nicht dabei sein zu können* is the standing
  framing. No page implies a family is asking for a favour.
- Write **Familien** rather than assuming a shape; **Sorgeberechtigte** rather
  than *Eltern* wherever the legal role is what matters.
- Announce that help exists before someone has to ask for it.

## Emphasis

`<strong>` marks what a reader must not miss — a date, a deadline, an amount, a
list item's lead-in. It is not for enthusiasm.

The sketched annotations are the enthusiasm, and they are rationed: one
`use:Marker` per headline on the key phrase, at most one `use:Underline` per
paragraph. See [brand.md](brand.md#annotations).

## Mechanics

- **Gedankenstrich**: `–` (en dash) with spaces around it — the German
  convention. The source currently mixes 24 en dashes with 11 em dashes
  (`—`); the en dash is the house form, so convert an em dash when you touch
  the line.
- **Auslassung / Bereich**: `von 11 bis 13 Uhr` in prose; `–` in date ranges.
- **Euro**: `280€` in display figures, `10 €` with a non-breaking space
  (`10&nbsp;€`) in running prose.
- **Non-breaking spaces** (`&nbsp;`) between a number and its unit: `70&nbsp;cm`,
  `z.&nbsp;B.`
- **`&shy;`** in long compounds that would otherwise overflow on mobile:
  `Freizeit&shy;bande`, `Hauptansprech&shy;personen`.
- **Emoji**: at most one, and only where the tone is genuinely light. The `😊`
  after the price help offer is the calibration.
- **Times** read `ab 11 Uhr`, `zwischen 11 und 13 Uhr` — the phrasing lives in
  `data.json`, so copy reads it rather than restating it.
- **Dates** come from `formatDate` / `formatDateTime` in
  [`src/lib/utils.ts`](../src/lib/utils.ts), never hand-formatted.

## Standing names

Use these exactly; they are the brand's proper nouns.

- **Freizeit für Alle** — the camp. Capital A in *Alle*.
- **Freizeitbande e.V.** — the association. *die Freizeitbande*, *unsere Bande*.
- **das Freizeitbanden Manifest** — the four principles.
- **Buddies** — the two fixed Betreuende per tent group.
- **Zeltplatz am Buchweiher** — the venue.
- **bunt, laut, wild, geborgen** — lowercase in running text, and used in that
  order.

## Page titles and SEO

- `<title>`: `Seitenname – Freizeit für Alle` (en dash). The home page keeps its
  longer, search-facing title.
- `<meta name="description">`: one sentence, under ~155 characters, naming both
  *inklusiv* and *Sommerfreizeit* or *Zeltlager* where it fits naturally.
- Headings are written for a reader, not a crawler — the site ranks on plain,
  honest description.

## Before you ship a page

- One Anrede throughout, matching the audience table above.
- Neutral forms where they exist, `*in` where they do not.
- Every date, price, address and URL read from `data.json`.
- Every difficulty followed by a next step.
- One `use:Marker` per headline.
- Read it out loud. If a sentence needs a second breath, split it.
