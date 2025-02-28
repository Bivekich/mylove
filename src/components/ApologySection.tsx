'use client';

import { motion } from 'framer-motion';

const ApologySection = () => {
  return (
    <section className="min-h-screen py-20 bg-pink-50/50 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
          Прости меня
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Я знаю, что совершил ошибки, и очень сожалею о них. Каждый день без
            тебя показывает мне, насколько ты важна для меня. Я понимаю свои
            ошибки и хочу исправить всё то, что причинило тебе боль.
          </p>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Ты заслуживаешь самого лучшего, и я готов меняться и становиться
            лучше ради тебя. Твое счастье - это самое важное для меня.
          </p>
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl mb-4"
          >
            ❤️
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ApologySection;
