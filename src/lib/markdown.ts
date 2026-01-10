import { marked } from "marked";

const markdownFiles = import.meta.glob("/src/content/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function loadMarkdown(filename: string): string {
  const key = `/src/content/${filename}`;
  const markdown = markdownFiles[key] as string;
  
  if (!markdown) {
    throw new Error(`Markdown file not found: ${filename}`);
  }
  
  return marked(markdown) as string;
}
