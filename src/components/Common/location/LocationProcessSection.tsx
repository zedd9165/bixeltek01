'use client'
import React, { useEffect, useRef } from "react";

interface ProcessStep {
  number: string;
  title: string;
  text: string;
  gradient: string;
  color: string;
  hoverBg?: string;
}

interface LocationProcessSectionProps {
  tag?: React.ReactNode;
  heading: React.ReactNode;
  highlightText?: string;
  description: string;
  steps: ProcessStep[];
  cta?: {
    text: string;
    href: string;
    bg?: string;
  };
  footerText?: string;
  bg?: string; // section background
  stackBg?: string; // background of the pinned panel only (optional)
}

// Height of the pinned panel as a fraction of the viewport (0.7 - 0.8 works well)
const VIEW = 0.8;
// Scroll distance per card, as a fraction of the viewport height
const STEP = 0.8;
// Extra scroll (in cards) the last card stays pinned before the section releases
const HOLD = 0.3;
// Desktop breakpoint (Tailwind md)
const DESKTOP = 768;

const ease = (t: number) => t * t * (3 - 2 * t);

const LocationProcessSection = ({
  tag,
  heading,
  description,
  steps,
  cta,
  footerText,
  bg = "bg-black",
  stackBg,
}: LocationProcessSectionProps) => {
  const isWhite = bg.includes("white");
  const N = steps.length;

  // Default panel colour is derived from the section bg, so other pages need no changes
  // const panelBg = stackBg ?? (isWhite ? "bg-gray-100" : "bg-neutral-900");

  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (N === 0) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const track = trackRef.current;
      if (!track || window.innerWidth < DESKTOP) return;

      const vh = window.innerHeight;
      const pinTop = ((1 - VIEW) / 2) * vh; // panel is vertically centred

      // Scroll progress through the pinned track: 0 .. N-1
      const p = Math.min(
        Math.max((pinTop - track.getBoundingClientRect().top) / (vh * STEP), 0),
        N - 1
      );

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const d = i - p;

        if (d < 0) {
          // Leaving card: only the top card moves
          const t = Math.min(-d, 1);
          const e = ease(t);
          el.style.transform = `translateY(${-e * 110}vh) rotate(${-5 * e}deg) scale(${1 - 0.05 * e})`;
          el.style.opacity = String(t > 0.7 ? 1 - (t - 0.7) / 0.3 : 1);
          el.style.zIndex = String(N + 1);
        } else {
          // Cards underneath: small offset + scale, easing toward the front
          const k = Math.min(d, 4);
          el.style.transform = `translateY(${k * 26}px) scale(${1 - k * 0.04})`;
          el.style.opacity = d > 4 ? "0" : "1";
          el.style.zIndex = String(N - i);
        }
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [N]);

  return (
    // NOTE: no ancestor of this component may use overflow:hidden/auto, or sticky will break
    <div className={`relative ${bg} pt-12 px-4 sm:px-6 lg:px-8`}>
      {/* Heading */}
      {tag}
      <h2
        className={`text-3xl md:text-6xl md:text-center max-w-6xl mx-auto font-bold font-inter my-6 ${
          isWhite ? "text-black" : "text-white"
        }`}
      >
        {heading}
      </h2>

      <p
        className={`max-w-2xl mx-auto mb-12 font-poppins leading-relaxed md:text-center ${
          isWhite ? "text-gray-900" : "text-gray-300"
        }`}
      >
        {description}
      </p>

      {/* ================= MOBILE (unchanged) ================= */}
      <div className="space-y-10 md:hidden">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className={`p-[1.5px] rounded-3xl bg-gradient-to-r ${item.gradient}`}
          >
            <div
              className={`flex group ${item.hoverBg ?? ""} 
              p-6 rounded-3xl flex-col items-start 
              ${isWhite ? "bg-white" : "bg-black"}`}
            >
              <p className={`${item.color} text-5xl font-bold mb-2`}>
                {item.number}
              </p>

              <h3
                className={`text-xl font-bold mb-2 ${
                  isWhite ? "text-black" : "text-white"
                }`}
              >
                {item.title}
              </h3>

              <p className={`${isWhite ? "text-gray-900" : "text-gray-300"}`}>
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP: sticky stacked cards ================= */}
      <div
        ref={trackRef}
        className="hidden md:block relative"
        style={{ height: `${((N - 1 + HOLD) * STEP + VIEW) * 100}vh` }}
      >
        <div
          className={`sticky w-full max-w-7xl mx-auto rounded-[32px] overflow-hidden flex items-center justify-center`}
          style={{ top: `${((1 - VIEW) / 2) * 100}vh`, height: `${VIEW * 100}vh` }}
        >
          <div className="relative w-[min(880px,88%)] h-[340px]">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isLast = idx === N - 1;

              return (
            <div
              key={idx}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className={`absolute inset-0 rounded-[32px] overflow-hidden will-change-transform backdrop-blur-2xl border ${
                isWhite
                  ? "bg-white/60 border-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_30px_80px_-20px_rgba(0,0,0,0.25)]"
                  : "bg-gradient-to-br from-white/[0.14] to-white/[0.04] border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_30px_80px_-20px_rgba(0,0,0,0.8)]"
              }`}
              style={{
                transformOrigin: "50% 100%",
                zIndex: N - idx,
                // initial resting state (before first scroll update)
                transform: `translateY(${Math.min(idx, 4) * 26}px) scale(${
                  1 - Math.min(idx, 4) * 0.04
                })`,
              }}
            >
              {/* Coloured glow behind the glass (uses the step's gradient) */}
              <div
                className={`pointer-events-none absolute -top-28 -right-28 h-80 w-80 rounded-full bg-gradient-to-br ${item.gradient} opacity-30 blur-3xl`}
              />
              <div
                className={`pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr ${item.gradient} opacity-20 blur-3xl`}
              />

              {/* Top accent line */}
              <div
                className={`absolute inset-x-10 top-0 h-[2px] rounded-full bg-gradient-to-r ${item.gradient}`}
              />

              <div
                className={`group relative z-10 h-full flex items-center gap-12 px-14 py-12 ${
                  item.hoverBg ?? ""
                }`}
              >
                <p
                  className={`${item.color} text-8xl lg:text-9xl font-bold leading-none tracking-tight shrink-0`}
                >
                  {item.number}
                </p>

                {/* Divider */}
                <div
                  className={`hidden lg:block w-px self-stretch ${
                    isWhite ? "bg-black/10" : "bg-white/15"
                  }`}
                />

                <div className="flex-1">
                  <h3
                    className={`text-4xl lg:text-5xl font-bold tracking-tight mb-5 ${
                      isWhite ? "text-black" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`max-w-2xl text-lg lg:text-xl leading-relaxed ${
                      isWhite ? "text-gray-800" : "text-white/70"
                    }`}
                  >
                    {item.text}
                  </p>


                </div>
              </div>
            </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile CTA (the desktop CTA lives on the last card) */}
      {cta && (
        <div className="md:hidden flex justify-center mt-10">
          <a href={cta.href}>
            <button
              className={`px-7 py-3 rounded-2xl font-semibold text-sm shadow-lg transition ${
                cta.bg ? `${cta.bg}` : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {cta.text}
            </button>
          </a>
        </div>
      )}

      {/* Footer */}
      {footerText && (
        <p
          className={`py-10 md:max-w-[90%] lg:max-w-[30%] mx-auto font-poppins leading-relaxed md:text-center ${
            isWhite ? "text-gray-900" : "text-gray-300"
          }`}
        >
          {footerText}
        </p>
      )}
    </div>
  );
};

export default LocationProcessSection;