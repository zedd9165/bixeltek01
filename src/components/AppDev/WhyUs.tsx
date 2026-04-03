import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyChooseUs({whyUs}: {whyUs: {icon: JSX.Element, title: string, desc: string, hoverBg: string}[]}) {
    return(
        <section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[95%] mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-[34%] flex flex-col justify-start items-start space-y-6">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold leading-snug"
            >
              Why Bixeltek for{" "}
              <span className="text-blue-500">Mobile App Development?</span>
            </motion.h2>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              We don&apos;t just write code — we build products that generate revenue, retain users, and scale with confidence. Here&apos;s what sets us apart.
            </motion.p>
            <Link href="mailto:hello@bixeltek.com">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
              >
                Talk to Our Experts
              </motion.button>
            </Link>
          </div>

          <div className="lg:w-[66%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((benefit, index) => (
              <motion.div
                key={index}
                className={`bg-[#131313] rounded-2xl group p-6 flex flex-col items-start gap-4 shadow-lg transition-colors duration-300 cursor-pointer ${benefit.hoverBg}`}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-white/10 p-3 rounded-full">{benefit.icon}</div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )

}