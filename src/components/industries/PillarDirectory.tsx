'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  industryCategoryGroups,
  IndustryCategoryGroup,
  PillarIndustryItem,
} from '@/data/industries/categories';
import {
  HeartPulse,
  Home,
  Briefcase,
  ShoppingBag,
  Cpu,
  Globe,
  ArrowUpRight,
  Search,
  Layers,
  Sparkles,
  X,
  Compass,
} from 'lucide-react';

const iconMap = {
  HeartPulse,
  Home,
  Briefcase,
  ShoppingBag,
  Cpu,
  Globe,
};

const accents = [
  'from-purple-600 to-indigo-600',
  'from-indigo-600 to-blue-600',
  'from-fuchsia-600 to-purple-600',
  'from-violet-600 to-indigo-700',
  'from-blue-600 to-indigo-600',
  'from-purple-700 to-fuchsia-600',
];

/* ------------------------------------------------------------------ */
/* Bento layout engine                                                 */
/* A "block" is a 4-column x 2-row grid holding 1–5 cards.             */
/* Each slot is [colStart, rowStart, colSpan, rowSpan].                */
/* ------------------------------------------------------------------ */

type Slot = [number, number, number, number];

const PATTERNS: Record<number, Slot[]> = {
  1: [[1, 1, 4, 2]],
  2: [
    [1, 1, 2, 2],
    [3, 1, 2, 2],
  ],
  3: [
    [1, 1, 2, 2],
    [3, 1, 2, 1],
    [3, 2, 2, 1],
  ],
  4: [
    [1, 1, 2, 2],
    [3, 1, 2, 1],
    [3, 2, 1, 1],
    [4, 2, 1, 1],
  ],
  5: [
    [1, 1, 2, 2],
    [3, 1, 1, 1],
    [4, 1, 1, 1],
    [3, 2, 1, 1],
    [4, 2, 1, 1],
  ],
};

/** Split n items into balanced blocks of at most 5 (never leaves a lone single card unless n=1). */
function chunkSizes(n: number): number[] {
  if (n <= 0) return [];
  const blocks = Math.ceil(n / 5);
  const base = Math.floor(n / blocks);
  const extra = n % blocks;
  return Array.from({ length: blocks }, (_, i) => base + (i < extra ? 1 : 0));
}

