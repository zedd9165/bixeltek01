import Image, { StaticImageData } from "next/image";
import { FiArrowRight } from "react-icons/fi";

interface StatItem {
  value: string;
  label: string;
}

export function IndiaHero({ stats, heroBg }: { stats: StatItem[]; heroBg: string | StaticImageData }) {
    return(
        <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
                <Image
                  src={heroBg}
                  alt="Digital marketing in India"
                  fill
                  className="object-cover object-center pointer-events-none select-none"
                  priority
                />
                <div className="absolute inset-0 bg-[#080808]/80 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[400px] md:h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
        
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 pt-28 sm:pt-32 md:pt-40 text-center w-full">
                  <h1
                    className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 max-w-5xl mx-auto"
                    style={{ lineHeight: '1.15' }}
                    >
                    Digital Marketing Services
                    <br />
                    <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 inline-block pb-1"
                        style={{ lineHeight: '1.15' }}
                    >
                        in India That Drive Real
                    </span>
                    <br />
                    <span className="text-white" style={{ lineHeight: '1.15' }}>
                        Business Growth.
                    </span>
                    </h1>
        
                  <p className="text-white/50 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
                    India's digital economy is growing faster than anywhere in the
                    world — and competition online is fiercer than ever. Whether you're
                    a clinic in Hyderabad, an e-commerce brand in Mumbai, a real estate
                    firm in Delhi, or a school in Bangalore, your customers are
                    searching Google before they call. If your business isn't visible,
                    your competitors win every click.
                  </p>
                  <p className="text-white/50 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
                    At Bixeltek, a Google Partner Certified agency headquartered in
                    Hyderabad with a track record across India's top metros, we build
                    marketing systems that generate leads, reduce wasted ad spend, and
                    deliver measurable ROI — consistently.
                  </p>
        
                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10 sm:mb-14">
                    {[
                      "✓ Google Partner Certified Agency",
                      "✓ 200+ Campaigns Managed Across India",
                      "✓ 4+ Years Delivering Results",
                      "✓ Hyderabad · Mumbai · Delhi · Bangalore · Chennai · Nellore",
                    ].map((b) => (
                      <span
                        key={b}
                        className="text-xs text-white font-medium bg-white/20 border border-white/60 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
        
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <a
                      href="#form"
                      className="group bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-200 text-sm sm:text-base"
                    >
                      Get a Free Digital Marketing Audit
                      <FiArrowRight
                        className="group-hover:translate-x-1 transition-transform"
                        size={18}
                      />
                    </a>
                    <a
                      href="#form"
                      className="border border-white/20 hover:border-white/40 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-200 text-sm sm:text-base hover:bg-white/5 text-center"
                    >
                      Book a Strategy Call
                    </a>
                  </div>
                </div>
        
                {/* Stats bar */}
                <div className="relative z-10 border-t border-white/10 bg-white/[0.02] backdrop-blur-sm">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                    {stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-400 mb-1">
                          {s.value}
                        </div>
                        <div className="text-xs text-white/40 uppercase tracking-wider font-medium">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
    )
}
