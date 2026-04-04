import {
  HiOutlineBadgeCheck,
  HiOutlineChartBar,
  HiOutlineLightningBolt,
  HiOutlineGlobe,
  HiOutlineUsers,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import {
  MdOutlineStorefront,
  MdOutlineSchool,
  MdOutlineApartment,
  MdOutlineShoppingBag,
  MdOutlineRestaurant,
  MdOutlineAccountBalance,
  MdOutlineHomeRepairService,
  MdOutlineComputer,
} from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiOutlineCreditCard } from "react-icons/hi";
import { RiGoogleLine } from "react-icons/ri";
import { TbSeo, TbBrandMeta } from "react-icons/tb";

import heroBg from "@/assets/indian-heroImg.jpg";
import { IndiaHero } from "@/components/India/IndiaHero";
import { WhyItMatters } from "@/components/India/WhyItMatters";
import { PainPoints } from "@/components/India/PainPoints";
import { Services } from "@/components/India/Services";
import { Cities } from "@/components/India/Cities";
import { Industries } from "@/components/India/Industries";
import WhyChooseUs from "@/components/India/WhyChooseUs";
import { Testimonials } from "@/components/India/Testimonials";
import { LeadsForm } from "@/components/India/LeadForms";
import FaqsSection from "@/components/India/Faqs";

const stats = [
  { value: "700M+", label: "Indian Internet Users" },
  { value: "200+", label: "Campaigns Managed" },
  { value: "4+ Yrs", label: "Delivering Results" },
  { value: "80%+", label: "Client Retention" },
];

const services = [
  {
    icon: <RiGoogleLine size={22} />,
    title: "Google Ads Management",
    desc: "India's cost-per-click is lower than most global markets — but only if campaigns are structured correctly. We build Google Search, Display, and Performance Max campaigns that cut wasted spend and drive qualified leads. Clients typically see 40–60% reduction in cost-per-lead within 90 days.",
    link: "/services/google-ads",
    stat: "↓ 60% Cost Per Lead",
  },
  {
    icon: <TbSeo size={22} />,
    title: "SEO Services",
    desc: "Rank on Google for the searches that matter to your business. Our India SEO programmes cover keyword research, on-page optimisation, technical SEO, Google Business Profile, and local citations — for businesses targeting Hyderabad, metros, or all-India visibility.",
    link: "/services/seo-services",
    stat: "Page 1 in 90 Days",
  },
  {
    icon: <HiOutlineGlobe size={22} />,
    title: "Web Design & Development",
    desc: "Your website is your hardest-working salesperson. We build fast, mobile-first, SEO-ready websites with Razorpay, PayU, and Stripe integration — optimised for India's mobile-dominant audience and Google's Core Web Vitals. Delivered in 7–15 working days.",
    link: "/services/web-design",
    stat: "7–15 Day Delivery",
  },
  {
    icon: <TbBrandMeta size={22} />,
    title: "Social Media Marketing",
    desc: "India has 400M+ Instagram and Facebook users. We run Meta Ads campaigns and organic content strategies that build audiences and convert them into paying customers — with creative tailored to Indian buyer psychology and regional languages if required.",
    link: "/social-media-marketing-agency-hyderabad",
    stat: "400M+ Audience Reach",
  },
  {
    icon: <MdOutlinePhoneAndroid size={22} />,
    title: "Mobile App Development",
    desc: "We design and engineer high-performance iOS & Android applications for growth-focused businesses across India — built in React Native and Flutter. Most MVPs are live on the app store within 8–10 weeks, with businesses reporting up to 3× higher conversion rates vs mobile web.",
    link: "/services/app-development",
    stat: "Live in 8–10 Weeks",
  },
  {
    icon: <HiOutlineCreditCard size={22} />,
    title: "Payment Gateway Integration",
    desc: "We integrate Razorpay, Stripe, PayU, and PayPal into your website or app — with PCI-compliant, conversion-optimised checkout flows. Includes tokenisation, saved cards, multi-currency support, smart retry logic, instant refunds, and full fraud detection out of the box.",
    link: "/payment-gateway-integrations",
    stat: "Razorpay · Stripe · PayU",
  },
];

