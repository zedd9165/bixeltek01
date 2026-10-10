import type { StaticImageData } from "next/image";
import croHeroImg from "@/assets/cro-hero.png";
import croAnalyticsImg from "@/assets/ipad-business-analytics.png";
import croWireframeImg from "@/assets/cro-wireframe.webp";
import croOverviewImg from "@/assets/cro-overview.png";
import type {
  BreadcrumbItem,
  JumpLinkItem,
  CaseStudyCard,
  ProblemCard,
  ScopeCard,
  InvestmentFactorCard,
  RelatedServiceCard,
  FAQItem,
} from "./ecom";

// ============================================================
// CRO METADATA & CUSTOM TYPES
// ============================================================

export interface CROMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface CROOpportunityStep {
  number: string;
  title: string;
  description: string;
}

export interface CROProcessStage {
  number: string;
  title: string;
  description: string;
  stageNumber?: string;
}

export interface CROWhyChoosePoint {
  title: string;
  description?: string;
}

export interface CROWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  image?: any;
  points: CROWhyChoosePoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}


export const conversionRateOptimizationMetadata: CROMetadata = {
  title:
    "Conversion Rate Optimization Services | CRO Services | Bixeltek",
  description:
    "Turn more of your existing website traffic into leads, enquiries and sales with data-led conversion rate optimization, UX improvements, funnel analysis and testing.",
  keywords: [
    "conversion rate optimization services",
    "CRO services",
    "conversion optimization services",
    "website conversion optimization",
    "conversion rate optimization agency",
    "website CRO",
    "CRO audit",
    "landing page optimization",
    "funnel optimization",
  ],
  canonical:
    "https://bixeltek.com/services/conversion-rate-optimization",
};

// ============================================================
// BREADCRUMBS
// ============================================================

export const conversionRateOptimizationBreadcrumbs: BreadcrumbItem[] = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Web Design & Development",
    href: "/services/web-design",
  },
  {
    label: "Conversion Rate Optimization",
    href: "/services/conversion-rate-optimization",
  },
];

// ============================================================
// JUMP LINKS
// ============================================================

