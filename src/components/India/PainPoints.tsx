import { FiArrowRight } from "react-icons/fi";


export function PainPoints({painPoints}: {painPoints: {title: string; desc: string}[]}) {
    return(
           <section className="py-20 sm:py-24 bg-[#0d0d0d] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Why Indian Businesses
              <br />
              <span className="text-white/30">Struggle to Grow Online</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">
              We hear the same challenges from business owners across
              Hyderabad, Mumbai, Delhi, and beyond. The problems are
              predictable — the solutions just require the right partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {painPoints.map((p, i) => (
              <div
                key={i}
                className="relative p-5 sm:p-6 rounded-2xl border border-white/40 bg-white/[0.02] hover:border-blue-500 hover:bg-blue-600/[0.03] transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-3xl sm:text-4xl font-black text-white/40 group-hover:text-white transition-colors select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-2 h-2 bg-blue-600 rounded-full mb-4 sm:mb-5" />
                <h3 className="font-bold text-white text-sm sm:text-base mb-2">
                  {p.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <a
              href="#form"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all text-sm"
            >
              Fix My Marketing <FiArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    )
}