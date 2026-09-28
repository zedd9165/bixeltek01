'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Layout, 
  TrendingUp, 
  MapPin, 
  Inbox, 
  Cpu,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  FileCheck2,
  Terminal,
  Zap
} from 'lucide-react';

interface GrowthAuditProps {
  onOpenAudit: () => void;
}

interface DiagnosticVector {
  id: string;
  num: string;
  name: string;
  icon: React.ElementType;
  primaryLeak: string;
  sampleFinding: string;
  strategicFix: string;
  typicalImpact: string;
  timeToAudit: string;
}

const vectors: DiagnosticVector[] = [
  {
    id: 'presence',
    num: '01',
    name: 'Digital Presence',
    icon: Layout,
    primaryLeak: 'How your business shows up online',
    sampleFinding:
      'We look at your website, positioning, user experience, and the first impression customers get when they discover your business.',
    strategicFix:
      'Identify the most important opportunities to strengthen your digital foundation and customer experience.',
    typicalImpact: 'A Stronger Digital Foundation',
    timeToAudit: 'Initial Review'
  },
  {
    id: 'visibility',
    num: '02',
    name: 'Digital Visibility',
    icon: Search,
    primaryLeak: 'How customers find you',
    sampleFinding:
      'We examine how easily the right customers can discover your business across search, local results, paid channels, and other digital touchpoints.',
    strategicFix:
      'Identify the channels and opportunities that can improve your reach and bring more relevant attention to the business.',
    typicalImpact: 'More Relevant Visibility',
    timeToAudit: 'Channel Review'
  },
  {
    id: 'experience',
    num: '03',
    name: 'Customer Experience',
    icon: TrendingUp,
    primaryLeak: 'What happens after discovery',
    sampleFinding:
      'We look at the journey from first visit to enquiry, purchase, booking, or another meaningful customer action.',
    strategicFix:
      'Highlight friction and opportunities to make the customer journey clearer, easier, and more effective.',
    typicalImpact: 'A Better Customer Journey',
    timeToAudit: 'Experience Review'
  },
  {
    id: 'technology',
    num: '04',
    name: 'Technology & Systems',
    icon: Cpu,
    primaryLeak: 'The systems behind the business',
    sampleFinding:
      'We look at the technology, platforms, integrations, and digital tools supporting the way your business operates.',
    strategicFix:
      'Identify disconnected systems, outdated technology, and opportunities to create a more connected digital foundation.',
    typicalImpact: 'Connected Digital Systems',
    timeToAudit: 'Systems Review'
  },
  {
    id: 'operations',
    num: '05',
    name: 'Digital Operations',
    icon: Inbox,
    primaryLeak: 'What happens behind the scenes',
    sampleFinding:
      'We examine how enquiries, customer information, internal workflows, and repetitive processes move through the business.',
    strategicFix:
      'Identify opportunities to simplify workflows, connect systems, and reduce unnecessary manual work.',
    typicalImpact: 'More Efficient Operations',
    timeToAudit: 'Workflow Review'
  },
  {
    id: 'growth',
    num: '06',
    name: 'Growth Opportunities',
    icon: Zap,
    primaryLeak: 'Where the next opportunity sits',
    sampleFinding:
      'We bring the findings together to understand which improvements could have the greatest impact on the next stage of your business.',
    strategicFix:
      'Prioritize the opportunities worth pursuing now and create a clearer direction for what comes next.',
    typicalImpact: 'A Clearer Path Forward',
    timeToAudit: 'Opportunity Review'
  }
];

