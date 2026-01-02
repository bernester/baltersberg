# Legal Content Management

The Impressum and Datenschutz pages are now maintained as Markdown files for easier editing.

## Files Location

- **Impressum**: `src/content/impressum.md`
- **Datenschutz**: `src/content/datenschutz.md`

## How to Edit

1. Edit the Markdown files directly in `src/content/`
2. Use standard Markdown syntax:

   - `#` for main headings (H1)
   - `##` for subheadings (H2)
   - `-` or `*` for bullet lists
   - `**text**` for bold
   - `[link text](url)` for links

3. The content is automatically rendered as HTML on the pages
4. No need to rebuild - changes appear on page reload

## Technical Details

- Markdown parsing: `marked` library
- Server-side loading: `src/lib/markdown.ts`
- Styling: Tailwind classes via `@apply` in component styles
- Type-safe: Full TypeScript support

## Styling

The rendered HTML uses the `.prose` class with custom Tailwind styles:

- H1: Large, bold headings
- H2: Medium, bold subheadings
- Paragraphs: Small text with proper spacing
- Lists: Bulleted with indentation
- Links: Underlined

All styling matches the existing site design.
