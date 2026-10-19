/**
 * Bixeltek Analytics & Tracking - service-page content draft
 *
 * Content-first draft for a service page focused on measurement planning,
 * implementation, validation and reporting - not a generic list of analytics tools.
 *
 * This is not a guaranteed drop-in replacement for the current page UI. Map exports
 * to the repository's existing component interfaces and confirm all routes, delivery
 * capabilities, tools and commercial inclusions before publishing.
 *
 * Content principles:
 * - Define the business outcome before choosing events or dashboards.
 * - Distinguish clicks and form attempts from confirmed leads, booked appointments
 *   and purchases.
 * - Treat differences between GA4, ad platforms and CRM records as explainable,
 *   not something a tracking setup can always eliminate.
 * - Treat consent, customer data and platform policies as implementation constraints;
 *   this page does not promise legal compliance or perfect attribution.
 * - Only offer server-side tagging, CRM/offline conversion integrations or advanced
 *   ecommerce data-layer work when they are supported and explicitly scoped.
 */

export const analyticsTrackingMetadata = {
  title: "Analytics & Tracking Services | GA4, GTM & Conversion Tracking - Bixeltek",
  description:
    "Set up and validate GA4, Google Tag Manager and conversion tracking around the actions that matter to your business. Make website, campaign and ecommerce data easier to trust and act on.",
  keywords: [
    "analytics and tracking services",
    "GA4 setup services",
    "Google Analytics 4 setup",
    "Google Tag Manager setup",
    "conversion tracking services",
    "GA4 event tracking",
    "website analytics services",
    "Google Ads conversion tracking",
    "Meta Pixel setup",
    "ecommerce tracking setup",
    "analytics tracking audit",
    "marketing analytics and reporting",
    "conversion tracking audit",
  ],
  // Existing Bixeltek references use this route; confirm the canonical URL in the app.
  canonicalPath: "/analytics-and-cro-services",
};

export const analyticsTrackingBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Analytics & Tracking", href: "/analytics-and-cro-services" },
];

export const analyticsTrackingJumpLinks = [
  { label: "The Measurement Problem", href: "#analytics-tracking-problems" },
  { label: "What We Set Up", href: "#analytics-tracking-scope" },
  { label: "What to Measure", href: "#analytics-tracking-events" },
  { label: "Our Process", href: "#analytics-tracking-process" },
  { label: "FAQs", href: "#analytics-tracking-faqs" },
];

export const analyticsTrackingHero = {
  eyebrow: "ANALYTICS · EVENT TRACKING · CONVERSION MEASUREMENT",
  h1: "Know Which Digital Actions Are Moving Your Business Forward",
  description:
    "Website traffic is easy to count. Understanding which campaigns, pages and customer actions contribute to meaningful enquiries or sales takes a more deliberate measurement setup. Bixeltek helps define what to track, implement the right events, validate the data and turn reports into clearer next steps.",
  primaryCta: { label: "Talk to an Expert", href: "#analytics-tracking-contact" },
  secondaryCta: { label: "Explore Our Services", href: "/services" },
  supportingText:
    "For businesses that need clearer website, lead-generation, paid-media or ecommerce measurement.",
  visualLabel: "Define · Implement · Validate · Understand",
};

export const analyticsTrackingOverview = {
  eyebrow: "MORE THAN INSTALLING AN ANALYTICS TAG",
  h2: "A Measurement Setup Should Answer Business Questions",
  intro:
    "Analytics tools can show visits, sessions and on-site activity, but those numbers are useful only when the data is collected consistently and connected to a question the business needs to answer. We begin with the decisions you want to make, then work backwards to the events, campaign details and reports required to support them.",
  body:
    "That may mean confirming which landing pages generate enquiries, measuring the steps in an ecommerce checkout, distinguishing a phone-link click from a completed conversation, or checking whether paid campaigns are sending useful conversion signals to their platforms. The right setup depends on your website, business model, existing accounts and how outcomes are recorded after the visitor leaves the page.",
  points: [
    {
      title: "Measure meaningful actions",
      description:
        "Choose events that reflect the customer journey and your commercial objective. Avoid treating every click, scroll or form interaction as a business conversion.",
    },
    {
      title: "Make the implementation verifiable",
      description:
        "Use a structured event plan, appropriate triggers and a documented testing process so that important events can be inspected before and after release.",
    },
    {
      title: "Turn the evidence into decisions",
      description:
        "Organize the information around the questions your team needs to answer, while making tracking gaps, attribution differences and data limitations visible.",
    },
  ],
  closingCopy:
    "The goal is not to collect the largest possible amount of data. It is to collect enough dependable information to make better-informed decisions.",
};

