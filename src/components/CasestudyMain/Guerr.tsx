'use client';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";
import Link from 'next/link';

const sections = [
    { id: 'about', label: 'About' },
    { id: 'struggle', label: 'The Challenge' },
    { id: 'strategy', label: 'The Bixeltek Build' },
    { id: 'results', label: 'Results at a Glance' },
    { id: 'conclusion', label: 'The Takeaway' },
    { id: 'cta', label: 'Build Your Success Story.' },
];

type Challenge = {
    problem: string;
    solution: string;
};

type StrategyStep = {
    title: string;
    des: string;
    points: string[];
    suffix: string;
    challenge?: Challenge;
};

const strategySteps: StrategyStep[] = [
    {
        title: "1. Building the Foundation on Medusa",
        des: "We didn't start from a template. We started from Medusa's open-source commerce core and rebuilt it into a platform shaped entirely around Guerr — custom modules, custom admin widgets, a custom storefront, and a data model designed for a fashion brand rather than a generic product catalogue.",
        points: [
            "Custom Medusa modules for wishlist, OTP, size charts, product video, and collection merchandising",
            "A storefront built on Next.js, talking directly to Medusa's framework and custom APIs",
            "An admin experience extended inside the native Medusa Admin app — not a separate, disconnected dashboard",
        ],
        suffix: "This gave the Guerr team one system to manage products, orders, payments, influencers, and analytics — instead of five disconnected tools duct-taped together.",
        challenge: {
            problem: "Medusa's admin panel and data layer are built to be extended, but not always in the direction a fashion ecommerce brand needs. Early on, several of Guerr's requirements — per-product size charts, video media, collection-level banners — simply had no equivalent field anywhere in Medusa's default product or collection schema.",
            solution: "Rather than hacking fields into unrelated tables, we mapped out a proper custom data model extension strategy for each requirement before writing code — deciding module by module what belonged as product metadata, what needed its own linked table, and what needed a dedicated custom module with its own migrations. That upfront modeling work saved us from a rebuild three separate times later in the project.",
        },
    },
    {
        title: "2. Extending Medusa's Product Data Model",
        des: "Guerr's catalogue needed structured information Medusa doesn't ship with out of the box — and every new field we added had to work across three places at once: the database, the Medusa Admin UI, and the storefront.",
        points: [
            "Custom fields for size chart data, product video URLs, fit notes, and fabric details",
            "Custom migrations to extend the product and product-variant tables without breaking core Medusa upgrade paths",
            "Custom admin UI widgets injected into the product edit screen so the team could manage these fields natively, without a separate backend panel",
        ],
        suffix: "The goal was that adding a size chart or a product video should feel like a native part of editing a product — not a bolt-on step in a different tool.",
        challenge: {
            problem: "Adding new fields to Medusa's product model is straightforward on paper, but we hit real friction fast: existing products in the catalogue had no data for the new fields, admin UI extensions needed to respect Medusa's plugin/widget zones exactly or they'd silently fail to render, and a naive migration risked locking product tables during a live import. We also had to make sure new fields didn't break existing storefront queries that assumed the original schema shape.",
            solution: "We wrote backfill scripts to safely default existing products before rolling fields out live, built and tested admin widgets against Medusa's official extension zones instead of overriding core admin routes, and staged every schema migration through a copy of production data first. For storefront queries, we made every new field strictly optional at the API layer so older product records without size-chart or video data would never break a page render.",
        },
    },
    {
        title: "3. Collection Banners & Thumbnails",
        des: "Guerr's collections needed to look like a curated fashion drop, not a generic filtered product grid. We built a custom collection module so every collection could carry its own banner image for the collection landing page and its own thumbnail for homepage and navigation cards.",
        points: [
            "Dedicated banner image field for full-width collection landing pages",
            "Separate thumbnail field optimized for navigation menus, homepage grids, and mobile cards",
            "Admin-side upload and preview so the team can see exactly how a banner will render before publishing",
        ],
        suffix: "This meant every seasonal drop or capsule collection could be merchandised visually, the same way it would be styled on Instagram — without needing a developer to hardcode a landing page each time.",
    },
    {
        title: "4. Per-Product Size Charts",
        des: "A single fixed size chart doesn't work for a brand selling everything from t-shirts to footwear. We built a flexible, per-product size chart system so each product — or product category — could carry its own accurate sizing table.",
        points: [
            "Category-aware size chart structure, since tops, bottoms, and footwear all measure differently",
            "Admin interface to build or edit a size chart per product without touching code",
            "Fallback logic so products without a defined chart still render cleanly on the storefront",
        ],
        suffix: "Fewer sizing complaints, fewer size-related returns, and a product page that actually helps a customer decide — not just guess.",
        challenge: {
            problem: "Size charts aren't one-size-fits-all data — literally. A rigid, single-shape field would have worked for t-shirts but broken for footwear or accessories, and retrofitting flexibility later would have meant re-touching every product. We also had legacy products already live with no chart data at all.",
            solution: "We modeled the size chart as a flexible structured field rather than a fixed set of columns, so different product categories could store different measurement sets without schema changes. On the storefront, any product missing chart data simply hides that section instead of rendering a broken or empty table — so the rollout could happen gradually, category by category, without a single big-bang migration.",
        },
    },
    {
        title: "5. Product Video on the PDP",
        des: "Static images only tell half the story for apparel — fit, drape, and movement matter. We extended Guerr's product media handling so any product could include video alongside its image gallery.",
        points: [
            "Video support added directly into the existing product gallery/media flow, not a separate section",
            "Automatic fallback to standard image gallery when no video is attached",
            "Admin upload flow that treats video as just another media type, not a special case the team has to think about",
        ],
        suffix: "The result is a product page that behaves like Medusa's gallery always supported video — even though it originally didn't.",
        challenge: {
            problem: "Medusa's product media handling was built around images. Introducing video meant deciding how it should behave inside the same gallery component — how it loads, how it doesn't block page speed, and how the storefront gracefully falls back for the majority of products that only have images.",
            solution: "We treated video as a typed media entry within the same product media collection rather than a separate feature bolted alongside it, added lazy loading so a video-heavy product page doesn't tank load times, and built the gallery component to detect media type and render the right player or image automatically — with zero extra work required from the merchandising team.",
        },
    },
    {
        title: "6. A Wishlist That Actually Persists",
        des: "Medusa doesn't ship a wishlist module at all, so we built one from scratch — designed to work the way shoppers actually browse: across sessions, across devices, and before they've even logged in.",
        points: [
            "Custom wishlist module wired into Medusa's customer and product data",
            "Guest wishlist support that merges into the account wishlist the moment a customer logs in",
            "Persistent across sessions, so a saved product is still there a week later",
        ],
        suffix: "No more losing a saved item because a session expired — the wishlist behaves like customers expect it to.",
    },
    {
    title: "7. Razorpay & Shiprocket, Fully Integrated",
    des: "We integrated Razorpay for secure, India-first payments and Shiprocket for streamlined shipping and order fulfillment — connecting the entire journey from checkout to delivery within a single, seamless ecommerce workflow.",
    points: [
        "Razorpay integrated directly into Medusa for UPI, cards, net banking, wallets, and secure online payments",
        "Shiprocket integration for automated shipping, order fulfillment, courier selection, and shipment tracking",
        "Connected payment and fulfillment workflows that keep order, payment, and shipping statuses synchronized",
    ],
    suffix: "From payment confirmation to doorstep delivery, every step works together as one connected experience.",
},
    {
        title: "8. OTP Security at Every Critical Step",
        des: "We built a custom backend OTP layer that goes well beyond a standard signup flow, because Guerr's biggest COD risk wasn't payment — it was fake and unconfirmed orders.",
        points: [
            "OTP verification on every new account registration",
            "OTP verification on Cash on Delivery orders — required before the order is confirmed, not after",
            "Full JWT-based authentication, with secure forgot-password and reset-password flows built around expiring, single-use tokens",
        ],
        suffix: "Fewer fake COD orders, fewer failed deliveries, and a storefront customers could actually trust with their phone number.",
    },
    {
        title: "9. Transactional Emails That Work While You Sleep",
        des: "We built a complete transactional and lifecycle email system on top of Medusa's event and subscriber architecture, so nothing depends on someone manually checking an inbox.",
        points: [
            "Order confirmation emails sent automatically to both the customer and the admin the moment an order is placed",
            "Abandoned cart recovery emails triggered automatically after 2 days of inactivity",
            "Templated, branded emails rather than plain system notifications",
        ],
        suffix: "No manual follow-ups, no revenue quietly sitting in an abandoned cart — the system chases the sale automatically.",
        challenge: {
            problem: "Abandoned cart detection sounds simple until you have to define 'abandoned' correctly — a cart that's still being actively shopped shouldn't get emailed, and the same customer shouldn't get duplicate reminder emails if they update their cart right before the 2-day window closes.",
            solution: "We built the abandoned-cart check as a scheduled job that evaluates cart activity against a rolling 2-day inactivity window rather than a fixed clock, and added a sent-flag per cart so a customer is only ever emailed once per abandonment cycle — with the flag resetting only if the cart is meaningfully updated again afterward.",
        },
    },
    {
        title: "10. A Sales Dashboard Built for Decisions",
        des: "We extended the Medusa Admin app with a custom analytics dashboard so the Guerr team can see product-level sales performance without exporting a single spreadsheet.",
        points: [
            "Product-level sales breakdowns across 7, 30, 60, and 90-day windows",
            "Built as a native widget inside the existing Medusa Admin app, not a separate login or tool",
            "Designed to surface what's trending and what's stalling at a glance",
        ],
        suffix: "The team can now make restocking and marketing decisions from real, current data — in the same place they already manage orders and products.",
        challenge: {
            problem: "Calculating rolling sales windows (7/30/60/90 days) on demand against a growing orders table gets slow fast if you're not careful, and Medusa's admin extension model expects widgets to load quickly without blocking the rest of the panel.",
            solution: "We aggregated order-line data efficiently at the query level with proper indexing on order dates and product references, rather than pulling raw orders into application code and summing them there. The dashboard widget also loads its data asynchronously after the rest of the admin panel renders, so a heavier analytics query never slows down the core admin experience.",
        },
    },
    {
        title: "11. An Affiliate & Influencer Growth Engine",
        des: "We designed and built a full influencer/affiliate program from the ground up, integrated directly into Medusa's discount and promotions engine rather than run as a separate tracking system.",
        points: [
            "Influencers apply and go through a verification step before onboarding",
            "Once verified, each influencer is auto-assigned a unique coupon code tied into Medusa's native discount engine",
            "Every order placed with that code is tracked and attributed automatically, with no manual reconciliation",
            "Influencers get their own private dashboard to track referred orders and performance in real time",
        ],
        suffix: "This turned word-of-mouth and influencer buzz into a measurable, self-serve growth channel — instead of a spreadsheet someone on the team had to update by hand.",
        challenge: {
            problem: "Coupon-based attribution sounds simple until you consider the edge cases: what happens if an order is cancelled or refunded after being attributed to an influencer, what stops an influencer from using their own code on their own purchases, and how do you keep each influencer's dashboard scoped strictly to their own data and no one else's.",
            solution: "We tied attribution to order status rather than order creation, so cancelled or refunded orders automatically drop out of an influencer's tracked performance. We added basic self-referral checks at the coupon-application step, and built the influencer dashboard on scoped, authenticated queries so each influencer's session can only ever see orders tied to their own coupon code.",
        },
    },
];

