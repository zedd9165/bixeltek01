export interface GoogleAdsMetadata {
  title: string;
  description: string;
  url: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
  };
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface JumpLinkItem {
  label: string;
  href: string;
}

export interface CaseStudyCard {
  title: string;
  description: string;
  periodLabel?: string;
  linkText: string;
  destination: string;
  metricHighlight?: string;
  image?: any;
}

export interface ProblemCard {
  title: string;
  description: string;
}

export interface ScopeCard {
  title: string;
  description: string;
}

export interface CampaignTypeCard {
  title: string;
  description: string;
  supportingText?: string;
}

export interface ConversionJourneyPanel {
  title: string;
  description: string;
}

export interface ReportingCard {
  title: string;
  description: string;
}

export interface StartingSituationCard {
  title: string;
  description: string;
}

export interface OnboardingStage {
  stageNumber: string;
  title: string;
  description: string;
}

export interface BudgetFeeCard {
  title: string;
  description: string;
}

export interface IndustryCard {
  title: string;
  description: string;
}

export interface RegionalLink {
  label: string;
  destination: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const googleAdsPreviewMetadata: GoogleAdsMetadata = {
  title: "Google Ads Management Services | Google Partner | Bixeltek",
  description:
    "Turn Google Ads spend into qualified leads and sales. Bixeltek connects PPC management, landing pages and conversion tracking. Request a free account review.",
  url: "https://bixeltek.com/services/google-ads",
  canonical: "https://bixeltek.com/services/google-ads",
  openGraph: {
    title: "Google Ads Management Built Around Customer Acquisition",
    description:
      "Reach relevant demand, improve the journey from click to enquiry, and understand what your advertising delivers. Explore Google Ads management with Bixeltek.",
  },
};

export const pageNavigationData = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Google Ads Management" },
  ],
  jumpLinks: [
    { label: "Results", href: "#results" },
    { label: "What's Included", href: "#included" },
    { label: "Campaign Types", href: "#campaign-types" },
    { label: "Our Process", href: "#process" },
    { label: "Fees & Budget", href: "#fees-budget" },
    { label: "FAQs", href: "#faqs" },
  ],
};

export const heroPreviewData = {
  eyebrow: "GOOGLE ADS MANAGEMENT · GOOGLE PARTNER AGENCY",
  h1: "Google Ads Management That Turns Search Intent Into Customers",
  p1: "We help reach people looking for what you sell or Offer, give them a clear reason to choose you, and measure what happens after they click. Bixeltek connects Google Ads strategy, landing pages and conversion tracking to help your business generate qualified enquiries and sales.",
  p2: "Whether you are launching your first campaign or improving an existing account, we build the approach around your market, budget and customer acquisition goals.",
  primaryButtonText: "Talk to our Google Ads Expert",
  primaryButtonHref: "#google-ads-review",
  secondaryLinkText: "Explore Our Results",
  secondaryLinkHref: "#results",
  trustStrip: [
    "Businesses Across India, Canada, the USA & Saudi Arabia",
    "Campaigns, Websites & Measurement",
  ],
};

export const selectedWorkPreviewData = {
  eyebrow: "SELECTED CLIENT WORK",
  h2: "See How We Approach Real Acquisition Challenges",
  intro:
    "A local service needs relevant calls. A dental practice needs treatment enquiries. An online store needs purchases at a workable acquisition cost. These projects show how we adapt the campaign and customer journey to the business behind them.",
  cards: [
    {
      title: "Canadian Dental Practice",
      description:
        "Treatment-focused search advertising designed to reach people looking for emergency care, implants and other dental services. The published 30-day snapshot reports 212 phone calls from Google Ads and 72 new patient leads, tracked as separate measures.",
      periodLabel: "March 18–April 16, 2025",
      linkText: "Explore the Dental Case Study",
      destination: "/case-studies/digital-marketing-for-dentists-case-study",
      metricHighlight: "212 Calls · 72 Leads",
    },
    {
      title: "Eazy Bike Repairs, Hyderabad",
      description:
        "A campaign built around the business's doorstep servicing offer and relevant local searches. The project combined account recovery, service-specific advertising and ongoing optimisation to rebuild its online enquiry channel.",
      linkText: "Explore the Bike Repair Case Study",
      destination:
        "/case-studies/google-ads-case-study-bike-repair-hyderabad",
      metricHighlight: "340+ Leads Rebuilt",
    },
    {
      title: "TumbleWash, Gurgaon",
      description:
        "A local laundry acquisition project addressing irrelevant traffic, inefficient spending and a weak landing-page journey. The work brought keyword targeting, mobile conversion improvements and campaign management into one approach.",
      linkText: "Explore the Laundry Case Study",
      destination: "/case-studies/Tumblewash-Casestudy",
      metricHighlight: "436% ROAS · 477+ Calls",
    },
  ],
  supportingNote:
    "Results reflect individual projects and reporting periods. Calls, leads, bookings and customers are different measures; outcomes depend on the market, budget, offer and sales process.",
};

