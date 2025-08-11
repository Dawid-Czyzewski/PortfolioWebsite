import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('home')}`;
  }, [t]);

  return (
    <section className="relative flex flex-col items-center justify-center text-white bg-black overflow-hidden" style={{ minHeight: '100vh' }}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-teal-400 via-blue-500 to-indigo-600 opacity-30"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <div className="absolute inset-0 grid grid-cols-12 gap-4 mix-blend-overlay opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="h-full bg-white"
            style={{ borderRadius: '50%' }}
            animate={{ x: [ -30, 0 ], opacity: [0, 1, 0] }}
            transition={{ delay: i * 0.15, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-xl space-y-6">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Dawid Czyżewski
        </motion.h1>
        <motion.p
          className="text-2xl sm:text-6xl opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {t('softwareDeveloper')}
        </motion.p>

        <motion.div
          className="space-x-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { delayChildren: 1, staggerChildren: 0.3 } }
          }}
        >
          <motion.a
            href="#projects"
            className="inline-block px-6 py-3 bg-teal-400 text-black font-semibold rounded hover:bg-teal-500 transition"
            whileHover={{ scale: 1.1 }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            {t('projects')}
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-block px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition"
            whileHover={{ scale: 1.1 }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            {t('contact')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;
