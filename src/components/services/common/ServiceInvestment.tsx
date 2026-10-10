"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export interface InvestmentFactorCardItem {
  title: string;
  description: string;
}

export interface ServiceInvestmentProps {
  id?: string;
  eyebrow: string;
  h2: string;
  intro: string;
  cards: InvestmentFactorCardItem[];
  closingCopy?: string;
  buttonText: string;
  buttonHref: string;
}

export default function ServiceInvestment({
  id = "investment",
  eyebrow,
  h2,
  intro,
  cards,
  closingCopy,
  buttonText,
  buttonHref,
}: ServiceInvestmentProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 py-24 sm:py-32 bg-white text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Editorial Composition: Left Sticky Explanation + Right Structured Drivers List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Intro, Closing Copy & Action */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>{eyebrow}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.12]">
                {h2}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-poppins leading-relaxed">
                {intro}
              </p>
            </div>

            {/* Commercial Governance Card */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-blue-700 font-poppins">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Scope Transparency</span>
              </div>
              <p className="text-sm text-gray-600 font-poppins leading-relaxed">
                {closingCopy ||
                  "We establish the scope and technical requirements before recommending an approach, so the proposed work reflects the actual needs of the business."}
              </p>
              <div className="pt-2">
                <Link
                  href={buttonHref}
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium text-sm sm:text-base shadow-lg shadow-blue-600/20 transition duration-300"
                >
                  <span>{buttonText}</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Explanatory Drivers with Dividers */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 lg:p-12 shadow-sm divide-y divide-gray-200">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="py-7 first:pt-0 last:pb-0 flex items-start gap-6 group"
              >
                <span className="font-poppins text-xs font-bold px-2.5 py-1 rounded bg-gray-100 text-gray-700 border border-gray-200 flex-shrink-0 mt-1">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="space-y-1.5 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

