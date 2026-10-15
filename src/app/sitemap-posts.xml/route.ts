import { GraphQLClient } from "graphql-request";
import { GET_ALL_POSTS } from "@/lib/queries";

const endpoint = "https://demo.bixeltek.com/headless/graphql";
const client = new GraphQLClient(endpoint);
const baseUrl = "https://bixeltek.com";

export const revalidate = 3600;

interface SitemapPostEntry {
  url: string;
  lastModified?: string;
}

const escapeXml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

async function fetchAllPosts(): Promise<any[]> {
  const all: any[] = [];
  let after: string | null = null;

  while (true) {
    const data: any = await client.request(GET_ALL_POSTS, { first: 100, after });
    all.push(...(data?.posts?.nodes ?? []));
    if (!data?.posts?.pageInfo?.hasNextPage) break;
    after = data.posts.pageInfo.endCursor;
  }

  return all;
}

export async function GET() {
  let blogPosts: SitemapPostEntry[] = [];

  try {
    const posts = await fetchAllPosts();

    blogPosts = posts.map((post: any) => {
      const parsedDate = post.date ? new Date(post.date) : null;
      const isValidDate = parsedDate && !isNaN(parsedDate.getTime());

      return {
        url: `${baseUrl}/blog/${post.slug}`,
        ...(isValidDate ? { lastModified: parsedDate.toISOString() } : {}),
      };
    });
  } catch (error) {
    console.error("❌ Error fetching blog posts:", error);
  }

  const urls = blogPosts
    .map(
      (u) => `  <url>
    <loc>${escapeXml(u.url)}</loc>${u.lastModified ? `\n    <lastmod>${u.lastModified}</lastmod>` : ""}
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}