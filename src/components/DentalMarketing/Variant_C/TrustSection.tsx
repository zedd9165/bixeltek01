'use client'

import React from 'react'
import { FaGoogle, FaAward, FaStar, FaHandshake } from 'react-icons/fa'
import { motion } from 'framer-motion'

const credentials = [
  {
    icon: FaGoogle,
    title: 'Google Partner',
    description: 'Certified by Google. Meeting strict standards for performance and expertise.',
    details: 'Agency certification with proven campaign performance',
  },
  {
    icon: FaAward,
    title: 'Google Ads Certified',
    description: 'Our team holds multiple Google Ads certifications.',
    details: 'Individual certifications in Search, Display, and Shopping Ads',
  },
  {
    icon: FaStar,
    title: '4.9/5 Rating',
    description: '500+ verified client reviews across platforms.',
    details: 'Consistent 5-star feedback from dental practices',
  },
  {
    icon: FaHandshake,
    title: 'Trusted Partner',
    description: '98% client retention rate - dentists stay with us year after year.',
    details: 'Long-term partnerships built on results and trust',
  },
]

export default function TrustSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const credentialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Trusted by Dental Practices <span className="gradient-text">Nationwide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;ve earned our reputation through consistent results and transparency
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {credentials.map((credential, idx) => (
            <motion.div
              key={idx}
              variants={credentialVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-2xl p-8 border border-gray-200 text-center group cursor-default hover-lift"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl text-white mb-4 group-hover:shadow-glow transition-all mx-auto"
              >
                <credential.icon size={28} />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                {credential.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {credential.description}
              </p>

              {/* Details */}
              <p className="text-xs text-gray-500 italic border-t border-gray-200 pt-3 group-hover:text-gray-600 transition-colors">
                {credential.details}
              </p>

              {/* Accent bar */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4 group-hover:w-12 transition-all duration-300"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-gray-200"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: '500+', label: 'Practices Served' },
              { number: '10+', label: 'Years Experience' },
              { number: '98%', label: 'Satisfaction Rate' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + idx * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
