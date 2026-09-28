'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenAudit: () => void;
}

export default function FinalCTA({ onOpenAudit }: FinalCTAProps) {
  return (
    <section className="relative w-full py-28 sm:py-36 lg:py-40 bg-[#08080C] text-white border-b border-white/[0.08] overflow-hidden">
      
      {/* Precision Structural Coordinate Mesh */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />

      {/* Section Container */}
      <div className="relative w-full lg:max-w-[90%] mx-auto px-6 md:px-12 lg:px-16 z-10 flex flex-col items-center">
        
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1550px] p-8 md:p-16 rounded-2xl border border-white/[0.12] bg-[#670EF7]/20 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start overflow-hidden group"
        >
          
          {/* Ambient Purple Light */}
          <div 
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{
              backgroundImage: `
                radial-gradient(
                  circle at 10% 10%,
                  rgba(139, 69, 255, 0.35) 0%,
                  rgba(103, 14, 247, 0.1) 40%,
                  transparent 80%
                )
              `,
            }}
          />
          
          {/* Internal Wireframe */}
          <div 
            className="absolute inset-x-10 inset-y-10 pointer-events-none opacity-[0.035] transition-opacity group-hover:opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(35deg, transparent 50%, white 51%, transparent 52%),
                linear-gradient(125deg, transparent 50%, white 51%, transparent 52%)
              `,
              backgroundSize: '30px 30px'
            }}
          />

          {/* Top Highlight */}
          <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B45FF] to-transparent opacity-90 shadow-[0_0_20px_rgba(103,14,247,0.8)]" />

          {/* LEFT */}
          <div className="relative z-10 lg:col-span-8 flex flex-col items-start min-w-0">
            
            {/* Eyebrow */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#8C45FF]/30 bg-[#8C45FF]/10 mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8C45FF]" />
              <span className="text-sm font-semibold tracking-wider uppercase text-neutral-300">
                Let&apos;s Talk About Your Business
              </span>
            </div>

            {/* Headline */}
            <h2 
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.06] mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Ready to Build What&apos;s
              <span className="block bg-gradient-to-r from-white via-[#D8C5FF] to-[#8B45FF] bg-clip-text text-transparent">
                Next for Your Business?
              </span>
            </h2>
            
            {/* Description */}
            <p 
              className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-12"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Whether you need a stronger digital presence, better ways to reach
              customers, connected systems, or a clearer path forward, let&apos;s
              look at where your business is today and what it could build next.
            </p>

            {/* CTA */}
            <div className="flex flex-col md:flex-row items-start sm:items-center gap-6 pt-10 border-t border-white/[0.08] w-full mt-10">
              
              <button 
                onClick={onOpenAudit}
                className="w-full md:w-auto px-6 py-4 bg-white text-neutral-950 rounded-full font-bold text-sm sm:text-base hover:shadow-[0_4px_35px_rgba(103,14,247,0.5)] flex items-center justify-center gap-3 transition-all duration-300 group cursor-pointer"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span className="shrink-0">
                  Talk About Your Business
                </span>

                <div className="w-8 h-8 rounded-full bg-[#08080C] flex items-center justify-center shrink-0 transform group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>

            <Link href="#"                 
            className="w-full md:w-auto px-4 py-4 text-white rounded-full font-bold text-sm sm:text-base hover:shadow-[0_4px_35px_rgba(103,14,247,0.5)] flex items-center justify-center transition-all duration-300 group cursor-pointer"
            >
              Schedule a 1 on 1 Consultation 
            </Link>

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative z-10 hidden lg:flex lg:col-span-4 flex-col items-start pt-10 border-l border-white/[0.08] pl-12 h-full justify-between">
            
            <div>
              <span 
                className="text-sm uppercase tracking-[0.2em] text-[#8c45ff] font-bold block mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Where We Can Help
              </span>

              <p 
                className="text-base text-neutral-200 font-normal leading-relaxed max-w-xs mb-10"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Bring us the challenge, opportunity, or idea. We&apos;ll help
                you understand what needs to change and where digital can
                create the most value.
              </p>
            </div>

            <div className="space-y-2 w-full">
              {[
                { step: '01', scope: 'Strengthen Your Digital Presence' },
                { step: '02', scope: 'Reach More Relevant Customers' },
                { step: '03', scope: 'Connect Your Systems' },
                { step: '04', scope: 'Build for What Comes Next' },
              ].map((stage) => (
                <div 
                  key={stage.step}
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-white/10 bg-black/40 hover:border-[#670EF7]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#670EF7]/15 border border-[#670EF7]/30 flex items-center justify-center text-[#8C45FF] font-mono text-xs font-bold shrink-0">
                      {stage.step}
                    </div>

                    <div 
                      className="text-sm font-bold text-white mb-0.5 truncate"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {stage.scope}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* Footnote */}
        <p 
          className="text-sm font-medium tracking-wide text-white/60 mt-16 text-center max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          No obligation · Straightforward conversation · Built around your business
        </p>

      </div>
    </section>
  );
}