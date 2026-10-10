"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { webDesignFaqData } from "@/data/service/webdesing";

type Faq = { question: string; answer: string };

export default function WebDesignFAQPreview() {
  // Single open item across both columns (uses the original FAQ index)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split into two parts. Left gets the extra item if the count is odd.
  const faqs = webDesignFaqData.faqs as Faq[];
  const midpoint = Math.ceil(faqs.length / 2);
  const columns: { items: Faq[]; offset: number }[] = [
    { items: faqs.slice(0, midpoint), offset: 0 },
    { items: faqs.slice(midpoint), offset: midpoint },
  ];

  return (
    <section
      id="faqs"
      className="scroll-mt-24 py-24 bg-[#F8F9FC] text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight">
            {webDesignFaqData.h2}
          </h2>
        </div>

        {/* Two-part accordion: stacks on mobile, side by side on desktop.
            items-start keeps each column's height independent, so opening an
            answer in one column never stretches the cards in the other. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 items-start">
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="space-y-4">
              {column.items.map((faq, i) => {
                const index = column.offset + i;
                const isOpen = openIndex === index;
                const contentId = `faq-answer-${index}`;
                const headerId = `faq-header-${index}`;

                return (
                  <div
                    key={index}
                    className={`rounded-2xl border bg-white shadow-sm overflow-hidden transition-colors ${
                      isOpen ? "border-blue-200" : "border-gray-200"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        id={headerId}
                        aria-expanded={isOpen}
                        aria-controls={contentId}
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-inter text-base md:text-lg font-bold text-[#08080C] hover:text-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-blue-600" : ""
                          }`}
                        />
                      </button>
                    </h3>

                    {/* Rendered in HTML for SEO & accessibility */}
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={headerId}
                      className={`px-5 md:px-6 pb-5 md:pb-6 transition-all duration-300 ${
                        isOpen ? "block" : "hidden"
                      }`}
                    >
                      <p className="text-sm md:text-base text-gray-600 font-poppins leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}