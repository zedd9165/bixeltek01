'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  FaChartLine,
  FaSearch,
  FaDesktop,
  FaPhoneAlt,
  FaStar,
  FaEnvelope,
  FaRobot,
} from 'react-icons/fa'

const services = [
  {
    icon: FaChartLine,
    title: 'Google Ads Management',
    description:
      'High-converting campaigns built exclusively for dental practices. Target high-intent patients ready to book.',
    features: [
      'Keyword research & strategy',
      'Ad copy optimization',
      'Conversion tracking',
      'Monthly performance reports',
    ],
    accent: '#eff6ff',
    iconColor: '#1a56db',
  },
  {
    icon: FaSearch,
    title: 'Local SEO Domination',
    description:
      'Rank #1 in your city for high-value dental searches. Own your local market before competitors do.',
    features: [
      'Google Business optimization',
      'Local citation building',
      'Review generation',
      'Map pack ranking',
    ],
    accent: '#ecfdf5',
    iconColor: '#059669',
  },
  {
    icon: FaDesktop,
    title: 'Landing Page Design',
    description:
      'Custom pages engineered for maximum conversions. Turn clicks into booked appointments.',
    features: [
      'CRO-focused design',
      'A/B testing',
      'Mobile-first build',
      'Speed optimized',
    ],
    accent: '#fdf4ff',
    iconColor: '#9333ea',
  },
  {
    icon: FaPhoneAlt,
    title: 'Call & Lead Tracking',
    description:
      'Know exactly which campaigns drive calls and bookings. Full attribution from click to patient.',
    features: [
      'Dynamic call tracking',
      'CRM integration',
      'Lead scoring',
      'ROI dashboards',
    ],
    accent: '#fff7ed',
    iconColor: '#ea580c',
  },
  {
    icon: FaStar,
    title: 'Reputation Management',
    description:
      'Build a 5-star reputation that converts browsers into patients. Automated review requests that work.',
    features: [
      'Review automation',
      'Response management',
      'Sentiment monitoring',
      'Competitor analysis',
    ],
    accent: '#eff6ff',
    iconColor: '#1a56db',
  },
 {
    icon: FaRobot,
    title: 'AI Agentic Call Integration',
    description:
      'Never miss a patient call again. AI-powered voice agents handle inquiries, book appointments, and follow up 24/7—just like a trained front desk.',
    features: [
      '24/7 AI call answering',
      'Appointment booking & rescheduling',
      'Missed call auto-followups',
      'Human-like voice conversations',
    ],
    accent: '#ecfdf5',
    iconColor: '#059669',
  },
]

export default function ServicesSection() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-blue-600 mb-4">
            What we do
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-[-0.03em] text-gray-950 leading-tight mb-4">
            Complete Dental Marketing{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Suite
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to dominate your local market and grow your practice revenue.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              whileHover={{ y: -6, boxShadow: '0 20px 56px rgba(26,86,219,0.1)' }}
              className="group relative bg-white border border-cyan-200 rounded-2xl p-8 cursor-default overflow-hidden transition-all hover:border-blue-200"
            >
              {/* Top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 transition-transform duration-200 group-hover:scale-110"
                style={{ background: service.accent }}
              >
                <service.icon size={20} style={{ color: service.iconColor }} />
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-bold text-gray-950 mb-2.5 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-gray-500 leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2.5 text-[13px] text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Bottom bar */}
              <div className="mt-6 h-[1.5px] w-7 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full group-hover:w-12 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 max-w-lg mx-auto mb-7 leading-relaxed">
            All services come with our 60-day results guarantee. If you&apos;re not seeing measurable
            improvement, we&apos;ll optimize for free until you do.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ y: -2, boxShadow: '0 12px 32px rgba(26,86,219,0.3)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center bg-gray-950 text-white px-8 py-4 rounded-xl text-[15px] font-bold tracking-tight"
          >
            Explore Our Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}