export default function GuerrCaseStudySection() {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            for (let section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveId(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="flex w-full max-w-7xl mx-auto px-6 py-20 space-x-8">
            {/* Content */}
            <div className="w-full md:w-2/3 space-y-12">
                <div id="about" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed tracking-wide font-bold text-[#670ef7] mb-4">About Guerr</h2>
                    <p className='text-lg font-poppins'>
                        Guerr (<Link href="https://guerrclo.com" target="_blank" rel="noopener noreferrer" className="text-[#670ef7] hover:underline">
                            guerrclo.com
                        </Link>) is a fashion and lifestyle brand that wanted to launch a fully custom ecommerce experience — not a cookie-cutter Shopify theme wearing their logo, but a platform engineered around exactly how the brand sells: seasonal drops, influencer-led discovery, and an Indian customer base with strong expectations around UPI, COD, and trust.
                    </p>
                    <p className='text-lg mt-3 font-poppins'>
                        They needed more than a shopping cart. They needed a system — secure checkout, automated customer communication, real sales visibility for the team, rich merchandising tools for showcasing product the way a fashion brand actually presents it, and a structured way to formalize the influencer partnerships already driving attention to the brand.
                    </p>
                    <p className='text-lg mt-3 font-poppins'>
                        We chose Medusa as the foundation because it&apos;s open-source, headless, and extensible at the code level — which mattered, because almost none of Guerr&apos;s requirements existed as an out-of-the-box feature. Every capability described below was either heavily customized or built entirely from scratch on top of Medusa&apos;s core.
                    </p>
                </div>

                <div id="struggle" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed font-bold text-[#670ef7]">The Challenge</h2>
                    <p className='text-lg font-poppins mb-4 mt-2'>On the business side, off-the-shelf ecommerce platforms couldn&apos;t give Guerr what the brand actually needed:</p>
                    <ul className="list-disc pl-5 space-y-3 text-lg font-poppins">
                        <li>No native way to verify and track influencer/affiliate sales</li>
                        <li>Generic checkout flows with no OTP protection on COD orders, leaving the door open to fake or unconfirmed orders</li>
                        <li>No automated recovery for carts customers had already added products to and abandoned</li>
                        <li>No real product-level sales visibility for the team — every decision required exporting and manually cross-referencing data</li>
                        <li>No way to merchandise collections with proper banners and thumbnails the way a fashion brand needs to for a seasonal drop</li>
                        <li>No per-product size charts, forcing customers to guess sizing and driving avoidable returns</li>
                        <li>No support for product video, even though fit and movement matter enormously for apparel</li>
                        <li>A wishlist and payment experience that felt bolted-on, not built-in</li>
                    </ul>
                    <p className='text-lg font-poppins mb-4 mt-6'>On the engineering side, building this on Medusa introduced real technical friction of its own:</p>
                    <ul className="list-disc pl-5 space-y-3 text-lg font-poppins">
                        <li>Medusa&apos;s core product and collection schema simply has no fields for size charts, product video, or collection banners/thumbnails — every one of these required a genuine data-model extension, not a config toggle</li>
                        <li>Adding new custom fields meant touching three layers at once — database migrations, Medusa Admin UI widgets, and storefront queries — and getting any one of them wrong risked breaking existing products</li>
                        <li>Legacy and in-progress product data had to keep working even as we rolled out new required-feeling fields, which meant every new field had to be backwards-compatible by design</li>
                        <li>Medusa&apos;s admin extension system expects plugins and widgets to be registered in specific zones — deviating from that pattern silently breaks rendering instead of throwing a clear error</li>
                        <li>Rolling sales analytics across 7/30/60/90-day windows directly against a live orders table risked slow, blocking queries inside the admin panel if not built carefully</li>
                    </ul>
                </div>

                <section
                    id="strategy"
                    className="scroll-mt-32 py-8 px-0 md:px-0 bg-white relative"
                >
                    <h2 className="text-4xl font-bold text-left text-[#670ef7] mb-2 font-sofiasanscondensed">
                        The Bixeltek Build
                    </h2>
                    <p className='text-base text-black max-w-xl mb-12'>This wasn&apos;t a plug-and-play storefront — it was a ground-up, custom-engineered ecommerce platform built on <span className='font-semibold'>Medusa</span>, tailored entirely around how Guerr actually does business. Below is what we built, and — because a real case study should show the hard parts too — some of the specific engineering problems we ran into along the way and how we solved them.</p>

                    <div className="relative border-l-4 border-[#670ef7] ml-1 md:ml-4 space-y-16">
                        {strategySteps.map((step, index) => {
                            return (
                                <div
                                    key={index}
                                    className="relative pl-5 md:pl-10"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[12px] top-1 w-5 h-5 bg-[#670ef7] rounded-full border-4 border-white z-10" />

                                    {/* Step Content */}
                                    <h3 className="text-2xl font-sofiasanscondensed font-semibold mb-1">{step.title}</h3>
                                    <p className='mb-3 max-w-2xl'>{step.des}</p>
                                    {step.points.length > 0 && (
                                        <ul className="list-disc md:text-lg pl-5 text-gray-700 space-y-1 max-w-2xl">
                                            {step.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {step.suffix && <p className='mt-3 max-w-2xl'>{step.suffix}</p>}

                                    {step.challenge && (
                                        <div className="mt-5 max-w-2xl border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                                <p className="text-sm font-semibold uppercase tracking-wide text-[#670ef7]">The Problem</p>
                                                <p className="text-gray-700 mt-1">{step.challenge.problem}</p>
                                            </div>
                                            <div className="px-4 py-3">
                                                <p className="text-sm font-semibold uppercase tracking-wide text-[#670ef7]">How We Solved It</p>
                                                <p className="text-gray-700 mt-1">{step.challenge.solution}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>

                <div id="results" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed font-bold text-[#670ef7] mb-4">What We Delivered</h2>
                    <table className="w-full text-sm md:text-base border border-gray-200">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="text-left p-3">Capability</th>
                                <th className="text-left p-3">Outcome</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr>
                                <td className="p-3">Payments</td>
                                <td className="p-3">
                                    <MdKeyboardArrowUp className="text-green-600 inline-block text-xl" /> Full Razorpay integration for card, UPI, net banking &amp; wallets, alongside COD
                                </td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-3">Order Security</td>
                                <td className="p-3">
                                    <MdKeyboardArrowUp className="text-green-600 inline-block text-xl" /> OTP verification on registration &amp; on every COD order before confirmation
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3">Cart Recovery</td>
                                <td className="p-3">
                                    <MdKeyboardArrowUp className="text-green-600 inline-block text-xl" /> Automated, duplicate-safe abandoned-cart emails after 2 days
                                </td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-3">Merchandising</td>
                                <td className="p-3">
                                    <MdKeyboardArrowUp className="text-green-600 inline-block text-xl" /> Custom collection banners &amp; thumbnails, per-product size charts, and product video on the PDP
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3">Admin Visibility</td>
                                <td className="p-3">
                                    <MdKeyboardArrowUp className="text-green-600 inline-block text-xl" /> Custom sales dashboard across 7/30/60/90-day views, built natively into Medusa Admin
                                </td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-3">Growth Channel</td>
                                <td className="p-3">
                                    <MdKeyboardArrowUp className="text-green-600 inline-block text-xl" /> Full influencer/affiliate program with coupon tracking and self-serve dashboards
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3">Customer Experience</td>
                                <td className="p-3">
                                    <MdKeyboardArrowUp className="text-green-600 inline-block text-xl" /> Custom wishlist + secure JWT-based login &amp; password recovery
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="conclusion" className="scroll-mt-32 pb-10">
                    <h2 className="text-3xl font-bold font-sofiasanscondensed text-[#670ef7] mb-4">The Takeaway</h2>
                    <p className='text-lg font-poppins'>
                        You don&apos;t need “another online store.” You need <span className='font-semibold'>a commerce platform engineered around how your business actually sells.</span> That&apos;s what Bixeltek built for Guerr.
                    </p>
                    <p className='text-lg font-poppins mt-3'>
                        From secure OTP-gated checkout to per-product size charts, product video, collection merchandising, and an influencer program tracked down to the last order, Guerr now runs on infrastructure most brands would need five separate tools to replicate — all on a single, custom-extended Medusa backend built specifically for them.
                    </p>
                    <p className='text-lg font-poppins mt-3'>
                        The technical work wasn&apos;t trivial — extending Medusa&apos;s data model safely, keeping legacy products working through every schema change, and building admin tooling the team could actually use without a developer in the room took real engineering discipline. That&apos;s the difference between a store that looks custom and one that actually is.
                    </p>
                </div>

                <div id="cta" className="scroll-mt-20 pb-20">
                    <h2 className="text-3xl font-bold font-sofiasanscondensed text-[#670ef7] mb-4">Want a Storefront Built Around Your Business? Let&apos;s Build Your Success Story.</h2>
                    <p className='text-lg font-poppins'>
                        At Bixeltek, we don&apos;t just theme an ecommerce template — we engineer custom Medusa-powered platforms with the payments, security, merchandising, automation, and growth tools your brand actually needs. See more of our work in <Link href={'/ecommerce-websites'} className='underline underline-offset-2'>ecommerce website development.</Link>
                    </p>
                    <p className='text-lg font-poppins mt-3'>
                        Whether you&apos;re launching your first store or rebuilding one that&apos;s holding you back, our mission is simple: <span className='font-semibold'>build a platform that turns traffic into trackable, repeatable revenue.</span>
                    </p>
                </div>
            </div>

            <aside className="w-1/3 sticky top-32 hidden md:flex justify-center items-center h-max">
                <nav className="space-y-3 border-r-4 flex flex-col items-end border-[#ccc] pr-4">
                    {sections.map(sec => (
                        <a
                            key={sec.id}
                            href={`#${sec.id}`}
                            className={`block text-sm font-medium transition-colors ${activeId === sec.id ? 'text-[#670ef7] font-semibold' : 'text-gray-600 hover:text-black'
                                }`}
                        >
                            {sec.label}
                        </a>
                    ))}
                </nav>
            </aside>
        </section>
    );
}