type Variant = 'hero' | 'big' | 'wide' | 'small';
const variantFor = (cs: number, rs: number): Variant => {
  const area = cs * rs;
  if (area >= 8) return 'hero';
  if (area >= 4) return 'big';
  if (area >= 2) return 'wide';
  return 'small';
};

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export const PillarDirectory = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const totalCount = useMemo(
    () => industryCategoryGroups.reduce((acc, g) => acc + g.industries.length, 0),
    []
  );

  const filteredGroups = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return industryCategoryGroups
      .map((group) => {
        if (activeCategory !== 'all' && group.id !== activeCategory) return null;
        const industries = group.industries.filter((item) => {
          if (!q) return true;
          return (
            item.name.toLowerCase().includes(q) ||
            item.headline.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.tags.some((t) => t.toLowerCase().includes(q))
          );
        });
        return industries.length ? { ...group, industries } : null;
      })
      .filter((g): g is IndustryCategoryGroup => g !== null);
  }, [activeCategory, searchQuery]);

  const visibleCount = filteredGroups.reduce((acc, g) => acc + g.industries.length, 0);

  const startNumbers = useMemo(() => {
    let n = 0;
    return filteredGroups.map((g) => {
      const start = n + 1;
      n += g.industries.length;
      return start;
    });
  }, [filteredGroups]);

  const pill =
    'inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border whitespace-nowrap transition-all cursor-pointer';

  return (
    <section
      id="directory"
      className="relative py-20 md:py-28 bg-slate-50 dark:bg-slate-950 font-['Poppins',sans-serif] scroll-mt-20 border-t border-slate-200/60 dark:border-slate-900"
    >
      <div className="absolute inset-x-0 top-0 h-[600px] pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-[90%] mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-6xl mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-semibold tracking-wide uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            The Industry Index
          </div>
          <h2 className="font-['Inter',sans-serif] text-3xl md:text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Find your vertical. <span className="text-indigo-600 dark:text-indigo-400">Get your playbook.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {totalCount} industries across {industryCategoryGroups.length} categories, each with its own search strategy, funnel design and compliance setup.
          </p>
        </div>



        {(searchQuery || activeCategory !== 'all') && filteredGroups.length > 0 && (
          <p className="-mt-6 mb-8 px-2 text-xs text-slate-500 dark:text-slate-400">
            Showing <span className="font-bold text-slate-900 dark:text-white">{visibleCount}</span> of {totalCount}
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="ml-3 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer"
            >
              Reset
            </button>
          </p>
        )}

        {/* Groups */}
        {filteredGroups.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 max-w-lg mx-auto p-8 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="font-['Inter',sans-serif] text-lg font-bold text-slate-900 dark:text-white mb-2">No matching industry found</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Nothing matches &ldquo;{searchQuery}&rdquo; yet. Our method works for most considered-purchase businesses, so book a call and we&apos;ll map your niche.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-5 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-20 md:space-y-28">
            {filteredGroups.map((group, gi) => (
              <CategoryBento
                key={group.id}
                group={group}
                accent={accents[industryCategoryGroups.findIndex((g) => g.id === group.id) % accents.length]}
                startNumber={startNumbers[gi]}
                firstGroup={gi === 0}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* One category = header + one or more bento blocks                    */
/* ------------------------------------------------------------------ */

const CategoryBento = ({
  group,
  accent,
  startNumber,
  firstGroup,
}: {
  group: IndustryCategoryGroup;
  accent: string;
  startNumber: number;
  firstGroup: boolean;
}) => {
  const Icon = iconMap[group.iconName];
  const sizes = chunkSizes(group.industries.length);

  let cursor = 0;
  const blocks = sizes.map((size, bi) => {
    const items = group.industries.slice(cursor, cursor + size);
    const numberStart = startNumber + cursor;
    cursor += size;
    return { items, size, bi, numberStart };
  });

  return (
    <div id={`cat-${group.id}`} className="scroll-mt-28">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center text-white shadow-lg shadow-purple-600/30 shrink-0`}>
            <Icon className="w-7 h-7" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">{group.badge}</div>
            <h3 className="font-['Inter',sans-serif] text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {group.title}
            </h3>
            <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400 max-w-xl">{group.subtitle}</p>
          </div>
        </div>
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          {group.industries.length} {group.industries.length === 1 ? 'specialty' : 'specialties'}
        </span>
      </div>

      {/* Blocks */}
      <div className="space-y-4 md:space-y-5">
        {blocks.map(({ items, size, bi, numberStart }) => {
          const pattern = PATTERNS[size] ?? PATTERNS[5];
          const mirrored = bi % 2 === 1; // flip the big card to the right on alternate blocks

          return (
            <div
              key={bi}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[repeat(2,minmax(0,250px))] gap-4 md:gap-5"
            >
              {items.map((item, k) => {
                const [c, r, cs, rs] = pattern[k];
                const col = mirrored ? 6 - c - cs : c;
                const variant = variantFor(cs, rs);
                // On sm (2 col) screens the big first card spans both columns for rhythm
                const smSpan = k === 0 && size !== 2 ? 'md:col-span-2' : '';
                return (
                  <BentoCard
                    key={item.slug}
                    item={item}
                    number={numberStart + k}
                    variant={variant}
                    accent={accent}
                    categoryTitle={group.title}
                    priority={firstGroup && bi === 0 && k < 3}
                    className={`${smSpan} lg:[grid-column:var(--gc)] lg:[grid-row:var(--gr)]`}
                    style={
                      {
                        '--gc': `${col} / span ${cs}`,
                        '--gr': `${r} / span ${rs}`,
                      } as React.CSSProperties
                    }
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Card: full-bleed image, content scales with the card size           */
/* ------------------------------------------------------------------ */

const BentoCard = ({
  item,
  number,
  variant,
  accent,
  categoryTitle,
  priority,
  className = '',
  style,
}: {
  item: PillarIndustryItem;
  number: number;
  variant: Variant;
  accent: string;
  categoryTitle: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const large = variant === 'hero' || variant === 'big';
  const tagLimit = large ? 4 : variant === 'wide' ? 3 : 0;
  const tags = item.tags.slice(0, tagLimit);

  return (
    <Link
      href={item.link}
      style={style}
      className={`group relative block overflow-hidden rounded-3xl bg-slate-900 border border-slate-200/70 dark:border-slate-800 min-h-[240px] lg:min-h-0 h-full shadow-sm hover:shadow-2xl hover:shadow-purple-600/20 transition-shadow duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${className}`}
    >
      <Image
        src={item.image}
        alt={`${item.name} marketing and digital growth solution`}
        fill
        priority={priority}
        sizes={large ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'}
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-950/10 transition-opacity duration-500" />
      {/* brand tint on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-30 mix-blend-multiply transition-opacity duration-500`} />

      {/* top row */}
      <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">

          {item.badge && (
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide text-white bg-gradient-to-r ${accent}`}>
              <Sparkles className="w-3 h-3" />
              {item.badge}
            </span>
          )}
        </div>
        <span className="w-9 h-9 shrink-0 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-slate-900 group-hover:rotate-45">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>

      {/* bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white">
        {variant !== 'small' && (
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-purple-200/90 mb-1">{categoryTitle}</span>
        )}
        <h4
          className={`font-['Inter',sans-serif] font-extrabold tracking-tight leading-tight drop-shadow ${
            variant === 'hero' ? 'text-3xl md:text-4xl' : variant === 'big' ? 'text-2xl md:text-3xl' : variant === 'wide' ? 'text-xl md:text-2xl' : 'text-lg'
          }`}
        >
          {item.name}
        </h4>

        {/* headline: always on mobile/tablet, hidden on the tiny desktop tiles */}
        <p
          className={`mt-1.5 font-medium text-white/85 leading-snug ${
            variant === 'small' ? 'text-xs line-clamp-2 lg:hidden' : 'text-sm line-clamp-2'
          }`}
        >
          {item.headline}
        </p>

        {large && (
          <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-2 max-w-xl">{item.description}</p>
        )}

        {tags.length > 0 && (
          <div className="mt-3 hidden md:flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span key={t} className="px-2.5 py-0.5 text-[10px] font-medium rounded-md bg-white/15 backdrop-blur border border-white/15">
                {t}
              </span>
            ))}
          </div>
        )}

        {/* small tiles: reveal CTA on hover */}
        {variant === 'small' && (
          <span className="hidden lg:inline-flex mt-1.5 items-center gap-1 text-[11px] font-semibold text-purple-200 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            Explore strategy <ArrowUpRight className="w-3 h-3" />
          </span>
        )}
      </div>
    </Link>
  );
};