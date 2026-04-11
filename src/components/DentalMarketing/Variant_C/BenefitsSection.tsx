'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  FaStar,
  FaShieldAlt,
  FaChartBar,
  FaClock,
  FaUserCheck,
  FaRocket,
} from 'react-icons/fa'

const benefits = [
  {
    icon: FaStar,
    title: 'Dental-Only Expertise',
    description:
      'We work exclusively with dental practices. Every campaign, every strategy is built from 50+ practices worth of data and real-world results.',
    accent: '#eff6ff',
    iconColor: '#1a56db',
    num: '01',
  },
  {
    icon: FaShieldAlt,
    title: '60-Day Results Guarantee',
    description:
      'If you don\'t see measurable growth within 60 days, we keep optimizing at zero extra cost until you do. No excuses, just results.',
    accent: '#ecfdf5',
    iconColor: '#059669',
    num: '02',
  },
  {
    icon: FaChartBar,
    title: 'Transparent ROI Reporting',
    description:
      'Real-time dashboards showing cost per lead, cost per patient, and exactly how much revenue your ads are generating every single day.',
    accent: '#fdf4ff',
    iconColor: '#9333ea',
    num: '03',
  },
  {
    icon: FaClock,
    title: '10-Day Onboarding',
    description:
      'Campaigns go live fast. Our streamlined onboarding gets your Google Ads running and driving appointment calls within 30 days.',
    accent: '#fff7ed',
    iconColor: '#ea580c',
    num: '04',
  },
  {
    icon: FaUserCheck,
    title: 'Dedicated Account Manager',
    description:
      'One expert who knows your practice, answers your calls, and owns your results. No being passed around between teams or reps.',
    accent: '#eff6ff',
    iconColor: '#1a56db',
    num: '05',
  },
  {
    icon: FaRocket,
    title: 'Scale When You\'re Ready',
    description:
      'Start with one location, expand to many. Our infrastructure handles multi-location dental groups with ease and zero disruption.',
    accent: '#ecfdf5',
    iconColor: '#059669',
    num: '06',
  },
]

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative bg-gray-50 py-20 md:py-28 overflow-hidden"
    >
      {/* Subtle orb */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-50 to-cyan-50 opacity-60 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-blue-600 mb-4">
            Why choose us
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-[-0.03em] text-gray-950 leading-tight mb-4">
            Why Dentists Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Bixeltek
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            More than just a marketing agency — we&apos;re strategic growth partners dedicated
            to your practice&apos;s success.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(26,86,219,0.1)' }}
              className="group relative bg-white border border-cyan-200 rounded-2xl p-8 cursor-default overflow-hidden transition-all hover:border-blue-200"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              {/* Corner accent bg */}
              <div
                className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: benefit.accent }}
              />

              {/* Number */}
              <p className="text-sm font-bold text-gray-300 tracking-[0.08em] mb-4 group-hover:text-gray-400 transition-colors duration-200">
                {benefit.num}
              </p>

              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 transition-transform duration-200 group-hover:scale-110"
                style={{ background: benefit.accent }}
              >
                <benefit.icon size={18} style={{ color: benefit.iconColor }} />
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-bold text-gray-950 mb-2.5 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-gray-500 leading-relaxed">
                {benefit.description}
              </p>

              {/* Bottom bar */}
              <div className="mt-6 h-[1.5px] w-6 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full group-hover:w-10 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}