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
