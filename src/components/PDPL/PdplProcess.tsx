const docket = [
  { entry: "01", title: "Discovery & Scoping", timeframe: "Week 1", description: "We review your business model, systems, and data flows to see exactly how PDPL applies to you." },
  { entry: "02", title: "Gap Assessment", timeframe: "Weeks 1–2", description: "A structured audit against SDAIA's PDPL requirements, flagging every point of exposure." },
  { entry: "03", title: "Remediation Plan", timeframe: "Week 3", description: "A prioritized roadmap covering policy, consent, data handling, and technical safeguards." },
  { entry: "04", title: "Implementation", timeframe: "Weeks 4–8", description: "We draft the documentation, configure consent mechanisms, and train your team." },
  { entry: "05", title: "Ongoing Compliance", timeframe: "Continuous", description: "Scheduled reviews keep you compliant as your business and PDPL guidance evolve." },
];

export default function ProcessLedger() {
  return (
    <section className="bg-[#0A1929] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9974A]">
            Case Docket
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-[#F6F1E7] leading-tight">
            How an engagement runs, start to close
          </h2>
        </div>

        <div className="mt-14 relative">
          <div
            className="absolute left-[19px] sm:left-[27px] top-2 bottom-2 w-px bg-[#F6F1E7]/15"
            aria-hidden="true"
          />
          <ol className="space-y-10 sm:space-y-12">
            {docket.map((item) => (
              <li key={item.entry} className="relative flex gap-5 sm:gap-8 pl-0">
                <div className="relative z-10 flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#0A1929] border border-[#C9974A]/50">
                  <span className="font-mono text-xs sm:text-sm text-[#C9974A]">
                    {item.entry}
                  </span>
                </div>
                <div className="pt-1 sm:pt-2">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F6F1E7]">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6B7A8D]">
                      {item.timeframe}
                    </span>
                  </div>
                  <p className="mt-2 text-sm sm:text-base text-[#B9C4D0] leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}