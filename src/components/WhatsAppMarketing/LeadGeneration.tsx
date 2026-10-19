import { leadGeneration } from "@/data/whatsappmarketing";
import { 
  MousePointerClick, 
  MonitorSmartphone, 
  QrCode, 
  Workflow, 
  Target,
  ArrowRightLeft,
  MessageCircle
} from "lucide-react";

export default function LeadGeneration() {
  return (
    <section className="relative bg-black py-12 md:py-32 px-6 z-0 overflow-hidden">
      
      {/* Abstract Ambient Background Glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-900/15 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto md:max-w-[90%] relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: The Sticky Summary Card (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32">
              
              {/* The Card */}
              <div className="bg-[#050505] border rounded-[2rem] p-8 md:p-10 relative overflow-hidden group border-blue-500/50 transition-colors duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* Tech Grid Background inside the card */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-50" />
                
                {/* Top Glowing Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Eyebrow */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wide uppercase">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span>{leadGeneration.eyebrow}</span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-8">
                    {leadGeneration.title}
                  </h2>

                  {/* Visual Abstract Flow inside the card */}
                  <div className="flex items-center gap-4 py-6 border-y border-white/10">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <MousePointerClick className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/10 via-blue-500/50 to-white/10 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                      <MessageCircle className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>

                  {/* Summary Conclusion */}
                  <p className="mt-8 text-gray-400 text-sm leading-relaxed font-medium">
                    This turns WhatsApp from a simple communication channel into a comprehensive lead-generation and qualification system that captures enquiries, gathers useful customer information, and moves them directly into the sales process.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Detailed Text (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="text-lg text-gray-400 leading-[1.8] space-y-8 pt-4">
              <p>
                {leadGeneration.body}
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}