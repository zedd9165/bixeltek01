import { 
  ShieldCheck, 
  UserCheck, 
  FileCheck, 
  Target, 
  UserX, 
  Activity, 
  Settings2 
} from "lucide-react";
import { compliance } from "@/data/whatsappmarketing";

// Map specific trust-oriented icons to the compliance rules
const complianceIcons = [
  <UserCheck key="1" className="w-7 h-7 text-green-600" />,
  <FileCheck key="2" className="w-7 h-7 text-green-600" />,
  <Target key="3" className="w-7 h-7 text-green-600" />,
  <UserX key="4" className="w-7 h-7 text-green-600" />,
  <Activity key="5" className="w-7 h-7 text-green-600" />,
  <Settings2 key="6" className="w-7 h-7 text-green-600" />,
];

export default function ComplianceSection() {
  return (
    <section className="relative bg-slate-50 py-12 md:py-32 px-6 overflow-hidden z-0">
      
      {/* Massive Abstract Security Watermark */}
      <ShieldCheck 
        className="absolute -top-32 -right-32 w-[600px] h-[600px] text-slate-200/50 -rotate-12 pointer-events-none -z-10" 
        strokeWidth={0.5} 
      />
      <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-green-50/50 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto md:max-w-[90%]">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20 relative z-10">
          
          {/* Trust Badge Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 rounded-full border border-green-200 bg-white shadow-sm text-green-700 text-sm font-bold tracking-wide uppercase">
            <ShieldCheck size={16} className="text-green-500" />
            <span>{compliance.eyebrow}</span>
          </div>
          
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            {compliance.title}
          </h2>
          
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {compliance.body}
          </p>
        </div>

        {/* 3x2 Trust/Policy Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {compliance.cards.map((card, index) => (
            <div
              key={card.title}
              className="group relative bg-white p-8 rounded-[2rem] border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.08)] hover:border-green-200 transition-all duration-500 transform hover:-translate-y-1"
            >
              
              {/* Top Right "Verified" indicator (Reveals on hover) */}
              <div className="absolute top-8 right-8">
                <ShieldCheck className="w-6 h-6 text-slate-100 group-hover:text-green-400 transition-colors duration-500" />
              </div>

              {/* Icon Container - Pill Shaped */}
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 border border-green-100 group-hover:bg-green-500 group-hover:border-green-500 transition-colors duration-500">
                {/* Clone the icon to swap its color on hover to pure white */}
                <div className="group-hover:text-white transition-colors duration-500 [&>svg]:w-7 [&>svg]:h-7 [&>svg]:text-green-600 group-hover:[&>svg]:text-white">
                  {complianceIcons[index]}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {card.text}
              </p>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}