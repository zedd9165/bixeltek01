import { StaticImageData } from 'next/image';
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg";
import pet from "@/assets/digital marketing for pet stores.jpg";
import roofing from "@/assets/digital marketing for roofing industries.jpg";
import dental from "@/assets/digital marketing for health care practices.jpg";
import lawncare from "@/assets/digital marketing for lawn care services.jpg";
import blackcar from "@/assets/digital marketing for car detailers.jpg";
import healthcare from "@/assets/digital marketing for health care practices.jpg";

// ==========================================
// TYPES & INTERFACES
// ==========================================

export interface HeroData {
  titlePart1: string;
  titleHighlight: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export interface CampaignTypeItem {
  title: string;
  description: string;
}

export interface ManagementStep {
  title: string;
  description: string;
}

export interface ProtectionItem {
  title: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  text: string;
  gradient: string;
  color: string;
}

export interface BiddingStrategyItem {
  title: string;
  description: string;
}

export interface CostFactorItem {
  region: string;
  flag: string;
  typicalCpcRange: string;
  description: string;
}

export interface IndustryCard {
  id: string;
  img: StaticImageData;
  label: string;
  text: string;
  description: string;
}

export interface AdvantageItem {
  title: string;
  desc: string;
  color: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// ==========================================
// 1. PAGE METADATA
// ==========================================

export const googleAdsMetadata = {
  title: "Google Ads Management Services | Google Partner PPC Agency | Bixeltek",
  description:
    "Bixeltek provides professional Google Ads management services. We build, manage, and optimize search, shopping, display, and Performance Max campaigns aligned with business economics and verified conversions.",
  keywords: [
    "Google Ads management",
    "Google Ads agency",
    "PPC management services",
    "Google Partner agency",
    "Pay per click advertising",
    "Google Search Ads",
    "Google Shopping Ads",
    "Performance Max campaigns",
    "Conversion tracking",
    "PPC campaign optimization",
    "Lead generation ads",
    "B2B Google Ads",
  ],
  canonical: "https://bixeltek.com/services/google-ads",
};

// ==========================================
// 2. HERO DATA
// ==========================================

export const heroData: HeroData = {
  titlePart1: "Google Ads Management ",
  titleHighlight: "Built Around Your Business Goals",
  description:
    "We plan, launch and manage Google Ads campaigns around your products, services, target customers and commercial objectives. From keyword research and campaign structure to conversion tracking and ongoing optimisation, we focus on reaching relevant audiences and measuring the actions that matter to your business.",
  primaryCtaText: "Discuss Your Campaign",
  primaryCtaHref: "tel:+919100032301",
  secondaryCtaText: "Book a Free Ads Audit",
  secondaryCtaHref: "#form",
};
// ==========================================
// 3. CAMPAIGN TYPES
// ==========================================

export const campaignTypes: CampaignTypeItem[] = [
  {
    title: "Google Search Ads",
    description:
      "Search Ads capture high-intent users actively looking for your specific products or services. Built with tightly themed ad groups, relevant ad copy, and comprehensive negative keyword lists, search campaigns are well-suited for professional services, B2B, healthcare, and emergency trade businesses where immediate intent is paramount.",
  },
  {
    title: "Display & YouTube Ads",
    description:
      "Display and YouTube advertising introduce your brand across millions of websites and video placements. Suitable for building top-of-funnel brand recall, visual product storytelling, and targeted remarketing. We implement curated placement exclusions to ensure impressions serve on relevant, brand-safe properties.",
  },
  {
    title: "Google Shopping Ads",
    description:
      "Designed specifically for direct-to-consumer and retail eCommerce businesses. Shopping campaigns display high-visibility product images, titles, and pricing directly in search results, driven by optimized Google Merchant Center feeds, inventory segmentation, and margin-conscious bidding.",
  },
  {
    title: "Performance Max Campaigns",
    description:
      "Performance Max accesses Google's full advertising inventory—Search, YouTube, Display, Discover, Gmail, and Maps—from a single campaign. We implement audience signals, brand exclusions, and structured asset groups to steer automated learning toward genuine business value rather than cannibalized branded traffic.",
  },
  {
    title: "Remarketing & First-Party Audiences",
    description:
      "Remarketing keeps your brand present for prospects who previously visited your website, viewed product pages, or initiated an inquiry without completing it. We deploy privacy-compliant audience lists and custom messaging tailored to guide hesitant prospects through longer evaluation cycles.",
  },
];

// ==========================================
// 4. WHY CAMPAIGNS UNDERPERFORM & WHAT BIXELTEK MANAGES
// ==========================================

export const whyGoogleAdsData = {
  headingPart1: "Smarter ",
  headingHighlight: "Google Ads Management",
  headingPart2: ", Built for Real Results",
  intro:
    "Setting up an ad campaign is relatively simple; ensuring it generates profitable customer acquisition requires ongoing technical discipline. Without active oversight, advertising budgets frequently underperform due to unmanaged search-term drift, poor match-type architecture, or optimizing for superficial actions rather than closed revenue.",
  bulletPoints: [
    {
      title: "Keyword & Search-Intent Architecture",
      text: "We construct granular campaign structures pairing exact and phrase match keywords with buyer intent, eliminating exploratory queries that drain budget.",
    },
    {
      title: "Continuous Search-Term & Negative Audit",
      text: "We perform frequent search query reviews, proactively expanding negative keyword lists to prevent spend on irrelevant searches.",
    },
    {
      title: "Ad Copy & Asset Testing",
      text: "We write and test Responsive Search Ads (RSAs), sitelinks, callouts, and structured snippets that communicate real value propositions and pre-qualify prospective buyers.",
    },
    {
      title: "Geographic, Device & Schedule Tuning",
      text: "We calibrate bids across verified service areas, high-performing device types, and operating hours to direct budget where conversions are most likely to occur.",
    },
  ],
  closing:
    "When you partner with Bixeltek, you work with a team that actively manages and optimizes your account fundamentals—treating your advertising budget with the care and rigor your business expects.",
  ctaText: "Book a Free Strategy Call",
  ctaHref: "#form",
};

// ==========================================
// 5. ACCOUNT PROTECTION & COMPLIANCE
// ==========================================

export const protectionsData: ProtectionItem[] = [
  {
    title: "Policy & Editorial Compliance",
    description:
      "We review ad messaging, destination pages and relevant disclosures against applicable Google Ads policies before launch. This helps identify potential policy issues and reduce avoidable disapprovals, although Google retains the final decision on ad approval.",
    image: "/account suspension.gif",
  },
  {
    title: "Suspension & Warning Support",
    description:
      "When an account receives a warning, disapproval or suspension, we review the available policy information, account setup and relevant business details to identify possible causes. Where appropriate, we help prepare a clear and documented appeal for Google's review.",
    image: "/account suspension.gif",
  },
  {
    title: "Advertiser Verification Guidance",
    description:
      "We help businesses understand applicable advertiser verification requirements, organise the necessary business information and work through the submission process. Verification requirements and timelines depend on Google's review and the relevant market.",
    image: "/advertiser verification.png",
  },
  {
    title: "Invalid Traffic & Placement Reviews",
    description:
      "We review campaign traffic and placement reports to identify unusual patterns, irrelevant placements and opportunities to refine targeting. Where available, we also review Google's invalid-traffic adjustments and account reporting.",
    image: "/click fraud prevention.png",
  },
];

// ==========================================
// 6. PROCESS STEPS
// ==========================================

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Business Discovery & Account Audit",
    text: "We review your commercial objectives, target audience, competitive landscape, historical ad performance, and customer unit economics to establish clear campaign benchmarks.",
    gradient: "from-blue-500 via-blue-400 to-[#131313]",
    color: "text-blue-500",
  },
  {
    number: "02",
    title: "Campaign Architecture & Targeting",
    text: "We build structured ad groups organized around distinct user intent, establish keyword match-type hierarchies, curate negative keyword libraries, and define geographic boundaries.",
    gradient: "from-green-500 via-teal-400 to-[#13131333]",
    color: "text-yellow-500",
  },
  {
    number: "03",
    title: "Ad Creative & Asset Optimization",
    text: "We draft compelling, policy-compliant ad headlines, descriptions, and extensions (sitelinks, callouts, lead forms) tailored to highlight your specific business differentiators.",
    gradient: "from-yellow-400 via-yellow-300 to-[#13131333]",
    color: "text-red-500",
  },
  {
    number: "04",
    title: "Conversion Tracking Implementation",
    text: "We configure Google Tag Manager and GA4 to track meaningful business events—such as completed contact forms, phone calls, and appointment bookings—before launching traffic.",
    gradient: "from-pink-500 via-purple-400 to-[#13131333]",
    color: "text-orange-500",
  },
  {
    number: "05",
    title: "Controlled Launch & Bid Calibration",
    text: "We initiate campaigns with deliberate bidding parameters, closely monitoring search query reports and auction insights during the initial learning period to eliminate wasteful spend.",
    gradient: "from-indigo-500 via-indigo-400 to-[#13131333]",
    color: "text-teal-500",
  },
  {
    number: "06",
    title: "Ongoing Testing & Strategic Optimization",
    text: "We routinely review search terms, test ad copy variants, adjust target CPA/ROAS thresholds based on actual conversion data, and reallocate budget toward top-performing segments.",
    gradient: "from-red-500 via-[#131313] to-[#13131333]",
    color: "text-pink-500",
  },
];

