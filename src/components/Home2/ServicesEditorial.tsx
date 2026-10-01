'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Layout, 
  ShoppingBag, 
  Smartphone, 
  Workflow,
  Sparkles,
  BarChart3,
  ChevronDown
} from 'lucide-react';

interface ServiceCard {
  id: string;
  title: string;
  gridCopy: string;
  expandedCopy: string;
  labels: string[];
  cta: string;
  link: string;
  icon: React.ElementType;
}

const services: ServiceCard[] = [
  {
    id: '01',
    title: 'Web Design & Development',
    gridCopy: 'Websites that explain your business clearly, earn trust and make it easy for customers to take the next step.',
    expandedCopy:
      'We design and develop corporate websites, service websites and campaign landing pages around the questions customers ask before they enquire or buy. That means clear structure, considered UX, responsive design, fast performance, a CMS your team can use and conversion paths that suit the business. We work with WordPress, headless CMS and custom-coded solutions according to the requirements.',
    labels: ['Corporate Websites', 'Website Redesign', 'WordPress', 'Custom Development', 'Landing Pages'],
    cta: 'Explore Web Design & Development',
    link: '/services/web-design',
    icon: Layout
  },
  {
    id: '02',
    title: 'Ecommerce Development',
    gridCopy: 'Stores and commerce platforms that make products easier to discover, compare and purchase.',
    expandedCopy:
      'We build ecommerce experiences around your catalogue, customers and operations. From Shopify and WooCommerce to headless or custom commerce, we plan the storefront, product journey, checkout and required integrations together. The result should be a store customers can use with confidence and your team can run effectively.',
    labels: ['Shopify', 'WooCommerce', 'Headless Commerce', 'Checkout', 'Payments & Integrations'],
    cta: 'Explore Ecommerce Development',
    link: '/ecommerce-websites',
    icon: ShoppingBag
  },
  {
    id: '03',
    title: 'Web & Mobile Applications',
    gridCopy: 'Digital products for customers, teams and business processes that need more than an off-the-shelf tool.',
    expandedCopy:
      'We develop web applications, mobile apps, portals and internal platforms for defined users and workflows. Our team helps shape the requirements, design the experience, build the functionality and connect it with the systems it depends on. The work is scoped around what the product needs to do at launch and how it may evolve.',
    labels: ['Web Apps', 'Mobile Apps', 'Customer Portals', 'Internal Platforms', 'APIs'],
    cta: 'Explore Application Development',
    link: '/services/app-development',
    icon: Smartphone
  },
  {
    id: '04',
    title: 'Google Ads Management & Paid Media',
    gridCopy: 'Campaigns built to reach people with relevant intent and turn advertising spend into qualified opportunities.',
    expandedCopy:
      'We plan and manage Google Ads campaigns around the searches, locations and services that matter to your business. We support Meta Ads where the audience and offer call for it. Campaign structure, messaging, landing pages, conversion tracking and optimization form one acquisition journey. Reporting focuses on enquiries, sales and the quality of results, not clicks in isolation.',
    labels: ['Google Ads Management', 'PPC', 'Meta Ads', 'Landing Pages', 'Conversion Tracking'],
    cta: 'Explore Google Ads Management',
    link: '/services/google-ads',
    icon: TrendingUp
  },
  {
    id: '05',
    title: 'SEO & Search Visibility',
    gridCopy: 'Help the right customers find your business when they are researching solutions and ready to act.',
    expandedCopy:
      'Our SEO services connect technical health, site structure, useful content and local relevance. We identify how customers search, improve the pages that should answer them and address issues that make the site difficult to discover or use. For location-based businesses, we strengthen local search visibility and the path from search result to enquiry.',
    labels: ['SEO Services', 'Technical SEO', 'Local SEO', 'Content Strategy', 'On-Page SEO'],
    cta: 'Explore SEO Services',
    link: '/services/seo-services',
    icon: BarChart3
  },
  {
    id: '06',
    title: 'Automation, Analytics & Optimization',
    gridCopy: 'Connect marketing, enquiries and operations so fewer opportunities are lost between tools and teams.',
    expandedCopy:
      'We improve what happens after a customer clicks, submits a form or places an order. That can mean CRM integrations, lead routing, reporting, customer communication workflows, conversion optimization or practical automation. We find where information is lost or manual work slows the business, then build a more dependable process.',
    labels: ['CRM Integrations', 'Automation', 'GA4 & Analytics', 'Conversion Optimization'],
    cta: 'Explore Connected Systems',
    link: '/analytics-and-cro-services',
    icon: Workflow
  }
];

