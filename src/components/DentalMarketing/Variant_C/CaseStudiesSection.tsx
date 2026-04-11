'use client'

import React from 'react'
import { FaTrophy, FaArrowUp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const caseStudies = [
  {
    title: 'Markham Gateway Dentistry',
    location: 'Scarborough, CA',
    challenge: 'Started with $20k/month revenue, wanted to scale to enterprise level',
    results: [
      { metric: '400+', label: 'New Patients', icon: '👥' },
      { metric: '380%', label: 'Patient Growth', icon: '📈' },
      { metric: '520%', label: 'ROI', icon: '💰' },
      { metric: '750+', label: 'Calls', icon: '☎️' },
    ],
    image: '/markham.png',
    color: 'from-blue-400 to-cyan-400',
    finalRevenue: '$100,000+/month',
  },
  {
    title: 'Revita Family Dentistry',
    location: 'Brampton, CA',
    challenge: 'Brand new practice in 2024, needed rapid patient acquisition',
    results: [
      { metric: '200+', label: 'Traffic', icon: '🌐' },
      { metric: '360+', label: 'Monthly Calls', icon: '📞' },
      { metric: '+310%', label: 'Bookings', icon: '📅' },
      { metric: '+265%', label: 'Revenue', icon: '💵' },
    ],
    image: '/RevitaDentistryLogo.webp',
    color: 'from-purple-400 to-pink-400',
    finalRevenue: '$80,000+/month',
  },
  {
    title: 'Listiyo Family Dentistry',
    location: 'California, US',
    challenge: 'High competition market with low patient calls',
    results: [
      { metric: '50+', label: 'Monthly Patients', icon: '😁' },
      { metric: '-65%', label: 'Cost Per Lead', icon: '💡' },
      { metric: '+240%', label: 'Conversions', icon: '✨' },
      { metric: '680%', label: 'ROI', icon: '🏆' },
    ],
    image: '/ListiyoFamilyDental_Primary_Mark.webp',
    color: 'from-green-400 to-emerald-400',
    finalRevenue: 'Fully Booked',
  },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export default function CaseStudiesSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#0a0a0a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-100 opacity-60 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-100 opacity-50 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-blue-600 mb-4">
            Real Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
            Real Case Studies from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Real Practices
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            See the dramatic results we&apos;ve delivered to dental practices across North America
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative border border-cyan-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100 lg:px-6">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60" />

                {/* Revenue badge */}
                {/* <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#0a0a0a] group-hover:bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-lg transition-colors duration-300">
                  <FaTrophy size={13} />
                  {study.finalRevenue}
                </div> */}
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-1">{study.title}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-4">{study.location}</p>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 pb-6 border-b border-gray-100">
                  <span className="font-semibold text-[#0a0a0a]">Challenge:</span>{" "}
                  {study.challenge}
                </p>

                {/* Results grid */}
                <div className="grid grid-cols-2 gap-3">
                  {study.results.map((result, rIdx) => (
                    <div
                      key={rIdx}
                      className="bg-blue-50 border border-blue-100 group-hover:border-blue-300 rounded-xl p-4 text-center transition-colors duration-300"
                    >
                      <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-1">
                        {result.metric}
                      </p>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        {result.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom accent bar */}
                <div className="mt-6 h-0.5 w-10 bg-blue-500 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
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
          <p className="text-gray-400 mb-5 text-base">Your practice could be next</p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#0a0a0a] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg group"
          >
            Get My Case Study Analysis
            <FaArrowUp className="rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
