import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Caveat, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import HashRedirect from '@/components/HashRedirect';
import I18nProvider from '@/components/I18nProvider';
import { rootMetadata } from '@/lib/root-metadata';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import { tMeta } from '@/lib/seo';
import '@/index.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = rootMetadata;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: 'Full-stack Developer',
  email: 'kontakt@dawid-developer.pl',
  sameAs: [
    'https://github.com/Dawid-Czyzewski/',
    'https://www.linkedin.com/in/dawid-czyżewski',
  ],
  description: tMeta('heroSubtitle'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${inter.variable} ${caveat.variable}`}>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <I18nProvider>
          <div className="app-shell">
            <HashRedirect />
            <Suspense fallback={null}>
              <GoogleAnalytics />
            </Suspense>
            <Header />
            <div className="app-main">{children}</div>
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
