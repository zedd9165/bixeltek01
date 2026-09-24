'use client'

import React from 'react'
import { FaTooth, FaSearch, FaArrowRight, FaCheckCircle } from 'react-icons/fa'

const treatments = [
  {
    title: 'Dental Implants',
    tag: 'HIGH COMMERCIAL VALUE',
    searchIntent: '"dental implants near me"',
    channels: 'Google Search + Meta Retargeting',
    description:
      'Capture patients looking for single tooth replacement, implant-supported bridges, or full-arch restorations with high average case values.',
    badgeColor: 'text-cyan-700 bg-cyan-50 border-cyan-200',
  },
  {
    title: 'Invisalign & Clear Aligners',
    tag: 'HIGH CONSIDERATION',
    searchIntent: '"invisalign cost Toronto"',
    channels: 'Meta Ads + Google Search',
    description:
      'Target teens and adults researching orthodontic alternatives with compelling smile transformation case studies and clear monthly financing offers.',
    badgeColor: 'text-purple-700 bg-purple-50 border-purple-200',
  },
  {
    title: 'Emergency Dentistry',
    tag: 'IMMEDIATE INTENT',
    searchIntent: '"emergency dentist open now"',
    channels: 'Google Search Call Ads',
    description:
      'Direct urgent patients with immediate dental pain straight into incoming phone calls to your reception desk within minutes of their search.',
    badgeColor: 'text-rose-700 bg-rose-50 border-rose-200',
  },
  {
    title: 'Porcelain Veneers & Smile Makeovers',
    tag: 'ELECTIVE / COSMETIC',
    searchIntent: '"veneers dentist near me"',
    channels: 'Meta Visual Ads + Google Search',
    description:
      'Showcase real aesthetic transformations on Instagram and Facebook to attract patients interested in cosmetic dental enhancements.',
    badgeColor: 'text-amber-700 bg-amber-50 border-amber-200',
  },
  {
    title: 'Wisdom Teeth Removal',
    tag: 'HIGH TREATMENT DEMAND',
    searchIntent: '"wisdom teeth extraction"',
    channels: 'Google Ads Search',
    description:
      'Capture parents and young adults seeking consultation, x-rays, and surgical extraction when wisdom teeth begin causing discomfort.',
    badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
  },
  {
    title: 'General & Family Dentistry',
    tag: 'LIFETIME PATIENT VALUE',
    searchIntent: '"dentist near me accepting patients"',
    channels: 'Google Local + Search',
    description:
      'Attract new local families moving into your neighborhood looking for routine cleanings, checkups, and a reliable family dentist.',
    badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  },
]

export default function CanadaTreatments() {
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
    <section className="py-20 md:py-24 bg-gray-50/70 relative overflow-hidden border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-blue-600 mb-3">
            TREATMENT-SPECIFIC MARKETING
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight mb-4">
            Campaigns Engineered Around The{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Procedures You Want Most
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Instead of generic practice ads, we build dedicated advertising campaigns and focused landing pages for specific high-margin dental procedures.
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Tag & Icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[11px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md border ${treatment.badgeColor}`}
                  >
                    {treatment.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <FaTooth size={14} />
                  </div>
                </div>

                {/* Treatment Title */}
                <h3 className="text-xl font-bold text-gray-950 mb-2 tracking-tight">
                  {treatment.title}
                </h3>

                {/* Sample Search Query */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg mb-3">
                  <FaSearch size={10} className="text-blue-500 flex-shrink-0" />
                  <span className="truncate">{treatment.searchIntent}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {treatment.description}
                </p>
              </div>

              {/* Channels */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="font-semibold text-gray-700">Recommended Channels:</span>
                <span className="text-blue-600 font-bold">{treatment.channels}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Standardized Primary CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={scrollToAudit}
            className="inline-flex items-center justify-center gap-2.5 bg-gray-950 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-tight shadow-md transition-all duration-200 cursor-pointer"
          >
            <span>GET MY FREE AUDIT & TARGET HIGH-VALUE TREATMENTS</span>
            <FaArrowRight size={13} />
          </button>
          <p className="text-xs text-gray-500 mt-3">
            During your free audit, we analyze search volume for these specific treatments in your Canadian postal area.
          </p>
        </div>
      </div>
    </section>
  )
}

