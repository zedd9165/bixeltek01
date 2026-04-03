"use client";

import react from '@/assets/reactlogo.png'
import wordpress from '@/assets/WordPress-Logo-2008-present.jpg'
import elementor from '@/assets/elementor.png'
import nextjsicon from '@/assets/nextjsicon.jpg'
import tailwindcsslogo from '@/assets/tailwindcss_logo_icon_170649.webp'
import jslogo from '@/assets/Node.js_logo.svg.png'
import html from '@/assets/html5-emblem-orange-shield-and-white-text-vector.jpg'
import mongo from '@/assets/Mongodb.png'
import mongoose from '@/assets/mongoose2.png'
import redis from '@/assets/redis-icon.webp'
import frappe from '@/assets/technologies/frappe.png'
import vue from '@/assets/technologies/vuejs_logo_icon_169247.webp'
import python from '@/assets/technologies/python-logo-png_seeklogo-207405.png'
import nuxt from '@/assets/technologies/nuxt-logo.png'
import razorpay from '@/assets/technologies/logo_razorpay.webp'
import zapier from '@/assets/zapier-icon-svgrepo-com.png'
import docker from "@/assets/queesdocker1-768x432-1.webp";
import drupel from "@/assets/Wordmark2_blue_RGB.png";
import hostinger from '@/assets/Hostinger-logo.png'
import shopify from '@/assets/technologies/Shopify_logo_2018.svg.png'
import stripe from "@/assets/Stripe_Logo,_revised_2016.svg.png";
import linux from '@/assets/technologies/linux.png'
import googleadslogo from "@/assets/googleads-logo.png";
import shopifylogo from "@/assets/shopifylogo.png";
import slack from "@/assets/Slack_icon_2019.svg.png";
import woo from "@/assets/woocommerce.png";
import magento from "@/assets/magento-2-logo-svgrepo-com.png";
import reactnative from '@/assets/react-native.png'
import semrush from '@/assets/semrush.png'

interface TechIcon {
  src: string | { src: string };
  alt: string;
  scale?: number;
}

interface TechStackSliderProps {
  icons?: TechIcon[];
  heading?: string;
  description?: string;
}

