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
    },
    // Hash-based CSP. SvelteKit computes hashes for any inline scripts/styles
    // it injects at build time and adds them to the policy automatically, so
    // we don't need 'unsafe-inline' for scripts. 'unsafe-inline' on style-src
    // covers Svelte's scoped <style> blocks.
    csp: {
      mode: 'auto',
      directives: {
        'default-src': ['self'],
        'script-src': ['self'],
        'style-src': ['self', 'unsafe-inline'],
        'img-src': ['self', 'data:'],
        'font-src': ['self'],
        'connect-src': ['self'],
        'frame-ancestors': ['none'],
        'base-uri': ['self'],
        'form-action': ['self']
      }
    }
  },
  preprocess: vitePreprocess(),
};

export default config;