export const analyticsTrackingProblems = {
  id: "analytics-tracking-problems",
  eyebrow: "WHEN THE NUMBERS ARE HARD TO TRUST",
  h2: "You Cannot Improve What Your Setup Cannot Reliably Measure",
  intro:
    "Tracking issues are not always obvious. A dashboard may look complete while important events are missing, duplicated or defined differently across tools. We inspect the implementation and the real customer journey before recommending what needs to change.",
  cards: [
    {
      title: "Enquiries Are Happening, but Tracking Is Missing Them",
      description:
        "Forms, phone links, WhatsApp links, bookings or other contact actions may not be captured - or the configured event may fire before a form has actually succeeded. We check how the action works and what confirmation is available.",
    },
    {
      title: "GA4 and Ad Platforms Show Different Totals",
      description:
        "Different attribution models, reporting windows, consent states, event definitions and duplicate firing can produce different counts. We investigate the most likely causes and document what is and is not comparable rather than promising identical totals.",
    },
    {
      title: "Campaigns Have No Dependable Conversion Signal",
      description:
        "Ad platforms may be optimizing toward incomplete, duplicated or low-value actions. We check which events are sent, how they are defined and whether the event is suitable for the campaign objective.",
    },
    {
      title: "Ecommerce Reports Do Not Explain the Funnel",
      description:
        "If product views, cart activity, checkout steps or purchases are missing or inconsistently parameterized, it becomes harder to see where shoppers drop off. Ecommerce tracking should reflect the store's actual implementation and order flow.",
    },
    {
      title: "Reports Show Activity but Not Useful Outcomes",
      description:
        "Visits, impressions and engagement can describe activity without showing which source produces relevant leads or sales. We align reporting with the business indicators that are available and meaningful.",
    },
    {
      title: "Nobody Knows How the Tracking Was Built",
      description:
        "Unclear tag names, overlapping tools and undocumented triggers make future changes risky. A maintainable setup needs sensible naming, testing notes and a handover that explains how the key events work.",
    },
  ],
};

export const analyticsTrackingStartingSituations = {
  eyebrow: "START FROM YOUR CURRENT SETUP",
  h2: "Whether You Are Starting Fresh or Fixing Existing Tracking",
  intro:
    "You do not always need to rebuild everything. The first step is to understand what is already installed, what the business needs to know and which gaps affect the decisions you are making.",
  cards: [
    {
      title: "Launching a New Website or Campaign",
      description:
        "Define the measurement requirements before launch so key forms, calls to action, campaign parameters and purchase steps are not left as an afterthought. Confirm who owns access to each account and who will validate the events.",
    },
    {
      title: "Existing GA4, but Little Useful Event Data",
      description:
        "Review the property, streams, events, key events and reporting needs. Keep working elements where appropriate, then add or repair the tracking required for the real user journey.",
    },
    {
      title: "Reports Do Not Match Leads or Orders",
      description:
        "Compare event definitions, duplicate firing, attribution settings and the time windows being reviewed. CRM, booking or order data may help explain the gap when it is available and appropriate to use.",
    },
    {
      title: "An Agency or Developer Changed the Website",
      description:
        "Check that tags and triggers still work after changes to forms, routes, checkout, consent banners or frontend code. Validate important interactions in the updated experience rather than assuming the old setup still applies.",
    },
  ],
  buttonText: "Review My Tracking Setup",
  buttonHref: "#analytics-tracking-contact",
};

