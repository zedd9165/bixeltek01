import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { valueProps } from "@/data/whatsappmarketing";
import whatsapp from '@/assets/why-whatsapp-2.png'

export default function ValueProps() {
  return (
    <section className="bg-black md:pb-16 overflow-hidden px-6">
      <div className="mx-auto grid md:max-w-[90%] items-center gap-12 lg:gap-16 lg:grid-cols-2">
                
        {/* Right Side: Copy & Clean Bullets */}
        <div className="flex flex-col items-start z-10">
          
          {/* Eyebrow */}
          <span className="text-blue-400 font-bold tracking-wide uppercase text-sm mb-4">
            {valueProps.eyebrow}
          </span>
          
          {/* Main Heading */}
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {valueProps.title}
          </h2>
          
          {/* Body */}
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            {valueProps.body}
          </p>

          {/* Clean, Flat List Structure (Mirroring your original <dl> setup) */}
          <dl className="mt-10 space-y-6">
            {valueProps.bullets.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-none mt-1">
                  <CheckCircle2 className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <dt className="text-lg font-bold text-white">{item.label}</dt>
                  <dd className="mt-1 text-base text-gray-400 leading-relaxed">{item.text}</dd>
                </div>
              </div>
            ))}
          </dl>

          {/* Solid Theme CTA */}
          <Link
            href={valueProps.cta.href}
            className="mt-10 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300"
          >
            {valueProps.cta.label} <ArrowRight size={18} />
          </Link>
          
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-lg lg:max-w-none pb-10">
           {/* Subtle ambient glow behind the image container */}
           <div className="absolute inset-0 bg-green-500/10 blur-[100px] rounded-full z-0" />
           
           {/* Gradient Border Wrapper (Matching your existing theme components) */}
           <div className="relative z-10 h-full w-full rounded-2xl bg-gradient-to-br from-green-500/50 via-black to-blue-500/50 p-[1px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden bg-black">
                <Image
                  src={whatsapp}
                  alt="WhatsApp catalog and broadcast interface"
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
           </div>
        </div>
        
      </div>
    </section>
  );
}