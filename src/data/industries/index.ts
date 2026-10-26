import type { IndustryPageData } from '@/types/industry';

import { medicalClinicsPage, medicalClinicsPageV2, medicalClinicsV2Data } from './medical-clinics';
import { physiotherapyClinicsPage, physiotherapyClinicsPageV2, physiotherapyClinicsV2Data } from './physiotherapy-clinic';
import { aestheticClinicsPage, aestheticClinicsPageV2, aestheticClinicsV2Data } from './aesthetic-clinics';
import { pharmaHealthcarePage, pharmaHealthcarePageV2, pharmaHealthcareV2Data } from './pharma-healthcare';
import { roofingPage, roofingPageV2, roofingV2Data } from './roofing';
import { cleaningPage, cleaningPageV2, cleaningV2Data } from './cleaning';
import { dentalIndustryData } from './dental-practices';
import { hvacPage, hvacPageV2, hvacV2Data } from './hvac';
import { plumbingPage, plumbingPageV2, plumbingV2Data } from './plumbing';
import { landscapingPage, landscapingPageV2, landscapingV2Data } from './landscaping';
import { realEstatePage, realEstatePageV2, realEstateV2Data } from './real-estate';
import { constructionPage, constructionPageV2, constructionV2Data } from './construction';
import { consultingPage, consultingPageV2, consultingV2Data } from './consulting';
import { accountingPage, accountingPageV2, accountingV2Data } from './accounting';
import { automotivePage, automotivePageV2, automotiveV2Data } from './automotive';
import { educationPage, educationPageV2, educationV2Data } from './education';
import { entertainmentPage, entertainmentPageV2, entertainmentV2Data } from './entertainment';
import { fashionApparelPage, fashionApparelPageV2, fashionApparelV2Data } from './fashion-apparel';
import { foodBeveragePage, foodBeveragePageV2, foodBeverageV2Data } from './food-beverage';
import { governmentPage, governmentPageV2, governmentV2Data } from './government';
import { hospitalityPage, hospitalityPageV2, hospitalityV2Data } from './hospitality';
import { legalPage, legalPageV2, legalV2Data } from './legal';
import { manufacturingPage, manufacturingPageV2, manufacturingV2Data } from './manufacturing';
import { nonProfitPage, nonProfitPageV2, nonProfitV2Data } from './non-profit';
import { oilGasEnergyPage, oilGasEnergyPageV2, oilGasEnergyV2Data } from './oil-gas-energy';
import { retailPage, retailPageV2, retailV2Data } from './retail';
import { technologySaasPage, technologySaasPageV2, technologySaasV2Data } from './technology-saas';
import { travelTourismPage, travelTourismPageV2, travelTourismV2Data } from './travel-tourism';

export {
  medicalClinicsPage,
  medicalClinicsPageV2,
  medicalClinicsV2Data,
  physiotherapyClinicsPage,
  physiotherapyClinicsPageV2,
  physiotherapyClinicsV2Data,
  aestheticClinicsPage,
  aestheticClinicsPageV2,
  aestheticClinicsV2Data,
  pharmaHealthcarePage,
  pharmaHealthcarePageV2,
  pharmaHealthcareV2Data,
  roofingPage,
  roofingPageV2,
  roofingV2Data,
  cleaningPage,
  cleaningPageV2,
  cleaningV2Data,
  dentalIndustryData,
  hvacPage,
  hvacPageV2,
  hvacV2Data,
  plumbingPage,
  plumbingPageV2,
  plumbingV2Data,
  landscapingPage,
  landscapingPageV2,
  landscapingV2Data,
  realEstatePage,
  realEstatePageV2,
  realEstateV2Data,
  constructionPage,
  constructionPageV2,
  constructionV2Data,
  consultingPage,
  consultingPageV2,
  consultingV2Data,
  accountingPage,
  accountingPageV2,
  accountingV2Data,
  automotivePage,
  automotivePageV2,
  automotiveV2Data,
  educationPage,
  educationPageV2,
  educationV2Data,
  entertainmentPage,
  entertainmentPageV2,
  entertainmentV2Data,
  fashionApparelPage,
  fashionApparelPageV2,
  fashionApparelV2Data,
  foodBeveragePage,
  foodBeveragePageV2,
  foodBeverageV2Data,
  governmentPage,
  governmentPageV2,
  governmentV2Data,
  hospitalityPage,
  hospitalityPageV2,
  hospitalityV2Data,
  legalPage,
  legalPageV2,
  legalV2Data,
  manufacturingPage,
  manufacturingPageV2,
  manufacturingV2Data,
  nonProfitPage,
  nonProfitPageV2,
  nonProfitV2Data,
  oilGasEnergyPage,
  oilGasEnergyPageV2,
  oilGasEnergyV2Data,
  retailPage,
  retailPageV2,
  retailV2Data,
  technologySaasPage,
  technologySaasPageV2,
  technologySaasV2Data,
  travelTourismPage,
  travelTourismPageV2,
  travelTourismV2Data,
};