export const analyticsTrackingScope = {
  id: "analytics-tracking-scope",
  eyebrow: "WHAT WE CAN SET UP",
  h2: "Tracking Built Around Your Website, Campaigns and Sales Journey",
  intro:
    "The scope should fit your current stack and the questions you need answered. Depending on access and technical requirements, work may involve an audit, a new implementation, repairs to existing tags or a reporting layer on top of reliable data.",
  items: [
    {
      title: "GA4 Configuration & Event Planning",
      description:
        "Review or configure the GA4 property and web stream, agree on the events that matter, define suitable parameters, and identify which actions should be designated as key events for reporting. Property creation, account restructuring and historic-data limitations should be confirmed during discovery.",
    },
    {
      title: "Google Tag Manager Setup & Maintenance",
      description:
        "Organize tags, triggers and variables so tracking logic is easier to inspect and maintain. Where GTM is appropriate, use clear naming and a controlled publishing process instead of adding disconnected scripts without an implementation plan.",
    },
    {
      title: "Lead & Enquiry Tracking",
      description:
        "Measure suitable website form completions, booking confirmations, click-to-call links, WhatsApp links and other agreed contact actions. A click is an intent signal - not proof that a phone conversation happened or that a lead was qualified - so reporting should label it accordingly.",
    },
    {
      title: "Google Ads & Paid-Media Conversion Tracking",
      description:
        "Review or configure agreed conversion actions and their relationship to website events. Enhanced conversions, Meta Pixel, Conversions API, other ad-platform tags or CRM/offline feedback may be relevant, but each requires a separate fit, consent and implementation review.",
    },
    {
      title: "Ecommerce Event Measurement",
      description:
        "For supported stores, plan and validate events such as product views, cart actions, checkout steps and purchases, with relevant product, currency and value parameters where available. The work depends on the ecommerce platform, theme or app setup, checkout domain and order-confirmation flow.",
    },
    {
      title: "Campaign & Cross-Domain Measurement",
      description:
        "Review UTM conventions, referral exclusions, internal-traffic treatment and cross-domain configuration where relevant. This can help preserve useful source context across a customer journey, but it cannot remove every attribution limitation.",
    },
    {
      title: "Reporting & Decision Dashboards",
      description:
        "Create or improve reports that bring the agreed indicators together - such as source, landing page, event, campaign, ecommerce or lead signals. Dashboard tools and refresh schedules should be selected according to data sources, access and ongoing maintenance requirements.",
    },
    {
      title: "Implementation Testing & Validation",
      description:
        "Test the agreed tracking against real website interactions before and after release. Check that important events fire at the right point, carry the expected parameters and do not duplicate across forms, route changes, booking flows or purchase confirmations. The final test coverage depends on the access and test environment available.",
    },
  ],
  scopeNote:
    "Confirm the exact deliverables before publishing this as a fixed package. Server-side tagging, custom data-layer development, CRM integrations, offline conversion imports, consent-management-platform implementation, advanced ecommerce tracking and dashboard connectors may require separate technical discovery and scoping.",
};

export const analyticsTrackingEventFramework = {
  id: "analytics-tracking-events",
  eyebrow: "WHAT SHOULD BE MEASURED?",
  h2: "Track the Milestones That Matter in Your Customer Journey",
  intro:
    "A good tracking plan does not label every interaction a conversion. It separates diagnostic behaviour from meaningful business actions, then defines how each event will be triggered, tested and used in reporting.",
  groups: [
    {
      title: "Lead Generation & Service Websites",
      description:
        "Measure the actions that indicate a visitor is progressing toward an enquiry, while keeping early intent separate from a confirmed submission.",
      events: [
        {
          name: "Form start / form interaction",
          purpose:
            "Understand whether visitors begin a form and where friction may occur. This is a diagnostic event, not a completed lead.",
        },
        {
          name: "Successful form submission",
          purpose:
            "Record an enquiry only when there is a reliable success signal, such as a confirmed response or success state. Avoid relying only on a submit-button click.",
        },
        {
          name: "Phone or WhatsApp link click",
          purpose:
            "Capture a visitor's decision to open a contact channel. Report it as a contact click unless call completion or conversation outcome is separately measured.",
        },
        {
          name: "Appointment or consultation booking",
          purpose:
            "Where the booking flow supports it, distinguish opening the scheduler from a confirmed appointment and, if available, a completed visit.",
        },
      ],
    },
    {
      title: "Ecommerce & Online Payments",
      description:
        "Use a consistent event model for important shopping steps, and validate item, value and currency information against the actual store behaviour.",
      events: [
        {
          name: "view_item / view_item_list",
          purpose:
            "Understand which products or product lists shoppers view, where the store can provide reliable item data.",
        },
        {
          name: "add_to_cart / begin_checkout",
          purpose:
            "Measure progression through the purchase journey and identify changes in cart or checkout behaviour.",
        },
        {
          name: "purchase",
          purpose:
            "Record a confirmed order with appropriate transaction identifiers and value details where supported, and check for duplicate purchase events.",
        },
        {
          name: "Refunds and order adjustments",
          purpose:
            "Consider how refunds, cancellations, COD confirmation or payment failures affect revenue interpretation when the ecommerce system exposes that information.",
        },
      ],
    },
    {
      title: "Content, Campaigns & Customer Engagement",
      description:
        "Use engagement signals to understand the path to an outcome, but do not mistake engagement volume for commercial impact.",
      events: [
        {
          name: "Campaign source and medium",
          purpose:
            "Use agreed UTM conventions so campaign links can be interpreted consistently, subject to tagging discipline and platform limitations.",
        },
        {
          name: "Important CTA or resource interaction",
          purpose:
            "Measure actions such as opening a product demo, downloading a guide or starting a signup when those actions help answer a specific question.",
        },
        {
          name: "Qualified lead or downstream outcome",
          purpose:
            "Where reliable CRM or sales data and suitable integrations exist, connect initial enquiries with later qualification, booked work or sales outcomes. This should be separately scoped and consent-aware.",
        },
      ],
    },
  ],
  implementationNote:
    "The examples are a planning framework, not a promise that every event is supported on every website. The final event names, parameters, triggers and reporting treatment must be agreed against the actual user journey and platform requirements.",
};

