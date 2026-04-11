'use client'

import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How long until we see results from Google Ads?',
    answer: 'Most practices see measurable results within 30-60 days. We typically spend the first 2-3 weeks optimizing campaigns and gathering data, then results compound from there. The faster your conversion setup, the quicker we can scale.',
  },
  {
    question: 'Do you work with practices in my area?',
    answer: 'Yes! We serve dental practices across the USA and Canada. We have experience in competitive urban markets and smaller towns. Our geo-targeting expertise ensures we reach patients in your exact service area.',
  },
  {
    question: 'What\'s the difference between Google Ads and SEO?',
    answer: 'Google Ads is paid and immediate - you appear at the top of Google search results right away. SEO is organic and takes 3-6 months to show results, but costs less long-term. We recommend both for maximum market domination.',
  },
  {
    question: 'Can I set a maximum monthly budget?',
    answer: 'Absolutely. We work with practices ranging from $1,000-$10,000+ monthly ad spend. Your budget determines how many patients we can reach. We optimize to maximize ROI at any budget level.',
  },
  {
    question: 'What happens if my ads aren\'t working?',
    answer: 'We have a systematic optimization process. If results aren\'t meeting expectations at 60 days, we conduct a full audit, adjust targeting, rewrite ad copy, and optimize landing pages. We stay committed until we hit your goals.',
  },
  {
    question: 'Do you require long-term lock in contracts?',
    answer: 'No contracts required. We work month-to-month because we believe in earning your business every day. If we\'re not delivering results, you\'re free to leave. This keeps us focused on your success.',
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

      <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
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
            Common Questions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Answered
            </span>
          </h2>
          <p className="text-xl text-gray-500">
            Everything you need to know about Google Ads for your dental practice
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
          <p className="text-gray-400 mb-5">Still have questions?</p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#0a0a0a] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg"
          >
            Schedule a Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
