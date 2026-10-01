'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useReducedMotion } from 'framer-motion';

import daddyshark from '@/assets/daddyshark logo-01.png';
import cycas from '@/assets/CYCAS-INVESTMENT-ADVISORS-2048x1677.png';
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
import cellfashion from '@/assets/cell-fashion-us.webp';
import hasiniestate from '@/assets/hasiniestates.webp';
import martin from '@/assets/martin.png';
import whitestar from '@/assets/white-star.webp';
import Enaara from '@/assets/enaara.webp';
import wefound from '@/assets/we-found-global.webp';

interface ClientLogo {
  id: string;
  name: string;
  src?: StaticImageData | string;
  scale?: number;
  text?: string;
  bgColor?: string;
  href?: string;
}

// Combined into a single unified row
const clientLogosSingleRow: ClientLogo[] = [
  { id: 'c1', name: 'Daddy Shark Consultation', src: daddyshark, scale: 1.1, href: 'https://daddyshark.sa/' },
  { id: 'c2', name: 'Cycas investments', src: cycas, scale: 1.3, href: 'https://cycas.co.in/' },
  { id: 'c3', name: 'Cell Fashion', src: cellfashion, scale: 1, href: 'https://cellfashionusa.com/' },
  { id: 'c4', name: 'Durrat', src: durrat, scale: 1.3 },
  { id: 'c5', name: 'Edify', src: edify, scale: 1, href: 'https://edifyschools.com/' },
  { id: 'c6', name: 'Wheels On Site', src: wheels, scale: 0.8, href: 'https://wheelsonsite.com/' },
  { id: 'c17', name: 'Innovwayz', src: innovwayz, scale: 0.8, href: 'https://innovwayz.com/' },
  { id: 'c18', name: 'Promenade Dentistry', src: promenade, scale: 1, href: 'https://www.promenadedds.com/' },
  { id: 'c21', name: 'White Star', src: whitestar, scale: 1, href: 'https://www.whitestardumpsters.com/' },
  { id: 'c19', name: 'Hasini Estate', src: hasiniestate, scale: 1.2, href: 'https://www.hasiniestates.in/' },
  { id: 'c22', name: 'Enaara School', src: Enaara, text: 'Enaara High School', scale: 1.2, href: 'https://www.enaraahighschool.com/' },
  { id: 'c7', name: 'Markham Dentistry', src: markham, scale: 1, href: 'https://markhamgatewaydentistry.ca/' },
  { id: 'c8', name: 'Tumble Wash', src: tumble, scale: 1, href: '/case-studies/Tumblewash-Casestudy' },
  { id: 'c9', name: 'Revita dentistry', src: revita, scale: 1.3, href: 'https://revitadentistry.ca/' },
  { id: 'c10', name: 'Blooming', src: blooming, scale: 1 },
  { id: 'c11', name: 'Pawgo', src: pawgo, scale: 1, href: 'https://pawgo.com/' },
  { id: 'c12', name: 'Listiyo', src: listiyo, scale: 1, href: 'https://listiyofamilydentalca.com/' },
  { id: 'c13', name: 'Rooted', src: rooted, scale: 1, href: 'https://rootedtreeservices.com/' },
  { id: 'c14', name: 'Oma', src: oma, scale: 1, href: 'https://omacomputers.com/' },
  { id: 'c15', name: 'Cloud', src: cloud, scale: 1.3, href: 'https://cloudupskills.com/' },
  { id: 'c16', name: 'Bin Hindi', src: binhindi, scale: 1.2, href: 'https://www.binhindi.com/' },
  { id: 'c20', name: 'Martin', src: martin, scale: 1, href: 'https://martincarpetcleaning.com/' },
  { id: 'c23', name: 'We Found Global', src: wefound, scale: 1.2, bgColor: '#000', href: 'https://wefoundglobal.com/' },
];

/*
  Breakpoints used in this file:
    base  = mobile
    md:   = tablet   (768px+)
    lg:   = desktop  (1024px+)
  (sm: is intentionally not used)
*/

