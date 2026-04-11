'use client';
import { motion } from "framer-motion";
import { FaClock, FaPhone, FaArrowRight, FaShieldAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import Form from "./Form";

// ─── Types ───────────────────────────────────────────────────


interface TrustItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface ContactDetail {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}

// ─── Animation variants ───────────────────────────────────────
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

// ─── Shared styles ────────────────────────────────────────────


// ─── Static data ──────────────────────────────────────────────
const trustItems: TrustItem[] = [
  { icon: FaClock,    title: "24-hr Response",  description: "Fast turnaround on every audit" },
  { icon: FaShieldAlt, title: "No Obligation",  description: "Free consultation, zero pressure" },
  { icon: FaPhone,    title: "Direct Access",   description: "Talk to specialists, not bots" },
];

const stats: StatItem[] = [
  { value: "50+",  label: "Practices Served" },
  { value: "102K+", label: "Patients Acquired" },
  { value: "98%",   label: "Retention Rate" },
];

const contactDetails: ContactDetail[] = [
  {
    icon: FaPhone,
    label: "Canada",
    value: "+1 437 525 2301",
    href: "tel:+14375252301",
  },
  {
    icon: FaPhone,
    label: "USA",
    value: "+1 845 382 3415",
    href: "tel:+18453823415",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "Connect@bixeltekglobal.com",
    href: "mailto:Connect@bixeltekglobal.com",
  },
];

// ─── Component ────────────────────────────────────────────────
export default function ContactSection() {

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#0a0a0a 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow blobs */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-100 blur-[120px] opacity-70" />
      <div className="pointer-events-none absolute top-0 left-0 w-72 h-72 rounded-full bg-cyan-100 blur-[100px] opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ──────────────── LEFT: Content ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 space-y-10"
          >
            {/* Eyebrow + Heading */}
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600 border border-blue-200 bg-blue-50 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight mb-5">
                Ready to Fill Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Dental Schedule?
                </span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Every week you wait is another week your competitors are getting your patients. Let&apos;s discuss your growth goals today.
              </p>
            </div>

            {/* Stats row */}
            <motion.div
              className="grid md:grid-cols-3 gap-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="text-center p-4 rounded-2xl bg-blue-50 border border-blue-100"
                >
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400 font-semibold mt-1 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust items */}
            {/* <motion.div
              className="space-y-3"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {trustItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0a0a0a] group-hover:bg-blue-600 text-white flex items-center justify-center transition-colors duration-300 shadow-md">
                    <item.icon size={17} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0a0a0a] text-sm group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div> */}

            {/* ── Contact details block ── */}
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px flex-1 bg-gray-100" />
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-widest flex items-center gap-1.5">
                  <FaGlobe size={10} /> reach us directly
                </span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>

              <motion.div
                className="space-y-3"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactDetails.map((detail, idx) => (
                  <motion.a
                    key={idx}
                    href={detail.href}
                    variants={fadeUp}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-md transition-all duration-300 group"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-blue-600 group-hover:border-blue-600 text-gray-400 group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <detail.icon size={15} />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">
                        {detail.label}
                      </p>
                      <p className="text-md font-semibold text-[#0a0a0a] group-hover:text-blue-700 transition-colors truncate">
                        {detail.value}
                      </p>
                    </div>

                    {/* Arrow */}
                    <FaArrowRight
                      size={12}
                      className="text-gray-200 group-hover:text-blue-400 flex-shrink-0 transition-colors"
                    />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* ──────────────── RIGHT: Form ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
           <Form/> 
          </motion.div>

        </div>
      </div>
    </section>
  );
}