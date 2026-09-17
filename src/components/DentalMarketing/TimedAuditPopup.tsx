'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaTimes, 
  FaCalendarCheck, 
  FaArrowRight, 
  FaSearchDollar, 
  FaChartLine, 
  FaTooth,
  FaShieldAlt
} from 'react-icons/fa'

interface TimedAuditPopupProps {
  onBookClick: () => void
  delaySeconds?: number
}

// Practices featured on your page
const FEATURED_PRACTICES = [
  'Markham Gateway Dentistry',
  'Revita Family Dentistry',
  'Listiyo Family Dentistry',
]

export default function TimedAuditPopup({ 
  onBookClick, 
  delaySeconds = 30 
}: TimedAuditPopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Starts the 30s timer fresh on every visit or page refresh
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, delaySeconds * 1000)

    return () => clearTimeout(timer)
  }, [delaySeconds])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleAction = () => {
    onBookClick()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop with subtle blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden z-10"
          >
            {/* Top Accent Gradient Orbs */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-gradient-to-tr from-sky-400/20 to-blue-500/20 blur-2xl" />

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors"
              aria-label="Close popup"
            >
              <FaTimes size={14} />
            </button>

            <div className="p-6 sm:p-8 relative">
              {/* Badge & Value Tag */}
              <div className="flex flex-wrap items-center gap-2 mb-4">                 
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-extrabold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm">
                  <FaSearchDollar size={11} />
                  Worth $250 — FREE
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-4xl font-extrabold text-red-700 tracking-tight leading-tight mb-3">
                Claim Your Free Dental Audit & 1-on-1 Growth Consultation
              </h3>

              {/* Description */}
              <p className="text-sm md:text-[17px] text-gray-600 leading-relaxed mb-6">
                Discover precisely where your practice is leaking patient bookings to local competitors. We&apos;ll review your Google Ads, local search presence, website flow, and competitor gaps free of charge.
              </p>

              {/* Social Proof / Practice Badges */}
              {/* <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3.5 mb-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                  <FaTooth className="text-blue-600" />
                  Trusted By Leading Practices Including:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {FEATURED_PRACTICES.map((practice, index) => (
                    <span
                      key={index}
                      className="text-xs font-semibold text-gray-700 bg-white border border-gray-200/80 px-2.5 py-1 rounded-lg shadow-2xs"
                    >
                      {practice}
                    </span>
                  ))}
                </div>
              </div> */}

              {/* Key Takeaways */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <FaChartLine size={15} />
                  </div>
                  <span>Conversion leak audit</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <FaCalendarCheck size={15} />
                  </div>
                  <span>30-min strategy roadmap</span>
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleAction}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-950 via-[#0a0038] to-blue-900 hover:opacity-95 text-white py-4 px-6 rounded-xl font-bold text-[15px] shadow-lg shadow-blue-950/20 group transition-all"
              >
                <span>Claim My Free $250 Growth Plan</span>
                <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="flex items-center justify-center gap-2 mt-3.5 text-center text-sm text-gray-400">
                <FaShieldAlt size={11} className="text-gray-400" />
                <span>No obligation Consultation</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}