'use client'

import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How much should a dental practice spend on Google Ads each month?',
    answer:
      'For many single-location practices, a healthy starting point is around $2,000 per month in Google Ads spend, moving toward $3,000+ once the campaign, tracking, landing page, and follow-up systems begin stabilizing. Highly competitive markets or procedures such as dental implants, Invisalign, cosmetic dentistry, and emergency dentistry may require more. The goal is not to spend more for the sake of it—it is to generate enough qualified search volume and conversion data to optimize properly.',
  },
  {
    question: 'What is a realistic cost per dental lead from Google Ads?',
    answer:
      'In many Canadian and US markets, a qualified dental lead can commonly fall in the $70–$125 range, depending on the city, competition, treatment, search demand, and landing-page quality. Some markets will be lower and some significantly higher. We focus less on chasing the cheapest lead and more on cost per booked and attended patient, because a low-cost enquiry that never books has very little value.',
  },
  {
    question: 'How quickly can Google Ads start generating new patient enquiries?',
    answer:
      'Google Ads can begin generating calls and enquiries soon after launch because it captures people already searching for dental treatment. However, the first few weeks are usually an optimization period. We review search terms, lead quality, conversion tracking, locations, landing pages, and cost per acquisition before scaling. The objective is a stable patient-acquisition system, not simply a temporary spike in clicks.',
  },
  {
    question: "Why shouldn't I just send all my Google Ads traffic to my homepage?",
    answer:
      'Someone searching for an emergency dentist, dental implants, or Invisalign has a specific need. Sending every visitor to a generic homepage can force them to search for the information they came for. We generally use treatment-specific landing pages that match the patient\'s search intent, answer important questions, establish trust, and provide a clear way to call, submit a form, or book an appointment.',
  },
  {
    question: 'Do you target our practice name or branded keywords in Google Ads?',
    answer:
      'We generally focus budget on non-branded, high-intent searches that can introduce your practice to new patients, rather than relying on branded searches to make campaign performance appear stronger. Campaign structure depends on the market and competitive environment, but our priority is understanding what genuinely creates incremental patient opportunities rather than simply capturing people who were already searching for your practice.',
  },
  {
    question: 'Are Display Ads worth using for dental practices?',
    answer:
      'Display Ads can offer lower click costs than Google Search, but lower cost does not necessarily mean higher patient-acquisition value. Someone searching for an emergency dentist near me is actively looking for treatment, while someone seeing a banner ad may have no immediate need. For that reason, we generally do not treat Display as the primary patient-acquisition channel. It can be more useful as a secondary remarketing and awareness channel for people who have already visited your website or interacted with your practice.',
  },
  {
    question: 'What happens after a lead submits a form or misses our call?',
    answer:
      'Generating the enquiry is only half the job. Bixeltek can help connect lead forms, call tracking, CRM workflows, appointment booking, missed-call follow-up, and automated communication so fewer opportunities disappear between the advertisement and the front desk. The goal is to create a connected patient-acquisition process from the initial enquiry through to appointment booking.',
  },
  {
    question: 'How do I know whether the marketing is actually producing patients and not just leads?',
    answer:
      'We track the patient-acquisition journey as far beyond the click as your systems allow: calls, forms, appointment requests, booked appointments, and, where integrations permit, patient and revenue outcomes. This helps evaluate marketing channels based on business performance rather than impressions, clicks, or website traffic alone.',
  },
]

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

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
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-100 blur-[90px] opacity-70" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full bg-cyan-100 blur-[80px] opacity-50" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-blue-600 mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
            Frequently Asked Questions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              About Dental Marketing
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about Google Ads, patient acquisition, lead tracking, and turning enquiries into booked appointments.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <button
                //@ts-ignore
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left group"
              >
                <div
                  className={`rounded-2xl border transition-all duration-300 ${
                    openIndex === idx
                      ? "border-blue-200 bg-blue-50 shadow-sm"
                      : "border-gray-100 bg-white hover:border-blue-200 hover:bg-blue-50/40 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between px-7 py-5">
                    <h3
                      className={`text-base md:text-lg font-semibold pr-4 transition-colors duration-300 ${
                        openIndex === idx ? "text-blue-700" : "text-[#0a0a0a] group-hover:text-blue-700"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 transition-colors duration-300 ${
                        openIndex === idx ? "text-blue-600" : "text-gray-400 group-hover:text-blue-500"
                      }`}
                    >
                      <FaChevronDown size={16} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-500 text-sm leading-relaxed px-7 pb-6 border-t border-blue-100 pt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          ))}
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
            href="#audit-form"
            className="inline-flex items-center gap-3 bg-[#0a0a0a] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg"
          >
            Claim My Free $250 Dental Growth Audit
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}