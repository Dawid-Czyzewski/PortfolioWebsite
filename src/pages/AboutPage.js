import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import mainPhoto from '../assets/mainPhoto.jpg';

const AboutPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('about')}`;
  }, [t]);


  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const rawSkills = t('aboutSkills', { returnObjects: true });
  const skills = Array.isArray(rawSkills)
    ? rawSkills
    : String(rawSkills).split(',').map(s => s.trim());

  let companies = t('trustedCompanies', { returnObjects: true }) || [];

  companies = companies.map(company => {
    if (company.name === 'Zirto') {
      const start = new Date(2025, 2, 1);
      const now = new Date();
      let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
      if (now.getDate() < start.getDate()) months--;
      if (months < 1) months = 1;
      let duration = '';
      if (t('about', { lng: 'en' }) === 'About' && (t('about') === 'About' || t('about') === 'About me')) {
        if (months >= 12) {
          const years = Math.floor(months / 12);
          const restMonths = months % 12;
          duration = years + ' year' + (years > 1 ? 's' : '');
          if (restMonths > 0) duration += ' and ' + restMonths + ' month' + (restMonths > 1 ? 's' : '');
        } else {
          duration = months + ' month' + (months > 1 ? 's' : '');
        }
      } else {
        duration = months + ' miesięcy';
        if (months >= 12) {
          const years = Math.floor(months / 12);
          const restMonths = months % 12;
          duration = years + ' rok' + (years > 1 ? 'i' : '');
          if (restMonths > 0) duration += ' ' + restMonths + ' mies.';
        }
      }
      return { ...company, duration, currently: true };
    }
    return company;
  });

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center text-white bg-black py-20 px-4 overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-teal-400 via-blue-500 to-indigo-600 opacity-30"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative z-10 max-w-6xl w-full space-y-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="relative flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-16 bg-gradient-to-br from-indigo-900/60 via-blue-800/40 to-teal-700/30 rounded-3xl shadow-2xl p-8 md:p-14 border border-white/10 overflow-hidden"
          variants={itemVariants}
        >
          <motion.div
            className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-tr from-teal-400 via-blue-500 to-indigo-600 rounded-full opacity-30 blur-2xl z-0"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="relative z-10 flex-shrink-0 flex justify-center items-center"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={mainPhoto}
              alt={t('aboutImageAlt')}
              className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-2xl border-4 border-teal-400 shadow-xl bg-white/10"
            />
          </motion.div>
          <motion.div
            className="relative z-10 flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-white/90 max-w-2xl mb-2">
              {t('aboutDescription')}
            </p>
          </motion.div>
        </motion.div>
        {companies.length > 0 && (
          <motion.div variants={itemVariants} className="mt-8 mb-20">
            <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight">
              {t('trustedMeTitle')}
            </h2>
            <div className="flex flex-wrap justify-center gap-12">
              {companies.map((c, idx) => (
                <div
                  key={idx}
                  className="w-full sm:w-[440px] bg-gradient-to-br from-indigo-700 via-blue-600 to-teal-500 shadow-2xl rounded-3xl p-12 flex flex-col items-center border-2 border-white/20 hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex flex-col items-center w-full">
                    <div className="bg-white rounded-xl p-3 mb-6 shadow-md">
                      <img
                        src={c.logoUrl}
                        alt={c.name}
                        className="h-20 w-36 object-contain"
                        style={{ maxWidth: '160px', maxHeight: '80px' }}
                      />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 text-center w-full truncate">
                      {c.name}
                    </div>
                    <div className="text-lg text-white/80 mb-2 text-center w-full">
                      {c.role}
                    </div>
                    <div className="text-base text-white/70 text-center w-full">
                      {c.currently
                        ? t('workedForCurrent', { role: c.role, duration: c.duration })
                        : t('workedFor', { role: c.role, duration: c.duration })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
        <motion.div variants={itemVariants}>
          <div className="flex justify-center my-6">
            <span className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-teal-700 via-blue-700 to-indigo-800 px-6 py-3 rounded-xl shadow-lg border border-white/10">
              {t('experienceSimple', { years: 3 })}
            </span>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-extrabold text-center mb-6">
            {t('aboutSkillsTitle')}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-5 py-2 bg-blue-500 bg-opacity-30 text-white rounded-full text-xl font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-extrabold text-center mb-6 mt-12">
            {t('educationTitle', 'Moje wykształcenie')}
          </h2>
            <div className="flex flex-wrap justify-center gap-12">
              {(t('educationList', { returnObjects: true }) || []).map((edu, idx) => (
                <div
                  key={idx}
                  className="w-full sm:w-[440px] bg-gradient-to-br from-indigo-700 via-blue-600 to-teal-500 shadow-2xl rounded-3xl p-12 flex flex-col items-center border-2 border-white/20 mb-2"
                >
                  <span className="text-xl font-semibold text-white text-center w-full">
                    {edu}
                  </span>
                </div>
              ))}
            </div>
        </motion.div>
        <motion.div variants={itemVariants} className="flex justify-center mt-12">
          <a
            href="/#/projects"
            className="inline-block px-8 py-4 text-xl font-bold rounded-full bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 border-2 border-white/10"
          >
            {t('seePortfolioBtn')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
