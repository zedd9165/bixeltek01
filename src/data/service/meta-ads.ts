/**
 * Bixeltek Meta Ads Management - service-page content draft
 *
 * Content-first draft based on the competitor research discussed in chat.
 * Adapt these exports to the exact interfaces in the existing service-page system.
 * No unverified Meta Ads results, client claims, certifications, or partnerships are included.
 *
 * Before publishing: confirm route names, delivery inclusions, active tools, and approved Meta-specific proof.
 */

export const metaAdsMetadata = {
  title: "Meta Ads Management Services | Facebook & Instagram Ads - Bixeltek",
  description:
    "Plan and manage Facebook and Instagram advertising around your business goals. Bixeltek connects campaign strategy, creative testing, conversion tracking and landing-page experience.",
  // Confirm the canonical route in the existing site architecture.
  canonicalPath: "/services/meta-ads",
  keywords: [
    "Meta Ads management services",
    "Meta Ads agency",
    "Facebook Ads management",
    "Instagram Ads management",
    "Meta advertising services",
    "paid social advertising",
    "Meta lead generation",
    "Meta Ads for ecommerce",
    "Meta Pixel setup",
    "Conversions API integration",
  ],
};

export const metaAdsBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Meta Ads Management", href: "/services/meta-ads" },
];

export const metaAdsJumpLinks = [
  { label: "Challenges", href: "#meta-ads-challenges" },
  { label: "What We Manage", href: "#meta-ads-scope" },
  { label: "Our Process", href: "#meta-ads-process" },
  { label: "Measurement", href: "#meta-ads-measurement" },
  { label: "FAQs", href: "#meta-ads-faqs" },
];

export const metaAdsHero = {
  eyebrow: "META ADS MANAGEMENT · FACEBOOK & INSTAGRAM",
  h1: "Meta Ads Built Around the Actions That Grow Your Business",
  description:
    "Reach potential customers on Facebook and Instagram with campaigns built around a clear business objective. We connect audience strategy, ad creative, campaign structure and conversion measurement - so decisions are guided by more than clicks, likes or low-cost leads.",
  primaryCta: { label: "Talk to our Meta Ads Expert", href: "#meta-ads-contact" },
  secondaryCta: { label: "Explore Our Work", href: "/case-studies" },
  supportingText:
    "For businesses looking to generate relevant enquiries, acquire customers or grow ecommerce sales.",
  visualLabel: "Strategy · Creative · Measurement · Improvement",
};

export const metaAdsPositioning = {
  eyebrow: "PAID SOCIAL WITH A CLEAR COMMERCIAL PURPOSE",
  h2: "Advertising Is Only One Part of the Customer Journey",
  intro:
    "A campaign can reach the right people and still struggle to produce business results. The offer may not be clear, the creative may not earn attention, the landing page may create friction, or conversion tracking may not show which enquiries turn into customers. We plan Meta Ads with these connected parts in view, then prioritize improvements based on the evidence available.",
  points: [
    {
      title: "Start with the business objective",
      description:
        "Define what the campaign needs to produce - such as qualified enquiries, booked consultations, purchases or another meaningful action - before deciding how success should be measured.",
    },
    {
      title: "Match the message to the audience",
      description:
        "Build and test creative angles, offers and formats that explain why the product or service matters to the people you want to reach.",
    },
    {
      title: "Measure what happens after the click",
      description:
        "Review available conversion and lead data alongside campaign metrics, so optimization can consider the quality and commercial relevance of results - not just the volume generated.",
    },
  ],
};

