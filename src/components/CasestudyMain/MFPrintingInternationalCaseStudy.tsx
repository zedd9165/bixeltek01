
import Link from "next/link";
import Image from "next/image";
import mfPrintImg from "@/assets/mf-print-casestudy.png"

const sections = [
  { id: "overview", number: "01", label: "Overview" },
  { id: "challenge", number: "02", label: "The challenge" },
  { id: "strategy", number: "03", label: "Our approach" },
  { id: "website", number: "04", label: "Website development" },
  { id: "google-ads", number: "05", label: "Google Ads" },
  { id: "outcome", number: "06", label: "The outcome" },
];

const deliverables = [
  {
    number: "01",
    title: "Custom website development",
    description:
      "A website built around the business&apos;s requirements rather than a generic, off-the-shelf layout.",
  },
  {
    number: "02",
    title: "Online business presence",
    description:
      "A dedicated digital destination where prospective customers can discover the business and learn more before reaching out.",
  },
  {
    number: "03",
    title: "Google Ads campaign launch",
    description:
      "Paid search campaigns designed to put the business in front of relevant people actively looking for solutions.",
  },
  {
    number: "04",
    title: "A foundation for growth",
    description:
      "A starting point for developing a more scalable customer acquisition strategy as the business grows.",
  },
];

const projectPrinciples = [
  {
    title: "Build for the actual business",
    description:
      "The website needed to reflect the client&apos;s requirements and commercial goals, not simply fill a page with generic content.",
  },
  {
    title: "Make the business discoverable",
    description:
      "A business needs a digital presence that prospective customers can find, visit and use to understand what it offers.",
  },
  {
    title: "Connect visibility with acquisition",
    description:
      "Launching a website was only one part of the work. Google Ads gave the business an additional way to reach prospective customers.",
  },
  {
    title: "Use early feedback to guide the next stage",
    description:
      "The initial response created a basis for discussing how to build on the campaign rather than treating launch as the finish line.",
  },
];

