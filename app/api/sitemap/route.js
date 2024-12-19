// /app/api/sitemap/route.js
import { SitemapStream, streamToPromise } from "sitemap";
import { getAllPages } from "../sitemap/getPages"; // Helper function to get all page URLs

export async function GET() {
	const pages = await getAllPages(); // Fetch all your dynamic or static pages

	const sitemap = new SitemapStream({ hostname: "https://etmfoundation.com" });

	// Add each page to the sitemap
	pages.forEach((page) => {
		sitemap.write({
			url: page.url,
			changefreq: page.changefreq, // Adjust based on your needs
			priority: page.priority, // Adjust based on your needs
		});
	});

	sitemap.end();

	const sitemapXml = await streamToPromise(sitemap);

	return new Response(sitemapXml, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
