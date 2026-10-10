// data/services/grow.ts

export interface GrowMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface JumpLinkItem {
  label: string;
  href: string;
}

export interface GrowHeroData {
  eyebrow: string;
  h1: string;
  p1: string;
  p2: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryLinkText: string;
  secondaryLinkHref: string;
  microcopy: string;
}

export interface GrowOverviewData {
  eyebrow: string;
  h2: string;
  intro: string;
  paragraphs: string[];
}

export interface GrowCapability {
  number: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  links?: {
    label: string;
    href: string;
  }[];
  ctaText: string;
  ctaHref: string;
}

export interface GrowCaseStudy {
  title: string;
  category: string;
  description: string;
  metrics: {
    value: string;
    label: string;
  }[];
  href: string;
  ctaText: string;
}

export interface GrowJourneyPoint {
  title: string;
  description: string;
}

export interface GrowProcessStage {
  number: string;
  title: string;
  description: string;
}

export interface GrowEngagementOption {
  title: string;
  description: string;
  bestFor: string;
  items: string[];
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
}

export interface GrowWhyChoosePoint {
  title: string;
  description: string;
}

export interface GrowRelatedService {
  title: string;
  description: string;
  href: string;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GrowFinalCTAData {
  eyebrow: string;
  h2: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
}


/* =========================================================
   METADATA
   ========================================================= */

export const growMetadata: GrowMetadata = {
  title:
    "Digital Growth Services | Google Ads, SEO, CRO & Performance Marketing | Bixeltek",

  description:
    "Build a more measurable growth engine with Google Ads, SEO, Meta Ads, conversion optimization, landing pages and analytics from Bixeltek.",

  keywords: [
    "digital growth services",
    "growth marketing services",
    "Google Ads management",
    "SEO services",
    "Meta Ads management",
    "conversion rate optimization",
    "CRO services",
    "performance marketing",
    "digital marketing services",
    "lead generation services",
  ],

  canonical:
    "https://bixeltek.com/services/grow",
};


/* =========================================================
   BREADCRUMBS
   ========================================================= */

export const growBreadcrumbs: BreadcrumbItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Grow",
  },
];


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

