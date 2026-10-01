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
  question: string;
  review: string;
}

const vectors: DiagnosticVector[] = [
  {
    id: 'presence',
    num: '01',
    name: 'Website & Digital Presence',
    icon: Layout,
    question: 'Does the experience explain your offer and make the next action clear?',
    review: 'We look at structure, messaging clarity, user experience, mobile performance and how effectively pages guide visitors toward enquiry or purchase.',
  },
  {
    id: 'search',
    num: '02',
    name: 'Search Visibility',
    icon: Search,
    question: 'Can the right customers find you when they look for your products or services?',
    review: 'We examine organic visibility, search relevance, technical site health and local search presence for your key products and services.',
  },
  {
    id: 'paid',
    num: '03',
    name: 'Paid Acquisition',
    icon: TrendingUp,
    question: 'Are Google Ads or Meta Ads bringing relevant enquiries at a workable cost?',
    review: 'We evaluate campaign targeting, search intent alignment, ad messaging, landing page relevance and conversion tracking accuracy.',
  },
  {
    id: 'journey',
    num: '04',
    name: 'Customer Journey',
    icon: Zap,
    question: 'What happens between a first visit, an enquiry and a sale?',
    review: 'We trace the path from initial visitor discovery to form submission, call or order to identify where prospective customers encounter friction.',
  },
  {
    id: 'technology',
    num: '05',
    name: 'Technology & Operations',
    icon: Cpu,
    question: 'Where are platform limitations or disconnected tools slowing the team down?',
    review: 'We review platform capabilities, CMS flexibility, system integrations and automated workflows supporting your digital operations.',
  },
  {
    id: 'measurement',
    num: '06',
    name: 'Measurement',
    icon: Inbox,
    question: 'Can you see which channels and experiences are creating business value?',
    review: 'We look at analytics setup, lead tracking, conversion attribution and reporting dependability across your marketing and sales tools.',
  },
];

export default function GrowthAudit({ onOpenAudit }: GrowthAuditProps) {
  const [activeVectorId, setActiveVectorId] = useState(vectors[0].id);
  const activeVector = vectors.find((v) => v.id === activeVectorId) || vectors[0];
  const IconComponent = activeVector.icon;

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#090A10] text-white border-b border-white/[0.08] overflow-hidden">
      
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
        <div className="max-w-4xl mb-16 sm:mb-20 mx-auto text-center">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8C45FF]/30 bg-[#8C45FF]/10 text-[#8C45FF] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>A PRACTICAL FIRST STEP</span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Not sure where the biggest opportunity is?{' '}
            <span className="bg-gradient-to-r from-[#670EF7] via-[#8B45FF] to-white bg-clip-text text-transparent">
              Let’s find out.
            </span>
          </h2>

          <p 
            className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            You may know what is not working without knowing which part to fix first. Tell us about the business and the result you want. We will look at the relevant parts of your website, marketing or digital systems, discuss the most visible gaps and recommend a sensible next step.
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
              Areas We Review
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
                        <h3 
                          className={`text-sm sm:text-base font-bold truncate transition-colors ${
                            isSelected ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {vec.name}
                        </h3>
                      </div>
                      <p 
                        className="text-xs text-neutral-400 truncate mt-0.5"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {vec.question}
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
                            Assessment Focus {activeVector.num}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#670EF7]/15 text-[#8C45FF] border border-[#670EF7]/30">
                            Initial Review
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
                  </div>

                  {/* Terminal Data Readouts */}
                  <div className="space-y-6">
                    
                    {/* Key Question */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#141824]/60 border border-white/[0.06]">
                      <div className="flex items-center gap-2 mb-2 text-[#8C45FF]">
                        <AlertCircle className="w-4 h-4 shrink-0 text-[#670EF7]" />
                        <span 
                          className="text-xs uppercase tracking-wider font-bold"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Key Question
                        </span>
                      </div>
                      <p 
                        className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {activeVector.question}
                      </p>
                    </div>

                    {/* What We Review */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#141824]/60 border border-white/[0.06]">
                      <div className="flex items-center gap-2 mb-2 text-[#8C45FF]">
                        <Terminal className="w-4 h-4 shrink-0" />
                        <span 
                          className="text-xs uppercase tracking-wider font-bold"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          What We Review
                        </span>
                      </div>
                      <p 
                        className="text-sm text-neutral-300 leading-relaxed font-normal"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {activeVector.review}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Terminal Bottom Action Console */}
                <div className="pt-8 mt-8 border-t border-white/[0.08] flex flex-col md:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <span 
                      className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      What You Receive
                    </span>
                    <p 
                      className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      An initial discussion of observations and recommended priorities. Agree any detailed audit or project scope separately.
                    </p>
                  </div>

                  <button
                    onClick={onOpenAudit}
                    className="px-7 py-3.5 rounded-xl bg-[#670EF7] hover:bg-[#8B45FF] text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-[0_8px_25px_rgba(103,14,247,0.35)] hover:shadow-[0_12px_32px_rgba(139,69,255,0.45)] inline-flex items-center justify-center gap-2 group cursor-pointer shrink-0"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span>Request an Initial Conversation</span>
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
            <span>Straightforward Review · Confidential Conversation · Practical Next Steps</span>
          </div>
          <span>No Obligation</span>
        </div>

      </div>
    </section>
  );
}