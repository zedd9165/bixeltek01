// app/blog/page.tsx
export const metadata = {
    title: "Google Ads, SEO, Marketing Tips & News | Bixeltek Blogs",
    description: "Explore expert blogs on Google Ads, SEO, and digital marketing trends to grow your business with Bixeltek’s proven strategies.",
    keywords:
        "Google Ads blog, SEO tips, marketing insights, Bixeltek blogs, digital strategy, web development blog, Hyderabad marketing agency, online growth tips",
    openGraph: {
        title: "Google Ads, SEO, Marketing Tips & News | Bixeltek Blogs",
        description:
            "Explore expert blogs on Google Ads, SEO, and digital marketing trends to grow your business with Bixeltek’s proven strategies.",
        type: "website",
    },
};

export const dynamic = "force-dynamic";
import { client } from '@/lib/graphql-client';
import { GET_ALL_POSTS, GET_ALL_CATEGORIES_WITH_COUNT } from '@/lib/queries';
import { BlogPageUI } from '@/components/BlogPage';

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage?: { node: { sourceUrl: string } };
  categories?: { nodes: { name: string; slug: string }[] };
};

type Category = { name: string; slug: string; count: number };

type GetAllPostsResponse = {
  posts: {
    pageInfo: { hasNextPage: boolean; endCursor: string | null };
    nodes: Post[];
  };
};

type GetCategoriesResponse = {
  categories: { nodes: Category[] };
};

// WPGraphQL returns at most 100 per request, so follow the cursor until done
async function fetchAllPosts(): Promise<Post[]> {
  const all: Post[] = [];
  let after: string | null = null;

  while (true) {
    const data: GetAllPostsResponse = await client.request<GetAllPostsResponse>(
      GET_ALL_POSTS,
      { first: 100, after }
    );
    all.push(...data.posts.nodes);
    if (!data.posts.pageInfo.hasNextPage) break;
    after = data.posts.pageInfo.endCursor;
  }

  return all;
}

export default async function BlogPage() {
  const [posts, categoriesData] = await Promise.all([
    fetchAllPosts(),
    client.request<GetCategoriesResponse>(GET_ALL_CATEGORIES_WITH_COUNT),
  ]);

  const categories = categoriesData.categories.nodes;

  return <BlogPageUI allPosts={posts} categories={categories} />;
}