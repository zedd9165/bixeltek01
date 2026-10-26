import type { ReactNode } from 'react';

export interface HeroData {
  badge: ReactNode;
  title: ReactNode;
  highlightedTitle?: ReactNode;
  description: ReactNode;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  trustedByLogos?: { name: string; iconPath?: string }[];
  backgroundImage?: any;
}

export type BentoAccent = 'navy' | 'orange' | 'teal' | 'cyan' | 'violet' | 'rose';

export interface BentoItem {
  title: ReactNode;
  description: ReactNode;
  tag?: string;
  accent?: BentoAccent | string;
  colSpan?: 'col-span-1' | 'col-span-2' | 'col-span-3' | string;
  metric?: string;
  metricLabel?: string;
  statusText?: string;
  variant?: 'default' | 'featured';
  number?: string;
  icon?: string;
  pill?: string;
  image?: string;
  imageAlt?: string;
  chips?: string[];
  checklist?: string[];
  stats?: { label: string; value: string }[];
  progress?: { label: string; value: number; valueLabel?: string };
  cta?: { label: string; href?: string };
  rowSpan?: 1 | 2;
}

export interface BentoGridData {
  badge?: ReactNode;
  headline?: ReactNode;
  subheadline?: ReactNode;
  items?: BentoItem[];
}

export interface ComparisonItem {
  feature: ReactNode;
  industryStandard: ReactNode;
  ourApproach: ReactNode;
  metric?: string;
  metricLabel?: string;
}

export interface ComparisonData {
  badge: ReactNode;
  headline: ReactNode;
  subheadline: ReactNode;
  items: ComparisonItem[];
  featureLabel?: string;
  leftLabel?: string;
  rightLabel?: string;
  rightTag?: string;
  cta?: {
    label: string;
    href?: string;
  };
}

export interface ProcessStep {
  step: string;
  title: ReactNode;
  summary: ReactNode;
  details: ReactNode[];
}

export interface ProcessData {
  badge: ReactNode;
  headline: ReactNode;
  subheadline: ReactNode;
  steps: ProcessStep[];
}

export interface MetricItem {
  value: string;
  label: string;
  subtext: string;
}

export interface MetricsData {
  headline: ReactNode;
  items: MetricItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqsData {
  badge?: string;
  headline?: string;
  items: FaqItem[];
}

export interface FinalCtaData {
  headline: string;
  subheadline: string;
  bulletPoints?: string[];
  buttonText?: string;
  eyebrow?: string;
  sectionSubtitle?: string;
  supportingCopy?: string;
  tools?: any[];
}

export interface OverviewData {
  badge: ReactNode;
  title: ReactNode;
  highlightedTitle?: ReactNode;
  description: ReactNode;
  secondaryDescription?: ReactNode;
  imageSrc: string | any;
  imageAlt: string;
  highlightMetric?: {
    value: string;
    label: string;
    sublabel: string;
  };
  features: {
    title: ReactNode;
    description: ReactNode;
  }[];
}

export interface IndustryPageData {
  slug: string;
  aliases?: string[];
  industryName: string;
  seo?: {
    title: string;
    description: string;
    ogImage?: string;
  };
  hero: HeroData;
  overviewData?: OverviewData;
  bentoGrid: BentoGridData;
  comparison: ComparisonData;
  process: ProcessData;
  metrics: MetricsData;
  faqs: FaqsData;
  finalCta: FinalCtaData;
}