export const growJumpLinks: JumpLinkItem[] = [
  {
    label: "Overview",
    href: "#overview",
  },
  {
    label: "What We Do",
    href: "#capabilities",
  },
  {
    label: "Growth Work",
    href: "#selected-work",
  },
  {
    label: "Growth System",
    href: "#growth-system",
  },
  {
    label: "Our Approach",
    href: "#process",
  },
  {
    label: "Why Bixeltek",
    href: "#why-bixeltek",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
];


/* =========================================================
   HERO
   ========================================================= */

export const growHero: GrowHeroData = {
  eyebrow:
    "GROW · GOOGLE ADS · SEO · META ADS · CRO · ANALYTICS",

  h1:
    "Turn More of the Right Demand Into Customers and Revenue",

  p1:
    "Getting more traffic is only part of growth. Your marketing needs to reach the right people, give them a reason to act and make it possible to understand which efforts are actually contributing to the business.",

  p2:
    "We bring paid search, paid social, SEO, landing pages, conversion optimization and measurement together around your business goals — whether that means more qualified enquiries, ecommerce revenue, booked appointments or another measurable outcome.",

  primaryButtonText:
    "Talk to an Expert",

  primaryButtonHref:
    "#growth-project",

  secondaryLinkText:
    "Explore Our Growth Work",

  secondaryLinkHref:
    "#selected-work",

  microcopy:
    "Already running campaigns, starting from scratch or getting traffic without enough business from it? We can assess where the growth journey is losing opportunities before recommending what to change.",
};


/* =========================================================
   OVERVIEW
   ========================================================= */

export const growOverview: GrowOverviewData = {
  eyebrow:
    "THE GROWTH LAYER",

  h2:
    "Growth Is More Than Sending More People to Your Website",

  intro:
    "A growth channel only creates business value when the right audience can find you, understand the offer, take the next step and move through a measurable customer journey.",

  paragraphs: [
    "That means the work does not always begin with another advertising campaign. Sometimes the biggest opportunity is improving search visibility. Sometimes it is fixing the landing page, tightening the offer, improving conversion tracking or understanding why existing traffic is not turning into enquiries or purchases.",

    "We look at the growth journey as a connected system rather than treating Google Ads, SEO, Meta Ads, CRO and analytics as completely separate activities.",

    "The right mix depends on your market, customer journey, existing demand, sales cycle, competition, available data and business goals. We recommend the channels and improvements that make sense for the situation rather than forcing every business into the same marketing package.",
  ],
};


/* =========================================================
   WHAT WE DO
   ========================================================= */

export const growCapabilities: GrowCapability[] = [
  {
    number: "01",

    label: "PAID SEARCH",

    title:
      "Google Ads Management",

    description:
      "Capture existing search demand with campaigns structured around the products, services, locations and customer actions that matter to the business.",

    items: [
      "Search campaigns",
      "Performance Max",
      "Local and location-based campaigns",
      "Lead generation campaigns",
      "Ecommerce campaigns",
      "Conversion tracking and optimization",
    ],

    ctaText:
      "Explore Google Ads",

    ctaHref:
      "/services/google-ads",
  },

  {
    number: "02",

    label: "ORGANIC SEARCH",

    title:
      "SEO & Search Visibility",

    description:
      "Build sustainable search visibility around the services, products, locations and questions your potential customers actually use when looking for a solution.",

    items: [
      "Technical SEO",
      "On-page optimization",
      "Service and commercial pages",
      "Local SEO",
      "Content strategy",
      "Search performance analysis",
    ],

    ctaText:
      "Explore SEO Services",

    ctaHref:
      "/services/seo-services",
  },

  {
    number: "03",

    label: "PAID SOCIAL",

    title:
      "Meta Ads & Social Acquisition",

    description:
      "Use paid social to reach relevant audiences, test offers and creative angles, and create demand where search intent alone may not be enough.",

    items: [
      "Meta advertising",
      "Audience targeting",
      "Lead generation campaigns",
      "Creative testing",
      "Retargeting",
      "Campaign performance analysis",
    ],

    ctaText:
      "Discuss Meta Ads",

    ctaHref:
      "#growth-project",
  },

  {
    number: "04",

    label: "CONVERSION",

    title:
      "Landing Pages & CRO",

    description:
      "Improve what happens after someone reaches your website by identifying friction, strengthening important journeys and testing changes that can increase meaningful actions.",

    items: [
      "Conversion and funnel analysis",
      "Landing page optimization",
      "User behaviour analysis",
      "Form and lead-flow optimization",
      "Ecommerce conversion optimization",
      "Experimentation and testing",
    ],

    ctaText:
      "Explore CRO Services",

    ctaHref:
      "/services/conversion-rate-optimization",
  },

  {
    number: "05",

    label: "MEASUREMENT",

    title:
      "Analytics & Conversion Measurement",

    description:
      "Connect the important actions in the customer journey to reliable measurement so marketing decisions are based on useful business data rather than surface-level traffic numbers.",

    items: [
      "Conversion tracking",
      "Analytics configuration",
      "Lead and enquiry measurement",
      "Campaign attribution",
      "Funnel reporting",
      "Performance analysis",
    ],

    ctaText:
      "Discuss Your Measurement Setup",

    ctaHref:
      "#growth-project",
  },

  {
    number: "06",

    label: "GROWTH STRATEGY",

    title:
      "Growth Strategy & Channel Planning",

    description:
      "Bring search, social, content, conversion and measurement together around clear business goals so each channel has a defined role in the growth journey.",

    items: [
      "Growth opportunity analysis",
      "Channel planning",
      "Audience and market research",
      "Offer and positioning review",
      "Growth funnel planning",
      "Performance priorities",
    ],

    ctaText:
      "Discuss Your Growth Plan",

    ctaHref:
      "#growth-project",
  },
];


/* =========================================================
   SELECTED GROWTH WORK
   ========================================================= */

export const growSelectedWork: GrowCaseStudy[] = [
  {
    title:
      "TumbleWash",

    category:
      "PAID SEARCH · FRANCHISE GROWTH",

    description:
      "A performance-focused Google Ads program built around generating measurable customer demand for a growing franchise business.",

    metrics: [
      {
        value: "436%",
        label: "ROAS",
      },
      {
        value: "477+",
        label: "Calls Generated",
      },
    ],

    href:
      "/case-studies",

    ctaText:
      "View Case Study",
  },

  {
    title:
      "Canadian Dental Practice",

    category:
      "GOOGLE ADS · LEAD GENERATION",

    description:
      "A search-focused acquisition campaign designed to generate measurable patient enquiries for a dental practice.",

    metrics: [
      {
        value: "212",
        label: "Calls",
      },
      {
        value: "72",
        label: "Leads",
      },
    ],

    href:
      "/case-studies",

    ctaText:
      "View Case Study",
  },

  {
    title:
      "Eazy Bike Repairs",

    category:
      "GOOGLE ADS · LOCAL LEAD GENERATION",

    description:
      "A local search campaign focused on capturing high-intent demand from people actively looking for bike repair services.",

    metrics: [
      {
        value: "340+",
        label: "Leads Generated",
      },
    ],

    href:
      "/case-studies",

    ctaText:
      "View Case Study",
  },
];


/* =========================================================
   THE GROWTH SYSTEM
   ========================================================= */

export const growJourney = {
  eyebrow:
    "THE GROWTH JOURNEY",

  h2:
    "Demand Only Becomes Growth When the Journey Can Carry It",

  intro:
    "A campaign can generate clicks without generating enough business. We consider what happens across the journey from discovery to conversion so channel performance is not evaluated in isolation.",

  points: [
    {
      title:
        "1. Reach the Right Audience",

      description:
        "Search, social and organic strategies should focus on audiences and demand that have a meaningful relationship with what the business actually sells.",
    },

    {
      title:
        "2. Match the Intent",

      description:
        "The message, offer and destination should make sense for why someone clicked, searched or arrived on the page in the first place.",
    },

    {
      title:
        "3. Build the Right Experience",

      description:
        "The website, landing page or store should make the value clear, answer important questions and help visitors understand why they should take the next step.",
    },

    {
      title:
        "4. Make the Next Step Clear",

      description:
        "Forms, calls, bookings, purchases and other important actions should be easy to understand and complete without unnecessary friction.",
    },

    {
      title:
        "5. Measure the Business Outcome",

      description:
        "Clicks and sessions can be useful indicators, but the important measurement depends on the business — such as qualified leads, calls, bookings, purchases or revenue.",
    },

    {
      title:
        "6. Learn & Improve",

      description:
        "Performance data should feed the next decision, helping refine audiences, campaigns, pages, offers and budgets based on what is actually producing useful results.",
    },
  ] as GrowJourneyPoint[],
};


/* =========================================================
   HOW WE APPROACH GROWTH
   ========================================================= */

export const growProcess: GrowProcessStage[] = [
  {
    number: "01",

    title:
      "Understand the Business & Demand",

    description:
      "We look at the business model, customers, offer, market, existing channels and commercial goals before deciding where growth opportunities may exist.",
  },

  {
    number: "02",

    title:
      "Audit the Existing Journey",

    description:
      "Where relevant, we review campaigns, search visibility, landing pages, analytics, conversion paths and existing performance to understand what is already working and where opportunities are being lost.",
  },

  {
    number: "03",

    title:
      "Prioritize the Opportunities",

    description:
      "Not every channel or improvement deserves attention at the same time. We prioritize opportunities based on business impact, evidence, feasibility and available resources.",
  },

  {
    number: "04",

    title:
      "Build the Growth System",

    description:
      "Depending on the engagement, this can include campaign setup, SEO improvements, landing pages, tracking, CRO work, creative testing or other agreed growth activities.",
  },

  {
    number: "05",

    title:
      "Launch, Measure & Learn",

    description:
      "Performance is reviewed against meaningful conversion signals rather than simply activity metrics, allowing decisions to be made from what the data is showing.",
  },

  {
    number: "06",

    title:
      "Improve What the Data Reveals",

    description:
      "Growth work continues through structured iteration — improving campaigns, pages, audiences, offers, targeting or measurement based on evidence from the previous stage.",
  },
];


/* =========================================================
   WAYS TO WORK TOGETHER
   ========================================================= */

export const growEngagementOptions: GrowEngagementOption[] = [
  {
    title:
      "Focused Growth Project",

    description:
      "A defined engagement around a specific growth problem, channel or conversion opportunity.",

    bestFor:
      "Businesses with a clear priority that needs focused attention.",

    items: [
      "Defined scope",
      "Specific growth objective",
      "Clear deliverables",
      "Useful when one area needs improvement first",
    ],

    ctaText:
      "Discuss a Growth Project",

    ctaHref:
      "#growth-project",
  },

  {
    title:
      "Ongoing Growth Partnership",

    description:
      "A continuous approach for businesses that need ongoing campaign management, optimization, testing and performance review.",

    bestFor:
      "Businesses already investing in growth and looking for consistent improvement.",

    items: [
      "Ongoing optimization",
      "Performance reviews",
      "Testing and iteration",
      "Channel and conversion improvements",
    ],

    ctaText:
      "Explore Ongoing Growth",

    ctaHref:
      "#growth-project",

    featured: true,
  },

  {
    title:
      "Growth Audit & Roadmap",

    description:
      "A structured review when you know growth needs improvement but are not yet sure which channel or part of the customer journey deserves attention first.",

    bestFor:
      "Businesses with existing traffic, campaigns or digital activity but unclear priorities.",

    items: [
      "Current-state review",
      "Opportunity identification",
      "Priority recommendations",
      "Practical next steps",
    ],

    ctaText:
      "Request a Growth Review",

    ctaHref:
      "#growth-project",
  },
];


/* =========================================================
   WHY BIXELTEK
   ========================================================= */

export const growWhyChoose: GrowWhyChoosePoint[] = [
  {
    title:
      "5+ Years of Growth & Performance Delivery for 30+ Clients",

    description:
      "Backed by over five years of multi-channel expertise driving commercial customer acquisition and verified ROAS across 30+ regional and international brands.",
  },

  {
    title:
      "We Look Beyond Channel Metrics",

    description:
      "Clicks, impressions and traffic can help diagnose performance, but the business outcome is what ultimately matters.",
  },

  {
    title:
      "We Connect Acquisition With Conversion",

    description:
      "Advertising and SEO do not operate independently from the pages and customer journeys they send people into.",
  },

  {
    title:
      "We Work From Evidence",

    description:
      "Campaign decisions, SEO priorities and conversion improvements should be informed by search behaviour, performance data, customer intent and what the business can actually support.",
  },

  {
    title:
      "We Do Not Force Every Channel",

    description:
      "A business does not automatically need Google Ads, Meta Ads, SEO and CRO at the same time. The right mix depends on the market, customer journey and commercial objective.",
  },

  {
    title:
      "We Think About What Happens Next",

    description:
      "Growth creates more value when the systems receiving leads, enquiries or orders can handle the additional demand and give the business a way to follow through.",
  },
];


/* =========================================================
   RELATED BUILD & AUTOMATE SERVICES
   ========================================================= */

export const growRelatedServices: GrowRelatedService[] = [
  {
    title:
      "Build the Experience Behind the Growth",

    description:
      "Your website, ecommerce store or application is where much of the customer journey happens. A stronger digital foundation can make acquisition efforts more effective.",

    href:
      "/services/build",

    ctaText:
      "Explore Build",
  },

  {
    title:
      "Connect What Happens After the Lead",

    description:
      "As demand increases, CRM workflows, lead routing, communication and reporting can help your team respond consistently instead of losing opportunities between systems.",

    href:
      "/services/automate",

    ctaText:
      "Explore Automate",
  },

  {
    title:
      "Improve the Experience Before Spending More",

    description:
      "If traffic already exists but conversion is the problem, CRO can help identify friction and prioritize improvements before simply increasing acquisition spend.",

    href:
      "/services/conversion-rate-optimization",

    ctaText:
      "Explore CRO",
  },
];


/* =========================================================
   FAQ
   ========================================================= */

export const growFAQs: FAQItem[] = [
  {
    question:
      "What does Bixeltek mean by Grow?",

    answer:
      "Grow covers the strategies and services we use to help businesses create demand, capture existing demand and improve the journey from visitor to meaningful business action. This can include Google Ads, SEO, Meta Ads, CRO, landing pages and measurement.",
  },

  {
    question:
      "Do I need Google Ads, SEO and Meta Ads together?",

    answer:
      "Not necessarily. The right mix depends on your market, customer journey, existing demand, sales cycle, competition and business goals. We recommend channels based on the situation rather than assuming every business needs the same combination.",
  },

  {
    question:
      "Can you work with marketing campaigns we already have?",

    answer:
      "Yes. Existing campaigns and data can provide useful information about what is working and where opportunities may exist. Depending on the situation, we can audit, improve or restructure existing activity rather than automatically starting from zero.",
  },

  {
    question:
      "Can you help if we are getting traffic but not enough enquiries?",

    answer:
      "Yes. In that situation the acquisition channel may not be the only issue. We can look at landing pages, offers, user journeys, forms, tracking and other conversion factors to understand where potential customers may be dropping out.",
  },

  {
    question:
      "How do you measure whether growth work is successful?",

    answer:
      "The useful measurement depends on the business model. It may include qualified leads, calls, bookings, purchases, revenue, cost per acquisition, return on ad spend or other meaningful conversion signals rather than relying only on traffic and engagement metrics.",
  },

  {
    question:
      "Can you help with local businesses and location-based growth?",

    answer:
      "Yes. Depending on the business, growth work can include local SEO, location-focused landing pages, Google Ads, lead generation and other strategies designed around customers in specific geographic markets.",
  },

  {
    question:
      "How long does SEO or paid advertising take to produce results?",

    answer:
      "There is no universal timeline. Paid campaigns can begin generating measurable activity once they are properly configured, while SEO usually requires more time for technical, content and authority improvements to take effect. Results depend on the market, competition, starting point, budget and implementation quality.",
  },

  {
    question:
      "Do you guarantee a specific number of leads or revenue?",

    answer:
      "No. Marketing performance depends on factors outside an agency's control, including market demand, competition, offer quality, pricing, sales follow-up and customer behaviour. We focus on building measurable campaigns and improving the factors we can influence.",
  },

  {
    question:
      "Can you improve our website as part of growth work?",

    answer:
      "Yes, where the website or landing experience is affecting conversion, relevant work can include landing page development, UX improvements, conversion optimization, tracking and other changes needed to support the agreed growth objective.",
  },

  {
    question:
      "What if we do not know where our growth problem is?",

    answer:
      "That is often a good reason to begin with an audit or growth review. We can look at the existing customer journey, channels, performance data and conversion points before recommending where effort is most likely to have an impact.",
  },
];


/* =========================================================
   FINAL CTA
   ========================================================= */

export const growFinalCTA: GrowFinalCTAData = {
  eyebrow:
    "READY TO GROW?",

  h2:
    "Find Where Your Growth Journey Is Losing Opportunities",

  description:
    "Whether you need more qualified demand, stronger search visibility, better campaign performance or higher conversion from the traffic you already have, start with the business objective and work backwards from there.",

  primaryButtonText:
    "Talk to an Expert",

  primaryButtonHref:
    "#growth-project",

  secondaryButtonText:
    "Explore Our Work",

  secondaryButtonHref:
    "#selected-work",
};