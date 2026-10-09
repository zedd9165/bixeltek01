'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

interface Solution {
  number: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  link: string;
  featured?: boolean;
}

const solutions: Solution[] = [
  {
    number: '01',
    label: 'BUILD',
    title: 'Build',
    description:
      'Digital platforms that earn trust, support your customer journey and give your business a stronger foundation for growth.',
    items: [
      'Websites & redesigns',
      'Ecommerce — Shopify, WooCommerce & headless',
      'Web & mobile applications',
      'APIs & integrations',
      'Custom CRMs & internal tools',
    ],
    link: '#final-cta',
  },
  {
    number: '02',
    label: 'GROW',
    title: 'Grow',
    description:
      'Performance marketing and search strategies designed to turn the right demand into qualified enquiries, customers and revenue.',
    items: [
      'Google Ads management',
      'Meta Ads',
      'SEO & Local SEO',
      'Conversion tracking & analytics',
      'Landing pages & CRO',
    ],
    link: '#final-cta',
    featured: true,
  },
  {
    number: '03',
    label: 'AUTOMATE',
    title: 'Automate',
    description:
      'Connected systems that reduce manual work, respond faster and help your team capture more of the opportunities already coming in.',
    items: [
      'AI automation',
      'Content generation',
      'CRM & workflow automation',
      'Reporting dashboards',
      'Lead follow-up systems',
    ],
    link: '#final-cta',
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative w-full overflow-hidden border-b border-neutral-200/90 bg-[#FFF] py-16 text-[#08080C]"
    >
      {/* Subtle structural background */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-1/4 h-[500px] w-[500px] rounded-full bg-[#670EF7]/[0.025] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #08080C 1px, transparent 1px),
              linear-gradient(to bottom, #08080C 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div> */}

      <div className="relative z-10 mx-auto w-full px-6 md:px-12 lg:max-w-[90%] lg:px-16">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-5xl text-center sm:mb-16 lg:mb-20">
          <span
            className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#670EF7]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            HOW WE HELP BUSINESSES GROW
          </span>

          <h2
            className="text-3xl font-extrabold tracking-tight text-[#08080C] sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Everything You Need to Launch, Grow & Scale Online.
          </h2>

          <p
            className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-neutral-600 sm:text-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            From building your digital foundation to generating demand and
            connecting the systems behind it, we bring the right capabilities
            together around what your business needs next.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-7">
          {solutions.map((solution) => {
            const isFeatured = solution.featured;

            return (
              <div
                key={solution.number}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all duration-300 sm:p-9 ${
                  isFeatured
                    ? 'border border-[#670EF7] bg-[#670EF7] text-white shadow-[0_20px_50px_rgba(103,14,247,0.20)]'
                    : 'border border-neutral-200 bg-white text-[#08080C] hover:border-[#670EF7]/40 hover:shadow-xl'
                }`}
              >
                {/* Top */}
                <div>
                  <div
                    className={`mb-7 flex items-center justify-between border-b pb-6 ${
                      isFeatured
                        ? 'border-white/15'
                        : 'border-neutral-200'
                    }`}
                  >
                    <span
                      className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
                        isFeatured
                          ? 'border-white/20 bg-white/10 text-white'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-600'
                      }`}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {solution.label}
                    </span>

                    <span
                      className={`text-4xl font-black tracking-tight ${
                        isFeatured
                          ? 'text-white/25'
                          : 'text-neutral-200'
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {solution.number}
                    </span>
                  </div>

                  <h3
                    className={`mb-3 text-2xl font-black tracking-tight sm:text-3xl ${
                      isFeatured ? 'text-white' : 'text-[#08080C]'
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {solution.title}
                  </h3>

                  <p
                    className={`mb-8 text-sm leading-relaxed sm:text-base ${
                      isFeatured
                        ? 'text-white/80'
                        : 'text-neutral-600'
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {solution.description}
                  </p>

                  {/* Capabilities */}
                  <div
                    className={`space-y-3 border-t pt-6 ${
                      isFeatured
                        ? 'border-white/15'
                        : 'border-neutral-100'
                    }`}
                  >
                    {solution.items.map((item) => (
                      <div
                        key={item}
                        className={`flex items-start gap-3 text-sm ${
                          isFeatured
                            ? 'text-white/90'
                            : 'text-neutral-700'
                        }`}
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            isFeatured
                              ? 'text-white'
                              : 'text-[#670EF7]'
                          }`}
                        />

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <Link
                    href={solution.link}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                      isFeatured
                        ? 'text-white hover:gap-3'
                        : 'text-[#08080C] hover:gap-3 hover:text-[#670EF7]'
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Explore {solution.title}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-12 text-center sm:mt-16">
          <p
            className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400 sm:text-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Build the foundation. Generate demand. Connect what happens next.
          </p>
        </div>
      </div>
    </section>
  );
}