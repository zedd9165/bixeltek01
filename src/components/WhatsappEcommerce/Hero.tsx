import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { hero } from "@/data/whatsappEcommerce";

export default function WhatsAppHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] bg-black -mt-32 overflow-hidden px-6 text-center">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/50 via-black/80 to-black z-0" />
      </div>

      {/* 2. Ambient Glows (Centered behind the text) */}
      <div className="absolute top-1/3 w-[600px] h-[600px] rounded-full bg-green-500/15 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none z-0" />

      {/* 3. Centered Content Stack */}
      <div className="relative z-10 mt-32 mx-auto flex flex-col items-center lg:max-w-[70%]">
        
        {/* Eyebrow - WhatsApp Themed */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-semibold tracking-wide backdrop-blur-md">
          <MessageCircle size={16} />
          <span>{hero.eyebrow}</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-xl">
          {hero.title}
        </h1>
        
        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-300 max-w-5xl drop-shadow-md">
          {hero.subtitle}
        </p>

        {/* Action Buttons - Swapped back to WhatsApp Green */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href={hero.primaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
          >
            {hero.primaryCta.label} <ArrowRight size={18} />
          </Link>
          
          <Link
            href={hero.secondaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:border-blue-500 hover:text-blue-400 px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
        
      </div>
    </section>
  );
}