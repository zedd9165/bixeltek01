import { 
  BarChart3, 
  Send, 
  MousePointerClick, 
  ShoppingCart, 
  BadgeDollarSign, 
  Infinity, 
  TrendingUp,
  ChevronRight
} from "lucide-react";
import { roiMeasurement } from "@/data/whatsappmarketing";

// Map analytics-focused icons to the 6 metric widgets
const widgetIcons = [
  <Send key="1" className="w-6 h-6 text-emerald-400" />,
  <MousePointerClick key="2" className="w-6 h-6 text-teal-400" />,
  <ShoppingCart key="3" className="w-6 h-6 text-cyan-400" />,
  <BadgeDollarSign key="4" className="w-6 h-6 text-green-400" />,
  <Infinity key="5" className="w-6 h-6 text-emerald-300" />,
  <TrendingUp key="6" className="w-6 h-6 text-teal-300" />,
];

export default function RoiMeasurement() {
  return (
    <section className="relative bg-black py-12 md:py-32 overflow-hidden px-6 z-0">
      
      {/* Abstract Dashboard Lighting */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[500px] bg-emerald-900/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto md:max-w-[90%]">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center z-10 relative mb-20">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-wide">
            <BarChart3 size={16} />
            <span>{roiMeasurement.eyebrow}</span>
          </div>
          
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            {roiMeasurement.title}
          </h2>
          
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            {roiMeasurement.body}
          </p>
        </div>

        {/* The Conversion Funnel Pipeline (Visualizing the 7 steps) */}
        <div className="relative z-10 mb-20">
          {/* Label for the pipeline */}
          <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
            The WhatsApp Revenue Funnel
          </p>
          
          {/* Scrollable on mobile, horizontal flow on desktop */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-y-4 gap-x-2">
            {roiMeasurement.funnel.map((step, index) => {
              const isLast = index === roiMeasurement.funnel.length - 1;
              
              // Progressively darken the background to simulate deepening intent
              const bgOpacity = 10 + (index * 5); // 10%, 15%, 20%...
              
              return (
                <div key={index} className="flex items-center">
                  
                  {/* Funnel Node */}
                  <div 
                    className="flex items-center justify-center px-4 md:px-5 py-2.5 rounded-full border border-emerald-500/20 whitespace-nowrap transition-transform hover:-translate-y-1 cursor-default"
                    style={{ backgroundColor: `rgba(16, 185, 129, ${bgOpacity / 100})` }}
                  >
                    <span className={`text-sm md:text-base font-semibold ${isLast ? 'text-emerald-400 font-bold' : 'text-gray-300'}`}>
                      {step}
                    </span>
                  </div>

                  {/* Connecting Chevron (Hide after the last item) */}
                  {!isLast && (
                    <ChevronRight className="w-5 h-5 text-gray-700 mx-1 md:mx-2 flex-none" />
                  )}
                  
                </div>
              );
            })}
          </div>
        </div>

        {/* 3x2 KPI Widget Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {roiMeasurement.metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-[#050505] border border-white/60 overflow-hidden transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] hover:-translate-y-1"
            >
              
              {/* Dashboard "Widget" Header Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Subtle grid pattern inside the card to mimic analytics software */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative p-8">
                {/* Header row: Title + Icon aligned like a KPI card */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-50 transition-colors duration-300">
                    {metric.title}
                  </h3>
                  <div className="flex-none p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors duration-300">
                    {widgetIcons[index % widgetIcons.length]}
                  </div>
                </div>

                {/* Metric Description */}
                <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {metric.text}
                </p>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}