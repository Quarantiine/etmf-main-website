// app/api/sitemap/route.js

import { generateSitemap } from "../lib/generateSitemap.js";

export async function GET() {
	try {
		const sitemap = await generateSitemap();

		return new Response(sitemap, {
			headers: {
				"Content-Type": "application/xml",
				"Cache-Control": "public, max-age=86400", // Cache for 24 hours
			},
		});
	} catch (error) {
		return new Response(`Failed to generate sitemap: ${error}`, {
			status: 500,
		});
	}
}
