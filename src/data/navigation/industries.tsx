import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbDeviceLaptop, TbDots } from "react-icons/tb";
import type { NavColumn, FooterBarData } from "./types";

export const industriesColumns: NavColumn[] = [
  {
    id: "healthcare",
    title: "Healthcare & Medical",
    icon: <HiOutlineHeart size={20} />,
    items: [
      { name: "Dental Clinics", link: "/industries/dental-marketing-agency", badge: "Popular" },
      { name: "Medical Clinics", link: "/industries/medical-clinics" },
      { name: "Aesthetic Clinics", link: "/industries/aesthetic-clinics" },
      { name: "Physiotherapy", link: "/industries/physiotherapy" },
      { name: "Pharma & Healthcare", link: "/industries/pharma-healthcare" },
    ],
  },
  {
    id: "home-local",
    title: "Home & Local Services",
    icon: <HiOutlineHome size={20} />,
    items: [
      { name: "Roofing", link: "/industries/roofing" },
      { name: "Cleaning", link: "/industries/cleaning" },
      { name: "HVAC", link: "/industries/hvac" },
      { name: "Plumbing", link: "/industries/plumbing" },
      { name: "Landscaping", link: "/industries/landscaping" },
    ],
  },
  {
    id: "business-professional",
    title: "Business & Professional",
    icon: <MdOutlineBusinessCenter size={20} />,
    items: [
      { name: "Real Estate", link: "/industries/real-estate" },
      { name: "Construction", link: "/industries/construction" },
      { name: "Consulting", link: "/industries/consulting" },
      { name: "Accounting", link: "/industries/accounting" },
      { name: "Legal", link: "/industries/legal" },
    ],
  },
  {
    id: "commerce",
    title: "Commerce",
    icon: <AiOutlineShoppingCart size={20} />,
    items: [
      { name: "Ecommerce & D2C", link: "/industries/ecommerce-d2c" },
      { name: "Retail", link: "/industries/retail" },
      { name: "Education", link: "/industries/education" },
      { name: "Fashion & Apparel", link: "/industries/fashion-apparel" },
      { name: "Food & Beverage", link: "/industries/food-beverage" },
    ],
  },
  {
    id: "tech-industrial",
    title: "Technology & Industrial",
    icon: <TbDeviceLaptop size={20} />,
    items: [
      { name: "Technology & SaaS", link: "/industries/technology-saas" },
      { name: "Manufacturing", link: "/industries/manufacturing" },
      { name: "Oil, Gas & Energy", link: "/industries/oil-gas-energy" },
      { name: "Automotive", link: "/industries/automotive" },
      { name: "Telecom", link: "/industries/telecom" },
    ],
  },
  {
    id: "other",
    title: "Other",
    icon: <TbDots size={20} />,
    items: [
      { name: "Hospitality", link: "/industries/hospitality" },
      { name: "Travel & Tourism", link: "/industries/travel-tourism" },
      { name: "Entertainment", link: "/industries/entertainment" },
      { name: "Non-profit", link: "/industries/non-profit" },
      { name: "Government", link: "/industries/government" },
    ],
  },
];

export const industriesFooter: FooterBarData = {
  icon: <MdOutlineBusinessCenter size={20} />,
  title: "Need help finding the right solution for your industry?",
  desc: "Talk to our team and get a customized digital strategy.",
  ctaLabel: "Talk to Us",
  ctaLink: "/contact-us",
  viewAllLabel: "View All Industries",
  viewAllLink: "/industries",
};