const defaultIcons: TechIcon[] = [
  {
    src:   googleadslogo,
    alt:   "Google Ads — PPC & paid search campaign management at Bixeltek",
    scale: 1.1,
  },
  {
    src:   shopifylogo,
    alt:   "Shopify — e-commerce store development & theme customisation at Bixeltek",
    scale: 1.3,
  },
  {
    src:   react,
    alt:   "React — component-driven frontend development at Bixeltek",
    scale: 1.5,
  },
  {
    src:   slack,
    alt:   "Slack — team communication & project collaboration at Bixeltek",
    scale: 1.0,
  },
  {
    src:   woo,
    alt:   "WooCommerce — WordPress-based online store solutions at Bixeltek",
    scale: 1.3,
  },
  {
    src:   magento,
    alt:   "Magento — enterprise e-commerce platform development at Bixeltek",
    scale: 1.3,
  },
  {
    src:   jslogo,
    alt:   "Node.js — scalable server-side JavaScript backend development at Bixeltek",
    scale: 1.1,
  },
  {
    src:   mongo,
    alt:   "MongoDB — NoSQL database architecture & integration at Bixeltek",
    scale: 1.3,
  },
  {
    src:   wordpress,
    alt:   "WordPress — CMS website design, development & SEO at Bixeltek",
    scale: 1.5,
  },
  {
    src:   elementor,
    alt:   "Elementor — drag-and-drop WordPress page builder at Bixeltek",
    scale: 1,
  },
  {
    src:   redis,
    alt:   "Redis — in-memory caching & real-time data solutions at Bixeltek",
    scale: 1.8,
  },
  {
    src:   tailwindcsslogo,
    alt:   "Tailwind CSS — utility-first responsive UI styling at Bixeltek",
    scale: 1.8,
  },
  {
    src:   reactnative,
    alt:   "React Native — cross-platform iOS & Android mobile app development at Bixeltek",
    scale: 1.3,
  },
  {
    src:   html,
    alt:   "HTML5 — semantic web markup & standards-compliant coding at Bixeltek",
    scale: 1.3,
  },
  {
    src:   nextjsicon,
    alt:   "Next.js — SSR & static site generation for high-performance web apps at Bixeltek",
    scale: 1.3,
  },
  {
    src:   mongoose,
    alt:   "Mongoose — MongoDB object modelling for Node.js projects at Bixeltek",
    scale: 1.8,
  },
  {
    src:   frappe,
    alt:   "Frappe — ERPNext & custom business application development at Bixeltek",
    scale: 1.3,
  },
  {
    src:   python,
    alt:   "Python — automation, AI integrations & backend scripting at Bixeltek",
    scale: 2.5,
  },
  {
    src:   semrush,
    alt:   "Semrush — SEO analysis & keyword research at Bixeltek",
    scale: 1.5,
  },
  {
    src:   vue,
    alt:   "Vue.js — progressive JavaScript framework for interactive UIs at Bixeltek",
    scale: 1.4,
  },
  {
    src:   nuxt,
    alt:   "Nuxt.js — Vue-based SSR framework for production web apps at Bixeltek",
    scale: 1.4,
  },
  {
    src:   razorpay,
    alt:   "Razorpay — payment gateway integration for Indian businesses at Bixeltek",
    scale: 1.3,
  },
  {
    src:   zapier,
    alt:   "Zapier — no-code workflow automation & app integrations at Bixeltek",
    scale: 1,
  },
  {
    src:   docker,
    alt:   "Docker — containerised deployment & DevOps pipelines at Bixeltek",
    scale: 1.5,
  },
  {
    src:   drupel,
    alt:   "Drupal — enterprise-grade CMS development & maintenance at Bixeltek",
    scale: 1.3,
  },
  {
    src:   hostinger,
    alt:   "Hostinger — web hosting setup, management & server migration at Bixeltek",
    scale: 1.3,
  },
  {
    src:   shopify,
    alt:   "Shopify — conversion-focused online store builds at Bixeltek",
    scale: 1.3,
  },
  {
    src:   stripe,
    alt:   "Stripe — global payment gateway integration & subscription billing at Bixeltek",
    scale: 1,
  },
  {
    src:   linux,
    alt:   "Linux — VPS server setup, management & deployment at Bixeltek",
    scale: 1,
  },
];

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const ROWS = 3;
// Staggered durations so rows don't feel in sync
const DURATIONS = [42, 52, 48];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function TechStackSlider({
  icons,
  heading     = "Technologies We Work With",
  description = "We leverage cutting-edge tools and frameworks to craft scalable, high-performing digital solutions.",
}: TechStackSliderProps) {
  const finalIcons = icons && icons.length > 0 ? icons : defaultIcons;

  // Evenly split icons across ROWS
  const chunkSize = Math.ceil(finalIcons.length / ROWS);
  const rows = Array.from({ length: ROWS }, (_, i) =>
    finalIcons.slice(i * chunkSize, (i + 1) * chunkSize)
  );

  return (
    <div className="w-full pt-16 md:pt-32 pb-24 md:pb-32 overflow-hidden">
      <div className="mx-auto px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="mb-12 lg:mb-16 space-y-4 text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-white">
            {heading}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* ── Rows ── */}
        <div className="space-y-5">
          {rows.map((rowIcons, rowIndex) => {
            // Row 0 → scroll left, Row 1 → scroll right, Row 2 → scroll left
            const isReversed = rowIndex % 2 === 1;

            return (
              // dir="ltr" isolates the bidi context so animations always work
              // correctly even if a parent has dir="rtl"
              <div key={rowIndex} className="scroll-container" dir="ltr">
                <div
                  className={`scroll-content${isReversed ? " reverse" : ""}`}
                  style={{ animationDuration: `${DURATIONS[rowIndex] ?? 50}s` }}
                >
                  {/* Triple-clone → seamless loop via translate3d(-33.333%) */}
                  {[...rowIcons, ...rowIcons, ...rowIcons].map((icon, idx) => {
                    const src =
                      typeof icon.src === "object"
                        ? (icon.src as { src: string }).src
                        : icon.src;

                    return (
                      <div key={idx} className="tech-card">
                        <div className="tech-inner">
                          <img
                            src={src}
                            alt={icon.alt}
                            style={{
                              objectFit:  "contain",
                              maxWidth:   "75%",
                              maxHeight:  "75%",
                              // scale drives sizing — replaces className height
                              transform:  `scale(${icon.scale ?? 1})`,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Scoped styles ── */}
      <style jsx>{`

        /* ── Container ── */
        .scroll-container {
          overflow: hidden;
          width: 100%;
          position: relative;
          padding: 8px 0;
        }

        /* Fade masks — colour matches the dark page background (#060612) */
        .scroll-container::before,
        .scroll-container::after {
          content: '';
          position: absolute;
          top: 0;
          width: 120px;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }
        .scroll-container::before {
          left: 0;
          background: linear-gradient(to right, #060612, transparent);
        }
        .scroll-container::after {
          right: 0;
          background: linear-gradient(to left, #060612, transparent);
        }

        /* ── Scroll track ── */
        .scroll-content {
          display: flex;
          width: max-content;
          animation: scroll-ltr linear infinite;
        }
        .scroll-content.reverse {
          animation-name: scroll-rtl;
        }

        /* ── Card ── */
        .tech-card {
          flex: 0 0 auto;
          width: 200px;
          height: 110px;
          margin-right: 1.25rem;
          background: white;
          border-radius: 14px;
          border: 1px solid rgba(13, 30, 67, 0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .tech-card:hover {
          transform: scale(1.04) translateY(-2px);
          box-shadow: 0 12px 32px rgba(0, 93, 255, 0.18);
          border-color: rgba(0, 93, 255, 0.35);
        }

        /* ── Inner wrapper ── */
        .tech-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          /* overflow hidden so scaled-up images don't spill outside the card */
          overflow: hidden;
        }

        /* ── Keyframes ── */
        @keyframes scroll-ltr {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-33.333%, 0, 0); }
        }
        @keyframes scroll-rtl {
          from { transform: translate3d(-33.333%, 0, 0); }
          to   { transform: translate3d(0, 0, 0); }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .tech-card {
            width: 130px;
            height: 90px;
          }
          .tech-inner {
            padding: 0.875rem;
          }
          .scroll-container::before,
          .scroll-container::after {
            width: 60px;
          }
        }
      `}</style>
    </div>
  );
}