import { Check } from "lucide-react";

type WhyItem = { title: string; description: string };

export default function WhyPdplMatters({
  whyMatters,
}: {
  whyMatters: WhyItem[];
}) {
  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mock compliance dashboard card */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border border-white/40 bg-white/[0.03] p-5 sm:p-6 shadow-[0_0_60px_-15px_rgba(59,130,246,0.25)]">
              <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-0 justify-between">
                <span className="text-xl font-semibold text-white">
                  Compliance Overview
                </span>
                <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-sm font-medium text-blue-400 border border-blue-500/20 w-fit">
                  PDPL · KSA
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { label: "Score", value: "82%" },
                  { label: "Open Gaps", value: "3" },
                  { label: "Next Review", value: "30d" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-white/40 bg-black/40 px-3 py-3 text-center"
                  >
                    <div className="text-xl md:text-2xl font-bold text-blue-400">
                      {item.value}
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-2.5">
                {[
                  "Privacy policy published",
                  "Consent flow updated",
                  "Breach response plan drafted",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-lg border border-white/35 bg-black/30 px-3 py-2.5"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500/20">
                      <Check className="h-2.5 w-2.5 text-blue-400" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copy + bullets */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold leading-tight">
              Why PDPL Compliance{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                Matters for Your Business
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
              With SDAIA actively enforcing the PDPL, non-compliance is no
              longer a theoretical risk. From consent to cross-border data
              transfers, the requirements touch nearly every part of how your
              business operates.
            </p>

            <ul className="mt-7 space-y-4">
              {whyMatters.map((item) => (
                <li key={item.title} className="flex gap-3.5">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                    <Check className="h-3 w-3 text-blue-400" strokeWidth={3} />
                  </span>
                  <div>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {item.title}
                    </span>
                    <p className="mt-0.5 text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="/contact-us"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              See If You&apos;re Compliant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}