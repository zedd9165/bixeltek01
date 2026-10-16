import { readdirSync, existsSync } from "fs";
import path from "path";
import { client } from "@/lib/graphql-client";
import { gql } from "graphql-request";

const baseUrl = "https://bixeltek.com";

const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    categories(first: 50) {
      nodes {
        slug
        count
      }
    }
  }
`;

interface SitemapUrlEntry {
  url: string;
  lastModified?: string;
}

async function getCategoryRoutes(): Promise<SitemapUrlEntry[]> {
  try {
    const data: any = await client.request(GET_ALL_CATEGORIES);
    const nodes = data?.categories?.nodes || [];
    return nodes
      .filter((cat: any) => typeof cat?.slug === "string" && (cat.count ?? 0) > 0)
      .map((cat: any) => ({
        url: `${baseUrl}/category/${cat.slug}`,
      }));
  } catch (error) {
    console.error("Error fetching categories for sitemap:", error);
    return [];
  }
}

function getAppRoutes(dirPath: string, prefix = ""): SitemapUrlEntry[] {
  if (!existsSync(dirPath)) return [];

  const entries = readdirSync(dirPath, { withFileTypes: true });
  const urls: SitemapUrlEntry[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const fullPath = path.join(dirPath, entry.name);

      if (
        entry.name.startsWith("(") ||
        entry.name.startsWith("_") ||
        entry.name.startsWith("[") ||
        entry.name === "api" ||
        entry.name === "blog" ||
        entry.name === "category" ||
        entry.name.startsWith("sitemap") ||
        entry.name.startsWith("thank-you")
      ) {
        continue;
      }

      const routePath = prefix ? `${prefix}/${entry.name}` : `/${entry.name}`;

      // Exclude dedicated paid marketing landing pages, playbook, preview & redirected duplicate routes from the sitemap
      if (
        entry.name === 'home-2'||
        entry.name.includes("preview") ||
        routePath.includes("preview") ||
        entry.name === "ecommerce-websites" ||
        routePath === "/ecommerce-websites" ||
        entry.name === "web-design-services" ||
        routePath === "/web-design-services" ||
        routePath === "/services/app-development" ||
        entry.name === "dental-marketing-usa" ||
        entry.name === "dental-marketing-canada" ||
        entry.name === "dental-marketing-uk" ||
        entry.name === "dental-marketing-india" ||
        entry.name === "marketing" ||
        routePath === "/marketing" ||
        routePath === "/marketing/dental-growth-playbook-2026" ||
        routePath.startsWith("/marketing/")
      ) {
        continue;
      }

      urls.push({
        url: `${baseUrl}${routePath}`,
      });

      urls.push(...getAppRoutes(fullPath, routePath));
    }
  }

  return urls;
}

export async function GET() {
  const appDir = path.join(process.cwd(), "src", "app");
  const staticRoutes = getAppRoutes(appDir);
  const categoryRoutes = await getCategoryRoutes();

  const homePage: SitemapUrlEntry[] = [{ url: `${baseUrl}/` }];

  const allPages = [...homePage, ...staticRoutes, ...categoryRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPages
      .map(
        (u) => `<url>
        <loc>${u.url}</loc>${u.lastModified ? `\n        <lastmod>${u.lastModified}</lastmod>` : ""}
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });

}