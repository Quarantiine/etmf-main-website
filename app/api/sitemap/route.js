// app/api/sitemap/route.js
import { NextResponse } from "next/server";
import { generateSitemap } from "../../lib/generateSitemap";

export async function GET() {
	const sitemap = await generateSitemap();

	return new NextResponse(sitemap, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
