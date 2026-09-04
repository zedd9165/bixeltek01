'use client'

import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How long until we see results from Google Ads?',
    answer: 'Google Ads can begin generating traffic and inquiries after launch, but performance depends on competition, location, treatment, budget, landing-page quality, and tracking. We continuously optimize campaigns based on performance data.',
  },
  {
    question: 'How long does it take to see results from Meta Ads?',
    answer: 'Meta Ads can generate inquiries soon after launch, but results depend on your audience, offer, creative, location, treatment, budget, and follow-up process. We test and optimize campaigns to improve lead quality and conversion performance.',
  },
  {
    question: 'Do you work with practices in my area?',
    answer: 'Yes. We work with dental practices across multiple markets and customize campaigns around your location, competitors, services, audience, and growth goals.',
  },
  {
    question: "What's the difference between Google Ads and Meta Ads?",
    answer: 'Google Ads captures existing demand from people actively searching for dental services. Meta Ads helps create and capture demand through Facebook and Instagram using audience targeting, creative, offers, and retargeting. Many practices benefit from using both.',
  },
  {
    question: 'Can I set a maximum monthly budget?',
    answer: 'Yes. We can structure your acquisition strategy around your available advertising budget and growth objectives, then prioritize the channels and campaigns with the strongest opportunity.',
  },
  {
    question: "What happens if my ads aren't working?",
    answer: 'We review targeting, search terms, creative, offers, landing pages, tracking, lead quality, and conversion data to identify where performance is leaking. We then test and optimize the relevant areas.',
  },
  {
    question: 'Do you require long-term lock-in contracts?',
    answer: "Our engagement terms depend on the services and scope of work. We'll clearly explain the agreement, deliverables, and expectations before you begin.",
  },
  {
    question: 'Can you help me get more dental implant or Invisalign patients?',
    answer: 'Yes. We can build treatment-specific Google and Meta campaigns, landing pages, offers, tracking, and follow-up around high-value services such as implants, Invisalign, cosmetic dentistry, and emergency dentistry.',
  },
  {
    question: 'How do you measure dental marketing ROI?',
    answer: 'We track leads, calls, appointment inquiries, cost per lead, conversion rates, campaign performance, and—where integrations allow—downstream patient and revenue outcomes.',
  },
  {
    question: 'Can you guarantee a specific number of new patients?',
    answer: 'No marketing agency can reliably guarantee a specific number of patients because results depend on location, competition, treatment demand, budget, website performance, lead response, and practice operations.',
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
            Dental Marketing Questions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Answered
            </span>
          </h2>
          <p className="text-xl text-gray-500">
            Everything you need to know about Google Ads, Meta Ads, dental SEO, lead generation, and converting more patient inquiries.
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