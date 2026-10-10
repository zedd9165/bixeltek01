"use client";

import React from "react";
import { Info } from "lucide-react";

export interface ScopeCardItem {
  title: string;
  description: string;
}

export interface ServiceScopeSectionProps {
  id?: string;
  eyebrow: string;
  h2: string;
  intro: string;
  cards: ScopeCardItem[];
  scopeNote?: string;
}

export default function ServiceScopeSection({
  id = "services",
  eyebrow,
  h2,
  intro,
  cards,
  scopeNote,
}: ServiceScopeSectionProps) {
  const halfLength = Math.ceil(cards.length / 2);
  const leftColCards = cards.slice(0, halfLength);
  const rightColCards = cards.slice(halfLength);

  return (
    <section
      id={id}
      className="scroll-mt-24 py-24 sm:py-28 bg-white text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-5xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Structured Capability Map: Clean 2-Column Ledger with Distinct Editorial Dividers */}
        <div className="border border-gray-200 rounded-3xl bg-gray-50/50 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Left Column (Items 01 - 03) */}
            <div className="divide-y divide-gray-200 bg-white">
              {leftColCards.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 sm:p-10 hover:bg-gray-50/80 transition-colors flex items-start gap-6 group"
                >
                  <span className="font-poppins text-xs font-bold px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-blue-700 flex-shrink-0 mt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column (Items 04 - 06) */}
            <div className="divide-y divide-gray-200 bg-white">
              {rightColCards.map((item, idx) => (
                <div
                  key={idx + halfLength}
                  className="p-8 sm:p-10 hover:bg-gray-50/80 transition-colors flex items-start gap-6 group"
                >
                  <span className="font-poppins text-xs font-bold px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-blue-700 flex-shrink-0 mt-1">
                    {String(idx + halfLength + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scope Note */}
          {scopeNote && (
            <div className="p-6 sm:p-8 bg-blue-50/70 border-t border-gray-200 flex items-start gap-3.5 text-xs sm:text-sm text-blue-900 font-poppins leading-relaxed">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-blue-950">Capability Scope Note: </strong>
                {scopeNote}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

