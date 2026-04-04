import { FiArrowRight, FiCheck } from "react-icons/fi";

export function WhyItMatters() {
    return(
         <section className="relative py-20 sm:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                  <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
                    <div>
                      <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
                        India Is Online —<br />
                        <span className="text-white/30">Is Your Business</span>
                        <br />
                        Showing Up?
                      </h2>
                      <p className="text-white/50 leading-relaxed mb-6">
                        India has over 700 million active internet users. More than 90%
                        of purchase decisions begin with a Google search. And with JIO
                        driving smartphone adoption even in Tier 2 and Tier 3 cities,
                        your audience is online 24/7 — whether you serve them in
                        Hyderabad, Pune, Surat, or Nellore.
                      </p>
                      <p className="text-white/40 leading-relaxed mb-8 sm:mb-10">
                        Yet most Indian businesses are still relying on word-of-mouth,
                        print ads, and random social media posts. That&apos;s why the gap
                        between businesses that invest in digital marketing and those
                        that don&apos;t is growing wider every year.
                      </p>
                      <a
                        href="#form"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-all text-sm"
                      >
                        Get a Digital Marketing Audit <FiArrowRight size={16} />
                      </a>
                    </div>
        
                    <div className="space-y-3 sm:space-y-4">
                      {[
                        {
                          title: "Appear on Google",
                          desc: "Show up when customers search for exactly what you offer — not your competitors.",
                        },
                        {
                          title: "Build Brand Credibility",
                          desc: "In a market where trust drives conversions, authority online is non-negotiable.",
                        },
                        {
                          title: "Generate Qualified Leads",
                          desc: "Consistent, high-intent leads — not just impressions and vanity metrics.",
                        },
                        {
                          title: "Measure Every Rupee",
                          desc: "Real-time reporting on what's working, what's not, and what to do next.",
                        },
                        {
                          title: "Outpace Local Competitors",
                          desc: "Most of your competitors are still using outdated offline tactics.",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-white/40 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500 transition-all duration-300 group"
                        >
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-500/20 transition-colors">
                            <FiCheck className="text-blue-400" size={13} />
                          </div>
                          <div>
                            <div className="font-bold text-white text-sm mb-1">
                              {item.title}
                            </div>
                            <div className="text-white/40 text-sm leading-relaxed">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
    )
}