const cities = [
  {
    city: "Hyderabad",
    state: "Telangana",
    tag: "Home Base",
    link: "/hyderabad",
    services: "Google Ads · SEO · Web Design · Social Media · Local SEO",
  },
  {
    city: "Mumbai",
    state: "Maharashtra",
    tag: "Metro",
    link: "/mumbai",
    services: "Google Ads · SEO · Web Design · Social Media",
  },
  {
    city: "Delhi / NCR",
    state: "Delhi, Gurugram, Noida",
    tag: "Metro",
    link: "/delhi",
    services: "Google Ads · SEO · Web Design · Social Media",
  },
  {
    city: "Bangalore",
    state: "Karnataka",
    tag: "Tech Hub",
    link: "/bangalore",
    services: "Google Ads · SEO · Web Design · Social Media",
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
    tag: "Metro",
    link: "/chennai",
    services: "Google Ads · SEO · Web Design",
  },
  {
    city: "Pune",
    state: "Maharashtra",
    tag: "Metro",
    link: "/pune",
    services: "Google Ads · SEO · Web Design · Local SEO",
  },
];

const industries = [
  {
    icon: <MdOutlineStorefront size={20} />,
    title: "Dental & Healthcare Clinics",
    sub: "Local SEO + Ads — 30+ new patients/month",
  },
  {
    icon: <MdOutlineSchool size={20} />,
    title: "Education & Coaching",
    sub: "Admission campaigns via Search + Maps + Lead Forms",
  },
  {
    icon: <MdOutlineApartment size={20} />,
    title: "Real Estate",
    sub: "High-ticket lead funnels for developers",
  },
  {
    icon: <MdOutlineShoppingBag size={20} />,
    title: "E-commerce & D2C Brands",
    sub: "Shopping, Performance Max & Meta Ads for ROAS",
  },
  {
    icon: <MdOutlineRestaurant size={20} />,
    title: "Restaurants & Food",
    sub: "Local visibility, reviews & delivery platform SEO",
  },
  {
    icon: <MdOutlineAccountBalance size={20} />,
    title: "CA, Law & Finance",
    sub: "Trust-building SEO + Ads for high-intent queries",
  },
  {
    icon: <MdOutlineHomeRepairService size={20} />,
    title: "Home Services",
    sub: "Maps + PPC for local lead generation",
  },
  {
    icon: <MdOutlineComputer size={20} />,
    title: "IT & Software Companies",
    sub: "B2B lead generation via Search + LinkedIn",
  },
];

const trustPillars = [
  {
    icon: <HiOutlineBadgeCheck size={24} />,
    title: "Google Partner Certified",
    desc: "Every campaign follows Google's best-practice frameworks — not guesswork.",
  },
  {
    icon: <HiOutlineChartBar size={24} />,
    title: "ROI-First, Not Vanity Metrics",
    desc: "We track leads, calls, and conversions — not impressions and clicks.",
  },
  {
    icon: <HiOutlineLightningBolt size={24} />,
    title: "Transparent Reporting",
    desc: "Real-time dashboards and monthly reports you can actually understand.",
  },
  {
    icon: <HiOutlineGlobe size={24} />,
    title: "India-Rooted Expertise",
    desc: "We're based in Hyderabad. We understand Indian search behaviour, pricing, and buying intent.",
  },
  {
    icon: <HiOutlineUsers size={24} />,
    title: "Integrated Team, One Roof",
    desc: "SEO, Ads, Web Design, and Social — all managed by one team with aligned goals.",
  },
  {
    icon: <HiOutlineShieldCheck size={24} />,
    title: "Long-Term Partnerships",
    desc: "80%+ client retention. We don't win clients then hand them off — we stay in.",
  },
];

