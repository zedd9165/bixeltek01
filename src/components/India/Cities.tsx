import { FiArrowRight, FiMapPin } from "react-icons/fi";

interface CityCard {
  city: string;
  state: string;
  tag: string;
  link: string;
  services: string;
}

export function Cities({cities}: {cities: CityCard[]}) {
    return(
        <section className="py-20 sm:py-24 bg-[#0d0d0d] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              We Serve Businesses
              <br />
              <span className="text-white/30">Across India's Major Cities</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">
              Bixeltek operates with a deep understanding of India's regional
              market dynamics — from Hyderabad's pharma and IT sector to
              Mumbai's finance and retail landscape, Delhi's B2B ecosystem, and
              Bangalore's startup culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((c, i) => (
              <a
                key={i}
                href={c.link}
                className="group relative p-5 sm:p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-blue-500/30 hover:bg-blue-500/[0.04] transition-all duration-300 overflow-hidden"
              >
                {c.tag === "Home Base" && (
                  <div className="absolute top-4 right-4 text-[10px] font-bold text-blue-400 bg-blue-600/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                    HQ
                  </div>
                )}
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <FiMapPin className="text-blue-400" size={13} />
                  </div>
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
                    {c.tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-1">
                  {c.city}
                </h3>
                <p className="text-white/40 text-sm mb-2">{c.state}</p>
                <p className="text-white/25 text-xs mb-4 sm:mb-5 leading-relaxed">
                  {c.services}
                </p>
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold group-hover:gap-3 transition-all uppercase tracking-wider">
                  View services <FiArrowRight size={12} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
}