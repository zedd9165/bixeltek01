'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const capabilities = [
  { name: 'SEO & Search', link: '/services/seo-services' },
  { name: 'Google Ads', link: '/services/google-ads' },
  { name: 'Web Development', link: '/services/web-design' },
  { name: 'Ecommerce', link: '/ecommerce-websites' },
  { name: 'Mobile Apps', link: '/services/app-development' },
  { name: 'AI & Automation', link: '/services/automation' },
];

export const FooterCTA = () => {
  return (
    <section className="bg-[#050507] py-20 sm:py-28 border-t border-white/[0.08] text-white">
      <div className="w-full lg:max-w-[90%] mx-auto px-6 md:px-16">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 pb-16 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8c45ff] font-bold block mb-3">
              Direct Engineering Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Have a project or growth target in mind?
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-normal">
              Tell us what you are building, fixing, or scaling. Speak directly with our technical growth directors.
            </p>
          </div>

          <div className="shrink-0">
            <Link 
              href="/contact-us"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-neutral-950 rounded-full font-bold text-base hover:bg-[#670ef7] hover:text-white transition-all shadow-lg hover:shadow-[0_4px_30px_rgba(103,14,247,0.4)] gap-2 group"
            >
              <span>Start a Conversation</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Quick Discovery Strip */}
        <div className="pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
            Core Service Architecture:
          </div>
          <div className="flex flex-wrap gap-2.5">
            {capabilities.map((cap) => (
              <Link
                key={cap.name}
                href={cap.link}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-medium text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/[0.06] transition-colors"
              >
                <span>{cap.name}</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
