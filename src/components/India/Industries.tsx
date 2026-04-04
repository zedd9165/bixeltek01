
interface IndustryItem {
  icon: React.ReactNode;
  title: string;
  sub: string;
}

export function Industries({industries}: {industries: IndustryItem[]}) {
    return(
        <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl  md:text-5xl font-black mb-4">
              We Know Your Industry —
              <br />
              <span className="text-white/30">Not Just Your Ad Spend</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">
              Every sector in India has different buyer journeys, different
              search behaviour, and different compliance considerations. We build
              strategies that match your industry — not off-the-shelf templates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-blue-500/20 hover:bg-white/[0.05] transition-all duration-300 group cursor-default"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 sm:mb-4 group-hover:bg-blue-500/20 transition-colors">
                  {ind.icon}
                </div>
                <div className="font-bold text-white text-xs sm:text-sm mb-1">
                  {ind.title}
                </div>
                <div className="text-white/30 text-xs">{ind.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}