
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function WhyAppDevMatter({whyMatters}: {whyMatters: string[]}) {
    return(
        <section className="w-full bg-black py-20 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-[95%] mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-[48%] relative flex items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] h-[340px] rounded-full bg-blue-600/20 blur-[90px]" />
            </div>

            <div className="relative w-full max-w-[560px]">
              {/* Laptop frame */}
              <div className="relative bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-2xl p-3 pb-0">
                {/* Top bar dots */}
                <div className="flex items-center gap-1.5 mb-3 px-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                {/* Screen */}
                <div className="bg-[#0d0d0d] rounded-t-xl overflow-hidden border border-white/5">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#141414] border-b border-white/5">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                    <div className="flex-1 bg-white/5 rounded-full px-3 py-1 text-[10px] text-white/30 font-mono">
                      bixeltek.com/services/app-development
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5 space-y-4">
                    <div className="space-y-2">
                      <div className="flex gap-2 items-center">
                        <span className="text-[10px] font-semibold tracking-widest text-blue-400 uppercase">Mobile Strategy</span>
                        <span className="w-8 h-[1px] bg-blue-400/40" />
                      </div>
                      <h3 className="text-white text-lg font-bold leading-snug">
                        Apps That Convert.<br />
                        <span className="text-blue-400">Experiences That Retain.</span>
                      </h3>
                      <p className="text-gray-400 text-[11px] leading-relaxed">
                        A great mobile app isn't just a product — it's your most powerful sales, support, and loyalty channel, running in your customer's pocket around the clock.
                      </p>
                    </div>
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { val: "3×", label: "Higher Conversions" },
                        { val: "67%", label: "Users Prefer Apps" },
                        { val: "10wk", label: "Avg. Launch Time" },
                      ].map((m, i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                          <p className="text-blue-400 font-bold text-base">{m.val}</p>
                          <p className="text-gray-500 text-[9px] leading-tight mt-1">{m.label}</p>
                        </div>
                      ))}
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2">
                      {["iOS", "Android", "Flutter", "React Native"].map((p) => (
                        <span key={p} className="text-[9px] font-medium bg-blue-600/10 border border-blue-600/20 text-blue-400 px-2 py-1 rounded-full">
                          {p}
                        </span>
                      ))}
                    </div>
                    {/* Progress bars */}
                    <div className="space-y-2 pt-1">
                      {[
                        { label: "App Store Rating", val: 92 },
                        { label: "On-Time Delivery", val: 97 },
                        { label: "Client Retention", val: 88 },
                      ].map((bar, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-[9px] text-gray-500 mb-1">
                            <span>{bar.label}</span>
                            <span className="text-blue-400">{bar.val}%</span>
                          </div>
                          <div className="w-full bg-white/5 rounded-full h-1.5">
                            <div className="h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: `${bar.val}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Stand */}
              <div className="flex justify-center">
                <div className="w-32 h-3 bg-[#1a1a1a] rounded-b-sm border-x border-b border-white/10" />
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-2 bg-[#111] rounded-full border border-white/5" />
              </div>
              {/* Badges */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg shadow-blue-600/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                10+ Apps Shipped
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 shadow-xl max-w-[180px]">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-[10px] font-semibold">Launched in 8 weeks</p>
                <p className="text-gray-400 text-[9px] mt-0.5">QuickDelivr — Hyderabad</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-[52%] space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-6xl font-bold text-white mt-3 leading-tight">
                Why Mobile App Development{" "}
                <span className="text-blue-500">Matters for Your Business</span>
              </h2>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              With over 6.8 billion smartphone users globally, your customers are already living on mobile. The question isn't <em>whether</em> you need a mobile app — it's how much business you're losing every day without one. A strategically built mobile app fundamentally transforms how you acquire, serve, and retain customers at every stage of their journey.
            </p>

            <ul className="space-y-4">
              {whyMatters.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-sm md:text-base leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-blue-600 pl-4">
              In today's mobile-first economy, partnering with an experienced app development agency ensures your product is built to modern standards — performant, secure, scalable, and engineered to deliver measurable business outcomes from the moment it goes live.
            </p>

            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-2 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-blue-600/20"
              >
                Get a App Consultation
                <ArrowRight size={16} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    )
}