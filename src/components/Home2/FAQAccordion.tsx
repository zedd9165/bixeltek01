'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import engineeringImg from '@/assets/tumblewash.jpg'; // or your preferred agency/technical asset

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do you work with new businesses as well as established companies?",
    answer:
      "Yes. We work with businesses at different stages. For newer businesses, the focus is usually on establishing the brand, launching the website or store and finding the first dependable customer acquisition channels. For established companies, the work often involves modernising an outdated web presence, improving conversion rates, expanding search visibility or building custom applications to support operations."
  },
  {
    question: "Do you only offer digital marketing?",
    answer:
      "No. Digital marketing is one part of what we do. We combine web design and development, ecommerce, custom applications, SEO, Google Ads management and analytics. Our focus is on how these parts connect to produce a business result, rather than offering marketing in isolation from the website or platform it depends on."
  },
  {
    question: "Can you improve our current website instead of rebuilding it?",
    answer:
      "Yes, where it makes sense. If your current website has a solid foundation and needs better messaging, improved conversion paths, technical fixes or new landing pages, we can focus on those improvements without a full rebuild. If the existing site has structural limitations that would hold back results, we will explain why and recommend the right approach."
  },
  {
    question: "Can you manage our Google Ads or SEO without building a new website?",
    answer:
      "Yes. Many clients start with Google Ads management or SEO on their existing site. We review the site’s current performance and landing pages as part of that work, because traffic only creates value if the site can convert it. Where landing page or technical adjustments are needed to improve results, we will recommend them."
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes. Bixeltek works with clients internationally as well as across India. Our communication, project tracking and reporting workflows are designed to support remote collaboration across different time zones."
  },
  {
    question: "How is a project priced?",
    answer:
      "Pricing depends on the scope of work, technical requirements and level of ongoing support required. Website and application projects are typically scoped and priced by milestone. Google Ads management and SEO are typically structured as ongoing monthly engagements. After an initial discussion about your requirements, we provide a clear proposal explaining the scope, timeline and investment."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#FFFFFF] text-[#08080C] border-b border-neutral-200/90 overflow-hidden">
      
      {/* Background Ambience: Faint Restrained Ambient Purple Glow Behind Content */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#670EF7]/[0.035] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative w-full lg:max-w-[90%] mx-auto px-6 md:px-12 lg:px-16 z-10">
        
        {/* Section Eyebrow & Display H2 */}
        <div className="max-w-3xl mb-14 sm:mb-18 lg:mb-20">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#670EF7]/20 bg-[#670EF7]/10 text-[#670EF7] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#08080C] tracking-tight leading-[1.08]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            What you may want to know before we talk.
          </h2>
        </div>

        {/* --- MAGAZINE SPREAD: LEFT PHOTO (5 COLS) + RIGHT ACCORDION (7 COLS) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* LEFT: Atmospheric Image Card with Gradient & Trust Tag (5 cols) */}
          <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[460px] lg:h-[620px] rounded-3xl overflow-hidden border border-neutral-200 shadow-xl group">
            <Image
              src={engineeringImg}
              alt="Bixeltek Engineering & Growth Operations"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
            {/* Soft Photographic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080C]/85 via-[#08080C]/30 to-transparent pointer-events-none" />

            {/* Overlaid Bottom Note Box */}
            <div className="absolute bottom-6 inset-x-6 sm:bottom-8 sm:inset-x-8 p-6 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl">
              <div className="flex items-center gap-2 mb-2 text-[#670EF7]">
                <ShieldCheck className="w-4 h-4" />
                <span 
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Direct Advisory Access
                </span>
              </div>
              <p 
                className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Have a question specific to your unit economics or digital stack?
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#08080C] hover:text-[#670EF7] transition-colors group/link"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span>Consult Our Leadership</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Floating Stacked Accordion Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 relative">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  layout
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`rounded-2xl transition-all duration-300 relative ${
                    isOpen 
                      /* Floating popped card matching reference screenshot elevation */
                      ? 'bg-white border border-[#670EF7]/50 shadow-[0_18px_40px_rgba(103,14,247,0.08)] ring-1 ring-[#670EF7]/20 z-20 lg:-mr-4' 
                      : 'bg-[#FBFBFA] border border-neutral-200/90 hover:border-neutral-300 hover:bg-white z-10'
                  }`}
                >
                  {/* Top Subtle Purple Edge Accent on Active Card */}
                  {isOpen && (
                    <div className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#670EF7] to-transparent opacity-90" />
                  )}

                  <button
                    onClick={() => toggleOpen(index)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                  >
                    <h3 
                      className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                        isOpen ? 'text-[#08080C]' : 'text-neutral-700 hover:text-[#08080C]'
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {faq.question}
                    </h3>

                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen 
                        ? 'bg-[#670EF7]/10 text-[#670EF7] rotate-180' 
                        : 'bg-neutral-200/60 text-neutral-500 group-hover:text-neutral-800'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-neutral-100">
                          <p 
                            className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}