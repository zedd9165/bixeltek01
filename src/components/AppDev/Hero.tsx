import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function AppDevHero() {
    return(
        <section className="relative flex flex-col items-center justify-center min-h-[100vh] md:min-h-[80vh] bg-black -mt-32 text-center px-6 overflow-hidden">
                <div className="flex justify-center items-center">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500 opacity-20 blur-3xl pointer-events-none" />
                  <div className="relative z-10 mt-40 max-w-7xl">
                    <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
                      Mobile App Development{" "}<br/>
                      <span className="text-blue-500">That Drives Real Growth</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                      We design and engineer high-performance iOS & Android applications for growth-focused businesses across India, Canada, USA & Saudi Arabia — products built to acquire users, convert them, retain them, and scale alongside your ambitions.
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
                      <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-sm"
                      >
                        Get a Consultation <ArrowRight size={16} />
                      </Link>
                      <a
                        href="#services"
                        className="inline-flex items-center gap-2 border border-white/20 text-white hover:border-blue-500 hover:text-blue-400 px-8 py-4 rounded-xl transition-all duration-200 text-sm"
                      >
                        Explore Our Services
                      </a>
                    </div>
                  </div>
                </div>
              </section>
    )
}
