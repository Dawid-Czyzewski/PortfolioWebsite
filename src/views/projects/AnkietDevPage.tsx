'use client';

import { useState } from 'react';

import { useTranslation } from 'react-i18next';
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
import type { ImageSource, SelectedImage } from '../../types';

const AnkietDevPage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

  const openImageModal = (image: ImageSource, alt: string) => {
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
    <main className="case-page">
      <section className="case-hero">
        <div className="page-orbs" aria-hidden="true">
          <span className="glow-orb glow-orb-1" />
          <span className="glow-orb glow-orb-2" />
          <span className="glow-orb glow-orb-3" />
        </div>
        <div className="container">
        <ProjectPageHeader title="AnkietDev" t={t} />

        <ProjectInfo
          title={t('ankietDevTitle')}
          description={t('ankietDevDescription')}
          technologies={technologies}
        />

        <div className="case-sections">
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
          websiteUrl="https://ankietDev.dawid-developer.pl"
          githubUrl="https://github.com/Dawid-Czyzewski/AnkietDev"
          t={t}
        />

        <ImageModal selectedImage={selectedImage} onClose={closeImageModal} />
        </div>
      </section>
    </main>
  );
};

export default AnkietDevPage;
