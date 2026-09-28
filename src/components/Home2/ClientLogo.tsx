'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useReducedMotion } from 'framer-motion';

import daddyshark from '@/assets/daddyshark logo-01.png';
import cycas from '@/assets/CYCAS-INVESTMENT-ADVISORS-2048x1677.png';
import daprbins from '@/assets/DAPrBINS.logo_.jpg';
import durrat from '@/assets/durrat_logo.png';
import edify from '@/assets/edify-new-logo-1.webp';
import wheels from '@/assets/head-logo.png';
import markham from '@/assets/Logo-300x79.png.webp';
import tumble from '@/assets/TumbleWash-Logo.webp';
import revita from '@/assets/Revita-Logo-without-background-02-Colored-Font-01.png';
import blooming from '@/assets/Logo2-2048x548.png';
import pawgo from '@/assets/pawgologo.png';
import listiyo from '@/assets/ListiyoFamilyDental_Primary_Mark.webp';
import rooted from '@/assets/Rooted_Logo_new-4-wbg.png';
import oma from '@/assets/OMA-Computer-System-Trading-2-2048x426.webp';
import cloud from '@/assets/logo-2.png';
import binhindi from '@/assets/Bin-Hindi-Logo_Dark.png';
import innovwayz from '@/assets/innovwayz.avif';
import promenade from '@/assets/PDlogo_red3.webp';
import cellfashion from '@/assets/cell-fashion-us.webp'
import hasiniestate from '@/assets/hasiniestates.webp'
import martin from '@/assets/martin.png'
import whitestar from '@/assets/white-star.webp'
import Enaara from '@/assets/enaara.webp'
import wefound from '@/assets/we-found-global.webp'

interface ClientLogo {
  id: string;
  name: string;
  src?: StaticImageData | string;
  scale?: number;
  text?:string;
  bgColor?: string;
}

const clientLogosRowOne: ClientLogo[] = [
  { id: 'c1', name: 'Daddy Shark Consultation', src: daddyshark, scale: 1.1 },
  { id: 'c2', name: 'Cycas investments', src: cycas, scale: 1.3 },
  { id: 'c3', name: 'Cell Fashion', src: cellfashion, scale: 1 },
  { id: 'c4', name: 'Durrat', src: durrat, scale: 1.3 },
  { id: 'c5', name: 'Edify', src: edify, scale: 1 },
  { id: 'c6', name: 'Wheels On Site', src: wheels, scale: 0.8 },
  { id: 'c19', name: 'Hasini Estate', src: hasiniestate, scale: 1.2 },
  { id: 'c22', name: 'Enaara School', src: Enaara, text : 'Enaara High School', scale: 1.2 },
];

const clientLogosRowTwo: ClientLogo[] = [
  { id: 'c7', name: 'Markham Dentistry', src: markham, scale: 1 },
  { id: 'c8', name: 'Tumble Wash', src: tumble, scale: 1 },
  { id: 'c9', name: 'Revita dentistry', src: revita, scale: 1.3 },
  { id: 'c10', name: 'Blooming', src: blooming, scale: 1 },
  { id: 'c11', name: 'Pawgo', src: pawgo, scale: 1 },
  { id: 'c12', name: 'Listiyo', src: listiyo, scale: 1 },
  { id: 'c20', name: 'Martin', src: martin, scale: 1 },
  { id: 'c23', name: 'We Found Global ', src: wefound, scale: 1.2,bgColor:'#000' },
];

const clientLogosRowThree: ClientLogo[] = [
  { id: 'c13', name: 'Rooted', src: rooted, scale: 1 },
  { id: 'c14', name: 'Oma', src: oma, scale: 1 },
  { id: 'c15', name: 'Cloud', src: cloud, scale: 1.3 },
  { id: 'c16', name: 'Bin Hindi', src: binhindi, scale: 1.2 },
  { id: 'c17', name: 'Innovwayz', src: innovwayz, scale: 0.8,},
  { id: 'c18', name: 'Promenade Dentistry', src: promenade, scale: 1 },
  { id: 'c21', name: 'White Star', src: whitestar, scale: 1 },
];

