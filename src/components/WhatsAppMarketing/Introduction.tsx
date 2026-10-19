import { Target, ShoppingBag, Headset, ShieldCheck } from "lucide-react";

export const introduction = {
  eyebrow: "WHAT IS WHATSAPP MARKETING?",
  title: "WhatsApp Marketing Goes Beyond Sending Promotional Messages",
  lead: "It is the shift from passive broadcasting to active, conversational commerce.",
  bodyP1:
    "WhatsApp marketing is a comprehensive ecosystem for businesses to utilize the WhatsApp Business Platform for marketing, direct sales, customer engagement, and real-time support. It empowers brands to build awareness, generate high-intent leads, promote catalogs, and seamlessly retarget customers right where they already chat.",
  bodyP2:
    "But it doesn't stop at marketing. With robust integrations across your CRM, e-commerce backend, and custom applications, WhatsApp becomes your central communication hub. From delivering secure OTPs and transactional updates to creating highly personalized, multi-step customer journeys, it connects your brand to customers from their first interaction through to purchase, support, and long-term retention.",
  pillars: [
    { label: "Marketing & Growth", icon: <Target className="w-5 h-5" /> },
    { label: "Sales & Commerce", icon: <ShoppingBag className="w-5 h-5" /> },
    { label: "Customer Support", icon: <Headset className="w-5 h-5" /> },
    { label: "Utility & Auth (OTP)", icon: <ShieldCheck className="w-5 h-5" /> },
  ]
};

export default function WhatsAppIntroduction() {
  return (
    <section className="relative bg-black py-24 sm:py-32 md:px-6 z-0 overflow-hidden">
      
      {/* Deep Blue Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-[90%]">
        
        {/* Asymmetrical Typography Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <div className="md:col-span-4 bg-gradient-to-br from-green-600 to-green-900 p-10 lg:p-12 rounded-[2.5rem] relative overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.2)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[50px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-center">
              <span className="text-sm font-black text-white uppercase tracking-widest mb-8 block">
                Core Capabilities
              </span>
              
              <div className="flex flex-col gap-4">
                {introduction.pillars.map((pillar, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm text-white hover:bg-black/40 hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <div className="text-white">
                      {pillar.icon}
                    </div>
                    <span className="font-bold text-lg">{pillar.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-8 bg-[#050505] p-4 md:p-10 lg:p-14 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
            {/* Tech grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-50" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-bold tracking-wide uppercase">
                {introduction.eyebrow}
              </div>
              
              <h2 className="text-3xl md:text-5xl  font-black text-white leading-[1.1] tracking-tight mb-8">
                {introduction.title}
              </h2>

              <div className="pl-6 border-l-4 border-blue-500">
                <p className="text-xl md:text-2xl font-medium text-gray-300 leading-relaxed">
                  "{introduction.lead}"
                </p>
              </div>
            </div>
          </div>

          {/* Panel 2: Core Capabilities (Spans 4 Columns) */}
          

          {/* Panel 3: Body Paragraph 1 (Spans 6 Columns) */}
          <div className="md:col-span-6 bg-white/[0.02] p-8 lg:p-10 rounded-[2rem] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500">
            <div className="w-12 h-1 bg-blue-500 rounded-full mb-6" />
            <p className="text-lg text-gray-400 leading-relaxed">
              {introduction.bodyP1}
            </p>
          </div>

          {/* Panel 4: Body Paragraph 2 (Spans 6 Columns) */}
          <div className="md:col-span-6 bg-white/[0.02] p-8 lg:p-10 rounded-[2rem] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-500">
            <div className="w-12 h-1 bg-indigo-500 rounded-full mb-6" />
            <p className="text-lg text-gray-400 leading-relaxed">
              {introduction.bodyP2}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}