import React from "react";

export interface PillarStatsProps {
  id?: string;
  /** Short line on the left, e.g. "Numbers behind the work" */
  heading: string;
  stats: { value: string; label: string }[];
}

/** Violet proof band. Keep it to 3 or 4 real numbers. */
export default function PillarStats({ id = "proof", heading, stats }: PillarStatsProps) {
  return (
    <section id={id} className="relative overflow-hidden bg-[#670EF7] py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border-[40px] border-white/[0.07]" />
      <div className="pointer-events-none absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-[#8C45FF]/40 blur-3xl" />
      <div className="relative mx-auto grid w-full items-center gap-10 px-4 sm:px-6 lg:max-w-[90%] lg:grid-cols-12 lg:px-8">
        <h2 className="text-2xl font-bold leading-tight tracking-tight font-inter md:text-3xl lg:col-span-4">
          {heading}
        </h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:col-span-8 lg:grid-flow-col lg:auto-cols-fr">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-white/30 pl-5">
              <dt className="order-2 mt-1 text-sm text-violet-100 font-poppins">{s.label}</dt>
              <dd className="text-4xl font-extrabold tracking-tight font-inter lg:text-5xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}