function LogoCard({ logo }: { logo: ClientLogo }) {
  return (
    <div className="group inline-flex items-center justify-center w-[200px] sm:w-[240px] h-[82px] sm:h-[100px] px-6 rounded-2xl border border-neutral-200/90 bg-[#FFFFFF] hover:border-[#670EF7]/40 shadow-xs hover:shadow-md transition-all duration-300 select-none shrink-0 overflow-hidden">
      {logo.src ? (
        <div className={`relative w-full h-full flex flex-col items-center justify-center `}>
          <Image
            src={logo.src}
            alt={logo.name}
            width={180}
            height={60}
            className={`w-auto max-h-11 sm:max-h-12 object-contain transition-all duration-300 bg-[${logo.bgColor}]`}
            style={{
              transform: `scale(${logo.scale ?? 1})`,
            }}
          />
          <span
          className="text-sm sm:text-base font-bold tracking-tight text-[#08080C] transition-colors truncate"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {logo.text}
        </span>
        </div>
      ) : (
        <span
          className="text-sm sm:text-base font-bold tracking-tight text-neutral-400 group-hover:text-[#08080C] transition-colors truncate"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {logo.name}
        </span>
      )}
    </div>
  );
}

export default function ClientTrustMarquee() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-[#FFFFFF] text-[#08080C] border-b border-neutral-200 overflow-hidden">
      
      {/* Background Soft Purple Spotlights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#670EF7]/[0.025] blur-[140px] rounded-full" />
      </div>

      {/* GPU Accelerated Seamless Infinite Scroll Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marqueeScrollLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
        @keyframes marqueeScrollRight {
          0% { transform: translate3d(-100%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-track-left {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          will-change: transform;
          animation: marqueeScrollLeft 48s linear infinite;
        }
        .marquee-track-right {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          will-change: transform;
          animation: marqueeScrollRight 48s linear infinite;
        }
        .marquee-container:hover .marquee-track-left,
        .marquee-container:hover .marquee-track-right {
          animation-play-state: paused;
        }
      `}} />

      <div className="relative w-full lg:max-w-[90%] mx-auto px-6 md:px-12 lg:px-16 z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-18 lg:mb-20">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#670EF7]/20 bg-[#670EF7]/10 mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#670EF7] animate-pulse" />
            <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-[#670EF7]">
              TRUSTED BY BUSINESSES ACROSS INDUSTRIES
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#08080C] leading-[1.08] mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Businesses We&apos;ve Helped{' '}<br className="hidden lg:block"/>
            <span className="bg-gradient-to-r from-[#670EF7] to-[#8B45FF] bg-clip-text text-transparent">
              Move Forward.
            </span>
          </h2>

          <p 
            className="text-base sm:text-lg md:text-xl text-[#71717A] font-normal leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            From growing local businesses to established companies and specialized healthcare brands, we&apos;ve worked across different industries to build better digital experiences, generate demand and improve the systems behind growth.
          </p>
        </div>

        {/* 3-Row Seamless Multi-Track Stream */}
        <div 
          className="marquee-container relative w-full overflow-hidden py-3 -mx-6 md:-mx-12 lg:-mx-16 px-6 md:px-12 lg:px-16 space-y-5 sm:space-y-6"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          {/* Row 1: Leftward Direction */}
          <div className="flex gap-6 overflow-hidden">
            <div className="marquee-track-left">
              {clientLogosRowOne.map((logo, idx) => (
                <LogoCard key={`r1-a-${logo.id}-${idx}`} logo={logo} />
              ))}
            </div>
            <div className="marquee-track-left" aria-hidden="true">
              {clientLogosRowOne.map((logo, idx) => (
                <LogoCard key={`r1-b-${logo.id}-${idx}`} logo={logo} />
              ))}
            </div>
          </div>

          {/* Row 2: Rightward Direction */}
          <div className="flex gap-6 overflow-hidden">
            <div className="marquee-track-right">
              {clientLogosRowTwo.map((logo, idx) => (
                <LogoCard key={`r2-a-${logo.id}-${idx}`} logo={logo} />
              ))}
            </div>
            <div className="marquee-track-right" aria-hidden="true">
              {clientLogosRowTwo.map((logo, idx) => (
                <LogoCard key={`r2-b-${logo.id}-${idx}`} logo={logo} />
              ))}
            </div>
          </div>

          {/* Row 3: Leftward Direction */}
          <div className="flex gap-6 overflow-hidden">
            <div className="marquee-track-left">
              {clientLogosRowThree.map((logo, idx) => (
                <LogoCard key={`r3-a-${logo.id}-${idx}`} logo={logo} />
              ))}
            </div>
            <div className="marquee-track-left" aria-hidden="true">
              {clientLogosRowThree.map((logo, idx) => (
                <LogoCard key={`r3-b-${logo.id}-${idx}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>

        {/* Tactical Footnote */}
        <div className="mt-14 sm:mt-16 text-center">
          <p 
            className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-400 uppercase"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Real businesses. Real projects. Real outcomes.
          </p>
        </div>

      </div>
    </section>
  );
}