export const businessProblemPreviewData = {
  eyebrow: "WHERE PERFORMANCE BREAKS DOWN",
  h2: "Your Advertising Should Make Customer Acquisition Clearer",
  intro:
    "Advertising can generate activity while leaving the business with unanswered questions. Are the enquiries relevant? Which services attract customers? Is the landing page helping people act? We examine the journey from search to sale so the next decision is based on evidence.",
  cards: [
    {
      title: "Spending Without Enough Relevant Enquiries",
      description:
        "Broad targeting, irrelevant searches and unclear offers can consume a budget without creating useful opportunities. We examine where spending goes and align campaigns with the services, products and locations your business can serve.",
    },
    {
      title: "Clicks That Do Not Become Customers",
      description:
        "The ad may be doing its job while the destination page creates doubt or makes contact difficult. We assess message consistency, mobile usability, trust and the steps needed to enquire or buy.",
    },
    {
      title: "Reports That Leave the Business Guessing",
      description:
        "An enquiry count cannot tell you how many opportunities became customers. We define meaningful conversions and identify the sales or booking feedback needed to assess acquisition performance.",
    },
    {
      title: "Unconnected Bidding & Commercial Margins",
      description:
        "Automated bidding without margin awareness can prioritize low-value volume over profitable revenue. We align campaign bids and targeting with the commercial value of each lead or transaction.",
    },
  ],
};

export const managementScopePreviewData = {
  eyebrow: "THE MANAGEMENT SCOPE",
  h2: "What Our Google Ads Management Covers",
  intro:
    "We manage the decisions that shape campaign performance: what to advertise, who to reach, how to allocate the budget and what to measure. Your proposal defines the work required for your account and the support included after launch.",
  cards: [
    {
      title: "Strategy & Account Assessment",
      description:
        "We review your business goals, priority offers, target markets and existing performance. Keyword demand, competition and customer economics help establish where paid search can contribute and which opportunities deserve the budget.",
    },
    {
      title: "Campaign Setup & Restructuring",
      description:
        "We build or reorganise campaigns around relevant services, products and search intent. The work includes targeting, keyword selection, negative keywords, ads and assets, with a structure that supports clear analysis and budget decisions.",
    },
    {
      title: "Conversion Tracking & Validation",
      description:
        "We identify the actions that matter and assess whether they are measured correctly. Depending on the scope, this may include GA4, Google Tag Manager, purchase events, form submissions, call measurement and integration with existing systems.",
    },
    {
      title: "Ongoing Campaign Optimisation",
      description:
        "We review search terms, spending, conversion trends and campaign settings to guide changes. Optimisation can include exclusions, ad testing, bidding adjustments and budget reallocation, informed by performance and lead-quality feedback.",
    },
    {
      title: "Landing-Page Assessment",
      description:
        "We assess whether the page matches the ad and makes the next action clear. Recommendations address the offer, page structure, trust signals, forms and mobile experience. Development or a new landing page can be scoped where needed.",
    },
    {
      title: "Reporting & Performance Reviews",
      description:
        "Reporting explains what the account delivered, where performance changed and what we recommend next. Your engagement defines the reporting cadence, review meetings and metrics relevant to your business.",
    },
  ],
  scopeNote:
    "Landing-page development, extensive tracking repairs, CRM implementation, creative production and account recovery are included only where specified in your proposal.",
};

