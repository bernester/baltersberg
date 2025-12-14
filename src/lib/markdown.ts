import { marked } from "marked";
import fs from "node:fs";
import path from "node:path";

export function loadMarkdown(filename: string): string {
  const filePath = path.join(process.cwd(), "src", "content", filename);
  const markdown = fs.readFileSync(filePath, "utf-8");
  return marked(markdown) as string;
}
