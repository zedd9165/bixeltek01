'use client'

import React from 'react'
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: 'Markham Gateway Dentistry',
    url: 'https://markhamgatewaydentistry.ca/',
    location: 'Scarborough, Ontario',
    challenge:
      "Strong website traffic wasn't translating into enough calls or new patient opportunities.",
    approach:
      'Patient acquisition strategy, paid search optimization, conversion tracking, and landing-page improvements.',
    results: [
      { metric: '400+', label: 'New Patients' },
      { metric: '750+', label: 'Calls / Month' },
      { metric: '520%', label: 'ROI' },
    ],
    image: '/markham.png',
    outcome: '$100K+ Monthly Patient Revenue',
  },
  {
    title: 'Revita Family Dentistry',
    url: 'https://revitadentistry.ca/',
    location: 'Brampton, Ontario',
    challenge:
      'A new practice needed to build patient demand quickly and establish a consistent flow of enquiries.',
    approach:
      'Local patient acquisition, paid advertising, conversion-focused campaigns, and booking optimization.',
    results: [
      { metric: '360+', label: 'Monthly Calls' },
      { metric: '+310%', label: 'Bookings' },
      { metric: '+265%', label: 'Revenue' },
    ],
    image: '/RevitaDentistryLogo.webp',
    outcome: '$80K+ Monthly Patient Revenue',
  },
  {
    title: 'Listiyo Family Dentistry',
    url: 'https://listiyofamilydentalca.com/',
    location: 'California, USA',
    challenge:
      'Operating in a highly competitive market with too few patient calls and inefficient lead acquisition.',
    approach:
      'Paid search optimization, conversion improvements, and a more focused patient acquisition strategy.',
    results: [
      { metric: '50+', label: 'Monthly Patients' },
      { metric: '-65%', label: 'Cost Per Lead' },
      { metric: '680%', label: 'ROI' },
    ],
    image: '/ListiyoFamilyDental_Primary_Mark.webp',
    outcome: 'Practice Reached Full Capacity',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

export default function CaseStudiesSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(#0a0a0a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-100 opacity-50 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-100 opacity-40 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-blue-600 mb-4">
            PROVEN DENTAL GROWTH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-4">
            Real Practices.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Measurable Growth.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            See how we helped dental practices generate more calls, patients,
            and revenue through performance marketing and conversion-focused
            systems.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid lg:grid-cols-3 gap-6 xl:gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, idx) => (
            <motion.a
              key={idx}
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.10)] transition-all duration-300"
            >
              {/* Practice image */}
              <div className="relative h-48 overflow-hidden bg-gray-50 border-b border-gray-100">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-contain px-8 py-6 group-hover:scale-[1.03] transition-transform duration-500"
                />

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/95 border border-gray-200 flex items-center justify-center shadow-sm">
                  <FaExternalLinkAlt
                    size={10}
                    className="text-gray-400 group-hover:text-blue-600 transition-colors"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-7">
                {/* Client */}
                <div className="mb-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-blue-600 mb-1.5">
                    {study.location}
                  </p>

                  <h3 className="text-xl font-bold tracking-tight text-[#0a0a0a] group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                </div>

                {/* Challenge */}
                <div className="mb-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400 mb-2">
                    THE CHALLENGE
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Approach */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400 mb-2">
                    WHAT WE CHANGED
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {study.approach}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400 mb-3">
                    RESULTS
                  </p>

                  <div className="grid grid-cols-3 gap-2">
                    {study.results.map((result, rIdx) => (
                      <div
                        key={rIdx}
                        className="rounded-xl bg-gray-50 border border-gray-100 px-2 py-3 text-center group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors duration-300"
                      >
                        <p className="text-lg md:text-xl font-extrabold tracking-tight text-gray-950">
                          {result.metric}
                        </p>

                        <p className="mt-1 text-[9px] md:text-[10px] font-semibold uppercase tracking-wide text-gray-400 leading-tight">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business outcome */}
                <div className="mt-auto rounded-xl bg-gray-950 px-4 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-1">
                    BUSINESS OUTCOME
                  </p>

                  <p className="text-sm font-bold text-white">
                    {study.outcome}
                  </p>
                </div>

                {/* View case study */}
                <div className="flex items-center gap-2 mt-5 text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                  <span>View Practice</span>

                  <FaArrowRight
                    size={11}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