/**
 * Canonical industry slug dictionary (primary routing targets).
 */
export const canonicalIndustryPages: Record<string, IndustryPageData> = {
  'medical-clinics': medicalClinicsPage,
  'physiotherapy-clinics': physiotherapyClinicsPage,
  'aesthetic-clinics': aestheticClinicsPage,
  'pharma-healthcare': pharmaHealthcarePage,
  'roofing': roofingPage,
  'cleaning-services': cleaningPage,
  'dental-practices': dentalIndustryData,
  'hvac': hvacPage,
  'plumbing': plumbingPage,
  'landscaping': landscapingPage,
  'real-estate': realEstatePage,
  'construction': constructionPage,
  'consulting': consultingPage,
  'accounting': accountingPage,
  'automotive': automotivePage,
  'education': educationPage,
  'entertainment': entertainmentPage,
  'fashion-apparel': fashionApparelPage,
  'food-beverage': foodBeveragePage,
  'government': governmentPage,
  'hospitality': hospitalityPage,
  'legal': legalPage,
  'manufacturing': manufacturingPage,
  'non-profit': nonProfitPage,
  'oil-gas-energy': oilGasEnergyPage,
  'retail': retailPage,
  'technology-saas': technologySaasPage,
  'travel-tourism': travelTourismPage,
};

/**
 * Registry of data-driven industry landing pages.
 * Supports canonical primary slugs and historical/alternate URL aliases.
 */
