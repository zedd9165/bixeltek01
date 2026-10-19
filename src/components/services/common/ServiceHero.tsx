"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import defaultHeroImg from "@/assets/10883229_4575268.jpg";

export type ServiceHeroVariant =
  | "split"
  | "immersive"
  | "bento"
  | "editorial"
  | "aurora"
  | "vivid"
  | "console";

export interface ServiceHeroProps {
  variant?: ServiceHeroVariant;
  eyebrow: string;
  h1: string;
  p1: string;
  p2: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryLinkText?: string;
  secondaryLinkHref?: string;
  microcopy?: string;
  trustStrip?: string[];
  visualImage?: StaticImageData | string;
  visualSlot?: React.ReactNode;
  visualTagSubtitle?: string;
  visualTagTitle?: string;
  visualBadgeText?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* Shared building blocks                                             */
/* ------------------------------------------------------------------ */

function Eyebrow({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-[11px] md:text-sm font-poppins font-medium tracking-wide uppercase">
      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse motion-reduce:animate-none" />
      <span>{text}</span>
    </div>
  );
}

function Headline({ text, className = "" }: { text: string; className?: string }) {
  return (
    <h1
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter tracking-tight leading-[1.12] text-white ${className}`}
    >
      {text}
    </h1>
  );
}

function BodyCopy({
  p1,
  p2,
  center = false,
}: {
  p1: string;
  p2: string;
  center?: boolean;
}) {
  return (
    <div
      className={`space-y-4 text-base md:text-lg text-gray-300 font-poppins leading-relaxed ${
        center ? "max-w-5xl mx-auto" : ""
      }`}
    >
      <p>{p1}</p>
      {p2 && <p className="text-gray-400">{p2}</p>}
    </div>
  );
}

function Actions({
  primaryButtonText,
  primaryButtonHref,
  secondaryLinkText,
  secondaryLinkHref,
  center = false,
}: Pick<
  ServiceHeroProps,
  | "primaryButtonText"
  | "primaryButtonHref"
  | "secondaryLinkText"
  | "secondaryLinkHref"
> & { center?: boolean }) {
  return (
    <div
      className={`pt-2 flex flex-col md:flex-row items-stretch md:items-center gap-4 ${
        center ? "md:justify-center" : ""
      }`}
    >
      <Link
        href={primaryButtonHref}
        className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-poppins font-medium text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition duration-300"
      >
        <span>{primaryButtonText}</span>
        <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
      {secondaryLinkText && secondaryLinkHref && (
        <Link
          href={secondaryLinkHref}
          className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-gray-700 hover:border-gray-500 bg-gray-900/40 hover:bg-gray-800/60 text-gray-200 font-poppins font-medium text-base transition duration-300"
        >
          <span>{secondaryLinkText}</span>
        </Link>
      )}
    </div>
  );
}

function Microcopy({ text, center = false }: { text?: string; center?: boolean }) {
  if (!text) return null;
  return (
    <p
      className={`text-xs md:text-sm text-gray-400 font-poppins ${
        center ? "max-w-2xl mx-auto" : ""
      }`}
    >
      {text}
    </p>
  );
}

function TrustGrid({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="pt-6 border-t border-gray-800/80">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 text-xs md:text-sm text-gray-300 font-poppins"
          >
            <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrustPills({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur text-xs md:text-sm text-gray-200 font-poppins"
        >
          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

/** Matches the capsule pill style in screenshot */
function VisualBadge({
  subtitle,
  title,
  badgeText,
  className = "",
}: {
  subtitle?: string;
  title?: string;
  badgeText?: string;
  className?: string;
}) {
  if (!subtitle && !title && !badgeText) return null;

  return (
    <div
      className={`inline-flex items-center justify-between gap-4 sm:gap-6 px-5 py-3 rounded-full bg-[#181a20]/80 border border-white/10 backdrop-blur-md shadow-lg ${className}`}
    >
      <div className="text-left">
        {subtitle && (
          <div className="text-[11px] sm:text-xs text-gray-400 font-poppins">
            {subtitle}
          </div>
        )}
        {title && (
          <div className="text-xs sm:text-sm font-semibold text-white font-inter tracking-tight">
            {title}
          </div>
        )}
      </div>

      {badgeText && (
        <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-poppins font-medium whitespace-nowrap">
          {badgeText}
        </span>
      )}
    </div>
  );
}

function HeroVisual({
  p,
  imgClassName = "object-cover object-top",
}: {
  p: ResolvedProps;
  imgClassName?: string;
}) {
  if (p.visualSlot) {
    return <div className="absolute inset-0">{p.visualSlot}</div>;
  }
  return (
    <Image src={p.imgSrc} alt={p.h1} fill className={imgClassName} priority />
  );
}

/* ------------------------------------------------------------------ */
/* Variants                                                           */
/* ------------------------------------------------------------------ */

function SplitHero(p: ResolvedProps) {
  const hasBadge = Boolean(p.visualTagSubtitle || p.visualTagTitle || p.visualBadgeText);

  return (
    <section className="relative w-full bg-[#08080C] text-white pt-12 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute -top-24 left-1/4 w-[400px] h-[400px] rounded-full bg-[#670EF7]/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7 space-y-6"
          >
            <Eyebrow text={p.eyebrow} />
            <Headline text={p.h1} />
            <BodyCopy p1={p.p1} p2={p.p2} />
            <Actions {...p} />
            <Microcopy text={p.microcopy} />
            <TrustGrid items={p.trustStrip} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-gray-700/50 via-gray-800/20 to-transparent border border-gray-800/80 shadow-2xl overflow-hidden backdrop-blur-sm">
              <div className="relative rounded-xl overflow-hidden bg-black aspect-[4/3] sm:aspect-[16/11]">
                <HeroVisual p={p} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              {hasBadge && (
                <div className="mt-3 flex justify-center">
                  <VisualBadge
                    subtitle={p.visualTagSubtitle}
                    title={p.visualTagTitle}
                    badgeText={p.visualBadgeText}
                    className="w-full"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ImmersiveHero(p: ResolvedProps) {
  const hasBadge = Boolean(p.visualTagSubtitle || p.visualTagTitle || p.visualBadgeText);

  return (
    <section className="relative w-full bg-[#08080C] text-white pt-16 pb-20 md:pt-32 md:pb-32 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src={p.imgSrc}
          alt={p.h1}
          fill
          className="object-cover object-center opacity-50"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,8,12,0.35)_0%,rgba(8,8,12,0.58)_70%,#08080C_100%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08080C] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#670EF7]/25 via-transparent to-blue-600/20 mix-blend-screen pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-6xl mx-auto text-center space-y-6"
        >
          <Eyebrow text={p.eyebrow} />
          <Headline text={p.h1} className="lg:text-7xl" />
          <BodyCopy p1={p.p1} p2={p.p2} center />
          <Actions {...p} center />
        </motion.div>

        {hasBadge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mt-10 flex justify-center"
          >
            <VisualBadge
              subtitle={p.visualTagSubtitle}
              title={p.visualTagTitle}
              badgeText={p.visualBadgeText}
            />
          </motion.div>
        )}

        {p.trustStrip && p.trustStrip.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mt-6 max-w-4xl mx-auto"
          >
            <TrustPills items={p.trustStrip} />
          </motion.div>
        )}
      </div>
    </section>
  );
}

function BentoHero(p: ResolvedProps) {
  const cell =
    "relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm overflow-hidden";
  const hasBadge = Boolean(p.visualTagSubtitle || p.visualTagTitle || p.visualBadgeText);

  return (
    <section className="relative w-full bg-[#08080C] text-white pt-12 pb-20 md:pt-28 md:pb-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,rgba(103,14,247,0.28),transparent),radial-gradient(ellipse_50%_50%_at_85%_10%,rgba(37,99,235,0.2),transparent)] pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className={`${cell} lg:col-span-7 ${hasBadge ? "lg:row-span-2" : ""} p-6 sm:p-8 md:p-12`}
          >
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#670EF7]/25 blur-[100px] pointer-events-none" />
            <div className="relative space-y-6">
              <Eyebrow text={p.eyebrow} />
              <Headline text={p.h1} />
              <BodyCopy p1={p.p1} p2={p.p2} />
              <Actions {...p} />
              <Microcopy text={p.microcopy} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className={`${cell} lg:col-span-5 min-h-[260px] aspect-[4/3] lg:aspect-auto`}
          >
            <HeroVisual p={p} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {hasBadge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className={`${cell} lg:col-span-5 p-4 flex items-center justify-center`}
            >
              <VisualBadge
                subtitle={p.visualTagSubtitle}
                title={p.visualTagTitle}
                badgeText={p.visualBadgeText}
                className="w-full !border-none !bg-transparent !shadow-none"
              />
            </motion.div>
          )}

          {p.trustStrip && p.trustStrip.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
              className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4"
            >
              {p.trustStrip.map((item, idx) => (
                <div
                  key={idx}
                  className={`${cell} px-5 py-4 flex items-center gap-3 text-xs md:text-sm text-gray-200 font-poppins`}
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function EditorialHero(p: ResolvedProps) {
  const hasBadge = Boolean(p.visualTagSubtitle || p.visualTagTitle || p.visualBadgeText);

  return (
    <section className="relative w-full bg-[#08080C] text-white pt-12 pb-20 md:pt-28 md:pb-28 overflow-hidden">
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#670EF7]/15 blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center justify-between gap-4 pb-4 border-b border-white/20"
        >
          <Eyebrow text={p.eyebrow} />
          {p.visualTagSubtitle && (
            <span className="hidden sm:block text-xs font-poppins tracking-[0.2em] uppercase text-gray-500">
              {p.visualTagSubtitle}
            </span>
          )}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="py-8 md:py-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold font-inter tracking-tighter leading-[1.02] text-white max-w-6xl"
        >
          {p.h1}
        </motion.h1>

        <div className="border-t border-white/20 pt-8 md:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="lg:col-span-5 space-y-6"
          >
            <BodyCopy p1={p.p1} p2={p.p2} />
            <Actions {...p} />
            <Microcopy text={p.microcopy} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="lg:col-span-7 lg:-mt-24"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl">
              <HeroVisual p={p} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              {hasBadge && (
                <div className="absolute left-4 bottom-4 right-4">
                  <VisualBadge
                    subtitle={p.visualTagSubtitle}
                    title={p.visualTagTitle}
                    badgeText={p.visualBadgeText}
                    className="w-full"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {p.trustStrip && p.trustStrip.length > 0 && (
          <motion.ol
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-white/20"
          >
            {p.trustStrip.slice(0, 6).map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 py-5 pr-6 border-b border-white/10 md:border-b-0 md:[&:not(:nth-child(3n+1))]:pl-6 md:[&:not(:nth-child(3n+1))]:border-l md:border-white/10"
              >
                <span className="font-inter text-sm font-bold text-blue-400 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-gray-300 font-poppins leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </motion.ol>
        )}
      </div>
    </section>
  );
}

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")";

function FloatChip({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      animate={reduce ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`hidden lg:flex absolute z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#130b28]/80 backdrop-blur-xl border border-[#670EF7]/40 shadow-[0_10px_40px_-10px_rgba(103,14,247,0.6)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

function AuroraHero(p: ResolvedProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasBadge = Boolean(p.visualTagSubtitle || p.visualTagTitle || p.visualBadgeText);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section className="relative w-full bg-[#08080C] text-white pt-10 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#670EF7]/20 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full bg-blue-600/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-px overflow-hidden shadow-[0_0_90px_-25px_rgba(103,14,247,0.5)]">
          <div className="absolute inset-[-60%] animate-[spin_10s_linear_infinite] motion-reduce:animate-none bg-[conic-gradient(from_0deg,transparent_0deg,#670EF7_70deg,transparent_140deg,#3b82f6_240deg,transparent_320deg)] opacity-80" />

          <div
            ref={cardRef}
            onMouseMove={onMove}
            className="group/aurora relative rounded-[calc(1.5rem-1px)] bg-gradient-to-b from-[#180d33] via-[#0d0722] to-[#08080C] p-6 sm:p-10 lg:p-14 overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#670EF7]/35 blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-blue-500/20 blur-[90px] pointer-events-none" />
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover/aurora:opacity-100 transition-opacity duration-500 [background:radial-gradient(520px_circle_at_var(--mx,50%)_var(--my,30%),rgba(168,85,247,0.16),transparent_60%)]" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
              style={{ backgroundImage: GRAIN }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
                className="lg:col-span-7 space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#670EF7]/20 border border-[#670EF7]/40 text-[#c8a1ff] text-[11px] md:text-sm font-poppins font-medium tracking-wide uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse motion-reduce:animate-none" />
                  <span>{p.eyebrow}</span>
                </div>

                <Headline
                  text={p.h1}
                  className="bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-200/80"
                />
                <BodyCopy p1={p.p1} p2={p.p2} />
                <Actions {...p} />
                <Microcopy text={p.microcopy} />
                <TrustGrid items={p.trustStrip} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease }}
                className="lg:col-span-5 relative"
              >
                {p.visualBadgeText && (
                  <FloatChip className="-left-8 top-10">
                    <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-ping motion-reduce:animate-none" />
                    <span className="text-xs font-poppins text-purple-100">
                      {p.visualBadgeText}
                    </span>
                  </FloatChip>
                )}
                {(p.visualTagSubtitle || p.visualTagTitle) && (
                  <FloatChip className="-right-6 bottom-16" delay={1.2}>
                    <div>
                      {p.visualTagSubtitle && (
                        <div className="text-[10px] uppercase tracking-wider text-purple-300/80 font-poppins">
                          {p.visualTagSubtitle}
                        </div>
                      )}
                      {p.visualTagTitle && (
                        <div className="text-xs font-semibold font-inter text-white">
                          {p.visualTagTitle}
                        </div>
                      )}
                    </div>
                  </FloatChip>
                )}

                <div className="relative rounded-2xl p-2 bg-gradient-to-b from-[#670EF7]/40 via-white/5 to-transparent border border-white/15 shadow-2xl backdrop-blur-md">
                  <div className="relative rounded-xl overflow-hidden bg-black aspect-[4/3] sm:aspect-[16/11]">
                    <HeroVisual p={p} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0722]/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {hasBadge && (
                    <div className="lg:hidden mt-3 flex justify-center">
                      <VisualBadge
                        subtitle={p.visualTagSubtitle}
                        title={p.visualTagTitle}
                        badgeText={p.visualBadgeText}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VividHero(p: ResolvedProps) {
  const hasBadge = Boolean(p.visualTagSubtitle || p.visualTagTitle || p.visualBadgeText);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#1b033d] via-[#100325] to-[#08080C] text-white pt-14 pb-24 md:pt-32 md:pb-32 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full bg-[#670EF7]/35 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[#8b2ff5]/20 blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-[11px] md:text-sm font-poppins font-medium tracking-wide uppercase backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-purple-300 animate-pulse motion-reduce:animate-none" />
              <span>{p.eyebrow}</span>
            </div>

            <Headline
              text={p.h1}
              className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300"
            />
            <BodyCopy p1={p.p1} p2={p.p2} />
            <Actions {...p} />
            <Microcopy text={p.microcopy} />
            <TrustGrid items={p.trustStrip} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-[#8b2ff5]/30 rounded-3xl blur-2xl -z-10" />

            <div className="relative w-full mx-auto p-2.5 rounded-3xl bg-gradient-to-b from-white/20 via-[#670EF7]/30 to-white/5 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-black">
                <HeroVisual p={p} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {hasBadge && (
                  <div className="absolute bottom-4 inset-x-4">
                    <VisualBadge
                      subtitle={p.visualTagSubtitle}
                      title={p.visualTagTitle}
                      badgeText={p.visualBadgeText}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ConsoleHero(p: ResolvedProps) {
  const items = p.trustStrip ?? [];
  const line = (i: number) => ({
    initial: { opacity: 0, x: -8 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, delay: 0.5 + i * 0.28, ease },
  });

  return (
    <section className="relative w-full bg-[#08080C] text-white pt-12 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_70%_40%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute top-1/4 right-0 w-[520px] h-[520px] rounded-full bg-blue-600/15 blur-[130px] pointer-events-none" />
      <div className="absolute -top-24 left-1/4 w-[400px] h-[400px] rounded-full bg-[#670EF7]/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-6 space-y-6"
          >
            <Eyebrow text={p.eyebrow} />
            <Headline text={p.h1} />
            <BodyCopy p1={p.p1} p2={p.p2} />
            <Actions {...p} />
            <Microcopy text={p.microcopy} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl border border-white/10 bg-[#0b0b12]/95 shadow-[0_30px_80px_-30px_rgba(37,99,235,0.45)] overflow-hidden font-mono">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-400/70" />
                {p.visualTagSubtitle && (
                  <span className="ml-3 text-[11px] sm:text-xs text-gray-500 truncate">
                    bixeltek — {p.visualTagSubtitle}
                  </span>
                )}
              </div>

              <div className="p-5 sm:p-7 space-y-3 text-xs sm:text-sm leading-relaxed min-h-[300px]">
                {p.visualTagTitle && (
                  <motion.div {...line(0)} className="break-words">
                    <span className="text-purple-400">$</span>{" "}
                    <span className="text-gray-300">bixeltek deliver</span>{" "}
                    <span className="text-blue-300">&quot;{p.visualTagTitle}&quot;</span>
                  </motion.div>
                )}

                {items.map((item, i) => (
                  <motion.div
                    key={i}
                    {...line(i + 1)}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-emerald-400 flex-shrink-0">✔</span>
                    <span>{item}</span>
                  </motion.div>
                ))}

                {p.visualBadgeText && (
                  <motion.div
                    {...line(items.length + 1)}
                    className="pt-3 flex items-center gap-2 text-purple-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse motion-reduce:animate-none" />
                    <span>{p.visualBadgeText}</span>
                    <span className="inline-block w-2 h-4 bg-purple-300/80 animate-pulse motion-reduce:animate-none" />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Entry point                                                        */
/* ------------------------------------------------------------------ */

type ResolvedProps = Omit<
  ServiceHeroProps,
  "variant" | "visualImage" | "visualTagSubtitle" | "visualTagTitle" | "visualBadgeText"
> & {
  imgSrc: StaticImageData | string;
  visualTagSubtitle?: string;
  visualTagTitle?: string;
  visualBadgeText?: string;
};

export default function ServiceHero({
  variant = "split",
  visualImage,
  visualTagSubtitle,
  visualTagTitle,
  visualBadgeText,
  ...rest
}: ServiceHeroProps) {
  const resolved: ResolvedProps = {
    ...rest,
    imgSrc: visualImage || defaultHeroImg,
    visualTagSubtitle,
    visualTagTitle,
    visualBadgeText,
  };

  switch (variant) {
    case "immersive":
      return <ImmersiveHero {...resolved} />;
    case "bento":
      return <BentoHero {...resolved} />;
    case "editorial":
      return <EditorialHero {...resolved} />;
    case "aurora":
      return <AuroraHero {...resolved} />;
    case "vivid":
      return <VividHero {...resolved} />;
    case "console":
      return <ConsoleHero {...resolved} />;
    case "split":
    default:
      return <SplitHero {...resolved} />;
  }
}