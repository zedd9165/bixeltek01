'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

import dentalImg from '@/assets/digital marketing for health care practices.jpg';
import localServiceImg from '@/assets/digital marketing for roofing industries.jpg';
import ecommerceImg from '@/assets/ecommerce.png';
import b2bImg from '@/assets/campaign-creators-gMsnXqILjp4-unsplash.jpg';

const industries = [
  {
    id: 0,
    title: 'B2B & Established Businesses',
    focus: 'Complex Offers & Long Cycles',
    description:
      'When the offer is complex or the buying cycle is long, the website must do more than look credible. We help businesses explain their value, guide prospective buyers toward an enquiry and connect that journey with the teams responsible for follow-up.',
    cta: 'Discuss Your Requirements',
    link: '/contact-us',
    image: b2bImg,
    tag: 'B2B & Established'
  },
  {
    id: 1,
    title: 'Dental & Healthcare',
    focus: 'Trust & Local Demand',
    description:
      'Choosing a provider requires trust. We help practices present their care clearly, improve local visibility and create better journeys from search or advertising to a patient enquiry.',
    cta: 'Explore Healthcare Work',
    link: '/industries/dental-marketing-agency',
    image: dentalImg,
    tag: 'Healthcare'
  },
  {
    id: 2,
    title: 'Ecommerce & Consumer Brands',
    focus: 'Storefront to Scale',
    description:
      'From a new brand’s first store to a growing catalogue that needs a better platform, we design commerce experiences that connect product discovery, buying and the operations behind every order.',
    cta: 'Explore Ecommerce',
    link: '/ecommerce-websites',
    image: ecommerceImg,
    tag: 'Ecommerce'
  },
  {
    id: 3,
    title: 'Local & Multi-Location Services',
    focus: 'Location Pages & Inbound',
    description:
      'Help customers find the right service in the right place, understand why they should choose you and contact the right team. We connect location pages, local SEO, Google Ads and enquiry handling around that journey.',
    cta: 'Explore Local Growth',
    link: '/local-seo',
    image: localServiceImg,
    tag: 'Local Services'
  },
];

export default function IndustrySelector() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[#08080C] py-24 sm:py-32 lg:py-40 text-white border-b border-white/[0.08] overflow-hidden">
      
      {/* Background Innovation: Subtle Restrained Spotlight & Vertical Hairlines (No repetitive boxes) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `radial-gradient(ellipse at 50% 20%, rgba(103,14,247,0.12) 0%, transparent 70%)`,
          }}
        />
        <div 
          className="absolute inset-x-0 inset-y-[-100px] opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
            backgroundSize: '100px 100%'
          }}
        />
      </div>

      <div className="relative w-full lg:max-w-[90%] mx-auto px-6 md:px-12 lg:px-16 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20 md:mb-24 pb-10 border-b border-white/[0.08]">
          <div className="max-w-3xl mx-auto text-center gap-4 lg:gap-6">
            <div 
              className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-[#8C45FF]/30 bg-[#8C45FF]/10 mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8C45FF]" />
              <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-neutral-300">
                WHO WE WORK WITH
              </span>
            </div>

            <h2 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Different businesses. A solution shaped around yours.
            </h2>
            <p 
              className="text-base sm:text-lg md:text-xl text-[#A1A1AA] font-normal leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              We work with new ventures preparing to launch, growing companies building their next channel and established businesses modernizing the experience they offer. The work changes with the market and business model; our first job is to understand what success looks like in your context.
            </p>
          </div>
        </div>

        {/* Desktop Interactive Expanding Photo Panels (lg:) */}
        <div className="hidden lg:flex gap-4 h-[580px] xl:h-[640px] w-full">
          {industries.map((ind) => {
            const isActive = activeIndex === ind.id;

            return (
              <div
                key={ind.id}
                onMouseEnter={() => setActiveIndex(ind.id)}
                onClick={() => setActiveIndex(ind.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between p-8 xl:p-10 border ${
                  isActive 
                    ? 'w-[48%] border-[#670EF7]/60 shadow-[0_20px_50px_rgba(0,0,0,0.85)]' 
                    : 'w-[17.33%] border-white/10 opacity-70 hover:opacity-95'
                }`}
              >
                {/* Background Photography with Zoom on Active */}
                <Image 
                  src={ind.image} 
                  alt={ind.title} 
                  fill 
                  className={`object-cover transition-transform duration-700 ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                  sizes="(max-width: 1200px) 50vw, 33vw"
                />

                {/* Dark Vignette Overlay */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive 
                    ? 'bg-gradient-to-t from-[#08080C] via-[#08080C]/75 to-[#08080C]/35' 
                    : 'bg-[#08080C]/80 hover:bg-[#08080C]/65'
                }`} />

                {/* Top Row: Tag & Index */}
                <div className="relative z-10 flex items-center justify-between">
                  <span 
                    className="px-3.5 py-1.5 rounded-full border border-white/20 bg-black/45 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-neutral-200"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {ind.tag}
                  </span>
                  <span 
                    className="text-sm font-black font-mono tracking-wider text-neutral-400"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    0{ind.id + 1}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10">
                  <span 
                    className="text-xs sm:text-sm font-bold text-[#8C45FF] uppercase tracking-wider block mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {ind.focus}
                  </span>

                  <h3 
                    className="text-2xl xl:text-3xl font-extrabold text-white tracking-tight mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {ind.title}
                  </h3>

                  {/* Expanded Information */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    isActive ? 'max-h-56 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}>
                    <p 
                      className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 max-w-lg font-normal"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {ind.description}
                    </p>

                    <Link 
                      href={ind.link}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#08080C] hover:bg-[#670EF7] hover:text-white text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all duration-200 group shadow-md"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      <span>{ind.cta}</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Responsive Layout (1 col mobile, 2 cols tablet md:) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="relative rounded-3xl overflow-hidden min-h-[380px] p-7 sm:p-8 flex flex-col justify-between border border-white/10 shadow-lg group"
            >
              <Image 
                src={ind.image} 
                alt={ind.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-[#08080C]/80 to-[#08080C]/40" />

              <div className="relative z-10 flex items-center justify-between">
                <span 
                  className="px-3.5 py-1.5 rounded-full border border-white/20 bg-black/45 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-neutral-200"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {ind.tag}
                </span>
                <span 
                  className="text-sm font-black font-mono tracking-wider text-neutral-400"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  0{ind.id + 1}
                </span>
              </div>

              <div className="relative z-10 pt-8">
                <span 
                  className="text-xs sm:text-sm font-bold text-[#8C45FF] uppercase tracking-wider block mb-1.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {ind.focus}
                </span>
                <h3 
                  className="text-2xl font-extrabold text-white mb-2.5 tracking-tight"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {ind.title}
                </h3>
                <p 
                  className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {ind.description}
                </p>
                <Link 
                  href={ind.link}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#08080C] hover:bg-[#670EF7] hover:text-white text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all duration-200"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span>{ind.cta}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}