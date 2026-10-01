'use client';

import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, ArrowRight } from 'lucide-react';

interface Metric {
  value: string;
  label: string;
}

interface TestimonialCard {
  id: string;
  brandName: string;
  quote: string;
  metrics: Metric[];
  cardColor: string;
  imageSrc: string;
  imageAlt: string;
  imageSide: 'left' | 'right';
}

const statsSummary = [
  { value: '100', sup: '+', label: 'Practices & Brands Scaled' },
  { value: '$380K', sup: '', label: 'Peak Monthly Sales Documented' },
  { value: '4.9/5', sup: '', label: 'Avg. Client Satisfaction', hasStar: true },
];

const testimonials: TestimonialCard[] = [
  {
    id: 'tumblewash',
    brandName: 'TumbleWash Franchise',
    quote:
      'Bixeltek transformed our digital customer acquisition. By connecting local search intent with better landing pages and campaign structure, our acquisition journey became substantially more efficient and dependable.',
    metrics: [
      { value: '₹77', label: 'Cost per qualified lead' },
      { value: '3.4x', label: 'Inbound booking conversion' },
    ],
    cardColor: '#0A0A10', // Obsidian black
    imageSrc: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'TumbleWash platform growth dashboard',
    imageSide: 'left',
  },
  {
    id: 'healthcare',
    brandName: 'Dental & Healthcare Partners',
    quote:
      'The difference with Bixeltek is they understand unit economics. They don’t report vanity clicks or impressions—they report actual booked patient consultations, show-up rates, and revenue attribution.',
    metrics: [
      { value: '210+', label: 'Monthly booked patients' },
      { value: '42%', label: 'Lower acquisition cost' },
    ],
    cardColor: '#670EF7', // Signature electric purple
    imageSrc: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Healthcare acquisition funnel',
    imageSide: 'right',
  },
  {
    id: 'b2b-engineering',
    brandName: 'Commercial B2B Engineering Group',
    quote:
      'Having engineering, modern web speed, and paid media managed under one roof eliminated months of contractor finger-pointing. Our speed increased threefold and conversion rates doubled.',
    metrics: [
      { value: '< 1.1s', label: 'Core Web Vitals speed' },
      { value: '2x', label: 'High-intent conversion rate' },
    ],
    cardColor: '#C8102E', // Signal red
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Engineering system analytics',
    imageSide: 'left',
  },
  {
    id: 'ecommerce',
    brandName: 'Omnichannel Retail Brand',
    quote:
      'Their team re-architected our storefront and Google Shopping pipelines. Cart abandonment dropped significantly and our return on ad spend jumped without increasing top-of-funnel budget.',
    metrics: [
      { value: '+184%', label: 'Ecommerce ROAS lift' },
      { value: '-31%', label: 'Checkout cart drop-off' },
    ],
    cardColor: '#1F2BD9', // Cobalt
    imageSrc: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'E-commerce conversion infrastructure',
    imageSide: 'right',
  },
  {
    id: 'specialty-dental',
    brandName: 'Speciality Dental Network',
    quote:
      'From custom landing pages to local map pack rankings, Bixeltek delivered high-ticket patient cases consistently every month. The transparency and weekly performance reporting are unmatched.',
    metrics: [
      { value: '4.8x', label: 'Return on ad spend' },
      { value: '180+', label: 'New consultations / mo' },
    ],
    cardColor: '#0B7A5A', // Deep emerald
    imageSrc: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Dental implant patient acquisition',
    imageSide: 'left',
  },
  {
    id: 'global-consulting',
    brandName: 'Global Advisory & Tech Capital',
    quote:
      'Bixeltek delivered a corporate digital identity and web application that positioned us alongside top-tier global firms. Fast turnarounds, meticulous attention to detail, and seamless execution.',
    metrics: [
      { value: '3.2x', label: 'Enterprise inbound pipeline' },
      { value: '100%', label: 'On-schedule delivery' },
    ],
    cardColor: '#5808D8',
    imageSrc: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Global tech web app showcase',
    imageSide: 'right',
  },
];



