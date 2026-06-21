// Every route is fully static — no per-request server work needed.
// SvelteKit will emit pure HTML at build time and Vercel will serve it as
// a static asset (zero serverless invocations).
export const prerender = true;