const testimonials = [
  {
    quote:
      "Bixeltek transformed our dental clinic's online presence in Hyderabad. Within 3 months of starting Google Ads and SEO, we went from 10–15 patient enquiries per month to over 60. The team is transparent, responsive, and genuinely invested in our growth.",
    name: "Dr. Priya Reddy",
    role: "Dental Clinic Owner, Hyderabad",
    metric: "6× more enquiries",
  },
  {
    quote:
      "We were spending ₹80,000/month on Google Ads with poor results. Bixeltek restructured everything — our cost per lead dropped from ₹1,200 to ₹340 within 6 weeks. Best marketing decision we've made.",
    name: "Rahul Verma",
    role: "Director, EduFirst Academy, Hyderabad",
    metric: "72% lower CPL",
  },
  {
    quote:
      "The website Bixeltek built for us is fast, beautiful, and actually converts. We saw a 3× increase in enquiry form submissions in the first month after launch.",
    name: "Anjali Sharma",
    role: "Founder, SpaceWorks Interiors",
    metric: "3× form conversions",
  },
];

const faqs = [
  {
    q: "How much does digital marketing cost in India?",
    a: "Our India retainer packages start from ₹25,000/month for focused Google Ads or SEO campaigns, with full-service packages (Ads + SEO + Web) from ₹60,000/month. We offer flexible pricing tailored to your business size and goals. Contact us for a custom quote.",
  },
  {
    q: "How long does it take to see results from SEO in India?",
    a: "For competitive keywords in major metros like Hyderabad, Mumbai, or Delhi, you can expect measurable movement in rankings within 60–90 days, with significant lead generation impact by month 4–6. Google Ads delivers results from day one.",
  },
  {
    q: "Do you work with small businesses and startups in India?",
    a: "Yes. Many of our clients are growing SMEs and early-stage startups in Hyderabad and other cities. We design campaign structures and budgets that work at your current scale and grow as you do — there's no minimum ad spend requirement to get started.",
  },
  {
    q: "Do you manage Google Ads in Hindi or regional languages?",
    a: "Yes. We can run multilingual campaigns in Hindi, Telugu, Tamil, Kannada, and Marathi to reach regional audiences effectively. This is especially powerful for B2C businesses targeting Tier 2 and Tier 3 cities.",
  },
  {
    q: "Can you work with businesses outside Hyderabad?",
    a: "Absolutely. We work remotely with businesses across Hyderabad, Mumbai, Delhi, Bangalore, Chennai, Nellore, Pune, and beyond. All strategy calls, reporting, and campaign management happen via video call and our client dashboard — location is no barrier.",
  },
  {
    q: "What makes Bixeltek different from other digital marketing agencies in India?",
    a: "Three things: our Google Partner certification means our campaigns are built to Google's official best-practice standards; our reporting is fully transparent with real-time dashboards; and we are a genuinely integrated team — SEO, Ads, Web, and Social all work together under one roof, not as disconnected freelancers.",
  },
];

const painPoints = [
  {
    title: "Google Ads Spend with No ROI",
    desc: "Agencies set up campaigns and disappear. You keep paying, leads don't come.",
  },
  {
    title: "Website That Doesn't Convert",
    desc: "Traffic arrives but visitors leave without calling, filling a form, or buying.",
  },
  {
    title: "Poor Google Rankings",
    desc: "You're on page 2 or 3. Customers find competitors first — every single day.",
  },
  {
    title: "No Visibility on Google Maps",
    desc: "Local searches 'near me' show competitors because your GBP is unoptimised.",
  },
  {
    title: "Social Media with Zero Results",
    desc: "Posting content but getting no engagement, enquiries, or sales from it.",
  },
  {
    title: "No Data, No Reporting",
    desc: "Your agency sends a monthly PDF but you have no idea what it means or if it's working.",
  },
];


export default function IndiaHubPage() {
 
  return (
    <div className="bg-[#080808] text-white min-h-screen overflow-x-hidden">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <IndiaHero stats={stats} heroBg={heroBg} />
      <WhyItMatters/>
      <PainPoints painPoints={painPoints}/>
      <Services services={services} />  
      <Cities cities={cities} />
      <Industries industries={industries} />
      <WhyChooseUs trustPillars={trustPillars} />
      <Testimonials testimonials={testimonials} />
      <LeadsForm/>
      <FaqsSection faqs={faqs} />
    </div>
  );
}