// lib/generateSitemap.js
export async function generateSitemap() {
  const baseUrl = "etmfoundation.com";

  const staticPages = [
    "",
    "aboutus",
    "programs",
    "getinvolved",
    "resources",
    "privacypolicy",
    "terms",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (page) => `
        <url>
          <loc>${baseUrl}/${page}</loc>
          <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${page === "" ? "1.0" : "0.8"}</priority>
        </url>
      `
      )
      .join("")}
  </urlset>`;

  return sitemap;
}
