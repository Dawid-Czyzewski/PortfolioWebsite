import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ImageModal from '../../components/projects/ImageModal';
import ProjectPageHeader from '../../components/projects/ProjectPageHeader';
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectSectionItem from '../../components/projects/ProjectSectionItem';
import ProjectActions from '../../components/projects/ProjectActions';
import mainPagePhoto from '../../assets/evently/mainPage.png';
import dashboardPhoto from '../../assets/evently/dashboard.png';
import eventsPhoto from '../../assets/evently/events.png';
import formsPhoto from '../../assets/evently/forms.png';
import registrationPhoto from '../../assets/evently/registration.png';
import checkinPhoto from '../../assets/evently/checkin.png';
import authPhoto from '../../assets/evently/auth.png';
import backendPhoto from '../../assets/evently/backend.png';
import frontendPhoto from '../../assets/evently/frontend.png';
import testsPhoto from '../../assets/evently/tests.png';

const EventlyPage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleBack = () => window.history.back();

  useEffect(() => {
    document.title = `${t('Evently')}`;
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
      alt: t('eventlyMainTitle'),
      title: t('eventlyMainTitle'),
      description: t('eventlyMainText'),
    },
    {
      image: dashboardPhoto,
      alt: t('eventlyDashboardTitle'),
      title: t('eventlyDashboardTitle'),
      description: t('eventlyDashboardText'),
    },
    {
      image: eventsPhoto,
      alt: t('eventlyEventsTitle'),
      title: t('eventlyEventsTitle'),
      description: t('eventlyEventsText'),
    },
    {
      image: formsPhoto,
      alt: t('eventlyFormsTitle'),
      title: t('eventlyFormsTitle'),
      description: t('eventlyFormsText'),
    },
    {
      image: registrationPhoto,
      alt: t('eventlyRegistrationTitle'),
      title: t('eventlyRegistrationTitle'),
      description: t('eventlyRegistrationText'),
    },
    {
      image: checkinPhoto,
      alt: t('eventlyCheckinTitle'),
      title: t('eventlyCheckinTitle'),
      description: t('eventlyCheckinText'),
    },
    {
      image: authPhoto,
      alt: t('eventlyAuthTitle'),
      title: t('eventlyAuthTitle'),
      description: t('eventlyAuthText'),
    },
    {
      image: backendPhoto,
      alt: t('eventlyBackendTitle'),
      title: t('eventlyBackendTitle'),
      description: t('eventlyBackendText'),
    },
    {
      image: frontendPhoto,
      alt: t('eventlyFrontendTitle'),
      title: t('eventlyFrontendTitle'),
      description: t('eventlyFrontendText'),
    },
    {
      image: testsPhoto,
      alt: t('eventlyTestsTitle'),
      title: t('eventlyTestsTitle'),
      description: t('eventlyTestsText'),
    },
  ];

  const technologies = ['TypeScript', 'Next.js', 'React', 'Laravel', 'Tailwind'];

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ProjectPageHeader title="Evently" onBack={handleBack} t={t} />

        <ProjectInfo
          title={t('eventlyTitle')}
          description={t('eventlyDescription')}
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
          websiteUrl="https://evently.pl"
          githubFrontendUrl="https://github.com/Dawid-Czyzewski/Evently-frontend"
          githubBackendUrl="https://github.com/Dawid-Czyzewski/Evently-backend"
          t={t}
        />

        <ImageModal selectedImage={selectedImage} onClose={closeImageModal} />
      </div>
    </div>
  );
};

export default EventlyPage;
