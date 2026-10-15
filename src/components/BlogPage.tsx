'use client';

import { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

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

const POSTS_PER_PAGE = 12;

// Builds [1, '…', 4, 5, 6, '…', 20] style page lists
function getPageNumbers(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | 'ellipsis')[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  if (start > 2) pages.push('ellipsis');
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push('ellipsis');

  pages.push(total);
  return pages;
}

export function BlogPageUI({ allPosts, categories }: { allPosts: Post[]; categories: Category[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const gridTopRef = useRef<HTMLDivElement>(null);

  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      if (!selectedCategory) return matchSearch;

      const matchCategory = post.categories?.nodes?.some(
        cat => cat.slug.toLowerCase() === selectedCategory.toLowerCase()
      );

      return matchSearch && matchCategory;
    });
  }, [searchQuery, selectedCategory, allPosts]);

  const recentPosts = useMemo(() => {
    return allPosts
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, [allPosts]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedPosts = useMemo(
    () => filteredPosts.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE),
    [filteredPosts, safePage]
  );
  const pageNumbers = getPageNumbers(safePage, totalPages);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === safePage) return;
    setCurrentPage(page);
    gridTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleCategory = (slug: string | null) => {
    setSelectedCategory(slug);
    setCurrentPage(1);
  };

  return (
    <section className="flex bg-transparent text-neutral-800 min-h-screen sm:py-40 md:py-48 lg:py-64 px-6 lg:px-16">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:w-1/4 flex-col gap-8 pr-8 sticky top-0 h-fit">
        {/* Search */}
        <div className="bg-[radial-gradient(circle_at_30%_30%,_rgba(255,0,128,0.5),_transparent_60%),_radial-gradient(circle_at_70%_70%,_rgba(0,204,255,0.4),_transparent_60%),_radial-gradient(circle_at_50%_90%,_rgba(255,255,0,0.3),_transparent_70%)] p-[2px] rounded-full backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-neutral-200 p-1 rounded-full shadow-sm">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={e => handleSearch(e.target.value)}
            className="w-full py-2 px-4 bg-white text-neutral-900 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-neutral-500"
          />
        </div>

        {/* Category Filter */}
        <div className="bg-white border border-neutral-300 py-8 px-5 rounded-xl shadow-sm">
          <h2 className="text-2xl tracking-wide text-neutral-900 font-sofiasanscondensed font-semibold mb-3">
            Categories
          </h2>
          <ul className="flex flex-col gap-2">
            <li
              onClick={() => handleCategory(null)}
              className={`flex justify-between px-3 py-2 rounded-md cursor-pointer font-poppins transition-colors ${
                !selectedCategory
                  ? 'bg-purple-100 text-purple-700 font-medium'
                  : 'hover:bg-neutral-100 text-neutral-700'
              }`}
            >
              <span>All</span>
              <span>{allPosts.length}</span>
            </li>
            {categories.map(cat => (
              <li
                key={cat.slug}
                onClick={() => handleCategory(cat.slug)}
                className={`flex justify-between px-3 py-2 rounded-md cursor-pointer font-poppins transition-colors ${
                  selectedCategory === cat.slug
                    ? 'bg-purple-100 text-purple-700 font-medium'
                    : 'hover:bg-neutral-100 text-neutral-700'
                }`}
              >
                <span>{cat.name}</span>
                <span>{cat.count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="bg-white border border-neutral-300 py-8 px-5 rounded-xl shadow-sm">
          <h2 className="text-2xl tracking-wide text-neutral-900 font-sofiasanscondensed font-semibold mb-4">
            Recent Posts
          </h2>
          <ul className="flex flex-col gap-7">
            {recentPosts.map(post => (
              <li key={post.slug} className="flex gap-4 items-start">
                <img
                  src={post.featuredImage?.node.sourceUrl || 'https://via.placeholder.com/64'}
                  alt={post.title}
                  className="w-20 h-20 rounded-full object-cover border border-neutral-200"
                />
                <div className="flex flex-col gap-1">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-medium font-poppins text-neutral-800 hover:text-purple-700  transition-colors"
                  >
                    {post.title}
                  </Link>
                  <p className="text-xs text-neutral-500 line-clamp-2">
                    {post.excerpt.replace(/<[^>]+>/g, '')}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Blog Grid */}
      <div className="flex-1">
        <div ref={gridTopRef} className="scroll-mt-32">
          <h2 className="font-sofiasanscondensed text-5xl tracking-wide font-bold text-center mb-16">
            Our Latest Blog
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500">
          {paginatedPosts.map(post => (
            <div
              key={post.id}
              className=" border border-neutral-300 bg-white rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.featuredImage?.node.sourceUrl || 'https://via.placeholder.com/400x250.png?text=No+Image'}
                alt={post.title}
                className="rounded-t-2xl w-full h-64 object-cover"
              />
              <div className="p-4 lg:p-6 transition-colors flex flex-col justify-around duration-300 hover:bg-white rounded-2xl">
                <div>
                  <div>
                    <span className="text-white font-normal text-sm bg-purple-600 py-2 px-4 w-fit rounded-full mb-3 block">
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl text-black font-inter font-normal leading-8 mb-5">{post.title}</h2>
                  </Link>
                  <div
                    className="text-gray-600 leading-6 mb-8 text-sm font-normal line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <button className="text-sm font-inter flex items-center gap-2 group hover:bg-black hover:text-white text-black font-medium px-4 py-2 transition duration-300 bg-white border border-black/80 rounded-full">
                    Read more <RiArrowRightSLine className="hidden group-hover:flex text-lg " />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center mt-12 text-neutral-400 text-lg">No posts match your filters.</p>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            aria-label="Blog pagination"
            className="mt-14 flex flex-wrap items-center justify-center gap-2 font-inter"
          >
            <button
              onClick={() => goToPage(safePage - 1)}
              disabled={safePage === 1}
              aria-label="Previous page"
              className="flex items-center gap-1 px-4 py-2 text-sm rounded-full border border-neutral-300 bg-white text-neutral-800 transition-colors hover:bg-black hover:text-white disabled:opacity-40 disabled:pointer-events-none"
            >
              <RiArrowLeftSLine className="text-lg" /> Prev
            </button>

            {pageNumbers.map((p, i) =>
              p === 'ellipsis' ? (
                <span key={`ellipsis-${i}`} className="px-2 text-neutral-400 select-none">
                  …
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  aria-label={`Page ${p}`}
                  aria-current={p === safePage ? 'page' : undefined}
                  className={`w-10 h-10 text-sm rounded-full border transition-colors ${
                    p === safePage
                      ? 'bg-purple-600 border-purple-600 text-white font-medium'
                      : 'bg-white border-neutral-300 text-neutral-800 hover:bg-neutral-100'
                  }`}
                >
                  {p}
                </button>
              )
            )}

            <button
              onClick={() => goToPage(safePage + 1)}
              disabled={safePage === totalPages}
              aria-label="Next page"
              className="flex items-center gap-1 px-4 py-2 text-sm rounded-full border border-neutral-300 bg-white text-neutral-800 transition-colors hover:bg-black hover:text-white disabled:opacity-40 disabled:pointer-events-none"
            >
              Next <RiArrowRightSLine className="text-lg" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}