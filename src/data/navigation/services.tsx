import { SiGoogleads, SiInstagram } from "react-icons/si";
import { TbDeviceImacSearch, TbLayoutDashboard } from "react-icons/tb";
import { IoLogoReact } from "react-icons/io5";
import { AiOutlineTool, AiOutlinePicture, AiOutlineShoppingCart } from "react-icons/ai";
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
      { name: "Meta Ads", link: "/services/meta-ads" },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: <TbDeviceImacSearch size={20} />,
    items: [
      { name: "Web Design & Development", link: "/services/web-design" },
      { name: "Custom Coded Websites", link: "/custom-coded-websites" },
      { name: "WordPress Development", link: "/services/web-design/wordpress" },
      { name: "Web Applications", link: "/services/custom-app-development/web-applications" },
    ],
  },
  {
    id: "ecommerce-development",
    title: "Ecommerce Development",
    icon: <AiOutlineShoppingCart size={20} />,
    items: [
      { name: "Ecommerce Development", link: "/services/ecommerce-development" },
      { name: "Shopify Development", link: "/services/ecommerce-development/shopify" },
      { name: "WooCommerce Development", link: "/services/ecommerce-development/woocommerce" },
      { name: "Payment Gateway Integration", link: "/payment-gateway-integrations" },
      { name: "Strapi CMS Development", link: "/services/web-design/strapi" },
    ],
  },
  {
    id: "tech-automation",
    title: "Technology & Automation",
    icon: <AiOutlineTool size={20} />,
    items: [
      { name: "Custom App Development", link: "/services/custom-app-development" },
      { name: "Mobile App Development", link: "/services/custom-app-development/mobile-app-development" },
      { name: "Flutter", link: "/services/custom-app-development/mobile-app-development/flutter" },
      { name: "React Native", link: "/services/custom-app-development/mobile-app-development/react-native" },
      { name: "Automation & CRM", link: "/services/automation" },
      { name: "WhatsApp Automation", link: "/services/automation/whatsapp-marketing" },
      { name: "AI Automation", link: "/services/automation/ai-automation" },
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