export const metaAdsChallenges = {
  id: "meta-ads-challenges",
  eyebrow: "WHEN CAMPAIGNS UNDERPERFORM",
  h2: "Good Reach Means Little Without Meaningful Results",
  intro:
    "Meta Ads can reach the right number of people and generate activity without bringing in valuable enquiries. We investigate what happens between ad exposure, form submission and sales follow-up to identify where performance breaks down.",
  cards: [
    {
      title: "Good Reach, but No Real Results",
      description:
        "Your ads are reaching people and getting impressions, but enquiries or sales remain low. We review the campaign objective, audience relevance, creative message and post-click journey to understand why visibility is not translating into action.",
    },
    {
      title: "Form Submissions From Low-Intent Leads",
      description:
        "Your forms are filling up, but many people are unreachable, unqualified or not genuinely interested. We assess audience targeting, offer relevance, form questions and lead quality data to help attract people who are more likely to become customers.",
    },
    {
      title: "Engagement Without Enquiries",
      description:
        "People watch your videos, like your ads or visit your profile, but few take the next step. We examine whether the creative builds the right intent, communicates a clear value proposition and gives interested prospects a relevant path to enquire or purchase.",
    },
  ],
};

export const metaAdsObjectives = {
  eyebrow: "CAMPAIGNS BUILT FOR THE JOB",
  h2: "Choose the Campaign Approach That Fits Your Goal",
  intro:
    "Meta offers different ways to reach people and encourage action. The right setup depends on your offer, buying cycle, available conversion data, creative resources and the outcome your business needs.",
  cards: [
    {
      title: "Lead Generation",
      description:
        "Build campaigns to attract prospective customers through suitable instant forms, website enquiries, calls or other agreed conversion paths. Lead volume is reviewed alongside lead relevance wherever quality data is available.",
      bestFor: "Service businesses, consultations, local businesses and considered purchases.",
    },
    {
      title: "Ecommerce Sales",
      description:
        "Connect product positioning, campaign structure, creative and purchase measurement. Review the path from ad to product or category page, including points where shoppers may hesitate or abandon checkout.",
      bestFor: "Online stores with a clear product offer and a functioning purchase journey.",
    },
    {
      title: "Retargeting",
      description:
        "Reconnect with eligible audiences who have interacted with your business, where consent, platform rules and audience size permit. Use relevant follow-up messages rather than repeating the same ad to everyone.",
      bestFor: "Businesses with sufficient site traffic, engagement or customer audiences.",
    },
    {
      title: "Awareness & Demand Creation",
      description:
        "Introduce your business, product or offer to relevant audiences and test messages that can support later consideration. Evaluate these campaigns against their intended role rather than judging every campaign by immediate last-click sales.",
      bestFor: "New offers, launches and businesses that need to build initial consideration.",
    },
{
  title: "Campaign A/B Testing",
  description:
    "Test campaign variables such as audiences, objectives, placements and creative approaches to understand what drives better results. Keep comparisons controlled, evaluate meaningful outcomes such as qualified leads or purchases, and use the findings to guide campaign optimisation.",
  bestFor:
    "Accounts that need to identify which campaign setup delivers stronger results, not just more clicks or cheaper leads.",
},

  ],
};

export const metaAdsScope = {
  id: "meta-ads-scope",
  eyebrow: "WHAT WE MANAGE",
  h2: "A Practical Meta Ads Management Scope",
  intro:
    "The work should reflect the condition of your account and the resources available to your business. We establish priorities first, then agree on the management, creative, measurement and website work needed for the campaign.",
  items: [
    {
      title: "Campaign Strategy & Account Structure",
      description:
        "Align campaign objectives, audience approach, budget allocation and account structure with the offer, buying cycle and available conversion data.",
    },
    {
      title: "Audience & Offer Strategy",
      description:
        "Identify the customer groups and messages worth testing. Use available first-party insights, market knowledge and campaign learning without assuming that a narrow audience is always better.",
    },
    {
      title: "Ad Copy & Creative Direction",
      description:
        "Develop messaging angles and creative briefs around customer problems, product value, objections and the next action. Production of videos, photography or a high volume of creative assets should be confirmed in the project scope.",
    },
    {
      title: "Campaign Setup & Management",
      description:
        "Configure campaigns, placements, budgets, ads and conversion objectives; monitor delivery and make changes based on performance, data quality and the stage of learning.",
    },
    {
      title: "Conversion Tracking Review",
      description:
        "Review the current Meta Pixel and event setup where applicable. Identify gaps in event configuration, deduplication, consent handling or reporting before relying on the numbers for optimization.",
    },
    {
      title: "Reporting & Improvement",
      description:
        "Summarize spend, delivery, conversion performance and agreed business indicators. Use the findings to prioritize campaign, creative, tracking or post-click changes for the next cycle.",
    },
  ],
  scopeNote:
    "Landing-page development, new creative production, Meta Pixel implementation, Conversions API integration, CRM integrations and automated lead follow-up may require separate scoping. Confirm included deliverables before publishing this section as a fixed package.",
};

