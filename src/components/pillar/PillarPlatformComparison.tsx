import React from "react";
import Eyebrow from "./Eyebrow";

export interface PlatformComparisonRow {
  need: string;
  platform: string;
  reason: string;
}

export interface PillarPlatformComparisonProps {
  id?: string;
  eyebrow?: string;
  h2?: string;
  intro?: string;
  rows?: PlatformComparisonRow[];
}

export default function PillarPlatformComparison({
  id = "platform-fit",
  eyebrow = "PLATFORM SELECTION",
  h2 = "Which Platform Fits Your Project?",
  intro = "There is no single best platform. This is how we usually choose.",
  rows = defaultRows,
}: PillarPlatformComparisonProps) {
  return (
    <section
      id={id}
      className="scroll-mt-32 border-t border-gray-200/80 bg-[#F9FAFC] py-20 md:py-28"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:max-w-6xl lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#08080C] font-inter sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
            {h2}
          </h2>
          {intro && (
            <p className="mt-4 text-base leading-relaxed text-gray-600 font-poppins md:text-lg">
              {intro}
            </p>
          )}
        </div>

        {/* Comparison Table */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/70 text-xs font-semibold uppercase tracking-wider text-gray-500 font-poppins">
                <th scope="col" className="w-5/12 py-4 px-6 lg:px-8">
                  If you need…
                </th>
                <th scope="col" className="w-3/12 py-4 px-6 lg:px-8">
                  We usually pick
                </th>
                <th scope="col" className="w-4/12 py-4 px-6 lg:px-8">
                  Because
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-poppins text-[14px]">
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className="group transition-colors duration-150 hover:bg-slate-50/60"
                >
                  {/* Need */}
                  <td className="py-5 px-6 lg:px-8 font-medium text-[#08080C] leading-snug">
                    {row.need}
                  </td>

                  {/* Platform */}
                  <td className="py-5 px-6 lg:px-8 align-middle">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#1B3BD9] ring-1 ring-inset ring-blue-600/10">
                      {row.platform}
                    </span>
                  </td>

                  {/* Reason */}
                  <td className="py-5 px-6 lg:px-8 text-gray-600 leading-relaxed">
                    {row.reason}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export const defaultRows: PlatformComparisonRow[] = [
  {
    need: "A content-led business website that your team edits often",
    platform: "WordPress",
    reason: "Familiar editing, large plugin ecosystem, quick to launch.",
  },
  {
    need: "A fast, fully custom website with strict performance goals",
    platform: "Custom-coded (Next.js)",
    reason: "Full control over design and speed, no plugin overhead.",
  },
  {
    need: "Structured content used across a website and apps",
    platform: "Strapi (headless CMS)",
    reason: "Content is managed once and delivered to every front end.",
  },
  {
    need: "An online store with a standard catalogue and a quick launch",
    platform: "Shopify",
    reason: "Managed hosting and a large app ecosystem.",
  },
  {
    need: "A store tied to WordPress content or needing flexible customization",
    platform: "WooCommerce",
    reason: "Integrates with WordPress and is open source.",
  },
  {
    need: "Unusual catalogue, B2B pricing or custom checkout logic",
    platform: "Custom / Medusa",
    reason: "Full control over checkout and business rules.",
  },
  {
    need: "A mobile app",
    platform: "Native or React Native",
    reason: "Depends on features, budget and the devices you must support.",
  },
];