export const analyticsTrackingAudit = {
  eyebrow: "WHAT A TRACKING REVIEW SHOULD CHECK",
  h2: "Find the Data Problems Before Building More Reports",
  intro:
    "A tracking audit should look at how data is produced, not just whether an analytics tag is present. These checks help separate configuration issues from differences that are expected between reporting systems.",
  checks: [
    {
      title: "Installation & Tag Ownership",
      description:
        "Identify which tags and containers are installed, where they load and who controls the underlying Google or ad-platform accounts. Look for overlapping hard-coded tags and GTM implementations that may send duplicate events.",
      evidenceToReview: "Site implementation, page source where useful, GTM workspace and account access.",
    },
    {
      title: "Event Definition & Trigger Quality",
      description:
        "Check that each important event represents the intended action and fires at the correct point in the flow. Test real forms, route changes, booking confirmations and purchase states instead of assuming a click means success.",
      evidenceToReview: "Event plan, GTM Preview / Tag Assistant, GA4 DebugView and test interactions.",
    },
    {
      title: "Duplicate & Missing Events",
      description:
        "Investigate double-firing, missing tags, race conditions and changes caused by frontend navigation, form tools, payment providers or consent updates.",
      evidenceToReview: "Tag firing sequence, event timestamps, transaction identifiers and test records.",
    },
    {
      title: "Campaign Attribution Context",
      description:
        "Review UTM conventions, redirects, unwanted referrals, internal traffic and cross-domain requirements where they could affect how a journey is reported.",
      evidenceToReview: "Campaign URLs, landing-page redirects, domain configuration and traffic reports.",
    },
    {
      title: "Consent & Data Handling",
      description:
        "Check whether tags behave in line with the site's consent mechanism and relevant platform settings. The correct implementation depends on the markets served, tools used and the business's privacy obligations.",
      evidenceToReview: "Consent banner behaviour, tag consent settings and agreed privacy requirements.",
    },
    {
      title: "Reporting & Business Reconciliation",
      description:
        "Compare like with like: the same event definition, date range, conversion window and business outcome. Investigate inconsistencies without assuming platform-reported totals should be identical to CRM or finance records.",
      evidenceToReview: "GA4, ad-platform reports, booking/order records and CRM outcomes where accessible.",
    },
  ],
  closingCopy:
    "The output should be a prioritized issue list: what is broken, what is missing, what is simply measured differently, which items matter commercially and what work is required to address them.",
};

export const analyticsTrackingMeasurementModel = {
  eyebrow: "FROM EVENTS TO DECISIONS",
  h2: "Every Important Metric Needs a Clear Definition",
  intro:
    "Reliable reporting starts with shared definitions. Before building a dashboard, agree what each metric means, which system is the source for it and what decision the metric is intended to support.",
  layers: [
    {
      number: "01",
      title: "Business Outcome",
      description:
        "State the result the business cares about: a qualified lead, booked appointment, paid order, subscription or another agreed outcome.",
    },
    {
      number: "02",
      title: "Observable Event",
      description:
        "Identify the digital action or system confirmation that can represent that outcome. If the website cannot observe the actual outcome, name the proxy accurately.",
    },
    {
      number: "03",
      title: "Implementation & Validation",
      description:
        "Define when the event fires, which parameters it sends, what should prevent duplicate firing, and how the setup will be tested in realistic scenarios.",
    },
    {
      number: "04",
      title: "Reporting & Interpretation",
      description:
        "Choose how the event is reported, which comparisons are valid, and what caveats users need to understand before drawing a conclusion.",
    },
  ],
  example: {
    title: "Example: a service enquiry",
    rawSignal: "A visitor clicks the WhatsApp link on a service page.",
    measuredSignal: "A WhatsApp contact click is recorded with appropriate page and campaign context where available.",
    businessOutcome: "A qualified enquiry or sale is only recorded if a suitable follow-up system confirms that later outcome.",
    lesson:
      "This distinction keeps a useful intent signal from being presented as proof of a completed lead or sale.",
  },
};