export const metaAdsStartingSituations = {
  eyebrow: "START FROM WHERE YOU ARE",
  h2: "Launching Meta Ads or Improving an Existing Account?",
  cards: [
    {
      title: "Launching a New Campaign?",
      description:
        "Clarify the audience, offer, conversion path and measurement plan before spend begins. Identify what needs to be ready, what can be tested first and which early signals will inform the next decisions.",
    },
    {
      title: "Spending but Not Seeing Consistent Results?",
      description:
        "Review the account structure, creative, offer, audience approach, landing page and conversion setup together. Find the most plausible constraints and prioritize changes instead of changing everything at once.",
    },
    {
      title: "Getting Leads but Unsure About Their Quality?",
      description:
        "Look at the steps between form submission and sale. Where the business has reliable CRM or sales feedback, use it to distinguish raw enquiries from relevant, contactable and qualified opportunities.",
    },
    {
      title: "Ready to Scale What Is Working?",
      description:
        "Check whether current results are repeatable, measurement is dependable and the business can handle more demand. Scaling decisions should account for creative supply, sales capacity and economics - not just a recent improvement in platform metrics.",
    },
  ],
  buttonText: "Discuss Your Meta Ads",
  buttonHref: "#meta-ads-contact",
};

export const metaAdsConversionJourney = {
  eyebrow: "FROM AD IMPRESSION TO BUSINESS OUTCOME",
  h2: "Connect the Ad, the Landing Page and the Follow-Up",
  intro:
    "Campaign performance is shaped by the whole journey. We assess the steps a potential customer takes after seeing an ad and identify where relevance, trust, usability or follow-up may be lost.",
  panels: [
    {
      title: "Earn Attention with a Relevant Message",
      description:
        "The ad should make the offer understandable quickly and give the right person a reason to continue. Creative direction considers the audience, placement, message, proof and next step - not just visual polish.",
    },
    {
      title: "Make the Next Step Feel Natural",
      description:
        "The destination should continue the conversation started by the ad. Review whether the page answers key questions, explains the offer, builds trust and makes it easy to enquire or buy on mobile and desktop.",
    },
    {
      title: "Help the Business Respond to Demand",
      description:
        "A lead is only the start of a sales process. Depending on the setup, the next step may involve call handling, CRM routing, timely follow-up or clearer ownership of new enquiries. These operational changes can be scoped alongside campaign management.",
    },
  ],
  supportingLink: {
    text: "Book an Audit for Meta Ads",
    destination: "#meta-ads-contact",
  },
};

