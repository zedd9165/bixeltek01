'use client';

import React, { useLayoutEffect, useRef, useState, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useReducedMotion } from 'framer-motion';
import { Code2, Layers3, ShoppingBag, Workflow } from 'lucide-react';

import googleadslogo from '@/assets/googleads-logo.png';
import shopifylogo from '@/assets/shopifylogo.png';
import react from '@/assets/React-icon.svg (1).png';
import slack from '@/assets/Slack_icon_2019.svg.png';
import woo from '@/assets/woocommerce.png';
import zapier from '@/assets/zapier-icon-svgrepo-com.png';
import magento from '@/assets/magento-2-logo-svgrepo-com.png';
import wordpress from '@/assets/wordpress-color-svgrepo-com.png';
import elementor from '@/assets/Elementor-Logo-Symbol-Red.png';
import frappe from '@/assets/technologies/frappe.png';
import python from '@/assets/technologies/python-symbol.png';
import vue from '@/assets/technologies/vue-symbol.png';
import nuxt from '@/assets/technologies/nuxt-symbol.png';
import razorpay from '@/assets/technologies/razorpay-symbol.png';
import stripe from '@/assets/Stripe_Logo,_revised_2016.svg.png';
import  next from '@/assets/nextjs.png'
import  medusa from '@/assets/medusa-commerce.png'
import nest from '@/assets/nest.png'
import express from '@/assets/express-js.jpg'
import strapi from '@/assets/strapi-logo.png'
import meta from '@/assets/9805185_meta_logo_facebook_social media_icon.png'
import analytics from '@/assets/4202007_analytics_google_logo_social_social media_icon.png'
/* ============================================================
   DATA MODEL
   ============================================================ */

type CategoryId =
  | 'web'
  | 'commerce'
  | 'application'
  | 'growth';


interface Technology {
  id: string;
  name: string;
  icon?: StaticImageData;
  badge?: string;
  badgeColor?: string;
  url?: string;
}

interface Category {
  id: CategoryId;
  label: string;
  description: string;
  icon: React.ElementType;
  technologies: Technology[];
}



const categories: Category[] = [
  {
    id: 'web',
    label: 'Websites & Content',
    description: 'WordPress · Strapi · Next.js · React',
    icon: Layers3,
    technologies: [
      { id: 'wordpress', name: 'WordPress', icon: wordpress, url: 'https://wordpress.com/' },
      { id: 'strapi', name: 'Strapi', icon: strapi, url: 'https://strapi.io/' },
      { id: 'nextjs', name: 'Next.js', icon: next, url: 'https://nextjs.org/' },
      { id: 'react', name: 'React', icon: react, url: 'https://react.dev/' },
    ],
  },
  {
    id: 'commerce',
    label: 'Ecommerce',
    description: 'Shopify · WooCommerce · Medusa · Payment Integrations',
    icon: ShoppingBag,
    technologies: [
      { id: 'shopify', name: 'Shopify', icon: shopifylogo, url: 'https://www.shopify.com/' },
      { id: 'woocommerce', name: 'WooCommerce', icon: woo, url: 'https://woocommerce.com/' },
      { id: 'medusa', name: 'Medusa', icon: medusa, url: 'https://medusajs.com/' },
      { id: 'payments', name: 'Payment Integrations', icon: stripe, url: 'https://stripe.com/' },
    ],
  },
  {
    id: 'application',
    label: 'Applications & Systems',
    description: 'Web & Mobile Development · APIs · CRM Integrations · Automation',
    icon: Code2,
    technologies: [
      { id: 'appdev', name: 'Web & Mobile Dev', badge: 'DEV', badgeColor: '#670EF7' },
      { id: 'apis', name: 'APIs', badge: 'API', badgeColor: '#4F46E5' },
      { id: 'crm', name: 'CRM Integrations', badge: 'CRM', badgeColor: '#0EA5E9' },
      { id: 'automation', name: 'Automation', icon: zapier, url: 'https://zapier.com/' },
    ],
  },
  {
    id: 'growth',
    label: 'Marketing & Measurement',
    description: 'Google Ads · Meta Ads · GA4 · Reporting',
    icon: Workflow,
    technologies: [
      { id: 'googleads', name: 'Google Ads', icon: googleadslogo, url: 'https://ads.google.com/' },
      { id: 'metaads', name: 'Meta Ads', icon: meta, url: 'https://www.facebook.com/business/ads' },
      { id: 'ga4', name: 'GA4', icon: analytics, url: 'https://analytics.google.com/' },
      { id: 'reporting', name: 'Reporting', badge: 'DATA', badgeColor: '#10B981' },
    ],
  },
];

