"use client";

import {
  Users,
  GraduationCap,
  ShoppingCart,
  Scissors,
  School,
  Briefcase,
  BarChart3,
  HeartPulse,
  UtensilsCrossed,
  Truck,
  Hotel,
  Home,
  Landmark,
  Dumbbell,
  Baby,
  Leaf,
  Plug,
  Workflow,
  BrainCircuit,
  Facebook,
  Globe,
  Webhook,
  Layers,
  PlusCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Code2,
} from "lucide-react";

const T = {
  accent:        "#3b82f6",
  accentDark:    "#1d4ed8",
  accentLight:   "#60a5fa",
  glowRgb:       "59,130,246",
  gradFrom:      "#1d4ed8",
  gradTo:        "#3b82f6",
  iconBg:        "rgba(59,130,246,0.12)",
  iconBorder:    "rgba(59,130,246,0.22)",
  cardBg:        "linear-gradient(135deg, rgba(59,130,246,0.07) 0%, rgba(29,78,216,0.03) 100%)",
  cardBorder:    "rgba(59,130,246,0.15)",
  shimmer:       "rgba(59,130,246,0.55)",
  badgeBg:       "rgba(59,130,246,0.1)",
  badgeBorder:   "rgba(59,130,246,0.22)",
  badgeText:     "#93c5fd",
  divider:       "rgba(59,130,246,0.18)",
  glow:          "rgba(59,130,246,0.18)",
  glowStrong:    "rgba(29,78,216,0.35)",
};

const systemCategories = [
  {
    tag:         "Enterprise",
    cardBg:      "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(29,78,216,0.05) 100%)",
    cardBorder:  "rgba(59,130,246,0.2)",
    iconBg:      "rgba(59,130,246,0.12)",
    iconBorder:  "rgba(59,130,246,0.22)",
    iconColor:   "#60a5fa",
    tagBg:       "rgba(59,130,246,0.1)",
    tagBorder:   "rgba(59,130,246,0.25)",
    tagText:     "#93c5fd",
    shimmer:     "rgba(59,130,246,0.6)",
    systems: [
      { icon: Users,     name: "HRMS",                  desc: "Employee onboarding, payroll, attendance, leaves & performance tracking" },
      { icon: Briefcase, name: "Employment Management", desc: "Staff portals, shift scheduling, task assignment & manager dashboards" },
      { icon: BarChart3, name: "CRM",                    desc: "Lead pipelines, contact management, deal tracking & sales analytics" },
    ],
  },
  {
    tag:         "Education",
    cardBg:      "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(67,56,202,0.05) 100%)",
    cardBorder:  "rgba(99,102,241,0.2)",
    iconBg:      "rgba(99,102,241,0.12)",
    iconBorder:  "rgba(99,102,241,0.22)",
    iconColor:   "#a5b4fc",
    tagBg:       "rgba(99,102,241,0.1)",
    tagBorder:   "rgba(99,102,241,0.25)",
    tagText:     "#c7d2fe",
    shimmer:     "rgba(99,102,241,0.6)",
    systems: [
      { icon: GraduationCap, name: "LMS",               desc: "Course creation, video lessons, quizzes, certificates & student progress" },
      { icon: School,        name: "School Management", desc: "Teacher schedules, marks entry, parent portal, attendance & fee management" },
      { icon: Baby,          name: "Daycare / Preschool", desc: "Child profiles, daily activity logs, parent notifications & billing" },
      { icon: Landmark,      name: "University Portal", desc: "Admissions, timetables, exam results, hostel & library management" },
    ],
  },
  {
    tag:         "Commerce",
    cardBg:      "linear-gradient(135deg, rgba(20,184,166,0.1) 0%, rgba(15,118,110,0.05) 100%)",
    cardBorder:  "rgba(20,184,166,0.2)",
    iconBg:      "rgba(20,184,166,0.12)",
    iconBorder:  "rgba(20,184,166,0.22)",
    iconColor:   "#5eead4",
    tagBg:       "rgba(20,184,166,0.1)",
    tagBorder:   "rgba(20,184,166,0.25)",
    tagText:     "#99f6e4",
    shimmer:     "rgba(20,184,166,0.6)",
    systems: [
      { icon: ShoppingCart, name: "E-Commerce Platform", desc: "Product catalog, cart, checkout, payment gateway & order management" },
      { icon: Truck,        name: "Delivery & Logistics", desc: "Driver tracking, route optimization, proof of delivery & fleet management" },
      { icon: Hotel,        name: "Hospitality / Booking", desc: "Room reservations, POS, housekeeping tasks & guest experience apps" },
      { icon: Home,         name: "Real Estate Platform", desc: "Property listings, virtual tours, lead capture & agent management" },
    ],
  },
  {
    tag:         "Lifestyle",
    cardBg:      "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(8,145,178,0.05) 100%)",
    cardBorder:  "rgba(6,182,212,0.2)",
    iconBg:      "rgba(6,182,212,0.12)",
    iconBorder:  "rgba(6,182,212,0.22)",
    iconColor:   "#67e8f9",
    tagBg:       "rgba(6,182,212,0.1)",
    tagBorder:   "rgba(6,182,212,0.25)",
    tagText:     "#a5f3fc",
    shimmer:     "rgba(6,182,212,0.6)",
    systems: [
      { icon: Scissors,        name: "Pet Grooming & Spa",  desc: "Appointment booking, pet profiles, groomer schedules & payment processing" },
      { icon: HeartPulse,      name: "Healthcare / Clinic", desc: "Doctor bookings, patient records, prescriptions & teleconsultation" },
      { icon: Dumbbell,        name: "Fitness & Gym",       desc: "Membership plans, class bookings, trainer assignment & progress tracking" },
      { icon: UtensilsCrossed, name: "Restaurant / Food",   desc: "Menu management, table reservations, online ordering & kitchen display" },
    ],
  },
  {
    tag:         "Specialized",
    cardBg:      "linear-gradient(135deg, rgba(234,88,12,0.08) 0%, rgba(37,99,235,0.04) 100%)",
    cardBorder:  "rgba(234,88,12,0.16)",
    iconBg:      "rgba(234,88,12,0.1)",
    iconBorder:  "rgba(234,88,12,0.18)",
    iconColor:   "#fed7aa",
    tagBg:       "rgba(234,88,12,0.08)",
    tagBorder:   "rgba(234,88,12,0.2)",
    tagText:     "#fed7aa",
    shimmer:     "rgba(234,88,12,0.5)",
    systems: [
      { icon: Leaf,      name: "Agriculture / Farming", desc: "Crop monitoring, weather alerts, market prices & supply chain tracking" },
      { icon: Truck,     name: "Field Service",         desc: "Job dispatch, technician tracking, digital job sheets & invoicing" },
      { icon: Users,     name: "Non-Profit / NGO",      desc: "Donor management, volunteer coordination, event planning & reporting" },
      { icon: Briefcase, name: "Legal & Compliance",    desc: "Case management, document storage, deadline alerts & client portals" },
    ],
  },
];

