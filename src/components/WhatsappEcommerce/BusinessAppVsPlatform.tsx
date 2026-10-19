import { Check, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { businessAppVsPlatform } from "@/data/whatsappEcommerce";
import Link from "next/link";

export default function BusinessAppVsPlatform() {
  const appData = businessAppVsPlatform.comparison[0];
  const platformData = businessAppVsPlatform.comparison[1];

  return (
    <section className="relative bg-black py-24 sm:py-32 px-6 overflow-hidden z-0">
      
      {/* Background ambient lighting targeting the "Platform" side */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-green-900/20 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 -z-10" />

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20 relative z-10">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-bold tracking-wide uppercase">
            <span>{businessAppVsPlatform.eyebrow}</span>
          </div>
          
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            {businessAppVsPlatform.title}
          </h2>
          
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            {businessAppVsPlatform.body}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch z-10">
          
          {/* VS Badge (Floating in the center on Desktop) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black border border-white/10 rounded-full items-center justify-center z-20 shadow-[0_0_30px_rgba(0,0,0,0.8)] text-xl font-black text-gray-400 italic">
            VS
          </div>

          {/* CARD 1: WhatsApp Business App (Muted / Basic Styling) */}
          <div className="relative flex flex-col p-8 md:p-10 rounded-3xl bg-[#050505] border border-white/60 transition-transform duration-500 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-white mb-2">
              {appData.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed min-h-[60px]">
              {appData.bestFor}
            </p>

            <div className="w-full h-px bg-white/50  my-8" />

            <ul className="space-y-5 flex-1">
              {appData.capabilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-400">
                  <Check className="w-5 h-5 flex-none text-gray-600 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CARD 2: WhatsApp Business Platform (Premium / Highlighted Styling) */}
          <div className="relative flex flex-col p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-green-500/50 shadow-[0_0_50px_rgba(34,197,94,0.1)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(34,197,94,0.2)]">
            
            {/* "Recommended" Badge */}
            <div className="absolute -top-4 left-8 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-green-500 text-black text-xs font-black tracking-wide uppercase shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              <Zap size={14} fill="currentColor" /> Recommended for Growth
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 mt-2">
              {platformData.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed min-h-[60px]">
              {platformData.bestFor}
            </p>

            <div className="w-full h-px bg-gradient-to-r from-green-500/30 to-transparent my-8" />

            <ul className="space-y-5 flex-1">
              {platformData.capabilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 flex-none text-green-500 mt-0.5" />
                  <span className="leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA specific to the Platform */}
            <div className="mt-10">
              <Link href="#contact" className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-4 rounded-xl transition-colors duration-300">
                Integrate the Platform <ArrowRight size={18} />
              </Link>
            </div>
            
          </div>

        </div>
        
      </div>
    </section>
  );
}