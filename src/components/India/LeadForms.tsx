import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import IndiaContactForm from "./Form";

export function LeadsForm() {
    return(

        <section
        id="form"
        className="py-20 sm:py-28 bg-[#0d0d0d] border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
            {/* Left */}
            <div>
              <h2 className="text-3xl  md:text-5xl font-black leading-tight mb-5 sm:mb-6">
                Get a Free Digital
                <br />
                Marketing Audit
              </h2>
              <p className="text-white/50 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
                Tell us about your business and we'll audit your current digital
                presence, identify the biggest growth opportunities, and show
                you exactly what we'd do differently. You'll get a clear action
                plan — whether you work with us or not.
              </p>

              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-center gap-3 sm:gap-4 text-white/50 text-sm">
                  <FiPhone className="text-blue-400 shrink-0" size={16} />
                  <a
                    href="tel:+919100032301"
                    className="hover:text-white transition-colors"
                  >
                    +91 91000 32301
                  </a>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-white/50 text-sm">
                  <FiMail className="text-blue-400 shrink-0" size={16} />
                  <a
                    href="mailto:hello@bixeltek.com"
                    className="hover:text-white transition-colors"
                  >
                    hello@bixeltek.com
                  </a>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 text-white/50 text-sm">
                  <FiMapPin
                    className="text-blue-400 shrink-0 mt-0.5"
                    size={16}
                  />
                  <span>
                    Bixeltek, 3rd Floor, Nahid Plaza, beside AR Banquet, Salar Jung Colony,
                    Toli Chowki, Hyderabad, Telangana 500008
                    <br />
                    <span className="text-white/30">
                      Monday–Saturday, 10:00 AM – 8:00 PM IST
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-10 sm:mt-12 space-y-4">
                {["Contact Us", "Launch Campaigns", "Achieve Growth"].map(
                  (step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black flex items-center justify-center shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-white/60 text-sm font-medium">
                        {step}
                      </span>
                      {i < 2 && (
                        <div className="flex-1 h-px bg-white/[0.06]" />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
            <IndiaContactForm />
          </div>
        </div>
      </section>

            )
        }