const apiIntegrations = [
  { icon: Workflow,     name: "n8n Automation",         desc: "Connect your app to 400+ tools. Automate workflows — lead capture to CRM, form submissions to Slack, and more.",            iconColor: "#a5b4fc", iconBg: "rgba(99,102,241,0.12)",  iconBorder: "rgba(99,102,241,0.22)",  hoverGlow: "rgba(99,102,241,0.12)",  shimmer: "rgba(99,102,241,0.5)"  },
  { icon: BarChart3,    name: "CRM Integration",        desc: "Plug into HubSpot, Salesforce, Zoho or custom CRMs. Real-time sync of leads, contacts & deals.",                           iconColor: "#60a5fa", iconBg: "rgba(59,130,246,0.12)",   iconBorder: "rgba(59,130,246,0.22)",  hoverGlow: "rgba(59,130,246,0.12)",  shimmer: "rgba(59,130,246,0.5)"  },
  { icon: Facebook,     name: "Meta / Facebook API",    desc: "Connect to Facebook Ads, Pixel, Messenger, Instagram & WhatsApp Business API for marketing and messaging.",                iconColor: "#818cf8", iconBg: "rgba(79,70,229,0.12)",    iconBorder: "rgba(79,70,229,0.22)",   hoverGlow: "rgba(79,70,229,0.12)",   shimmer: "rgba(79,70,229,0.5)"   },
  { icon: BrainCircuit, name: "Gemini / OpenAI AI",     desc: "Embed AI directly into your app — smart search, chat assistants, content generation, image analysis & predictions.",      iconColor: "#5eead4", iconBg: "rgba(20,184,166,0.12)",   iconBorder: "rgba(20,184,166,0.22)",  hoverGlow: "rgba(20,184,166,0.12)",  shimmer: "rgba(20,184,166,0.5)"  },
  { icon: Globe,        name: "Payment Gateways",       desc: "Razorpay, Stripe, PayPal, PayU — seamless checkout, subscription billing, refunds & webhook event handling.",              iconColor: "#67e8f9", iconBg: "rgba(6,182,212,0.12)",    iconBorder: "rgba(6,182,212,0.22)",   hoverGlow: "rgba(6,182,212,0.12)",   shimmer: "rgba(6,182,212,0.5)"   },
  { icon: Webhook,      name: "Webhook & REST APIs",    desc: "Build or extend any API layer — microservices, third-party webhooks, real-time events & custom data pipelines.",           iconColor: "#93c5fd", iconBg: "rgba(59,130,246,0.12)",   iconBorder: "rgba(59,130,246,0.22)",  hoverGlow: "rgba(59,130,246,0.12)",  shimmer: "rgba(59,130,246,0.5)"  },
  { icon: Plug,         name: "IoT & Hardware",         desc: "Connect your app to physical devices — barcode scanners, smart locks, POS terminals, GPS trackers & sensors.",            iconColor: "#a5f3fc", iconBg: "rgba(6,182,212,0.12)",    iconBorder: "rgba(6,182,212,0.22)",   hoverGlow: "rgba(6,182,212,0.12)",   shimmer: "rgba(6,182,212,0.5)"   },
  { icon: Layers,       name: "Custom API Development", desc: "We build entirely new API layers from scratch — RESTful, GraphQL or gRPC — tailored to your exact business logic.",       iconColor: "#bfdbfe", iconBg: "rgba(37,99,235,0.12)",    iconBorder: "rgba(37,99,235,0.22)",   hoverGlow: "rgba(37,99,235,0.12)",   shimmer: "rgba(37,99,235,0.5)"   },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function GlassCard({ children, className = "" }:any) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        border: `1px solid ${T.cardBorder}`,
        backdropFilter: "blur(16px)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, ${T.shimmer}, transparent)` }}
      />
      {children}
    </div>
  );
}

