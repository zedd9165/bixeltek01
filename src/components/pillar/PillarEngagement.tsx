'use client'
import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Eyebrow from "./Eyebrow";
import { usePillarModal } from "./PillarModalProvider";

export interface PillarEngagementModel {
  title: string;
  description: string;
  bestFor: string;
  includes: string[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export interface PillarEngagementProps {
  id?: string;
  eyebrow?: string;
  h2?: string;
  intro?: string;
  models: PillarEngagementModel[];
  onModelCtaClick?: (model: PillarEngagementModel) => void;
}

export default function PillarEngagement({
  id = "engagement",
  eyebrow = "WAYS TO WORK TOGETHER",
  h2 = "Start Small or Go All In. Pick the Shape That Fits",
  intro,
  models,
  onModelCtaClick,
}: PillarEngagementProps) {
  const { openContactModal } = usePillarModal();
  return (
    <section id={id} className="scroll-mt-32 border-t border-gray-200 bg-[#F6F7FA] py-24 md:py-32">
      <div className="mx-auto w-full px-4 sm:px-6 lg:max-w-[90%] lg:px-8">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-[#08080C] font-inter md:text-4xl lg:text-5xl">
            {h2}
          </h2>
          {intro && (
            <p className="mt-5 text-base leading-relaxed text-gray-600 font-poppins md:text-lg">
              {intro}
            </p>
          )}
        </div>

        {/* Grid with items-stretch ensuring uniform height */}
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {models.map((m, i) => {
            const last = i === models.length - 1;
            return (
              <div key={m.title} className="flex h-full flex-col">
                <div
                  className={`flex h-full flex-col justify-between rounded-[28px] border p-8 transition-shadow duration-300 hover:shadow-lg ${
                    last
                      ? "border-[#08080C] bg-[#08080C] text-white"
                      : "border-gray-200 bg-white text-[#08080C]"
                  }`}
                >
                  {/* Top: Title, Description, and Best-For badge */}
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight font-inter">{m.title}</h3>
                    <p
                      className={`mt-3 text-[15px] leading-relaxed font-poppins ${
                        last ? "text-neutral-300" : "text-gray-600"
                      }`}
                    >
                      {m.description}
                    </p>

                    <div
                      className={`mt-6 rounded-xl px-4 py-3 text-sm font-poppins ${
                        last ? "bg-white/10 text-violet-100" : "bg-violet-50 text-violet-900"
                      }`}
                    >
                      <span className="font-bold">Best for: </span>
                      {m.bestFor}
                    </div>

                    {/* Features checklist (flex-1 pushes the bottom CTA down equally) */}
                    <ul className="mt-6 space-y-3">
                      {m.includes.map((it) => (
                        <li key={it} className="flex items-start gap-3 text-sm font-poppins">
                          <Check
                            className={`mt-0.5 h-4 w-4 shrink-0 ${
                              last ? "text-violet-300" : "text-[#670EF7]"
                            }`}
                          />
                          <span className={last ? "text-neutral-200" : "text-gray-700"}>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}