export const campaignSelectionPreviewData = {
  eyebrow: "THE RIGHT CAMPAIGN FOR THE OBJECTIVE",
  h2: "Google Ads Campaigns Matched to How Your Customers Buy",
  intro:
    "Campaign selection starts with the business objective and available evidence. We assess demand, budget, measurement and creative requirements before recommending where to advertise.",
  cards: [
    {
      title: "Google Search Ads",
      description:
        "Reach people actively looking for your products or services. Search campaigns can support local enquiries, treatment searches, B2B demand and other journeys where the customer expresses a relevant need. We align keywords, ads and landing pages with that intent.",
      supportingText:
        "AI Max for Search can expand targeting and adapt assets. We assess its suitability and test it with appropriate measurement and controls.",
    },
    {
      title: "Shopping Ads",
      description:
        "Help shoppers discover products with images, prices and relevant product information. For ecommerce accounts, we assess feed quality, catalogue structure, purchase tracking and commercial priorities to guide campaign setup and optimisation.",
    },
    {
      title: "Performance Max",
      description:
        "Use a campaign that can reach customers across Google's advertising inventory. We assess conversion goals, product feeds where relevant, assets and available controls so the campaign has a clear role in the acquisition strategy.",
    },
    {
      title: "Display & YouTube Advertising",
      description:
        "Introduce your business, explain the offer and support consideration through visual advertising. These campaigns require appropriate creative and measurement so their contribution can be assessed against the role they play in the customer journey.",
    },
    {
      title: "Remarketing",
      description:
        "Reconnect with eligible audiences who have previously engaged with your business. We consider the purchase cycle, audience size and applicable policies to determine whether remarketing has a useful role in bringing interested visitors back.",
    },
  ],
};

export const conversionJourneyPreviewData = {
  eyebrow: "AFTER THE CLICK",
  h2: "Give Every Relevant Click a Better Path to Conversion",
  intro:
    "Campaign performance depends on the experience that follows the ad. Our web development and measurement capabilities help address the gaps between attracting a visitor, receiving an enquiry and understanding its value.",
  panels: [
    {
      title: "A Page That Matches the Search",
      description:
        "Someone looking for a specific treatment, service or product should arrive at a page that answers that need. We assess whether the destination explains the offer, establishes trust and makes the next step easy to take.",
    },
    {
      title: "Measurement That Reflects the Business",
      description:
        "We distinguish useful actions from incidental activity. For a service business, a phone-number click and a qualified call mean different things. For a store, purchase tracking needs accurate values so campaign decisions reflect sales performance.",
    },
    {
      title: "A Follow-Up Process That Supports Sales",
      description:
        "The client's response process affects whether an enquiry progresses. Where required, we can scope CRM connections, lead routing, notifications and follow-up automation to help the team handle opportunities more consistently.",
    },
  ],
  supportingLink: {
    text: "Explore Our Web Design & Development Services",
    destination: "/services/web-design",
  },
};

export const reportingLeadQualityPreviewData = {
  eyebrow: "MEASURE THE BUSINESS OUTCOME",
  h2: "Understand What Your Advertising Is Bringing Into the Business",
  intro:
    "We establish the primary measures before optimisation begins. With reliable tracking and client feedback, campaign reporting can show where relevant enquiries or sales originate and which opportunities justify further investment.",
  cards: [
    {
      title: "Service & Local Businesses",
      description:
        "Relevant calls, qualified enquiries, booked appointments or jobs, and acquisition cost where booking or sales data is available.",
    },
    {
      title: "Ecommerce Businesses",
      description:
        "Purchases, conversion value, advertising return and acquisition cost, considered alongside the margins and repeat-purchase behaviour that make growth commercially useful.",
    },
    {
      title: "B2B & Longer Sales Cycles",
      description:
        "Qualified enquiries, sales opportunities and pipeline progress, with closed-business reporting where the CRM and attribution process support it.",
    },
  ],
  supportingParagraph:
    "Better feedback improves campaign decisions. Where appropriate, we can scope offline conversion imports so qualified or completed outcomes inform optimisation. We agree the data requirements and responsibilities with your team.",
};

