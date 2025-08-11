import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('pageNotFound')}`;
  }, [t]);

  return (
    <section className="relative flex flex-col items-center justify-center text-white bg-black overflow-hidden" style={{ minHeight: '100vh' }}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-teal-400 via-blue-500 to-indigo-600 opacity-30"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 text-center space-y-6 max-w-lg">
        <motion.h1
          className="text-7xl font-bold"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-2xl opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {t('pageNotFound')}
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-teal-400 text-black font-semibold rounded hover:bg-teal-500 transition"
            whileHover={{ scale: 1.1 }}
          >
            {t('backToHome')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;
