'use client'

import React from 'react'
import {
  FaSearch,
  FaFileAlt,
  FaPhoneVolume,
  FaUserCheck,
  FaArrowDown,
  FaArrowRight,
} from 'react-icons/fa'

const systemSteps = [
  {
    step: '01',
    icon: FaSearch,
    title: 'High-Intent Google & Meta Campaigns',
    description:
      'We run Google Ads targeting patients actively searching for specific treatments (implants, clear aligners, emergency dental) alongside Meta Ads to capture localized social demand in your city.',
    badge: 'Traffic & Intent Capture',
  },
  {
    step: '02',
    icon: FaFileAlt,
    title: 'Treatment-Specific Landing Pages',
    description:
      'Instead of confusing visitors with a generic website, we direct ad clicks to fast, mobile-first treatment landing pages engineered with high trust, doctor credentials, and clear calls to action.',
    badge: 'Conversion Rate Optimization',
  },
  {
    step: '03',
    icon: FaPhoneVolume,
    title: 'Lead & Dynamic Call Tracking',
    description:
      'Every phone call and form submission is recorded and traced directly back to the exact campaign, ad creative, and keyword that generated it, so you know exactly which dollars are working.',
    badge: 'Attribution & Transparency',
  },
  {
    step: '04',
    icon: FaUserCheck,
    title: 'Front-Desk Follow-Up & Bookings',
    description:
      'We connect incoming leads directly to your clinic reception with rapid notifications and follow-up protocols, turning incoming enquiries into scheduled, chair-filling consultations.',
    badge: 'Booked Patient Enquiries',
  },
]

export default function CanadaAcquisitionProcess() {
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
    <section className="py-20 md:py-24 bg-gray-50/70 border-t border-gray-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-blue-600 mb-3">
            THE ACQUISITION ARCHITECTURE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight mb-4">
            How Bixeltek Generates{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Qualified Patient Enquiries
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Most dental marketing fails because ads lead to generic homepages with zero conversion tracking. Here is the connected system we build for your clinic:
          </p>
        </div>

        {/* 4-Step Process Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {systemSteps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-white border border-gray-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step Header */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                      STEP {step.step}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-400">
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-gray-950 text-white flex items-center justify-center mb-5 shadow-sm group-hover:bg-blue-600 transition-colors">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-lg font-bold text-gray-950 mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-blue-600">
                  <span>Inquiry Pipeline</span>
                  <FaArrowRight size={10} className="hidden lg:block text-blue-400" />
                  <FaArrowDown size={10} className="lg:hidden text-blue-400" />
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 text-center">
          <button
            onClick={scrollToAudit}
            className="inline-flex items-center justify-center gap-2 bg-gray-950 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-tight shadow-md transition-all duration-200 cursor-pointer"
          >
            <span>GET MY FREE AUDIT & EXPLORE YOUR PRACTICE SYSTEM</span>
            <FaArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  )
}