export const analyticsTrackingProcess = {
  id: "analytics-tracking-process",
  eyebrow: "HOW WE WORK",
  h2: "Define, Implement, Test and Hand Over a Measurement Setup",
  intro:
    "Tracking is not finished when a tag is added. The important events need clear definitions, a tested implementation and documentation that makes future changes safer and easier to understand.",
  steps: [
    {
      number: "01",
      title: "Understand the Business & Customer Journey",
      description:
        "Clarify what the business sells, which actions matter, how leads or purchases are completed, what systems record the outcome and which decisions the measurement needs to support.",
    },
    {
      number: "02",
      title: "Audit Access, Tags & Existing Data",
      description:
        "Review the current GA4 property, Tag Manager container, website implementation, ad-platform connections and known reporting gaps where access is available. Preserve useful configuration when it is sound.",
    },
    {
      number: "03",
      title: "Create the Measurement Plan",
      description:
        "Document the events, parameters, triggers, key events, campaign conventions and expected reporting treatment. Separate confirmed outcomes from proxy signals and diagnostic events.",
    },
    {
      number: "04",
      title: "Implement the Agreed Setup",
      description:
        "Configure the tags and event logic appropriate to the platform and site. Custom data-layer work, server-side tagging, CRM connections or consent platform changes are included only when scoped.",
    },
    {
      number: "05",
      title: "Test Real Scenarios & Validate Data",
      description:
        "Use preview/debug tools and controlled test interactions to confirm firing conditions and parameters. Test important branches such as form errors, duplicate submissions, mobile actions, route changes and purchase confirmation where relevant.",
    },
    {
      number: "06",
      title: "Document, Handover & Review",
      description:
        "Record what was configured, what was tested, known limitations and any follow-up needed. After publishing, verify that expected events arrive in the live reporting environment when the data has had time to process.",
    },
  ],
};

export const analyticsTrackingBusinessFit = {
  eyebrow: "MEASUREMENT FOR DIFFERENT BUSINESS MODELS",
  h2: "The Right Tracking Plan Depends on How Customers Convert",
  intro:
    "Different businesses need different evidence. A local service business may need to understand relevant calls and enquiries, while an ecommerce team needs order and checkout data. These are starting points for discovery, not fixed templates.",
  cards: [
    {
      title: "Local Services & Multi-Location Businesses",
      description:
        "Measure form submissions, contact clicks, booking actions and relevant location or landing-page context where supported. If enquiries are assigned across branches, consider whether the reporting can show location-level performance without exposing unnecessary personal data.",
    },
    {
      title: "Clinics & Appointment-Based Services",
      description:
        "Separate clicks on phone or booking links from confirmed appointments. The booking provider, website flow and privacy requirements determine which events can be measured and what information should be passed into analytics tools.",
    },
    {
      title: "Ecommerce Brands",
      description:
        "Check product, cart, checkout and purchase events, including values and currency when available. Take account of payment gateways, external checkout steps, COD or refund processes when interpreting orders and revenue.",
    },
    {
      title: "B2B & High-Consideration Sales",
      description:
        "Track the steps available on the site - such as a demo request, consultation form or resource download - and consider CRM feedback if the business needs visibility into qualified opportunities and closed revenue.",
    },
    {
      title: "Businesses Running Google or Meta Ads",
      description:
        "Check that ad conversion actions reflect the intended business objective and that campaign links are tagged consistently. Where permitted and technically supported, assess whether enhanced conversions or platform-specific integrations are appropriate.",
    },
    {
      title: "Content-Led & Organic Acquisition",
      description:
        "Understand which landing pages and content journeys help visitors progress toward a meaningful action. Use engagement metrics to diagnose behaviour, then relate them to lead or purchase outcomes where reliable data exists.",
    },
  ],
};

export const analyticsTrackingPrivacyAndGovernance = {
  eyebrow: "BUILT WITH CONTROL AND CLARITY",
  h2: "Tracking Should Be Useful, Maintainable and Consent-Aware",
  intro:
    "Analytics implementation operates within technical, platform and privacy constraints. The setup should account for user choices, the markets the business serves, the data being collected and the people responsible for maintaining it.",
  principles: [
    {
      title: "Respect the Consent Mechanism",
      description:
        "Where a consent banner or consent-management platform is required, configure tags to respond to the applicable consent state. Consent Mode is not itself a consent banner and does not replace the business's legal assessment.",
    },
    {
      title: "Collect Only What the Plan Requires",
      description:
        "Avoid sending unnecessary personal information into analytics or advertising tools. Event parameters should serve a defined reporting purpose and follow applicable platform policies.",
    },
    {
      title: "Keep the Setup Understandable",
      description:
        "Use clear naming, document dependencies and avoid unnecessary overlapping tags. Maintainable configuration helps the business make future changes without losing track of how events are generated.",
    },
    {
      title: "Keep Account Ownership Transparent",
      description:
        "Agree who owns and administers GA4, Tag Manager, ad-platform and dashboard accounts. Access and handover arrangements should be decided at the start, not after the implementation is complete.",
    },
    {
      title: "Be Clear About Measurement Limits",
      description:
        "Consent choices, browser restrictions, platform attribution models, blocked scripts and offline sales processes can limit what is observable. Reporting should explain those limits rather than suggest that tracking can see every interaction.",
    },
  ],
  note:
    "This section describes implementation principles, not legal advice or a guarantee of compliance. Applicable obligations depend on the markets served, site practices, data collected and the tools involved.",
};

