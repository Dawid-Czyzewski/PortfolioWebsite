import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
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

const DevLinkPage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleBack = () => window.history.back();

  useEffect(() => {
    document.title = `${t('DevLink')}`;
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
    <div className="min-h-screen py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ProjectPageHeader title="DevLink" onBack={handleBack} t={t} />

        <ProjectInfo
          title={t('devLinkTitle')}
          description={t('devLinkDescription')}
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
          websiteUrl="https://devlink.satoshidc.cfolks.pl/"
          githubUrl="https://github.com/Dawid-Czyzewski/DevLink"
          t={t}
        />

        <ImageModal selectedImage={selectedImage} onClose={closeImageModal} />
      </div>
    </div>
  );
};

export default DevLinkPage;
