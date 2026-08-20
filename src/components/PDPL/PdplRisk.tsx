const findings = [
  {
    tag: "Finding A",
    title: "Undocumented data flows",
    description:
      "Most businesses can't fully account for where customer and employee data lives, moves, or gets shared — the first thing SDAIA checks.",
  },
  {
    tag: "Finding B",
    title: "Consent that won't hold up",
    description:
      "Pre-checked boxes and buried privacy clauses don't meet PDPL's consent standard, and they're the fastest way to draw a fine.",
  },
  {
    tag: "Finding C",
    title: "No breach response plan",
    description:
      "Without a rehearsed process, breach notifications are missed, incomplete, or too slow — turning an incident into a violation.",
  },
  {
    tag: "Finding D",
    title: "Cross-border transfers, unreviewed",
    description:
      "Sending data to processors or cloud providers outside the Kingdom without meeting transfer conditions is a common, costly gap.",
  },
];

export default function RiskSection() {
  return (
    <section className="relative bg-[#0A1929] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9974A]">
            Exposure Report
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#F6F1E7] leading-tight">
            What most audits find before we get there
          </h2>
          <p className="mt-4 text-[#B9C4D0] leading-relaxed">
            These four gaps show up in nearly every gap assessment we run.
            Chances are, at least one applies to you right now.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#F6F1E7]/10">
          {findings.map((item) => (
            <div key={item.tag} className="bg-[#0A1929] p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#A97B32]">
                  {item.tag}
                </span>
                {/* redaction bar motif */}
                <span className="h-3 flex-1 max-w-[90px] rounded-sm bg-[#F6F1E7]/15" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-serif text-xl sm:text-2xl text-[#F6F1E7]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-[#B9C4D0] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}