import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ImageModal from '../../components/projects/ImageModal';
import ProjectPageHeader from '../../components/projects/ProjectPageHeader';
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectSectionItem from '../../components/projects/ProjectSectionItem';
import ProjectActions from '../../components/projects/ProjectActions';
import mainPagePhoto from '../../assets/pirateHero/mainPage.png';
import authPhoto from '../../assets/pirateHero/auth.png';
import contactPhoto from '../../assets/pirateHero/contact.png';
import aboutPhoto from '../../assets/pirateHero/about.png';
import characterPhoto from '../../assets/pirateHero/character.png';
import dungeonsPhoto from '../../assets/pirateHero/dungeons.png';
import fightsPhoto from '../../assets/pirateHero/fights.png';
import shipPhoto from '../../assets/pirateHero/ship.png';
import shopPhoto from '../../assets/pirateHero/shop.png';
import backendPhoto from '../../assets/pirateHero/symfony.png';
import frontendPhoto from '../../assets/pirateHero/react.png';
import testsPhoto from '../../assets/pirateHero/tests.png';

const PirateHeroPage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleBack = () => window.history.back();

  useEffect(() => {
    document.title = `${t('PirateHero')}`;
  }, [t]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        closeImageModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedImage]);

  const openImageModal = (image, alt) => {
    setSelectedImage({ image, alt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const projectSections = [
    {
      image: mainPagePhoto,
      alt: t('pirateHeroMainTitle'),
      title: t('pirateHeroMainTitle'),
      description: t('pirateHeroMainText'),
    },
    {
      image: authPhoto,
      alt: t('pirateHeroAuthTitle'),
      title: t('pirateHeroAuthTitle'),
      description: t('pirateHeroAuthText'),
    },
    {
      image: contactPhoto,
      alt: t('pirateHeroContactTitle'),
      title: t('pirateHeroContactTitle'),
      description: t('pirateHeroContactText'),
    },
    {
      image: aboutPhoto,
      alt: t('pirateHeroAboutTitle'),
      title: t('pirateHeroAboutTitle'),
      description: t('pirateHeroAboutText'),
    },
    {
      image: characterPhoto,
      alt: t('pirateHeroCharacterTitle'),
      title: t('pirateHeroCharacterTitle'),
      description: t('pirateHeroCharacterText'),
    },
    {
      image: dungeonsPhoto,
      alt: t('pirateHeroDungeonsTitle'),
      title: t('pirateHeroDungeonsTitle'),
      description: t('pirateHeroDungeonsText'),
    },
    {
      image: fightsPhoto,
      alt: t('pirateHeroFightsTitle'),
      title: t('pirateHeroFightsTitle'),
      description: t('pirateHeroFightsText'),
    },
    {
      image: shipPhoto,
      alt: t('pirateHeroShipTitle'),
      title: t('pirateHeroShipTitle'),
      description: t('pirateHeroShipText'),
    },
    {
      image: shopPhoto,
      alt: t('pirateHeroEconomyTitle'),
      title: t('pirateHeroEconomyTitle'),
      description: t('pirateHeroEconomyText'),
    },
    {
      image: backendPhoto,
      alt: t('pirateHeroBackendTitle'),
      title: t('pirateHeroBackendTitle'),
      description: t('pirateHeroBackendText'),
    },
    {
      image: frontendPhoto,
      alt: t('pirateHeroFrontendTitle'),
      title: t('pirateHeroFrontendTitle'),
      description: t('pirateHeroFrontendText'),
    },
    {
      image: testsPhoto,
      alt: t('pirateHeroTestsTitle'),
      title: t('pirateHeroTestsTitle'),
      description: t('pirateHeroTestsText'),
    },
  ];

  const technologies = ['TypeScript', 'React', 'Symfony', 'API Platform', 'Tailwind', 'JWT'];

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ProjectPageHeader title="PirateHero" onBack={handleBack} t={t} />

        <ProjectInfo
          title={t('pirateHeroTitle')}
          description={t('pirateHeroDescription')}
          technologies={technologies}
        />

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {projectSections.map((section, index) => (
            <ProjectSectionItem
              key={index}
              section={section}
              index={index}
              onImageClick={openImageModal}
            />
          ))}
        </div>

        <ProjectActions
          websiteUrl="https://piratehero.dawid-developer.pl/"
          githubFrontendUrl="https://github.com/Dawid-Czyzewski/PirateHero-frontend"
          githubBackendUrl="https://github.com/Dawid-Czyzewski/PirateHero-backend"
          t={t}
        />

        <ImageModal selectedImage={selectedImage} onClose={closeImageModal} />
      </div>
    </div>
  );
};

export default PirateHeroPage;
