import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export interface NavLink {
  name: string;
  link: string;
}

export interface NavColumnItem extends NavLink {
  badge?: string; // e.g. "Popular"
}

export interface NavColumn {
  id: string;
  title: string;
  icon?: ReactNode;
  items: NavColumnItem[];
}

export interface FeaturedCardData {
  badge?: string;
  title: string;
  desc: string;
  ctaLabel: string;
  ctaLink: string;
  image?: StaticImageData | string;
  icon?: ReactNode;
}

export interface FooterBarData {
  icon?: ReactNode;
  title: string;
  desc: string;
  ctaLabel: string;
  ctaLink: string;
  viewAllLabel?: string;
  viewAllLink?: string;
}

export interface LocationCity {
  name: string;
  link: string;
}

export interface LocationRegion {
  id: string;
  title: string;
  icon?: ReactNode;
  cities: LocationCity[];
  viewAllLabel: string;
  viewAllLink: string;
}