

export default function WhyChooseUs({trustPillars}: {trustPillars: {icon: React.ReactNode; title: string; desc: string}[]}) {
    return(
        <section className="py-20 sm:py-24 bg-[#0d0d0d] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl  md:text-5xl font-black mb-4">
              Why Indian Businesses
              <br />
              <span className="text-white/30">Choose Bixeltek</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">
              There's no shortage of digital marketing agencies in India. What's
              rare is an agency that combines Google Partner-certified expertise
              with genuine accountability, transparent reporting, and a team that
              understands the nuances of how Indian customers search and decide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {trustPillars.map((tp, i) => (
              <div
                key={i}
                className="p-5 sm:p-7 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-blue-500/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 sm:mb-5">
                  {tp.icon}
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-2">
                  {tp.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}