function LogoCard({ logo }: { logo: ClientLogo }) {
  const content = (
    <div className="group inline-flex items-center justify-center w-[160px] h-[60px] px-3 md:w-[170px] md:h-[68px] md:px-4 lg:w-[220px] lg:h-[85px] lg:px-5 rounded-xl border border-neutral-200/90 bg-[#FFFFFF] hover:border-[#670EF7]/50 shadow-xs hover:shadow-md transition-all duration-300 select-none shrink-0 overflow-hidden cursor-pointer">
      {logo.src ? (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-0.5">
          <Image
            src={logo.src}
            alt={logo.name}
            width={160}
            height={50}
            className={`w-auto h-auto max-w-full max-h-8 lg:max-h-10 object-contain transition-all duration-300 ${
              logo.bgColor ? 'rounded px-2 py-1' : ''
            }`}
            style={{
              transform: `scale(${logo.scale ?? 1})`,
              // (the old bg-[${...}] class was built at runtime, so Tailwind never generated it)
              ...(logo.bgColor ? { backgroundColor: logo.bgColor } : {}),
            }}
          />
          {logo.text && (
            <span
              className="text-[10px] md:text-xs lg:text-sm font-bold tracking-tight text-[#08080C] transition-colors truncate max-w-full"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {logo.text}
            </span>
          )}
        </div>
      ) : (
        <span
          className="text-xs lg:text-sm font-bold tracking-tight text-neutral-400 group-hover:text-[#08080C] transition-colors truncate"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {logo.name}
        </span>
      )}
    </div>
  );

  if (logo.href && logo.href !== '#') {
    return (
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={logo.name}
        className="inline-block shrink-0 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#670EF7]"
      >
        {content}
      </a>
    );
  }

  return content;
}

export default function ClientTrustMarquee() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-white text-white border-b border-white/[0.08] overflow-hidden py-0">
      {/* GPU accelerated seamless infinite scroll */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marqueeScrollLeft {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }

        /* Mobile (base) */
        .marquee-single-track {
          display: flex;
          flex-shrink: 0;            /* never let the flex parent squeeze the track */
          gap: 0.75rem;
          padding-right: 0.75rem;    /* = gap, so the seam between the two copies has the same spacing */
          width: max-content;
          will-change: transform;
          animation: marqueeScrollLeft 40s linear infinite;
        }
        .marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%);
          mask-image: linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%);
        }

        /* Tablet (md) */
        @media (min-width: 768px) {
          .marquee-single-track { gap: 1rem; padding-right: 1rem; animation-duration: 48s; }
          .marquee-mask {
            -webkit-mask-image: linear-gradient(to right, transparent 0, black 40px, black calc(100% - 40px), transparent 100%);
            mask-image: linear-gradient(to right, transparent 0, black 40px, black calc(100% - 40px), transparent 100%);
          }
        }

        /* Desktop (lg) */
        @media (min-width: 1024px) {
          .marquee-single-track { gap: 1.25rem; padding-right: 1.25rem; animation-duration: 55s; }
          .marquee-mask {
            -webkit-mask-image: linear-gradient(to right, transparent 0, black 60px, black calc(100% - 60px), transparent 100%);
            mask-image: linear-gradient(to right, transparent 0, black 60px, black calc(100% - 60px), transparent 100%);
          }
        }

        /* Pause on hover only for devices that really hover (avoids "stuck" pause on touch) */
        @media (hover: hover) {
          .marquee-wrapper:hover .marquee-single-track { animation-play-state: paused; }
        }

        ${shouldReduceMotion ? '.marquee-single-track { animation: none; }' : ''}
      `,
        }}
      />

      {/* Mobile: badge stacked above the logos. Tablet and up: side by side. */}
      <div className="relative w-full flex flex-col md:flex-row md:items-stretch md:min-h-[88px] lg:min-h-[110px]">
        {/* ============================================================
            BADGE — full-width bar on mobile, slanted trapezoid from md:
            ============================================================ */}
        <div className="relative z-30 shrink-0 flex items-center justify-center md:justify-start bg-[#08080C] px-5 py-3 md:py-4 md:pl-8 md:pr-16 lg:pl-14 lg:pr-24 lg:py-5 md:[clip-path:polygon(0_0,82%_0,100%_100%,0_100%)]">
          <div className="flex flex-col justify-center text-center md:text-left md:max-w-[240px] lg:max-w-[380px]">
            <p
              className="text-sm lg:text-[19px] font-bold text-[#8B45FF] tracking-tight leading-snug"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Trusted by global brands
              <br />
              <span className="text-neutral-300 font-medium">across US, Canada, Saudi &amp; India</span>
            </p>
          </div>
        </div>

        {/* ============================================================
            MARQUEE TRACK — logos stream beneath the badge shape (md:+)
            ============================================================ */}
        <div
          className={`marquee-wrapper marquee-mask relative w-full min-w-0 md:flex-1 md:w-auto flex items-center py-3 md:py-3 lg:py-4 md:-ml-6 lg:-ml-12 ${
            shouldReduceMotion ? 'overflow-x-auto' : 'overflow-hidden'
          }`}
        >
          {/* Track copy 1 */}
          <div className="marquee-single-track items-center">
            {clientLogosSingleRow.map((logo, idx) => (
              <LogoCard key={`m1-${logo.id}-${idx}`} logo={logo} />
            ))}
          </div>

          {/* Track copy 2 (seamless loop) — not needed when motion is reduced */}
          {!shouldReduceMotion && (
            <div className="marquee-single-track items-center" aria-hidden="true">
              {clientLogosSingleRow.map((logo, idx) => (
                <LogoCard key={`m2-${logo.id}-${idx}`} logo={logo} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}