import { ShieldCheck } from "lucide-react";

const credentials = [
  {
    title: "Saudi-Aligned, Vision 2030 Ready",
    description:
      "We understand both the regulatory context and the business reality of operating in the Kingdom.",
  },
  {
    title: "Built to Operate, Not Sit in a Binder",
    description:
      "Every policy and process we deliver is one your team can actually run day to day.",
  },
  {
    title: "Technical, Not Just Legal-Adjacent",
    description:
      "We implement the systems and consent flows too — not just the documents describing them.",
  },
  {
    title: "A Retained Partner, Not a One-Off Vendor",
    description:
      "PDPL compliance is ongoing. We stay engaged as your business and the regulation evolve.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0A1929] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9974A]">
              Credentials
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-[#F6F1E7] leading-tight">
              Why businesses put their compliance file with Bixeltek
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-9">
            {credentials.map((item) => (
              <div key={item.title} className="flex gap-4">
                <ShieldCheck className="h-5 w-5 mt-1 text-[#C9974A] shrink-0" strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-lg text-[#F6F1E7]">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-[#B9C4D0] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}