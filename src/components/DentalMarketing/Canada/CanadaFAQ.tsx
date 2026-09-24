'use client'

import React, { useState } from 'react'
import { FaChevronDown, FaArrowRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How much ad budget does a Canadian dental practice need to start?',
    answer:
      'For most single-location Canadian practices, a healthy initial monthly media spend is typically $2,000 to $3,000 CAD across Google Ads and Meta Ads. This budget provides sufficient search volume and impression data to test keywords, optimize landing page conversions, and establish a reliable cost per booked patient. Higher-competition metros (such as downtown Toronto or Vancouver) or high-ticket campaigns like full-mouth dental implants may benefit from scaling once initial acquisition metrics are proven.',
  },
  {
    question: 'Do you work with more than one dental practice in the same city?',
    answer:
      'No. We maintain a strict one-clinic-per-city (or distinct geographic catchment area) exclusivity policy. We believe it is an inherent conflict of interest to run competing paid ad campaigns for two dentists bidding on the exact same patient keywords in the same neighborhood. Your market is protected as long as you are actively partnered with us.',
  },
  {
    question: 'What is included in the free $250 dental growth audit?',
    answer:
      'Our audit covers 8 critical areas: Google Ads keyword waste, Meta Ads creative and audience setup, mobile landing page conversion rate bottlenecks, call and lead tracking attribution, local Google 3-pack visibility, competitor advertising strategies, high-margin treatment opportunities in your postal area, and a clear 30-day prioritized action plan. There is zero obligation to buy anything.',
  },
  {
    question: 'Do you manage both Google Ads and Meta Ads?',
    answer:
      'Yes. Google Ads captures high-intent patients who are actively in pain or urgently searching for specific treatments like "emergency dentist" or "dental implants near me." Meta Ads (Facebook & Instagram) builds local community awareness, reaches prospective patients considering cosmetic or orthodontic treatments, and retargets previous website visitors. Using both channels together delivers the lowest blended cost per patient.',
  },
  {
    question: 'How soon can campaigns be launched after onboarding?',
    answer:
      'Once onboarding information and access are provided, our team typically designs, writes, builds, and launches your dedicated treatment landing pages, tracking infrastructure, and ad campaigns within 7 to 14 business days. You will review and approve everything before ad campaigns go live.',
  },
]

export default function CanadaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const scrollToAudit = (e: React.MouseEvent) => {
    e.preventDefault()
    const formElement = document.getElementById('hero-audit-form') || document.getElementById('audit-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      const firstInput = formElement.querySelector('input')
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 500)
      }
    }
  }

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden border-t border-gray-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-blue-600 mb-3">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight mb-4">
            Common Questions From{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Canadian Practice Owners
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Clear, transparent answers about our dental patient acquisition systems.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-300 bg-blue-50/40 shadow-xs'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-blue-700' : 'text-gray-950'
                  }`}>
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <FaChevronDown size={12} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-blue-100/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-gray-500 mb-4">
            Have a question specific to your practice location or current marketing setup?
          </p>
          <button
            onClick={scrollToAudit}
            className="inline-flex items-center justify-center gap-2 bg-gray-950 hover:bg-blue-600 text-white px-7 py-3.5 rounded-xl text-sm font-bold tracking-tight shadow-sm transition-all cursor-pointer"
          >
            <span>GET MY FREE AUDIT & ASK AN EXPERT</span>
            <FaArrowRight size={12} />
          </button>
        </div>
      </div>
    </section>
  )
}

