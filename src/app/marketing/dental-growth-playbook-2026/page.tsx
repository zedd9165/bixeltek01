import type { Metadata } from 'next'
import DentalGrowthPlaybookClient from './DentalGrowthPlaybookClient'
import { Footer } from '@/sections/Footer'

export const metadata: Metadata = {
  title: 'Dental Growth Playbook 2026 | Free BixDental Playbook',
  description:
    'Download the free BixDental Growth Playbook 2026 and learn the practical system for dental patient acquisition, conversion, booking, follow-up, and full-funnel tracking.',
  alternates: {
    canonical: 'https://bixeltek.com/marketing/dental-growth-playbook-2026',
  },
  openGraph: {
    title: 'Dental Growth Playbook 2026 | Free BixDental Playbook',
    description:
      'Download the free BixDental Growth Playbook 2026 and learn the practical system for dental patient acquisition, conversion, booking, follow-up, and full-funnel tracking.',
    url: 'https://bixeltek.com/marketing/dental-growth-playbook-2026',
    siteName: 'Bixeltek',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Growth Playbook 2026 | Free BixDental Playbook',
    description:
      'Download the free BixDental Growth Playbook 2026 and learn the practical system for dental patient acquisition, conversion, booking, follow-up, and full-funnel tracking.',
  },
}

export default function DentalGrowthPlaybookPage() {
  return (
    <main className="min-h-screen">
      <DentalGrowthPlaybookClient />
      <Footer />
    </main>
  )
}