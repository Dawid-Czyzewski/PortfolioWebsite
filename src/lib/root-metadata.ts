import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import { tMeta } from '@/lib/seo';

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Portfolio`,
    template: `%s | ${SITE_NAME}`,
  },
  description: tMeta('heroSubtitle'),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    'Dawid Czyżewski',
    'portfolio',
    'full-stack',
    'React',
    'Next.js',
    'Symfony',
    'PHP',
    'TypeScript',
    'programista',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: tMeta('heroSubtitle'),
    url: SITE_URL,
    locale: 'pl_PL',
    alternateLocale: ['en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: tMeta('heroSubtitle'),
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
  },
};
