"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Info } from "lucide-react";
import { usePillarModal } from "./PillarModalProvider";

export interface PillarHeroProps {
  /** "BUILD · WEBSITES · ECOMMERCE" -> split on "·" into scope tags */
  eyebrow: string;
  h1: string;
  p1: string;
  p2?: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  onPrimaryClick?: () => void;
  secondaryLinkText?: string;
  secondaryLinkHref?: string;
  microcopy?: string;
  /** Path in /public, e.g. "/images/pillars/build-hero.jpg". Falls back to a purple gradient. */
  backgroundImage?: any;
  /** Glass strip pinned to the bottom of the hero (build it from your capabilities) */
  layers?: { label: string; title: string }[];
  layersHref?: string;
}

export default function PillarHero({
  eyebrow,
  h1,
  p1,
  p2,
  primaryButtonText,
  primaryButtonHref,
  onPrimaryClick,
  secondaryLinkText,
  secondaryLinkHref,
  microcopy,
  backgroundImage,
  layers = [],
  layersHref = "#capabilities",
}: PillarHeroProps) {
  const reduce = useReducedMotion();
  const { openContactModal } = usePillarModal();
  const tags = eyebrow.split("·").map((s) => s.trim()).filter(Boolean);

  const item = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
        };

  const isModalTarget =
    Boolean(onPrimaryClick) ||
    primaryButtonHref === "#growth-project" ||
    primaryButtonHref === "#build-project" ||
    primaryButtonHref === "#automation-project";

  const handlePrimaryClick = onPrimaryClick || (isModalTarget ? openContactModal : undefined);

  return (
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#08080C] text-white">
      {/* Background image + overlays */}
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
      ) : (
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#2a0a6b] via-[#08080C] to-[#08080C]" />
      )}
      {/* Centered copy */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center pb-16 pt-36 text-center px-6 lg:pt-44">
        <motion.div {...item(0)} className="flex flex-wrap items-center justify-center gap-2">
          {tags.map((t, i) => (
            <span
              key={t}
              className={`rounded-full px-3.5 py-1 text-[11px] font-semibold font-poppins backdrop-blur ${
                i === 0
                  ? "bg-[#8C45FF] text-white"
                  : "border border-white/20 bg-white/10 text-neutral-100"
              }`}
            >
              {t}
            </span>
          ))}
        </motion.div>

       <motion.h1
  {...item(1)}
  className="mt-8 text-3xl font-extrabold leading-[1.2] tracking-tight font-inter md:text-4xl md:leading-[1.15] lg:text-[4rem] lg:leading-[1.12]"
>
  {h1}
</motion.h1>

        <motion.p
          {...item(2)}
          className="mt-7 max-w-5xl text-sm md:text-lg leading-relaxed text-neutral-200 font-poppins"
        >
          {p1}
        </motion.p>
        {p2 && (
          <motion.p
            {...item(3)}
            className="mt-4 max-w-5xl text-sm md:text-base leading-relaxed text-neutral-400 font-poppins"
          >
            {p2}
          </motion.p>
        )}

        <motion.div
          {...item(4)}
          className="mt-10 flex flex-col items-center gap-5 md:flex-row"
        >
          {isModalTarget ? (
            <button
              type="button"
              onClick={handlePrimaryClick}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white py-3.5 pl-7 pr-3 text-sm font-bold text-[#08080C] transition-shadow hover:shadow-[0_4px_35px_rgba(139,69,255,0.6)] font-poppins cursor-pointer"
            >
              {primaryButtonText}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#08080C] text-white transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          ) : (
            <Link
              href={primaryButtonHref}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white py-3.5 pl-7 pr-3 text-sm font-bold text-[#08080C] transition-shadow hover:shadow-[0_4px_35px_rgba(139,69,255,0.6)] font-poppins"
            >
              {primaryButtonText}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#08080C] text-white transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          )}
        </motion.div>
      </div>

    </section>
  );
}