'use client';

import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import ImageModal from '../../components/projects/ImageModal';
import ProjectPageHeader from '../../components/projects/ProjectPageHeader';
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectSectionItem from '../../components/projects/ProjectSectionItem';
import ProjectActions from '../../components/projects/ProjectActions';
import reactPhoto from '../../assets/trackerPro/react.png';
import testsPhoto from '../../assets/trackerPro/tests.png';
import toolsPhoto from '../../assets/trackerPro/tools.png';
import authPhoto from '../../assets/trackerPro/auth.png';
import symfonyPhoto from '../../assets/trackerPro/symfony.png';
import dockerPhoto from '../../assets/trackerPro/docker.png';
import vacationBudgetPhoto from '../../assets/trackerPro/vacationBudget.png';
import savingsPhoto from '../../assets/trackerPro/savings.png';
import jobApplicationsPhoto from '../../assets/trackerPro/jobApplications.png';
import dashboardPhoto from '../../assets/trackerPro/dashboard.png';
import type { ImageSource, SelectedImage } from '../../types';

const TrackerProPage = () => {
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
      image: dashboardPhoto,
      alt: t("trackerProMainTitle"),
      title: t("trackerProMainTitle"),
      description: t("trackerProMainText"),
    },
    {
      image: jobApplicationsPhoto,
      alt: t("trackerProApplicationsTitle"),
      title: t("trackerProApplicationsTitle"),
      description: t("trackerProApplicationsText"),
    },
    {
      image: vacationBudgetPhoto,
      alt: t("trackerProBudgetTitle"),
      title: t("trackerProBudgetTitle"),
      description: t("trackerProBudgetText"),
    },
    {
      image: savingsPhoto,
      alt: t("trackerProSavingsTitle"),
      title: t("trackerProSavingsTitle"),
      description: t("trackerProSavingsText"),
    },
    {
      image: authPhoto,
      alt: t("trackerProAuthTitle"),
      title: t("trackerProAuthTitle"),
      description: t("trackerProAuthText"),
    },
    {
      image: symfonyPhoto,
      alt: t("trackerProBackendTitle"),
      title: t("trackerProBackendTitle"),
      description: t("trackerProBackendText"),
    },
    {
      image: reactPhoto,
      alt: t("trackerProFrontendTitle"),
      title: t("trackerProFrontendTitle"),
      description: t("trackerProFrontendText"),
    },
    {
      image: toolsPhoto,
      alt: t("trackerProTechnologiesTitle"),
      title: t("trackerProTechnologiesTitle"),
      description: t("trackerProTechnologiesText"),
    },
    {
      image: testsPhoto,
      alt: t("trackerProTestsTitle"),
      title: t("trackerProTestsTitle"),
      description: t("trackerProTestsText"),
    },
    {
      image: dockerPhoto,
      alt: t("trackerProDockerTitle"),
      title: t("trackerProDockerTitle"),
      description: t("trackerProDockerText"),
    },
  ];

  const technologies = ['TypeScript', 'React', 'Symfony', 'Docker', 'PHPUnit'];

  return (
    <main className="case-page">
      <section className="case-hero">
        <div className="page-orbs" aria-hidden="true">
          <span className="glow-orb glow-orb-1" />
          <span className="glow-orb glow-orb-2" />
          <span className="glow-orb glow-orb-3" />
        </div>
        <div className="container">
        <ProjectPageHeader title="TrackerPro" t={t} />

        <ProjectInfo
          title={t('trackerProTitle')}
          description={t('trackerProDescription')}
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
          websiteUrl={null}
          githubFrontendUrl="https://github.com/Dawid-Czyzewski/TrackerProFrontend"
          githubBackendUrl="https://github.com/Dawid-Czyzewski/TrackerProBackend"
          t={t}
        />

        <ImageModal selectedImage={selectedImage} onClose={closeImageModal} />
        </div>
      </section>
    </main>
  );
};

export default TrackerProPage;
