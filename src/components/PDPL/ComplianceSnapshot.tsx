'use client';
import React from 'react';
import { 
  Bell, 
  FileCheck2, 
  ShieldCheck, 
  Lock, 
  Server, 
  Activity,
  ArrowRight
} from "lucide-react";

// Expanded Data
const stats = [
  { value: "72 Hrs", label: "Max breach response time" },
  { value: "Zero", label: "Missed regulatory deadlines" },
  { value: "Day 1", label: "Audit-ready from engagement" },
  { value: "256-bit", label: "Data encryption standard" },
];

const liveFeed = [
  {
    icon: Bell,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    title: "Data subject request (DSR) received",
    status: "Auto-logged",
    time: "2m ago",
  },
  {
    icon: FileCheck2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    title: "User consent record updated",
    status: "Verified",
    time: "14m ago",
  },
  {
    icon: Server,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    title: "Data localization check passed",
    status: "Compliant",
    time: "1h ago",
  },
  {
    icon: ShieldCheck,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    title: "Quarterly PDPL review scheduled",
    status: "Automated",
    time: "Today",
  },
];

export default function ComplianceSnapshot() {
  return (
    <section className="relative  py-24 md:py-32 px-6 z-0 overflow-hidden">
      
      {/* Immersive Ambient Security Glows */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-emerald-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

      <div className="mx-auto md:max-w-[90%] relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: The Pitch (6 Columns) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-bold tracking-wide uppercase">
              <Lock size={16} />
              <span>Enterprise-Grade Privacy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Turn Compliance Into <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                A Non-Issue
              </span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-10">
              A properly built PDPL and GDPR compliance program runs quietly in the background. It isn&apos;t just a legal shield—it&apos;s a business advantage. Data requests are handled, incidents are logged, and absolutely nothing catches your team off guard.
            </p>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-xl mb-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.04] hover:border-white/10 transition-colors duration-300 group"
                >
                  <div className="text-2xl md:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-gray-500 font-medium leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:hello@bixeltek.com"
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-[#030712] font-bold text-base px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10">Book Your Free Assessment</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

          </div>

          {/* RIGHT SIDE: The Live Telemetry Dashboard (6 Columns) */}
          <div className="lg:col-span-6 relative">
            
            <div className="w-full bg-[#0a0a0a] rounded-[2rem] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.8)] relative overflow-hidden group">
              
              {/* Dashboard Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02] relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 uppercase tracking-widest">
                  <Activity size={14} className="animate-pulse" />
                  Live Compliance Feed
                </div>
              </div>

              {/* Feed Content */}
              <div className="p-6 md:p-8 space-y-4 relative z-10">
                {liveFeed.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300"
                    style={{
                      animation: 'fadeInUp 0.6s ease-out forwards',
                      animationDelay: `${index * 150}ms`,
                      opacity: 0,
                    }}
                  >
                    <div className={`flex-none w-10 h-10 rounded-full flex items-center justify-center ${item.bg} ${item.color}`}>
                      <item.icon size={18} />
                    </div>
                    
                    <div className="flex-1 min-w-0 pt-0.5">
                      <p className="text-sm md:text-base font-bold text-white truncate mb-1">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.color.replace('text', 'bg')}`} />
                          {item.status}
                        </span>
                        <span className="text-xs font-mono text-gray-600">
                          [{item.time}]
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated Scanline Overlay (Makes the dashboard feel alive) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent h-full w-full pointer-events-none scanline-animation" />

            </div>

          </div>

        </div>
      </div>

      <style jsx>{`
        .scanline-animation {
          animation: scanline 6s linear infinite;
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}