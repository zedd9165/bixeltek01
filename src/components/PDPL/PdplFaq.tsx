import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import PdplSeal from "./PdplSeal";

const faqs = [
  {
    q: "What is the PDPL and who does it apply to?",
    a: "The Personal Data Protection Law is Saudi Arabia's national data protection regulation, enforced by SDAIA. It applies to any entity, inside or outside the Kingdom, that processes the personal data of individuals residing in Saudi Arabia.",
  },
  {
    q: "What happens if my business isn't compliant?",
    a: "Non-compliance can lead to financial penalties, suspension of data processing activities, and reputational damage. Serious violations carry fines that scale with severity and impact.",
  },
  {
    q: "Do I need to appoint a Data Protection Officer?",
    a: "Organizations processing sensitive or large-scale personal data are typically required to appoint a DPO. We assess whether it applies to you and can act as your outsourced DPO contact if needed.",
  },
  {
    q: "How long does a PDPL engagement take?",
    a: "Gap assessments usually take 1–2 weeks. Full remediation, including policies, training, and process changes, typically runs 4–8 weeks depending on your data complexity.",
  },
  {
    q: "We already have some policies. Can you build on those?",
    a: "Yes. Most engagements start from partial compliance. Our gap assessment identifies exactly what's missing or outdated rather than starting over.",
  },
];

export default function FaqCta() {
  return (
    <>
      <section className="bg-[#F6F1E7] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#A97B32]">
              Questions on Record
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-[#0A1929]">
              Frequently Asked
            </h2>
          </div>

          <div className="mt-12 divide-y divide-[#0A1929]/10 border-y border-[#0A1929]/10">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5 sm:py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#0A1929] [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="shrink-0 font-mono text-lg text-[#C9974A] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-[#3F4B5B] leading-relaxed pr-8">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0A1929]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6F1E7] leading-tight">
                Ready to open your compliance file?
              </h2>
              <p className="mt-3 text-[#B9C4D0] max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
                Book a free consultation and get a clear, written picture of
                where your business stands under PDPL.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href="tel:+919100032301"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#C9974A] px-6 py-3 text-sm sm:text-base font-semibold text-[#0A1929] hover:bg-[#E4C079] transition-colors"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call a Specialist
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#F6F1E7]/25 px-6 py-3 text-sm sm:text-base font-semibold text-[#F6F1E7] hover:bg-white/5 transition-colors"
                >
                  Request Free Assessment
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end opacity-90">
              <PdplSeal size={140} tone="gold" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}