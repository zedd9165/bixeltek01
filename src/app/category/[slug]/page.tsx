// app/category/[slug]/page.tsx

import { client } from '@/lib/graphql-client';
import { gql } from 'graphql-request';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = "force-dynamic";

const GET_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategory($slug: [String]) {
    categories(where: { slug: $slug }) {
      nodes {
        name
        posts(first: 10) {
          nodes {
            title
            slug
            excerpt
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;


type PostNode = {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    featuredImage?: {
        node: {
            sourceUrl: string;
        };
    };
    author: {
        node: {
            name: string;
        };
    };
};

type CategoryPageData = {
    categories: {
        nodes: {
            name: string;
            posts: {
                nodes: PostNode[];
            };
        }[];
    };
};


type CategorySlugResponse = {
    categories: {
        nodes: {
            slug: string;
        }[];
    };
};


export default async function CategoryPage({ params }: { params: { slug: string } }) {
    let data: CategoryPageData | null = null;
    try {
        data = await client.request<CategoryPageData>(GET_POSTS_BY_CATEGORY, {
            slug: [params.slug],
        });
    } catch {
        notFound();
    }
    const category = data?.categories?.nodes?.[0];

    if (!category) {
        notFound();
    }

    return (
        <div className="px-4 py-10 max-w-6xl mx-auto text-white">
            <h1 className="text-3xl font-bold mb-8 border-b border-neutral-700 pb-2">
                Category: {category.name}
            </h1>

            {category.posts.nodes.length === 0 ? (
                <p className="text-neutral-500">No posts found in this category.</p>
            ) : (
                <div className="grid gap-8 lg:grid-cols-2">
                    {category.posts.nodes.map((post: PostNode) => (
                        <div key={post.slug} className="bg-neutral-900 rounded-lg p-5 shadow-md">
                            {post.featuredImage?.node.sourceUrl && (
                                <img
                                    src={post.featuredImage.node.sourceUrl}
                                    alt={post.title}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                            )}
                            <h2 className="text-xl font-semibold mb-1">
                                <Link href={`/blog/${post.slug}`} className="hover:text-purple-400">
                                    {post.title}
                                </Link>
                            </h2>
                            <p
                                className="text-neutral-400 text-sm line-clamp-3 mb-2"
                                dangerouslySetInnerHTML={{ __html: post.excerpt }}
                            />
                            <p className="text-xs text-neutral-500">
                                By {post.author.node.name} — {new Date(post.date).toDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}



export async function generateStaticParams() {
    try {
        const res: CategorySlugResponse = await client.request(gql`
        {
          categories(first: 50) {
            nodes {
              slug
            }
          }
        }
      `);

        return res.categories.nodes.map((cat: { slug: string }) => ({
            slug: cat.slug,
        }));
    } catch {
        return [];
    }
}

// 👇 Dynamic metadata per category
export async function generateMetadata({ params }: { params: { slug: string } }) {
    try {
        const data = await client.request<CategoryPageData>(GET_POSTS_BY_CATEGORY, {
            slug: [params.slug],
        });
        const category = data?.categories?.nodes?.[0];

        if (!category) {
            return {
                title: "Category Not Found | Bixeltek",
            };
        }

        return {
            title: `Category: ${category.name} | Bixeltek`,
            description: `Explore blog posts under the ${category.name} category on Bixeltek.`,
            alternates: {
                canonical: `https://bixeltek.com/category/${params.slug}`,
            },
            openGraph: {
                title: `Category: ${category.name} | Bixeltek`,
                description: `Explore blog posts under the ${category.name} category on Bixeltek.`,
                url: `https://bixeltek.com/category/${params.slug}`,
                siteName: "Bixeltek",
                type: "website",
            },
        };
    } catch {
        return {
            title: "Category Not Found | Bixeltek",
        };
    }
}