export default function MFPrintingInternationalCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/5 bg-[#faf9f7]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#670EF7]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-[#8B45FF]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
            <Link
              href="/case-studies"
              className="transition-colors hover:text-[#670EF7]"
            >
              Case Studies
            </Link>
            <span aria-hidden="true">/</span>
            <span>Website Development &amp; Google Ads</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#670EF7]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#670EF7]">
                <span className="h-2 w-2 rounded-full bg-[#670EF7]" />
                Client Case Study
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                From No Online Presence to Getting Customers Through Google
                Ads
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
                We built a custom website for MF Printing International and
                launched Google Ads to help the business reach customers
                online. Within the first two to three days of the campaign
                launch, the business had started getting customers through
                Google Ads.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#670EF7] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5209d4]"
                >
                  Discuss Your Project
                  <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-[#670EF7]/40 hover:text-[#670EF7]"
                >
                  Explore More Case Studies
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-black/5 bg-white p-5 shadow-[0_24px_80px_rgba(25,15,50,0.08)] md:p-7">
                <div className="flex items-start justify-between gap-4 border-b border-black/5 pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      Project snapshot
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                      MF Printing International
                    </h2>
                  </div>
                  <span className="rounded-full bg-[#670EF7]/10 px-3 py-1.5 text-xs font-semibold text-[#670EF7]">
                    Growth
                  </span>
                </div>

                <div className="grid gap-3 pt-5 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#faf9f7] p-5">
                    <p className="text-sm text-neutral-500">Starting point</p>
                    <p className="mt-2 text-lg font-semibold">
                      No established online presence
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#faf9f7] p-5">
                    <p className="text-sm text-neutral-500">What we built</p>
                    <p className="mt-2 text-lg font-semibold">
                      Custom website
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#faf9f7] p-5">
                    <p className="text-sm text-neutral-500">Acquisition channel</p>
                    <p className="mt-2 text-lg font-semibold">Google Ads</p>
                  </div>
                  <div className="rounded-2xl bg-[#f0eaff] p-5">
                    <p className="text-sm font-medium text-[#670EF7]">
                      Early result
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#361078]">
                      Customers within 2–3 days
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-xs leading-5 text-neutral-500">
                  The early result is based on client-provided project
                  information. No lead volume, revenue, or return-on-ad-spend
                  figures are claimed here.
                </p>
              </div>
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 -z-10 h-28 w-28 rounded-full border border-[#670EF7]/20"
              />
            </div>
          </div>

          <div className="mt-16 grid gap-4 border-t border-black/10 pt-7 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
                Service
              </p>
              <p className="mt-2 font-medium">Custom Website Development</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
                Acquisition
              </p>
              <p className="mt-2 font-medium">Google Ads Management</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
                Objective
              </p>
              <p className="mt-2 font-medium">
                Build an online presence and attract customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky section navigation */}
      <nav
        aria-label="Case study sections"
        className="sticky top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-4 md:px-12 lg:px-16">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex shrink-0 items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-[#670EF7]"
            >
              <span className="text-xs font-semibold text-[#670EF7]">
                {section.number}
              </span>
              <span className="font-medium">{section.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Overview */}
      <section
        id="overview"
        className="scroll-mt-24 border-b border-black/5"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#670EF7]">
              01 / Overview
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Giving a business a way to be found online
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-neutral-600 md:text-lg">
            <p>
              MF Printing International came to us at a point where its business
              needed a stronger digital presence. Without an established
              website, prospective customers had fewer ways to discover the
              company online, understand its offering, and take the next step
              towards becoming customers.
            </p>
            <p>
              We approached the project as more than a website build. The goal
              was to create a digital foundation for the business and pair it
              with a channel that could bring relevant prospects to it. That
              meant developing a website around the client&apos;s requirements and
              using Google Ads to help the business reach people searching
              online.
            </p>
            <p>
              The early response was encouraging. According to the project
              feedback shared with us, customers started coming through Google
              Ads within the first two to three days after the campaigns went
              live. That gave the client a tangible early indication of what a
              more deliberate online acquisition approach could make possible.
            </p>
            <div className="rounded-2xl border-l-4 border-[#670EF7] bg-[#faf9f7] p-6 md:p-7">
              <p className="text-lg font-medium leading-8 text-neutral-900 md:text-xl">
                The project connected two important pieces: a website built
                for the business and a paid search channel designed to bring
                potential customers to it.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md">
              <Image
                src={mfPrintImg}
                alt="MF Printing International Website and Google Ads Project Showcase"
                className="h-auto w-full object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section
        id="challenge"
        className="scroll-mt-24 border-b border-black/5 bg-[#faf9f7]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#670EF7]">
              02 / The challenge
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              A business can be capable of serving customers and still be
              difficult to discover online
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Before the project, MF Printing International did not have an
              established online presence. That left an important gap between
              the business and potential customers who were looking for
              relevant services online.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-black/5 bg-white p-7 md:p-8">
              <span className="text-sm font-semibold text-[#670EF7]">01</span>
              <h3 className="mt-5 text-xl font-semibold">
                Limited online discoverability
              </h3>
              <p className="mt-3 leading-7 text-neutral-600">
                Without a dedicated website, people searching online had no
                central business website to visit, explore, and use to learn
                more about the company.
              </p>
            </article>

            <article className="rounded-3xl border border-black/5 bg-white p-7 md:p-8">
              <span className="text-sm font-semibold text-[#670EF7]">02</span>
              <h3 className="mt-5 text-xl font-semibold">
                No dedicated digital destination
              </h3>
              <p className="mt-3 leading-7 text-neutral-600">
                The business needed a place where its information could be
                presented in a structured way and where interested visitors
                could take the next step.
              </p>
            </article>

            <article className="rounded-3xl border border-black/5 bg-white p-7 md:p-8">
              <span className="text-sm font-semibold text-[#670EF7]">03</span>
              <h3 className="mt-5 text-xl font-semibold">
                An opportunity to reach active searchers
              </h3>
              <p className="mt-3 leading-7 text-neutral-600">
                A website alone would establish a presence, but paid search
                offered a way to actively introduce the business to relevant
                audiences instead of waiting for visitors to find it.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-3xl bg-[#17131f] p-7 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#c5a8ff]">
              The business problem
            </p>
            <p className="mt-4 max-w-4xl text-2xl font-medium leading-relaxed md:text-3xl">
              How could we help MF Printing International become easier to
              discover online and create a practical route from search to
              customer enquiry?
            </p>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section
        id="strategy"
        className="scroll-mt-24 border-b border-black/5"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#670EF7]">
                03 / Our approach
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Build the foundation, then bring the right people to it
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                We treated the website and Google Ads as connected parts of the
                same business objective. The website would establish the
                company&apos;s online presence; Google Ads would help potential
                customers discover it.
              </p>
            </div>

            <div className="space-y-0">
              {projectPrinciples.map((principle, index) => (
                <div
                  key={principle.title}
                  className="grid gap-4 border-b border-black/10 py-7 first:pt-0 sm:grid-cols-[52px_1fr] sm:gap-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0eaff] text-sm font-semibold text-[#670EF7]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {principle.title}
                    </h3>
                    <p className="mt-3 leading-7 text-neutral-600">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-4 rounded-3xl border border-black/5 bg-[#faf9f7] p-6 sm:grid-cols-3 md:p-8">
            <div>
              <p className="text-sm text-neutral-500">Step 1</p>
              <p className="mt-2 text-lg font-semibold">Establish the presence</p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Build a custom website for the business.
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-500">Step 2</p>
              <p className="mt-2 text-lg font-semibold">Create visibility</p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Launch Google Ads to reach relevant searchers.
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-500">Step 3</p>
              <p className="mt-2 text-lg font-semibold">Build on the response</p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Use early customer response as a starting point for future
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Website development */}
      <section
        id="website"
        className="scroll-mt-24 border-b border-black/5 bg-[#faf9f7]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#670EF7]">
                04 / Website development
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                A custom website built around the client&apos;s business
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                We developed a customized website for MF Printing International
                rather than relying on a generic template that might not fit
                its needs. The purpose was to give the company its own online
                destination and establish a stronger foundation for digital
                customer acquisition.
              </p>
              <p className="mt-5 leading-8 text-neutral-600">
                The site needed to serve a practical business purpose: help
                visitors understand the company, provide a professional point
                of reference, and support the next step when someone was
                interested in working with the business.
              </p>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
                What the website was intended to solve
              </p>
              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0eaff] text-[#670EF7]">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-semibold">A dedicated online presence</h3>
                    <p className="mt-1 leading-7 text-neutral-600">
                      Give potential customers a website to visit when
                      discovering the business online.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0eaff] text-[#670EF7]">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-semibold">A business-specific experience</h3>
                    <p className="mt-1 leading-7 text-neutral-600">
                      Shape the website around the client&apos;s requirements
                      instead of forcing the business into a one-size-fits-all
                      design.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0eaff] text-[#670EF7]">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-semibold">A destination for paid traffic</h3>
                    <p className="mt-1 leading-7 text-neutral-600">
                      Provide Google Ads visitors with a website where they
                      can learn about the business before deciding to contact
                      it.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0eaff] text-[#670EF7]">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-semibold">Room for future development</h3>
                    <p className="mt-1 leading-7 text-neutral-600">
                      Create a digital starting point that can support further
                      marketing activity as the business&apos;s goals evolve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-black/5 bg-white p-7 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#670EF7]">
              Why the website mattered
            </p>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold">
                  More than a digital brochure
                </h3>
                <p className="mt-3 leading-7 text-neutral-600">
                  The website was the foundation of the wider acquisition
                  effort. It gave the business a place to direct potential
                  customers rather than sending paid traffic into an online
                  journey without a dedicated company website.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  A foundation that can evolve
                </h3>
                <p className="mt-3 leading-7 text-neutral-600">
                  As the company grows, its website can continue to support
                  clearer service information, additional landing pages,
                  stronger conversion paths and future marketing campaigns
                  where those additions are needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Ads */}
      <section
        id="google-ads"
        className="scroll-mt-24 border-b border-black/5"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#670EF7]">
                05 / Google Ads
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Turning online visibility into customer opportunities
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Once the website provided a destination for potential
                customers, we ran Google Ads to help MF Printing International
                reach people searching for relevant services.
              </p>
              <p className="mt-5 leading-8 text-neutral-600">
                The important distinction was that the project did not stop at
                making the business visible online. We also introduced a paid
                acquisition channel with the aim of bringing potential
                customers to the business.
              </p>
            </div>

            <div className="space-y-5">
              <article className="rounded-3xl border border-black/5 bg-[#faf9f7] p-7 md:p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl font-semibold text-[#670EF7] shadow-sm">
                    01
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Reach people searching online
                    </h3>
                    <p className="mt-3 leading-7 text-neutral-600">
                      Google Ads gave the business an active way to reach
                      relevant searchers, rather than relying exclusively on
                      people who already knew the company.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl border border-black/5 bg-[#faf9f7] p-7 md:p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl font-semibold text-[#670EF7] shadow-sm">
                    02
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Connect ads to the website
                    </h3>
                    <p className="mt-3 leading-7 text-neutral-600">
                      The website gave campaign visitors a dedicated place to
                      learn more about the business and consider taking the
                      next step.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl border border-black/5 bg-[#faf9f7] p-7 md:p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl font-semibold text-[#670EF7] shadow-sm">
                    03
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Learn from the early response
                    </h3>
                    <p className="mt-3 leading-7 text-neutral-600">
                      The client reported that customers began coming through
                      Google Ads within the first two to three days. That
                      initial response provided a practical reason to explore
                      further growth.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl bg-[#17131f] p-7 text-white md:p-10 lg:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#c5a8ff]">
                  Early campaign response
                </p>
                <h3 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
                  The first customers started coming through Google Ads within
                  2–3 days
                </h3>
                <p className="mt-4 max-w-2xl leading-7 text-white/70">
                  This was the early result shared with us by the client. It
                  demonstrates the initial customer response, not a verified
                  long-term performance or profitability figure.
                </p>
              </div>
              <div className="flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full border border-white/20 bg-white/5 text-center md:h-36 md:w-36">
                <span className="text-4xl font-semibold text-white">2–3</span>
                <span className="mt-1 text-xs uppercase tracking-[0.15em] text-[#c5a8ff]">
                  Days to early response
                </span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm leading-6 text-neutral-500">
            We have not included an exact lead count, advertising budget, cost
            per lead, conversion rate or ROAS because those figures have not
            been provided for publication.
          </p>
        </div>
      </section>

      {/* Outcome */}
      <section
        id="outcome"
        className="scroll-mt-24 border-b border-black/5 bg-[#faf9f7]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#670EF7]">
              06 / The outcome
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              An encouraging start and a plan to scale further
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              For MF Printing International, the project established an online
              presence and introduced Google Ads as a channel for reaching
              potential customers. The early customer response was encouraging,
              and the client gave us positive feedback about the work.
            </p>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              The next opportunity is to build on that foundation. The client
              is now planning to scale the activity to a much larger level.
              That creates room to review campaign performance, identify the
              strongest opportunities and develop the website and advertising
              strategy in line with the business&apos;s goals.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-black/5 bg-white p-7 md:p-9">
              <span className="inline-flex rounded-full bg-[#f0eaff] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#670EF7]">
                Established
              </span>
              <h3 className="mt-5 text-2xl font-semibold">
                The digital foundation is in place
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                The company now has a custom website and a paid search channel
                that can be developed as its online acquisition needs evolve.
              </p>
            </article>

            <article className="rounded-3xl border border-[#670EF7]/15 bg-white p-7 md:p-9">
              <span className="inline-flex rounded-full bg-[#f0eaff] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#670EF7]">
                Next opportunity
              </span>
              <h3 className="mt-5 text-2xl font-semibold">
                Scale with performance in mind
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                The client&apos;s plan to scale creates an opportunity to use
                campaign data and business feedback to guide future investment
                and improvements.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-3xl border border-black/5 bg-white p-7 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#670EF7]">
              What this project demonstrates
            </p>
            <div className="mt-5 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-semibold">Presence is the starting point</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-600">
                  A business needs a credible place online where potential
                  customers can learn more about it.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Traffic needs a destination</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-600">
                  Advertising works alongside the website, helping bring
                  potential customers into a business-specific online journey.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Growth should be measured</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-600">
                  Scaling responsibly means evaluating lead quality, conversion
                  performance and commercial outcomes—not just increasing
                  advertising spend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#670EF7]">
              Project scope
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              What we delivered
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              The work combined a tailored website with a customer acquisition
              channel, creating a practical starting point for the company&apos;s
              next phase of digital growth.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {deliverables.map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-black/10 p-7 transition-colors hover:border-[#670EF7]/30 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-sm font-semibold text-[#670EF7]">
                    {item.number}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-neutral-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#17131f] px-7 py-12 text-white md:px-12 md:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full bg-[#670EF7]/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#8B45FF]/20 blur-3xl"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c5a8ff]">
                Build your next growth channel
              </p>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Need a website that supports your next stage of business growth?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                We can help you build a digital presence around your business
                and develop a practical approach to attracting customers
                online—from the website to the campaigns that bring people to
                it.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#17131f] transition hover:bg-[#f0eaff]"
              >
                Discuss Your Project <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/services/web-design"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50"
              >
                Explore Website Development
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