export default function ServicesEditorial() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="bg-[#FFFFFF] text-[#08080C] py-16 md:py-32 lg:py-40 border-b border-neutral-200/90 relative overflow-hidden">
      
      {/* Background Ambience: Subtle Soft Purple Spotlights on White */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-[#670EF7]/[0.035] blur-[150px] rounded-full"
        />
        <div 
          className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#8B45FF]/[0.025] blur-[140px] rounded-full"
        />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#08080C 1px, transparent 1px), linear-gradient(90deg, #08080C 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="w-full lg:max-w-[90%] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
          <div 
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#670EF7]/20 bg-[#670EF7]/10 mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#670EF7]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#670EF7]">
              OUR EXPERTISE
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#08080C] leading-[1.08] mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The expertise to build your presence and turn it into growth.
          </h2>

          <p 
            className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            A website alone cannot fix a weak customer journey, and more traffic cannot fix a website that fails to convert. We work across the connected pieces of digital growth, from the platform customers see to the campaigns, content and systems that support it.
          </p>
        </div>

        {/* --- SIX-CARD EXPERTISE GRID (3 Cols Desktop, 2 Cols Tablet, 1 Col Mobile) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = !!expandedCards[service.id];

            return (
              <motion.div
                key={service.id}
                layout
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-3xl border transition-all duration-300 flex flex-col justify-between p-7 sm:p-9 bg-white group overflow-hidden ${
                  isExpanded
                    ? 'border-[#670EF7] shadow-[0_20px_50px_rgba(103,14,247,0.12)] ring-1 ring-[#670EF7]/20'
                    : 'border-neutral-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(103,14,247,0.08)] hover:border-[#670EF7]/40'
                }`}
              >
                {/* Top Subtle Purple Edge Accent Line on Hover / Active */}
                <div 
                  className={`absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#670EF7] to-transparent transition-opacity duration-300 ${
                    isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} 
                />

                {/* CARD BODY */}
                <div>
                  {/* Top Bar: Icon Container & Card Number */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-100">
                    <div className="w-12 h-12 rounded-2xl bg-[#670EF7]/10 border border-[#670EF7]/20 flex items-center justify-center text-[#670EF7] group-hover:bg-[#670EF7] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span 
                      className="text-2xl sm:text-3xl font-black font-mono text-neutral-300 group-hover:text-[#670EF7]/70 transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {service.id}
                    </span>
                  </div>

                  {/* Title (H3) */}
                  <h3 
                    className="text-xl sm:text-2xl font-bold tracking-tight text-[#08080C] mb-3 group-hover:text-[#670EF7] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Short Grid Copy */}
                  <p 
                    className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed mb-6"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {service.gridCopy}
                  </p>

                  {/* Collapsible / Expandable Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-6 border-t border-neutral-100 space-y-4">
                          <p 
                            className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            {service.expandedCopy}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Labels / Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.labels.map((label) => (
                      <span
                        key={label}
                        className="px-2.5 py-1 rounded-full border border-neutral-200/80 bg-[#FBFBFA] text-neutral-600 text-xs font-medium"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CARD FOOTER: Expand Toggle & Direct Destination Link */}
                <div className="pt-5 border-t border-neutral-100 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => toggleCard(service.id)}
                      className="text-xs font-semibold uppercase tracking-wider text-[#670EF7] hover:text-[#520bc4] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      <span>{isExpanded ? 'Less Details' : 'Full Scope'}</span>
                      <ChevronDown 
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>

                    <span className="w-2 h-2 rounded-full bg-[#670EF7]/40 group-hover:bg-[#670EF7] transition-colors" />
                  </div>

                  <Link
                    href={service.link}
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#08080C] hover:text-[#670EF7] inline-flex items-center justify-between gap-2 pt-2 border-t border-neutral-50 transition-colors group/link"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="w-4 h-4 text-[#670EF7] transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}