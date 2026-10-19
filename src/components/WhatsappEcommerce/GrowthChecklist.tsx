import { CheckCircle2 } from "lucide-react";
import { growthChecklist } from "@/data/whatsappEcommerce";

export default function GrowthChecklist() {
  return (
    <section className="relative bg-black py-20 md:py-32 overflow-hidden px-6">
      {/* Ambient background glow to anchor the section */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto md:max-w-[90%] grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Heading & Context (Takes up 5 columns) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          
          {/* Eyebrow - Dark mode WhatsApp Green */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-bold tracking-wide uppercase backdrop-blur-sm">
            <span>Growth Readiness</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            {growthChecklist.title}
          </h2>
          
          <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-lg">
            {growthChecklist.body}
          </p>
        </div>

        {/* Right Column: The Interactive Checklist Grid (Takes up 7 columns) */}
        <div className="lg:col-span-7">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {growthChecklist.items.map((item, index) => (
              <div 
                key={index}
                className="group flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-[#050505] border border-white hover:bg-white/[0.02] hover:border-green-500/50 hover:shadow-[0_10px_40px_rgba(34,197,94,0.15)] transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="mt-0.5 flex-none relative">
                  {/* Glowing pulse effect on hover */}
                  <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <CheckCircle2 className="relative z-10 w-6 h-6 text-green-500 group-hover:text-green-400 transition-colors" />
                </div>
                
                {/* Checklist Text */}
                <span className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}