import { SiGoogleads, SiInstagram } from "react-icons/si";
import { TbDeviceImacSearch, TbLayoutDashboard } from "react-icons/tb";
import { IoLogoReact } from "react-icons/io5";
import { AiOutlineTool, AiOutlinePicture } from "react-icons/ai";
import { RiBankCardLine } from "react-icons/ri";
import { HiOutlineTrendingUp, HiOutlineSparkles } from "react-icons/hi";
import type { NavColumn, FeaturedCardData, FooterBarData } from "./types";

export const servicesColumns: NavColumn[] = [
  {
    id: "marketing-growth",
    title: "Marketing & Growth",
    icon: <HiOutlineTrendingUp size={20} />,
    items: [
      { name: "Google Ads", link: "/services/google-ads" },
      { name: "SEO", link: "/services/seo-services" },
      { name: "Analytics & Tracking", link: "/services/analytics-tracking" },
      { name: "Meta Ads", link: "/social-media-marketing-agency-hyderabad" },
    ],
  },
  {
    id: "web-ecommerce",
    title: "Web & Ecommerce",
    icon: <TbDeviceImacSearch size={20} />,
    items: [
      { name: "Web Design & Development", link: "/services/web-design" },
      { name: "Ecommerce Development", link: "/ecommerce-websites" },
      { name: "Shopify Development", link: "/services/shopify-development" },
      { name: "WooCommerce Development", link: "/services/woocommerce-development" },
      { name: "Payment Integrations", link: "/payment-gateway-integrations" },
    ],
  },
  {
    id: "tech-automation",
    title: "Technology & Automation",
    icon: <AiOutlineTool size={20} />,
    items: [
      { name: "Mobile App Development", link: "/services/app-development" },
      { name: "Flutter", link: "/services/app-development/flutter" },
      { name: "React Native", link: "/services/app-development/react-native" },
      { name: "Automation & CRM", link: "/services/automation" },
      { name: "WhatsApp Automation", link: "/services/automation/whatsapp" },
      { name: "AI Automation", link: "/services/automation/ai" },
    ],
  },
  {
    id: "creative-brand",
    title: "Creative & Brand",
    icon: <AiOutlinePicture size={20} />,
    items: [
      { name: "Branding", link: "/services/branding" },
      { name: "Graphic Design", link: "/services/graphic-design" },
      { name: "Content Creation", link: "/services/content-creation" },
    ],
  },
];

export const servicesFeatured: FeaturedCardData = {
  badge: "FEATURED",
  title: "Digital Growth Audit",
  desc: "Get a personalized strategy to scale your business.",
  ctaLabel: "Get Your Audit",
  ctaLink: "/audit",
  icon: <HiOutlineSparkles size={22} />,
};

export const servicesFooter: FooterBarData = {
  icon: <HiOutlineTrendingUp size={20} />,
  title: "Not sure what you need?",
  desc: "Get a Digital Growth Audit and discover the right strategy for your business.",
  ctaLabel: "Get Your Audit",
  ctaLink: "/audit",
  viewAllLabel: "View All Services",
  viewAllLink: "/services",
};

// Kept for reference / mobile menu fallbacks that want icon-per-service (RiBankCardLine, IoLogoReact,
// SiGoogleads, SiInstagram, TbLayoutDashboard are still available for a flatter list if ever needed).