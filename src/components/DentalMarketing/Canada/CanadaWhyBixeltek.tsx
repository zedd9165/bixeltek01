'use client'

import React from 'react'
import {
  FaTooth,
  FaBullseye,
  FaChartLine,
  FaDesktop,
  FaCity,
  FaShieldAlt,
} from 'react-icons/fa'

const differentiators = [
  {
    icon: FaTooth,
    title: 'Dental Marketing Specialization',
    description:
      'We do not market plumbers, restaurants, or ecommerce stores. We focus specifically on dental practices, understanding patient search behavior and high-value treatment economics.',
  },
  {
    icon: FaBullseye,
    title: 'Integrated Multi-Channel Paid Ads',
    description:
      'We combine Google Search Ads (immediate high-intent demand) with Meta Ads (social volume & retargeting) so your practice dominates both active searchers and social feeds.',
  },
  {
    icon: FaDesktop,
    title: 'High-Converting Treatment Landing Pages',
    description:
      'Rather than sending ad clicks to outdated or bloated websites, we build lightning-fast, mobile-optimized landing pages that turn clicks into phone calls and consultations.',
  },
  {
    icon: FaChartLine,
    title: '100% Transparent Attribution & ROI',
    description:
      'No vanity metrics or vague impressions reports. You see every tracked phone call, form inquiry, cost per lead, and booked consultation in a transparent live dashboard.',
  },
  {
    icon: FaCity,
    title: 'One Practice Per City Exclusivity',
    description:
      'We never take on your direct competitors in the same local market. When you partner with Bixeltek, our focus in your city is 100% dedicated to growing your clinic.',
  },
  {
    icon: FaShieldAlt,
    title: 'Active Canadian Market Experience',
    description:
      'With active campaigns across Ontario and North American dental clinics, our benchmarks and strategies are backed by real Canadian patient response data.',
  },
]

export default function CanadaWhyBixeltek() {
  return (
    <section className="py-20 md:py-24 bg-gray-50/70 relative overflow-hidden border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-blue-600 mb-3">
            THE BIXELTEK ADVANTAGE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight mb-4">
            Why Canadian Dental Practices Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Bixeltek
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            We don&apos;t just manage advertising budgets. We engineer the complete patient acquisition system behind your clinic.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-950 mb-2.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

