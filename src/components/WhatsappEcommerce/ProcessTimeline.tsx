import { 
  Map, 
  Settings2, 
  Webhook, 
  Bot, 
  Rocket, 
  LineChart 
} from "lucide-react";
import { whatsappProcessSteps } from "@/data/whatsappEcommerce";

// Map chronological icons to the 6 steps
const stepIcons = [
  <Map key="1" className="w-8 h-8" />,
  <Settings2 key="2" className="w-8 h-8" />,
  <Webhook key="3" className="w-8 h-8" />,
  <Bot key="4" className="w-8 h-8" />,
  <Rocket key="5" className="w-8 h-8" />,
  <LineChart key="6" className="w-8 h-8" />,
];

export default function ProcessTimeline() {
  return (
    <section className="bg-black py-20 md:py-32 px-6 relative z-0 overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto md:max-w-[90%]">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-bold tracking-wide uppercase">
              <span>Implementation Process</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              How We Deploy Your WhatsApp Strategy
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-sm hidden lg:block pb-2">
            A structured, 6-phase engineering approach to launch and scale your automated commerce workflows.
          </p>
        </div>

        {/* The "Index / Directory" Layout (No Cards) */}
        <div className="flex flex-col w-full relative z-10 border-t border-white/10">
          {whatsappProcessSteps.map((step, index) => (
            <div 
              key={step.number}
              className="group relative flex flex-col lg:flex-row lg:items-center py-8 md:py-12 border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.02]"
            >
              
              {/* 1. Animated Hover Line (Replaces the basic border on hover) */}
              <div 
                className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${step.gradient} transition-all duration-700 ease-out`} 
              />

              {/* 2. Step Number & Icon (Left Column) */}
              <div className="flex items-center gap-6 w-full lg:w-1/4 mb-6 lg:mb-0">
                <span className="text-5xl md:text-7xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-500">
                  {step.number}
                </span>
                <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:border-transparent group-hover:bg-opacity-20 ${step.color}`}>
                  {stepIcons[index]}
                </div>
              </div>

              {/* 3. Title (Middle Column) */}
              <div className="w-full lg:w-1/3 mb-4 lg:mb-0 lg:pr-12">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                  {step.title}
                </h3>
              </div>

              {/* 4. Description (Right Column) */}
              <div className="w-full lg:w-5/12">
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.text}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}