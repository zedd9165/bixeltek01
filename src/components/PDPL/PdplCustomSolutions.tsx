import { AlertTriangle, Check, Minus } from "lucide-react";

const checklist = [
  "Audit existing privacy policies & consent flows",
  "Identify gaps against current PDPL requirements",
  "Patch, rewrite, or rebuild what's outdated",
  "Hand over a program your team can maintain",
];

const auditItems = [
  { label: "Privacy Policy", status: "outdated" as const },
  { label: "Consent Flow", status: "ok" as const },
  { label: "DPO Contact", status: "missing" as const },
  { label: "Breach Plan", status: "outdated" as const },
];

function StatusBadge({ status }: { status: "ok" | "outdated" | "missing" }) {
  const map = {
    ok: { icon: Check, text: "Compliant", cls: "text-green-400 bg-green-500/10 border-green-500/20" },
    outdated: { icon: AlertTriangle, text: "Outdated", cls: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
    missing: { icon: Minus, text: "Missing", cls: "text-red-400 bg-red-500/10 border-red-500/20" },
  }[status];
  const Icon = map.icon;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${map.cls}`}>
      <Icon className="h-3 w-3" />
      {map.text}
    </span>
  );
}

export default function PdplCustomSolutions() {
  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-6xl font-bold leading-tight">
              Already Have Policies?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                We&apos;ll Audit & Upgrade Them.
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-lg">
              You don&apos;t need to start from zero. Most businesses have partial
              measures in place — we find exactly what&apos;s missing or outdated
              and bring it up to current PDPL standards.
            </p>

            <ul className="mt-7 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                    <Check className="h-3 w-3 text-blue-400" strokeWidth={3} />
                  </span>
                  <span className="text-sm sm:text-base text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="/contact-us"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Audit My Compliance Setup
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl border border-white/40 bg-white/[0.03] p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-white">
                  Your Current Setup
                </span>
              </div>
              <div className="space-y-2.5">
                {auditItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-lg border border-white/40 bg-black/40 px-3.5 py-3"
                  >
                    <span className="text-sm text-gray-300">{item.label}</span>
                    <StatusBadge status={item.status} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}