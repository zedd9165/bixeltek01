"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Layers, MessageSquare } from "lucide-react";

export interface TechnologyItem {
  name: string;
  /** Pre-rendered icon, e.g. <SiGoogleanalytics />  (use this OR logoSrc) */
  icon?: React.ReactNode;
  /** Path to a logo in /public, e.g. "/logos/hotjar.svg" (use this OR icon) */
  logoSrc?: string;
  /** Tailwind text color for the icon, e.g. "text-[#E37400]". Defaults to dark gray */
  iconColor?: string;
  /** Optional link (docs / tool website) */
  href?: string;
}

export interface TechnologiesSectionProps {
  id?: string;
  eyebrow?: string;
  h2?: string;
  intro?: string;
  technologies: TechnologyItem[];
  /** Center hub */
  centerTitle?: string;
  centerSubtitle?: string;
  centerIcon?: React.ReactNode;
  /** Bottom CTA */
  ctaTitle?: string;
  ctaText?: string;
  ctaButtonText?: string;
  ctaHref?: string;
}

/* ---------- Hexagon geometry (sizes come from CSS variables) ---------- */
const HEX_CLIP =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
const GAP = 6; // px between hexes
// Pull each row up so the rows interlock like a honeycomb
const ROW_OVERLAP = `calc(var(--hex-w) * -0.2887 + ${GAP * 0.866}px)`;

/** Splits items into alternating rows: k, k-1, k, k-1 ... */
function buildRows<T>(items: T[], k: number): T[][] {
  const rows: T[][] = [];
  let i = 0;
  let r = 0;
  while (i < items.length) {
    const size = r % 2 === 0 ? k : Math.max(k - 1, 1);
    rows.push(items.slice(i, i + size));
    i += size;
    r++;
  }
  return rows;
}

/* ---------- Single hexagon logo tile ---------- */
function HexTile({ item, index }: { item: TechnologyItem; index: number }) {
  const reduceMotion = useReducedMotion();

  const tile = (
    <div
      className="group relative transition-transform duration-300 hover:scale-110"
      style={{
        width: "var(--hex-w)",
        height: "calc(var(--hex-w) * 1.1547)",
        filter: "drop-shadow(0 6px 12px rgba(80,60,140,0.14))",
      }}
      aria-label={item.name}
    >
      {/* Thin border layer */}
      <div
        className="absolute inset-0 bg-[#ECE8F6] group-hover:bg-[#8B45FF] transition-colors duration-300"
        style={{ clipPath: HEX_CLIP }}
      />
      {/* White face */}
      <div
        className="absolute inset-[1.5px] bg-white flex items-center justify-center"
        style={{ clipPath: HEX_CLIP }}
      >
        <div
          className={`w-[42%] h-[42%] flex items-center justify-center [&>svg]:w-full [&>svg]:h-full ${
            item.iconColor ?? "text-gray-800"
          }`}
        >
          {item.logoSrc ? (
            <Image
              src={item.logoSrc}
              alt={item.name}
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          ) : (
            item.icon
          )}
        </div>
      </div>

      {/* Tooltip */}
      <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2.5 py-1 text-[11px] font-poppins font-medium text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100">
        {item.name}
      </span>
    </div>
  );

  return (
    <motion.div
      // Transformed wrappers create stacking contexts, so the z-index
      // must be raised on this outer wrapper for the tooltip to sit on top.
      className="relative hover:z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.6) }}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
        transition={{
          duration: 4 + (index % 3),
          repeat: Infinity,
          ease: "easeInOut",
          delay: (index % 5) * 0.3,
        }}
      >
        {item.href ? (
          <Link href={item.href} className="block" aria-label={item.name}>
            {tile}
          </Link>
        ) : (
          tile
        )}
      </motion.div>
    </motion.div>
  );
}

/* ---------- A honeycomb cluster ---------- */
function HexCluster({
  items,
  startIndex = 0,
  perRow,
}: {
  items: TechnologyItem[];
  startIndex?: number;
  perRow: number;
}) {
  const rows = useMemo(() => buildRows(items, perRow), [items, perRow]);
  let counter = startIndex;

  return (
    <div className="flex flex-col items-center">
      {rows.map((row, rIdx) => (
        <div
          key={rIdx}
          className="flex justify-center"
          style={{ gap: GAP, marginTop: rIdx === 0 ? 0 : ROW_OVERLAP }}
        >
          {row.map((item) => {
            const idx = counter++;
            return <HexTile key={`${item.name}-${idx}`} item={item} index={idx} />;
          })}
        </div>
      ))}
    </div>
  );
}

