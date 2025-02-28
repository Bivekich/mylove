'use client';

import { motion } from 'framer-motion';

const HeartSection = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/50 to-transparent pointer-events-none" />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        className="relative"
      >
        <div className="w-32 h-32 relative before:absolute before:w-32 before:h-32 before:bg-red-500 before:rounded-full before:left-[-50%] after:absolute after:w-32 after:h-32 after:bg-red-500 after:rounded-full after:top-[-50%] bg-red-500 rotate-45" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-gray-800 mt-8 text-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg"
      >
        Любимая моя
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-xl md:text-2xl text-gray-600 mt-4 text-center max-w-2xl px-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl"
      >
        Я хочу рассказать тебе кое-что важное...
      </motion.p>

      {/* Индикатор прокрутки */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <p className="text-gray-600 font-medium">Листай вниз</p>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="text-2xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeartSection;
