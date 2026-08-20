const entries = [
  { value: "5,000,000 SAR", label: "Maximum penalty for serious violations" },
  { value: "SDAIA", label: "The regulator actively enforcing PDPL today" },
  { value: "72 Hrs", label: "Typical breach-notification window" },
  { value: "100%", label: "Of KSA-facing businesses fall in scope" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#F6F1E7] border-y border-[#0A1929]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#0A1929]/10">
          {entries.map((entry, i) => (
            <div key={entry.label} className="px-5 py-6 sm:px-6 first:pl-0 lg:first:pl-0">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#A97B32]">
                Exhibit {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-2 font-serif text-2xl sm:text-3xl text-[#0A1929]">
                {entry.value}
              </div>
              <p className="mt-1.5 text-sm text-[#3F4B5B] leading-snug">
                {entry.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}