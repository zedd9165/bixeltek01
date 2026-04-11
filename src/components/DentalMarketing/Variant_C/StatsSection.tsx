'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUsers, FaSmile, FaDollarSign, FaStar } from 'react-icons/fa'

const stats = [
  {
    icon: FaUsers,
    value: 50,
    suffix: '+',
    label: 'Dental Practices Served',
    description: 'Growing dental businesses acrosss US, Canada, and UK',
    accent: '#eff6ff',
    iconColor: '#1a56db',
  },
  {
    icon: FaSmile,
    value: 102,
    suffix: 'K+',
    label: 'Patients Acquired',
    description: 'Real appointments scheduled',
    accent: '#ecfdf5',
    iconColor: '#059669',
  },
  {
    icon: FaDollarSign,
    value: 3.7,
    prefix: '$',
    suffix: 'M',
    label: 'Revenue Generated',
    description: 'For our clients in 2024',
    accent: '#fdf4ff',
    iconColor: '#9333ea',
    isDecimal: true,
  },
  {
    icon: FaStar,
    value: 98,
    suffix: '%',
    label: 'Retention Rate',
    description: 'Clients stay with us year after year',
    accent: '#fff7ed',
    iconColor: '#ea580c',
  },
]

function CountUp({
  target,
  prefix = '',
  suffix = '',
  isDecimal = false,
  inView,
}: {
  target: number
  prefix?: string
  suffix?: string
  isDecimal?: boolean
  inView: boolean
}) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const duration = 1000
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * target)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  const display = isDecimal ? count.toFixed(1) : Math.round(count)

  return (
    <span>
      {prefix}{display}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-blue-600 mb-4">
            By the numbers
          </p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-[-0.03em] text-gray-950 leading-tight mb-4 lg:max-w-3xl mx-auto">
           5+ Years of Proven Results That{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            With over 500+ successful ads implementations, we&apos;ve helped dental practices achieve unprecedented growth.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.09)' }}
              className="relative group bg-gray-50 border border-cyan-200  rounded-2xl p-8 cursor-default overflow-hidden transition-colors hover:bg-white hover:border-gray-200"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-6"
                style={{ background: stat.accent }}
              >
                <stat.icon size={18} style={{ color: stat.iconColor }} />
              </div>

              {/* Value */}
              <div className="text-4xl font-extrabold tracking-[-0.03em] text-gray-950 mb-1.5 leading-none">
                <CountUp
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                  inView={inView}
                />
              </div>

              <p className="text-[14px] font-bold text-gray-800 mb-1.5">{stat.label}</p>
              <p className="text-[13px] text-gray-400 leading-snug">{stat.description}</p>

              {/* Bottom bar */}
              <div className="mt-6 h-[1.5px] w-7 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full group-hover:w-12 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}