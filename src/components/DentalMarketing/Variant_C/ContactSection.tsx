"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  FaArrowRight,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa"
import { MicrosoftBooking } from "./Microsoft_Booking"

interface ContactDetail {
  icon: React.ElementType
  label: string
  value: string
  href: string
}

export interface ContactSectionProps {
  phoneNumber?: string
  phoneHref?: string
}

const DEFAULT_PHONE_VALUE = "+1 437 525 2301"
const DEFAULT_PHONE_HREF = "tel:+14375252301"
const DEFAULT_EMAIL_VALUE = "connect@bixeltekglobal.com"
const DEFAULT_EMAIL_HREF = "mailto:connect@bixeltekglobal.com"

export default function ContactSection({
  phoneNumber,
  phoneHref,
}: ContactSectionProps = {}) {
  const displayPhone = phoneNumber
    ? phoneNumber.trim().startsWith("+") ||
      phoneNumber.includes(" ") ||
      phoneNumber.includes("-")
      ? phoneNumber
      : phoneNumber.length === 10
        ? `+91 ${phoneNumber}`
        : `+${phoneNumber}`
    : DEFAULT_PHONE_VALUE

  const rawDigits = phoneNumber
    ? phoneNumber.replace(/[^0-9+]/g, "")
    : ""

  const activePhoneHref = phoneHref
    ? phoneHref
    : phoneNumber
      ? rawDigits.startsWith("+")
        ? `tel:${rawDigits}`
        : rawDigits.length === 10
          ? `tel:+91${rawDigits}`
          : `tel:+${rawDigits}`
      : DEFAULT_PHONE_HREF

  const contactDetails: ContactDetail[] = [
    {
      icon: FaPhone,
      label: "Call Us Directly",
      value: displayPhone,
      href: activePhoneHref,
    },
    {
      icon: FaEnvelope,
      label: "Drop an Email",
      value: DEFAULT_EMAIL_VALUE,
      href: DEFAULT_EMAIL_HREF,
    },
  ]

     const [showBooking, setShowBooking] = useState(false)


  return (
    <section id="final-cta" className="relative overflow-hidden bg-white py-20 lg:py-28">
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-blue-300/30 bg-gradient-to-br from-[#0093FE] via-[#087FE8] to-[#0066D6] p-8 sm:p-12 lg:p-16 shadow-[0_20px_80px_-15px_rgba(0,147,254,0.40)]"
    >
      {/* Subtle pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle decorative rings */}
      <div className="pointer-events-none absolute -top-16 -left-16 sm:-top-24 sm:-left-24 lg:-top-32 lg:-left-32 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] lg:w-[620px] lg:h-[620px]">
        <div className="absolute inset-0 rounded-full border border-white/[0.10] bg-gradient-to-br from-white/[0.08] to-transparent" />

        <div className="absolute inset-[13%] rounded-full border border-white/[0.14] bg-gradient-to-br from-white/[0.07] to-transparent" />

        <div className="absolute inset-[27%] rounded-full border border-white/[0.18] bg-gradient-to-br from-white/[0.08] to-transparent" />

        <div className="absolute inset-[42%] rounded-full border border-white/[0.22] bg-gradient-to-br from-white/[0.10] to-transparent" />

        <div className="absolute inset-[58%] rounded-full bg-gradient-to-br from-white/20 via-white/10 to-transparent shadow-[0_0_40px_rgba(255,255,255,0.12)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="hidden lg:block lg:col-span-4" />

        <div className="lg:col-span-8 flex flex-col items-start text-left lg:pl-6">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            FREE DENTAL GROWTH AUDIT
          </div>

          {/* Headline */}
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.15]">
            Ready to Find What&apos;s Holding Your{" "}
            <span className="text-white/90">
              Practice Back?
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
            Get your free $250 Dental Growth Audit and see where your current
            marketing may be losing patient opportunities — and what we
            would prioritize first.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">

            <a
              href="#audit-form"
              className="group relative inline-flex items-center justify-between gap-4 rounded-full bg-white py-2.5 pl-6 pr-2.5 text-sm font-semibold text-[#0066D6] shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(0,0,0,0.20)] active:scale-[0.98]"
            >
              <span>Get My Free $250 Audit</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0093FE] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),0_2px_8px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:translate-x-0.5">
                <FaArrowRight size={11} />
              </span>
            </a>

            <button
              onClick={() => setShowBooking(true)}
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20"
            >
              Book a 1 on 1 Consultation
            </button>
          </div>

          {/* Direct Contact */}
          <div className="mt-10 grid w-full gap-3 sm:grid-cols-2 border-t border-white/20 pt-8">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon

              return (
                <motion.a
                  key={index}
                  href={detail.href}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group flex items-center gap-3.5 rounded-2xl border border-white/[0.15] bg-white/[0.08] p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.14]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 border border-white/20 text-white transition-colors group-hover:bg-white group-hover:text-[#0093FE]">
                    <Icon size={14} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                      {detail.label}
                    </p>

                    <p className="truncate text-xs sm:text-sm font-medium text-white">
                      {detail.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Microcopy */}
          <p className="mt-5 text-xs text-white/60">
            No obligation. No spam. 100% confidential.
          </p>
        </div>
      </div>
    </motion.div>
  </div>

  <MicrosoftBooking
   showBooking={showBooking}
   setShowBooking={setShowBooking}
 />
</section>
  )
}