export const metaAdsMeasurement = {
  id: "meta-ads-measurement",
  eyebrow: "MEASUREMENT THAT SUPPORTS BETTER DECISIONS",
  h2: "Understand What the Campaign Is Producing",
  intro:
    "Platform reporting is useful, but it is not the whole business picture. We agree on the conversion events and indicators that matter, review the reliability of available data and explain what the numbers can - and cannot - tell us.",
  items: [
    {
      title: "Conversion Events",
      description:
        "Define the key actions to measure, such as a completed enquiry, booked appointment, checkout or purchase, based on the campaign objective and website setup.",
    },
    {
      title: "Meta Pixel & Conversions API",
      description:
        "Where appropriate, review or scope browser and server-side event measurement. Implementation depends on the site's technology, access, consent requirements and available integrations; it should not be presented as a guaranteed fix for attribution.",
    },
    {
      title: "Lead Quality & Sales Feedback",
      description:
        "When the business captures reliable CRM or sales outcomes, use those signals to assess which campaigns are producing useful opportunities - not just form submissions.",
    },
    {
      title: "Landing-Page Behaviour",
      description:
        "Use available analytics and page observations to investigate whether visitors reach the intended page, engage with the offer and complete the expected action.",
    },
    {
      title: "Reporting & Decision Notes",
      description:
        "Explain changes in spend, results, creative performance and conversion quality, including limitations such as small sample sizes, tracking gaps or changes in the offer.",
    },
  ],
  technologyNote:
    "List only platforms and integrations Bixeltek actively uses and can support. GA4, Google Tag Manager, Meta Pixel, Conversions API and CRM tools should be described according to the actual implementation scope.",
};

export const metaAdsProcess = {
  id: "meta-ads-process",
  eyebrow: "HOW WE WORK",
  h2: "A Clear Process of Launch , Scale and Optimize",
  intro:
    "The objective is not to make constant changes for their own sake. We establish a sound starting point, run focused tests and use the evidence available to decide what should change next.",
  steps: [
    {
      number: "01",
      title: "Understand the Business & Offer",
      description:
        "Clarify the customer, offer, sales process, target geography, budget context and business outcome the campaigns need to support.",
    },
    {
      number: "02",
      title: "Review the Account & Conversion Path",
      description:
        "Assess the existing account, campaign history, creative, destination pages and tracking setup where access and data are available.",
    },
    {
      number: "03",
      title: "Set the Strategy & Measurement Plan",
      description:
        "Choose the initial campaign approach, define the conversion goal, agree on the first tests and document what can realistically be measured.",
    },
    {
      number: "04",
      title: "Prepare Creative & Launch",
      description:
        "Prepare or coordinate the agreed ad copy and creative, configure the campaigns and check the conversion path before launch. Production deliverables should be confirmed in scope.",
    },
    {
      number: "05",
      title: "Monitor Delivery & Learn",
      description:
        "Review delivery, spend, conversion signals and creative performance with the context needed to avoid overreacting to limited or noisy data.",
    },
    {
      number: "06",
      title: "Improve & Plan the Next Cycle",
      description:
        "Prioritize the next changes across campaign structure, creative, measurement or the post-click journey, and report what was learned and what remains uncertain.",
    },
  ],
};

export const metaAdsBusinessMarkets = {
  eyebrow: "CAMPAIGNS SHAPED AROUND YOUR BUSINESS MODEL",
  h2: "Different Offers Need Different Meta Ads Strategies",
  intro:
    "The right creative, conversion path and measurement approach depend on what you sell and how customers decide. These are useful starting points, not claims that one campaign structure works for every business.",
  cards: [
    {
      title: "Dental & Healthcare Practices",
      description:
        "Present relevant treatments and appointment options with clear, responsible messaging. Campaigns should direct prospective patients to useful information and a practical booking or enquiry path, while respecting applicable platform policies and local regulations.",
    },
    {
      title: "Ecommerce & Consumer Brands",
      description:
        "Connect product value, creative testing, catalogue considerations where relevant and purchase measurement. Review the shopping journey so the ad promise, product page, delivery information and checkout experience stay aligned.",
    },
    {
      title: "Local & Multi-Location Services",
      description:
        "Reach people within realistic service areas and make the location, service and next action clear. Where multiple branches are involved, lead routing and location-level reporting may need to be considered.",
    },
    {
      title: "B2B & Considered Services",
      description:
        "Use Meta to introduce an offer, support consideration or generate enquiries when the audience and message fit the buying process. Lead qualification, follow-up and sales feedback matter when conversion to revenue takes time.",
    },
  ],
};

