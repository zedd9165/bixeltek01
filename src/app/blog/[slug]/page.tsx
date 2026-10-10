import { client } from '@/lib/graphql-client';
import { GET_SINGLE_POST, GET_SUGGESTED_POSTS } from '@/lib/queries';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

type SinglePost = {
  id: string;
  title: string;
  content: string;
  date: string;
  author: {
    node: {
      name: string;
    };
  };
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
  categories?: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
};

type GetSinglePostResponse = {
  post: SinglePost;
};

type SuggestedPost = {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage?: { node: { sourceUrl: string } };
};

type SuggestedPostsResponse = {
  posts: {
    nodes: SuggestedPost[];
  };
};

const calculateReadTime = (html: string): string => {
  const text = html.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).length;
  return `${Math.ceil(wordCount / 200)} min read`;
};

// ✅ DYNAMIC META HANDLER
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  try {
    const { post } = await client.request<GetSinglePostResponse>(GET_SINGLE_POST, { slug });

    const cleanContent = post.content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    const metaTitle = post.title.slice(0, 60);
    const metaDescription = cleanContent.slice(0, 150);

    return {
      title: metaTitle,
      description: metaDescription,
      openGraph: {
        title: metaTitle,
        description: metaDescription,
        images: post.featuredImage?.node.sourceUrl ? [post.featuredImage.node.sourceUrl] : [],
      },
    };
  } catch (err) {
    console.error('Failed to fetch metadata:', err);
    return {
      title: 'Post not found | Bixeltek Blog',
      description: 'The blog post you’re looking for could not be found.',
    };
  }
}

// 📰 MAIN BLOG PAGE
export default async function SinglePostPage({ params }: Props) {
  const { slug } = params;

  const { post } = await client.request<GetSinglePostResponse>(GET_SINGLE_POST, { slug });
  const suggested = await client.request<SuggestedPostsResponse>(GET_SUGGESTED_POSTS, {
    excludeId: post.id,
  });

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const readTime = calculateReadTime(post.content);

  const [featured, ...rest] = suggested.posts.nodes;

  return (
    <>
      <div className="bg-purple-700 text-white pt-40 pb-24 px-8 md:px-24">
        <div className="sm:w-[99%] md:w-[80%] lg:max-w-[70%] mx-auto flex flex-col items-center justify-center text-center lg:text-center min-h-[40vh]">

          <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight mb-8">{post.title}</h1>

          <p className="md:text-base sm:text-sm text-center max-w-[80%] mx-auto text-white/90  lg:mx-0 mb-6">
            {post.content
              .replace(/<[^>]*>/g, '')
              .split(' ')
              .slice(0, 40)
              .join(' ') + '...'}
          </p>

          {/* Optional CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-center gap-4 mb-6">
            <div>
              <ul className="text-sm text-white flex gap-4 mt-1 justify-center sm:justify-start">
                <h4 className='border-r border-white/80 pr-4'>By {post.author.node.name}</h4>
                <li className='border-r border-white/80 pr-4'>{formattedDate}</li>
                <li>{readTime}</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-white text-black min-h-screen sm:py-16 lg:py-24">
        <div className="sm:w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-10">
          {/* Main content */}
          <div>
            {post.featuredImage?.node.sourceUrl && (
              <figure className="mb-6">
                <img
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.title}
                  className="w-full object-cover rounded-xl"
                />
                <figcaption className="mt-3 text-sm text-center text-neutral-500">Featured image</figcaption>
              </figure>
            )}

            <div
              className="font-inter leading-relaxed text-neutral-900 text-base
             [&_h1]:text-4xl [&_h1]:font-semibold
             [&_h2]:text-3xl [&_h2]:mb-4 [&_h2]:mt-5 [&_h2]:font-semibold
             [&_h3]:text-3xl [&_h3]:mb-4 [&_h3]:mt-5 [&_h3]:font-semibold
             [&_h4]:text-xl
             [&_h5]:text-xl
             [&_h6]:text-lg
             [&_p]:mb-4
             [&_ul]:list-disc [&_ul]:pl-6
             [&_a]:text-blue-500 [&_a]:underline [&_a]:hover:text-blue-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-10">
              {post.categories?.nodes.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="m-1 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm bg-neutral-800 text-white hover:bg-neutral-700"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 self-start">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-950 via-purple-900 to-neutral-900 text-white p-5 shadow-2xl">
              {/* Decorative glows */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-fuchsia-500/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-purple-500/30 blur-3xl" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl font-semibold font-sofiasanscondensed tracking-wide">
                    Suggested Blogs
                  </h2>

                </div>

                {/* Featured (first) suggestion */}
                {featured && (
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="group relative block overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-purple-600 to-fuchsia-600 ring-1 ring-white/10"
                  >
                    {featured.featuredImage?.node.sourceUrl && (
                      <img
                        src={featured.featuredImage.node.sourceUrl}
                        alt={featured.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <span className="absolute top-3 left-3 rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-[11px] font-medium uppercase tracking-wider">
                      Top pick
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h3 className="font-poppins font-semibold text-base leading-snug line-clamp-3">
                        {featured.title}
                      </h3>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs text-purple-200 transition-all group-hover:gap-2 group-hover:text-white">
                        Read article <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                )}

                {/* Remaining suggestions */}
                {rest.length > 0 && (
                  <ul className="mt-4 divide-y divide-white/10">
                    {rest.map((item, index) => (
                      <li key={item.slug}>
                        <Link
                          href={`/blog/${item.slug}`}
                          className="group flex items-center gap-3 py-3.5 transition-all hover:pl-1"
                        >
                          {/* Big outlined numeral */}
                          <span
                            className="w-9 shrink-0 text-3xl font-bold leading-none text-transparent transition-colors group-hover:text-fuchsia-400"
                            style={{ WebkitTextStroke: '1px rgba(216,180,254,0.7)' }}
                          >
                            {String(index + 2).padStart(2, '0')}
                          </span>

                          <div className="min-w-0 flex-1">
                            <h3 className="font-poppins text-sm font-medium leading-snug line-clamp-2 text-white/95 transition-colors group-hover:text-fuchsia-200">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-xs text-purple-200/70 line-clamp-1">
                              {item.excerpt.replace(/<[^>]+>/g, '')}
                            </p>
                          </div>

                          {item.featuredImage?.node.sourceUrl && (
                            <img
                              src={item.featuredImage.node.sourceUrl}
                              alt={item.title}
                              className="h-12 w-12 shrink-0 rounded-xl object-cover ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
                            />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Footer */}
                <Link
                  href="/blog"
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-2.5 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white hover:text-purple-800"
                >
                  Browse all articles <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}