// ==========================================
// 7. CONVERSION TRACKING SECTION (NEW)
// ==========================================

export const conversionTrackingSection = {
  eyebrow: "MEASUREMENT & ATTRIBUTION",
  headingPart1: "Measuring Real Inquiries, ",
  headingHighlight: "Not Just Raw Clicks",
  description:
    "A Google Ads campaign is only as effective as the conversion data guiding it. Relying strictly on click volume or generic page-view metrics can mislead automated bidding into optimizing for low-value traffic. We configure comprehensive measurement to track genuine commercial actions.",
  cards: [
    {
      title: "Inbound Phone Calls",
      description:
        "Tracking calls initiated from call assets and website visitor sessions, filtering by call duration to distinguish qualified patient or customer inquiries from brief wrong numbers.",
    },
    {
      title: "Contact & Quote Forms",
      description:
        "Configuring precise form submission event tracking via Google Tag Manager, verifying that conversions trigger only upon genuine lead capture rather than validation errors.",
    },
    {
      title: "Online Bookings & Consultations",
      description:
        "Integrating appointment schedulers and consultation calendars to accurately attribute completed bookings back to the specific campaigns and keywords that generated them.",
    },
    {
      title: "eCommerce Transactions",
      description:
        "Capturing transaction revenue, order quantities, and product IDs dynamically, enabling accurate ROAS calculation and margin-aware bidding across product catalogs.",
    },
    {
      title: "GA4 & Tag Manager Architecture",
      description:
        "Deploying clean Google Tag Manager container setups and GA4 custom events, ensuring accurate cross-device attribution while adhering to user consent standards.",
    },
    {
      title: "CRM & Offline Lead Import",
      description:
        "Where supported by your CRM (such as HubSpot, Salesforce, or Zoho), importing qualified lead stages and closed sales back into Google Ads to train bidding algorithms on revenue.",
    },
  ],
};

