'use client'

import React from 'react'
import {
  FaClipboardList,
  FaLightbulb,
  FaRocket,
  FaChartLine,
  FaSearch,
  FaFileAlt,
  FaPhoneVolume,
  FaUserCheck,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const steps = [
  {
    step: '01',
    icon: FaSearch,
    title: 'High-Intent Google & Meta Campaigns',
    description:
      'We run Google Ads targeting patients actively searching for specific treatments (implants, clear aligners, emergency dental) alongside Meta Ads to capture localized social demand in your city.',
  },
  {
    step: '02',
    icon: FaFileAlt,
    title: 'Treatment-Specific Landing Pages',
    description:
      'Instead of confusing visitors with a generic website, we direct ad clicks to fast, mobile-first treatment landing pages engineered with high trust, doctor credentials, and clear calls to action.',
  },
  {
    step: '03',
    icon: FaPhoneVolume,
    title: 'Lead & Dynamic Call Tracking',
    description:
      'Every phone call and form submission is recorded and traced directly back to the exact campaign, ad creative, and keyword that generated it, so you know exactly which dollars are working.',
  },
  {
    step: '04',
    icon: FaUserCheck,
    title: 'Front-Desk Follow-Up & Bookings',
    description:
      'We connect incoming leads directly to your clinic reception with rapid notifications and follow-up protocols, turning incoming enquiries into scheduled, chair-filling consultations.',
  },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export default function ProcessSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#0a0a0a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-100 blur-[80px] opacity-60" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full bg-cyan-100 blur-[80px] opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
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
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={fadeUp} className="relative group">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-6 h-px bg-gradient-to-r from-blue-400 to-blue-200 z-10" />
              )}

              <motion.div
                whileHover={{ y: -6 }}
                className="h-full bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
              >
                {/* Step badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] group-hover:bg-blue-600 flex items-center justify-center text-white font-bold text-lg transition-colors duration-300 shadow-md">
                    {step.step}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
                </div>

                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3 group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>

                {/* Animated bottom bar */}
                <div className="mt-6 h-0.5 w-10 bg-blue-500 rounded-full group-hover:w-full transition-all duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-base text-gray-400 mb-5">See Where Your Practice Is Losing Patients</p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#audit-form"
            className="inline-flex items-center gap-3 bg-[#0a0a0a] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg group"
          >
            Get My Free $250 Audit
            <FaRocket className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}