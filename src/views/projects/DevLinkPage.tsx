'use client';

import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import ImageModal from '../../components/projects/ImageModal';
import ProjectPageHeader from '../../components/projects/ProjectPageHeader';
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectSectionItem from '../../components/projects/ProjectSectionItem';
import ProjectActions from '../../components/projects/ProjectActions';
import mainPagePhoto from '../../assets/devLink/mainPage.png';
import devLinkLoginAndRegisterPhoto from '../../assets/devLink/loginAndRegisetr.png';
import contactPhoto from '../../assets/devLink/contact.png';
import termsOfServicePhoto from '../../assets/devLink/terms.png';
import profilePhoto from '../../assets/devLink/profile.png';
import type { ImageSource, SelectedImage } from '../../types';

const DevLinkPage = () => {
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
      alt: t("devLinkMainTitle"),
      title: t("devLinkMainTitle"),
      description: t("devLinkMainText"),
    },
    {
      image: devLinkLoginAndRegisterPhoto,
      alt: t("devLinkLoginAndRegisterTitle"),
      title: t("devLinkLoginAndRegisterTitle"),
      description: t("devLinkLoginAndRegisterText"),
    },
    {
      image: contactPhoto,
      alt: t("devLinkContactTitle"),
      title: t("devLinkContactTitle"),
      description: t("devLinkContactText"),
    },
    {
      image: termsOfServicePhoto,
      alt: t("devLinkTermsOfServiceTitle"),
      title: t("devLinkTermsOfServiceTitle"),
      description: t("devLinkTermsOfServiceText"),
    },
    {
      image: profilePhoto,
      alt: t("devLinkProfileTitle"),
      title: t("devLinkProfileTitle"),
      description: t("devLinkProfileText"),
    }
  ];

  const technologies = ['PHP', 'React', 'Tailwind', 'MySQL', 'JavaScript'];

  return (
    <main className="case-page">
      <section className="case-hero">
        <div className="page-orbs" aria-hidden="true">
          <span className="glow-orb glow-orb-1" />
          <span className="glow-orb glow-orb-2" />
          <span className="glow-orb glow-orb-3" />
        </div>
        <div className="container">
        <ProjectPageHeader title="DevLink" t={t} />

        <ProjectInfo
          title={t('devLinkTitle')}
          description={t('devLinkDescription')}
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
          websiteUrl="https://DevLink.dawid-developer.pl"
          githubUrl="https://github.com/Dawid-Czyzewski/DevLink"
          t={t}
        />

        <ImageModal selectedImage={selectedImage} onClose={closeImageModal} />
        </div>
      </section>
    </main>
  );
};

export default DevLinkPage;