// ==========================================
// 8. BIDDING STRATEGIES
// ==========================================

export const biddingStrategies: BiddingStrategyItem[] = [
  {
    title: "Manual CPC with Bid Caps",
    description:
      "Provides direct control over maximum cost-per-click per keyword. Useful during initial campaign launches, low-volume niche B2B queries, or when testing new keyword themes without algorithmic unpredictability.",
  },
  {
    title: "Target CPA (Cost Per Acquisition)",
    description:
      "Automates auction-time bids to achieve as many conversions as possible at or below your target cost. Most effective for lead generation campaigns with established historical conversion volume.",
  },
  {
    title: "Target ROAS (Return on Ad Spend)",
    description:
      "Adjusts bids dynamically based on predicted order or conversion value. Suited for eCommerce or multi-tier service businesses where order values vary significantly, provided sufficient conversion data exists.",
  },
  {
    title: "Maximise Conversions",
    description:
      "Directs your allocated daily budget toward generating the highest total volume of conversions. Beneficial when launching time-sensitive campaigns or scaling new market territories with defined budget caps.",
  },
];

// ==========================================
// 9. GOOGLE ADS COSTS
// ==========================================

export const costSectionData = {
  headingPart1: "Understanding ",
  headingHighlight: "Google Ads Costs",
  headingPart2: " & Budget Planning",
  description:
    "Google Ads operates on a dynamic auction model. Click costs are not fixed; they fluctuate based on industry competition, keyword intent, quality score, geographic market, and seasonality. Understanding these factors allows for realistic budget allocation.",
  factors: [
    {
      title: "Industry & Search Intent",
      description:
        "High-value services like commercial litigation, emergency plumbing, and dental surgery naturally command higher cost-per-click than broad informational queries, reflecting the lifetime value of an acquired client.",
    },
    {
      title: "Geographic Market Dynamics",
      description:
        "Advertising in highly competitive metropolitan regions (such as North America, the UK, or the GCC) generally requires higher bids than emerging regional markets due to auction density.",
    },
    {
      title: "Quality Score & Ad Relevance",
      description:
        "Google rewards ads that closely align with search queries and lead to fast, relevant landing pages. Higher Quality Scores can significantly reduce the actual cost paid per click for top positions.",
    },
    {
      title: "Separate Media Spend & Management Fees",
      description:
        "Your advertising budget goes directly to Google for actual ad clicks, billed to your business account. Bixeltek charges a transparent agency management fee for campaign strategy, execution, and optimization.",
    },
  ],
  footerNote:
    "Rather than promising unrealistic fixed costs, we help businesses forecast budget requirements based on their specific industry benchmarks, acceptable acquisition costs, and commercial margins.",
  ctaText: "Request a Custom Budget Consultation",
  ctaHref: "#form",
};

