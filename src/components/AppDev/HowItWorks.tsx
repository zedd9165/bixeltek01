"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Bell,
  ShoppingCart,
  BarChart3,
  MessageSquare,
  Star,
  ArrowRight,
  Smartphone,
  Repeat2,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";

// ─── DATA ────────────────────────────────────────────────────────────────────

const brandJourneys = [
  {
    id: "acquire",
    label: "Acquire",
    icon: <Users size={18} />,
    headline: "Turn Strangers Into App Users",
    description:
      "Your app becomes your most powerful acquisition channel. With App Store Optimization (ASO), deep linking from ads, QR-code onboarding, and referral mechanics built in from day one — every marketing campaign you run drives users directly into an experience you fully own and control.",
    metrics: [
      { value: "2.4×", label: "Higher install-to-signup rate vs mobile web" },
      { value: "60%", label: "Lower cost-per-acquisition with ASO" },
      { value: "Day 1", label: "Analytics tracking from the very first install" },
    ],
    visual: {
      title: "Acquisition Flow",
      steps: [
        { icon: <Zap size={14} />, label: "Ad / QR / Referral", color: "bg-blue-600/20 border-blue-600/30 text-blue-400" },
        { icon: <Smartphone size={14} />, label: "App Install", color: "bg-blue-600/20 border-blue-600/30 text-blue-400" },
        { icon: <Users size={14} />, label: "Onboarding", color: "bg-blue-500/20 border-blue-500/30 text-blue-300" },
        { icon: <Star size={14} />, label: "First Value Moment", color: "bg-blue-400/20 border-blue-400/30 text-blue-200" },
      ],
    },
  },
  {
    id: "engage",
    label: "Engage",
    icon: <Bell size={18} />,
    headline: "Keep Users Coming Back, Every Day",
    description:
      "Engagement is where most apps fail — and where Bixeltek-built apps excel. We architect smart push notification systems, in-app messaging, personalized content feeds, gamification loops, and behavioral triggers that bring users back before they ever think of leaving.",
    metrics: [
      { value: "3×", label: "Higher daily active users vs mobile website" },
      { value: "89%", label: "Of users retained with push notifications enabled" },
      { value: "4min", label: "Average session duration in well-designed apps" },
    ],
    visual: {
      title: "Engagement Loop",
      steps: [
        { icon: <Bell size={14} />, label: "Push Notification", color: "bg-indigo-600/20 border-indigo-600/30 text-indigo-400" },
        { icon: <Smartphone size={14} />, label: "App Open", color: "bg-indigo-600/20 border-indigo-600/30 text-indigo-400" },
        { icon: <Star size={14} />, label: "Content / Feature", color: "bg-indigo-500/20 border-indigo-500/30 text-indigo-300" },
        { icon: <Repeat2 size={14} />, label: "Habit Formed", color: "bg-indigo-400/20 border-indigo-400/30 text-indigo-200" },
      ],
    },
  },
  {
    id: "convert",
    label: "Convert",
    icon: <ShoppingCart size={18} />,
    headline: "Turn Sessions Into Revenue",
    description:
      "We engineer conversion-optimized purchase flows, frictionless checkout experiences, in-app payment gateways (Razorpay, Stripe, Apple Pay), and smart upsell mechanics that turn engaged users into paying customers — repeatedly, and at higher average order values than any other channel.",
    metrics: [
      { value: "3×", label: "Higher conversion rate vs mobile browser" },
      { value: "20%", label: "Higher average order value on native apps" },
      { value: "< 3s", label: "Checkout flow target for maximum completion" },
    ],
    visual: {
      title: "Conversion Path",
      steps: [
        { icon: <Star size={14} />, label: "Product Discovery", color: "bg-green-600/20 border-green-600/30 text-green-400" },
        { icon: <ShoppingCart size={14} />, label: "Add to Cart", color: "bg-green-600/20 border-green-600/30 text-green-400" },
        { icon: <Zap size={14} />, label: "1-Tap Checkout", color: "bg-green-500/20 border-green-500/30 text-green-300" },
        { icon: <TrendingUp size={14} />, label: "Revenue Captured", color: "bg-green-400/20 border-green-400/30 text-green-200" },
      ],
    },
  },
  {
    id: "retain",
    label: "Retain",
    icon: <Repeat2 size={18} />,
    headline: "Build a Loyal Customer Base",
    description:
      "Retention is the highest-ROI activity in any mobile business. We build loyalty programs, subscription models, personalized re-engagement flows, and in-app support systems that dramatically reduce churn — turning one-time buyers into long-term brand advocates who spend more over time.",
    metrics: [
      { value: "5×", label: "Cheaper to retain than acquire a new user" },
      { value: "67%", label: "More spend from returning customers vs new ones" },
      { value: "30d", label: "Retention benchmark we engineer every app around" },
    ],
    visual: {
      title: "Retention System",
      steps: [
        { icon: <MessageSquare size={14} />, label: "In-App Support", color: "bg-yellow-600/20 border-yellow-600/30 text-yellow-400" },
        { icon: <Star size={14} />, label: "Loyalty Rewards", color: "bg-yellow-600/20 border-yellow-600/30 text-yellow-400" },
        { icon: <Bell size={14} />, label: "Win-Back Campaign", color: "bg-yellow-500/20 border-yellow-500/30 text-yellow-300" },
        { icon: <Repeat2 size={14} />, label: "Long-Term LTV", color: "bg-yellow-400/20 border-yellow-400/30 text-yellow-200" },
      ],
    },
  },
  {
    id: "analyze",
    label: "Analyze",
    icon: <BarChart3 size={18} />,
    headline: "Data That Drives Every Decision",
    description:
      "Every Bixeltek app ships with a full analytics stack — session tracking, funnel analysis, cohort reporting, crash monitoring, and A/B testing infrastructure. You'll never guess what your users want. You'll know — and you'll have the data to act on it confidently and fast.",
    metrics: [
      { value: "100%", label: "Of user actions tracked from day one" },
      { value: "Real-time", label: "Dashboard access to all key product metrics" },
      { value: "2wk", label: "Average time to first actionable insight post-launch" },
    ],
    visual: {
      title: "Analytics Pipeline",
      steps: [
        { icon: <Users size={14} />, label: "User Events", color: "bg-pink-600/20 border-pink-600/30 text-pink-400" },
        { icon: <BarChart3 size={14} />, label: "Data Layer", color: "bg-pink-600/20 border-pink-600/30 text-pink-400" },
        { icon: <TrendingUp size={14} />, label: "Dashboard", color: "bg-pink-500/20 border-pink-500/30 text-pink-300" },
        { icon: <Zap size={14} />, label: "Decision & Action", color: "bg-pink-400/20 border-pink-400/30 text-pink-200" },
      ],
    },
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function HowAppWorksForBrand() {
  const [active, setActive] = useState(0);
  const current = brandJourneys[active];

  return (
    <section className="w-full bg-black py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[95%] mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-6xl font-bold text-white mt-3 mb-5 leading-tight">
            How Our Apps Work{" "}
            <span className="text-blue-500">for Your Brand</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A Bixeltek-built mobile app isn't a one-time deliverable. It's a living, compounding growth asset that works for your brand across every stage of the customer lifecycle.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {brandJourneys.map((journey, i) => (
            <button
              key={journey.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                active === i
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-blue-600/40 hover:text-white"
              }`}
            >
              {journey.icon}
              {journey.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
          >
            {/* Left: text + metrics */}
            <div className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-8 md:p-10 flex flex-col justify-between gap-8">
              <div className="space-y-5">
                {/* Step indicator */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-600/25 flex items-center justify-center text-blue-400">
                    {current.icon}
                  </div>
                  <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">
                    Stage {active + 1} of {brandJourneys.length}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  {current.headline}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Metrics row */}
              <div className="grid md:grid-cols-3 gap-3">
                {current.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.04] border border-white/8 rounded-xl p-4 flex flex-col gap-1"
                  >
                    <span className="text-xl md:text-2xl font-black text-blue-400 leading-none">
                      {m.value}
                    </span>
                    <span className="text-[11px] text-gray-400 leading-snug">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: visual flow card */}
            <div className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-8 md:p-10 hidden lg:flex flex-col justify-between gap-8">
              {/* Phone mockup with flow */}
              <div className="flex flex-col items-center justify-center flex-1">
                {/* Mini phone frame */}
                <div className="relative w-48 mx-auto">
                  <div className="bg-[#181818] border border-white/15 rounded-3xl p-3 shadow-2xl">
                    {/* Notch */}
                    <div className="w-16 h-4 bg-black rounded-full mx-auto mb-3 flex items-center justify-center">
                      <div className="w-6 h-1.5 bg-white/10 rounded-full" />
                    </div>
                    {/* Screen content */}
                    <div className="bg-[#0a0a0a] rounded-2xl p-3 space-y-2 min-h-[200px]">
                      <div className="text-[9px] font-semibold text-blue-400 uppercase tracking-widest mb-3">
                        {current.visual.title}
                      </div>
                      {current.visual.steps.map((step, i) => (
                        <motion.div
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1 + 0.2 }}
                          className={`flex items-center gap-2 border rounded-lg px-2.5 py-2 ${step.color}`}
                        >
                          {step.icon}
                          <span className="text-[10px] font-medium">{step.label}</span>
                          {i < current.visual.steps.length - 1 && (
                            <ArrowRight size={9} className="ml-auto opacity-50" />
                          )}
                        </motion.div>
                      ))}
                      {/* Animated progress bar */}
                      <div className="pt-2">
                        <div className="w-full bg-white/5 rounded-full h-1">
                          <motion.div
                            className="h-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                          />
                        </div>
                        <p className="text-[9px] text-gray-500 mt-1 text-right">Flow complete</p>
                      </div>
                    </div>
                    {/* Home bar */}
                    <div className="w-12 h-1 bg-white/15 rounded-full mx-auto mt-3" />
                  </div>

                  {/* Side glow */}
                  <div className="absolute -inset-4 bg-blue-600/5 rounded-3xl blur-xl -z-10" />
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center justify-between pt-4 border-t border-white/8">
                <button
                  onClick={() => setActive((p) => Math.max(0, p - 1))}
                  disabled={active === 0}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white disabled:opacity-30 transition-colors"
                >
                  <ArrowRight size={14} className="rotate-180" />
                  Previous
                </button>
                <div className="flex gap-1.5">
                  {brandJourneys.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === active ? "w-6 bg-blue-500" : "w-1.5 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setActive((p) => Math.min(brandJourneys.length - 1, p + 1))}
                  disabled={active === brandJourneys.length - 1}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white disabled:opacity-30 transition-colors"
                >
                  Next
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-blue-600/20"
            >
              Build This for My Brand <ArrowRight size={15} />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}