export default function TestimonialsEditorial() {
  const total = testimonials.length;

  const loopItems = [...testimonials, ...testimonials, ...testimonials];

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

  // After the slide animation ends, hop back to the middle copy without animation.
  const handleAnimationComplete = () => {
    if (pos < total) {
      setAnimated(false);
      setPos(pos + total);
    } else if (pos >= total * 2) {
      setAnimated(false);
      setPos(pos - total);
    }
  };

  // Measure the real card position in px and center it in the viewport.
  const computeOffset = useCallback(() => {
    const viewport = viewportRef.current;
    const card = cardRefs.current[pos];
    if (!viewport || !card) return;
    setOffset(viewport.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2));
  }, [pos]);

  useLayoutEffect(() => {
    computeOffset();
    window.addEventListener('resize', computeOffset);
    return () => window.removeEventListener('resize', computeOffset);
  }, [computeOffset]);

  // Arrows: on mobile/tablet (stacked card) they sit on the line between the image
  // and the text, like the reference. On desktop they stay vertically centered.
  // Mobile  : image h-64 (256px) + 8px track padding  -> top-[264px]
  // Tablet  : image h-80 (320px) + 8px track padding  -> md:top-[328px]
  // If you change the image heights below, change these two numbers too.
  const arrowClass =
    'absolute top-[244px] md:top-[328px] lg:top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/95 border border-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.18)] text-neutral-800 hover:text-[#670EF7] hover:scale-105 transition-all flex items-center justify-center cursor-pointer';

  return (
    <section className="relative w-full py-20 md:py-24 lg:py-28 bg-white text-[#08080C] overflow-hidden border-b border-neutral-200">
      {/* ===== Header + summary stats ===== */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-14 md:mb-16">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#08080C] tracking-tight leading-[1.12] mb-12"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Trusted by teams at the world’s leading brands and ambitious businesses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto gap-8 md:gap-0 md:divide-x divide-neutral-200">
          {statsSummary.map((item, i) => (
            <div key={i} className="flex flex-col items-center px-4">
              <div
                className="relative text-4xl md:text-5xl font-extrabold tracking-tight text-[#08080C] mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.value}
                {item.sup && (
                  <sup className="text-2xl md:text-3xl font-semibold align-super ml-0.5">{item.sup}</sup>
                )}
                {item.hasStar && (
                  <Star className="absolute -top-1 -right-5 w-4 h-4 fill-amber-400 text-amber-400" />
                )}
              </div>
              <p
                className="text-xs md:text-sm text-neutral-500 font-medium"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Carousel ===== */}
      <motion.div
        ref={viewportRef}
        className="relative w-full overflow-hidden select-none"
        style={{ touchAction: 'pan-y' }}
        onPanEnd={(_, info) => {
          if (info.offset.x < -60) nextSlide();
          else if (info.offset.x > 60) prevSlide();
        }}
      >
        {/* Arrows (on mobile they sit inside the card edge: card is 86vw, so margin = 7vw) */}
        <button
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className={`${arrowClass} left-[calc(7vw+0.75rem)] md:left-8 lg:left-14`}
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next testimonial"
          className={`${arrowClass} right-[calc(7vw+0.75rem)] md:right-8 lg:right-14`}
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {/* Track — starts at x=0, offset is measured in px so any card can be centered */}
        <motion.div
          className="relative flex w-max gap-5 md:gap-6 py-2"
          initial={false}
          animate={{ x: offset }}
          transition={{ duration: animated ? 0.65 : 0, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={handleAnimationComplete}
        >
          {loopItems.map((item, idx) => {
            const isActive = idx === pos;
            const imageFirst = item.imageSide === 'left';

            return (
              <div
                key={`${item.id}-${Math.floor(idx / total)}`}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onClick={() => goTo(idx)}
                aria-hidden={!isActive && Math.floor(idx / total) !== 1 ? true : undefined}
                // Mobile/tablet: height follows the content (all cards stretch to the tallest),
                // so the full quote is always visible. Desktop: original fixed height.
                className={`group shrink-0 w-[86vw] md:w-[78vw] lg:w-[62vw] xl:w-[56vw] 2xl:w-[50vw] max-w-[1100px] lg:h-[470px] rounded-3xl overflow-hidden transition-opacity duration-500 cursor-pointer ${
                  isActive ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                }`}
                style={{ backgroundColor: item.cardColor }}
              >
                <div className="w-full lg:h-full grid grid-cols-1 lg:grid-cols-12 text-white">
                  {/* Image: on top for mobile/tablet, left/right half on desktop */}
                  <div
                    className={`relative lg:col-span-6 h-64 md:h-80 lg:h-full w-full overflow-hidden ${
                      imageFirst ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 35vw, 86vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Fade the image into the card color (bottom on mobile/tablet, side on desktop) */}
                    <div
                      className="absolute inset-0 lg:hidden"
                      style={{
                        backgroundImage: `linear-gradient(to bottom, transparent 45%, ${item.cardColor})`,
                      }}
                    />
                    <div
                      className="absolute inset-0 hidden lg:block"
                      style={{
                        backgroundImage: `linear-gradient(to ${
                          imageFirst ? 'right' : 'left'
                        }, transparent 35%, ${item.cardColor} 100%)`,
                      }}
                    />
                  </div>

                  {/* Content half */}
                  <div
                    className={`relative lg:col-span-6 px-7 pb-7 pt-3 md:px-10 md:pb-9 md:pt-4 lg:p-12 flex flex-col justify-between gap-6 ${
                      imageFirst ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      {/* Hidden on mobile only (the arrows sit on this line there, as in the reference) */}
                      <Quote
                        className="hidden md:block w-9 h-9 fill-white text-white mb-5"
                        aria-hidden
                      />
                      {/* No line-clamp: the full quote is shown at every size */}
                      <blockquote
                        className="text-base md:text-lg lg:text-[1.35rem] font-semibold leading-snug text-white tracking-tight"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {item.quote}
                      </blockquote>
                    </div>

                    <div className="pt-5">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {(item.metrics ?? []).map((m, mIdx) => (
                          <div key={mIdx}>
                            <span
                              className="text-3xl md:text-4xl font-extrabold text-white block tracking-tight"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {m.value}
                            </span>
                            <span
                              className="text-[11px] md:text-xs text-white/85 font-medium"
                              style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div
                        className="text-sm md:text-base font-bold text-white tracking-tight"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.brandName}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 md:mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(total + i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i ? 'w-8 bg-[#670EF7]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}