// ==========================================
// 10. INDUSTRIES WE SERVE
// ==========================================

export const googleAdsIndustries: IndustryCard[] = [
  {
    id: "health",
    img: healthcare,
    label: "Google Ads for Healthcare Practices",
    text: "Healthcare Practices",
    description:
      "Target high-intent patient queries with policy-compliant messaging, location-based targeting, and verified appointment inquiry tracking.",
  },
  {
    id: "dental",
    img: dental,
    label: "Google Ads for Dental Clinics",
    text: "Dental Clinics",
    description:
      "Connect with prospective patients seeking general, cosmetic, or emergency dental treatments using radius geo-targeting and call tracking.",
  },
  {
    id: "auto",
    img: blackcar,
    label: "Google Ads for Automotive & Detailers",
    text: "Automotive Services",
    description:
      "Capture local drivers searching for auto repairs, detailing, or maintenance services with mobile click-to-call ads and map extensions.",
  },
  {
    id: "cleaning",
    img: cleaningcomp,
    label: "Google Ads for Cleaning Companies",
    text: "Commercial & Residential Cleaning",
    description:
      "Generate residential and commercial cleaning quote requests through zip-code targeting and structured service-tier ad groups.",
  },
  {
    id: "roofing",
    img: roofing,
    label: "Google Ads for Roofing Contractors",
    text: "Roofing & Construction",
    description:
      "Capture high-ticket repair and replacement inquiries with strict negative keyword filters and weather-responsive scheduling.",
  },
  {
    id: "lawncare",
    img: lawncare,
    label: "Google Ads for Lawn Care & Landscaping",
    text: "Lawn Care & Landscaping",
    description:
      "Promote seasonal maintenance packages and landscaping projects to local homeowners with targeted geographic radius boundaries.",
  },
  {
    id: "pet",
    img: pet,
    label: "Google Ads for Pet Stores & Services",
    text: "Pet & Veterinary Services",
    description:
      "Drive store visits, e-commerce orders, and veterinary appointments using targeted local search campaigns and Google Shopping feeds.",
  },
  {
    id: "oil",
    img: oil,
    label: "Google Ads for B2B & Industrial Services",
    text: "Industrial & Enterprise B2B",
    description:
      "Target procurement managers and technical buyers through niche, high-specification search queries and specialized RFQ lead funnels.",
  },
];

