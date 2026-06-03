import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

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
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("svelte")) {
              return "vendor-svelte";
            }
            return "vendor";
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      $lib: "src/lib",
      $components: "src/components",
    },
  },
});
