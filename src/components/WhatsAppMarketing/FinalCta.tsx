'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket } from "lucide-react";
import { finalCta } from "@/data/whatsappmarketing"; // Adjust path as needed

export default function FinalCta() {
  // We use an array to generate meteors so we can easily inject inline styles for delays & durations
  const meteors = [
    { top: '-10%', left: '20%', delay: '0s', duration: '3s' },
    { top: '10%', left: '80%', delay: '1.2s', duration: '4s' },
    { top: '30%', left: '10%', delay: '2.5s', duration: '3.5s' },
    { top: '-20%', left: '60%', delay: '0.5s', duration: '2.5s' },
    { top: '20%', left: '100%', delay: '3.2s', duration: '4.5s' },
  ];

  return (
    <section className="relative bg-[#030712] py-24 md:py-48 px-6 z-0 overflow-hidden flex items-center justify-center min-h-[70vh]">
      
      {/* 1. Deep Space Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-blue-900/20 blur-[200px] rounded-[100%] pointer-events-none -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/20 blur-[150px] rounded-[100%] pointer-events-none -z-20" />

      {/* 2. The Shooting Stars (Meteor Shower Background) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {meteors.map((meteor, index) => (
          <div 
            key={index}
            className="meteor"
            style={{
              top: meteor.top,
              left: meteor.left,
              animationDelay: meteor.delay,
              animationDuration: meteor.duration
            }}
          />
        ))}
      </div>

      {/* 3. The Full-Width Focused Content */}
      <div className="mx-auto max-w-4xl relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <div className="content-fade-1 opacity-0 inline-flex items-center justify-center gap-2 px-5 py-2 mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-black tracking-widest uppercase shadow-[0_0_30px_rgba(59,130,246,0.2)]">
          <Rocket size={16} className="text-blue-400" />
          <span>{finalCta.eyebrow}</span>
        </div>
        
        {/* Title */}
        <h2 className="content-fade-2 opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
          Find the WhatsApp Opportunities <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]">
            Your Business Is Missing
          </span>
        </h2>
        
        {/* Body */}
        <p className="content-fade-3 opacity-0 text-lg md:text-xl lg:text-2xl text-blue-100/70 leading-relaxed max-w-3xl mb-12">
          {finalCta.body}
        </p>

        {/* Massive Centered Button */}
        {/* <div className="content-fade-4 opacity-0 w-full sm:w-auto">
          <Link 
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-4 bg-white text-[#030712] font-black text-lg md:text-xl px-12 py-6 rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(59,130,246,0.6)] w-full sm:w-auto"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              {finalCta.ctaLabel}
            </span>
            <ArrowRight size={24} className="relative z-10 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
          </Link>
        </div> */}
        
      </div>

      <style jsx>{`
        /* =========================================
           1. METEOR SHOWER ANIMATIONS
           ========================================= */
        .meteor {
          position: absolute;
          width: 250px;
          height: 2px;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(59,130,246,0.8) 80%, rgba(255,255,255,1) 100%);
          border-radius: 999px;
          filter: drop-shadow(0 0 8px rgba(59,130,246,1));
          /* Initial position angled downwards */
          transform: rotate(215deg) translateX(0); 
          /* The animation is assigned here, delays/durations are injected via React style */
          animation-name: meteor-shower;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          opacity: 0;
        }

        /* The glowing "head" of the shooting star */
        .meteor::before {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 20px 5px rgba(59,130,246,1);
        }

        @keyframes meteor-shower {
          0% {
            opacity: 1;
            transform: rotate(215deg) translateX(0);
          }
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            /* Move it 1500px across the X axis along its rotated trajectory */
            transform: rotate(215deg) translateX(-1500px); 
          }
        }

        /* =========================================
           2. CONTENT FADE IN ANIMATIONS
           ========================================= */
        .content-fade-1 { animation: fadeInUp 0.8s ease-out 0.1s forwards; }
        .content-fade-2 { animation: fadeInUp 0.8s ease-out 0.3s forwards; }
        .content-fade-3 { animation: fadeInUp 0.8s ease-out 0.5s forwards; }
        .content-fade-4 { animation: fadeInUp 0.8s ease-out 0.7s forwards; }

        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </section>
  );
}