export const metaAdsUseCases = {
  id: "meta-ads-use-cases",
  eyebrow: "WHERE META ADS CAN HELP",
  h2: "Practical Use Cases, Not One Campaign Formula",
  intro:
    "The campaign structure should follow the decision a customer needs to make. These examples show how the objective, message and conversion path can change by business situation; the final approach depends on the offer, audience, budget and available data.",
  cases: [
    {
      title: "A Dental Clinic Wants More Invisalign Appointments",
      situation:
        "The clinic wants to attract patients interested in Invisalign treatment, but broad dental advertising may generate enquiries from people who are not considering clear aligners or are not ready to book a consultation.",
      approach:
        "Build campaigns around Invisalign consultations, communicate the treatment process and next steps clearly, and direct prospective patients to a relevant landing page or enquiry form. Test different creative angles and review lead quality with the clinic's appointment data.",
      successSignals:
        "Invisalign consultation enquiries, qualified leads, contact rate, consultations booked, show-up rate and cost per booked consultation where trackable.",
    },
    {
      title: "An Ecommerce Brand Wants to Launch and Scale a Product",
      situation:
        "The brand needs to introduce a product to new audiences, identify which messages drive purchases and grow sales without letting acquisition costs erode profitability.",
      approach:
        "Start with distinct creative concepts and product value propositions, then use purchase data to identify promising combinations. Gradually test audience expansion and campaign budgets while checking product-page conversion, tracking reliability, inventory and unit economics before scaling spend.",
      successSignals:
        "Purchases, conversion rate, customer acquisition cost, return on ad spend, average order value and contribution margin where data is available.",
    },
    {
      title: "A Local Service Business Needs Enquiries in Specific Areas",
      situation:
        "The business can only serve defined locations and needs enquiries that its team can realistically handle.",
      approach:
        "Make the service area and offer explicit, use a suitable contact path and consider how enquiries will be assigned to the right team or branch.",
      successSignals:
        "Relevant enquiries by service area, contactability, booked jobs and response time where those measures are available.",
    },
    {
      title: "A B2B Company Has a Longer Sales Cycle",
      situation:
        "A prospect may need to understand the solution, compare providers and speak with a team before becoming a customer.",
      approach:
        "Use the campaign to introduce a relevant problem or solution, send prospects to a page that answers meaningful questions and align lead capture with the sales team's qualification process.",
      successSignals:
        "Qualified enquiries, meetings booked, progression through the pipeline and eventual sales feedback when available.",
    },
    {
      title: "A Business Gets Website Visits but Few Conversions",
      situation:
        "People arrive from ads, but too few complete the intended action.",
      approach:
        "Check whether the ad and landing page make the same promise, whether the offer is easy to understand and whether mobile visitors can complete the form or purchase without unnecessary friction.",
      successSignals:
        "Landing-page conversion rate, form completion, checkout progression and tracking reliability.",
    },
    {
      title: "An Existing Account Needs a Better Retargeting Plan",
      situation:
        "The business has eligible audiences who have interacted with its content, website or products, but follow-up messaging is repetitive or poorly aligned.",
      approach:
        "Where audience size, consent and platform rules allow, tailor follow-up messages to the interaction and decision stage instead of showing every visitor the same ad.",
      successSignals:
        "Incremental conversions where measurable, frequency, conversion quality and whether retargeting adds value beyond other activity.",
    },
  ],
  note:
    "These are illustrative use cases, not claims that Bixeltek has delivered these exact outcomes. Publish named client examples or performance figures only when the underlying work and evidence are approved.",
};

