import type {
  BreadcrumbItem,
  JumpLinkItem,
  ProblemCard,
  ScopeCard,
  InvestmentFactorCard,
  RelatedServiceCard,
  FAQItem,
} from "./ecom";

// ============================================================
// PAYMENT GATEWAY INTEGRATION - PAGE DATA
// Specialist child page under Ecommerce Development.
// Content-only: map these exports to the existing page components.
// ============================================================

export interface PaymentIntegrationMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface PaymentIntegrationPoint {
  title: string;
  description: string;
}

export interface PaymentIntegrationProcessStage {
  number: string;
  title: string;
  description: string;
}

export interface PaymentIntegrationTechnologyItem {
  name: string;
  category: string;
  description: string;
}

export interface PaymentIntegrationDecisionItem {
  title: string;
  context: string;
  consideration: string;
}

export interface PaymentIntegrationWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  points: PaymentIntegrationPoint[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface PaymentIntegrationFinalCtaData {
  id: string;
  eyebrow: string;
  h2: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  supportingCopy?: string;
}

export const paymentIntegrationMetadata: PaymentIntegrationMetadata = {
  title: "Payment Gateway Integration Services for Ecommerce | Bixeltek",
  description:
    "Integrate payment gateways with your ecommerce store or custom checkout. Plan payment verification, order status handling, refunds and testing around your platform and business workflow.",
  keywords: [
    "payment gateway integration",
    "payment gateway integration services",
    "ecommerce payment integration",
    "payment gateway integration for ecommerce",
    "Razorpay integration",
    "Stripe payment integration",
    "PayPal integration",
    "WooCommerce payment integration",
    "Shopify payment integration",
    "custom checkout integration",
  ],
  canonical:
    "https://bixeltek.com/services/ecommerce-development/payment-gateway-integration",
};

// ============================================================
// BREADCRUMBS
// Confirm new route and parent breadcrumb before publication.
// ============================================================

export const paymentIntegrationBreadcrumbs: BreadcrumbItem[] = [
  { label: "Services", href: "/services" },
  {
    label: "Ecommerce Development",
    href: "/services/ecommerce-development",
  },
  {
    label: "Payment Gateway Integration",
    href: "/services/ecommerce-development/payment-gateway-integration",
  },
];

// ============================================================
// JUMP LINKS - keep href IDs aligned with the rendered sections.
// ============================================================

export const paymentIntegrationJumpLinks: JumpLinkItem[] = [
  { label: "Overview", href: "#payment-integration-overview" },
  { label: "Payment Challenges", href: "#payment-integration-problems" },
  { label: "What We Integrate", href: "#payment-integration-scope" },
  { label: "Implementation Decisions", href: "#payment-integration-decisions" },
  { label: "Use Cases", href: "#payment-integration-use-cases" },
  { label: "Our Process", href: "#payment-integration-process" },
  { label: "Why Bixeltek", href: "#why-bixeltek" },
  { label: "Investment", href: "#investment" },
  { label: "FAQs", href: "#faqs" },
];

// ============================================================
// HERO
// ============================================================

export const paymentIntegrationHero = {
  eyebrow: "ECOMMERCE PAYMENTS & CHECKOUT INTEGRATION",
  h1: "Payment Integration That Keeps Checkout and Orders in Sync",
  p1:
    "A payment gateway is only one part of getting an ecommerce order paid. The checkout, backend, provider response and order record must agree on what happened-even when a customer closes the page, a response arrives late or a transaction needs to be retried.",
  p2:
    "Bixeltek helps businesses connect payment providers to Shopify, WooCommerce and custom ecommerce systems, with the integration approach shaped around the existing platform, payment requirements and order workflow.",
  primaryButtonText: "Talk to an Expert",
  primaryButtonHref: "#final-cta",
  secondaryLinkText: "Explore Ecommerce Development",
  secondaryLinkHref: "/services/ecommerce-development",
  microcopy:
    "Launching online payments, replacing a fragile integration or fixing checkout and order-status issues? Start with the current setup and the payment flow your business needs.",
};

// ============================================================
// PROBLEMS - recognizable breakdowns, not generic fear statements.
// ============================================================

export const paymentIntegrationProblems: ProblemCard[] = [
  {
    title: "The Customer Pays, but the Order Still Looks Unpaid",
    description:
      "A browser redirect or front-end success message is not, by itself, a dependable source of payment truth. The integration needs to verify the transaction with the provider and update the order through a controlled server-side flow.",
  },
  {
    title: "A Retry Can Create Confusion-or a Duplicate Charge",
    description:
      "Customers may click again when a page appears stuck, or return after a bank or network delay. The checkout should distinguish a retry from a new payment attempt and handle repeated provider notifications safely.",
  },
  {
    title: "Failed and Pending Payments Have No Clear Next Step",
    description:
      "A payment can be declined, interrupted or left awaiting confirmation. Without clear states and recovery paths, customers may be unsure whether to retry, contact support or wait-and operations staff may struggle to investigate.",
  },
  {
    title: "Refunds and Cancellations Do Not Match the Order Record",
    description:
      "Issuing a refund is only one part of the workflow. The store may also need to reflect refund status, update the customer, preserve the transaction reference and account for partial refunds or cancellations where supported.",
  },
  {
    title: "The Gateway Fits the Market but Not the Store",
    description:
      "Provider availability, merchant eligibility, currencies, payment methods, platform limits and settlement needs vary. Choosing by brand recognition alone can create avoidable configuration work or leave a critical payment method unavailable.",
  },
  {
    title: "Checkout Works in One Test, Not Across Real Scenarios",
    description:
      "A happy-path test will not reveal every issue. Redirect interruptions, delayed notifications, duplicate webhooks, mobile browsers, cancelled payments and live-versus-test configuration need deliberate validation before launch.",
  },
];

// ============================================================
// WHEN PAYMENT INTEGRATION WORK MAKES SENSE
// ============================================================

export const whenYouNeedPaymentIntegration = {
  eyebrow: "WHEN TO BRING IN A PAYMENT INTEGRATION DEVELOPER",
  h2: "The Right Fix Depends on Where the Payment Flow Breaks",
  intro:
    "A payment problem does not always require a new gateway or a custom checkout. The first step is to identify whether the gap is provider configuration, platform capability, server-side verification, order-state handling or a wider business workflow.",
  points: [
    {
      title: "You are launching a new ecommerce store",
      description:
        "Choose a provider and checkout approach that fit the merchant account, customer market, available payment methods and platform before configuring the live flow.",
    },
    {
      title: "Your existing gateway needs to be connected",
      description:
        "Integrate a suitable provider with an existing Shopify, WooCommerce or custom-built store while preserving the store's order and customer workflows.",
    },
    {
      title: "Payment status and order status disagree",
      description:
        "Investigate callback verification, webhook handling, delayed responses and the rules that move an order from pending to paid, failed, cancelled or refunded.",
    },
    {
      title: "You are adding payment methods or entering another market",
      description:
        "Check provider availability, merchant eligibility, supported currencies, settlement arrangements and the checkout experience required for the new market.",
    },
    {
      title: "You need custom checkout or backend behaviour",
      description:
        "Assess whether existing platform settings or a supported extension are sufficient, or whether custom API and server-side work is justified.",
    },
    {
      title: "You need payment workflows beyond a one-time purchase",
      description:
        "Subscriptions, deposits, partial payments, split payments or marketplace payouts require provider-specific capability checks and a clearly defined transaction model.",
    },
  ],
  notAlwaysNeeded: {
    title: "When custom integration may be unnecessary",
    description:
      "If the ecommerce platform already supports the required provider through a maintained, compatible integration, using it may be simpler to operate than building a custom connection. Custom work should solve a verified limitation or business requirement-not duplicate functionality that already works.",
  },
};

// ============================================================
// SCOPE - 8 panels, each describing distinct implementation work.
// ============================================================

export const paymentIntegrationScope: ScopeCard[] = [
  {
    title: "Gateway & Payment-Method Fit",
    description:
      "Assess providers against the merchant's country and eligibility, checkout platform, currencies, settlement needs, available payment methods, refund capability and operating model. The aim is to choose a workable fit before code or configuration begins.",
  },
  {
    title: "Shopify, WooCommerce & Custom Checkout Integration",
    description:
      "Connect the provider through the platform's supported settings, extension or API path. The implementation depends on checkout customization limits, plugin compatibility, the existing storefront and whether server-side work is needed.",
  },
  {
    title: "Order Creation & Server-Side Verification",
    description:
      "Define how an order or payment intent is created, which system is authoritative, and how the backend verifies the provider response before treating a transaction as paid. Secret credentials stay on trusted server infrastructure, not in browser code.",
  },
  {
    title: "Webhooks & Payment-State Handling",
    description:
      "Configure relevant provider notifications, verify their authenticity and process events safely when they arrive asynchronously or more than once. Map provider states to clear store states so fulfilment follows verified payment status rather than a browser redirect alone.",
  },
  {
    title: "Failed, Pending & Retried Payments",
    description:
      "Plan customer-facing messages and recovery paths for declines, interruptions, pending confirmation and abandoned checkout. Where supported, use provider or backend references to prevent repeated requests from accidentally creating duplicate orders or charges.",
  },
  {
    title: "Refunds, Cancellations & Adjustments",
    description:
      "Implement the agreed refund and cancellation flow, including status updates and transaction references. Partial refunds, multiple captures, cancellations after payment and automated refund rules depend on the gateway and the store's order model.",
  },
  {
    title: "Regional Methods, Currency & Advanced Workflows",
    description:
      "Assess requirements such as UPI, cards, wallets, local methods, multi-currency checkout, subscriptions, deposits or split payments where the provider and merchant account support them. These are separate requirements to confirm, not features to assume in every integration.",
  },
  {
    title: "Testing, Reconciliation & Launch Checks",
    description:
      "Test successful, failed, cancelled, pending and repeated-notification scenarios in the provider's test environment. Before go-live, validate live credentials, webhook configuration, order updates, customer messages, refund paths and how staff investigate transaction mismatches.",
  },
];

// ============================================================
// IMPLEMENTATION DECISIONS - concise, decision-led guidance.
// ============================================================

export const paymentIntegrationDecisions: PaymentIntegrationDecisionItem[] = [
  {
    title: "Plugin or Custom Integration?",
    context:
      "Ecommerce platforms may offer native payment setup or maintained provider plugins.",
    consideration:
      "Check compatibility and checkout limits first. Build custom only when existing options cannot meet a real requirement.",
  },
  {
    title: "Hosted or Embedded Checkout?",
    context:
      "Hosted checkout reduces payment handling on your site; embedded checkout offers more control but adds complexity.",
    consideration:
      "Choose based on user experience, platform limits, provider support and security responsibilities.",
  },
  {
    title: "How Are Payments Verified?",
    context:
      "Browser callbacks can fail, and webhooks may arrive late or more than once.",
    consideration:
      "Verify payments server-side, validate webhook signatures and handle duplicate events safely.",
  },
  {
    title: "One Gateway or Multiple?",
    context:
      "Multiple gateways expand payment coverage but increase testing, maintenance and reconciliation work.",
    consideration:
      "Add providers only for clear business needs, with defined flows for orders, refunds and reporting.",
  },
];

// ============================================================
// PROVIDER & PLATFORM CONTEXT
// Examples are not claims of exclusive partnership or universal support.
// ============================================================

export const paymentIntegrationTechnologies: PaymentIntegrationTechnologyItem[] = [
  {
    name: "Razorpay",
    category: "Payment provider",
    description:
      "A provider to evaluate for eligible merchants and supported payment flows, with server-side signature verification and webhook handling designed according to its current documentation.",
  },
  {
    name: "Stripe",
    category: "Payment provider",
    description:
      "A provider to evaluate according to business country, merchant availability, payment methods, checkout approach and transaction lifecycle requirements.",
  },
  {
    name: "PayPal & PayTabs",
    category: "Payment providers",
    description:
      "Provider options already referenced on Bixeltek's existing payment page; suitability and current delivery support should be confirmed against merchant location and project requirements.",
  },
  {
    name: "Shopify & WooCommerce",
    category: "Ecommerce platforms",
    description:
      "Use platform-supported payment settings or compatible integrations where possible, verifying the store plan, plugin, checkout and extension constraints before committing to a solution.",
  },
  {
    name: "Provider APIs & Server Callbacks",
    category: "Integration layer",
    description:
      "Where required, connect the store backend with the provider for order creation, payment verification, notifications, refunds and controlled state changes.",
  },
  {
    name: "Webhooks & Transaction Records",
    category: "Reliability and operations",
    description:
      "Use authenticated event notifications and stored provider references to update order state, support investigation and reconcile records when a customer journey is interrupted.",
  },
];

// ============================================================
// USE CASES - grounded scenarios, not invented client case studies.
// ============================================================

export const paymentIntegrationUseCases = {
  eyebrow: "PAYMENT WORKFLOWS IN PRACTICE",
  h2: "Different Stores Need Different Payment Flows",
  intro:
    "The payment method is only one decision. The order, fulfilment, customer support and finance workflows around it determine what the integration must do.",
  items: [
    {
      title: "A Store Launching Its First Checkout",
      situation:
        "The business needs to accept online payments and confirm paid orders reliably.",
      approach:
        "Choose a suitable provider and supported integration, define order states and validate the complete transaction before launch.",
      successSignal:
        "Test orders move through payment and order states consistently, including failed and cancelled attempts.",
    },
    {
      title: "A Store With Unreliable Payment Confirmation",
      situation:
        "Customers report successful payments, but the store sometimes keeps orders pending or unpaid.",
      approach:
        "Trace server verification, event delivery and state transitions; add safe reconciliation or status checks where needed.",
      successSignal:
        "Support can trace a transaction, and the store has a defined path for resolving status mismatches.",
    },
    {
      title: "A Business Expanding Into Another Market",
      situation:
        "The existing provider or payment methods may not fit the new market, currency or merchant setup.",
      approach:
        "Validate eligibility, settlement, available methods, customer experience and reporting before adding regional configuration or another provider.",
      successSignal:
        "The selected flow supports the intended market and its operating requirements, subject to provider approval.",
    },
    {
      title: "A Store Using Custom Checkout Logic",
      situation:
        "The checkout must support a product-specific flow or connect with custom order-management rules.",
      approach:
        "Define the order and payment lifecycle first, then implement the minimum custom API work needed around the provider's supported flow.",
      successSignal:
        "Payment outcomes map clearly to order, inventory and fulfilment rules without treating an unverified callback as proof of payment.",
    },
    {
      title: "A Business Offering Deposits or Partial Payments",
      situation:
        "A booking, high-value order or service may require a deposit, balance payment or refund handling.",
      approach:
        "Confirm provider support and model the transaction, order balance, refund and cancellation rules explicitly before building the workflow.",
      successSignal:
        "Staff and customers can see what was paid, what remains due and how changes are handled.",
    },
    {
      title: "A Store With More Than One Payment Provider",
      situation:
        "Different regions or business requirements have led to multiple gateways and separate transaction records.",
      approach:
        "Define how each provider maps to orders, refunds, reports and support processes; avoid adding fallback routing without safe retry rules.",
      successSignal:
        "Teams can identify the provider and transaction reference for each order and reconcile exceptions consistently.",
    },
  ],
  note:
    "These are illustrative project situations, not claims that Bixeltek has delivered each scenario. Final feasibility depends on provider approval, platform capabilities and agreed scope.",
};

// ============================================================
// PROCESS
// ============================================================

export const paymentIntegrationProcess: PaymentIntegrationProcessStage[] = [
  {
    number: "01",
    title: "Review the Current Checkout",
    description:
      "Understand the ecommerce platform, existing provider, merchant account, customer market, checkout journey and any known payment or order-status issues.",
  },
  {
    number: "02",
    title: "Define the Payment and Order States",
    description:
      "Map what should happen when a payment succeeds, fails, remains pending, is cancelled or is refunded-and which system is authoritative for each decision.",
  },
  {
    number: "03",
    title: "Choose the Integration Approach",
    description:
      "Compare supported plugin or platform options with hosted checkout and API-based work where relevant. Confirm provider capabilities, permissions and dependencies before locking the scope.",
  },
  {
    number: "04",
    title: "Implement Verification and Events",
    description:
      "Configure the provider connection, keep secrets on the server, validate responses and webhook authenticity, and make state changes safe to process more than once.",
  },
  {
    number: "05",
    title: "Test Complete Transaction Scenarios",
    description:
      "Exercise successful, failed, interrupted, pending, repeated-event, cancellation and refund paths in test mode, including the handoff to order and fulfilment workflows.",
  },
  {
    number: "06",
    title: "Prepare the Launch and Handover",
    description:
      "Verify live configuration, webhook subscriptions, operational access and transaction references. Document how the team reviews payments, handles exceptions and requests future changes.",
  },
];

// ============================================================
// WHY BIXELTEK - six working principles, not generic superiority claims.
// ============================================================

export const paymentIntegrationWhyBixeltek: PaymentIntegrationWhyChooseData = {
  eyebrow: "WHY BIXELTEK",
  h2: "Payment Integration Considered as Part of the Ecommerce System",
  intro:
    "Payment behaviour affects the storefront, order records, customer communication and fulfilment. The integration should be scoped around that full workflow-not just whether a provider's checkout screen opens.",
  points: [
    {
      title: "We Start With the Existing Platform",
      description:
        "The first decision is whether the current Shopify, WooCommerce or custom setup can support the requirement through a maintained integration or needs additional development.",
    },
    {
      title: "We Define What Counts as Paid",
      description:
        "A redirect or front-end message is not the whole transaction record. Payment confirmation needs to follow the provider's verification process and the store's agreed order rules.",
    },
    {
      title: "We Account for Failure Paths",
      description:
        "Pending, cancelled, declined and repeated notifications need deliberate handling so the order and customer experience remain understandable when the happy path breaks.",
    },
    {
      title: "We Keep Security Boundaries Clear",
      description:
        "Provider secrets and sensitive verification belong on trusted server infrastructure. The chosen checkout architecture determines which payment data the store handles and which obligations apply.",
    },
    {
      title: "We Test the Whole Transaction",
      description:
        "Testing should follow payment state changes into order updates, customer messages, refunds and fulfilment-not stop when a test payment succeeds once.",
    },
    {
      title: "We Plan for Operational Ownership",
      description:
        "Transaction references, status records and exception-handling steps help the business investigate mismatches after launch instead of relying on guesswork or individual memory.",
    },
  ],
  closingCopy:
    "The aim is not to add the most complex payment setup. It is to deliver the simplest suitable integration that can be verified, operated and maintained.",
  ctaText: "Discuss Your Payment Integration",
  ctaHref: "#final-cta",
};

// ============================================================
// INVESTMENT FACTORS
// ============================================================

export const paymentIntegrationInvestmentFactors: InvestmentFactorCard[] = [
  {
    title: "Platform and Checkout Constraints",
    description:
      "A supported plugin or built-in provider option differs from custom checkout and backend work. Platform plans, extension points and plugin compatibility can materially change the scope.",
  },
  {
    title: "Provider and Merchant Requirements",
    description:
      "Business eligibility, verification, supported markets, payment methods, account approval and settlement requirements can affect the implementation and launch sequence.",
  },
  {
    title: "Payment-State and Order Logic",
    description:
      "Straightforward paid/unpaid handling differs from workflows involving pending states, authorisation and capture, partial fulfilment, deposits or more complex order transitions.",
  },
  {
    title: "Webhooks and Reliability Controls",
    description:
      "Event signature verification, duplicate-event handling, retry rules, logging and reconciliation increase scope but can be important when order accuracy depends on asynchronous notifications.",
  },
  {
    title: "Refunds and Advanced Payment Features",
    description:
      "Partial refunds, cancellations, recurring billing, split payments, saved payment methods and marketplace workflows depend on provider support and often require separate business rules.",
  },
  {
    title: "Existing Integration Condition",
    description:
      "Fixing a contained configuration issue differs from replacing a brittle integration, diagnosing mismatched records or untangling custom code with limited documentation.",
  },
  {
    title: "Testing, Launch and Handover",
    description:
      "The effort depends on the number of payment methods and scenarios, staging access, live configuration, operational training, documentation and post-launch support requirements.",
  },
];

// ============================================================
// RELATED SERVICES - destinations should be checked in the repo.
// ============================================================

export const paymentIntegrationRelatedServices: RelatedServiceCard[] = [
  {
    title: "Ecommerce Development",
    description:
      "For a broader store build, platform decision or connected commerce workflow, start with the parent ecommerce service.",
    linkText: "Explore Ecommerce Development",
    destination: "/services/ecommerce-development",
  },
  {
    title: "Shopify Development",
    description:
      "For payment requirements within a Shopify store, assess the platform's available payment options and checkout constraints alongside the wider storefront.",
    linkText: "Explore Shopify Development",
    destination: "/services/ecommerce-development/shopify",
  },
  {
    title: "WooCommerce Development",
    description:
      "For WordPress-based commerce, review compatible gateway extensions, plugin interactions and the order workflow around WooCommerce.",
    linkText: "Explore WooCommerce Development",
    destination: "/services/ecommerce-development/woocommerce",
  },
  {
    title: "Strapi Headless CMS",
    description:
      "For headless commerce or custom checkout architectures where catalogue, content and transactional workflows connect via decoupled APIs.",
    linkText: "Explore Strapi Development",
    destination: "/services/web-design/strapi",
  },
  {
    title: "Analytics & Tracking",
    description:
      "Once transactions are measured, tracking can help interpret checkout progress and purchase events while keeping analytics events distinct from the payment provider's authoritative records.",
    linkText: "Explore Analytics & Tracking",
    destination: "/services/analytics-tracking",
  },
  {
    title: "Web Design & Development",
    description:
      "For a checkout requirement within a wider website or custom digital experience, review the relevant web development scope and integration boundaries.",
    linkText: "Explore Web Development",
    destination: "/services/web-design",
  },
];

// ============================================================
// FAQ - cover buyer objections not already fully answered above.
// ============================================================

export const paymentIntegrationFaqs: FAQItem[] = [
  {
    question: "What does payment gateway integration include?",
    answer:
      "Depending on the current platform and requirements, it can include provider selection, supported plugin or API setup, server-side payment verification, webhook handling, order-state updates, failure paths, refund workflows and end-to-end testing. The exact deliverables should be agreed after reviewing the store and merchant setup.",
  },
  {
    question: "Which payment gateways can Bixeltek integrate?",
    answer:
      "Bixeltek's existing payment page references Razorpay, Stripe, PayPal and PayTabs. Whether a specific provider is suitable depends on merchant eligibility, business location, available payment methods, platform compatibility and the current provider requirements. Confirm the required provider during discovery.",
  },
  {
    question: "Can you integrate payments into an existing website?",
    answer:
      "Often, yes. The approach depends on the site's platform, backend access, current checkout, provider support and how orders are stored. We would review the existing implementation before deciding whether to configure a supported integration or build additional backend functionality.",
  },
  {
    question: "Can you integrate a payment gateway with Shopify or WooCommerce?",
    answer:
      "Potentially, using the platform's supported payment options, compatible extensions or an approved custom approach where available. Plan entitlements, extension points, plugin compatibility and gateway availability should be checked before promising a particular checkout change.",
  },
  {
    question: "How do you verify that a payment is successful?",
    answer:
      "The flow depends on the provider, but a reliable integration verifies payment information through the server-side process documented by that provider. Webhook signatures or payment signatures should be validated as applicable, and the order should not rely solely on a browser redirect or front-end success message.",
  },
  {
    question: "Why are webhooks important for payment integration?",
    answer:
      "Payment events can arrive asynchronously, including after a customer leaves the checkout page. Authenticated webhooks let the backend process provider events and update connected workflows; the implementation should also handle repeated events safely and use a provider API check when the current status needs confirmation.",
  },
  {
    question: "Can you prevent duplicate payments?",
    answer:
      "The implementation can reduce duplicate-order and duplicate-request risks through clear payment-attempt handling, provider references and safe event processing. No integration should promise that every duplicate-payment scenario is impossible; the provider's capabilities and the existing checkout flow affect the available safeguards.",
  },
  {
    question: "Can you add UPI, cards, wallets or international payments?",
    answer:
      "That depends on the provider, merchant account, business location, currency, platform and any required approvals. We would confirm which methods are available to the business and how they should appear in the checkout before scoping the work.",
  },
  {
    question: "Can you integrate subscriptions or recurring payments?",
    answer:
      "Recurring billing may be possible where the selected provider and merchant account support it. The project must account for authorization requirements, billing states, failed renewals, cancellations, refunds and customer communication; this is more than adding a one-time checkout button.",
  },
  {
    question: "Can the integration handle refunds and cancellations?",
    answer:
      "Refund and cancellation workflows can be scoped according to the gateway's APIs and the store's order rules. Partial refunds, multiple captures and cancellation timing should be checked with the provider and represented accurately in the store's records.",
  },
  {
    question: "Does using a payment gateway automatically make checkout PCI compliant?",
    answer:
      "No. The provider and checkout architecture affect the data handled by the store, but they do not remove every security or compliance responsibility. The applicable requirements depend on how payment data is collected, transmitted and processed; compliance scope should be confirmed with the provider and the business's qualified adviser.",
  },
  {
    question: "How long does payment gateway integration take?",
    answer:
      "Timing depends on the platform, provider approval, existing code quality, required payment methods, order-state complexity, refunds, testing access and launch dependencies. A supported plugin configuration is different from a custom checkout or a repair to a failing integration, so a timeline should follow discovery.",
  },
  {
    question: "What affects the cost of payment gateway integration?",
    answer:
      "Key factors include platform compatibility, provider setup, custom backend work, payment-state logic, webhook and retry handling, refunds, regional methods, advanced workflows, QA and handover. Provider transaction fees and settlement charges are separate from development cost and should be checked directly with the provider.",
  },
  {
    question: "Can you fix an integration where payments succeed but orders are not updated?",
    answer:
      "This is a useful case for a focused audit. Investigation would trace the checkout response, server verification, webhook configuration, event processing and order-state rules. The fix depends on where the flow is breaking and whether the current platform or provider exposes the information needed to repair it.",
  },
];

// ============================================================
// FINAL CTA
// ============================================================

export const paymentIntegrationFinalCta: PaymentIntegrationFinalCtaData = {
  id: "final-cta",
  eyebrow: "PLANNING OR REPAIRING A PAYMENT FLOW?",
  h2: "Let's Review the Payment Flow Your Store Actually Needs",
  description:
    "Tell us which platform and gateway you use, where the current flow breaks or what you need to launch. We'll review the requirements, dependencies and implementation options before defining the scope.",
  primaryCta: {
    label: "Discuss Your Payment Integration",
    href: "/contact-us",
  },
  supportingCopy:
    "Provider approval, platform restrictions and advanced payment features will be confirmed as part of scoping rather than assumed in advance.",
};

// ============================================================
// IMPLEMENTATION NOTES - review before publishing.
// ============================================================

export const paymentIntegrationImplementationNotes = {
  proposedRoute:
    "/services/ecommerce-development/payment-gateway-integration",
  proposedCanonical:
    "https://bixeltek.com/services/ecommerce-development/payment-gateway-integration",
  existingRelatedRoute:
    "/payment-gateway-integrations",
  migrationRecommendation:
    "If the nested page replaces the existing payment gateway page, review the old URL's traffic, backlinks and indexing, then use a 301 redirect from /payment-gateway-integrations to the new nested route once the replacement is live. Avoid publishing two near-duplicate indexable pages for the same service.",
  confirmBeforePublish: [
    "Confirm the nested route is created in the repository and the canonical matches the final route.",
    "Confirm whether the existing /payment-gateway-integrations page will redirect to the new page or remain a separate, intentionally differentiated destination.",
    "Confirm current Bixeltek delivery support for Razorpay, Stripe, PayPal and PayTabs, plus the platforms and integration patterns offered.",
    "Confirm whether subscriptions, deposits, split payments, multi-currency flows and custom checkout work are offered or need separate scoping.",
    "Confirm the /contact route and every related-service destination in the current repository.",
    "Map these exports to the actual section components and run the repository's TypeScript, lint and build checks before release.",
  ],
  researchSources: [
    "https://razorpay.com/docs/server-integration/python/test-app/",
    "https://razorpay.com/docs/payments/payment-gateway/react-native-integration/standard/build-integration-ios/",
    "https://security.razorpay.com/security/checklist/",
    "https://docs.stripe.com/payments/existing-customers?platform=web&ui=stripe-hosted",
  ],
  contentBoundaries: [
    "Use gateway and platform names as examples subject to merchant availability and current provider documentation; do not imply official partnership.",
    "Do not promise PCI compliance, fraud elimination, guaranteed payment success, zero failed transactions, instant settlement or a fixed integration timeline.",
    "Use the illustrative use cases as explanations of possible requirements, not as Bixeltek customer case studies.",
    "The payment provider remains the source for merchant approval, supported methods, transaction fees, settlement terms and current API constraints.",
  ],
};

export const paymentIntegrationOverview = {
  eyebrow: "PAYMENT INTEGRATION, END TO END",
  h2: "Connect Checkout, Payment Confirmation and Order Management",
  intro:
    "A payment integration connects more than a checkout form to a provider. It links the customer's payment attempt with the provider's transaction record, your store's order status and the next step in fulfilment or support.",
  body:
    "The right setup depends on your ecommerce platform, merchant account, customer markets and the payment flow you need. Where a supported Shopify or WooCommerce integration covers the requirement, that may be the simplest option. Custom API work is useful when a verified platform limitation or a specific business workflow calls for it.",
  points: [
    {
      title: "Choose a suitable payment path",
      description:
        "Match the provider and checkout approach to your platform, eligible markets, payment methods and operational requirements.",
    },
    {
      title: "Verify what actually happened",
      description:
        "Use the provider's supported server-side verification and notification flow so a browser redirect alone does not determine whether an order is paid.",
    },
    {
      title: "Keep the order lifecycle consistent",
      description:
        "Account for pending, failed, cancelled and refunded transactions as well as successful payments, so customers and staff can understand the current state.",
    },
  ],
  closingCopy:
    "The objective is a payment flow that is appropriate for the business, testable before launch and maintainable when real transactions do not follow the happy path.",
};
