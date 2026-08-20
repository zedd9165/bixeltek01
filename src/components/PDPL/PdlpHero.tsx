import Link from "next/link";

export default function PdplHero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, rgba(59,130,246,0.15), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-14 sm:pb-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-400">
          PDPL Compliance · Saudi Arabia
        </span>

        <h1 className="mt-6 text-4xl md:text-7xl font-bold leading-tight font-sans">
          PDPL Consulting
          <br />
          <span className="text-blue-500">
            That Keeps You Compliant
          </span>
        </h1>

        <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
          We design and implement full PDPL compliance programs for
          businesses operating in Saudi Arabia — assessments, policies,
          consent systems, and staff training, so you stay ahead of SDAIA
          enforcement rather than reacting to it.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm sm:text-base font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Get a Free Compliance Assessment
          </Link>
          <a
            href="mailto:hello@bixeltek.com"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/5 transition-colors"
          >
            Talk to a PDPL Specialist
          </a>
        </div>
      </div>
    </section>
  );
}