import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGoogleAnalytics, isAnalyticsEnabled, trackPageView } from '../utils/googleAnalytics';

const GoogleAnalytics = () => {
  const location = useLocation();

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

    const path = `${location.pathname}${location.search}${location.hash}`;
    trackPageView(path || '/');
  }, [location]);

  return null;
};

export default GoogleAnalytics;
