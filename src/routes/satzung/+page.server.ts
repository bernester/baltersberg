import { loadMarkdown } from "$lib/markdown";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  const content = loadMarkdown("satzung.md");
  return {
    content,
  };
};
