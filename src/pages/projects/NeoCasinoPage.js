import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ImageModal from '../../components/projects/ImageModal';
import ProjectPageHeader from '../../components/projects/ProjectPageHeader';
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectSectionItem from '../../components/projects/ProjectSectionItem';
import ProjectActions from '../../components/projects/ProjectActions';
import mainPagePhoto from '../../assets/neoCasino/mainPage.png';
import neoCasinoSlotPhoto from '../../assets/neoCasino/neoCasinoSlot.png';
import neoCasinoLegendPhoto from '../../assets/neoCasino/legend.png';
import neoCasinoBlackJackPhoto from '../../assets/neoCasino/blackJack.png';
import neoCasinoRoulettePhoto from '../../assets/neoCasino/neoCasinoRoulette.png';
import neoCasinoCrashPhoto from '../../assets/neoCasino/neoCasinoCrash.png';
import neoCasinoScratchCardPhoto from '../../assets/neoCasino/neoCasinoScratchCard.png';

const NeoCasinoPage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleBack = () => window.history.back();

  useEffect(() => {
    document.title = `${t('NeoCasino')}`;
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
      alt: t("neoCasinoMainTitle"),
      title: t("neoCasinoMainTitle"),
      description: t("neoCasinoMainText"),
    },
    {
      image: neoCasinoSlotPhoto,
      alt: t("neoCasinoSlotTitle"),
      title: t("neoCasinoSlotTitle"),
      description: t("neoCasinoSlotText"),
    },
    {
      image: neoCasinoLegendPhoto,
      alt: t("neoCasinoLegendTitle"),
      title: t("neoCasinoLegendTitle"),
      description: t("neoCasinoLegendText"),
    },
    {
      image: neoCasinoBlackJackPhoto,
      alt: t("neoCasinoBlackJackTitle"),
      title: t("neoCasinoBlackJackTitle"),
      description: t("neoCasinoBlackJackText"),
    },
    {
      image: neoCasinoRoulettePhoto,
      alt: t("neoCasinoRouletteTitle"),
      title: t("neoCasinoRouletteTitle"),
      description: t("neoCasinoRouletteText"),
    },
    {
      image: neoCasinoScratchCardPhoto,
      alt: t("neoCasinoScratchCardTitle"),
      title: t("neoCasinoScratchCardTitle"),
      description: t("neoCasinoScratchCardText"),
    },
    {
      image: neoCasinoCrashPhoto,
      alt: t("neoCasinoCrashTitle"),
      title: t("neoCasinoCrashTitle"),
      description: t("neoCasinoCrashText"),
    }
  ];

  const technologies = ['React', 'CSS', 'JavaScript', 'HTML'];

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ProjectPageHeader title="NeoCasino" onBack={handleBack} t={t} />

        <ProjectInfo
          title={t('neoCasinoTitle')}
          description={t('neoCasinoDescription')}
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
          websiteUrl="https://casino.satoshidc.cfolks.pl/"
          githubUrl="https://github.com/Dawid-Czyzewski/NeoCasino"
          t={t}
        />

        <ImageModal selectedImage={selectedImage} onClose={closeImageModal} />
      </div>
    </div>
  );
};

export default NeoCasinoPage;