export const analyticsTrackingReporting = {
  eyebrow: "REPORTS PEOPLE CAN ACTUALLY USE",
  h2: "Clear Reporting Starts with the Questions You Need to Answer",
  intro:
    "A dashboard should make a recurring decision easier. We first agree on the audience, the key questions and the trusted source for each metric, then select a reporting view that fits the data and the team's working habits.",
  questions: [
    {
      question: "Which channels and campaigns bring visitors?",
      explanation:
        "Review acquisition source, medium, campaign and landing-page context where links and platform data are tagged consistently.",
    },
    {
      question: "Which pages help visitors take the next step?",
      explanation:
        "Compare relevant page journeys with the agreed events, while taking traffic volume, page purpose and conversion opportunity into account.",
    },
    {
      question: "Are important actions being measured correctly?",
      explanation:
        "Monitor key-event coverage, event counts and implementation changes. A sudden rise or drop should prompt a check of both real behaviour and tracking changes.",
    },
    {
      question: "What happens after a lead or order is recorded?",
      explanation:
        "Where suitable CRM, booking or commerce data exists, look for the progression from initial digital action to the later business result. Do not infer that result from a click event alone.",
    },
  ],
  deliverables: [
    "Agreed metric and event definitions",
    "An implementation and validation summary",
    "A report or dashboard aligned to the agreed questions, if included in scope",
    "Known limitations, unresolved gaps and practical next steps",
  ],
  note:
    "A dashboard cannot repair missing, duplicated or incorrectly defined input data. Reporting design and ongoing analysis are separate from the implementation work needed to make the source data dependable.",
};

export const analyticsTrackingWhyBixeltek = {
  eyebrow: "WHY BIXELTEK",
  h2: "Measurement Considered Alongside Your Website and Growth Channels",
  intro:
    "Tracking sits between the website, campaigns and the systems that record business outcomes. Bixeltek works across web development and digital marketing, which provides a practical context for diagnosing whether a measurement problem sits in the tag setup, the page interaction, the campaign configuration or the next step in the customer journey.",
  points: [
    {
      title: "We Start with the Question, Not the Tool",
      description:
        "The first step is to understand what the team needs to decide. Tool configuration follows the measurement requirement instead of adding events or dashboards without a clear purpose.",
    },
    {
      title: "We Separate Signals from Outcomes",
      description:
        "A click, a successful form submission, a qualified lead and a sale are different things. Reporting should make those distinctions clear so activity is not overstated as business performance.",
    },
    {
      title: "We Check the Real Customer Journey",
      description:
        "Forms, checkout steps, dynamic pages and booking tools can behave differently from a static page. Testing should reflect the actual interaction and the edge cases that could change the data.",
    },
    {
      title: "We Make Limitations Visible",
      description:
        "Attribution differences, incomplete CRM data and consent or platform constraints should be explained clearly. Reliable work includes knowing what the data cannot prove.",
    },
    {
      title: "We Aim for a Maintainable Handover",
      description:
        "The event plan, validation notes and agreed ownership should make the implementation easier for your team or future developers to understand and maintain.",
    },
    {
      title: "We Prioritize Fixes by Business Impact",
      description:
        "Not every tracking gap deserves the same urgency. We help distinguish issues that affect key conversion decisions from lower-priority reporting improvements, so the next steps reflect your business goals, technical dependencies and available evidence.",
    },
  ],
};


