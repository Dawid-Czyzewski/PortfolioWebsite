import ProjectSection from "../../components/projects/ProjectSection";
import ProjectHeader from "../../components/projects/ProjectHeader";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import mainPagePhoto from '../../assets/ankietDev/mainPage.png';
import ankietDevContactPhoto from '../../assets/ankietDev/ankietDevContact.png';
import ankietDevRegsterPhoto from '../../assets/ankietDev/register.png';
import ankietDevDashboardPhoto from '../../assets/ankietDev/ankietDevDashboard.png';
import ankietDevCreateNewPhoto from '../../assets/ankietDev/ankietDevCreateNew.png';
import ankietDevStatisticsPhoto from '../../assets/ankietDev/ankietDevStatistics.png';
import VisitButton from "../../components/projects/VisitButton";

const AnkietDevPage = () => {
  const { t } = useTranslation();
  const handleBack = () => window.history.back();

  useEffect(() => {
    document.title = `${t('AnkietDev')}`;
  }, [t]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-black to-gray-900 overflow-hidden py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8">
      <div
        className="absolute inset-0 bg-gradient-to-tr from-teal-400 via-blue-500 to-indigo-600 opacity-20 blur-xl"
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10 w-full max-w-4xl space-y-12">
        <ProjectHeader
          title="AnkietDev"
          onBack={handleBack}
          t={t}
          className="mb-6 sm:mb-8 md:mb-10"
          titleClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        />

        <ProjectSection
          image={mainPagePhoto}
          alt="ankietdev main page photo"
          className="mb-8 sm:mb-10 md:mb-12"
          imageClassName="w-full max-w-full sm:max-w-md lg:max-w-lg h-auto rounded-2xl shadow-2xl border-2 border-teal-400 object-cover transition-transform transform hover:scale-105"
          contentClassName="bg-black bg-opacity-40 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-left">
            {t("ankietDevMainText")}
          </p>
        </ProjectSection>

        <ProjectSection
          image={ankietDevContactPhoto}
          alt="ankietdev contact page"
          reverse
          className="mb-8 sm:mb-10 md:mb-12"
          imageClassName="w-full max-w-full sm:max-w-md lg:max-w-lg h-auto rounded-2xl shadow-2xl border-2 border-teal-400 object-cover transition-transform transform hover:scale-105"
          contentClassName="bg-black bg-opacity-40 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-left">
            {t("ankietDevContact")}
          </p>
        </ProjectSection>

        <ProjectSection
          image={ankietDevRegsterPhoto}
          alt="ankietdev register page"
          className="mb-8 sm:mb-10 md:mb-12"
          imageClassName="w-full max-w-full sm:max-w-md lg:max-w-lg h-auto rounded-2xl shadow-2xl border-2 border-teal-400 object-cover transition-transform transform hover:scale-105"
          contentClassName="bg-black bg-opacity-40 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-left">
            {t("ankietDevRegisterText")}
          </p>
        </ProjectSection>

        <ProjectSection
          image={ankietDevDashboardPhoto}
          reverse
          alt="ankietdev dashboard page"
          className="mb-8 sm:mb-10 md:mb-12"
          imageClassName="w-full max-w-full sm:max-w-md lg:max-w-lg h-auto rounded-2xl shadow-2xl border-2 border-teal-400 object-cover transition-transform transform hover:scale-105"
          contentClassName="bg-black bg-opacity-40 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-left">
            {t("ankietDevDashboardText")}
          </p>
        </ProjectSection>

        <ProjectSection
          image={ankietDevCreateNewPhoto}
          alt="ankietdev create new page"
          className="mb-8 sm:mb-10 md:mb-12"
          imageClassName="w-full max-w-full sm:max-w-md lg:max-w-lg h-auto rounded-2xl shadow-2xl border-2 border-teal-400 object-cover transition-transform transform hover:scale-105"
          contentClassName="bg-black bg-opacity-40 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-left">
            {t("ankietDevCreateNewText")}
          </p>
        </ProjectSection>

        <ProjectSection
          image={ankietDevStatisticsPhoto}
          reverse
          alt="ankietdev statistics page"
          className="mb-8 sm:mb-10 md:mb-12"
          imageClassName="w-full max-w-full sm:max-w-md lg:max-w-lg h-auto rounded-2xl shadow-2xl border-2 border-teal-400 object-cover transition-transform transform hover:scale-105"
          contentClassName="bg-black bg-opacity-40 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-left">
            {t("ankietDevStatisticsText")}
          </p>
        </ProjectSection>

        <div className="flex justify-center space-x-10">
          <VisitButton
            url="https://satoshidc.cfolks.pl/"
            t={t}
            text="seeWebsite"
            className="mt-4 sm:mt-6 md:mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 text-lg font-semibold shadow-xl hover:scale-105 transform transition"
          />
           <VisitButton
            url="https://github.com/Dawid-Czyzewski/AnkietDev"
            t={t}
            text="seeGithub"
            className="mt-4 sm:mt-6 md:mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 text-lg font-semibold shadow-xl hover:scale-105 transform transition"
          />
        </div>
      </div>
    </section>
  );
};

export default AnkietDevPage;
