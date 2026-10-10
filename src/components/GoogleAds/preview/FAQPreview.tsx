"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqPreviewData } from "@/data/googleAdsPreviewData";

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="scroll-mt-24 py-24 bg-[#F8F9FC] text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight">
            {faqPreviewData.h2}
          </h2>
        </div>

        {/* Accordion on Grey Background with White Interactive Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqPreviewData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-colors"
              >
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 font-inter text-lg md:text-xl font-bold text-[#08080C] hover:text-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
                  className={`px-6 sm:px-7 pb-6 sm:pb-7 transition-all duration-300 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <p className="text-base text-gray-600 font-poppins leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