export const industryPages: Record<string, IndustryPageData> = {
  ...canonicalIndustryPages,
  'physiotherapy': physiotherapyClinicsPage,
  'physiotherapy-clinic': physiotherapyClinicsPage,
  'aesthetic-clinic': aestheticClinicsPage,
  'aesthetics': aestheticClinicsPage,
  'medical-aesthetics': aestheticClinicsPage,
  'pharma': pharmaHealthcarePage,
  'healthcare': pharmaHealthcarePage,
  'pharmaceuticals': pharmaHealthcarePage,
  'roofing-companies': roofingPage,
  'roofing-contractors': roofingPage,
  'roofing-services': roofingPage,
  'cleaning': cleaningPage,
  'cleaning-companies': cleaningPage,
  'commercial-cleaning': cleaningPage,
  'dental-clinics': dentalIndustryData,
  'dental-marketing-agency': dentalIndustryData,
  'hvac-services': hvacPage,
  'hvac-contractors': hvacPage,
  'heating-and-cooling': hvacPage,
  'air-conditioning-services': hvacPage,
  'plumbing-services': plumbingPage,
  'plumbers': plumbingPage,
  'plumbing-contractors': plumbingPage,
  'emergency-plumbing': plumbingPage,
  'landscaping-services': landscapingPage,
  'landscaping-companies': landscapingPage,
  'landscape-contractors': landscapingPage,
  'lawn-care': landscapingPage,
  'real-estate-agencies': realEstatePage,
  'real-estate-marketing': realEstatePage,
  'property-developers': realEstatePage,
  'real-estate-brokers': realEstatePage,
  'construction-companies': constructionPage,
  'construction-contractors': constructionPage,
  'general-contractors': constructionPage,
  'commercial-construction': constructionPage,
  'consulting-firms': consultingPage,
  'business-consulting': consultingPage,
  'management-consulting': consultingPage,
  'consulting-companies': consultingPage,
  'accounting-firms': accountingPage,
  'accounting-services': accountingPage,
  'bookkeeping-services': accountingPage,
  'tax-accounting': accountingPage,
  'automotive-industry': automotivePage,
  'automotive-businesses': automotivePage,
  'automotive-companies': automotivePage,
  'automotive-services': automotivePage,
  'auto-industry': automotivePage,
  'education-institutions': educationPage,
  'educational-institutions': educationPage,
  'schools-and-colleges': educationPage,
  'training-institutes': educationPage,
  'entertainment-industry': entertainmentPage,
  'entertainment-companies': entertainmentPage,
  'live-entertainment': entertainmentPage,
  'event-entertainment': entertainmentPage,
  'entertainment-production': entertainmentPage,
  'concerts-events': entertainmentPage,
  'entertainment-brands': entertainmentPage,
  'fashion': fashionApparelPage,
  'apparel': fashionApparelPage,
  'fashion-brands': fashionApparelPage,
  'clothing-brands': fashionApparelPage,
  'fashion-ecommerce': fashionApparelPage,
  'food-and-beverage': foodBeveragePage,
  'food-beverage-brands': foodBeveragePage,
  'food-brands': foodBeveragePage,
  'beverage-brands': foodBeveragePage,
  'food-ecommerce': foodBeveragePage,
  'government-sector': governmentPage,
  'government-agencies': governmentPage,
  'public-sector': governmentPage,
  'public-sector-organisations': governmentPage,
  'government-departments': governmentPage,
  'municipalities': governmentPage,
  'civic-services': governmentPage,
  'digital-government': governmentPage,
  'hospitality-industry': hospitalityPage,
  'hotels': hospitalityPage,
  'hotel-marketing': hospitalityPage,
  'resorts': hospitalityPage,
  'hospitality-businesses': hospitalityPage,
  'hotel-website-development': hospitalityPage,
  'legal-services': legalPage,
  'law-firms': legalPage,
  'lawyers': legalPage,
  'legal-practices': legalPage,
  'manufacturers': manufacturingPage,
  'industrial-manufacturing': manufacturingPage,
  'manufacturing-companies': manufacturingPage,
  'industrial-manufacturers': manufacturingPage,
  'b2b-manufacturing': manufacturingPage,
  'nonprofit': nonProfitPage,
  'non-profits': nonProfitPage,
  'nonprofit-organisations': nonProfitPage,
  'non-profit-organizations': nonProfitPage,
  'ngo': nonProfitPage,
  'ngos': nonProfitPage,
  'charities': nonProfitPage,
  'charitable-organisations': nonProfitPage,
  'foundations': nonProfitPage,
  'social-impact': nonProfitPage,
  'oil-and-gas': oilGasEnergyPage,
  'oil-gas': oilGasEnergyPage,
  'energy': oilGasEnergyPage,
  'energy-companies': oilGasEnergyPage,
  'oilfield-services': oilGasEnergyPage,
  'energy-sector': oilGasEnergyPage,
  'retail-businesses': retailPage,
  'retail-stores': retailPage,
  'online-retail': retailPage,
  'omnichannel-retail': retailPage,
  'technology': technologySaasPage,
  'saas': technologySaasPage,
  'saas-companies': technologySaasPage,
  'software-companies': technologySaasPage,
  'technology-companies': technologySaasPage,
  'b2b-saas': technologySaasPage,
  'travel-and-tourism': travelTourismPage,
  'travel': travelTourismPage,
  'tourism': travelTourismPage,
  'travel-agencies': travelTourismPage,
  'tour-operators': travelTourismPage,
  'holiday-packages': travelTourismPage,
  'destination-management': travelTourismPage,
};

/**
 * Retrieve industry page data by slug or alias.
 */
export function getIndustryPage(slug: string): IndustryPageData | undefined {
  return industryPages[slug];
}

/**
 * Get all registered industry slugs (both canonical and aliases).
 */
export function getIndustrySlugs(): string[] {
  return Object.keys(industryPages);
}

/**
 * Get only primary canonical slugs (useful for sitemaps and indexing).
 */
export function getCanonicalIndustrySlugs(): string[] {
  return Object.keys(canonicalIndustryPages);
}