export const metaAdsCreativeTestingFramework = {
  id: "meta-ads-creative-testing",
  eyebrow: "CREATIVE TESTING WITH A PURPOSE",
  h2: "Test the Message Before You Keep Changing the Budget",
  intro:
    "Creative testing is most useful when each test answers a clear question. Instead of producing many near-identical ads, identify which customer motivation, offer or explanation needs validating, then compare distinct concepts with a consistent objective.",
  stages: [
    {
      number: "01",
      title: "Identify Customer Motivation",
      description:
        "Anchor tests in distinct buyer triggers - solving a pain point, saving time, reducing doubt or clarifying value.",
    },
    {
      number: "02",
      title: "Develop Distinct Concepts",
      description:
        "Test contrasting visual hooks, core messages and offers rather than making trivial wording tweaks.",
    },
    {
      number: "03",
      title: "Format for Native Placements",
      description:
        "Tailor aspect ratios, sound-off readability and mobile safe zones to perform natively across feeds, stories and reels.",
    },
    {
      number: "04",
      title: "Evaluate & Iterate On Signals",
      description:
        "Track post-click conversions and enquiry quality alongside platform metrics to guide the next round of creative.",
    },
  ],
};

export const metaAdsLeadQualityLoop = {
  id: "meta-ads-lead-quality-loop",
  eyebrow: "BEYOND THE FORM SUBMISSION",
  h2: "Help Campaign Decisions Reflect Lead Quality",
  intro:
    "When the goal is lead generation, the cheapest submission is not necessarily the most valuable one. A useful feedback loop connects marketing activity with what the team learns when it contacts and qualifies enquiries.",
  steps: [
    {
      title: "Capture the Enquiry",
      description:
        "Record the agreed conversion event consistently and make sure the team can identify where the enquiry came from when that information is available.",
    },
    {
      title: "Respond and Qualify",
      description:
        "Track practical outcomes such as whether the person could be contacted, whether the request fits the service and whether a meeting or appointment was booked.",
    },
    {
      title: "Share Useful Feedback",
      description:
        "Where reliable CRM or sales data exists, review which campaigns and messages are associated with more relevant opportunities. Any platform-side feedback integration needs to be assessed and scoped separately where required.",
    },
    {
      title: "Improve the Next Decision",
      description:
        "Use the evidence to revisit the offer, creative, qualification questions, follow-up process or campaign setup. If the data is incomplete, make that limitation visible instead of treating the conclusion as certain.",
    },
  ],
  note:
    "This process depends on the business recording lead outcomes consistently. CRM integration, offline conversion feedback and automation should only be promised when included in the agreed technical scope.",
};

export const metaAdsLaunchReadiness = {
  eyebrow: "BEFORE YOU PUT MORE BUDGET IN",
  h2: "Is Your Business Ready to Get Value from Meta Ads?",
  intro:
    "Paid social can bring attention to an offer, but campaign performance is constrained when the offer, destination or response process is not ready. Use this checklist to identify gaps before launch or scaling.",
  checklist: [
    {
      title: "A clear offer",
      description:
        "The target customer can understand what is being offered, why it may be relevant and what to do next.",
    },
    {
      title: "A credible destination",
      description:
        "The landing page or instant form answers essential questions and makes the next action straightforward on mobile.",
    },
    {
      title: "Reliable conversion measurement",
      description:
        "The primary action is defined, tested and reported as accurately as the current setup allows.",
    },
    {
      title: "A follow-up owner",
      description:
        "Someone is responsible for responding to enquiries within a reasonable timeframe and recording the outcome.",
    },
    {
      title: "A realistic test budget and timeframe",
      description:
        "The business understands that results vary and has agreed how performance will be reviewed before major changes are made.",
    },
    {
      title: "Capacity to handle demand",
      description:
        "The team can deliver the service, fulfil orders or manage appointments if the campaign starts producing more interest.",
    },
  ],
  closingNote:
    "Not every item must be perfect before a campaign starts. The point is to identify which gaps could undermine the test and decide whether to fix them first or account for them in the plan.",
};