export const startingSituationsPreviewData = {
  eyebrow: "START FROM WHERE YOU ARE",
  h2: "Launch a New Account or Improve the One You Have",
  cards: [
    {
      title: "New to Google Ads?",
      description:
        "Start by assessing whether there is relevant demand, a suitable offer and enough budget to test the opportunity. We review your website and measurement requirements, then recommend a focused launch plan with clear priorities.",
    },
    {
      title: "Already Running Campaigns?",
      description:
        "We assess the account's structure, spending, conversion setup and customer journey to identify what should change. The recommendations may involve focused improvements or a broader restructure, depending on what the evidence shows.",
    },
  ],
  buttonText: "Talk to an Expert",
  buttonHref: "#google-ads-review",
};

export const onboardingTimelinePreviewData = {
  eyebrow: "HOW THE ENGAGEMENT WORKS",
  h2: "A Clear Plan for Launch, Learning & Improvement",
  intro:
    "The first 90 days establish the foundations for informed campaign decisions. Timing depends on account access, tracking readiness, approvals and the buying cycle. We confirm delivery milestones during onboarding.",
  stages: [
    {
      stageNumber: "Stage 1",
      title: "Assess & Prioritise",
      description:
        "We agree the business objective, review existing data and confirm account access. The initial plan identifies campaign priorities, measurement gaps, website requirements and the budget available to address them.",
    },
    {
      stageNumber: "Stage 2",
      title: "Build & Validate",
      description:
        "We prepare the agreed campaigns, ads, targeting and measurement. Launch follows the required checks and approvals, including confirmation that the destination pages and conversion actions are ready.",
    },
    {
      stageNumber: "Stage 3",
      title: "Review Early Performance",
      description:
        "We examine search relevance, spending, conversion behaviour and enquiry feedback. Early findings guide exclusions, ad changes and budget decisions while we assess whether enough data has accumulated for wider changes.",
    },
    {
      stageNumber: "Stage 4",
      title: "Improve & Evaluate Expansion",
      description:
        "We prioritise improvements based on campaign and business evidence. Expansion may involve another service, location or campaign type when performance, available demand and operational capacity justify it.",
    },
  ],
  supportingParagraph:
    "Your team provides timely approvals, accurate business information and feedback on enquiry quality or sales. We manage the agreed campaign work and explain how that feedback affects our recommendations.",
};

export const budgetFeesPreviewData = {
  eyebrow: "PLAN THE INVESTMENT",
  h2: "Understand Your Google Ads Budget and Management Fees",
  intro:
    "The right investment depends on your market, offer and acquisition economics. We separate media spending from management and implementation costs so you can assess the full commitment before work begins.",
  cards: [
    {
      title: "Advertising Budget",
      description:
        "This is the amount allocated to Google for advertising. We assess demand, competition and likely click costs alongside the conversion journey to recommend a practical starting budget and explain the assumptions behind it.",
    },
    {
      title: "Management Fee",
      description:
        "This covers the agreed strategy, campaign management, optimisation and reporting. Pricing reflects the scope, markets, account complexity and support required. Your proposal sets out the fee and included services.",
    },
    {
      title: "Setup & Supporting Work",
      description:
        "Campaign builds, landing pages, tracking repairs, product-feed work or CRM integrations may require a separate implementation scope. These costs are identified before approval so the ongoing engagement is clear.",
    },
  ],
  supportingParagraph:
    "Your proposal also confirms payment terms, reporting arrangements, engagement duration, cancellation terms and account access. Client-owned Google Ads accounts remain accessible to the client, with Bixeltek connected for the agreed management work.",
  buttonText: "Get in Touch",
  buttonHref: "#google-ads-review",
};

