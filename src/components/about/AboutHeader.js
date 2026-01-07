import { motion } from 'framer-motion';

const AboutHeader = ({ title }) => {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
    </motion.div>
  );
};

export default AboutHeader;
