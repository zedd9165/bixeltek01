import { 
  Magnet, 
  ListFilter, 
  ShoppingBag, 
  Megaphone, 
  Headphones, 
  BellRing, 
  ShieldCheck, 
  Repeat 
} from "lucide-react";
import { whatsappUseCases } from "@/data/whatsappmarketing";

// Map 8 specific icons to the 8 use cases
const useCaseIcons = [
  <Magnet key="1" className="w-6 h-6" />,
  <ListFilter key="2" className="w-6 h-6" />,
  <ShoppingBag key="3" className="w-6 h-6" />,
  <Megaphone key="4" className="w-6 h-6" />,
  <Headphones key="5" className="w-6 h-6" />,
  <BellRing key="6" className="w-6 h-6" />,
  <ShieldCheck key="7" className="w-6 h-6" />,
  <Repeat key="8" className="w-6 h-6" />,
];

export default function WhatsAppUseCases() {
  return (
    <section className="relative bg-slate-50 py-12 md:py-32 px-6 z-0 overflow-hidden">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-blue-200/40 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky-200/40 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Abstract Tech Grid pattern (Darker for light mode) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:30px_30px] -z-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

      <div className="mx-auto md:max-w-[90%]">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 relative z-10">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-bold tracking-wide uppercase shadow-sm">
            <span>{whatsappUseCases.eyebrow}</span>
          </div>
          
          <h2 className="mt-4 text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            {whatsappUseCases.title}
          </h2>
          
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {whatsappUseCases.body}
          </p>
        </div>

        {/* The 4x2 SaaS Capability Matrix (Light Mode) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {whatsappUseCases.cards.map((card, index) => (
            <div
              key={card.title}
              className="group relative bg-white rounded-3xl border border-slate-200 hover:border-blue-300 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:-translate-y-1"
            >
              
              {/* Top Animated Border Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Hover Ambient Radial Glow inside the card */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="p-8 flex flex-col h-full relative z-10">
                
                {/* Header: Icon & Title */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-600 transition-all duration-500 mb-5 shadow-sm group-hover:shadow-md">
                    {useCaseIcons[index]}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                    {card.title}
                  </h3>
                </div>

                {/* Description Text */}
                <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-1">
                  {card.text}
                </p>

                {/* Granular Capabilities (The feature tags) */}
                <div className="pt-6 border-t border-slate-100 group-hover:border-blue-100 transition-colors duration-500">
                  <div className="flex flex-wrap gap-2">
                    {card.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-700 transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}