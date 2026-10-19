"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Campaign showcase layouts (same data for every one: a list of static creatives + one CTA)
 *
 * - strip : one staggered row scrolling sideways, centred heading, CTA underneath.
 * - lanes : two rows scrolling in opposite directions on a soft panel, CTA beside the heading.
 * - wall  : copy + CTA on the left, three vertical columns on the right.
 *           Column 1 moves top -> bottom, column 2 bottom -> top, column 3 top -> bottom. (Default)
 */
export type CampaignShowcaseVariant = "strip" | "lanes" | "wall";

export interface CampaignItem {
  /** Path from /public (e.g. "/campaigns/real-estate.jpg") or a static import */
  src: string | StaticImageData;
  alt: string;
  /** Optional backdrop colour shown while the image loads */
  bg?: string;
}

export interface CampaignShowcaseCta {
  label: string;
  href: string;
}

export interface CampaignShowcaseSectionProps {
  variant?: CampaignShowcaseVariant; // optional, defaults to "wall"
  id?: string;
  eyebrow: string;
  h2: string;
  intro?: string;
  campaigns: CampaignItem[];
  cta?: CampaignShowcaseCta; // optional
  /** Seconds for one full loop of the base lane. Higher = slower. Default 60. */
  speed?: number;
  /**
   * Layout & Showcase direction:
   * - "right" (default): copy on the left, showcase creatives on the right.
   * - "left": showcase creatives on the left, copy on the right.
   * Also controls horizontal marquee animation direction.
   */
  direction?: "left" | "right";
}

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* Motion CSS (self-contained, no tailwind.config changes needed)     */
/* ------------------------------------------------------------------ */

const MOTION_CSS = `
@keyframes bx-x{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes bx-y-up{from{transform:translateY(0)}to{transform:translateY(-50%)}}
@keyframes bx-y-down{from{transform:translateY(-50%)}to{transform:translateY(0)}}
.bx-x{animation:bx-x var(--bx-d,60s) linear infinite;will-change:transform}
.bx-x-rev{animation-direction:reverse}
.bx-y-up{animation:bx-y-up var(--bx-d,60s) linear infinite;will-change:transform}
.bx-y-down{animation:bx-y-down var(--bx-d,60s) linear infinite;will-change:transform}
.bx-pause:hover .bx-x,.bx-pause:hover .bx-y-up,.bx-pause:hover .bx-y-down,
.bx-pause:focus-within .bx-x,.bx-pause:focus-within .bx-y-up,.bx-pause:focus-within .bx-y-down{animation-play-state:paused}
@media (prefers-reduced-motion:reduce){
  .bx-x,.bx-y-up,.bx-y-down{animation:none!important}
  .bx-dup{display:none!important}
  .bx-scroll{overflow-x:auto!important}
  .bx-wall{overflow-y:auto!important}
}
`;

const MASK_X =
  "linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)";
const MASK_Y =
  "linear-gradient(180deg,transparent,#000 9%,#000 91%,transparent)";

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Repeat the list until it has at least `min` items, so a loop is never shorter than the viewport. */
function ensureMin<T>(list: T[], min: number): T[] {
  if (list.length === 0) return list;
  const out = [...list];
  while (out.length < min) out.push(...list);
  return out;
}

function rotate<T>(list: T[], n: number): T[] {
  if (list.length === 0) return list;
  const k = n % list.length;
  return list.slice(k).concat(list.slice(0, k));
}

const durationVar = (seconds: number) =>
  ({ "--bx-d": `${seconds}s` }) as React.CSSProperties;

/* ------------------------------------------------------------------ */
/* Shared building blocks                                             */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative">
    {children}
  </div>
);

