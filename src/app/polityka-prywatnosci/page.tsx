import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/views/PrivacyPolicyPage';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Polityka prywatności',
  description:
    'Polityka prywatności dawid-developer.pl: administrator danych, cookies, Google Analytics i prawa użytkownika (RODO).',
  path: '/polityka-prywatnosci',
});

export default function Page() {
  return <PrivacyPolicyPage />;
}
