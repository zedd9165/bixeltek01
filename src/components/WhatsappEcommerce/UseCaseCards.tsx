import { CheckCircle2 } from "lucide-react";
import { ecommerceUseCases } from "@/data/whatsappEcommerce";

export default function EcommerceUseCases() {
  return (
    <section className="relative bg-white py-12 md:py-32 px-6 overflow-hidden z-0">
      
      {/* Subtle background decoration to break up the flat white */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-green-100/50 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl opacity-70 -translate-x-1/3 translate-y-1/4 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-bold tracking-wide uppercase">
            {ecommerceUseCases.eyebrow}
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            {ecommerceUseCases.title}
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {ecommerceUseCases.body}
          </p>
        </div>

        {/* Cascading Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-20">
          {ecommerceUseCases.stages.map((stage, index) => {
          

            return (
              <div
                key={index}
                className={`group relative flex flex-col h-full bg-white rounded-3xl p-8 border shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.08)] border-green-200 transition-all duration-500 transform hover:-translate-y-2`}
              >
                
                {/* Stage Indicator Pill */}
                <span className="mb-8 inline-flex w-fit rounded-full bg-gray-50 border border-gray-200 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:bg-green-50 group-hover:border-green-200 group-hover:text-green-600 transition-colors duration-300">
                   {stage.stage}
                </span>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-green-700 transition-colors duration-300">
                  {stage.title}
                </h3>

                {/* Divider Line */}
                <div className="w-full h-px bg-gray-100 mb-6 group-hover:bg-green-100 transition-colors duration-300" />

                {/* Clean Feature List */}
                <ul className="flex-1 space-y-4">
                  {stage.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-green-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                      {point}
                    </li>
                  ))}
                </ul>
                
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}