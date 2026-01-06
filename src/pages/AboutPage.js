import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { CodeBracketIcon, AcademicCapIcon, BriefcaseIcon, RocketLaunchIcon, TrophyIcon, GlobeAltIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {t('about')}
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-30"></div>
              <img
                src={mainPhoto}
                alt="Dawid Czyżewski"
                className="relative w-80 h-80 object-cover rounded-3xl border-4 border-white/20 shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('aboutGreeting')}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {t('aboutDescription')}
            </p>
            
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 text-purple-300 font-semibold mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <BriefcaseIcon className="w-5 h-5" />
              {t('aboutExperience')}
            </motion.div>
            <motion.a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 w-fit cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RocketLaunchIcon className="w-5 h-5" />
              {t('aboutContactMe')}
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <span className="flex items-center justify-center gap-3">
              <CodeBracketIcon className="w-10 h-10 text-purple-400" />
              {t('aboutSkills')}
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-400/50 transition-all duration-300 text-center cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
              >
                <span className="text-white font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <span className="flex items-center justify-center gap-3">
              <BriefcaseIcon className="w-10 h-10 text-blue-400" />
              {t('aboutExperienceTitle')}
            </span>
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-blue-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{exp.title}</h3>
                  <span className="text-purple-400 font-semibold">{exp.period}</span>
                </div>
                <h4 className="text-xl text-blue-300 font-semibold mb-2">{exp.company}</h4>
                <p className="text-white/70">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <span className="flex items-center justify-center gap-3">
              <AcademicCapIcon className="w-10 h-10 text-pink-400" />
              {t('aboutEducationTitle')}
            </span>
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-pink-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{edu.degree}</h3>
                  <span className="text-pink-400 font-semibold">{edu.period}</span>
                </div>
                <h4 className="text-xl text-pink-300 font-semibold mb-2">{edu.school}</h4>
                <p className="text-white/70">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <span className="flex items-center justify-center gap-3">
              <TrophyIcon className="w-10 h-10 text-yellow-400" />
              {t('aboutCertificatesTitle')}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificatesData.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-yellow-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-white mb-3">{cert.name}</h3>
                <div className="mb-4">
                  <h4 className="text-lg text-yellow-300 font-semibold mb-1">{cert.issuer}</h4>
                  <span className="text-yellow-400 font-medium">{cert.date}</span>
                </div>
                <p className="text-white/70 mb-4">{cert.description}</p>
                {cert.downloadUrl && (
                  <motion.button
                    onClick={() => handleDownload(cert.downloadUrl, cert.fileName)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowDownTrayIcon className="w-5 h-5" />
                    {t('downloadCertificate')}
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <span className="flex items-center justify-center gap-3">
              <GlobeAltIcon className="w-10 h-10 text-green-400" />
              {t('aboutLanguagesTitle')}
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {languagesData.map((lang, index) => (
              <motion.div
                key={lang.id}
                className="p-4 px-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-green-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-bold text-white">{lang.name}</h3>
                  <span className="text-green-400 font-semibold">{lang.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
