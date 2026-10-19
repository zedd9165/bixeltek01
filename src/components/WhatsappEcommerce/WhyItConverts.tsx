import { 
  Zap, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  ShoppingCart, 
  Fingerprint, 
  Network, 
  Repeat 
} from "lucide-react";
import { whyItConverts } from "@/data/whatsappEcommerce";

// Map 8 distinct icons to the 8 cards
const cardIcons = [
  <MessageSquare key="1" className="w-8 h-8 text-green-400" />,
  <ShoppingCart key="2" className="w-8 h-8 text-blue-400" />,
  <Users key="3" className="w-8 h-8 text-purple-400" />,
  <Zap key="4" className="w-8 h-8 text-teal-400" />,
  <Fingerprint key="5" className="w-8 h-8 text-pink-400" />,
  <Network key="6" className="w-8 h-8 text-yellow-400" />,
  <TrendingUp key="7" className="w-8 h-8 text-cyan-400" />,
  <Repeat key="8" className="w-8 h-8 text-indigo-400" />,
];

// Map 8 matching hover glow colors
const hoverGlows = [
  "group-hover:bg-green-500/30",
  "group-hover:bg-blue-500/30",
  "group-hover:bg-purple-500/30",
  "group-hover:bg-teal-500/30",
  "group-hover:bg-pink-500/30",
  "group-hover:bg-yellow-500/30",
  "group-hover:bg-cyan-500/30",
  "group-hover:bg-indigo-500/30",
];

// Map 8 matching border colors
const borderColors = [
  "border-green-500/40",
  "border-blue-500/40",
  "border-purple-500/40",
  "border-teal-500/40",
  "border-pink-500/40",
  "border-yellow-500/40",
  "border-cyan-500/40",
  "border-indigo-500/40",
];

export default function WhyItConverts() {
  return (
    <section className="relative bg-black py-12 md:py-32 overflow-hidden px-6 z-0">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-900/20 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center z-10 relative">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-semibold tracking-wide">
            <span>{whyItConverts.eyebrow}</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            {whyItConverts.title}
          </h2>
        </div>

        {/* Eye-Catching Bento Grid (Now natively handles all 8 items) */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {whyItConverts.cards.map((card, index) => (
            <div
              key={card.title}
              className={`group relative rounded-3xl border ${borderColors[index]} bg-gradient-to-b from-white/10 to-transparent p-[1px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]`}
            >
              {/* Inner Card */}
              <div className="relative h-full rounded-[23px] bg-[#050505] p-8 overflow-hidden">
                
                {/* Interactive Glowing Orb (Follows the hover) */}
                <div 
                  className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[40px] transition-colors duration-700 bg-white/5 ${hoverGlows[index]}`} 
                />

                {/* Icon Container with subtle glass effect */}
                <div className="relative z-10 mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {cardIcons[index % cardIcons.length]}
                </div>

                {/* Text Content */}
                <h3 className="relative z-10 text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="relative z-10 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  {card.text}
                </p>

                {/* Decorative Tech Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}