export const analyticsTrackingInvestment = {
  eyebrow: "SCOPE & INVESTMENT",
  h2: "What Determines the Cost of Analytics & Tracking Work?",
  intro:
    "Pricing depends on the complexity of the current setup and the evidence the business needs. A small repair to a few existing events is different from a multi-domain ecommerce implementation with ad-platform integrations and CRM feedback.",
  factors: [
    {
      title: "Current Setup & Data Quality",
      description:
        "Whether the site already has a usable GA4 property and Tag Manager container, or needs an audit, cleanup, new configuration or migration work.",
    },
    {
      title: "Number & Complexity of Events",
      description:
        "The events, parameters, custom triggers, data-layer changes and edge cases required across the website, checkout or booking flow.",
    },
    {
      title: "Platforms & Integrations",
      description:
        "Whether the work involves GA4 and GTM alone or includes Google Ads, Meta, additional platforms, cross-domain measurement, CRM data or server-side components.",
    },
    {
      title: "Ecommerce or Lead-Management Logic",
      description:
        "The need to account for external checkout, payment status, order identifiers, duplicate events, lead qualification, bookings or offline outcomes.",
    },
    {
      title: "Reporting & Ongoing Support",
      description:
        "Whether the engagement ends with implementation and handover or also includes dashboards, recurring quality checks, interpretation and future changes.",
    },
  ],
  note:
    "Avoid publishing fixed prices or completion timelines until the delivery scope is defined. Platform access, development dependencies, consent requirements and third-party systems can materially affect the work.",
};

export const analyticsTrackingRelatedServices = [
  {
    title: "Google Ads Management",
    description:
      "Connect paid-search activity to appropriate conversion signals and clearer campaign evaluation.",
    href: "/services/google-ads",
  },
  {
    title: "Meta Ads Management",
    description:
      "Review the website and platform-side measurement needed to evaluate paid social campaigns.",
    href: "/services/meta-ads",
  },
  {
    title: "SEO Services",
    description:
      "Understand organic acquisition, landing-page behaviour and the actions visitors take after search.",
    href: "/services/seo-services",
  },
  {
    title: "Web Design & Development",
    description:
      "Implement or repair tracking when the site, form, checkout or application flow needs development work.",
    href: "/services/web-design",
  },
  {
    title: "Ecommerce Development",
    description:
      "Build a shopping journey where product, checkout and purchase events can be planned alongside the store implementation.",
    href: "/ecommerce-websites",
  },
  {
    title: "Web Application Development",
    description:
      "Connect measurement to custom forms, account areas or workflow systems when the underlying product needs development work.",
    href: "/web-application-development",
  },
];

export const analyticsTrackingFaqs = [
  {
    question: "What is included in Analytics & Tracking services?",
    answer:
      "Depending on the agreed scope, the work can include a tracking audit, GA4 configuration, Google Tag Manager setup, event planning, form and contact-action tracking, ecommerce events, ad-platform conversion measurement, validation, reporting and handover documentation. CRM integrations, server-side tagging, consent platform implementation and complex data-layer development should be scoped explicitly.",
  },
  {
    question: "What is the difference between GA4 and Google Tag Manager?",
    answer:
      "GA4 is an analytics platform that receives and reports on measurement data. Google Tag Manager helps manage the tags and triggers that send data to analytics and other supported tools. They work together, but GTM does not automatically make the data accurate; event definitions and testing still matter.",
  },
  {
    question: "Can you fix our existing tracking instead of rebuilding everything?",
    answer:
      "Often, the sensible first step is an audit. If the current property, container and event setup are sound, they may be retained and repaired. The decision depends on account access, implementation quality, the website's current behaviour and whether the existing setup can support the required measurements.",
  },
  {
    question: "Why do Google Analytics, Google Ads, Meta and our CRM show different numbers?",
    answer:
      "They may count different events, use different attribution models or conversion windows, process consent and reporting data differently, or record outcomes at different stages. Duplicate or missing tags can add further discrepancies. We can investigate and make the definitions more consistent and the differences more explainable, but the systems should not be expected to show identical totals in every case.",
  },
  {
    question: "Can you track forms, phone calls and WhatsApp enquiries?",
    answer:
      "We can assess tracking for successful website form submissions and clicks on phone or WhatsApp links, subject to the site and link implementation. A click on a contact link does not prove that a call connected, a conversation occurred or the lead was qualified. Measuring those later outcomes requires suitable call, CRM or sales data and should be scoped separately.",
  },
  {
    question: "Can you set up ecommerce tracking for Shopify, WooCommerce or a custom store?",
    answer:
      "Ecommerce tracking can be planned for supported platforms, but the exact method depends on the store's configuration, theme or apps, checkout flow, payment provider and available event data. The implementation should be tested against real or controlled test journeys, including purchase values and duplicate-purchase risks where relevant.",
  },
  {
    question: "Will tracking show exactly which campaign generated every sale?",
    answer:
      "No setup can guarantee complete, person-level attribution for every interaction. Consent choices, browser and platform restrictions, multiple devices, offline sales and platform-specific attribution rules can limit visibility. A sound setup improves the quality and consistency of available evidence while making those limitations clear.",
  },
  {
    question: "Do we need Google Tag Manager if GA4 is already installed?",
    answer:
      "Not in every case. GTM can be useful when you need maintainable management of multiple tags, custom events or marketing integrations, but it is not automatically required for every site. We assess the current implementation and expected changes before recommending whether GTM adds value.",
  },
  {
    question: "Do you set up Meta Pixel, Conversions API or enhanced conversions?",
    answer:
      "These may be appropriate depending on the ad platforms used, the data available, the website architecture, consent requirements and integration support. They should be separately checked, implemented and validated where included; none should be presented as a guarantee of perfect attribution or recovery of every missed conversion.",
  },
  {
    question: "Can you create a dashboard for our team?",
    answer:
      "A dashboard can be included when the data sources, metrics, access and ongoing maintenance requirements are understood. We first agree on the questions the dashboard needs to answer. Visualizing incomplete or incorrectly defined data will not solve the underlying tracking problem, so data quality comes first.",
  },
  {
    question: "Does Analytics & Tracking make our website compliant with privacy laws?",
    answer:
      "No technical setup alone can guarantee legal compliance. We can review technical consent behaviour and tag configuration against the requirements provided, but the appropriate legal basis, disclosures and obligations depend on your business, users, markets and data practices and may require qualified legal advice.",
  },
  {
    question: "How long does a tracking setup take?",
    answer:
      "Timing depends on the number of events, current tag quality, access, development work, ecommerce or booking complexity, consent requirements and third-party integrations. A simple configuration may be much quicker than a multi-domain or server-side project. We should confirm a timeline after reviewing the actual requirements rather than promise one timeframe for every setup.",
  },
];