// ==========================================
// 11. BIXELTEK ADVANTAGE
// ==========================================

export const bixeltekAdvantages: AdvantageItem[] = [
  {
    title: "Transparent Account Management",
    desc: "Keep visibility into your campaign activity, advertising spend and performance data. Management decisions should be clear and connected to your agreed business objectives.",
    color: "border-2 border-blue-500",
  },
  {
    title: "Conversion-Focused Campaigns",
    desc: "We look beyond impressions and clicks to understand meaningful actions such as calls, enquiries, bookings and purchases.",
    color: "border-2 border-red-500",
  },
  {
    title: "Advertising & Website Expertise",
    desc: "Google Ads performance is closely connected to the experience after the click. Our wider digital capabilities allow us to consider campaign messaging, landing pages and website conversion paths together.",
    color: "border-2 border-teal-500",
  },
  {
    title: "Ongoing Campaign Optimisation",
    desc: "We review search terms, targeting, ad performance, budgets and conversion data to identify opportunities for campaign improvement over time.",
    color: "border-2 border-yellow-500",
  },
];

// ==========================================
// 12. COMPREHENSIVE FAQS
// ==========================================

export const googleAdsFaqs: FaqItem[] = [
  {
    question: "Who owns the Google Ads account and historical data?",
    answer:
      "You retain 100% administrative ownership of your Google Ads account, historical campaign data, and billing settings. We manage the account by linking it to our Google Partner manager. If you ever discontinue our services, you keep all campaigns, data, and tracking intact.",
  },
  {
    question: "Is advertising media spend separate from the agency management fee?",
    answer:
      "Yes. Your advertising media budget is paid directly to Google via your registered billing profile. Bixeltek charges a separate, transparent management fee for campaign strategy, account build, conversion tracking setup, and ongoing optimization.",
  },
  {
    question: "What monthly budget should our business allocate for Google Ads?",
    answer:
      "The right budget depends on your industry, target locations, keyword competition, average customer value and acquisition goals. We assess these factors to help plan a realistic starting budget. We also consider whether the available budget can generate enough meaningful conversion data to evaluate and improve campaign performance. There is no universal monthly conversion requirement that applies to every business.",
  },
  {
    question: "How do you measure and verify lead quality?",
    answer:
      "We implement conversion tracking for meaningful business interactions—such as phone calls with duration thresholds, completed contact forms, and appointment bookings. Additionally, we regularly review search terms to eliminate irrelevant queries and, where supported, integrate CRM feedback to optimize toward qualified leads.",
  },
  {
    question: "How often will our campaigns be reviewed and optimized?",
    answer:
      "Account optimization is an active, ongoing process. Our team conducts regular search-term analyses, negative keyword additions, ad copy testing, and bid adjustments. The frequency of changes is balanced to allow algorithmic bidding strategies sufficient time to calibrate without unnecessary disruption.",
  },
  {
    question: "What reporting and performance visibility will we receive?",
    answer:
      "You have continuous, 24/7 access to your Google Ads account and a clear performance dashboard displaying key metrics: spend, impressions, clicks, conversions, and cost per acquisition. We also provide regular performance summaries detailing what was tested and upcoming strategic priorities.",
  },
  {
    question: "Can you audit and take over management of an existing Google Ads account?",
    answer:
      "Yes. We frequently take over existing accounts. We begin with a comprehensive technical audit of historical search terms, Quality Scores, tracking accuracy, and account structure, identifying immediate inefficiencies before implementing restructuring.",
  },
  {
  question: "How long does initial campaign setup take before going live?",
  answer:
    "The setup timeline depends on the number and complexity of campaigns, the availability of website and conversion tracking access, creative requirements and any verification or policy reviews. After reviewing your requirements, we can provide a realistic launch timeline for your project.",
},
 {
  question: "What is the difference between Performance Max and standard Search Ads?",
  answer:
    "Search campaigns focus on reaching people through relevant searches on Google Search and eligible search inventory. Performance Max uses Google's automation to access multiple Google advertising channels through one campaign, including Search, YouTube, Display, Discover, Gmail and Maps. The appropriate campaign type depends on your objectives, available assets, conversion measurement and the role of each campaign in your advertising strategy.",
},
  {
    question: "Can you assist if our account receives a policy warning or disapproval?",
    answer:
      "Yes. As a Google Partner agency, we have substantial experience diagnosing policy disapprovals and advertiser verification requirements. We identify the root cause in ad copy or landing page content and prepare documented appeal submissions.",
  },
];

