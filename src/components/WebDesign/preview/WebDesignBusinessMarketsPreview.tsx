"use client";

import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Check } from "lucide-react";
import { webBusinessMarketsData } from "@/data/service/webdesing";

/* ---------------------------------- config --------------------------------- */

// Solid card colours, same family as the testimonial carousel
const cardColors = [
  "#0A0A10", // Obsidian
  "#670EF7", // Electric purple
  "#C8102E", // Signal red
  "#1F2BD9", // Cobalt
  "#0B7A5A", // Deep emerald
  "#5808D8", // Violet
];

// Arrows sit on the line between the visual panel and the text on mobile/tablet.
// Mobile: panel h-56 (224px) + 8px track padding -> top-[232px]
// Tablet: panel h-64 (256px) + 8px track padding -> md:top-[264px]
// If you change the panel heights below, change these two numbers too.
const arrowClass =
  "absolute top-[232px] md:top-[264px] lg:top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/95 border border-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.18)] text-neutral-800 hover:text-[#670EF7] hover:scale-105 transition-all flex items-center justify-center cursor-pointer";

/* --------------------------------- component -------------------------------- */

export default function WebDesignBusinessMarketsPreview() {
  const cards = webBusinessMarketsData.cards;
  const total = cards.length;

  // Three copies so the loop is seamless in both directions
  const loopItems = [...cards, ...cards, ...cards];

  const [pos, setPos] = useState(total);
  const [offset, setOffset] = useState(0);
  const [animated, setAnimated] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lockRef = useRef(false);

  const activeIndex = pos % total;

  const step = (dir: 1 | -1) => {
    if (lockRef.current) return;
    lockRef.current = true;
    setTimeout(() => {
      lockRef.current = false;
    }, 700);
    setAnimated(true);
    setPos((p) => p + dir);
  };
  const prevSlide = () => step(-1);
  const nextSlide = () => step(1);

  const goTo = (loopPos: number) => {
    setAnimated(true);
    setPos(loopPos);
  };

  // After the slide ends, hop back to the middle copy without animation
  const handleAnimationComplete = () => {
    if (pos < total) {
      setAnimated(false);
      setPos(pos + total);
    } else if (pos >= total * 2) {
      setAnimated(false);
      setPos(pos - total);
    }
  };

  // Measure the real card position and centre it in the viewport
  const computeOffset = useCallback(() => {
    const viewport = viewportRef.current;
    const card = cardRefs.current[pos];
    if (!viewport || !card) return;
    setOffset(viewport.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2));
  }, [pos]);

  useLayoutEffect(() => {
    computeOffset();
    window.addEventListener("resize", computeOffset);
    return () => window.removeEventListener("resize", computeOffset);
  }, [computeOffset]);

  return (
    <section className="relative w-full py-20 md:py-24 lg:py-28 bg-white text-[#08080C] overflow-hidden border-b border-neutral-200">
      {/* ===== Header ===== */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-14 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span>{webBusinessMarketsData.eyebrow}</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-inter text-[#08080C] tracking-tight leading-[1.12] mb-5">
          {webBusinessMarketsData.h2}
        </h2>
        <p className="font-poppins text-base md:text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
          {webBusinessMarketsData.intro}
        </p>
      </div>

      {/* ===== Carousel ===== */}
      <motion.div
        ref={viewportRef}
        className="relative w-full overflow-hidden select-none"
        style={{ touchAction: "pan-y" }}
        onPanEnd={(_, info) => {
          if (info.offset.x < -60) nextSlide();
          else if (info.offset.x > 60) prevSlide();
        }}
      >
        <button
          onClick={prevSlide}
          aria-label="Previous business model"
          className={`${arrowClass} left-[calc(7vw+0.75rem)] md:left-8 lg:left-14`}
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next business model"
          className={`${arrowClass} right-[calc(7vw+0.75rem)] md:right-8 lg:right-14`}
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        <motion.div
          className="relative flex w-max gap-5 md:gap-6 py-2"
          initial={false}
          animate={{ x: offset }}
          transition={{ duration: animated ? 0.65 : 0, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={handleAnimationComplete}
        >
          {loopItems.map((card, idx) => {
            const originalIndex = idx % total;
            const isActive = idx === pos;
            const imageFirst = originalIndex % 2 === 0; // alternate sides
            const color = cardColors[originalIndex % cardColors.length];
            const number = String(originalIndex + 1).padStart(2, "0");
            const image = "image" in card ? card.image : undefined;
            const imageAlt = ("imageAlt" in card && card.imageAlt) || card.title;
            const question = "visitorQuestion" in card ? card.visitorQuestion : undefined;
            const focus = "focus" in card && card.focus ? card.focus : [];

            return (
              <div
                key={`${card.title}-${Math.floor(idx / total)}`}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onClick={() => goTo(idx)}
                aria-hidden={!isActive && Math.floor(idx / total) !== 1 ? true : undefined}
                className={`group shrink-0 w-[86vw] md:w-[78vw] lg:w-[62vw] xl:w-[56vw] 2xl:w-[50vw] max-w-[1100px] lg:min-h-[500px] rounded-3xl overflow-hidden transition-opacity duration-500 cursor-pointer ${
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-90"
                }`}
                style={{ backgroundColor: color }}
              >
                <div className="w-full lg:h-full grid grid-cols-1 lg:grid-cols-12 text-white">
                  {/* Visual panel: top on mobile/tablet, left/right half on desktop */}
                  <div
                    className={`relative lg:col-span-6 h-56 md:h-64 lg:h-auto w-full overflow-hidden ${
                      imageFirst ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {image ? (
                      <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        sizes="(min-width: 1024px) 35vw, 86vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 bg-white/10"
                        style={{
                          backgroundImage:
                            "radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px)",
                          backgroundSize: "22px 22px",
                        }}
                      />
                    )}

                    {/* number badge */}
                    <span
                      className="absolute left-5 top-5 z-10 px-3 py-1 rounded-full bg-white font-poppins text-xs font-bold shadow-md"
                      style={{ color }}
                    >
                      {number}
                    </span>
                    {/* Fade the panel into the card colour (bottom on mobile/tablet, side on desktop) */}
                    <div
                      className="absolute inset-0 lg:hidden"
                      style={{
                        backgroundImage: `linear-gradient(to bottom, transparent 45%, ${color})`,
                      }}
                    />
                    <div
                      className="absolute inset-0 hidden lg:block"
                      style={{
                        backgroundImage: `linear-gradient(to ${
                          imageFirst ? "right" : "left"
                        }, transparent 65%, ${color} 100%)`,
                      }}
                    />
                  </div>

                  {/* Content half */}
                  <div
                    className={`relative lg:col-span-6 px-7 pb-7 pt-3 md:px-10 md:pb-9 md:pt-4 lg:p-12 flex flex-col justify-between gap-6 ${
                      imageFirst ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      <Quote
                        className="hidden md:block lg:hidden w-9 h-9 fill-white text-white mb-5"
                        aria-hidden
                      />
                      <h3 className="font-inter text-2xl md:text-3xl font-extrabold leading-tight tracking-tight mb-3">
                        {card.title}
                      </h3>
                      <p className="font-poppins text-sm md:text-base leading-relaxed text-white/90">
                        {card.description}
                      </p>

                      {/* Mobile/tablet: the question lives here instead of the panel */}
                      {question && (
                        <p className="lg:hidden mt-5 font-inter text-base font-semibold leading-snug border-l-2 border-white/60 pl-4">
                          “{question}”
                        </p>
                      )}
                    </div>

                    {focus.length > 0 && (
                      <ul className="grid grid-cols-1 gap-2.5 pt-5 border-t border-white/25">
                        {focus.map((item: string) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 font-poppins text-sm text-white"
                          >
                            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 md:mt-10">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(total + i)}
              aria-label={`Go to business model ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i ? "w-8 bg-[#670EF7]" : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}