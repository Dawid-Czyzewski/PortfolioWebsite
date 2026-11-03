import type { Metadata } from 'next';
import pl from '@/locales/pl/translation.json';
import { SITE_LOCALE, SITE_LOCALE_ALT, SITE_NAME, SITE_URL } from '@/lib/site';

type Messages = typeof pl;

const getNested = (messages: Messages, path: string): string | undefined => {
  const value = path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, messages);
  return typeof value === 'string' ? value : undefined;
};

export const tMeta = (key: string): string =>
  getNested(pl, key) ?? (pl as unknown as Record<string, string>)[key] ?? key;

export const buildPageMetadata = ({
  title,
  description,
  path = '/',
  image,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  absoluteTitle?: boolean;
}): Metadata => {
  const url = new URL(path, SITE_URL).toString();
  const ogImage = image ? new URL(image, SITE_URL).toString() : undefined;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      alternateLocale: [SITE_LOCALE_ALT],
      ...(ogImage ? { images: [{ url: ogImage, alt: title }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
};