// ==========================================
// 13. WHO IS THIS SERVICE FOR?
// ==========================================

export interface GoogleAdsTargetAudienceItem {
  number: string;
  title: string;
  description: string;
}

export const googleAdsTargetAudienceHeader = {
  headingPart1: "Is Google Ads Right ",
  headingHighlight: "For Your Business?",
  description:
    "Google Ads can support different business objectives, from generating service enquiries to increasing online sales. Our approach depends on your market, customer acquisition goals and ability to convert incoming demand.",
  closing:
    "The right campaign starts with understanding your business, your customers and what a valuable conversion looks like.",
  ctaText: "Discuss Your Advertising Goals",
  ctaHref: "#form",
};

export const googleAdsTargetAudienceItems: GoogleAdsTargetAudienceItem[] = [
  {
    number: "01",
    title: "Businesses Looking for Qualified Leads",
    description:
      "Reach people actively searching for your products or services and create more opportunities for relevant calls, enquiries and bookings. This is particularly relevant for service-based businesses where customer intent and location influence the buying decision.",
  },
  {
    number: "02",
    title: "Businesses Struggling with Existing Campaigns",
    description:
      "Already investing in Google Ads but not getting the expected value? An account review can help identify irrelevant search traffic, inefficient campaign structures, tracking issues and opportunities to improve how your budget is allocated.",
  },
  {
    number: "03",
    title: "Ecommerce Brands Looking to Grow Online Sales",
    description:
      "Promote your product catalogue to relevant shoppers through suitable Search and Shopping campaigns. We consider product data, purchase tracking, campaign structure and revenue measurement when planning ecommerce advertising.",
  },
  {
    number: "04",
    title: "Local & Multi-Location Businesses",
    description:
      "Connect with potential customers searching within your service areas or business locations. Campaigns can be structured around geographic coverage, local search demand, calls and other relevant enquiry actions.",
  },
  {
    number: "05",
    title: "Businesses Ready to Scale Paid Advertising",
    description:
      "For businesses with an established offer, a defined target audience and the capacity to handle additional demand. We use available campaign and conversion data to identify expansion opportunities and plan the next stage of advertising.",
  },
];

// ==========================================
// 14. RELATED SERVICES
// ==========================================

export interface GoogleAdsRelatedServiceItem {
  title: string;
  description: string;
  href: string;
  ctaText: string;
  icon: "search" | "monitor" | "chart";
}

export const googleAdsRelatedServicesContent = {
  headingPart1: "More Than Ads. ",
  headingHighlight: "A Connected Growth System.",
  description:
    "Google Ads can bring potential customers to your business, but the experience around your campaigns matters too. Explore the services that help strengthen your website, organic visibility and conversion performance.",
  closing:
    "We connect advertising, websites and optimisation to support more of the customer journey.",
  ctaText: "Explore All Services",
  ctaHref: "#form",
};