const flatTechRowId = (cat: CategoryId, tech: string) => `${cat}:${tech}`;

/* ============================================================
   COMPONENT
   ============================================================ */

export default function TechnologyArchitecture() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [corePaths, setCorePaths] = useState<{ id: CategoryId; d: string }[]>([]);
  const [techPaths, setTechPaths] = useState<{ id: CategoryId; d: string }[]>([]);

  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const techRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const gridRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Orthogonal Bus Router:
  // Measures real DOM bounds and draws clean right-angle bus lines
  // instead of messy diagonals that slice across icons.
  const measure = useCallback(() => {
    const container = containerRef.current;
    const core = coreRef.current;
    if (!container || !core) return;

    const containerBox = container.getBoundingClientRect();
    const coreBox = core.getBoundingClientRect();
    const coreX = coreBox.right - containerBox.left;
    const coreY = coreBox.top + coreBox.height / 2 - containerBox.top;

    const nextCore: { id: CategoryId; d: string }[] = [];
    const nextTech: { id: CategoryId; d: string }[] = [];

    categories.forEach((cat) => {
      const catEl = categoryRefs.current[cat.id];
      const gridEl = gridRefs.current[cat.id];
      if (!catEl || !gridEl) return;

      const catBox = catEl.getBoundingClientRect();
      const gridBox = gridEl.getBoundingClientRect();

      // Layer 1 -> Layer 2 Connection Points
      const catStartX = catBox.right - containerBox.left;
      const catStartY = catBox.top + catBox.height / 2 - containerBox.top;
      const catEndX = catBox.left - containerBox.left;
      const catEndY = catStartY;
      const coreMidX = (coreX + catEndX) / 2;

      nextCore.push({
        id: cat.id,
        d: `M ${coreX} ${coreY} C ${coreMidX} ${coreY}, ${coreMidX} ${catEndY}, ${catEndX} ${catEndY}`,
      });

      // Layer 2 -> Layer 3: a single connector into the technology
      // cluster box, not one line per row. The box itself (border +
      // shared background) is what groups the icons visually.
      const gridStartX = catBox.right - containerBox.left;
      const gridStartY = catStartY;
      const gridEndX = gridBox.left - containerBox.left;
      const gridEndY = gridBox.top + gridBox.height / 2 - containerBox.top;
      const gridMidX = (gridStartX + gridEndX) / 2;

      nextTech.push({
        id: cat.id,
        d: `M ${gridStartX} ${gridStartY} C ${gridMidX} ${gridStartY}, ${gridMidX} ${gridEndY}, ${gridEndX} ${gridEndY}`,
      });
    });

    setCorePaths(nextCore);
    setTechPaths(nextTech);
  }, []);

  useLayoutEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 border-b border-neutral-200">
      {/* Precision Structural Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #08080C 1px, transparent 1px),
            linear-gradient(to bottom, #08080C 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto lg:max-w-[90%] px-5 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#670EF7]/20 bg-[#670EF7]/5 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#670EF7] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#670EF7]">
              PLATFORMS & TECHNOLOGY
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#08080C] sm:text-4xl md:text-6xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Built on technology that fits the work.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg"
          style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            A platform decision affects what customers experience and what your team can manage later. We work with WordPress, Shopify, WooCommerce, modern development frameworks, commerce and content systems, and tools for advertising, analytics and automation. We recommend the stack based on business requirements, integrations, ownership and the support it needs after launch.
          </p>
        </div>

        {/* ARCHITECTURE WORKBENCH (Desktop): LAYER 1 → 2 → 3 */}
        <div ref={containerRef} className="relative hidden lg:flex gap-10 xl:gap-14 items-center">
          
          {/* SVG CABLING LAYER */}
          <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible" aria-hidden="true">
            <defs>
              <linearGradient id="techLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#670EF7" />
                <stop offset="100%" stopColor="#8B45FF" />
              </linearGradient>
            </defs>

            {/* 1. Core to Category Trunk Lines */}
            {corePaths.map((p, i) => {
              const isActive = activeCategory === p.id;
              return (
                <g key={`core-${p.id}`}>
                  <path
                    d={p.d}
                    fill="none"
                    stroke={isActive ? 'url(#techLineGrad)' : '#E5E5E5'}
                    strokeWidth={isActive ? 2.2 : 1.5}
                    strokeLinecap="round"
                    className="transition-colors duration-200"
                  />
                  {!shouldReduceMotion && (
                    <circle r={isActive ? 3.5 : 2.5} fill="#670EF7" fillOpacity={isActive ? 1 : 0.55}>
                      <animateMotion
                        path={p.d}
                        dur={`${isActive ? 1.6 : 3.8 + (i % 3)}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* 2. Category to Technology connector \u2014 one line per category */}
            {techPaths.map((p, i) => {
              const isActive = activeCategory === p.id;
              return (
                <g key={`tech-${p.id}`}>
                  <path
                    d={p.d}
                    fill="none"
                    stroke={isActive ? 'url(#techLineGrad)' : '#E5E5E5'}
                    strokeWidth={isActive ? 2.2 : 1.5}
                    strokeLinecap="round"
                    className="transition-colors duration-200"
                  />
                  {!shouldReduceMotion && (
                    <circle r={isActive ? 3.2 : 2.3} fill="#670EF7" fillOpacity={isActive ? 1 : 0.55}>
                      <animateMotion
                        path={p.d}
                        dur={`${isActive ? 1.4 : 3.2 + (i % 3) * 0.6}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* LAYER 1: CORE ENGINE (Source) */}
          <div ref={coreRef} className="relative z-20 shrink-0">
            <div className="flex h-[120px] w-[175px] flex-col items-center justify-center rounded-2xl border border-[#08080C] bg-[#08080C] text-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                Connected by
              </span>
              <Image src='/BIXELTEKLOGO.png' alt="logo" width={100} height={100} className="mt-1.5 w-auto h-7" />
            </div>
          </div>

          {/* LAYER 2: SYSTEM CATEGORY STAGES (Router) */}
          <div className="relative z-20 flex flex-col gap-8 shrink-0">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <div
                  key={category.id}
                  ref={(el) => {
                    categoryRefs.current[category.id] = el;
                  }}
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className={`w-[500px] rounded-2xl border bg-white p-6 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'border-[#670EF7] shadow-[0_12px_36px_rgba(103,14,247,0.12)] ring-1 ring-[#670EF7]/30 -translate-x-0.5'
                      : 'border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                        isActive ? 'bg-[#670EF7] text-white' : 'bg-[#670EF7]/10 text-[#670EF7]'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    
                  </div>

                  <h3 className="block text-lg font-bold tracking-tight text-[#08080C]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {category.label}
                  </h3>
                  <span className="block mt-1.5 text-sm text-neutral-500 leading-snug"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {category.description}
                  </span>
                </div>
              );
            })}
          </div>

          {/* LAYER 3: CONCURRENT TECHNOLOGY NODES (Destination) */}
          <div className="relative z-20 flex flex-col gap-8 flex-1">
            {categories.map((category) => {
              const isCatActive = activeCategory === category.id;

              return (
                <div 
                  key={category.id} 
                  ref={(el) => {
                    gridRefs.current[category.id] = el;
                  }}
                  className={`rounded-2xl border p-3.5 transition-all duration-200 ${
                    isCatActive 
                      ? 'border-[#670EF7]/40 bg-[#FAF9F6] shadow-xs' 
                      : 'border-neutral-200/70 bg-[#FBFBFA]/60'
                  }`}
                >
                  <div className="grid grid-cols-2 xl:grid-cols-4 gap-2.5 content-center">
                    {category.technologies.map((tech) => {
                      const rowId = flatTechRowId(category.id, tech.id);
                      const isTechActive = activeTech === rowId;
                      const cardClasses = `flex items-center gap-2.5 rounded-xl border bg-white px-3 py-2.5 transition-all duration-200 text-left ${
                        isTechActive
                          ? 'border-[#670EF7] shadow-[0_6px_20px_rgba(103,14,247,0.14)] ring-1 ring-[#670EF7]/30 scale-[1.02]'
                          : 'border-neutral-200/90 hover:border-neutral-300'
                      } ${tech.url ? 'cursor-pointer' : 'cursor-default'}`;

                      const cardContent = (
                        <>
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white overflow-hidden shrink-0 shadow-2xs">
                            {tech.icon ? (
                              <Image 
                                src={tech.icon} 
                                alt={tech.name} 
                                width={20} 
                                height={20} 
                                className="h-8 w-8 object-contain" 
                              />
                            ) : (
                              <span
                                className="flex h-full w-full items-center justify-center text-[10px] font-bold text-white font-mono"
                                style={{ backgroundColor: tech.badgeColor ?? '#670EF7' }}
                              >
                                {tech.badge}
                              </span>
                            )}
                          </span>
                          <span className="text-sm font-bold text-[#08080C] leading-tight truncate font-poppins">
                            {tech.name}
                          </span>
                        </>
                      );

                      if (tech.url) {
                        return (
                          <a
                            key={tech.id}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${tech.name} official website (opens in a new tab)`}
                            ref={(el) => {
                              //@ts-ignore
                              techRefs.current[rowId] = el;
                            }}
                            onMouseEnter={() => {
                              setActiveTech(rowId);
                              setActiveCategory(category.id);
                            }}
                            onMouseLeave={() => {
                              setActiveTech(null);
                              setActiveCategory(null);
                            }}
                            className={cardClasses}
                          >
                            {cardContent}
                          </a>
                        );
                      }

                      return (
                        <div
                          key={tech.id}
                          ref={(el) => {
                            //@ts-ignore
                            techRefs.current[rowId] = el;
                          }}
                          onMouseEnter={() => {
                            setActiveTech(rowId);
                            setActiveCategory(category.id);
                          }}
                          onMouseLeave={() => {
                            setActiveTech(null);
                            setActiveCategory(null);
                          }}
                          className={cardClasses}
                        >
                          {cardContent}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* MOBILE & TABLET FALLBACK: STACKED CLEAN HIERARCHY (< lg) */}
        <div className="flex lg:hidden flex-col gap-6">
          <div className="flex h-[95px] flex-col items-center justify-center rounded-2xl border border-[#08080C] bg-[#08080C] text-white shadow-md">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              Connected by
            </span>
            <Image src='/BIXELTEKLOGO.png' alt="logo" width={100} height={100} className="mt-1.5 w-auto h-7" />
          </div>

          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="rounded-2xl border border-neutral-200/90 bg-[#FFFFFF] p-5 shadow-xs">
                <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-neutral-100">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#670EF7]/10 text-[#670EF7] shrink-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="block text-base font-extrabold text-[#08080C]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {category.label}
                    </h3>
                    <span className="block text-xs text-neutral-500">
                      {category.description}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {category.technologies.map((tech) => {
                    const mobileCardContent = (
                      <>
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-100 overflow-hidden shrink-0">
                          {tech.icon ? (
                            <Image src={tech.icon} alt="" width={18} height={18} className="h-7 w-7 object-contain" />
                          ) : (
                            <span
                              className="flex h-full w-full items-center justify-center text-[11px] font-bold text-white font-mono"
                              style={{ backgroundColor: tech.badgeColor ?? '#670EF7' }}
                            >
                              {tech.badge}
                            </span>
                          )}
                        </span>
                        <span className="text-sm font-semibold text-[#08080C] truncate">
                          {tech.name}
                        </span>
                      </>
                    );

                    if (tech.url) {
                      return (
                        <a 
                          key={tech.id} 
                          href={tech.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${tech.name} official website (opens in a new tab)`}
                          className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white p-2 hover:border-[#670EF7]/40 transition-colors"
                        >
                          {mobileCardContent}
                        </a>
                      );
                    }

                    return (
                      <div 
                        key={tech.id} 
                        className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white p-2"
                      >
                        {mobileCardContent}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}