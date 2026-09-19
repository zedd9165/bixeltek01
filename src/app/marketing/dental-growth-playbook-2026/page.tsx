import type { Metadata, Viewport } from 'next'
import DentalGrowthPlaybookClient from './DentalGrowthPlaybookClient'
import { Footer } from '@/sections/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

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
    <main className="min-h-screen w-full max-w-full overflow-x-hidden">
      <DentalGrowthPlaybookClient />
      <Footer />
    </main>
  )
}