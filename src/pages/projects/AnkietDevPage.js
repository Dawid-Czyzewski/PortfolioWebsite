import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ImageModal from '../../components/projects/ImageModal';
import ProjectPageHeader from '../../components/projects/ProjectPageHeader';
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectSectionItem from '../../components/projects/ProjectSectionItem';
import ProjectActions from '../../components/projects/ProjectActions';
import mainPagePhoto from '../../assets/ankietDev/mainPage.png';
import ankietDevContactPhoto from '../../assets/ankietDev/ankietDevContact.png';
import ankietDevRegsterPhoto from '../../assets/ankietDev/register.png';
import ankietDevDashboardPhoto from '../../assets/ankietDev/ankietDevDashboard.png';
import ankietDevCreateNewPhoto from '../../assets/ankietDev/ankietDevCreateNew.png';
import ankietDevStatisticsPhoto from '../../assets/ankietDev/ankietDevStatistics.png';

const AnkietDevPage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleBack = () => window.history.back();

  useEffect(() => {
    document.title = `${t('AnkietDev')}`;
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
      alt: t("ankietDevMainTitle"),
      title: t("ankietDevMainTitle"),
      description: t("ankietDevMainText"),
    },
    {
      image: ankietDevContactPhoto,
      alt: t("ankietDevContactTitle"),
      title: t("ankietDevContactTitle"),
      description: t("ankietDevContact"),
    },
    {
      image: ankietDevRegsterPhoto,
      alt: t("ankietDevRegisterTitle"),
      title: t("ankietDevRegisterTitle"),
      description: t("ankietDevRegisterText"),
    },
    {
      image: ankietDevDashboardPhoto,
      alt: t("ankietDevDashboardTitle"),
      title: t("ankietDevDashboardTitle"),
      description: t("ankietDevDashboardText"),
    },
    {
      image: ankietDevCreateNewPhoto,
      alt: t("ankietDevCreateNewTitle"),
      title: t("ankietDevCreateNewTitle"),
      description: t("ankietDevCreateNewText"),
    },
    {
      image: ankietDevStatisticsPhoto,
      alt: t("ankietDevStatisticsTitle"),
      title: t("ankietDevStatisticsTitle"),
      description: t("ankietDevStatisticsText"),
    }
  ];

  const technologies = ['PHP', 'React', 'Tailwind', 'JavaScript', 'HTML', 'MySQL'];

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ProjectPageHeader title="AnkietDev" onBack={handleBack} t={t} />

        <ProjectInfo
          title={t('ankietDevTitle')}
          description={t('ankietDevDescription')}
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
          websiteUrl="https://satoshidc.cfolks.pl/"
          githubUrl="https://github.com/Dawid-Czyzewski/AnkietDev"
          t={t}
        />

        <ImageModal selectedImage={selectedImage} onClose={closeImageModal} />
      </div>
    </div>
  );
};

export default AnkietDevPage;
