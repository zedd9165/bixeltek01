"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";

export interface SuitabilityPoint {
  title: string;
  description: string;
}

export interface SuitabilityAdvisory {
  title: string;
  description: string;
}

export interface ServiceSuitabilitySectionProps {
  id?: string;
  eyebrow: string;
  h2: string;
  intro: string;
  points: SuitabilityPoint[];
  advisory?: SuitabilityAdvisory;
}

export default function ServiceSuitabilitySection({
  id = "suitability",
  eyebrow,
  h2,
  intro,
  points,
  advisory,
}: ServiceSuitabilitySectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 py-20 md:py-28 bg-[#F8F9FC] text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-16">
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

        {/* Situation / Criteria Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 font-poppins font-bold text-xs">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold font-inter text-[#08080C] mb-2">
                  {pt.title}
                </h3>
                <p className="text-sm text-gray-600 font-poppins leading-relaxed">
                  {pt.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Advisory Note */}
        {advisory && (
          <div className="p-7 rounded-2xl bg-amber-50/70 border border-amber-200/90 text-[#08080C] shadow-sm max-w-5xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold font-inter text-amber-950 mb-1.5">
                  {advisory.title}
                </h3>
                <p className="text-sm text-amber-900/90 font-poppins leading-relaxed">
                  {advisory.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

