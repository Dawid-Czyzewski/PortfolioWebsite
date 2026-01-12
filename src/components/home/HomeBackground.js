import { motion } from 'framer-motion';

const HomeBackground = () => {
  return (
    <>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(120,119,198,0.1)_50%,transparent_75%)] bg-[length:40px_40px] animate-pulse" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-32 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </>
  );
};

export default HomeBackground;
