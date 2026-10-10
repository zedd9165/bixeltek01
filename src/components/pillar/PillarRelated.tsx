import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "./Eyebrow";

export interface PillarRelatedProps {
  id?: string;
  eyebrow?: string;
  h2?: string;
  items: { title: string; description: string; href: string; ctaText: string }[];
}

/** Full-width rows instead of cards. Each row turns black on hover. */
export default function PillarRelated({
  id = "related",
  eyebrow = "WHAT COMES NEXT",
  h2 = "Where This Connects to the Rest of Your Growth",
  items,
}: PillarRelatedProps) {
  return (
    <section id={id} className="scroll-mt-32 bg-white py-24 md:py-32">
      <div className="mx-auto w-full px-4 sm:px-6 lg:max-w-[90%] lg:px-8">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-[#08080C] font-inter md:text-4xl lg:text-5xl">
            {h2}
          </h2>
        </div>

        <div className="mt-14 border-t border-gray-200">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="group grid items-center gap-4 border-b border-gray-200 px-0 py-8 transition-all duration-300 hover:rounded-2xl hover:border-transparent hover:bg-[#08080C] hover:px-8 md:grid-cols-12 md:gap-8"
            >
              <h3 className="text-2xl font-bold tracking-tight text-[#08080C] transition-colors group-hover:text-white font-inter md:col-span-4">
                {it.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-600 transition-colors group-hover:text-neutral-300 font-poppins md:col-span-5">
                {it.description}
              </p>
              <div className="flex items-center gap-3 md:col-span-3 md:justify-end">
                <span className="text-sm font-semibold text-[#08080C] transition-colors group-hover:text-white font-poppins">
                  {it.ctaText}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-[#08080C] transition-all group-hover:border-[#8C45FF] group-hover:bg-[#8C45FF] group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}