import adapter from '@sveltejs/adapter-vercel';
import path from 'path';
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $components: path.resolve('src/components'),
      $lib: path.resolve('src/lib')
    }
  },
  preprocess: vitePreprocess(),
};

export default config;
