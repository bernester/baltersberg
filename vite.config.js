import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// $lib and $components aliases live in svelte.config.js (kit.alias) — they
// flow through to Vite automatically, so we don't duplicate them here.
export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        passes: 2,
      },
    },
  },
});