export const metaAdsWhyBixeltek = {
  eyebrow: "WHY BIXELTEK",
  h2: "Campaigns Considered as Part of Your Digital Growth System",
  intro:
    "Meta Ads do not operate in isolation. The website, offer, measurement setup and response process all affect what happens after someone sees an ad. Bixeltek works across marketing and digital technology, which can make it easier to identify when the next improvement belongs outside the ad account.",
  points: [
    {
      title: "We Look Beyond Platform Metrics",
      description:
        "We consider the business action behind the campaign and the quality of available conversion data, not only reach, clicks or cost per lead.",
    },
    {
      title: "We Connect Campaigns to the Website",
      description:
        "When the destination page is part of the problem, web design and development capabilities can support a more coherent post-click experience.",
    },
    {
      title: "We Make Measurement Part of the Plan",
      description:
        "Tracking requirements and reporting expectations are discussed early, with implementation scope and data limitations made clear.",
    },
    {
      title: "We Prioritize Practical Improvements",
      description:
        "Recommendations should explain what to change, why it matters and how the result will be evaluated - not rely on vague promises of scaling or guaranteed growth.",
    },
  ],
};

export const metaAdsInvestment = {
  eyebrow: "SCOPE & INVESTMENT",
  h2: "What Shapes the Cost of Meta Ads Management?",
  intro:
    "The right scope depends on the work required to manage the account responsibly. Before recommending an engagement, clarify campaign goals, existing setup, creative requirements, reporting needs and the support required after a lead or purchase.",
  factors: [
    {
      title: "Campaign Complexity",
      description:
        "The number of offers, markets, audiences, campaign objectives and conversion paths that need active management.",
    },
    {
      title: "Creative Requirements",
      description:
        "Whether the engagement needs strategy and copy only, creative direction, asset adaptation or separately scoped video and image production.",
    },
    {
      title: "Tracking & Integrations",
      description:
        "Whether the current measurement setup is reliable or needs Pixel, Conversions API, analytics or CRM implementation work.",
    },
    {
      title: "Landing Pages & Follow-Up",
      description:
        "Whether existing pages and enquiry processes are ready, or whether development, conversion improvements or automation need to be scoped.",
    },
    {
      title: "Reporting & Collaboration",
      description:
        "The reporting depth, review cadence, internal stakeholders and sales feedback available to support optimization.",
    },
  ],
  note:
    "Media spend paid to Meta is separate from the agency's management fee and any separately scoped production, development or integration work. Confirm the commercial model and inclusions before publishing prices or package promises.",
};

export const metaAdsRelatedServices = [
  {
    title: "Google Ads Management",
    description:
      "Reach people actively searching for products and services through paid search campaigns.",
    href: "/services/google-ads",
  },
  {
    title: "SEO Services",
    description:
      "Build organic search visibility for people researching solutions and comparing providers.",
    href: "/services/seo-services",
  },
  {
    title: "Web Design & Development",
    description:
      "Improve the landing pages and website experience that turn campaign visits into meaningful actions.",
    href: "/services/web-design",
  },
  {
    title: "Analytics, CRO & Automation",
    description:
      "Improve conversion measurement and the workflows that help teams handle new enquiries.",
    href: "/analytics-and-cro-services",
  },
];

