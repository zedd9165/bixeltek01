import { FiArrowRight } from "react-icons/fi";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link: string;
  stat: string;
}

export function Services({services}: {services: ServiceCard[]}) {
    return(
        <section className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                  <div className="mb-12 sm:mb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <h2 className="text-3xl md:text-5xl font-black max-w-lg">
                        Full-Service Digital Marketing Agency
                        <br />
                        <span className="text-white/30">Built for India</span>
                      </h2>
                      <p className="text-white/40 max-w-sm text-sm leading-relaxed">
                        We deliver end-to-end marketing that works for Indian businesses
                        — from Google-first strategies that target local search behaviour
                        to social media campaigns calibrated for Indian audiences on
                        Instagram, YouTube, and Facebook.
                      </p>
                    </div>
                  </div>
        
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {services.map((s, i) => (
                      <a
                        key={i}
                        href={s.link}
                        className="group p-5 sm:p-7 rounded-2xl border border-white/40 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500 transition-all duration-300 flex flex-col"
                      >
                        <div className="flex items-start justify-between mb-5 sm:mb-6">
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                            {s.icon}
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 sm:px-3 py-1 rounded-full">
                            {s.stat}
                          </span>
                        </div>
                        <h3 className="font-bold text-white text-base sm:text-lg mb-2 sm:mb-3">
                          {s.title}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed flex-1">
                          {s.desc}
                        </p>
                        <div className="mt-5 sm:mt-6 flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:gap-3 transition-all">
                          Learn more <FiArrowRight size={14} />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </section>
    )
}