export default function GrowthAudit({ onOpenAudit }: GrowthAuditProps) {
  const [activeVectorId, setActiveVectorId] = useState(vectors[0].id);
  const activeVector = vectors.find((v) => v.id === activeVectorId) || vectors[0];
  const IconComponent = activeVector.icon;

  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#090A10] text-white border-b border-white/[0.08] overflow-hidden">
      
      {/* Precision Structural Ambient Mesh (No boxes) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#670EF7]/[0.12] via-[#8B45FF]/[0.05] to-transparent blur-[160px] rounded-full" />
        <div 
          className="absolute inset-x-0 inset-y-[-100px] opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100%'
          }}
        />
      </div>

      <div className="relative w-full lg:max-w-[90%] mx-auto px-6 md:px-12 lg:px-16 z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8C45FF]/30 bg-[#8C45FF]/10 text-[#8C45FF] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Digital Growth Assessment</span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Find What&apos;s Holding Your <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-[#670EF7] via-[#8B45FF] to-white bg-clip-text text-transparent">
              Digital Growth Back.
            </span>
          </h2>

          <p 
            className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            We look at the digital parts of your business together — from your online
  presence and customer journey to marketing, technology, and the systems
  behind them — to identify where the biggest opportunities are.
          </p>
        </div>

        {/* --- INTERACTIVE DIAGNOSTIC WORKBENCH --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: 6 Diagnostic Vector Selectors (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span 
              className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2 block"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              What We Look At
            </span>

            {vectors.map((vec) => {
              const isSelected = activeVectorId === vec.id;
              const VecIcon = vec.icon;

              return (
                <button
                  key={vec.id}
                  onClick={() => setActiveVectorId(vec.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'border-[#670EF7] bg-[#121522] shadow-[0_10px_30px_rgba(103,14,247,0.2)] ring-1 ring-[#670EF7]/40'
                      : 'border-white/[0.08] bg-[#0E1018]/60 hover:bg-[#121522]/60 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected 
                        ? 'bg-[#670EF7] text-white shadow-[0_0_12px_rgba(103,14,247,0.4)]' 
                        : 'bg-white/[0.04] text-neutral-400 group-hover:text-white group-hover:bg-white/[0.08]'
                    }`}>
                      <VecIcon className="w-5 h-5" />
                    </div>

                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-[#8C45FF] font-semibold">
                          {vec.num}
                        </span>
                        <h4 
                          className={`text-sm sm:text-base font-bold truncate transition-colors ${
                            isSelected ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {vec.name}
                        </h4>
                      </div>
                      <p 
                        className="text-xs text-neutral-400 truncate mt-0.5"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {vec.primaryLeak}
                      </p>
                    </div>
                  </div>

                  <span className={`w-2 h-2 rounded-full shrink-0 ml-3 transition-colors ${
                    isSelected ? 'bg-[#670EF7] ring-4 ring-[#670EF7]/30' : 'bg-neutral-600'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT: Live Diagnostic Blueprint Terminal (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVector.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl border border-white/[0.12] bg-[#0E1018]/95 backdrop-blur-2xl p-7 sm:p-10 flex flex-col justify-between h-full shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
              >
                {/* Terminal Header */}
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#670EF7]/20 border border-[#670EF7]/30 flex items-center justify-center text-[#8C45FF]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono uppercase text-[#8C45FF] tracking-wider font-semibold">
                            Inspection Vector {activeVector.num}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Available in Free Audit
                          </span>
                        </div>
                        <h3 
                          className="text-xl sm:text-2xl font-extrabold text-white tracking-tight"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {activeVector.name}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-neutral-500 hidden sm:block">
                      {activeVector.timeToAudit}
                    </span>
                  </div>

                  {/* Terminal Data Readouts */}
                  <div className="space-y-6">
                    
                    {/* Common Friction Vulnerability */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#141824]/60 border border-white/[0.06]">
                      <div className="flex items-center gap-2 mb-2 text-red-600">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span 
                          className="text-xs uppercase tracking-wider font-bold"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Common Commercial Bottleneck Identified
                        </span>
                      </div>
                      <p 
                        className="text-sm text-neutral-300 leading-relaxed font-normal"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {activeVector.sampleFinding}
                      </p>
                    </div>

                    {/* Engineering Solution */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#141824]/60 border border-white/[0.06]">
                      <div className="flex items-center gap-2 mb-2 text-[#8C45FF]">
                        <Terminal className="w-4 h-4 shrink-0" />
                        <span 
                          className="text-xs uppercase tracking-wider font-bold"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Strategic Bixeltek Prescription
                        </span>
                      </div>
                      <p 
                        className="text-sm text-neutral-300 leading-relaxed font-normal"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {activeVector.strategicFix}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Terminal Bottom Action Console */}
                <div className="pt-8 mt-8 border-t border-white/[0.08] flex flex-col md:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <span 
                      className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Projected Outcome
                    </span>
                    <span 
                      className="text-xl sm:text-2xl font-black text-white tracking-tight"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {activeVector.typicalImpact}
                    </span>
                  </div>

                  <button
                    onClick={onOpenAudit}
                    className="px-7 py-3.5 rounded-xl bg-[#670EF7] hover:bg-[#8B45FF] text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-[0_8px_25px_rgba(103,14,247,0.35)] hover:shadow-[0_12px_32px_rgba(139,69,255,0.45)] inline-flex items-center justify-center gap-2 group cursor-pointer"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span>Request Full Diagnostic</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Trust Footnote */}
        <div 
          className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Human-Verified Review · 100% Free · No Generic Crawlers</span>
          </div>
          <span>Confidentiality Guaranteed</span>
        </div>

      </div>
    </section>
  );
}