function SectionHeading({ line1, line2 }:any) {
  return (
    <h2
      className="font-black text-white leading-tight tracking-tight mb-5"
      style={{ fontSize: "clamp(1.8rem, 5vw, 3.6rem)" }}
    >
      {line1}
      <br />
      <span className="text-blue-500">{line2}</span>
    </h2>
  );
}

function CTAButton({ href, children }:any) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 font-bold text-white px-5 py-3 rounded-xl text-sm transition-all hover:scale-105 hover:brightness-110 whitespace-nowrap"
      style={{
        background: `linear-gradient(135deg, ${T.accentDark}, ${T.accent})`,
        boxShadow: `0 8px 28px ${T.glowStrong}`,
      }}
    >
      {children}
    </a>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function CustomSolutionsSection() {
  return (
    <div style={{ background: "#060612" }}>

      {/* ══════════════════════════════════════════════
          SECTION 1 — Custom Software Systems
      ══════════════════════════════════════════════ */}
      <section className="relative px-4 sm:px-6 md:px-[5%] py-16 md:py-28 overflow-hidden">

        {/* Ambient top glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(${T.glowRgb},0.18) 0%, transparent 70%)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10 md:mb-20">
            <SectionHeading
              line1="Custom Software Systems"
              line2="Built for Your Business."
            />
            <p className="text-white/45 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-2">
              From HR portals to pet grooming apps — if your business needs a custom system,
              we architect, design, and ship it. Web, mobile, or both.{" "}
              <span style={{ color: T.accentLight }} className="font-semibold">
                We build anything.
              </span>
            </p>
          </div>

          {/* Category rows */}
          <div className="space-y-6 md:space-y-8">
            {systemCategories.map((cat) => (
              <div key={cat.tag}>

                {/* Row label */}
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-[2px] md:tracking-[3px] px-3 py-1 rounded-full border whitespace-nowrap flex-shrink-0"
                    style={{ background: cat.tagBg, border: `1px solid ${cat.tagBorder}`, color: cat.tagText }}
                  >
                    {cat.tag}
                  </span>
                  <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
                </div>

                {/* Cards grid — 1 col mobile, 2 col tablet, 4 col desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {cat.systems.map((sys) => {
                    const Icon = sys.icon;
                    return (
                      <div
                        key={sys.name}
                        className="group relative rounded-2xl p-4 md:p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-default"
                        style={{
                          background: cat.cardBg,
                          border: `1px solid ${cat.cardBorder}`,
                          backdropFilter: "blur(12px)",
                          minHeight: "auto",
                        }}
                      >
                        {/* Hover shimmer line */}
                        <div
                          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{ background: `linear-gradient(90deg, transparent, ${cat.shimmer}, transparent)` }}
                        />
                        {/* Hover inner glow */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                          style={{ background: `radial-gradient(circle at 25% 15%, ${cat.iconBg} 0%, transparent 65%)` }}
                        />

                        {/* Mobile: horizontal layout. Desktop: vertical */}
                        <div className="relative z-10 flex md:block items-start gap-4">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 md:mb-4"
                            style={{ background: cat.iconBg, border: `1px solid ${cat.iconBorder}` }}
                          >
                            <Icon className="w-5 h-5" style={{ color: cat.iconColor }} />
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-base md:text-lg mb-1 leading-snug">{sys.name}</h3>
                            <p className="text-white/40 text-xs md:text-sm leading-relaxed">{sys.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* "Don't see yours?" banner */}
          <div className="mt-8 md:mt-12">
            <GlassCard className="p-5 md:p-7">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                <div className="flex items-start md:items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: T.iconBg, border: `1px solid ${T.iconBorder}` }}
                  >
                    <PlusCircle className="w-6 h-6" style={{ color: T.accentLight }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base md:text-lg mb-1">Don't See Your System Here?</h3>
                    <p className="text-white/40 text-xs md:text-sm">
                      If your business needs it, we build it. Share your idea and we'll architect the perfect solution.
                    </p>
                  </div>
                </div>
                <CTAButton href="/contact-us">
                  Tell Us Your Idea <ArrowRight className="w-4 h-4" />
                </CTAButton>
              </div>
            </GlassCard>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div
        className="mx-4 md:mx-[5%] h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${T.divider}, transparent)` }}
      />

      {/* ══════════════════════════════════════════════
          SECTION 2 — Supercharge Your Existing App
      ══════════════════════════════════════════════ */}
      <section className="relative px-4 sm:px-6 md:px-[5%] py-16 md:py-28 overflow-hidden">

        {/* Ambient right glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 65% 60% at 90% 50%, rgba(${T.glowRgb},0.12) 0%, transparent 70%)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Two-col header — stacked on mobile, side-by-side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 md:mb-16">

            {/* Left copy */}
            <div>
              <SectionHeading
                line1="Supercharge Your"
                line2="Existing App."
              />
              <p className="text-white/45 text-sm md:text-base leading-relaxed mb-6 md:mb-7">
                Already have an app but need to connect it to the tools your business
                runs on? We integrate, extend, and automate — turning your standalone
                app into a fully connected business engine.
              </p>

              <ul className="space-y-3 mb-7 md:mb-9">
                {[
                  "Connect to n8n, Zapier or Make for workflow automation",
                  "Plug into any CRM — HubSpot, Zoho, Salesforce",
                  "Embed Gemini, ChatGPT or custom AI models",
                  "Add new features to your existing app without rebuilding",
                  "Build & publish custom REST or GraphQL APIs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: T.iconBg, border: `1px solid ${T.iconBorder}` }}
                    >
                      <Zap className="w-2.5 h-2.5" style={{ color: T.accentLight }} />
                    </div>
                    <span className="text-white/55 text-xs md:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <CTAButton href="/contact-us">
                Discuss Your Integration <ArrowRight className="w-4 h-4" />
              </CTAButton>
            </div>

            {/* Right — connection diagram */}
            <div className="flex flex-col gap-3">

              {/* "Your App" hub card */}
              <div
                className="relative rounded-2xl p-5 md:p-6 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(${T.glowRgb},0.1) 0%, rgba(29,78,216,0.05) 100%)`,
                  border: `1px solid ${T.cardBorder}`,
                  backdropFilter: "blur(16px)",
                  boxShadow: `0 0 60px rgba(${T.glowRgb},0.12)`,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                  style={{ background: `linear-gradient(90deg, transparent, ${T.shimmer}, transparent)` }}
                />

                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-11 h-11 md:w-12 md:h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: T.iconBg, border: `1px solid ${T.iconBorder}` }}
                  >
                    <Layers className="w-5 h-5 md:w-6 md:h-6" style={{ color: T.accentLight }} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-base md:text-lg">Your App</p>
                    <p className="text-white/35 text-xs md:text-sm">iOS · Android · Web</p>
                  </div>
                </div>

                {/* Integration pills — 3 cols always, smaller on mobile */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "n8n",        bg: "rgba(99,102,241,0.15)",  border: "rgba(99,102,241,0.3)",  text: "#c7d2fe" },
                    { label: "Gemini AI",  bg: "rgba(20,184,166,0.15)",  border: "rgba(20,184,166,0.3)",  text: "#99f6e4" },
                    { label: "HubSpot",    bg: "rgba(234,88,12,0.15)",   border: "rgba(234,88,12,0.3)",   text: "#fed7aa" },
                    { label: "WhatsApp",   bg: "rgba(34,197,94,0.15)",   border: "rgba(34,197,94,0.3)",   text: "#bbf7d0" },
                    { label: "Razorpay",   bg: "rgba(59,130,246,0.15)",  border: "rgba(59,130,246,0.3)",  text: "#bfdbfe" },
                    { label: "Facebook",   bg: "rgba(99,102,241,0.15)",  border: "rgba(99,102,241,0.3)",  text: "#e0e7ff" },
                    { label: "Firebase",   bg: "rgba(251,191,36,0.15)",  border: "rgba(251,191,36,0.3)",  text: "#fef08a" },
                    { label: "Stripe",     bg: "rgba(99,102,241,0.15)",  border: "rgba(99,102,241,0.3)",  text: "#e0e7ff" },
                    { label: "+ More",     bg: `rgba(${T.glowRgb},0.15)`, border: `rgba(${T.glowRgb},0.3)`, text: "#bfdbfe" },
                  ].map((pill) => (
                    <div
                      key={pill.label}
                      className="text-center py-2 px-1 rounded-xl text-xs md:text-sm font-bold border truncate"
                      style={{ background: pill.bg, border: `1px solid ${pill.border}`, color: pill.text }}
                    >
                      {pill.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector line */}
              <div className="flex items-center gap-3 px-2 md:px-4">
                <div className="flex-1 h-px" style={{ background: T.divider }} />
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: T.iconBg, border: `1px solid ${T.iconBorder}` }}
                >
                  <Code2 className="w-4 h-4" style={{ color: T.accentLight }} />
                </div>
                <div className="flex-1 h-px" style={{ background: T.divider }} />
              </div>

              {/* Outcome cards — 2 cols always */}
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {[
                  { icon: Workflow,     label: "Automated Workflows",  sub: "Zero manual work" },
                  { icon: BrainCircuit, label: "AI-Powered Features",  sub: "Smart & predictive" },
                  { icon: BarChart3,    label: "Unified Data",         sub: "Single source of truth" },
                  { icon: Zap,          label: "New Capabilities",     sub: "Ship features fast" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 md:gap-3 rounded-xl p-2.5 md:p-3"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div
                        className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: T.iconBg }}
                      >
                        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" style={{ color: T.accentLight }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-white/80 text-xs md:text-sm font-bold leading-tight truncate">{item.label}</p>
                        <p className="text-white/30 text-[10px] md:text-xs">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* API cards grid — 1 col mobile, 2 tablet, 4 desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {apiIntegrations.map((api) => {
              const Icon = api.icon;
              return (
                <div
                  key={api.name}
                  className="group relative rounded-2xl p-4 md:p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-default"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Hover radial glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(circle at 25% 15%, ${api.hoverGlow} 0%, transparent 65%)` }}
                  />
                  {/* Hover shimmer line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `linear-gradient(90deg, transparent, ${api.shimmer}, transparent)` }}
                  />

                  {/* Mobile: horizontal. Desktop: vertical */}
                  <div className="relative z-10 flex md:block items-start gap-4">
                    <div
                      className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center flex-shrink-0 md:mb-4"
                      style={{ background: api.iconBg, border: `1px solid ${api.iconBorder}` }}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: api.iconColor }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base md:text-lg mb-1 md:mb-2">{api.name}</h3>
                      <p className="text-white/38 text-xs md:text-sm leading-relaxed">{api.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA strip */}
          <div
            className="mt-8 md:mt-10 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, rgba(${T.glowRgb},0.08) 0%, rgba(29,78,216,0.04) 100%)`,
              border: `1px solid ${T.cardBorder}`,
              backdropFilter: "blur(16px)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{ background: `linear-gradient(90deg, transparent, ${T.shimmer}, transparent)` }}
            />
            <div className="flex items-start gap-3 md:gap-4">
              <div
                className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: T.iconBg, border: `1px solid ${T.iconBorder}` }}
              >
                <Plug className="w-4 h-4 md:w-5 md:h-5" style={{ color: T.accentLight }} />
              </div>
              <div>
                <p className="font-bold text-white text-base md:text-lg mb-0.5">Need a custom API built from scratch?</p>
                <p className="text-white/40 text-xs md:text-sm">
                  We design, document, and deploy production-ready APIs — REST, GraphQL, or gRPC.
                </p>
              </div>
            </div>
            <CTAButton href="/contact-us">
              Start a Project <ArrowRight className="w-4 h-4" />
            </CTAButton>
          </div>

        </div>
      </section>

    </div>
  );
}