/* ---------- Center hub ---------- */
function Hub({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className="relative flex items-center justify-center shrink-0"
      style={{
        width: "var(--hub-w)",
        height: "calc(var(--hub-w) * 1.1547)",
        filter: "drop-shadow(0 18px 30px rgba(103,14,247,0.35))",
      }}
    >
      {/* Gradient rim */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#8B45FF] via-[#670EF7] to-[#F59E0B]"
        style={{ clipPath: HEX_CLIP }}
      />
      {/* Dark face */}
      <div
        className="absolute inset-[2px] bg-[#0B0B14] flex flex-col items-center justify-center text-center text-white px-2"
        style={{ clipPath: HEX_CLIP }}
      >
        <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#8B45FF] to-[#670EF7] flex items-center justify-center mb-1.5 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5">
          {icon ?? <Layers />}
        </div>
        <div className="text-[11px] sm:text-sm lg:text-base font-bold font-inter leading-tight">
          {title}
        </div>
        <div className="text-[9px] sm:text-[11px] text-violet-200 font-poppins mt-0.5 leading-tight">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

/* ---------- Section ---------- */
export default function TechnologiesSection({
  id = "technologies",
  eyebrow = "TECHNOLOGY & TOOLING ECOSYSTEM",
  h2 = "Engineered With Industry-Standard Tooling",
  intro = "We integrate directly with your existing infrastructure, analytics and marketing stack. No forced migrations or proprietary lock-ins.",
  technologies = [],
  centerTitle = "Our Tech Stack",
  centerSubtitle,
  centerIcon,
  ctaTitle = "Don't see your stack?",
  ctaText = "We work with your existing tools, and can recommend or integrate alternatives that fit your setup.",
  ctaButtonText = "Talk to Our Engineers",
  ctaHref = "#final-cta",
}: TechnologiesSectionProps) {
  const count = technologies.length;
  const mid = Math.ceil(count / 2);
  const left = technologies.slice(0, mid);
  const right = technologies.slice(mid);

  // Desktop/tablet: hexes per row scale with how many items each side has
  const sideRow = mid <= 3 ? 2 : mid >= 9 ? 4 : 3;
  // Mobile: narrow clusters (2 / 1 / 2 / 1 ...) so left | hub | right fits
  const mobileRow = 2;
  const subtitle = centerSubtitle ?? `${count} technologies`;

  if (count === 0) return null;

  return (
        <section
      id={id}
      className="scroll-mt-24 py-24 sm:py-28 lg:py-32 bg-[#08080C] text-gray-900 relative border-t border-white/[0.08] overflow-hidden"
    >
      {/* Coordinate mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Purple glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 15%, rgba(139,69,255,0.45) 0%, rgba(103,14,247,0.15) 40%, transparent 75%),
            radial-gradient(circle at 85% 90%, rgba(103,14,247,0.35) 0%, transparent 60%)
          `,
        }}
      />
      <div className="w-full lg:max-w-[90%] mx-auto px-3 sm:px-6 lg:px-8">
        {/* Card */}
        <div className="relative rounded-3xl border border-gray-100 bg-white shadow-[0_20px_60px_rgba(80,60,140,0.10)] px-3 sm:px-10 py-10 sm:py-14">
          {/* Soft lavender corner glows (clipped to the card) */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 0% 100%, rgba(139,69,255,0.12) 0%, transparent 45%),
                  radial-gradient(circle at 100% 0%, rgba(139,69,255,0.10) 0%, transparent 40%)
                `,
              }}
            />
          </div>

          {/* Header */}
          <div className="relative z-10 max-w-3xl mx-auto text-center mb-10 sm:mb-12 px-2">
            <div className="text-xs font-poppins font-semibold uppercase tracking-wider text-[#670EF7] mb-3">
              {eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.18] mb-4">
              {h2}
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-poppins leading-relaxed">
              {intro}
            </p>
          </div>

          {/* Left cluster | hub | right cluster (same layout on every screen size) */}
          <div
            className="relative z-10 grid grid-cols-[1fr_auto_1fr] items-center gap-1.5 sm:gap-6
                       [--hex-w:44px] [--hub-w:92px]
                       sm:[--hex-w:72px] sm:[--hub-w:150px]
                       lg:[--hex-w:84px] lg:[--hub-w:190px]"
          >
            {/* Left */}
            <div className="justify-self-end">
              <div className="sm:hidden">
                <HexCluster items={left} startIndex={0} perRow={mobileRow} />
              </div>
              <div className="hidden sm:block">
                <HexCluster items={left} startIndex={0} perRow={sideRow} />
              </div>
            </div>

            <Hub title={centerTitle} subtitle={subtitle} icon={centerIcon} />

            {/* Right */}
            <div className="justify-self-start">
              <div className="sm:hidden">
                <HexCluster items={right} startIndex={mid} perRow={mobileRow} />
              </div>
              <div className="hidden sm:block">
                <HexCluster items={right} startIndex={mid} perRow={sideRow} />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative z-0 mt-12 sm:mt-14 rounded-2xl border border-violet-100 bg-violet-50/40 p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-violet-100 border border-violet-200 text-violet-700 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold font-inter text-[#08080C]">
                  {ctaTitle}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-poppins max-w-xl">
                  {ctaText}
                </p>
              </div>
            </div>

            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#670EF7] hover:bg-[#5a0bd9] text-white font-poppins font-semibold text-sm shadow-lg shadow-violet-600/25 transition-colors shrink-0"
            >
              <span>{ctaButtonText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}