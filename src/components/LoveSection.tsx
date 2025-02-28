'use client';

import { motion } from 'framer-motion';

const reasons = [
  'Твоя улыбка освещает мой мир',
  'Твоя доброта делает меня лучше',
  'С тобой я чувствую себя самым счастливым',
  'Ты понимаешь меня как никто другой',
  'Твоя поддержка бесценна для меня',
  'Ты делаешь каждый мой день особенным',
];

const LoveSection = () => {
  return (
    <section className="min-h-screen py-20 flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-gray-800 mb-12 text-center"
      >
        Почему я тебя люблю
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <p className="text-lg text-gray-700">{reason}</p>
          </motion.div>
        ))}
      </div>

      {/* Подсказка для секретного слова */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="mt-12 text-gray-500 text-center"
      >
        <span className="text-pink-500">Л</span>учшее чувство - это{' '}
        <span className="text-pink-500">Ю</span>ное и искреннее.{' '}
        <span className="text-pink-500">Б</span>ережно храни его в сердце.{' '}
        <span className="text-pink-500">О</span>но делает нас сильнее.{' '}
        <span className="text-pink-500">В</span>месте мы все преодолеем.{' '}
        <span className="text-pink-500">Ь</span>
      </motion.p>
    </section>
  );
};

export default LoveSection;
