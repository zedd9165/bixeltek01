import { HiOutlineSpeakerphone, HiOutlineCode, HiOutlineBookOpen } from "react-icons/hi";
import type { NavColumn, FeaturedCardData, FooterBarData } from "./types";

export const insightsColumns: NavColumn[] = [
  {
    id: "marketing",
    title: "Marketing",
    icon: <HiOutlineSpeakerphone size={20} />,
    items: [
      { name: "Google Ads", link: "/blog/category/google-ads" },
      { name: "SEO", link: "/blog/category/seo" },
      { name: "Social Media", link: "/blog/category/social-media" },
      { name: "Analytics", link: "/blog/category/analytics" },
      { name: "Branding", link: "/blog/category/branding" },
    ],
  },
  {
    id: "technology",
    title: "Technology",
    icon: <HiOutlineCode size={20} />,
    items: [
      { name: "Web Development", link: "/blog/category/web-development" },
      { name: "Ecommerce", link: "/blog/category/ecommerce" },
      { name: "Mobile Apps", link: "/blog/category/mobile-apps" },
      { name: "Automation & AI", link: "/blog/category/automation-ai" },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    icon: <HiOutlineBookOpen size={20} />,
    items: [
      { name: "Guides & Resources", link: "/blog/category/guides" },
      { name: "Checklists", link: "/blog/category/checklists" },
      { name: "Research & Benchmarks", link: "/blog/category/research" },
      { name: "Tools & Templates", link: "/blog/category/tools-templates" },
    ],
  },
];

export const insightsFeatured: FeaturedCardData = {
  badge: "FEATURED ARTICLE",
  title: "How Google Ads Works for Dental Practices",
  desc: "A complete guide to getting more patients with Google Ads.",
  ctaLabel: "Read Article",
  ctaLink: "/blog/how-google-ads-works-for-dental-practices",
};

export const insightsFooter: FooterBarData = {
  icon: <HiOutlineBookOpen size={20} />,
  title: "Stay updated",
  desc: "Get the latest insights, tips and trends delivered to your inbox.",
  ctaLabel: "Subscribe",
  ctaLink: "/newsletter",
  viewAllLabel: "View All Insights",
  viewAllLink: "/blog",
};