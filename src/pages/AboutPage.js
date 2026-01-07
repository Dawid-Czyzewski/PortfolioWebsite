import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import AboutHeader from '../components/about/AboutHeader';
import AboutProfile from '../components/about/AboutProfile';
import SkillsSection from '../components/about/SkillsSection';
import ExperienceSection from '../components/about/ExperienceSection';
import EducationSection from '../components/about/EducationSection';
import CertificatesSection from '../components/about/CertificatesSection';
import LanguagesSection from '../components/about/LanguagesSection';
import mainPhoto from '../assets/mainPhoto.jpg';
import { getCertificates } from '../data/certificates';
import { getLanguages } from '../data/languages';
import { skills } from '../data/skills';
import { getExperience } from '../data/experience';
import { getEducation } from '../data/education';

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    document.title = `${t('about')}`;
  }, [t]);

  const experience = getExperience(t, lang);
  const education = getEducation(t);
  const certificatesData = getCertificates(t);
  const languagesData = getLanguages(t);

  const handleDownload = (downloadUrl, fileName) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AboutHeader title={t('about')} />

        <AboutProfile
          photo={mainPhoto}
          alt="Dawid Czyżewski"
          greeting={t('aboutGreeting')}
          description={t('aboutDescription')}
          experience={t('aboutExperience')}
          contactMe={t('aboutContactMe')}
        />

        <SkillsSection skills={skills} title={t('aboutSkills')} />

        <ExperienceSection experience={experience} title={t('aboutExperienceTitle')} />

        <EducationSection education={education} title={t('aboutEducationTitle')} />

        <CertificatesSection
          certificates={certificatesData}
          title={t('aboutCertificatesTitle')}
          downloadText={t('downloadCertificate')}
          onDownload={handleDownload}
        />

        <LanguagesSection languages={languagesData} title={t('aboutLanguagesTitle')} />
      </div>
    </div>
  );
};

export default AboutPage;