function SectionHeader({
  eyebrow,
  h2,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  h2: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div
      className={`max-w-5xl ${
        center ? "mx-auto flex flex-col items-center text-center" : ""
      } ${className}`}
    >
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-poppins font-semibold uppercase tracking-wider mb-4 bg-blue-50 border-blue-200 text-blue-600">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter tracking-tight leading-[1.15] mb-5 text-[#08080C]">
        {h2}
      </h2>
      {intro && (
        <p
          className={`text-base md:text-lg font-poppins leading-relaxed text-gray-700 ${
            center ? "max-w-2xl" : ""
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

function CtaButton({
  cta,
  className = "",
}: {
  cta?: CampaignShowcaseCta;
  className?: string;
}) {
  if (!cta || !cta.label || !cta.href) return null;
  return (
    <a
      href={cta.href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#08080C] px-7 py-3.5 text-sm sm:text-base font-poppins font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 ${className}`}
    >
      {cta.label}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function CampaignCard({
  item,
  hidden,
  sizes,
  className = "",
}: {
  item: CampaignItem;
  hidden?: boolean;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex-none aspect-[4/5] overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 ring-1 ring-black/5 shadow-[0_12px_28px_-12px_rgba(8,8,12,0.28)] ${className}`}
      style={item.bg ? { backgroundColor: item.bg } : undefined}
    >
      <Image
        src={item.src}
        alt={hidden ? "" : item.alt}
        fill
        sizes={sizes}
        draggable={false}
        className="object-cover select-none"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Horizontal marquee (used by strip + lanes)                         */
/* ------------------------------------------------------------------ */

function HorizontalMarquee({
  items,
  cardClass,
  sizes,
  duration,
  reverse = false,
  stagger = false,
}: {
  items: CampaignItem[];
  cardClass: string;
  sizes: string;
  duration: number;
  reverse?: boolean;
  stagger?: boolean;
}) {
  const list = ensureMin(items, 8);
  // Two identical groups; the track slides exactly -50% for a seamless loop.
  const groupClass = `flex gap-3 sm:gap-4 pr-3 sm:pr-4 ${
    stagger ? "[&>*:nth-child(even)]:translate-y-4 sm:[&>*:nth-child(even)]:translate-y-6" : ""
  }`;

  return (
    <div
      className="bx-scroll overflow-hidden"
      style={{ WebkitMaskImage: MASK_X, maskImage: MASK_X }}
    >
      <div
        className={`bx-x ${reverse ? "bx-x-rev" : ""} flex w-max ${
          stagger ? "pt-1 pb-8 sm:pb-10" : ""
        }`}
        style={durationVar(duration)}
      >
        <div className={groupClass}>
          {list.map((item, i) => (
            <CampaignCard key={i} item={item} sizes={sizes} className={cardClass} />
          ))}
        </div>
        <div className={`bx-dup ${groupClass}`} aria-hidden="true">
          {list.map((item, i) => (
            <CampaignCard
              key={i}
              item={item}
              hidden
              sizes={sizes}
              className={cardClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 1. strip                                                           */
/* ------------------------------------------------------------------ */

function StripShowcase(p: CampaignShowcaseSectionProps) {
  const speed = p.speed ?? 60;
  const cardClass = "w-[150px] sm:w-[200px] lg:w-[250px]";
  const reverse = p.direction === "right";

  return (
    <section
      id={p.id}
      className="scroll-mt-24 py-24 sm:py-28 bg-white text-[#08080C] border-t border-gray-200 overflow-hidden"
    >
      <Container>
        <Reveal>
          <SectionHeader {...p} align="center" />
        </Reveal>
      </Container>

      <div
        className="bx-pause mt-12 sm:mt-14"
        role="region"
        aria-label="Campaign creative samples"
      >
        <HorizontalMarquee
          items={p.campaigns}
          cardClass={cardClass}
          sizes="(min-width:1024px) 250px, (min-width:640px) 200px, 150px"
          duration={speed}
          reverse={reverse}
          stagger
        />
      </div>

      {p.cta && (
        <Container>
          <Reveal className="flex justify-center mt-12">
            <CtaButton cta={p.cta} className="w-full sm:w-auto" />
          </Reveal>
        </Container>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. lanes                                                           */
/* ------------------------------------------------------------------ */

function LanesShowcase(p: CampaignShowcaseSectionProps) {
  const speed = p.speed ?? 60;
  const cardClass = "w-[120px] sm:w-[160px] lg:w-[200px]";
  const sizes = "(min-width:1024px) 200px, (min-width:640px) 160px, 120px";
  const isImageLeft = p.direction === "left";
  const isReverseBase = p.direction === "right";

  return (
    <section
      id={p.id}
      className="scroll-mt-24 py-24 sm:py-28 bg-[#FAFAFC] text-[#08080C] border-t border-gray-200 overflow-hidden"
    >
      <Container>
        <Reveal
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-8 ${
            isImageLeft ? "md:flex-row-reverse" : ""
          }`}
        >
          <SectionHeader
            eyebrow={p.eyebrow}
            h2={p.h2}
            intro={p.intro}
            className="md:max-w-3xl"
          />
          {p.cta && <CtaButton cta={p.cta} className="w-full md:w-auto flex-shrink-0" />}
        </Reveal>
      </Container>

      <div
        className="bx-pause mt-12 sm:mt-14 space-y-3 sm:space-y-4"
        role="region"
        aria-label="Campaign creative samples"
      >
        <HorizontalMarquee
          items={p.campaigns}
          cardClass={cardClass}
          sizes={sizes}
          duration={speed}
          reverse={isReverseBase}
        />
        <HorizontalMarquee
          items={rotate(p.campaigns, Math.ceil(p.campaigns.length / 2))}
          cardClass={cardClass}
          sizes={sizes}
          duration={speed * 1.3}
          reverse={!isReverseBase}
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. wall (3 vertical columns: down / up / down)                     */
/* ------------------------------------------------------------------ */

function WallColumn({
  items,
  direction,
  duration,
  offset,
}: {
  items: CampaignItem[];
  direction: "down" | "up";
  duration: number;
  /** Seconds to pre-roll the animation so the columns don't start aligned */
  offset: number;
}) {
  const list = ensureMin(items, 4);
  const sizes = "(min-width:1024px) 220px, 33vw";
  const groupClass = "flex flex-col gap-3 sm:gap-4 pb-3 sm:pb-4";

  return (
    <div className="overflow-hidden h-full">
      <div
        className={`${direction === "down" ? "bx-y-down" : "bx-y-up"} flex flex-col`}
        style={{ ...durationVar(duration), animationDelay: `-${offset}s` }}
      >
        <div className={groupClass}>
          {list.map((item, i) => (
            <CampaignCard key={i} item={item} sizes={sizes} className="w-full" />
          ))}
        </div>
        <div className={`bx-dup ${groupClass}`} aria-hidden="true">
          {list.map((item, i) => (
            <CampaignCard
              key={i}
              item={item}
              hidden
              sizes={sizes}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function WallShowcase(p: CampaignShowcaseSectionProps) {
  const speed = p.speed ?? 60;
  const isImageLeft = p.direction === "left";

  // Deal the creatives round-robin into 3 columns.
  const columns: CampaignItem[][] = [[], [], []];
  p.campaigns.forEach((item, i) => columns[i % 3].push(item));

  // top->bottom, bottom->top, top->bottom
  const directions: Array<"down" | "up"> = ["down", "up", "down"];
  const durations = [speed, speed * 1.25, speed * 1.1];
  const offsets = [0, speed * 0.3, speed * 0.55];

  return (
    <section
      id={p.id}
      className="scroll-mt-24 py-24 sm:py-28 bg-white text-[#08080C] border-t border-gray-200 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className={`lg:col-span-5 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
            <SectionHeader eyebrow={p.eyebrow} h2={p.h2} intro={p.intro} />
            {p.cta && <CtaButton cta={p.cta} className="mt-8 w-full sm:w-auto" />}
          </Reveal>

          <div
            className={`bx-pause bx-wall lg:col-span-7 grid grid-cols-3 gap-3 sm:gap-4 h-[440px] sm:h-[560px] lg:h-[640px] overflow-hidden ${
              isImageLeft ? "lg:order-1" : "lg:order-2"
            }`}
            style={{ WebkitMaskImage: MASK_Y, maskImage: MASK_Y }}
            role="region"
            aria-label="Campaign creative samples"
          >
            {columns.map((items, c) => (
              <WallColumn
                key={c}
                items={items}
                direction={directions[c]}
                duration={durations[c]}
                offset={offsets[c]}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Entry point                                                        */
/* ------------------------------------------------------------------ */

export default function CampaignShowcaseSection({
  variant = "wall",
  id = "campaign-showcase",
  direction = "right",
  ...rest
}: CampaignShowcaseSectionProps) {
  const props = { ...rest, id, direction };

  return (
    <>
      <style>{MOTION_CSS}</style>
      {variant === "strip" ? (
        <StripShowcase {...props} />
      ) : variant === "lanes" ? (
        <LanesShowcase {...props} />
      ) : (
        <WallShowcase {...props} />
      )}
    </>
  );
}