export const googleAdsRelatedServices: GoogleAdsRelatedServiceItem[] = [
  {
    title: "SEO & Organic Search",
    description:
      "Complement paid advertising with organic search visibility. Build long-term discoverability for relevant searches while using paid campaigns to reach active demand.",
    href: "/services/seo-services",
    ctaText: "Explore SEO Services",
    icon: "search",
  },
  {
    title: "Web Design & Development",
    description:
      "Give your campaigns a relevant destination with websites and landing pages that communicate your offer clearly and make it easier for visitors to enquire or purchase.",
    href: "/services/web-design",
    ctaText: "Explore Web Development",
    icon: "monitor",
  },
  {
    title: "Analytics & Conversion Optimisation",
    description:
      "Understand how visitors interact with your website, measure conversion performance and identify opportunities to improve the journey from an advertising click to a meaningful action.",
    href: "/analytics-and-cro-services",
    ctaText: "Explore Analytics & CRO",
    icon: "chart",
  },
];

export interface TargetAudienceItem {
  number: string;
  title: string;
  description: string;
}

export const googleAdsAudienceItems: TargetAudienceItem[] = [
  {
    number: "01",
    title: "Businesses Looking to Generate More Qualified Leads",
    description:
      "For service-based businesses that want to reach potential customers searching for their services and generate enquiries through calls, forms and bookings.",
  },
  {
    number: "02",
    title: "Businesses Already Running Google Ads but Struggling with Performance",
    description:
      "For companies spending on advertising but facing issues with irrelevant clicks, inconsistent enquiries, poor conversion rates or campaigns that are not being properly optimised.",
  },
  {
    number: "03",
    title: "Ecommerce Businesses Looking to Increase Online Sales",
    description:
      "For online stores looking to promote products through Search and Shopping campaigns, reach relevant buyers and measure advertising performance against purchases and revenue.",
  },
  {
    number: "04",
    title: "Local and Multi-Location Businesses",
    description:
      "For businesses targeting customers within specific cities, service areas or locations that need campaigns aligned with their geographic reach and local customer demand.",
  },
  {
    number: "05",
    title: "Growing Businesses Ready to Scale Paid Advertising",
    description:
      "For businesses that already have a working offer, a defined customer base and the capacity to handle additional enquiries or orders, and want to expand their reach through structured campaigns.",
  },
];

export const googleAdsAudienceHeader = {
  badge: "Target Audience",
  headingPart1: "Who Is Our ",
  headingHighlight: "Google Ads Management Service For?",
  description:
    "Google Ads can help businesses reach people actively searching for their products or services. But getting value from advertising requires more than launching campaigns. It takes the right targeting, conversion measurement and continuous optimisation. Our Google Ads management service is designed for businesses that want a more structured and measurable approach to paid advertising.",
  closing:
    "From campaign setup to ongoing optimisation, the focus is on making advertising decisions based on meaningful performance data and business objectives.",
  ctaText: "Discuss Your Google Ads Strategy",
  ctaHref: "/contact-us",
};

export interface BeyondTheClickStep {
  num: string;
  title: string;
  desc: string;
  position: 'top' | 'bottom';
}

export interface BeyondTheClickData {
  badge: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  steps: BeyondTheClickStep[];
}

export const beyondTheClickContent: BeyondTheClickData = {
  badge: "POST-CLICK STRATEGY",
  headingPart1: "A Click Is Only the Beginning. ",
  headingHighlight: "What Happens Next Matters.",
  description:
    "Getting someone to click an ad is just one part of a successful campaign. We focus on what happens after that click — from the landing-page experience to conversion measurement and the quality of enquiries generated.",
  steps: [
    {
      num: "01",
      title: "Reach the Right Audience",
      desc: "Relevant keywords, search intent, location and audience targeting help connect campaigns with potential customers.",
      position: "top",
    },
    {
      num: "02",
      title: "Create a Relevant Ad Experience",
      desc: "Ad messaging, headlines and assets aligned with what people are searching for.",
      position: "bottom",
    },
    {
      num: "03",
      title: "Turn Visits into Actions",
      desc: "Landing pages designed around the next step — enquiries, phone calls, bookings or purchases.",
      position: "top",
    },
    {
      num: "04",
      title: "Measure and Optimise",
      desc: "Conversion data and campaign performance help guide ongoing testing and optimisation.",
      position: "bottom",
    },
  ],
};