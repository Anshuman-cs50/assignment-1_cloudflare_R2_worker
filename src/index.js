import { jsonResponse, errorResponse } from './helpers.js';

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const path = url.pathname;
		const method = request.method;

		// --- API Routes ---
		if (path === '/api/files/upload' && method === 'POST') {
			return jsonResponse({ message: 'Upload endpoint coming soon' });
		}

		if (path === '/api/files' && method === 'GET') {
			return jsonResponse({ message: 'List endpoint coming soon' });
		}

		// --- UI Route ---
		if (path === '/' && method === 'GET') {
			return new Response('File Manager API — UI coming soon', {
				headers: { 'Content-Type': 'text/plain' },
			});
		}

		// --- Fallback ---
		return errorResponse('Not found', 404);
	},
};