export const conversionRateOptimizationJumpLinks: JumpLinkItem[] = [
  {
    label: "The Problem",
    href: "#the-problem",
  },
  {
    label: "What CRO Means",
    href: "#what-is-cro",
  },
  {
    label: "When You Need CRO",
    href: "#when-you-need-cro",
  },
  {
    label: "What We Cover",
    href: "#cro-scope",
  },
  {
    label: "How We Find Opportunities",
    href: "#cro-opportunities",
  },
  {
    label: "What We Optimize",
    href: "#what-we-optimize",
  },
  {
    label: "Our Process",
    href: "#cro-process",
  },
  {
    label: "Why Bixeltek",
    href: "#why-bixeltek",
  },
  {
    label: "Investment",
    href: "#investment",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
];

// ============================================================
// HERO
// ============================================================

export const conversionRateOptimizationHero = {
  eyebrow: "CONVERSION RATE OPTIMIZATION · CRO SERVICES",

  h1: "Turn More of Your Existing Traffic Into Meaningful Business",

  p1: "Getting visitors to your website is only part of the job. If people are reaching your pages but not becoming leads, bookings, enquiries or customers, the problem may be somewhere in the conversion journey.",

  p2: "We use analytics, user behaviour, UX analysis and structured optimization to identify where visitors hesitate or drop off, then prioritize practical improvements that make the path to conversion clearer, easier and more effective.",

  primaryButtonText: "Talk to an Expert",

  primaryButtonHref: "#contact-us",

  secondaryLinkText: "Explore Our Work",

  secondaryLinkHref: "/case-studies",

  microcopy:
    "Already getting traffic but not enough business from it? Start by understanding where the journey is losing potential customers before simply spending more to bring in new visitors.",


  image: croHeroImg,
};

// ============================================================
// THE PROBLEM
// ============================================================

export const conversionRateOptimizationProblems: ProblemCard[] = [
  {
    title: "Traffic Is Growing, But Leads or Sales Aren’t",
    description:
      "More visitors do not automatically create more business. If users reach important pages but hesitate, leave or fail to complete the next step, the problem may sit inside the conversion journey rather than at the traffic source.",
  },

  {
    title: "Paid Traffic Is Becoming Expensive",
    description:
      "When every additional lead or sale requires more advertising spend, improving the percentage of existing visitors who convert can become an important part of the growth equation.",
  },

  {
    title: "You Know Something Is Wrong, But Not What",
    description:
      "High bounce rates, abandoned forms or weak sales can point to many different causes. CRO starts by finding where the journey breaks instead of immediately redesigning pages based on opinion.",
  },

  {
    title: "Website Changes Are Based on Guesswork",
    description:
      "A redesign can make a website look better without solving the reason customers are not converting. Conversion optimization gives teams a way to prioritize changes around evidence, business value and measurable behaviour.",
  },

  {
    title: "Important Conversion Paths Have Too Much Friction",
    description:
      "Unclear messaging, weak calls to action, unnecessary form fields, poor mobile experiences, missing trust signals or complicated checkout steps can all make the next action harder than it needs to be.",
  },
];

// ============================================================
// WHAT IS CRO
// ============================================================

export const conversionRateOptimizationOverview = {
  eyebrow: "WHAT CRO ACTUALLY MEANS",

  h2:
    "Conversion Rate Optimization Is About Improving the Journey, Not Just the Button",

  intro:
    "Conversion rate optimization is the systematic process of improving the percentage of visitors who complete a meaningful action on a website, store or landing page. That action might be an enquiry, phone call, booking, demo request, signup, purchase or another business-defined conversion.",

  body:
    "Good CRO combines quantitative data, user behaviour, UX analysis, messaging and experimentation. The objective is not to change as many elements as possible. It is to identify the changes most likely to remove friction or improve decision-making, implement them properly and measure what happens.",

  closingCopy:
    "The right conversion strategy depends on the business model, traffic source, customer journey and quality of the existing data.",

  image: croOverviewImg,
};

// ============================================================
// WHEN YOU NEED CRO
// ============================================================

export const whenYouNeedCRO = {
  eyebrow: "WHEN CRO MAKES SENSE",

  h2:
    "CRO Works Best When There Is Already Something to Learn From",

  intro:
    "CRO is not automatically the first solution for every website. Before recommending an optimization programme, we look at whether the business has enough traffic, usable measurement and a clearly defined conversion goal to make the work meaningful.",

  points: [
    {
      title: "You already receive meaningful traffic",

      description:
        "Existing visitors provide enough behavioural and conversion data to identify patterns, friction and opportunities.",
    },

    {
      title: "Your conversion rate is below expectation",

      description:
        "The business is getting visits, enquiries or sales, but too many users are failing to complete the intended action.",
    },

    {
      title: "Your acquisition costs are increasing",

      description:
        "Improving the conversion journey can help existing traffic work harder instead of relying only on acquiring more visitors.",
    },

    {
      title: "Important funnel stages are leaking",

      description:
        "Users may reach a product page, form, booking flow or checkout but fail to continue to the next step.",
    },

    {
      title: "You are planning a redesign",

      description:
        "Conversion data can help determine which experience problems actually deserve attention before a large redesign investment is made.",
    },

    {
      title: "You are getting conversions, but want more from the traffic",
      
      description:
        "Even when a website already generates leads or sales, improving the experience can help increase the value of existing traffic without depending entirely on higher visitor volume.",
    },
  ],

  notAlwaysNeeded: {
    title: "CRO may not be the first priority when…",

    description:
      "There is very little meaningful traffic, conversion tracking is unreliable, the offer itself is unclear, or the business has not yet defined what a valuable conversion actually means. In those situations, fixing the underlying problem may come before running an optimization programme.",
  },
};

// ============================================================
// WHAT OUR CRO WORK COVERS
// ============================================================

export const conversionRateOptimizationScope: ScopeCard[] = [
  {
    title: "Conversion & Funnel Analysis",
    description:
      "We examine the key steps between the first visit and business action to identify where users leave, hesitate or fail to progress.",
  },

  {
    title: "User Behaviour Analysis",
    description:
      "We use available behavioural signals, interaction patterns and session evidence to understand what visitors actually do across important parts of the journey.",
  },

  {
    title: "UX & Page Experience Optimization",
    description:
      "We identify unnecessary complexity, unclear hierarchy and weak information flow that can make important actions harder for visitors to understand and complete.",
  },

  {
    title: "Landing Page Optimization",
    description:
      "We improve landing pages around message relevance, information hierarchy, trust, calls to action and the specific intent of incoming visitors.",
  },

  {
    title: "Form & Lead Flow Optimization",
    description:
      "We examine form structure, field requirements, CTA clarity and surrounding friction to make enquiry paths easier to complete without sacrificing lead quality.",
  },

  {
    title: "Ecommerce Conversion Optimization",
    description:
      "For stores, we examine product discovery, product information, cart behaviour and checkout friction to identify where purchase intent may be lost.",
  },

  {
    title: "Experimentation & Testing",
    description:
      "Where traffic and tracking support it, we turn strong hypotheses into controlled tests rather than treating every design change as an assumed improvement.",
  },

  {
    title: "Analytics & Conversion Tracking Review",
    description:
      "Before relying on conversion numbers, we verify that important actions are being measured consistently enough to support confident optimization decisions.",
  },
];

// ============================================================
// CRO OPPORTUNITY FRAMEWORK
// ============================================================

export const croOpportunityFramework: CROOpportunityStep[] = [
  {
    number: "01",
    title: "Measure the Journey",
    description:
      "Establish the important conversion paths and make sure the key actions are being measured clearly.",
  },

  {
    number: "02",
    title: "Find the Friction",
    description:
      "Identify pages, steps and interactions where users hesitate, abandon the journey or behave differently from the intended path.",
  },

  {
    number: "03",
    title: "Understand the Behaviour",
    description:
      "Combine quantitative evidence with available behavioural and UX signals to understand what may be causing the problem.",
  },

  {
    number: "04",
    title: "Prioritize the Opportunity",
    description:
      "Rank potential improvements around business impact, available evidence, traffic, implementation effort and the confidence behind the hypothesis.",
  },

  {
    number: "05",
    title: "Build the Hypothesis",
    description:
      "Define what should change, why it may improve the journey and what measurable outcome would indicate that the change worked.",
  },

  {
    number: "06",
    title: "Implement or Test",
    description:
      "Make the appropriate experience or technical change, using controlled experimentation where the traffic and setup make testing meaningful.",
  },

  {
    number: "07",
    title: "Measure the Result",
    description:
      "Compare the relevant conversion and business metrics rather than judging success from clicks or engagement alone.",
  },

  {
    number: "08",
    title: "Feed the Learning Back",
    description:
      "Successful and unsuccessful tests both provide information that helps shape the next optimization decision.",
  },
];

// ============================================================
// WHAT WE OPTIMIZE
// ============================================================

export const whatWeOptimize = {
  eyebrow: "WHAT WE OPTIMIZE",

  h2:
    "We Look at the Parts of the Experience That Influence the Decision",

  intro:
    "Conversion problems rarely come from one isolated button. Depending on the business and funnel, the opportunity may sit in the message, page structure, trust, interaction, form, product experience or the transition between stages.",

  points: [
    {
      title: "Value Proposition",
      description:
        "Does the visitor quickly understand what is being offered, who it is for and why it is relevant to them?",
    },
    {
      title: "Information Hierarchy",
      description:
        "Are the most important questions answered in the order a customer needs them answered?",
    },
    {
      title: "Trust & Proof",
      description:
        "Are credibility signals, reviews, results, guarantees, credentials or other evidence available at the points where hesitation occurs?",
    },
    {
      title: "Calls to Action",
      description:
        "Is the next action obvious, relevant to the visitor's intent and easy to complete?",
    },
    {
      title: "Forms & Lead Capture",
      description:
        "Does the enquiry process collect what the business actually needs without creating unnecessary friction?",
    },
    {
      title: "Mobile Experience",
      description:
        "Does the conversion journey remain clear and usable when customers interact through smaller screens and touch interfaces?",
    },
    {
      title: "Product & Service Experience",
      description:
        "Can customers understand the offer well enough to make a confident decision?",
    },
    {
      title: "Checkout & Transaction Flow",
      description:
        "For ecommerce and transactional journeys, are there avoidable barriers between purchase intent and completed payment?",
    },
  ],
  image: croWireframeImg,
};

// ============================================================
// PROCESS
// ============================================================

export const conversionRateOptimizationProcess: CROProcessStage[] = [
  {
    number: "01",
    title: "Audit & Diagnose",
    description:
      "We review the conversion journey, analytics setup, key pages and available behavioural evidence to understand where users are encountering friction or dropping off.",
  },

  {
    number: "02",
    title: "Prioritize Opportunities",
    description:
      "We separate high-value opportunities from low-impact ideas and create a practical order of work based on evidence, business impact and implementation effort.",
  },

  {
    number: "03",
    title: "Build Hypotheses",
    description:
      "We define what we believe is affecting conversion, what should change and what measurable outcome would indicate that the proposed improvement is working.",
  },

  {
    number: "04",
    title: "Implement Changes",
    description:
      "We apply the prioritized UX, content, design or development changes required to improve the experience and address the identified conversion opportunity.",
  },

  {
    number: "05",
    title: "Test & Measure",
    description:
      "Where traffic and tracking support meaningful experimentation, we test the change and review conversion and business metrics against the original hypothesis.",
  },

  {
    number: "06",
    title: "Learn & Iterate",
    description:
      "We use the results to understand what worked, what did not and which opportunity should be investigated next, creating a continuous optimization cycle.",
  },
];

// ============================================================
// WHY BIXELTEK
// ============================================================

export const conversionRateOptimizationWhyChoose: CROWhyChooseData = {
  eyebrow: "WHY BIXELTEK",

  h2:
    "CRO Backed by the Ability to Actually Change the Experience",

  intro:
    "Conversion optimization becomes more useful when the team diagnosing the problem can also work across the website, landing pages, analytics and development needed to address it. Our approach connects those areas instead of treating CRO as a report that someone else has to implement.",

  points: [
    {
      title: "We Look Beyond Conversion Metrics",
      description:
        "A higher form submission rate is not automatically a better result if lead quality falls. We look at the business action behind the conversion.",
    },

    {
      title: "We Connect CRO With Web Development",
      description:
        "When an opportunity requires more than copy or layout changes, our development capability allows the recommendation to become an implemented change.",
    },

    {
      title: "We Consider the Whole Customer Journey",
      description:
        "Ads, SEO, landing pages, website experience and follow-up can all influence whether a visitor eventually becomes a customer.",
    },

    {
      title: "We Prioritize Instead of Changing Everything",
      description:
        "The objective is not to redesign every page. We focus attention on the parts of the journey where evidence suggests the opportunity is worth pursuing.",
    },

    {
      title: "We Use Testing When Testing Makes Sense",
      description:
        "Not every website has enough traffic or clean enough measurement for meaningful A/B testing. We recommend experimentation when the conditions support it.",
    },

    {
      title: "We Build for Continuous Improvement",
      description:
        "CRO is most valuable when each finding improves the next decision rather than becoming a one-time list of website recommendations.",
    },
  ],

  image: croAnalyticsImg,

  closingCopy:
    "The goal is not simply to make a website convert at a higher percentage. It is to make the customer journey clearer, easier and more commercially effective.",

  ctaText: "Get in Touch",

  ctaHref: "#contact-us",
};

// ============================================================
// INVESTMENT
// ============================================================

export const conversionRateOptimizationInvestmentFactors:
  InvestmentFactorCard[] = [
    {
      title: "Traffic & Data Availability",
      description:
        "The amount and quality of traffic affects how confidently we can identify patterns and validate changes.",
    },

    {
      title: "Funnel Complexity",
      description:
        "A simple lead form and a multi-stage ecommerce or booking journey require very different levels of analysis and implementation.",
    },

    {
      title: "Tracking Readiness",
      description:
        "If important conversions are not being measured correctly, part of the engagement may need to address the analytics foundation first.",
    },

    {
      title: "UX & Design Changes",
      description:
        "The scope increases when optimization requires new layouts, content structures, responsive experiences or significant interface work.",
    },

    {
      title: "Development Requirements",
      description:
        "Custom functionality, integrations or deeper changes to the website can require additional development effort beyond CRO analysis.",
    },

    {
      title: "Testing Requirements",
      description:
        "An ongoing experimentation programme has different requirements from a one-time CRO audit and prioritized optimization roadmap.",
    },
  ];

// ============================================================
// RELATED SERVICES
// ============================================================

export const conversionRateOptimizationRelatedServices:
  RelatedServiceCard[] = [
    {
      title: "Web Design & Development",
      description:
        "If the current website has structural or experience limitations that prevent meaningful optimization, a broader redesign or rebuild may be more appropriate.",
      linkText: "Explore Web Design Services",
        destination: "/services/web-design",
    },

    {
      title: "Google Ads Management",
      description:
        "When paid traffic is part of the conversion problem, CRO can work alongside campaign optimization to improve what happens after the click.",
      linkText: "Explore Google Ads Services",
        destination: "/services/google-ads",
    },

    {
      title: "SEO Services",
      description:
        "Organic traffic only becomes commercially useful when visitors can find relevant information and move toward a meaningful action.",
      linkText: "Explore SEO Services",
        destination: "/services/seo-services",
    },

    {
      title: "Ecommerce Web Solutions",
      description:
        "Streamline checkout flows, product discovery and merchandising architecture across Shopify, WooCommerce and custom storefronts.",
      linkText: "Explore Ecommerce Development",
      destination: "/services/ecommerce-development",
    },
  ];

// ============================================================
// FAQ
// ============================================================

export const conversionRateOptimizationFaqs: FAQItem[] = [
  {
    question: "What is conversion rate optimization?",
    answer:
      "Conversion rate optimization, or CRO, is the process of improving a website, store or landing page so a greater proportion of visitors complete a meaningful action such as an enquiry, booking, signup or purchase. It combines analytics, user behaviour, UX analysis, prioritization and testing where appropriate.",
  },

  {
    question: "Do I need CRO if my website already gets traffic?",
    answer:
      "Existing traffic can make CRO especially useful because there is already customer behaviour to learn from. However, we first look at traffic quality, conversion tracking, business goals and the existing funnel before recommending an optimization programme.",
  },

  {
    question: "Is CRO the same as redesigning a website?",
    answer:
      "No. A redesign changes the broader website experience, while CRO focuses specifically on improving conversion performance. Sometimes CRO identifies problems that can be solved with targeted changes; other times the evidence may support a larger redesign or rebuild.",
  },

  {
    question: "Do you run A/B tests for every CRO project?",
    answer:
      "No. Meaningful A/B testing requires enough relevant traffic, reliable tracking and a testable hypothesis. Where those conditions are not present, we focus on evidence-led diagnosis, prioritized improvements and measurement instead of creating tests simply for the sake of testing.",
  },

  {
    question: "What can you optimize on a website?",
    answer:
      "Depending on the business, CRO can involve value propositions, page hierarchy, trust signals, calls to action, forms, navigation, mobile experience, landing pages, product pages, checkout flows and the transitions between important funnel stages.",
  },

  {
    question: "Can CRO help ecommerce websites?",
    answer:
      "Yes. Ecommerce CRO can examine product discovery, product information, cart behaviour, checkout friction and other parts of the purchase journey. The exact priorities depend on the store's products, customers, traffic sources and existing conversion data.",
  },

  {
    question: "Can CRO improve the quality of leads, not just the number?",
    answer:
      "It can. The conversion goal should reflect the business outcome that matters. Increasing low-quality enquiries is not necessarily an improvement, so CRO recommendations should consider lead quality alongside conversion volume where that data is available.",
  },

  {
    question: "How long does CRO take?",
    answer:
      "There is no single timeline. A focused audit and prioritized roadmap can be completed differently from an ongoing experimentation programme. Traffic volume, tracking readiness, funnel complexity and the amount of implementation required all affect the timeline.",
  },

  {
    question: "Can you implement the CRO recommendations?",
    answer:
      "Yes. Where development or design changes are part of the agreed scope, the recommendations can be implemented rather than simply delivered as an audit document.",
  },

  {
    question: "Do you guarantee a specific conversion increase?",
    answer:
      "No. Conversion performance depends on traffic quality, offer, market, customer behaviour, implementation and many other factors. A responsible CRO process uses evidence and measurement to improve decision-making rather than promising a predetermined percentage increase.",
  },
];

// ============================================================
// FINAL CTA
// ============================================================

export const conversionRateOptimizationFinalCta = {
  id: "final-cta",

  eyebrow: "READY TO FIND THE FRICTION?",

  h2:
    "Let’s Find Out Where Your Website Is Losing Potential Customers",

  description:
    "If your website already receives visitors but the business outcome is not where it should be, the next step may not be more traffic. We can review the conversion journey, identify the areas worth investigating and outline what should be addressed first.",

  primaryCta: {
    label: "Request a CRO Review",
    href: "#contact",
  },

  supportingCopy:
    "We’ll start with your current website, conversion goals, traffic situation and available measurement, not a predetermined redesign package.",
};