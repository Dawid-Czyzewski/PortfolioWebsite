'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initGoogleAnalytics, isAnalyticsEnabled, trackPageView } from '../utils/googleAnalytics';

const GoogleAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isAnalyticsEnabled) {
      return;
    }
    initGoogleAnalytics();
  }, []);

  useEffect(() => {
    if (!isAnalyticsEnabled) {
      return;
    }

    const search = searchParams?.toString();
    const path = search ? `${pathname}?${search}` : pathname;
    trackPageView(path || '/');
  }, [pathname, searchParams]);

  return null;
};

export default GoogleAnalytics;
