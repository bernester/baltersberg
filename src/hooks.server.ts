import type { Handle } from '@sveltejs/kit';

// CSP is configured in svelte.config.js (kit.csp). This hook only sets the
// response headers that SvelteKit doesn't manage out of the box.
export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	response.headers.set(
		'Permissions-Policy',
		'geolocation=(), microphone=(), camera=(), fullscreen=(), payment=()'
	);
	return response;
};