export const businessMarketsPreviewData = {
  eyebrow: "BUILT AROUND YOUR BUSINESS MODEL",
  h2: "Acquisition Strategies for Different Buying Journeys",
  intro:
    "Your customer's decision process shapes the campaign. We adapt the approach to what people search for, what they need to trust and how an enquiry or purchase progresses in your business.",
  cards: [
    {
      title: "Dental & Healthcare Practices",
      description:
        "Treatment and location searches, informative landing pages and a clear route to an appointment enquiry. Campaign priorities reflect the services offered, available capacity and relevant advertising requirements.",
    },
    {
      title: "Local & Multi-Location Services",
      description:
        "Service-area targeting, relevant calls and quote requests, with a clear connection to the team responsible for each location. We consider geography, seasonality and service priorities when allocating the budget.",
    },
    {
      title: "Ecommerce & Consumer Brands",
      description:
        "Product discovery and purchase journeys informed by catalogue quality, conversion data and commercial priorities. Campaign decisions consider which products and customers can support viable growth.",
    },
    {
      title: "B2B & Established Businesses",
      description:
        "Advertising that helps prospective buyers understand the offer and make a relevant enquiry. Measurement considers lead quality and the longer path from first contact to a sales opportunity.",
    },
  ],
  regionalIntro:
    "We support businesses across India, Canada, the USA and Saudi Arabia, adapting the work to the market, target locations and customer journey.",
  regionalLinks: [
    { label: "Hyderabad", destination: "/google-ads-agency-hyderabad" },
    { label: "Toronto", destination: "/toronto/google-ads-management" },
    { label: "Mississauga", destination: "mississauga/google-ads" },
    { label: "Vancouver", destination: "/vancouver/google-ads" },
  ],
};

export const faqPreviewData = {
  h2: "Questions About Google Ads Management",
  faqs: [
    {
      question: "What does a Google Ads management agency do?",
      answer:
        "A management agency plans, builds and improves campaigns on your behalf. The work typically includes targeting, keywords, ads, bidding, budget allocation and reporting. At Bixeltek, the scope also considers measurement and the destination page so campaign decisions connect to the customer journey.",
    },
    {
      question: "How much should we spend on Google Ads?",
      answer:
        "The budget depends on your location, industry, demand and acquisition goals. It should be sufficient to test relevant searches and learn from meaningful outcomes. We assess those factors and your website readiness before recommending a starting budget and explaining its assumptions.",
    },
    {
      question: "Is the advertising budget included in your management fee?",
      answer:
        "Media spend and management are separate costs. Your proposal identifies the management fee, advertising budget and any implementation work required. Billing arrangements are agreed before launch so you understand what is paid to Google and what covers Bixeltek's services.",
    },
    {
      question: "How quickly can campaigns launch and produce results?",
      answer:
        "Launch depends on account access, approvals, tracking and landing-page readiness. Campaigns may begin attracting traffic once eligible to serve, but dependable performance takes time to assess. The buying cycle and volume of useful conversion data influence when meaningful conclusions can be drawn.",
    },
    {
      question: "Can you improve our existing account?",
      answer:
        "Yes. We assess the current structure, targeting, spending and conversion setup before recommending changes. Access to account data and feedback on enquiry quality help us distinguish problems in the campaign from issues in the website or sales process.",
    },
    {
      question: "Do we need a new website or landing page?",
      answer:
        "Not necessarily. We first assess whether the current page answers the searcher's need, establishes trust and supports the intended action. Focused improvements may be enough. A new landing page or rebuild is proposed only where the requirements justify that work.",
    },
    {
      question: "How do you measure whether leads are qualified?",
      answer:
        "We agree what a qualified enquiry means for your business and identify how your team records it. Call outcomes, booking data or CRM status can provide useful feedback. Where systems support it, deeper conversion measurement can be separately scoped to inform campaign optimisation.",
    },
    {
      question: "Do you manage Performance Max and use AI Max?",
      answer:
        "We assess Performance Max where it fits the campaign objective and available data. AI Max for Search is a separate suite of Search features. Either should have a defined role, appropriate controls and a measurement approach that helps evaluate its contribution.",
    },
    {
      question: "Do you guarantee leads, revenue or return on ad spend?",
      answer:
        "We do not promise a fixed outcome across different businesses. Results depend on competition, budget, the offer, the website and sales execution. We agree the management scope, establish measurement and use performance evidence to guide improvements and investment decisions.",
    },
    {
      question: "Who owns the Google Ads account?",
      answer:
        "The proposed management arrangement uses a client-owned account with access retained by your business. Bixeltek connects through the appropriate management permissions. Account access, billing responsibilities and the handover process are confirmed in the engagement terms before work starts.",
    },
    {
      question: "Can you help with disapprovals or a suspended account?",
      answer:
        "We can assess the issue and scope support with policy checks, corrections and the relevant review process. Reinstatement and approval decisions remain with Google. Recovery work is separately agreed when required, and no universal recovery time is promised.",
    },
    {
      question: "Do we need to buy your other services?",
      answer:
        "Google Ads management can be scoped as a standalone engagement. If the website, tracking or enquiry process needs work, we explain why and identify the options. Your proposal confirms which supporting services, if any, are included.",
    },
  ],
};

