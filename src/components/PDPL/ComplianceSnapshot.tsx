import { Bell, FileCheck2, ShieldCheck } from "lucide-react";

const stats = [
  { value: "72 Hrs", label: "Avg. breach response time once live" },
  { value: "0", label: "Missed regulatory deadlines for our clients" },
  { value: "Day 1", label: "Audit-ready from day one of engagement" },
];

export default function ComplianceSnapshot() {
  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-6xl font-bold leading-tight">
              Turn Compliance Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                a Non-Issue
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-lg">
              A properly built PDPL program runs quietly in the background —
              requests get handled, incidents get logged, and nothing catches
              your team off guard.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-3 sm:gap-4 max-w-lg">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/40 bg-white/[0.03] px-3 py-4 sm:px-4 sm:py-5 text-center"
                >
                  <div className="text-lg sm:text-2xl font-bold text-blue-400">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-[11px] sm:text-xs text-gray-500 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:hello@bixeltek.com"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Book Your Free Assessment
            </a>
          </div>

          {/* Notification-style mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl border border-white/40 bg-white/[0.03] p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                Live Compliance Feed
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/40 bg-black/40 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                  <Bell className="h-4 w-4 text-blue-400" />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">
                    Data subject request received
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">Auto-logged · 2m ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/40 bg-black/40 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/15">
                  <FileCheck2 className="h-4 w-4 text-green-400" />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">
                    Consent record updated
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">Verified · 1h ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/40 bg-black/40 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                  <ShieldCheck className="h-4 w-4 text-blue-400" />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">
                    Quarterly review scheduled
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">Automated · Today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}