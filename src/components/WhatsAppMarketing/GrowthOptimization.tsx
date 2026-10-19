'use client'
import { growthOptimization } from "@/data/whatsappmarketing";
import { 
  LineChart, 
  UserCheck, 
  PieChart, 
  FlaskConical, 
  Bot, 
  UserPlus, 
  Route, 
  CalendarClock, 
  RotateCw, 
  LifeBuoy, 
  Plug, 
  BadgeDollarSign,
  Activity,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";


const optimizationIcons = [
  LineChart, UserCheck, PieChart, FlaskConical, 
  Bot, UserPlus, Route, CalendarClock, 
  RotateCw, LifeBuoy, Plug, BadgeDollarSign
];

export default function GrowthOptimizationDashboard() {
  return (
    <section className="relative bg-black py-12 md:py-32 px-6 z-0 overflow-hidden">
      
      {/* Deep Blue Ambient Background Glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-900/15 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto md:max-w-[90%] relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Sticky Concept Column (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-bold tracking-wide uppercase shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <Activity size={16} className="animate-pulse" />
                <span>{growthOptimization.eyebrow}</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                {growthOptimization.title}
              </h2>
              
              <p className="text-lg text-gray-400 leading-relaxed mb-10">
                {growthOptimization.body}
              </p>

              <Link
            href='#contact'
            className="mt-10 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300"
          >
            Get Your Growth Startegy  <ArrowRight size={18} />
          </Link>

            </div>
          </div>

          {/* RIGHT SIDE: The Live Telemetry Dashboard (7 Columns) */}
          <div className="lg:col-span-7">
            
            {/* Massive Glassmorphic Dashboard Container */}
            <div className="bg-[#050505] rounded-[2rem] border border-white/10 p-2 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden group">
              
              {/* Internal Background Tech Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

              {/* Dashboard Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                  System_Optimization_Matrix.exe
                </div>
              </div>

              {/* The 12 Items displayed as a 2-column feed of active processes */}
              <div className="grid md:grid-cols-2 gap-x-4 gap-y-2 relative z-10">
                {growthOptimization.items.map((item, index) => {
                  const Icon = optimizationIcons[index];
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.04] transition-all duration-300 group/item cursor-default"
                    >
                      {/* Interactive Icon Box */}
                      <div className="flex-none mt-1 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-500/30 group-hover/item:text-blue-400 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      {/* Text & Active Status */}
                      <div className="flex-1">
                        <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed group-hover/item:text-white transition-colors duration-300">
                          {item}
                        </p>
                        
                        {/* Hidden "Active" tag that reveals on hover to simulate a live process */}
                        <div className="mt-2 flex items-center gap-1.5 opacity-0 h-0 group-hover/item:opacity-100 group-hover/item:h-auto transition-all duration-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                          <span className="text-[10px] uppercase tracking-widest font-bold text-blue-400">
                            Active Process
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Animated Scanline Overlay (Makes the dashboard feel alive) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent h-full w-full pointer-events-none animate-[scanline_8s_linear_infinite]" />

            </div>

          </div>

        </div>
        
      </div>

      {/* Tailwind Custom Animation for the Scanline */}
      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}