export const finalOfferPreviewData = {
  eyebrow: "YOUR NEXT STEP",
  h2: "Find Out What Your Google Ads Account Needs Next",
  intro:
    "If you are already advertising, request a free initial account review. We assess the available campaign data and the main conversion journey to identify visible gaps and recommend priorities. If you are preparing to launch, we assess the opportunity and the foundations needed to start.",
  points: [
    {
      title: "What the Initial Review Covers",
      description:
        "Search relevance and spending, campaign structure, conversion measurement and the destination-page journey. The depth of the assessment depends on available access and information.",
    },
    {
      title: "What You Receive",
      description:
        "A concise summary of the main observations and recommended next steps, discussed with our team. Detailed technical audits, implementation plans and development work are scoped separately where required.",
    },
    {
      title: "What We Need",
      description:
        "Your website, target market and business objective. For an existing account, we arrange appropriate access to review performance. You can begin the enquiry without providing account credentials.",
    },
  ],
  form: {
    title: "Request Your Free Google Ads Review",
    submitButton: "Request My Free Review",
    microcopy:
      "No obligation. We will contact you to confirm the review requirements and next steps.",
    privacyText:
      "By submitting this form, you agree that Bixeltek may contact you about your enquiry. Read our Privacy Policy to understand how we handle your information.",
    privacyDestination: "/privacy-policy",
    successHeading: "Your Review Request Has Been Received",
    successMessage:
      "Thank you for contacting Bixeltek. Our team will review your enquiry and contact you about the next step. If account access is required, we will explain how to grant the appropriate permissions.",
    alternativeContact:
      "Prefer to speak first? Call +91 9100032301 or email hello@bixeltek.com.",
    phoneLink: "tel:+919100032301",
    emailLink: "mailto:hello@bixeltek.com",
  },
};

export const googleAdsOverviewData = {
  eyebrow: "WHAT IS GOOGLE ADS?",
  h2: "Capturing High-Intent Demand at the Exact Moment Customers Search",
  intro:
    "Google Ads is Google's auction based advertising network that positions your business in front of prospects precisely when they have active intent to purchase or enquire. Rather than pushing disruptive messages to cold audiences, Google Ads lets you capture ready-to-buy demand across Google Search, Shopping, YouTube, Maps, and high authority display networks.",
  body: [
    "Every search query represents a customer problem seeking an immediate solution. By combining exact intent targeting, geo location regions, and conversion-engineered landing pages, Google Ads transforms advertising from a speculative expense into a dependable customer acquisition channel.",
    "At Bixeltek, we bridge the critical gap between ad spend and business revenue. We don't just optimize for clicks or vanity impressions; we structure bid strategies, attribution tracking, and user journeys so your ad budget consistently converts into qualified phone calls, consultation bookings, and measurable commercial transactions."
  ],
  closingCopy:
    "Target active search intent, eliminate non-converting ad spend, and scale inbound pipeline with certified Google Partner precision.",
};

