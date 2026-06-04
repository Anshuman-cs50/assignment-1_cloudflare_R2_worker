/**
 * Standardized JSON success response.
 */
export function jsonResponse(data, status = 200) {
	return new Response(JSON.stringify({ success: true, data }), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}

/**
 * Standardized JSON error response. Never exposes internal details.
 */
export function errorResponse(message, status = 400) {
	return new Response(JSON.stringify({ success: false, error: message }), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}

/**
 * Sanitize a user-supplied filename. Strips path traversal and special chars.
 * Returns null if the result is empty (i.e. the name was entirely invalid).
 */
export function sanitizeFilename(name) {
	if (!name || typeof name !== 'string') return null;
	// Remove path components and keep only the basename
	const basename = name.split(/[/\\]/).pop();
	// Whitelist: letters, digits, dots, hyphens, underscores
	const cleaned = basename.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 255);
	return cleaned.length > 0 ? cleaned : null;
}

/**
 * Generate a unique file ID using the Workers crypto API.
 */
export function generateId() {
	return crypto.randomUUID();
}
