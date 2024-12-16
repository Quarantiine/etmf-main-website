import programList from "../../../data/programList.json";

// /app/api/sitemap/getPages.js
export async function getAllPages() {
	// Example static pages array

	const staticPages = [
		{
			url: "",
			changefreq: "monthly",
			priority: 1,
		},
		{
			url: "/aboutus",
			changefreq: "monthly",
			priority: 0.8,
		},
		{
			url: "/programs",
			changefreq: "monthly",
			priority: 0.8,
		},
		{
			url: "/getinvolved",
			changefreq: "monthly",
			priority: 0.8,
		},
		{
			url: "/resources",
			changefreq: "monthly",
			priority: 0.6,
		},
		{
			url: "/privacypolicy",
			changefreq: "monthly",
			priority: 0.7,
		},
		{
			url: "/terms",
			changefreq: "monthly",
			priority: 0.7,
		},
	];

	// Add dynamic routes if needed (e.g., blog post slugs)
	const dynamicPages = await getDynamicPages();

	return [...staticPages, ...dynamicPages];
}

async function getDynamicPages() {
	const dynamicPages = programList?.map((program) => ({
		url: `programs/${program.id}`, // Replace with your actual path structure
		changefreq: "monthly", // Default or program-specific value
		priority: 0.8, // Default or program-specific value
	}));

	return dynamicPages;
}
