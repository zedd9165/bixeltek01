'use client'

import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

const comparisonData = [
  {
    feature: 'Dental Industry Expertise',
    bixeltek: true,
    competitors: false,
  },
  {
    feature: 'Google Partner Certified',
    bixeltek: true,
    competitors: false,
  },
  {
    feature: 'Month-to-Month (No Contracts)',
    bixeltek: true,
    competitors: false,
  },
  {
    feature: 'Dedicated Account Manager',
    bixeltek: true,
    competitors: false,
  },
  {
    feature: 'Real-Time Performance Dashboard',
    bixeltek: true,
    competitors: true,
  },
  {
    feature: 'Custom Landing Pages',
    bixeltek: true,
    competitors: true,
  },
  {
    feature: 'Call Tracking & Analytics',
    bixeltek: true,
    competitors: true,
  },
  {
    feature: 'Results in 30-60 Days',
    bixeltek: true,
    competitors: false,
  },
  {
    feature: 'ROI Guarantee',
    bixeltek: true,
    competitors: false,
  },
  {
    feature: 'Transparent Reporting',
    bixeltek: true,
    competitors: false,
  },
]

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
};

export default function ComparisonSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#0a0a0a 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-100 blur-[90px] opacity-70" />
      <div className="pointer-events-none absolute top-0 right-0 w-72 h-72 rounded-full bg-cyan-100 blur-[80px] opacity-50" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-blue-600 mb-4">
            Why Bixeltek
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Bixeltek?
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            See how we compare to other dental marketing agencies
          </p>
        </motion.div>

        {/* ── Mobile: two stacked cards ── */}
        <div className="md:hidden space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-blue-600 bg-blue-50 p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">B</span>
              </div>
              <div>
                <p className="font-bold text-[#0a0a0a]">Bixeltek</p>
                <p className="text-xs text-gray-500">Our Approach</p>
              </div>
            </div>
            {comparisonData
              .filter((i) => i.bixeltek)
              .map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 py-2.5 border-b border-blue-100 last:border-0">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <FaCheck size={10} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-[#0a0a0a]">{item.feature}</span>
                </div>
              ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 bg-white p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm font-bold">?</span>
              </div>
              <div>
                <p className="font-bold text-[#0a0a0a]">Other Agencies</p>
                <p className="text-xs text-gray-400">Traditional Approach</p>
              </div>
            </div>
            {comparisonData
              .filter((i) => !i.bixeltek)
              .map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <FaTimes size={10} className="text-red-400" />
                  </div>
                  <span className="text-sm text-gray-500">{item.feature}</span>
                </div>
              ))}
          </motion.div>
        </div>

        {/* ── Desktop: full table ── */}
        <motion.div
          className="hidden md:block rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <table className="w-full">
            <thead>
              <tr className="bg-[#0a0a0a]">
                <th className="px-8 py-5 text-left">
                  <span className="text-sm font-semibold text-white/50 uppercase tracking-widest">Feature</span>
                </th>
                <th className="px-8 py-5 text-center w-44">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-base font-bold text-blue-400">Bixeltek</span>
                    <span className="text-[11px] text-white/30">Our Approach</span>
                  </div>
                </th>
                <th className="px-8 py-5 text-center w-44">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-base font-bold text-white/50">Other Agencies</span>
                    <span className="text-[11px] text-white/20">Traditional</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, idx) => (
                <motion.tr
                  key={idx}
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.04 * idx, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`border-b border-gray-100 hover:bg-blue-50/60 transition-colors ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td className="px-8 py-4 font-medium text-[#0a0a0a] text-sm">{item.feature}</td>

                  <td className="px-8 py-4 text-center">
                    <div className="flex justify-center">
                      {item.bixeltek ? (
                        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shadow-sm shadow-blue-200">
                          <FaCheck size={11} className="text-white" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                          <FaTimes size={11} className="text-gray-300" />
                        </div>
                      )}
                    </div>
                  </td>

                  <td className="px-8 py-4 text-center">
                    <div className="flex justify-center">
                      {item.competitors ? (
                        <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                          <FaCheck size={11} className="text-green-600" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center">
                          <FaTimes size={11} className="text-red-400" />
                        </div>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#0a0a0a] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg"
          >
            Get Your Free Competitive Analysis
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
