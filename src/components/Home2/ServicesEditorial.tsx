'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Search, 
  TrendingUp, 
  Layout, 
  ShoppingBag, 
  Smartphone, 
  Workflow,
  Sparkles,
  Award
} from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Digital Presence',
    summary: 'Build a stronger digital presence around how your customers discover, evaluate, and engage with your business.',
    detail:
      'We create websites and digital experiences that combine clear positioning, thoughtful UX, strong performance, and conversion-focused design — giving your business a digital foundation built to grow.',
    tags: [
      'Website Development',
      'UX & Conversion',
      'Landing Pages',
      'Web Applications'
    ],
    link: '/services/web-design',
    icon: Layout
  },

  {
    id: '02',
    title: 'Digital Growth',
    summary: 'Reach the right people through the digital channels that matter to your business.',
    detail:
      'We combine SEO, paid advertising, local search, and digital growth strategies to help businesses become more visible, attract qualified opportunities, and build a stronger customer pipeline.',
    tags: [
      'SEO',
      'Google Ads',
      'Meta Ads',
      'Local Search'
    ],
    link: '/services/seo-services',
    icon: TrendingUp
  },

  {
    id: '03',
    title: 'Ecommerce',
    summary: 'Turn your products into a digital business built around how customers discover, decide, and buy.',
    detail:
      'From storefront experience to checkout and integrations, we build ecommerce systems that make it easier for customers to browse, trust, and purchase — while giving your business room to scale.',
    tags: [
      'Ecommerce Development',
      'Product Experiences',
      'Checkout Optimization',
      'Third-Party Integrations'
    ],
    link: '/ecommerce-websites',
    icon: ShoppingBag
  },

  {
    id: '04',
    title: 'Digital Products',
    summary: 'Build the apps and custom technology your business needs when off-the-shelf tools are not enough.',
    detail:
      'We design and develop mobile applications, custom platforms, portals, and connected digital products around your specific business model, customers, and operational needs.',
    tags: [
      'Mobile Applications',
      'Custom Platforms',
      'Customer Portals',
      'APIs & Integrations'
    ],
    link: '/services/app-development',
    icon: Smartphone
  },

  {
    id: '05',
    title: 'Connected Operations',
    summary: 'Connect the systems and workflows behind your business so less gets lost between people, tools, and processes.',
    detail:
      'We connect CRM systems, lead management, communication channels, business tools, and automated workflows to reduce manual work and create a more connected way of operating.',
    tags: [
      'CRM & Workflows',
      'Business Automation',
      'Lead Routing',
      'System Integrations'
    ],
    link: '/services/automation',
    icon: Workflow
  },

  {
    id: '06',
    title: 'Strategy & Transformation',
    summary: 'Create a clear digital roadmap for where your business is today and where it needs to go next.',
    detail:
      'We bring business goals, technology, customer experience, and digital growth together into a practical roadmap — helping you prioritize what to build, improve, connect, and scale.',
    tags: [
      'Digital Roadmaps',
      'Technology Strategy',
      'Growth Planning',
      'Continuous Improvement'
    ],
    link: '/services/business-consulting',
    icon: Sparkles
  }
];

export default function ServicesEditorial() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = services[activeIdx];
  const IconComponent = activeService.icon;

  return (
    <section className="bg-[#FFFFFF] text-[#08080C] py-24 sm:py-32 lg:py-40 border-b border-neutral-200/90 relative">
      
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
              WHAT WE BUILD
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#08080C] leading-[1.08] mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The Digital Capabilities Behind <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-[#670EF7] to-[#8B45FF] bg-clip-text text-transparent">
              Your Next Stage Of Growth.
            </span>
          </h2>

          <p 
            className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            From your digital presence to the systems behind it, we bring the right capabilities together to help your business reach more customers, operate better and grow.
          </p>
        </div>

        {/* Editorial Split Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-stretch relative">
            
            {/* LEFT: Fixed-Height Capability List (NO HEIGHT JITTER) */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-neutral-200/90 border-t border-b border-neutral-200/90">
              {services.map((service, index) => {
                const isActive = index === activeIdx;

                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveIdx(index)}
                    onClick={() => setActiveIdx(index)}
                    className={`relative py-6 sm:py-8 px-4 sm:px-6 transition-colors duration-200 cursor-pointer flex flex-col justify-center group ${
                      isActive ? 'bg-[#FBFBFA]' : 'hover:bg-neutral-50/60'
                    }`}
                  >
                    {/* Left Edge Active Bar */}
                    <div 
                      className={`absolute inset-y-0 left-0 w-1.5 rounded-r-full transition-all duration-200 ${
                        isActive ? 'bg-[#670EF7] opacity-100' : 'bg-transparent opacity-0'
                      }`} 
                    />

                    <div className="flex items-center justify-between gap-6 relative z-10">
                      <div className="flex items-center gap-5 sm:gap-7">
                        <span 
                          className={`text-2xl sm:text-3xl font-black font-mono transition-colors ${
                            isActive ? 'text-[#670EF7]' : 'text-neutral-300 group-hover:text-neutral-400'
                          }`}
                        >
                          {service.id}
                        </span>
                        <div>
                          <h3 
                            className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors ${
                              isActive ? 'text-[#08080C]' : 'text-neutral-600 group-hover:text-[#08080C]'
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {service.title}
                          </h3>
                          <p 
                            className="text-xs sm:text-sm text-neutral-500 line-clamp-1 mt-0.5 font-normal"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            {service.summary}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={service.link}
                        className={`p-2.5 rounded-full border transition-all duration-200 shrink-0 ${
                          isActive 
                            ? 'border-[#670EF7] text-[#670EF7] bg-[#670EF7]/10 shadow-xs' 
                            : 'border-neutral-200 text-neutral-400 group-hover:border-neutral-300 group-hover:text-neutral-700'
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT: Perfectly Sticky Showcase Card (Centered in viewport & zero jitter) */}
            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="w-full rounded-3xl border border-neutral-200/90 bg-[#FFFFFF] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_60px_rgba(103,14,247,0.12)] transition-shadow duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Top Subtle Purple Border Line */}
                  <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#670EF7] to-transparent opacity-80" />

                  <div>
                    {/* Card Header Bar */}
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-100">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-[#670EF7]/10 border border-[#670EF7]/20 flex items-center justify-center text-[#670EF7]">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div style={{ fontFamily: "'Poppins', sans-serif" }}>
                          <span className="text-[11px] uppercase tracking-widest text-[#8B45FF] font-semibold block">
                            Capability Focus
                          </span>
                          <span 
                            className="text-base font-extrabold text-[#08080C] uppercase tracking-wider"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {activeService.title}
                          </span>
                        </div>
                      </div>
                      <span 
                        className="text-3xl font-black font-mono text-neutral-300 select-none"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {activeService.id}
                      </span>
                    </div>

                    

                    <p 
                      className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-normal"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {activeService.detail}
                    </p>

                    {/* Tags displayed right inside the card where it stays stable */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {activeService.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full border border-neutral-200 bg-[#FBFBFA] text-neutral-600 text-xs font-medium"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Strip */}
                  <div 
                    className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <Link
                      href={activeService.link}
                      className="text-xs sm:text-sm uppercase tracking-wider font-bold text-[#08080C] hover:text-[#670EF7] transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>Explore Deep-Dive Capability</span>
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#670EF7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#670EF7] ring-4 ring-[#670EF7]/20" />
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

      </div>
    </section>
  );
}