import Image from "next/image";
import { AlertCircle } from "lucide-react";
import { painPoints } from "@/data/whatsappEcommerce";
import painPointsImage1 from '@/assets/pain-whatsapp.png'
import painPointsImage2 from '@/assets/pain-whatsapp-2.png'

export default function PainPoints() {
  return (
    <section className="bg-black py-12 md:py-32 overflow-hidden px-6">
      {/* 1. Asymmetrical Grid: 12 columns total for better space distribution */}
      <div className="mx-auto md:max-w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Copy (Takes up 5 columns) */}
        <div className="flex flex-col items-start z-10 order-2 lg:order-1 ">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-semibold tracking-wide">
            <AlertCircle size={16} />
            <span>{painPoints.eyebrow}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            {painPoints.title}
          </h2>
          
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            {painPoints.body}
          </p>

          <ul className="mt-10 space-y-4 w-full">
            {painPoints.points.map((point, index) => (
              <li 
                key={index} 
                className="group flex gap-4 p-5 rounded-2xl border border-white/5 bg-[#050505] hover:bg-red-500/5 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="mt-1 flex-none">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                    <AlertCircle className="text-red-500 w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{point.label}</h4>
                  <p className="mt-1 text-base text-gray-400 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Cascading Images (Takes up 7 columns for maximum size) */}
        <div className="relative w-full order-1 lg:order-2 flex flex-col pt-10">
           
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-600/15 blur-[150px] rounded-full z-0 pointer-events-none" />
           
           {/* IMAGE 1: Top Image, aligned left, spans 90% of the massive container */}
           <div className="relative z-10 w-[95%] md:w-[90%] self-start rounded-2xl bg-gradient-to-br from-red-500/30 via-black to-neutral-800 p-[1px] shadow-2xl">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black group">
                {/* Changed to object-contain or object-top cover so screenshot text isn't cut off */}
                <Image
                  src={painPointsImage2}
                  alt="E-commerce checkout funnel"
                  fill
                  className="object-cover object-top opacity-60 grayscale-[40%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
           </div>

           {/* IMAGE 2: Bottom Image, aligned right, spans 85% of container, overlaps vertically */}
           {/* The negative top margin (-mt-24) creates the overlap without shrinking the width! */}
           <div className="relative z-20 w-[90%] md:w-[85%] self-end -mt-16 md:-mt-24 rounded-2xl bg-gradient-to-br from-red-500/50 via-black to-neutral-800 p-[1px] shadow-[0_30px_60px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:-translate-y-2">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black border-4 border-black group">
                <Image
                  src={painPointsImage1}
                  alt="Abandoned cart notification"
                  fill
                  className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
           </div>

        </div>
        
      </div>
    </section>
  );
}