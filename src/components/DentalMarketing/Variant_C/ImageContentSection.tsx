'use client'

import React from 'react'
import { FaArrowRight, FaGlobe, FaMapMarkerAlt, FaChartLine, FaPhone, FaLink, FaPaintBrush } from 'react-icons/fa'
import { LuTestTubes } from "react-icons/lu";
import { motion } from 'framer-motion'

const features = [
  {
    icon: FaGlobe,
    title: 'High-Converting Landing Pages',
    description: 'Custom websites optimized specifically for dental patients - built to convert.',
  },
  {
    icon: FaPaintBrush, 
    title: 'Content Development & Graphic Design',
    description: 'Engaging content and visually compelling creatives crafted to attract, educate, and convert your ideal patients.',
  },
  {
    icon: FaChartLine,
    title: 'Real-Time Performance Tracking',
    description: 'Watch every patient booking happen in real-time with our advanced dashboard.',
  },
  {
    icon: LuTestTubes,
    title: 'Continuous A/B Testing',
    description: 'Every campaign is constantly tested and refined for maximum ROI.',
  },
  {
    icon: FaPhone,
    title: 'Call Tracking Integration',
    description: 'Track every phone call back to the specific ad and keyword that generated it.',
  },
  {
    icon: FaLink,
    title: 'PMS System Integration',
    description: 'Seamless integration with your existing practice management software.',
  },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

export default function ImageContentSection() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Grid texture */}
      {/* <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      /> */}
      {/* Blue glow blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600 opacity-10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square">
              <img
                src="https://images.unsplash.com/photo-1662837625427-970713d74aa6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern dental office"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Floating stat — Growth Rate */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3"
              >
                <p className="text-[11px] font-semibold uppercase tracking-widest text-white/50 mb-1">Growth Rate</p>
                <p className="text-2xl font-bold text-blue-400 leading-none">+250%</p>
              </motion.div>

              {/* Floating stat — Avg ROI */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.6, ease: "easeInOut" }}
                className="absolute top-6 right-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3"
              >
                <p className="text-[11px] font-semibold uppercase tracking-widest text-white/50 mb-1">Avg ROI</p>
                <p className="text-2xl font-bold text-blue-400 leading-none">680%</p>
              </motion.div>
            </div>

            {/* Blue glow beneath image */}
            <div className="absolute inset-0 rounded-2xl bg-blue-600 blur-2xl opacity-10 -z-10 scale-95" />
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Eyebrow */}
           <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-cyan-600 mb-4">
              Complete Marketing Suite
            </p>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Everything Else You Need to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Dominate
                </span>{" "}
                Your Local Market
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                Our complete dental marketing suite is engineered to work together, driving maximum patient acquisition and revenue growth.
              </p>
            </div>

            {/* Features */}
            <motion.div
              className="space-y-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  className="flex gap-4 group cursor-default p-4 rounded-xl border border-white/5 bg-white/[0.03] hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <feature.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-white/40">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] group"
            >
              Get Started Today
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
