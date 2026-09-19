import { campaignTypes } from "@/data/whatsappmarketing";
import { 
  Megaphone, 
  Rocket, 
  CalendarHeart, 
  Clock, 
  RefreshCcw, 
  Zap, 
  TrendingUp, 
  MessageSquareQuote,
  Target
} from "lucide-react";

const campaignIcons = [
  Megaphone, 
  Rocket, 
  CalendarHeart, 
  Clock, 
  RefreshCcw, 
  Zap, 
  TrendingUp, 
  MessageSquareQuote
];

export default function WhatsAppCampaigns() {
  return (
    <section className="relative bg-black py-12 md:py-32 px-6 z-0 overflow-hidden">
      
      {/* Abstract Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto md:max-w-[90%] relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-bold tracking-wide uppercase">
              <Target size={16} />
              <span>{campaignTypes.eyebrow}</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              {campaignTypes.title}
            </h2>
          </div>
          <p className="text-lg text-gray-400 leading-relaxed max-w-sm">
            {campaignTypes.body}
          </p>
        </div>

        {/* 
          The Asymmetrical Bento Grid:
          Using a 4-column grid on large screens. We carefully map out the col-spans 
          so the 8 items fit perfectly into an irregular, beautiful mosaic.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {campaignTypes.campaigns.map((campaign, index) => {
            const Icon = campaignIcons[index];
            
            // Logic to determine span sizes to create the asymmetrical layout
            let spanClass = "lg:col-span-1";
            if (index === 0) spanClass = "lg:col-span-2"; // Row 1 (2+1+1 = 4)
            if (index === 4) spanClass = "lg:col-span-2"; // Row 2 (1+2+1 = 4)
            if (index === 6 || index === 7) spanClass = "lg:col-span-2";

            const isWide = spanClass === "lg:col-span-2";

            return (
              <div 
                key={index} 
                className={`group relative bg-[#050505] rounded-3xl border border-white/50 hover:border-blue-500/40 hover:bg-white/[0.02] transition-all duration-500 overflow-hidden flex flex-col p-8 md:p-10 ${spanClass}`}
              >
                
                {/* Tech Grid Background (Fades in on hover) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Ambient Top Glow */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className={`relative z-10 flex ${isWide ? 'flex-col sm:flex-row items-start sm:items-center gap-6' : 'flex-col h-full'}`}>
                  
                  {/* Icon Box */}
                  <div className={`flex-none rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 group-hover:text-blue-400 transition-all duration-500 ${isWide ? 'w-16 h-16' : 'w-12 h-12 mb-6'}`}>
                    <Icon className={isWide ? 'w-8 h-8' : 'w-6 h-6'} />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className={`font-bold text-white group-hover:text-blue-100 transition-colors duration-300 ${isWide ? 'text-2xl mb-2' : 'text-xl mb-3'}`}>
                      {campaign.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {campaign.text}
                    </p>
                  </div>

                </div>

                {/* Giant Faded Icon Watermark (Visual interest for the background) */}
                <Icon className={`absolute -bottom-6 -right-6 text-white opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none ${isWide ? 'w-64 h-64' : 'w-40 h-40'}`} />

              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}