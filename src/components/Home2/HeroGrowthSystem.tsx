'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

// Real logo assets
import strapiLogo from '@/assets/strapi-logo.png';
import wordpressLogo from '@/assets/wordpress-color-svgrepo-com.png';
import googleLogo from '@/assets/2993685_brand_brands_google_logo_logos_icon.png';
import bigcommerceLogo from '@/assets/big-commerce.webp';
import hostingerLogo from '@/assets/Hostinger-logo.png';

interface HeroGrowthSystemProps {
  onOpenAudit: () => void;
  onOpenBooking?: () => void;
  videoSrc?: string;
  videoPoster?: string;
}

interface PartnerBadge {
  id: string;
  name: string;
  badgeLabel: string;
  src: StaticImageData | string;
  scale?: number;
}

const partners: PartnerBadge[] = [
  {
    id: 'google',
    name: 'Google',
    badgeLabel: 'Partner',
    src: googleLogo,
    scale: 1,
  },
  {
    id: 'strapi',
    name: 'Strapi',
    badgeLabel: 'Strapi Partner',
    src: strapiLogo,
    scale: 1,
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    badgeLabel: 'Partner Agency',
    src: wordpressLogo,
    scale: 0.95,
  },
  {
    id: 'bigcommerce',
    name: 'BigCommerce',
    badgeLabel: 'Agency Partner',
    src: bigcommerceLogo,
    scale: 1,
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    badgeLabel: 'Partner Agency',
    src: hostingerLogo,
    scale: 1,
  },
];

const capabilities = [
  { name: 'Web Design & Development', link: '/services/web-design' },
  { name: 'Ecommerce Development', link: '/services/ecommerce-development' },
  { name: 'Google Ads Management', link: '/services/google-ads' },
  { name: 'SEO Services', link: '/services/seo-services' },
  { name: 'Application Development', link: '/services/mobile-app-development' },
  { name: 'Automation & Analytics', link: '#final-cta' },
];

export default function HeroGrowthSystem({ 
  onOpenAudit, 
  onOpenBooking,
  videoSrc = '/home-hero-2.mp4', 
  videoPoster = '/abstract-flowing-neon-wave-background.jpg' 
}: HeroGrowthSystemProps) {
  const shouldReduceMotion = useReducedMotion();
  const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };
  const staggerDelay = 0.08;
  const yOffset = shouldReduceMotion ? 0 : 18;

  return (
    <section className="relative w-full bg-[#08080C] text-white overflow-hidden pt-36 md:pt-40 md:pt-44 pb-20 sm:pb-28 lg:pb-32 border-b border-white/[0.08]">
      
      {/* Background Visual Layer */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 bottom-0 w-full sm:w-[75%] lg:w-[60%] xl:w-[56%] h-full pointer-events-none overflow-hidden">
          
          <div 
            className="absolute inset-0 w-full h-full opacity-55 sm:opacity-70 lg:opacity-85 mix-blend-screen"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 25%, black 60%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 25%, black 60%, black 100%)',
            }}
          >
            {videoSrc ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={videoPoster}
                className="w-full h-full object-cover object-[100%_center]"
              >
                <source src={videoSrc} type="video/mp4" />
                <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
              </video>
            ) : (
              <Image
                src="/abstract-flowing-neon-wave-background.jpg"
                alt=""
                fill
                priority
                className="object-cover object-[70%_center] scale-105"
              />
            )}
          </div>
        </div>

        {/* Global Micro-Grid Coordinate Dots for Structural Texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 sm:opacity-30"
          style={{
            backgroundImage: 'radial-gradient(rgba(139, 69, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 75% 50%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 75% 50%, black 20%, transparent 80%)',
          }}
        />
      </div>

      <div className="relative lg:max-w-[90%] mx-auto z-10 px-6">
        <div className="lg:max-w-[62%] flex flex-col items-start">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: yOffset }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="hidden md:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#670EF7]/30 bg-[#0C0C14]/80 backdrop-blur-md mb-7 shadow-xs"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#670EF7] shadow-[0_0_8px_#670EF7]" />
            <span className="text-[10px] md:text-sm font-semibold tracking-wider uppercase text-neutral-300">
              Websites · Software · Growth Marketing · AI Automation
            </span>
          </motion.div>

          {/* Display H1 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: yOffset }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: staggerDelay }}
            className="text-4xl md:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.06] mb-7 drop-shadow-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We build the digital systems that win customers{' '}
            <span className="text-[#8B45FF]">
              and run the growth that fills them.
            </span>
          </motion.h1>

          {/* Supporting Body Copy */}
          <motion.p
            initial={{ opacity: 0, y: yOffset }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: staggerDelay * 2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed mb-9 max-w-4xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Bixeltek is one team for your website or app, your Google and Meta advertising, and the automation behind every enquiry. Trusted by businesses across India, the US, Canada and Saudi Arabia.
          </motion.p>

          {/* Conversion CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: yOffset }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: staggerDelay * 3 }}
            className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-5 mb-10 w-full sm:w-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {/* Primary Action Button */}
            <button
              onClick={onOpenAudit}
              className="w-full md:w-auto px-8 py-4 bg-[#670EF7] hover:bg-[#8B45FF] text-white rounded-full font-bold text-sm sm:text-base shadow-[0_8px_25px_rgba(103,14,247,0.35)] hover:shadow-[0_12px_32px_rgba(139,69,255,0.45)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Talk to an Expert</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Action: Opens Region Selector Modal */}
            <button
              onClick={onOpenBooking ?? onOpenAudit}
              className="w-full md:w-auto px-7 py-4 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold text-sm sm:text-base transition-all duration-300 text-center inline-flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Schedule a 1-on-1 consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#8C45FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* Partner Badges Strip */}
          <motion.div
            initial={{ opacity: 0, y: yOffset }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: staggerDelay * 3.5 }}
            className="w-full mb-8 pt-4"
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-8">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex flex-col items-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  <div className="relative h-6 w-auto flex items-center justify-center brightness-0 invert">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={90}
                      height={24}
                      className="max-h-8 w-auto object-contain"
                      style={{
                        transform: `scale(${partner.scale ?? 1})`,
                      }}
                    />
                  </div>

                  <div className="flex flex-col pl-2">
                    <span 
                      className="text-[11px] uppercase tracking-wider text-neutral-300 font-semibold leading-tight"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {partner.badgeLabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Capabilities Links */}
          <motion.div
            initial={{ opacity: 0, y: yOffset }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: staggerDelay * 4 }}
            className="w-full pt-6 border-t border-white/[0.08]"
          >
            <p 
              className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2.5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Core Capabilities
            </p>
            <div
              className="flex flex-wrap items-center gap-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {capabilities.map((cap) => (
                <Link
                  key={cap.name}
                  href={cap.link}
                  className="inline-flex items-center rounded-full border border-white/50 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-neutral-300 transition-all duration-200 hover:border-[#670EF7]/40 hover:bg-[#670EF7]/10 hover:text-white md:text-sm"
                >
                  {cap.name}
                </Link>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}