import { motion } from 'framer-motion';
import { TrophyIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import SectionTitle from './SectionTitle';

const CertificatesSection = ({ certificates, title, downloadText, onDownload }) => {
  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <SectionTitle icon={TrophyIcon} title={title} iconColor="text-yellow-400" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert, index) => (
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
                onClick={() => onDownload(cert.downloadUrl, cert.fileName)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                {downloadText}
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CertificatesSection;
