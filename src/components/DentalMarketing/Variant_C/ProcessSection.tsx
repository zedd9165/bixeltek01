'use client'

import React from 'react'
import {
  FaClipboardList,
  FaLightbulb,
  FaRocket,
  FaChartLine,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: FaClipboardList,
    step: '01',
    title: 'Free Audit',
    description: 'We analyze your current performance, identify gaps, and reveal untapped opportunities in your local market.',
  },
  {
    icon: FaLightbulb,
    step: '02',
    title: 'Custom Strategy',
    description: 'Receive a tailored roadmap built for your practice size, location, and revenue goals. No cookie-cutter plans.',
  },
  {
    icon: FaRocket,
    step: '03',
    title: 'Launch Campaign',
    description: 'We set everything up and go live within 4 weeks. You focus on patients; we focus on patient acquisition.',
  },
  {
    icon: FaChartLine,
    step: '04',
    title: 'Optimize & Scale',
    description: 'Monthly optimization ensures maximum ROI. Your practice grows predictably and consistently month after month.',
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
            Our Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
            Your Path to a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Thriving Practice
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Simple, proven process that delivers consistent results month after month
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
          <p className="text-base text-gray-400 mb-5">Ready to start your Month One?</p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#0a0a0a] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg group"
          >
            Get Your Free Growth Audit
            <FaRocket className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
