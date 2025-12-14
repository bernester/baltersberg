import { loadMarkdown } from "$lib/markdown";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  const content = loadMarkdown("datenschutz.md");
  return {
    content,
  };
};
