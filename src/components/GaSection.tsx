'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';
import ContactFrom from './ContactFrom';

export default function GaSection() {
    return (
        <section className="bg-white py-20 lg:py-32 border-b border-gray-100">
            <div className="lg:max-w-[80%] mx-auto px-6 lg:px-12">
                
                {/* Main 50/50 Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left: Content */}
                    {/* Left: Content */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="flex flex-col justify-center"
>
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-sofiasanscondensed font-bold text-zinc-900 tracking-tight leading-[1.1] mb-6 uppercase">
    A Google Ads Company That
    <span className="text-purple-600"> Cares About Results, </span>
    Not Just Clicks
  </h2>

  <div className="space-y-6 text-zinc-600 text-lg font-light leading-relaxed">

    <p>
      Every click on Google Ads costs money—but not every click becomes a
      customer. That&apos;s why we build campaigns focused on what matters most:
      generating qualified leads, increasing revenue, and delivering measurable
      business growth instead of vanity metrics.
    </p>

    <p>
      As a <strong className="font-semibold text-zinc-900">Google Partner Certified Company based in Hyderabad</strong>,
      our in-house team of PPC specialists manages every stage of your campaign—from
      keyword research and audience targeting to ad creation, conversion tracking,
      bid optimization, and continuous performance improvements. Every decision is
      backed by data, not guesswork.
    </p>

    <div className="bg-zinc-50 border-l-4 border-purple-600 p-6 my-8">
      <h3 className="text-lg font-bold text-zinc-900 mb-4 font-sofiasanscondensed tracking-wide uppercase">
        What Makes Our Campaigns Different?
      </h3>

      <ul className="space-y-3 text-base">

        <li className="flex items-start">
          <FiCheckCircle className="text-purple-600 text-lg flex-shrink-0 mt-1 mr-2" />
          <span>
            <strong>Search campaigns built around buying intent</strong> instead
            of broad, expensive keywords.
          </span>
        </li>

        <li className="flex items-start">
          <FiCheckCircle className="text-purple-600 text-lg flex-shrink-0 mt-1 mr-2" />
          <span>
            <strong>Continuous optimization and A/B testing</strong> to improve
            conversions and reduce wasted ad spend.
          </span>
        </li>

        <li className="flex items-start">
          <FiCheckCircle className="text-purple-600 text-lg flex-shrink-0 mt-1 mr-2" />
          <span>
            <strong>Transparent reporting with measurable KPIs</strong> so you
            always know how your advertising budget is performing.
          </span>
        </li>

      </ul>
    </div>

    <p>
      Whether you&apos;re looking to generate more enquiries, increase online sales,
      book more appointments, or dominate your local market, our campaigns are
      designed to put your business in front of customers who are actively
      searching for your products or services.
    </p>

    <p className="font-medium text-zinc-900 text-xl">
      Because success isn&apos;t measured by impressions or clicks—it&apos;s measured by
      the customers your business gains.
    </p>

  </div>

  <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
    <Link href="/contact-us">
      <button className="bg-black text-white font-medium px-8 py-4 rounded-lg hover:bg-purple-600 transition-colors duration-300 w-full sm:w-auto">
        Book Your Free Strategy Call
      </button>
    </Link>
  </div>
</motion.div>

                    {/* Right: Cinematic Image Container */}
                    <div className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0 shadow-2xl border border-black/10">
                            <ContactFrom width="w-full" />
                        </div>

                </div>

                {/* Bottom Stats Grid */}
                <div className="mt-24 pt-16 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                        
                        <div className="flex flex-col items-center pt-8 md:pt-0">
                            <h2 className="text-6xl lg:text-7xl font-sofiasanscondensed font-bold text-zinc-900 mb-2">7+</h2>
                            <p className="font-sofiasanscondensed text-purple-600 font-bold tracking-widest uppercase text-lg mb-2">Years Optimizing Google Ads</p>
                            <p className="text-zinc-500 font-light max-w-[250px]">
                                Helping businesses generate qualified leads with data-driven PPC campaigns.
                            </p>
                        </div>

                        <div className="flex flex-col items-center pt-8 md:pt-0">
                            <h2 className="text-6xl lg:text-7xl font-sofiasanscondensed font-bold text-zinc-900 mb-2">9</h2>
                            <p className="font-sofiasanscondensed text-purple-600 font-bold tracking-widest uppercase text-lg mb-2">Google Certified Experts</p>
                            <p className="text-zinc-500 font-light max-w-[250px]">
                                Certified professionals focused on maximizing ROI and lowering acquisition costs.
                            </p>
                        </div>

                        <div className="flex flex-col items-center pt-8 md:pt-0">
                            <h2 className="text-6xl lg:text-7xl font-sofiasanscondensed font-bold text-zinc-900 mb-2">100+</h2>
                            <p className="font-sofiasanscondensed text-purple-600 font-bold tracking-widest uppercase text-lg mb-2">Businesses Helped</p>
                            <p className="text-zinc-500 font-light max-w-[250px]">
                                Trusted by businesses across India and international markets to scale through Google Ads
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}