export const googleAdsWhyChooseData = {
  eyebrow: "WHY CHOOSE BIXELTEK",
  h2: "Data-Driven Precision, Verified Expertise & Zero Wasted Ad Spend",
  intro:
    "We don't manage Google Ads in isolation. We operate as your dedicated commercial growth engine—connecting smart bidding, landing-page conversion architecture, and deep CRM revenue attribution into one cohesive system.",
  points: [
    { title: "Certified Official Google Partner Agency with verified track record" },
    { title: "Commercial-first approach: optimizing for revenue, not vanity clicks" },
    { title: "Custom landing page alignment to maximize post-click conversion rates" },
    { title: "Full GA4 & Google Tag Manager server-side attribution tracking" },
    { title: "100% transparent client account ownership with direct spend visibility" },
  ],
  closingCopy:
    "Work directly with certified PPC strategists focused entirely on reducing your customer acquisition cost.",
};

export const googleAdsRelatedServicesData = {
  eyebrow: "CONNECTED GROWTH SOLUTIONS",
  h2: "Our Other Services That Multiply Your Google Ads Performance",
  intro:
    "Paid search thrives when backed by strong organic authority, high-converting web experiences, and relentless conversion rate optimization. Explore our connected digital solutions engineered to scale your business.",
  cards: [
    {
      title: "Web Design & Development",
      description:
        "High-performance, conversion-focused websites and dedicated landing pages built to turn advertising clicks into confirmed leads and revenue.",
      linkText: "Explore Web Design",
      destination: "/services/web-design",
    },
    {
      title: "SEO & Search Visibility",
      description:
        "Dominate top organic rankings alongside your paid search campaigns. Build lasting authority and sustainable customer acquisition across Google.",
      linkText: "Explore SEO Services",
      destination: "/services/seo-services",
    },
    {
      title: "Analytics & CRO Services",
      description:
        "Optimize the complete post-click experience with deep user behavior analytics, A/B testing, and conversion rate optimization that lower acquisition costs.",
      linkText: "Explore CRO & Analytics",
      destination: "/services/conversion-rate-optimization",
    },
    {
      title: "Ecommerce Web Solutions",
      description:
        "Custom Shopify, WooCommerce, and headless ecommerce platforms built for seamless product discovery, checkout optimization, and Google Shopping synergy.",
      linkText: "Explore Ecommerce",
      destination: "/services/ecommerce-development",
    },
  ],
};

export const googleAdsTechnologiesData = [
  {
    name: "Google Ads",
    iconKey: "googleads",
    iconColor: "text-[#4285F4]",
  },
  {
    name: "Google Analytics 4",
    iconKey: "analytics",
    iconColor: "text-[#E37400]",
  },
  {
    name: "Google Tag Manager",
    iconKey: "tagmanager",
    iconColor: "text-[#246FDB]",
  },
  {
    name: "Google Merchant Center",
    iconKey: "google",
    iconColor: "text-[#34A853]",
  },
  {
    name: "Looker Studio",
    iconKey: "looker",
    iconColor: "text-[#4285F4]",
  },
  {
    name: "Meta Ads Manager",
    iconKey: "meta",
    iconColor: "text-[#0081FB]",
  },
  {
    name: "Semrush",
    iconKey: "semrush",
    iconColor: "text-[#FF642D]",
  },
  {
    name: "Shopify / Feeds",
    iconKey: "shopify",
    iconColor: "text-[#96BF48]",
  },
  {
    name: "WordPress / Forms",
    iconKey: "wordpress",
    iconColor: "text-[#21759B]",
  },
  {
    name: "HubSpot CRM",
    iconKey: "hubspot",
    iconColor: "text-[#FF7A59]",
  },
  {
    name: "Zapier / Webhooks",
    iconKey: "zapier",
    iconColor: "text-[#FF4A00]",
  },
];




// ============================================================
// CERTIFICATES & BADGES DATA
// ============================================================

export interface GoogleAdsCertificateBadge {
  title: string;
  subtitle?: string;
  category?: string;
  image?: any;
  badgeLabel?: string;
}

export const googleAdsCertificatesData = {
  eyebrow: "OFFICIAL GOOGLE CERTIFICATIONS",
  h2: "Our Certificates",
  intro:
    "Our team holds verified Google certifications across search, shopping, display advertising, and web measurement.",
};
