'use client'

import React, { useState, useEffect } from 'react'
import { FaArrowRight, FaTooth, FaPhone, FaChartLine, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const ROI_MULTIPLIER = 3.2

export default function HeroSection() {
  const [showBooking, setShowBooking] = useState(false)
  const [newPatients, setNewPatients] = useState(20)
  const [treatmentValue, setTreatmentValue] = useState(800)
  const [closeRate, setCloseRate] = useState(40)

  const currentRevenue = Math.round(newPatients * treatmentValue * (closeRate / 100))
  const withBixeltek = Math.round(currentRevenue * ROI_MULTIPLIER)
  const upside = withBixeltek - currentRevenue

  useEffect(() => {
    if (showBooking) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [showBooking])

  return (
    <>
      <section className="relative min-h-screen bg-white overflow-hidden flex items-center pt-20 mt-[">
        {/* Subtle orb accents */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-70 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-sky-200 to-blue-200 opacity-70 blur-3xl" />
          {/* Fine grid texture */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(#1a56db 1px, transparent 1px), linear-gradient(90deg, #1a56db 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Left Content ── */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 bg-white shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  Trusted by 50+ Dental Practices
                </span>
              </motion.div>

              {/* Divider line */}
              <motion.div
                variants={{ hidden: { width: 0, opacity: 0 }, visible: { width: 40, opacity: 1, transition: { duration: 0.4 } } }}
                className="h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                style={{ width: 40 }}
              />

              {/* Headline */}
              <motion.h1
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-[-0.03em] text-gray-950"
              >
                Fill Your Dental<br />
                Schedule with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Google Ads
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                className="text-lg text-gray-500 leading-relaxed max-w-md"
              >
                Stop losing patients to competitors. Get high-converting campaigns
                built exclusively for dental practices. Measurable results in 30 days.
              </motion.p>

              {/* Feature tags */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                className="flex flex-wrap gap-3"
              >
                {[
                  { icon: FaChartLine, text: 'Instant Results', color: 'text-blue-600' },
                  { icon: FaTooth, text: 'Dental Marketing Experts', color: 'text-blue-600' },
                  { icon: FaPhone, text: 'ROI Guaranteed', color: 'text-blue-600' },
                ].map((f, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2, borderColor: '#2563eb', color: '#2563eb' }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 shadow-sm cursor-default"
                  >
                    <f.icon size={14} className={f.color} />
                    {f.text}
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                className="flex flex-col md:flex-row gap-3 pt-2"
              >
                {/* ↓ ONLY CHANGE: was <motion.a href="#contact">, now opens booking modal */}
                <motion.button
                  onClick={() => setShowBooking(true)}
                  whileHover={{ y: -2, boxShadow: '0 12px 32px rgba(26,86,219,0.35)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center justify-center gap-2 bg-gray-950 text-white px-7 py-4 rounded-xl text-[15px] font-bold tracking-tight group"
                >
                  Schedule An Appointment
                  <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-150" />
                </motion.button>

                <motion.a
                  href="#contact"
                  whileHover={{ y: -2, borderColor: '#2563eb', color: '#2563eb' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center justify-center border border-gray-200 bg-white text-gray-800 px-7 py-4 rounded-xl text-[15px] font-bold tracking-tight shadow-sm"
                >
                  Talk to an Specialist
                </motion.a>
              </motion.div>

              {/* Trust avatars */}
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }}
                className="flex items-center gap-4 pt-2"
              >
                <div className="flex">
                  {['JD', 'MK', 'SR'].map((initials, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold -ml-2 first:ml-0"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  <span className="font-bold text-gray-900">102K+</span> patients acquired for clients
                </p>
              </motion.div>
            </motion.div>

            {/* ── Right: Calculator ── */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white border border-gray-200 rounded-2xl shadow-[0_2px_40px_rgba(0,0,0,0.07)] overflow-hidden">

                {/* Card header */}
                <div className="flex items-center gap-3 px-7 py-5 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center flex-shrink-0">
                    <FaChartLine size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-gray-950 tracking-tight">Revenue Calculator</p>
                    <p className="text-xs text-gray-400 mt-0.5">Drag sliders to see your growth potential</p>
                  </div>
                </div>

                {/* Two-column body */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">

                  {/* Left: sliders */}
                  <div className="px-7 py-6 space-y-6">
                    <CalcSlider
                      label="New patients / month"
                      value={newPatients}
                      min={5}
                      max={100}
                      step={1}
                      display={String(newPatients)}
                      onChange={setNewPatients}
                      minLabel="5"
                      maxLabel="100"
                    />
                    <CalcSlider
                      label="Average treatment value"
                      value={treatmentValue}
                      min={200}
                      max={3000}
                      step={50}
                      display={`$${treatmentValue.toLocaleString()}`}
                      onChange={setTreatmentValue}
                      minLabel="$200"
                      maxLabel="$3000"
                    />
                    <CalcSlider
                      label="Lead-to-patient close rate"
                      value={closeRate}
                      min={10}
                      max={90}
                      step={1}
                      display={`${closeRate}%`}
                      onChange={setCloseRate}
                      minLabel="10%"
                      maxLabel="90%"
                    />

                    {/* Service tags */}
                    <div className="pt-1 flex flex-wrap items-center gap-2">
                      {['Google Ads', 'SEO'].map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-semibold text-blue-600 border border-blue-200 bg-blue-50 rounded-full px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-[11px] text-gray-400"></span>
                    </div>
                  </div>

                  {/* Right: result panels */}
                  <div className="px-7 py-6 flex flex-col gap-3">

                    {/* Panel 1: Current revenue */}
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                      <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-1.5">
                        Your current monthly revenue
                      </p>
                      <motion.p
                        key={currentRevenue}
                        initial={{ opacity: 0.5, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18 }}
                        className="text-[28px] font-extrabold tracking-[-0.03em] text-gray-950 leading-none"
                      >
                        ${currentRevenue.toLocaleString()}
                      </motion.p>
                      <p className="text-[11px] text-gray-400 mt-1.5">Based on your practice inputs</p>
                    </div>

                    {/* Panel 2: With Bixeltek */}
                    <div className="bg-gray-950 rounded-xl p-4">
                      <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-1.5">
                        With Bixeltek · Avg. {ROI_MULTIPLIER}× ROI
                      </p>
                      <motion.p
                        key={withBixeltek}
                        initial={{ opacity: 0.5, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18 }}
                        className="text-[28px] font-extrabold tracking-[-0.03em] text-white leading-none"
                      >
                        ${withBixeltek.toLocaleString()}
                      </motion.p>
                      <p className="text-[11px] text-gray-500 mt-1.5">
                        Conservative estimate · Typical within 90 days
                      </p>
                    </div>

                    {/* Panel 3: Upside + CTA */}
                    <div className="border border-blue-100 bg-blue-50 rounded-xl p-4 flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-blue-400 mb-1">
                          Monthly revenue upside
                        </p>
                        <motion.p
                          key={upside}
                          initial={{ opacity: 0.5, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.18 }}
                          className="text-[22px] font-extrabold tracking-[-0.03em] text-blue-700 leading-none"
                        >
                          +${upside.toLocaleString()}
                        </motion.p>
                      </div>
                      
                    </div>
                  </div>
                </div>

                {/* Footer disclaimer */}
                <div className="px-7 py-3 bg-gray-50 border-t border-gray-100">
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    Calculator reflects average ROI improvement across 60+ dental client practices via Google Ads, Web Design &amp; SEO.
                    Individual results vary by market, specialty, and budget.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Booking Modal ── */}
      <AnimatePresence>
        {showBooking && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowBooking(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />

            {/* Modal panel */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
                <p className="text-[15px] font-bold text-gray-950 tracking-tight">Schedule an Appointment</p>
                <button
                  onClick={() => setShowBooking(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                >
                  <FaTimes size={14} />
                </button>
              </div>

              {/* iframe */}
              <div className="flex-1 min-h-0">
                <iframe
                  src="https://outlook.office.com/book/Bixeltek1@bixeltekglobal.com/?ismsaljsauthenabled"
                  width="100%"
                  height="100%"
                  scrolling="yes"
                  style={{ border: 0, display: 'block' }}
                  title="Book an appointment with Bixeltek"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

/* ── Slider sub-component ── */
function CalcSlider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
  minLabel,
  maxLabel,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  display: string
  onChange: (v: number) => void
  minLabel?: string
  maxLabel?: string
}) {
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div>
      <div className="flex items-center justify-between mb-2.5">
        <label className="text-[13px] font-semibold text-gray-700">{label}</label>
        <span className="text-[15px] font-extrabold tracking-tight text-blue-600">{display}</span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="calc-slider w-full h-1.5 rounded-full appearance-none cursor-pointer outline-none"
        style={{
          background: `linear-gradient(to right, #2563eb ${pct}%, #e5e7eb ${pct}%)`,
        }}
      />

      <div className="flex justify-between mt-1.5">
        <span className="text-[11px] text-gray-400">{minLabel ?? min}</span>
        <span className="text-[11px] text-gray-400">{maxLabel ?? max}</span>
      </div>

      {/* Scoped slider thumb styles */}
      <style>{`
        .calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #2563eb;
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 1.5px #2563eb, 0 2px 8px rgba(37,99,235,0.35);
          cursor: pointer;
          transition: transform 0.15s;
        }
        .calc-slider::-webkit-slider-thumb:hover {
          transform: scale(1.18);
        }
        .calc-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #2563eb;
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 1.5px #2563eb, 0 2px 8px rgba(37,99,235,0.35);
          cursor: pointer;
        }
        .calc-slider:focus::-webkit-slider-thumb {
          box-shadow: 0 0 0 3px rgba(37,99,235,0.2);
        }
      `}</style>
    </div>
  )
}