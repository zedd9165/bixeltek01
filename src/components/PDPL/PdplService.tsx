import {
  FileSearch,
  ClipboardList,
  PenLine,
  Users,
  AlertTriangle,
  Globe2,
  GraduationCap,
  RefreshCw,
} from "lucide-react";

const services = [
  { icon: FileSearch, title: "Gap Assessment", tag: "File 01", description: "A full audit of your data practices benchmarked against PDPL requirements." },
  { icon: ClipboardList, title: "Data Mapping", tag: "File 02", description: "Records of processing that show exactly what data you hold and why." },
  { icon: PenLine, title: "Policy Drafting", tag: "File 03", description: "Privacy notices, consent flows, and retention policies, written to hold up." },
  { icon: Users, title: "DPO Advisory", tag: "File 04", description: "Guidance on appointing a DPO, or acting as your outsourced point of contact." },
  { icon: AlertTriangle, title: "Breach Response", tag: "File 05", description: "A rehearsed playbook so your team knows exactly how to act and report." },
  { icon: Globe2, title: "Cross-Border Review", tag: "File 06", description: "Assessing international data transfers against PDPL transfer conditions." },
  { icon: GraduationCap, title: "Staff Training", tag: "File 07", description: "Practical sessions so your team understands its role in staying compliant." },
  { icon: RefreshCw, title: "Ongoing Monitoring", tag: "File 08", description: "Periodic reviews as SDAIA guidance evolves, so compliance doesn't lapse." },
];

export default function ServicesDossier() {
  return (
    <section className="bg-[#F6F1E7] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#A97B32]">
            The Dossier
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#0A1929] leading-tight">
            Eight files. One compliant business.
          </h2>
          <p className="mt-4 text-[#3F4B5B] leading-relaxed">
            Everything we do for a PDPL engagement, organized the way we
            actually run it — as a working case file, not a one-off report.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map(({ icon: Icon, title, tag, description }) => (
            <div
              key={title}
              className="group relative rounded-md bg-white border border-[#0A1929]/10 p-6 pt-9 transition-all hover:border-[#C9974A]/60 hover:-translate-y-1 hover:shadow-[0_12px_24px_-12px_rgba(10,25,41,0.25)]"
            >
              {/* file tab */}
              <span className="absolute -top-3 left-6 rounded-sm bg-[#0A1929] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#E4C079]">
                {tag}
              </span>

              <Icon className="h-6 w-6 text-[#A97B32]" strokeWidth={1.6} aria-hidden="true" />
              <h3 className="mt-4 font-serif text-lg text-[#0A1929]">{title}</h3>
              <p className="mt-2 text-sm text-[#3F4B5B] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}