export const analyticsTrackingFinalCta = {
  id: "analytics-tracking-contact",
  eyebrow: "READY TO MAKE YOUR DATA MORE USEFUL?",
  h2: "Let's Find Out What Your Tracking Is and Isn't Telling You",
  description:
    "Whether you're preparing a new website, running campaigns with unclear conversion data or trying to understand ecommerce performance, start with the decisions you need to make and the data available today. We'll identify the practical measurement priorities before recommending an implementation scope.",
  primaryCta: { label: "Review My Tracking Setup", href: "/contact" },
  secondaryCta: { label: "Explore Related Services", href: "/services" },
  supportingCopy:
    "Account access, required integrations, platform support and implementation boundaries should be agreed before work begins.",
};

/**
 * Suggested section order (use selectively; this is a content library, not a mandate
 * to render every section as a separate card grid):
 *
 * 1. Hero
 * 2. Overview: measurement should answer business questions
 * 3. Problems tracking should solve
 * 4. Starting situations (may be condensed into the problem section)
 * 5. Scope / what we can set up
 * 6. Event framework (consider an interactive or tabbed layout, not a wall of cards)
 * 7. Tracking audit (can be a split diagnostic section)
 * 8. Measurement model (a horizontal 4-step flow or visual diagram)
 * 9. Process
 * 10. Business-model fit (only if it adds audience relevance beyond event examples)
 * 11. Privacy and governance
 * 12. Reporting (show a grounded example layout only if the UI supports it)
 * 13. Verified case study or implementation proof only if Bixeltek has approved evidence
 * 14. Why Bixeltek
 * 15. Investment factors
 * 16. Related services
 * 17. FAQs
 * 18. Final CTA
 *
 * Research-informed details: GA4 events/key events; Google Tag Manager Preview/Debug;
 * consent-aware tag behaviour; and GA4 ecommerce event design. These concepts align
 * with current official documentation, but do not establish that Bixeltek currently
 * offers every integration listed here. Confirm internal delivery capability before
 * publishing any platform or service as a committed offering.
 *
 * Official references for implementation review:
 * - https://developers.google.com/analytics/devguides/collection/ga4/events
 * - https://support.google.com/tagmanager/answer/6107056
 * - https://support.google.com/tagmanager/answer/10718549
 * - https://support.google.com/analytics/answer/12200568
 * - https://support.google.com/google-ads/answer/13262500
 *
 * Competitor pages reviewed for positioning and common service expectations:
 * - https://www.dvsdigitals.com/services/ga4-gtm-tracking-setup
 * - https://webmonx.com/google-analytics-services/
 * - https://www.epixs.in/services/digital-marketing/analytics-tracking/
 * - https://www.gohnd.com/services/conversion-tracking-setup/
 */
