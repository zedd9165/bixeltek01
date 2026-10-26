import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getIndustryPage, getIndustrySlugs } from '@/data/industries';
import { IndustryPage } from '@/components/industries/IndustryPage';

interface IndustryPageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({
    slug,
  }));
}

const baseUrl = 'https://bixeltek.com';

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const page = getIndustryPage(params.slug);
  if (!page) {
    return {};
  }

  const title = page.seo?.title || `${page.industryName} Marketing Agency | Bixeltek`;
  const description =
    page.seo?.description ||
    `High-conversion marketing and enquiry infrastructure for ${page.industryName.toLowerCase()}.`;
  const canonicalUrl = `${baseUrl}/industries/${page.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Bixeltek',
      type: 'website',
      images: page.seo?.ogImage ? [page.seo.ogImage] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function Page({ params }: IndustryPageProps) {
  const page = getIndustryPage(params.slug);
  if (!page) {
    notFound();
  }

  const faqJsonLd = page.faqs?.items?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <IndustryPage data={page} />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  );
}
