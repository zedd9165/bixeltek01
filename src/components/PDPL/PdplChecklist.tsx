"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const items = [
  { id: "policy", label: "We have a published, up-to-date privacy policy" },
  { id: "consent", label: "We collect explicit, unbundled consent for data use" },
  { id: "mapping", label: "We know exactly what personal data we hold and where" },
  { id: "dpo", label: "We've assessed whether we need a Data Protection Officer" },
  { id: "breach", label: "We have a written breach-notification procedure" },
  { id: "transfer", label: "We've reviewed any data transfers outside Saudi Arabia" },
  { id: "training", label: "Our staff has been trained on data-handling procedures" },
];

export default function ReadinessChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const score = useMemo(() => {
    const total = items.length;
    const done = items.filter((i) => checked[i.id]).length;
    return { done, total, pct: Math.round((done / total) * 100) };
  }, [checked]);

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score.pct / 100) * circumference;

  const verdict =
    score.pct === 100
      ? "Strong footing — let's confirm it with a formal audit."
      : score.pct >= 60
      ? "You've made a start. Gaps remain worth closing."
      : score.pct > 0
      ? "Meaningful exposure. Worth a proper assessment."
      : "Let's find out where you actually stand.";

  return (
    <section className="bg-[#F6F1E7] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#A97B32]">
            Self-Assessment
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-[#0A1929] leading-tight">
            Where does your business stand today?
          </h2>
          <p className="mt-4 text-[#3F4B5B] leading-relaxed">
            Check off what's already true. This isn't a substitute for a
            formal assessment — but it's an honest starting point.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-14 items-start">
          <ul className="space-y-3">
            {items.map((item) => {
              const isChecked = !!checked[item.id];
              return (
                <li key={item.id}>
                  <label className="flex items-start gap-3.5 rounded-md border border-[#0A1929]/10 bg-white px-4 py-3.5 sm:px-5 sm:py-4 cursor-pointer transition-colors hover:border-[#C9974A]/50">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={isChecked}
                      onChange={() =>
                        setChecked((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                      }
                    />
                    <span
                      className={
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border transition-colors " +
                        (isChecked
                          ? "bg-[#C9974A] border-[#C9974A]"
                          : "border-[#0A1929]/25 bg-transparent")
                      }
                      aria-hidden="true"
                    >
                      {isChecked && (
                        <svg viewBox="0 0 16 16" className="h-3 w-3 fill-none stroke-[#0A1929]" strokeWidth={2.5}>
                          <path d="M3 8.5L6.5 12L13 4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <span
                      className={
                        "text-sm sm:text-base leading-snug " +
                        (isChecked ? "text-[#0A1929]" : "text-[#3F4B5B]")
                      }
                    >
                      {item.label}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>

          <div className="lg:sticky lg:top-24 rounded-lg border border-[#0A1929]/10 bg-white p-7 text-center">
            <div className="relative mx-auto h-32 w-32">
              <svg viewBox="0 0 128 128" className="h-32 w-32 -rotate-90">
                <circle cx="64" cy="64" r="54" fill="none" stroke="#0A1929" strokeOpacity="0.08" strokeWidth="10" />
                <circle
                  cx="64"
                  cy="64"
                  r="54"
                  fill="none"
                  stroke="#C9974A"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  style={{ transition: "stroke-dashoffset 400ms ease" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-serif text-2xl text-[#0A1929]">{score.pct}%</span>
                <span className="font-mono text-[10px] uppercase tracking-wide text-[#6B7A8D]">
                  {score.done}/{score.total}
                </span>
              </div>
            </div>
            <p className="mt-5 text-sm text-[#3F4B5B] leading-relaxed min-h-[2.5rem]">
              {verdict}
            </p>
            <Link
              href="/contact-us"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0A1929] px-5 py-3 text-sm font-semibold text-[#F6F1E7] hover:bg-[#132A42] transition-colors"
            >
              Get a Formal Assessment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}