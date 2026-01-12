import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ScrollIndicator = ({ showScrollIndicator }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    const projectSection = document.querySelector('[data-project-section]');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="absolute top-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
      initial={{ opacity: 0 }}
      animate={{ opacity: showScrollIndicator ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center gap-3">
        <motion.span
          className="text-white/60 text-xs font-medium uppercase tracking-widest group-hover:text-purple-300 transition-colors"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {t('scrollDownHint')}
        </motion.span>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        <motion.div
          className="relative w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2 group-hover:border-purple-400/60 transition-colors"
          animate={{ 
            borderColor: ['rgba(255,255,255,0.4)', 'rgba(168,85,247,0.6)', 'rgba(255,255,255,0.4)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
