'use client';

import { motion } from 'framer-motion';

const FinalSection = () => {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <motion.h2
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-8"
        >
          Вернись ко мне
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Я обещаю быть лучше, ценить каждый момент с тобой и делать всё
            возможное, чтобы ты была счастлива. Ты - самое дорогое, что есть в
            моей жизни.
          </p>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Давай начнем всё сначала. Я люблю тебя всем сердцем.
          </p>
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            className="text-5xl mb-4"
          >
            💖
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-gray-500 italic"
        >
          P.S. Нажми пробел, чтобы увидеть магию любви ✨
        </motion.p>
      </motion.div>
    </section>
  );
};

export default FinalSection;
