import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import { tMeta } from '@/lib/seo';

const homeTitle = tMeta('homeSeoTitle');
const homeDescription = tMeta('homeSeoDescription');

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: homeTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: homeDescription,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    'Dawid Czyżewski',
    'programista PHP',
    'Symfony',
    'React',
    'Next.js',
    'korepetycje z programowania',
    'Flutter',
    'portfolio',
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
    title: homeTitle,
    description: homeDescription,
    url: SITE_URL,
    locale: 'pl_PL',
    alternateLocale: ['en_US'],
    images: [
      {
        url: '/images/hero-desk.jpg',
        alt: homeTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: homeDescription,
    images: ['/images/hero-desk.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
  },
};
