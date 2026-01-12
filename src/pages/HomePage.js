import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import HomeBackground from '../components/home/HomeBackground';
import HeroSection from '../components/home/HeroSection';
import LatestProjectSection from '../components/home/LatestProjectSection';

const HomePage = () => {
  const { t } = useTranslation();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    document.title = `${t('home')}`;
  }, [t]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <HomeBackground />
      <HeroSection showScrollIndicator={showScrollIndicator} />
      <LatestProjectSection 
        onViewportEnter={() => setShowScrollIndicator(false)}
        onViewportLeave={() => setShowScrollIndicator(true)}
      />
    </div>
  );
};

export default HomePage;
