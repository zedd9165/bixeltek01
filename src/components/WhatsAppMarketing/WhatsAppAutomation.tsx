import Image from "next/image";
import { 
  Bot, 
  MessageSquareReply, 
  Sparkles, 
  Clock, 
  RefreshCcw, 
  ShieldCheck, 
  Send, 
  ArrowRight
} from "lucide-react";
import { automation } from "@/data/whatsappmarketing";
import automationImg from "@/assets/whatsapp-automation.png"
import Link from "next/link";

export default function WhatsAppAutomation() {
  return (
    <section className="relative bg-black py-12 md:py-32 px-6 z-0 overflow-hidden">
      
      {/* Deep Blue Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto md:max-w-[90%] relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Sticky Image Frame */}
          <div className="w-full relative lg:sticky lg:top-32">
            
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] w-full max-h-[700px] rounded-[2.5rem] bg-[#050505] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              
              {/* Abstract grid behind the image (visible if image is transparent or loading) */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              <Image 
                src={automationImg}
                alt="WhatsApp Automation Workflow"
                fill
                className="object-cover transition-opacity duration-500 group-hover:scale-105"
              />
              {/* Ambient overlay gradient for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating Decorative UI Widget (Overlaps the image) */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#0a0a0a] border border-blue-500/30 rounded-2xl p-5 shadow-2xl shadow-blue-900/20 backdrop-blur-md flex items-center gap-4 animate-[bounce_5s_infinite_alternate]">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400">
                <Bot size={24} />
              </div>
              <div>
                <span className="block text-sm font-bold text-white mb-1">AI Automation Running</span>
                <span className="flex items-center gap-1.5 text-xs text-blue-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  Processing 24/7
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: The Scannable Manuscript (Your massive text broken down) */}
          <div className="w-full relative z-10 pt-8 lg:pt-0">
            
            {/* Header Area */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-bold tracking-wide uppercase">
                <Sparkles size={16} />
                <span>{automation.eyebrow}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.15]">
                {automation.title}
              </h2>
            </div>

            {/* The Text Content parsed into visually digestible chunks with inline components */}
            <div className="text-sm md:text-lg text-gray-400 leading-[1.8] space-y-8 border-l border-white/10 pl-6 md:pl-8 relative">
              
              {/* Highlight bar hugging the left border */}
              <div className="absolute top-0 left-[-1px] w-[2px] h-1/4 bg-gradient-to-b from-blue-500 to-transparent" />

              <p>
                {automation.body}
              </p>

              <Link
            href='#contact'
            className="mt-10 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300"
          >
            Get Your Automation  <ArrowRight size={18} />
          </Link>
              
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}