import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactPage = () => {
  const { t } = useTranslation();

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

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center text-white bg-black py-20 px-4 min-h-screen overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-teal-400 via-blue-500 to-indigo-600 opacity-30"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative z-10 max-w-3xl w-full space-y-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="bg-gradient-to-br from-indigo-900/60 via-blue-800/40 to-teal-700/30 rounded-3xl shadow-2xl p-8 md:p-14 border border-white/10 flex flex-col items-center"
          variants={itemVariants}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg text-center">
            {t('contact')}
          </h1>
          <div className="flex flex-col gap-6 items-center text-lg sm:text-xl w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full">
              <FaEnvelope className="text-teal-300 text-2xl mb-1 sm:mb-0" />
              <a
                href="mailto:dawid.czyzewski.developer@gmail.com"
                className="underline hover:text-teal-300 transition-colors break-all text-center"
              >
                dawid.czyzewski.developer@gmail.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full">
              <FaLinkedin className="text-teal-300 text-2xl mb-1 sm:mb-0" />
              <a
                href="https://www.linkedin.com/in/dawid-czyżewski"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-teal-300 transition-colors break-all text-center"
              >
                linkedin.com/in/dawid-czyżewski
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full">
              <FaGithub className="text-teal-300 text-2xl mb-1 sm:mb-0" />
              <a
                href="https://github.com/Dawid-Czyzewski/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-teal-300 transition-colors break-all text-center"
              >
                github.com/Dawid-Czyzewski
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactPage;