import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Heart,
  MessageCircle,
  Send,
  ShoppingCart,
  Star,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type CardPosition =
  | "topLeft"
  | "midLeft"
  | "bottomLeft"
  | "topRight"
  | "bottomRight";

type BaseCard = {
  position: CardPosition;
  /** Extra classes, e.g. "rotate-3" or "lg:-translate-y-2" */
  className?: string;
};

export type HeroCard =
  | (BaseCard & {
      variant: "image";
      src: string;
      alt: string;
      timestamp?: string;
    })
  | (BaseCard & { variant: "rating"; stars?: number })
  | (BaseCard & { variant: "stat"; label: string; value: string })
  | (BaseCard & {
      variant: "product";
      count: string | number;
      unit?: string;
      subtitle: string;
      price: string;
      src: string;
      alt: string;
    })
  | (BaseCard & {
      variant: "social";
      src: string;
      alt: string;
      likes: string;
    });

export type HeroButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type HeroLogo = {
  name: string;
  /** Pass your own <Image> / SVG here. Falls back to the name as text. */
  node?: ReactNode;
  /** Styling for the text fallback (font, size, weight...) */
  className?: string;
};

export interface ConversionHeroProps {
  id?: string;
  h1?: ReactNode;
  description?: string;
  buttons?: HeroButton[];
  phoneImage?: { src: string; alt: string };
  phoneUser?: { name: string; avatar?: string };
  phoneBadge?: string;
  cards?: HeroCard[];
  logos?: HeroLogo[];
  /** e.g. "font-inter". Defaults to Tailwind's font-inter. */
  headingClassName?: string;
  /** e.g. "font-poppins". Defaults to font-poppins. */
  descriptionClassName?: string;
  /** Fade the first/last logo at the edges. Defaults to true when there are more than 6 logos. */
  fadeLogoEdges?: boolean;
  className?: string;
}

/* ------------------------------------------------------------------ */
/* Card positions (percentages of the stage, so they scale together)   */
/* ------------------------------------------------------------------ */

const positionClasses: Record<CardPosition, string> = {
  topLeft: "left-[4%] top-0 lg:left-[12%]",
  midLeft: "left-[17%] top-[47%] lg:left-[19%]",
  bottomLeft: "left-0 bottom-[9%]",
  topRight: "right-[4%] top-[2%] lg:right-[8.5%]",
  bottomRight: "right-0 bottom-[8%]",
};

/* ------------------------------------------------------------------ */
/* Floating card                                                       */
/* ------------------------------------------------------------------ */

function Card({ card }: { card: HeroCard }) {
  // Cards are desktop/tablet only; the phone carries the hero on mobile.
  const base = `absolute z-20 hidden ${positionClasses[card.position]} ${
    card.className ?? ""
  }`;

  switch (card.variant) {
    case "image":
      return (
        <div
          className={`${base} md:block h-[132px] w-[120px] overflow-hidden rounded-2xl bg-sky-200 shadow-md lg:h-[172px] lg:w-[157px] lg:rounded-[22px]`}
        >
          <Image
            src={card.src}
            alt={card.alt}
            fill
            sizes="(min-width: 1024px) 160px, 120px"
            className="object-cover"
          />
          {card.timestamp && (
            <span className="absolute left-2 top-2 rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-medium text-neutral-800 backdrop-blur-sm lg:left-3 lg:top-3 lg:text-xs">
              {card.timestamp}
            </span>
          )}
        </div>
      );

    case "rating":
      return (
        <div
          className={`${base} md:flex items-center gap-1 rounded-full bg-[#F6C9EE] px-3 py-1.5 shadow-sm lg:gap-1.5 lg:px-4 lg:py-2`}
          aria-label={`${card.stars ?? 5} star rating`}
        >
          {Array.from({ length: card.stars ?? 5 }).map((_, i) => (
            <Star
              key={i}
              strokeWidth={0}
              className="h-3 w-3 fill-neutral-950 text-neutral-950 lg:h-4 lg:w-4"
            />
          ))}
        </div>
      );

    case "stat":
      return (
        <div
          className={`${base} md:flex min-w-[160px] items-center gap-3 whitespace-nowrap rounded-2xl bg-[#FDDF6B] px-4 py-3 shadow-md lg:min-w-[212px] lg:gap-4 lg:px-5 lg:py-4`}
        >
          {/* bar chart icon */}
          <div className="flex h-8 items-end gap-1 lg:h-11 lg:gap-1.5" aria-hidden="true">
            <span className="h-[40%] w-2 rounded-[3px] bg-[#3B1B13] lg:w-2.5" />
            <span className="h-full w-2 rounded-[3px] bg-[#3B1B13] lg:w-2.5" />
            <span className="h-[55%] w-2 rounded-[3px] bg-[#3B1B13] lg:w-2.5" />
            <span className="h-[85%] w-2 rounded-[3px] bg-[#3B1B13] lg:w-2.5" />
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-medium text-neutral-800 lg:text-xs">
              {card.label}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-bold leading-tight tracking-tight text-neutral-950 lg:text-[34px]">
                {card.value}
              </span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-neutral-950 lg:h-5 lg:w-5">
                <ArrowUpRight className="h-2.5 w-2.5 text-[#FDDF6B] lg:h-3 lg:w-3" strokeWidth={3} />
              </span>
            </div>
          </div>
        </div>
      );

    case "product":
      return (
        <div
          className={`${base} md:flex h-[112px] w-[180px] items-center justify-between rounded-2xl bg-[#B9F0C5] pl-4 shadow-md lg:h-[146px] lg:w-[237px] lg:pl-5`}
        >
          <div className="flex flex-col items-start">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold leading-none text-neutral-950 lg:text-[44px]">
                {card.count}
              </span>
              <span className="text-xs font-medium text-neutral-900 lg:text-base">
                {card.unit ?? "items"}
              </span>
            </div>
            <span className="mt-1 text-[10px] text-neutral-700 lg:text-xs">
              {card.subtitle}
            </span>
            <span className="mt-2 rounded-full border border-neutral-200 bg-white px-2.5 py-0.5 text-xs font-semibold text-neutral-900 lg:mt-3">
              {card.price}
            </span>
          </div>

          {/* tilted product shot, allowed to break out of the card a little */}
          <div className="relative h-full w-[78px] rotate-[18deg] scale-110 lg:w-[100px]">
            <Image
              src={card.src}
              alt={card.alt}
              fill
              sizes="100px"
              className="object-contain drop-shadow-md"
            />
          </div>
        </div>
      );

    case "social":
      return (
        <div
          className={`${base} md:block w-[150px] rounded-2xl border border-neutral-200 bg-white p-2 shadow-lg lg:w-[195px]`}
        >
          <div className="relative h-[90px] w-full overflow-hidden rounded-xl bg-neutral-100 lg:h-[120px]">
            <Image
              src={card.src}
              alt={card.alt}
              fill
              sizes="(min-width: 1024px) 195px, 150px"
              className="object-cover"
            />
          </div>

          <div className="mt-2 flex items-center justify-between px-1 text-neutral-400 lg:mt-2.5">
            <div className="flex items-center gap-2.5 lg:gap-3">
              <span className="relative flex">
                {/* likes tooltip */}
                <span className="absolute -left-4 -top-8 flex items-center rounded-md bg-[#3B1B13] px-2 py-1 text-[10px] font-semibold text-white lg:-top-9 lg:text-xs">
                  {card.likes}
                  <span className="absolute -bottom-1 left-[22px] h-2 w-2 rotate-45 bg-[#3B1B13]" />
                </span>
                <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              </span>
              <MessageCircle className="h-4 w-4" />
              <ShoppingCart className="h-4 w-4" />
            </div>
            <Send className="h-4 w-4" />
          </div>
        </div>
      );
  }
}

/* ------------------------------------------------------------------ */
/* Defaults (match the reference design)                               */
/* Images are local: put your downloaded files in /public/images/hero  */
/* ------------------------------------------------------------------ */

const DEFAULT_H1 = (
  <>
    AI-Driven Conversion
    <br />
    Growth Right Away
  </>
);

const DEFAULT_BUTTONS: HeroButton[] = [
  { label: "Download Free App", href: "#", variant: "primary" },
  { label: "Get Started Free", href: "#", variant: "secondary" },
];

const DEFAULT_CARDS: HeroCard[] = [
  { variant: "image", position: "topLeft", src: "/images/hero/ad-1.jpg", alt: "Skincare product ad", timestamp: "2:01" },
  { variant: "rating", position: "midLeft", stars: 5 },
  { variant: "stat", position: "bottomLeft", label: "Engagement", value: "40%" },
  { variant: "product", position: "topRight", count: 8, unit: "items", subtitle: "Sold this week", price: "$12", src: "/images/hero/ad-2.png", alt: "Product bottle" },
  { variant: "social", position: "bottomRight", src: "/images/hero/ad-3.jpg", alt: "Creator post", likes: "1.5k" },
];

// Text placeholders. Swap for real brand SVGs via the `node` field.
const DEFAULT_LOGOS: HeroLogo[] = [
  { name: "HEIRESS", className: "font-serif text-xl tracking-tight" },
  { name: "TOZO", className: "text-2xl font-black tracking-tight" },
  { name: "Hell Babes", className: "font-serif text-2xl font-bold italic" },
  { name: "cocokind", className: "font-serif text-2xl font-semibold" },
  { name: "Oxyfresh", className: "text-2xl font-light tracking-tight" },
  {
    name: "DOT & KEY",
    node: (
      <span className="flex flex-col items-center leading-none">
        <span className="text-base font-semibold tracking-[0.15em]">DOT &amp; KEY</span>
        <span className="mt-0.5 text-[7px] tracking-[0.3em]">SKINCARE</span>
      </span>
    ),
  },
  { name: "Skybags", className: "font-serif text-2xl font-bold italic" },
  { name: "Bellefit", className: "text-2xl font-extrabold tracking-tight" },
  { name: "AMAZING LACE", className: "text-xl font-light uppercase tracking-tight" },
];

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export default function ConversionHero({
  id,
  h1 = DEFAULT_H1,
  description = "From concept to conversion — manage thousands of successful influencers ads seamlessly.",
  buttons = DEFAULT_BUTTONS,
  phoneImage = { src: "/images/hero/phone-center.jpg", alt: "Creator smiling on a live stream" },
  phoneUser = { name: "Wade Warren" },
  phoneBadge = "Live",
  cards = DEFAULT_CARDS,
  logos = DEFAULT_LOGOS,
  headingClassName = "",
  descriptionClassName = "",
  fadeLogoEdges,
  className = "",
}: ConversionHeroProps) {
  const fadeEdges = fadeLogoEdges ?? logos.length > 6;

  return (
    <section id={id} className={`relative overflow-hidden bg-white pt-24  ${className}`}>
      <div className="mx-auto max-w-6xl px-4 pt-14 text-center sm:px-6 lg:pt-20">
        <h1
          className={`mx-auto max-w-5xl font-inter text-4xl font-bold leading-[1.08] tracking-tight text-neutral-950 md:text-5xl lg:text-[64px] ${headingClassName}`}
        >
          {h1}
        </h1>

        <p
          className={`mx-auto mt-5 max-w-4xl font-poppins text-base text-neutral-600 lg:mt-6 lg:text-lg ${descriptionClassName}`}
        >
          {description}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:mt-8">
          {buttons.map((b) => (
            <Link
              key={b.label}
              href={b.href}
              className={
                b.variant === "secondary"
                  ? "rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
                  : "rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
              }
            >
              {b.label}
            </Link>
          ))}
        </div>

        {/* Stage */}
        <div className="relative mx-auto mt-10 h-[320px] w-full max-w-[1113px] md:h-[330px] lg:mt-14 lg:h-[400px]">
          {/* outer ring */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-[170px] w-[340px] -translate-x-1/2 rounded-t-full border border-b-0 border-neutral-200 md:h-[246px] md:w-[492px] lg:h-[328px] lg:w-[656px]"
          />
          {/* inner warm glow */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-[150px] w-[300px] -translate-x-1/2 rounded-t-full bg-gradient-to-t from-[#FBEDA8] via-[#FDF5D3] to-transparent md:h-[222px] md:w-[444px] lg:h-[298px] lg:w-[596px]"
          />

          {/* Phone */}
          <div className="absolute bottom-0 left-1/2 z-10 h-[290px] w-[210px] -translate-x-1/2 overflow-hidden rounded-t-[2rem] border-[5px] border-b-0 border-neutral-950 bg-neutral-950 shadow-2xl md:w-[225px] lg:h-[353px] lg:w-[287px] lg:rounded-t-[2.5rem] lg:border-[6px]">
            <Image
              src={phoneImage.src}
              alt={phoneImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 290px, 225px"
              className="object-cover"
            />

            {(phoneUser || phoneBadge) && (
              <div className="absolute inset-x-2 top-3 z-20 flex items-start justify-between lg:inset-x-3 lg:top-4">
                {phoneUser ? (
                  <div className="flex items-center gap-2 rounded-xl bg-black/30 py-1 pl-1 pr-3 backdrop-blur-sm">
                    <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full border border-white/60 bg-neutral-700 lg:h-7 lg:w-7">
                      <Image
                        src={phoneUser.avatar ?? phoneImage.src}
                        alt={phoneUser.name}
                        fill
                        sizes="28px"
                        className="object-cover"
                      />
                    </span>
                    <span className="flex flex-col items-start text-left">
                      <span className="text-[10px] font-medium leading-none text-white lg:text-xs">
                        {phoneUser.name}
                      </span>
                      <span className="mt-1 h-[2px] w-12 overflow-hidden rounded-full bg-white/40 lg:w-16">
                        <span className="block h-full w-1/2 bg-white" />
                      </span>
                    </span>
                  </div>
                ) : (
                  <span />
                )}

                {phoneBadge && (
                  <span className="flex items-center gap-1 rounded-md bg-[#F04438] px-2 py-0.5 text-[10px] font-semibold text-white lg:text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    {phoneBadge}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Floating cards */}
          {cards.map((card, i) => (
            <Card key={`${card.variant}-${i}`} card={card} />
          ))}
        </div>
      </div>

      {/* Logo strip */}
      {/* {logos.length > 0 && (
        <div className="bg-white py-10">
          <div
            className={`mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-10 gap-y-5 px-6 text-neutral-950 lg:flex-nowrap lg:justify-between ${
              fadeEdges
                ? "lg:[-webkit-mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] lg:[mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
                : ""
            }`}
          >
            {logos.map((logo) => (
              <div
                key={logo.name}
                className={`flex shrink-0 items-center ${logo.className ?? ""}`}
              >
                {logo.node ?? logo.name}
              </div>
            ))}
          </div>
        </div>
      )} */}
    </section>
  );
}