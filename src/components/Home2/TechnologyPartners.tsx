'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

// Real logo assets
import strapiLogo from '@/assets/strapi-logo.png'
import wordpressLogo from '@/assets/wordpress-color-svgrepo-com.png';
import googleLogo from '@/assets/2993685_brand_brands_google_logo_logos_icon.png';
import bigcommerceLogo from '@/assets/big-commerce.webp'; // swap with your real BigCommerce asset
import hostingerLogo from '@/assets/Hostinger-logo.png'; // swap with your real Hostinger asset

interface EcosystemTech {
  id: string;
  name: string;
  category: string;
  src: StaticImageData | string;
  scale?: number;
}

const technologies: EcosystemTech[] = [
  {
    id: 'strapi',
    name: 'Strapi',
    category: 'Headless CMS',
    src: strapiLogo,
    scale: 1.0,
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'CMS & Publishing',
    src: wordpressLogo,
    scale: 0.95,
  },
  {
    id: 'google',
    name: 'Google',
    category: 'Cloud & Infrastructure',
    src: googleLogo,
    scale: 0.95,
  },
  {
    id: 'bigcommerce',
    name: 'BigCommerce',
    category: 'Enterprise Commerce',
    src: bigcommerceLogo,
    scale: 1.0,
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    category: 'Cloud Hosting & Edge',
    src: hostingerLogo,
    scale: 1.0,
  },
];

export default function TechnologyEcosystem() {
  return (
    <section className="relative w-full border-b border-neutral-200 bg-[#FFFFFF] py-20 sm:py-24 md:py-28 text-[#08080C]">
      {/* Precision Structural Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #08080C 1px, transparent 1px),
            linear-gradient(to bottom, #08080C 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 mx-auto w-full px-6 md:px-12 lg:max-w-[90%] lg:px-16">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-neutral-50 px-3.5 py-1.5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#670EF7]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
              OUR PARTNER TECHNOLOGY
            </span>
          </div>

          <h2
            className="mb-5 text-3xl font-extrabold tracking-tight text-[#08080C] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Built With Technology We Trust.
          </h2>

          <p
            className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-[#71717A] sm:text-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            We work across proven platforms and technology ecosystems to build digital experiences,
            commerce platforms and connected systems around the needs of each business.
          </p>
        </div>

        {/* Compact, Elevated Ecosystem Bar with reduced spacing */}
        <div className="mx-auto max-w-7xl rounded-2xl border border-neutral-200/90 bg-[#FAFAFA]/70 px-6 py-6 sm:px-10 sm:py-8 shadow-xs">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-3 lg:gap-4 items-center justify-items-center">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="group flex w-full flex-col items-center justify-center rounded-xl p-3 text-center transition-all duration-200 hover:bg-white hover:shadow-xs"
              >
                {/* Logo with controlled height & tight scaling */}
                <div className="flex h-11 w-full items-center justify-center">
                  <div
                    className="relative flex h-full w-full items-center justify-center transition-transform duration-200 ease-out group-hover:scale-[1.03]"
                    style={{
                      transform: `scale(${tech.scale ?? 1})`,
                    }}
                  >
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={140}
                      height={40}
                      className="max-h-[50px] w-auto object-contain contrast-125 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Subtitle / Category */}
                <span
                  className="mt-2 text-[10px] font-medium uppercase tracking-[0.14em] text-black transition-colors duration-200 group-hover:text-neutral-600 sm:text-[11px]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Line */}
        <div className="mt-10 text-center sm:mt-12">
          <p
            className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400 sm:text-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            The right technology for the job — not technology for its own sake.
          </p>
        </div>
      </div>
    </section>
  );
}