export const metaAdsFaqs = [
  {
    question: "What is included in Meta Ads management?",
    answer:
      "The agreed scope can include campaign strategy, account setup or review, campaign management, audience and offer testing, ad copy, creative direction, performance monitoring and reporting. Creative production, landing-page development, Pixel or Conversions API implementation and CRM integrations should be explicitly confirmed because requirements vary by account.",
  },
  {
    question: "Are Meta Ads the same as Facebook Ads?",
    answer:
      "Meta Ads is the broader term for advertising across Meta's placements, which can include Facebook and Instagram. The placements used depend on the campaign objective, available creative, audience and performance data.",
  },
  {
    question: "Are Meta Ads suitable for lead generation?",
    answer:
      "They can be suitable when the offer, audience, creative and follow-up process fit the customer journey. Leads may come through instant forms, website forms or other agreed contact paths. The right approach should consider lead relevance and the team's ability to respond, not only the number of submissions.",
  },
  {
    question: "Should we use instant forms or a website landing page?",
    answer:
      "It depends on the offer and the information needed to qualify a prospect. Instant forms can reduce friction, while a website page can provide more context and support a more considered decision. Compare options against lead quality, conversion data and the follow-up process where volume allows meaningful assessment.",
  },
  {
    question: "Do we need Meta Pixel and Conversions API?",
    answer:
      "Not every account needs the same implementation. Pixel and Conversions API may be relevant for measuring website events, but the right setup depends on the site, event requirements, consent handling, technical access and existing integrations. They should be configured and tested appropriately rather than treated as a guarantee of perfect attribution.",
  },
  {
    question: "How much budget do we need for Meta Ads?",
    answer:
      "There is no single budget that fits every business. Budget planning depends on the offer, market, expected conversion costs, sales economics, creative testing needs and how much data is required to make useful decisions. Agree on a realistic test budget and review plan before launch.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Early delivery and engagement data can appear soon after launch, but reliable conclusions about lead quality or sales may take longer. Timing depends on the campaign objective, budget, conversion volume, buying cycle, tracking quality and how quickly the business follows up. We do not promise a fixed result or timeline.",
  },
  {
    question: "Can you improve campaigns another agency has been managing?",
    answer:
      "Yes, an existing account can be reviewed when the necessary access and history are available. We look at the objectives, campaign structure, creative, conversion tracking, destination pages and available business outcomes before recommending which changes should be prioritized.",
  },
  {
    question: "Can Meta Ads work alongside Google Ads and SEO?",
    answer:
      "Yes. The channels can serve different roles. Meta may help introduce an offer or reconnect with eligible audiences, Google Ads can reach people actively searching, and SEO can build organic visibility over time. Their contribution should be assessed in the context of the customer journey and the measurement available.",
  },
  {
    question: "Do you guarantee leads, sales or ROAS?",
    answer:
      "No responsible campaign plan can guarantee a particular number of leads, sales or return on ad spend. Results depend on factors including the offer, market, competition, budget, creative, website experience, measurement and follow-up. We focus on clear objectives, transparent reporting and evidence-led improvement.",
  },
];

export const metaAdsFinalCta = {
  id: "meta-ads-contact",
  eyebrow: "READY TO REVIEW YOUR CAMPAIGNS?",
  h2: "Let's Identify What Your Meta Ads Need Next",
  description:
    "Whether you're launching a new campaign or trying to improve an existing account, start with the business goal, the current customer journey and the evidence available. We'll discuss the practical priorities before recommending a scope.",
  primaryCta: { label: "Discuss Your Meta Ads", href: "/contact" },
  secondaryCta: { label: "Explore Our Work", href: "/case-studies" },
};

/**
 * Suggested section order (not every section must be used):
 * 1. Hero
 * 2. Positioning / connected acquisition journey
 * 3. Common campaign problems
 * 4. Campaign objectives
 * 5. Campaign objectives
 * 6. Management scope
 * 7. Starting situations
 * 8. Use cases (metaAdsUseCases)
 * 9. Ad-to-conversion journey
 * 10. Creative testing framework (metaAdsCreativeTestingFramework)
 * 11. Measurement and technology
 * 12. Lead quality feedback loop (metaAdsLeadQualityLoop; especially useful for lead-gen audiences)
 * 13. Six-step process
 * 14. Business-model applications
 * 15. Launch readiness checklist (metaAdsLaunchReadiness; optional)
 * 16. Approved Meta-specific case study / testimonial (add only when verified)
 * 17. Why Bixeltek
 * 18. Investment factors
 * 19. Related services
 * 20. FAQs
 * 21. Final CTA
 *
 * This is a content draft, not a guaranteed drop-in replacement for the current UI.
 * Map exports to the actual component interfaces and verify every destination before publishing.
 */
