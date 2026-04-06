'use client';
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface FAQItem {
  q: string;
  a: string;
}

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${
        open ? "bg-white/5" : "bg-transparent hover:bg-white/[0.03]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left gap-4"
      >
        <span className="text-white font-medium text-sm sm:text-base leading-snug">
          {item.q}
        </span>
        <FiChevronDown
          className={`shrink-0 text-blue-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          size={18}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 pb-4 sm:pb-6" : "max-h-0"
        }`}
      >
        <p className="px-4 sm:px-6 text-white/60 text-sm leading-relaxed">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FaqsSection({faqs}: {faqs: FAQItem[]}) {
    return(
        <section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
              Still Got Questions?
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
              Frequently Asked
              <br />
              <span className="text-white/30">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQAccordion key={i} item={faq} />
            ))}
          </div>
        </div>
      </section>
    )
}