'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initGoogleAnalytics, isAnalyticsEnabled, trackPageView } from '../utils/googleAnalytics';

const GoogleAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!isAnalyticsEnabled) return;
    if (window.localStorage.getItem('cookie-consent') !== 'accepted') return;
    initGoogleAnalytics();
  }, []);

  useEffect(() => {
    if (!isAnalyticsEnabled) return;
    if (window.localStorage.getItem('cookie-consent') !== 'accepted') return;
    if (!window.gtag) {
      initGoogleAnalytics();
    }
    trackPageView(pathname || '/');
  }, [pathname]);

  return null;
};

export default GoogleAnalytics;
