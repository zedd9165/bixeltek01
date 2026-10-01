'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const principles = [
  {
    num: "01",
    title: "Start With the Business",
    tagline: "Understand Before Building",
    desc: "We begin with your business, customers, goals, and current challenges. The technology, marketing, and digital work should serve the business — not the other way around."
  },
  {
    num: "02",
    title: "Build the Right Foundation",
    tagline: "Digital Before Disconnected Tactics",
    desc: "Your website, digital products, customer experience, and technology should give the business a strong foundation. We focus on building things that can support where you're going, not just where you are today."
  },
  {
    num: "03",
    title: "Connect the Pieces",
    tagline: "One Connected System",
    desc: "Marketing, websites, customer journeys, CRM, automation, and technology work better when they are connected. We look at the gaps between these pieces and build a more joined-up digital experience."
  },
  {
    num: "04",
    title: "Measure What Matters",
    tagline: "Business Outcomes",
    desc: "We look beyond surface-level activity and focus on the signals that matter to the business — qualified opportunities, customer acquisition, conversions, efficiency, and the progress toward your goals."
  },
  {
    num: "05",
    title: "Maintain What We Build",
    tagline: "Keep It Working",
    desc: "Digital systems need ongoing attention. We monitor performance, keep technology healthy, fix issues, make improvements, and help your digital foundation stay reliable as the business changes."
  },
  {
    num: "06",
    title: "Scale With the Business",
    tagline: "Continuous Growth",
    desc: "Once the foundation is working, we look for the next opportunity — expanding into new markets, improving customer journeys, adding automation, strengthening acquisition, or building new digital capabilities."
  }
];

export default function WhyBixeltek() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative bg-[#FFFFFF] py-24 sm:py-32 lg:py-40 text-[#08080C] border-b border-neutral-200 overflow-hidden">
      
      {/* Background Innovation: Subtle Restrained Spotlight & Vertical Hairlines (No Boxes) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute -top-32 right-1/4 w-[600px] h-[350px] bg-[#670EF7]/[0.025] blur-[140px] rounded-full" 
        />
        <div 
          className="absolute inset-x-0 inset-y-[-100px] opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(8, 8, 12, 0.08) 1px, transparent 1px)`,
            backgroundSize: '80px 100%'
          }}
        />
      </div>

      <div className="relative w-full lg:max-w-[90%] mx-auto px-6 md:px-12 lg:px-16 z-10">
        
        {/* Manifesto Header */}
        <div className="max-w-6xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#670EF7]/20 bg-[#670EF7]/10 mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#670EF7]" />
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-[#670EF7]">
              The Bixeltek Philosophy
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#08080C] leading-[1.05] mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            You Don&apos;t Need Another Agency.<br className='hidden md:inline'/>
              You Need Commercial Engineers.
          </h2>

          <p 
            className="text-sm sm:text-lg md:text-2xl text-neutral-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Digital work should do more than solve today&apos;s problem. We look at your
            business as a whole your customers, technology, digital presence, and
            opportunities then build a foundation that can keep improving as your
            business grows.
          </p>
        </div>

        {/* Editorial Principles Grid (1 col mobile, 2 col tablet md: and desktop lg:) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-20 gap-y-14 lg:gap-y-20 border-t border-neutral-200 pt-16">
          {principles.map((principle, index) => {
            const isSelected = activeIdx === index;

            return (
              <div
                key={principle.num}
                onMouseEnter={() => setActiveIdx(index)}
                onClick={() => setActiveIdx(index)}
                className="relative flex flex-col items-start group cursor-pointer pt-6"
              >
                {/* Active Indicator Top Accent Bar */}
                <div 
                  className={`absolute top-0 left-0 h-[2px] w-16 transition-all duration-300 ${
                    isSelected ? 'bg-[#670EF7] w-28' : 'bg-transparent group-hover:bg-neutral-300'
                  }`}
                />

                {/* Number & Phase Tag */}
                <div className="flex items-baseline gap-5 mb-5">
                  <span 
                    className={`text-5xl sm:text-6xl lg:text-7xl font-black font-mono tracking-tighter transition-colors ${
                      isSelected ? 'text-[#670EF7]' : 'text-neutral-300 group-hover:text-neutral-500'
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {principle.num}
                  </span>
                  
                  <span 
                    className={`text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors ${
                      isSelected ? 'text-[#8B45FF]' : 'text-neutral-500 group-hover:text-neutral-700'
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {principle.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#08080C] tracking-tight mb-3.5 group-hover:text-[#670EF7] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {principle.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm sm:text-base lg:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {principle.desc}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}