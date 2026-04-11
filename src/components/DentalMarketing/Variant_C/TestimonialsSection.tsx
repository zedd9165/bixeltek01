'use client'

import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    location: 'Atlanta, GA',
    specialty: 'General Dentist',
    quote: 'Before Bixeltek, we averaged 15 new patients monthly. Now we consistently hit 60+ qualified leads. The ROI dashboard changed how we think about marketing investment.',
    metrics: '+300% New Patients',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    name: 'Dr. Marcus Webb',
    location: 'Austin, TX',
    specialty: 'Cosmetic Dentist',
    quote: 'We went from buried on page 4 of Google to the #1 result in our city in 60 days. Our phone literally doesn\'t stop ringing, and we had to hire two hygienists.',
    metrics: '#1 Google Ranking',
    color: 'from-purple-400 to-pink-400',
  },
  {
    name: 'Dr. Priya Nair',
    location: 'Seattle, WA',
    specialty: 'Orthodontist',
    quote: 'Every dollar we spend, I can trace back to a specific patient and their treatment value. I\'ve never had that kind of transparency with any marketing agency before.',
    metrics: '+$420K Revenue',
    color: 'from-green-400 to-emerald-400',
  },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600 opacity-10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-600 opacity-5 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-cyan-600 mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Real Dentists
            </span>
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto">
            Hear directly from dental professionals who transformed their practices with our Google Ads expertise
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
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative border border-white/10 rounded-2xl p-8 bg-white/[0.03] hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="inline-flex items-center justify-center w-11 h-11 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 mb-5 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                <FaQuoteLeft size={18} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} className="text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/50 italic text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors duration-300">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Metrics badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 font-bold text-sm mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                <FaStar size={12} />
                {testimonial.metrics}
              </div>

              {/* Author */}
              <div className="border-t border-white/10 pt-5">
                <h4 className="font-bold text-white group-hover:text-blue-300 transition-colors">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-blue-400 font-semibold mt-0.5 mb-0.5">
                  {testimonial.specialty}
                </p>
                <p className="text-xs text-white/30">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
