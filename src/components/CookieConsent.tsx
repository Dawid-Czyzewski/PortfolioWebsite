'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { initGoogleAnalytics, isAnalyticsEnabled } from '@/utils/googleAnalytics';

const STORAGE_KEY = 'cookie-consent';

const CookieConsent = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isAnalyticsEnabled) return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
      return;
    }
    if (stored === 'accepted') {
      initGoogleAnalytics();
    }
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
    initGoogleAnalytics();
  };

  const decline = () => {
    window.localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label={t('cookieBannerAria')}>
      <p>
        {t('cookieBannerText')}{' '}
        <Link href="/polityka-prywatnosci">{t('cookieBannerPrivacy')}</Link>.
      </p>
      <div className="cookie-banner-actions">
        <button type="button" className="secondary-button" onClick={decline}>
          {t('cookieBannerDecline')}
        </button>
        <button type="button" className="primary-button" onClick={accept}>
          {t('cookieBannerAccept')}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
