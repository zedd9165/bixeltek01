'use client'
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";
import { usePillarModal } from "./PillarModalProvider";

export interface PillarFinalCTAProps {
  /** Your pillar data links to "#build-project", so pass id="build-project" on that page */
  id?: string;
  eyebrow: string;
  h2: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  onPrimaryClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  footnote?: string;
}

export default function PillarFinalCTA({
  id = "final-cta",
  eyebrow,
  h2,
  description,
  primaryButtonText,
  primaryButtonHref,
  onPrimaryClick,
  secondaryButtonText,
  secondaryButtonHref,
  footnote = "No obligation · Straightforward conversation · Built around your business",
}: PillarFinalCTAProps) {
  const { openContactModal } = usePillarModal();
  return (
    <section
      id={id}
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.08] bg-[#08080C] py-24 text-white sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(139,69,255,0.4) 0%, rgba(103,14,247,0.1) 40%, transparent 70%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8B45FF] to-transparent shadow-[0_0_20px_rgba(103,14,247,0.7)]" />

      <div className="relative mx-auto w-full px-4 text-center sm:px-6 lg:max-w-6xl lg:px-8">
        <Eyebrow dark>{eyebrow}</Eyebrow>
        <h2 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight font-inter md:text-5xl lg:text-6xl">
          {h2}
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-neutral-300 font-poppins md:text-lg">
          {description}
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          {onPrimaryClick || primaryButtonHref === "#growth-project" || primaryButtonHref === "#build-project" || primaryButtonHref === "#automation-project" ? (
            <button
              type="button"
              onClick={onPrimaryClick || openContactModal}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white py-3.5 pl-7 pr-3 text-sm font-bold text-[#08080C] transition-shadow hover:shadow-[0_4px_35px_rgba(103,14,247,0.55)] font-poppins cursor-pointer"
            >
              {primaryButtonText}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#08080C] text-white transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          ) : (
            <Link
              href={primaryButtonHref}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white py-3.5 pl-7 pr-3 text-sm font-bold text-[#08080C] transition-shadow hover:shadow-[0_4px_35px_rgba(103,14,247,0.55)] font-poppins"
            >
              {primaryButtonText}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#08080C] text-white transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          )}
        </div>

        <p className="mt-12 text-sm text-white/55 font-poppins">{footnote}</p>
      </div>
    </section>
  );
}