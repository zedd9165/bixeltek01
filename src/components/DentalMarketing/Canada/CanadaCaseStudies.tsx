'use client'

import React from 'react'
import { FaExternalLinkAlt, FaMapMarkerAlt, FaCheckCircle, FaPhoneVolume, FaCalendarAlt, FaChartLine } from 'react-icons/fa'

const canadianCaseStudies = [
  {
    title: 'Revita Family Dentistry',
    url: 'https://revitadentistry.ca/',
    location: 'Brampton, Ontario',
    type: 'New Practice Launch & Growth',
    challenge: 'Brand-new dental practice in 2024 with zero existing patient base, requiring rapid, predictable patient bookings in a competitive GTA market.',
    system: 'Google Ads Search (emergency dentistry, Invisalign, general dentistry) + Meta Community Ads + Dedicated conversion landing pages + Call tracking.',
    results: [
      {
        metric: '360+',
        label: 'Monthly Phone Calls',
        detail: 'Direct patient phone inquiries generated monthly via tracked call extensions and landing pages.',
      },
      {
        metric: '+310%',
        label: 'Booking Growth',
        detail: 'Increase in scheduled patient consultations during the first 6 months of campaign optimization.',
      },
      {
        metric: '+265%',
        label: 'Practice Revenue Growth',
        detail: 'Growth trajectory moving the new clinic to $80,000+/month in production volume.',
      },
      {
        metric: '200+',
        label: 'Qualified Monthly Visits',
        detail: 'Targeted local visitors actively looking for dental services in Brampton.',
      },
    ],
    highlight: 'Brampton, ON Practice Case Study',
  },
  {
    title: 'Markham Gateway Dentistry',
    url: 'https://markhamgatewaydentistry.ca/',
    location: 'Scarborough / Markham, Ontario',
    type: 'Conversion & Traffic Optimization',
    challenge: 'Established practice receiving website traffic but struggling with low enquiry conversion rates and unpredictable new patient volume.',
    system: 'High-intent Google Ads search restructuring + Treatment landing page redesign + Call tracking attribution + Form CRO.',
    results: [
      {
        metric: '750+',
        label: 'Monthly Patient Calls',
        detail: 'Total tracked incoming calls across high-intent treatment and general practice keywords.',
      },
      {
        metric: '400+',
        label: 'New Patients Inquiries',
        detail: 'Qualified patient inquiries converted through targeted treatment campaigns.',
      },
      {
        metric: '+380%',
        label: 'Patient Volume Growth',
        detail: 'Multiplied month-over-month qualified inquiries compared to pre-campaign benchmarks.',
      },
      {
        metric: '$100K+',
        label: 'Monthly Production Target',
        detail: 'Consistent monthly production generated from sustained high-value treatment inquiries.',
      },
    ],
    highlight: 'Scarborough, ON Practice Case Study',
  },
]

export default function CanadaCaseStudies() {
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
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-blue-600 mb-3">
            PROVEN CANADIAN EXPERIENCE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight mb-4">
            Real Canadian Dental Case Studies with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Verified Context
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            See how targeted advertising, treatment landing pages, and lead tracking drive measurable patient appointments for dental clinics in Ontario.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {canadianCaseStudies.map((study, idx) => (
            <div
              key={idx}
              className="rounded-2xl md:rounded-3xl border border-gray-200 bg-white p-7 sm:p-9 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge & Location */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    <FaMapMarkerAlt size={11} className="text-blue-600" />
                    {study.location}
                  </span>
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <span>Visit Live Website</span>
                    <FaExternalLinkAlt size={10} />
                  </a>
                </div>

                {/* Clinic Name */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mb-2 tracking-tight">
                  {study.title}
                </h3>
                <p className="text-sm font-semibold text-blue-600 mb-5">
                  {study.type}
                </p>

                {/* Challenge & System Context */}
                <div className="space-y-3.5 mb-8 pb-6 border-b border-gray-100 text-sm">
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                    <p className="font-bold text-gray-900 mb-1">Practice Challenge:</p>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{study.challenge}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100">
                    <p className="font-bold text-gray-900 mb-1">Acquisition System Deployed:</p>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{study.system}</p>
                  </div>
                </div>

                {/* Metrics with Exact Context */}
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Verified Performance Metrics
                </p>
                <div className="grid grid-cols-2 gap-3.5 mb-6">
                  {study.results.map((res, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-4 rounded-xl bg-white border border-gray-100 shadow-2xs hover:border-blue-200 transition-colors"
                    >
                      <p className="text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-tight mb-1">
                        {res.metric}
                      </p>
                      <p className="text-xs font-bold text-gray-900 mb-1">
                        {res.label}
                      </p>
                      <p className="text-[11px] text-gray-500 leading-snug">
                        {res.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-gray-100">
                <button
                  onClick={scrollToAudit}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <span>GET MY FREE AUDIT FOR SIMILAR RESULTS</span>
                  <FaChartLine size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

