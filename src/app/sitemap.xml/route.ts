
// File: src/app/sitemap.xml/route.ts

export async function GET() {
  const baseUrl = "https://bixeltek.com";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>${baseUrl}/sitemap-pages.xml</loc>
    </sitemap>
    <sitemap>
      <loc>${baseUrl}/sitemap-posts.xml</loc>
    </sitemap>
  </sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
