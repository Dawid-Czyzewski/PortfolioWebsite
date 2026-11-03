'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container legal-content">
          <p className="section-kicker">{t('privacyKicker')}</p>
          <h1>{t('privacyTitle')}</h1>
          <p className="legal-updated">{t('privacyUpdated')}</p>

          <h2>{t('privacyH1')}</h2>
          <p>
            {t('privacyP1')}{' '}
            <a href="mailto:kontakt@dawid-developer.pl">kontakt@dawid-developer.pl</a>.
          </p>

          <h2>{t('privacyH2')}</h2>
          <p>{t('privacyP2')}</p>
          <ul>
            <li>{t('privacyLi1')}</li>
            <li>{t('privacyLi2')}</li>
            <li>{t('privacyLi3')}</li>
          </ul>

          <h2>{t('privacyH3')}</h2>
          <p>{t('privacyP3')}</p>

          <h2>{t('privacyH4')}</h2>
          <p>{t('privacyP4')}</p>

          <h2>{t('privacyH5')}</h2>
          <p>{t('privacyP5')}</p>

          <h2>{t('privacyH6')}</h2>
          <p>{t('privacyP6')}</p>
          <ul>
            <li>{t('privacyRight1')}</li>
            <li>{t('privacyRight2')}</li>
            <li>{t('privacyRight3')}</li>
            <li>{t('privacyRight4')}</li>
            <li>{t('privacyRight5')}</li>
            <li>{t('privacyRight6')}</li>
            <li>{t('privacyRight7')}</li>
            <li>{t('privacyRight8')}</li>
          </ul>
          <p>
            {t('privacyP6b')}{' '}
            <a href="mailto:kontakt@dawid-developer.pl">kontakt@dawid-developer.pl</a>.
          </p>

          <h2>{t('privacyH7')}</h2>
          <p>
            {t('privacyP7')}{' '}
            <a href="mailto:kontakt@dawid-developer.pl">kontakt@dawid-developer.pl</a>
            {' · '}
            <Link href="/contact">{t('privacyContactForm')}</Link>.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
