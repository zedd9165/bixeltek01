'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingDown, PhoneCall, Sparkles } from 'lucide-react';
import tumblewashImg from '@/assets/bixeltek-team-3.jpeg';
import tumblewashLogo from '@/assets/TumbleWash-Logo.webp';


export default function FeaturedCaseStudy() {
  return (
    <section id="case-study" className="relative bg-[#FAF9F6] py-24 sm:py-32 lg:py-40 text-[#08080C] border-b border-neutral-200/90 overflow-hidden">
      
      {/* Subtle Background Structural Hairlines & Soft Radial Hue (No Boxes) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-[-100px] w-[500px] h-[500px] bg-[#670EF7]/[0.03] blur-[150px] rounded-full" />
        <div 
          className="absolute inset-x-0 inset-y-[-100px] opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(8, 8, 12, 0.08) 1px, transparent 1px)`,
            backgroundSize: '80px 100%'
          }}
        />
      </div>

      <div className="relative w-full lg:max-w-[90%] mx-auto px-6 md:px-12 lg:px-16 z-10">
        
      
        {/* Magazine Spread Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-stretch">
          
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            
            <div>
              <div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#670EF7]/10 border border-[#670EF7]/20 mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#670EF7]" />
                <span className="text-xs sm:text-sm uppercase tracking-widest text-[#670EF7] font-semibold">
                  FEATURED PROJECT · TUMBLEWASH
                </span>
              </div>

              <h3 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#08080C] leading-[1.08] mb-6 sm:mb-8"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Turning local search demand into more customer enquiries.
              </h3>

              <p 
                className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 sm:mb-10 font-normal"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                TumbleWash was reaching potential customers, but its acquisition journey was not working efficiently enough. The opportunity was broader than an ad adjustment: local search intent, campaign structure, landing pages and the path to a call all needed to work together. We rebuilt that journey and measured the result against the enquiries it produced.
              </p>

              {/* Challenge & Approach Editorial Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 pt-6 border-t border-neutral-200">
                <div>
                  <h4 
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#08080C] mb-2 flex items-center gap-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                    THE CHALLENGE
                  </h4>
                  <p 
                    className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Rising acquisition costs and underperforming local landing experiences were limiting the return from existing demand.
                  </p>
                </div>
                <div>
                  <h4 
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#08080C] mb-2 flex items-center gap-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#670EF7]" />
                    WHAT WE DID
                  </h4>
                  <p 
                    className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    We aligned local targeting, Google Ads campaigns, landing experiences and conversion measurement around the way customers searched and contacted the business.
                  </p>
                </div>
              </div>
            </div>

            {/* DOMINANT METRIC BREAKTHROUGH: ₹754 → ₹77 */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-neutral-200/90 shadow-sm mb-8 sm:mb-10">
              <span 
                className="text-xs uppercase tracking-widest text-neutral-400 font-bold block mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Cost Per Lead
              </span>
              
              <div className="flex items-baseline flex-wrap gap-4 sm:gap-6 mb-2">
                <span 
                  className="text-2xl sm:text-3xl font-medium text-neutral-400 line-through"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  ₹754
                </span>
                <span className="text-neutral-300 text-2xl font-light">→</span>
                <span 
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black text-[#670EF7] tracking-tighter leading-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  ₹77
                </span>
              </div>

              <div 
                className="flex items-center gap-1.5 text-xs sm:text-sm uppercase tracking-wider font-semibold text-emerald-700 mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <TrendingDown className="w-4 h-4" />
                <span>89.7% reduction in cost per lead</span>
              </div>

              {/* Supporting Secondary Proof Points */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-neutral-100">
                <div>
                  <div 
                    className="flex items-baseline gap-2 mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="text-xs sm:text-sm text-neutral-400 line-through">170</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#08080C]">477+</span>
                  </div>
                  <span 
                    className="text-xs sm:text-sm uppercase tracking-wider text-neutral-500 font-medium"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Monthly Calls
                  </span>
                </div>

                <div>
                  <div 
                    className="text-2xl sm:text-3xl font-extrabold text-[#08080C] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    436%+
                  </div>
                  <span 
                    className="text-xs sm:text-sm uppercase tracking-wider text-neutral-500 font-medium"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Verified ROAS
                  </span>
                </div>
              </div>
            </div>

            {/* Case Study Deep Dive Link */}
            <div>
              <Link 
                href="/case-studies/Tumblewash-Casestudy"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#08080C] hover:bg-[#670EF7] text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 group shadow-md hover:shadow-lg hover:shadow-[#670EF7]/20 w-full md:w-auto"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span>Read the TumbleWash Case Study</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

          </div>
          
          <div className="lg:col-span-6 relative min-h-[460px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[700px] rounded-3xl overflow-hidden border border-neutral-300 shadow-xl flex flex-col justify-end group">
            <Image
              src={tumblewashImg}
              alt="TumbleWash Digital Acquisition Transformation"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Subtle photographic gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080C]/90 via-[#08080C]/35 to-transparent pointer-events-none" />

            {/* Overlaid Editorial Client Badge */}
            <div className="relative z-10 m-6 sm:m-8 lg:m-10 p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl">
              <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 mb-3">
                <Image 
                  src={tumblewashLogo} 
                  alt="TumbleWash Logo" 
                  width={140} 
                  height={45} 
                  className="w-auto h-7 sm:h-9 object-contain"
                />
                <span 
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-semibold uppercase tracking-wider"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Client
                </span>
              </div>
              <p className='text-center md:text-left'>
                Multi-location franchise business looking to build a more efficient digital acquisition system.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}