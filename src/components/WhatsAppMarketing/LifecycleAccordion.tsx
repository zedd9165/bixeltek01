'use client'

import React, { useState } from "react";
import { 
  Magnet, 
  ListChecks, 
  MessageCircle, 
  Zap, 
  Headset, 
  Repeat 
} from "lucide-react";
import { whatsappMarketingLifecycle } from "@/data/whatsappmarketing";

// Map specific icons to the 6 lifecycle stages
const stageIcons = [Magnet, ListChecks, MessageCircle, Zap, Headset, Repeat];

export default function LifecycleAccordion() {
  // Default to the first stage being open
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="hidden md:block relative bg-black py-12 md:py-32 px-6 z-0 overflow-hidden">
      
      {/* Dynamic Ambient Background Glow - shifts based on interaction */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-900/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto md:max-w-7xl">
        
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center z-10 relative mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-bold tracking-wide uppercase">
            <Repeat size={16} />
            <span>{whatsappMarketingLifecycle.eyebrow}</span>
          </div>
          
          <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {whatsappMarketingLifecycle.title}
          </h2>
          
          <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            {whatsappMarketingLifecycle.body}
          </p>
        </div>

        {/* The Interactive Flex Accordion */}
        {/* Uses flex-col on mobile for a vertical accordion, and flex-row on desktop for the horizontal slider */}
        <div className="flex flex-col lg:flex-row w-full h-[800px] lg:h-[500px] gap-3 lg:gap-4 relative z-10">
          
          {whatsappMarketingLifecycle.stages.map((stage, index) => {
            const isActive = activeIndex === index;
            const Icon = stageIcons[index];

            return (
              <div
                key={stage.stage}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`group relative rounded-[2rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer flex flex-col justify-between border ${
                  isActive 
                    ? "flex-[4] bg-gradient-to-br from-blue-600 to-indigo-900 border-blue-500/50 shadow-[0_0_40px_rgba(37,99,235,0.2)]" 
                    : "flex-[1] bg-[#050505] border-white/10 hover:bg-white/5"
                }`}
              >
                
                {/* Top Section: Icon & Stage Number */}
                <div className="p-6 md:p-8 flex items-start justify-between relative z-10">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 flex-none ${
                    isActive ? "bg-white/20 text-white shadow-inner" : "bg-white/5 text-gray-500 group-hover:text-gray-300"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* The Number changes from a faded watermark to a crisp white indicator */}
                  {/* <span className={`text-2xl font-black transition-colors duration-500 ${
                    isActive ? "text-white/50" : "text-white/10 group-hover:text-white/20"
                  }`}>
                    {stage.stage}
                  </span> */}
                </div>

                {/* Bottom Section: Title & Content */}
                <div className="p-6 md:p-8 relative z-10 flex flex-col justify-end">
                  
                  {/* Title */}
                  <h3 className={`text-2xl font-bold whitespace-nowrap transition-colors duration-500 ${
                    isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                  }`}>
                    {stage.title}
                  </h3>

                  {/* Hidden/Revealed Description */}
                  {/* Height and opacity transition smoothly when the flex basis expands */}
                  <div 
                    className={`grid transition-all duration-700 ease-in-out ${
                      isActive ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden text-base md:text-lg text-blue-100/90 leading-relaxed">
                      {stage.text}
                    </p>
                  </div>
                  
                </div>

                {/* Massive Decorative Background Number (Only visible on the active pane to fill negative space) */}
                <div 
                  className={`absolute -bottom-5 right-5 text-[200px] font-black leading-none pointer-events-none transition-all duration-700 ease-out ${
                    isActive ? "opacity-[0.07] text-white scale-100" : "opacity-0 scale-50"
                  }`}
                >
                  {stage.stage}
                </div>

                {/* Optional Subtle Tech Grid Overlay */}
                {isActive && (
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none mix-blend-overlay" />
                )}

              </div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}