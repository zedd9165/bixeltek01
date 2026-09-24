'use client'

import React from 'react'
import {
  FaSearch,
  FaBullhorn,
  FaLaptopCode,
  FaChartPie,
  FaMapMarkedAlt,
  FaUserFriends,
  FaRegLightbulb,
  FaTasks,
  FaCheck,
  FaArrowRight,
} from 'react-icons/fa'

const auditPoints = [
  {
    icon: FaSearch,
    title: 'Google Ads Audit & Budget Leak Check',
    description:
      'We examine existing search terms, negative keywords, click costs, and bidding configurations to identify wasted ad spend and high-intent keyword gaps in your city.',
  },
  {
    icon: FaBullhorn,
    title: 'Meta Ads & Creative Review',
    description:
      'We evaluate your Facebook and Instagram ad creatives, target audience segments, local radius targeting, and offer appeal to see why social traffic is or isn’t converting.',
  },
  {
    icon: FaLaptopCode,
    title: 'Landing Page & Mobile CRO Analysis',
    description:
      'We review your website and landing pages on mobile viewports to diagnose conversion bottlenecks, friction points, slow loading times, and weak calls to action.',
  },
  {
    icon: FaChartPie,
    title: 'Conversion & Call Tracking Review',
    description:
      'We check whether your phone calls, form submissions, and Meta Pixel / GA4 events are tracking properly so you have clearer and more reliable marketing attribution.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Local Google Maps & Search Visibility',
    description:
      'We benchmark your Google Business Profile rankings, local 3-pack visibility, and patient review velocity against neighboring clinics in your catchment area.',
  },
  {
    icon: FaUserFriends,
    title: 'Local Competitor Campaign Analysis',
    description:
      'We identify which competing dental practices are bidding on your city keywords, what offers they promote, and where your clinic has an advantage.',
  },
  {
    icon: FaRegLightbulb,
    title: 'High-Margin Patient Opportunities',
    description:
      'We calculate local monthly search demand for top treatment categories like dental implants, Invisalign, and emergency dental care.',
  },
  {
    icon: FaTasks,
    title: 'Prioritized 30-Day Growth Roadmap',
    description:
      'You receive clear, actionable priorities on what changes will produce the fastest increase in booked patient appointments without wasting budget.',
  },
]

export default function CanadaAuditBreakdown() {
  const scrollToAudit = (e: React.MouseEvent) => {
    e.preventDefault()
    const formElement = document.getElementById('hero-audit-form') || document.getElementById('audit-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      const firstInput = formElement.querySelector('input')
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 500)
      }
    }
  }

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
            <span>VALUED AT $250 — 100% FREE FOR QUALIFIED PRACTICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight mb-4">
            What Is Included in Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Free Dental Growth Audit
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            A comprehensive, no-obligation evaluation of your clinic&apos;s digital patient acquisition pipeline conducted by our certified Canadian dental marketing specialists.
          </p>
        </div>

        {/* 8-Point Tangible Audit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {auditPoints.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-bold text-gray-950 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-blue-600">
                  <FaCheck size={10} />
                  <span>Included in 30-min consultation</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-14 max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-blue-50/70 border border-blue-200 text-center">
          <h4 className="text-xl font-extrabold text-gray-950 mb-2">
            Claim Your Free $250 Dental Growth Audit
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
            Because we work with a limited number of dental practices in each market, audit availability may be limited.
          </p>
          <button
            onClick={scrollToAudit}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold tracking-tight shadow-md transition-all cursor-pointer"
          >
            <span>GET MY FREE AUDIT</span>
            <FaArrowRight size={12} />
          </button>
        </div>
      </div>
    </section>
  )
}

