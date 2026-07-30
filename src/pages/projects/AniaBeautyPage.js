import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ImageModal from '../../components/projects/ImageModal';
import ProjectPageHeader from '../../components/projects/ProjectPageHeader';
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectSectionItem from '../../components/projects/ProjectSectionItem';
import ProjectActions from '../../components/projects/ProjectActions';
import mainPagePhoto from '../../assets/aniaBeauty/mainPage.png';
import bookingPhoto from '../../assets/aniaBeauty/booking.png';
import offerPhoto from '../../assets/aniaBeauty/offer.png';
import trainingsPhoto from '../../assets/aniaBeauty/trainings.png';
import galleryPhoto from '../../assets/aniaBeauty/gallery.png';
import adminPhoto from '../../assets/aniaBeauty/admin.png';
import authPhoto from '../../assets/aniaBeauty/auth.png';
import backendPhoto from '../../assets/aniaBeauty/backend.png';
import frontendPhoto from '../../assets/aniaBeauty/frontend.png';
import testsPhoto from '../../assets/aniaBeauty/tests.png';

const AniaBeautyPage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleBack = () => window.history.back();

  useEffect(() => {
    document.title = `${t('AniaBeauty')}`;
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

  // Replace PNGs in assets/aniaBeauty with real screenshots when ready
  const projectSections = [
    {
      image: mainPagePhoto,
      alt: t('aniaBeautyMainTitle'),
      title: t('aniaBeautyMainTitle'),
      description: t('aniaBeautyMainText'),
    },
    {
      image: bookingPhoto,
      alt: t('aniaBeautyBookingTitle'),
      title: t('aniaBeautyBookingTitle'),
      description: t('aniaBeautyBookingText'),
    },
    {
      image: offerPhoto,
      alt: t('aniaBeautyOfferTitle'),
      title: t('aniaBeautyOfferTitle'),
      description: t('aniaBeautyOfferText'),
    },
    {
      image: trainingsPhoto,
      alt: t('aniaBeautyTrainingsTitle'),
      title: t('aniaBeautyTrainingsTitle'),
      description: t('aniaBeautyTrainingsText'),
    },
    {
      image: galleryPhoto,
      alt: t('aniaBeautyGalleryTitle'),
      title: t('aniaBeautyGalleryTitle'),
      description: t('aniaBeautyGalleryText'),
    },
    {
      image: adminPhoto,
      alt: t('aniaBeautyAdminTitle'),
      title: t('aniaBeautyAdminTitle'),
      description: t('aniaBeautyAdminText'),
    },
    {
      image: authPhoto,
      alt: t('aniaBeautyAuthTitle'),
      title: t('aniaBeautyAuthTitle'),
      description: t('aniaBeautyAuthText'),
    },
    {
      image: backendPhoto,
      alt: t('aniaBeautyBackendTitle'),
      title: t('aniaBeautyBackendTitle'),
      description: t('aniaBeautyBackendText'),
    },
    {
      image: frontendPhoto,
      alt: t('aniaBeautyFrontendTitle'),
      title: t('aniaBeautyFrontendTitle'),
      description: t('aniaBeautyFrontendText'),
    },
    {
      image: testsPhoto,
      alt: t('aniaBeautyTestsTitle'),
      title: t('aniaBeautyTestsTitle'),
      description: t('aniaBeautyTestsText'),
    },
  ];

  const technologies = ['TypeScript', 'React', 'Laravel', 'Tailwind', 'Vitest'];

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ProjectPageHeader title="Ania Beauty Studio" onBack={handleBack} t={t} />

        <ProjectInfo
          title={t('aniaBeautyTitle')}
          description={t('aniaBeautyDescription')}
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
          websiteUrl="https://aniastudio.dawid-developer.pl/"
          githubUrl="https://github.com/Dawid-Czyzewski/aniabeautystudio"
          t={t}
        />

        <ImageModal selectedImage={selectedImage} onClose={closeImageModal} />
      </div>
    </div>
  );
};

export default AniaBeautyPage;
