


export function Testimonials({testimonials}: {testimonials: {quote: string; name: string; role: string, metric: string}[]}) {
    return(
        <section className="py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                  <div className="text-center mb-12 sm:mb-16">
                    <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
                      Client Results
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black">
                      What Our Indian
                      <br />
                      <span className="text-white/30">Clients Say</span>
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {testimonials.map((t, i) => (
                      <div
                        key={i}
                        className="p-5 sm:p-7 rounded-2xl border border-white/[0.08] bg-white/[0.02] flex flex-col"
                      >
                        <div className="flex mb-4 sm:mb-5 gap-1">
                          {Array(5)
                            .fill(0)
                            .map((_, j) => (
                              <span key={j} className="text-blue-400 text-sm">
                                ★
                              </span>
                            ))}
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed flex-1 mb-5 sm:mb-6 italic">
                          &quot;{t.quote}&quot;
                        </p>
                        <div className="border-t border-white/[0.08] pt-4 sm:pt-5 flex items-center justify-between gap-3">
                          <div>
                            <div className="font-bold text-white text-sm">{t.name}</div>
                            <div className="text-white/30 text-xs mt-0.5">{t.role}</div>
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 sm:px-3 py-1.5 rounded-full whitespace-nowrap shrink-0">
                            {t.metric}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
    )
}