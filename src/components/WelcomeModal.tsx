'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface WelcomeModalProps {
  onPlayMusic: () => void;
}

const WelcomeModal = ({ onPlayMusic }: WelcomeModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Показываем модалку через небольшую задержку после загрузки
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    onPlayMusic();
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-md w-full text-center relative overflow-hidden border border-white/20"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative z-10"
            >
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                💝 Любимая моя 💝
              </h2>
              <p className="text-gray-800 text-lg mb-8 leading-relaxed">
                Я подготовил для тебя особенное послание. Чтобы сделать его еще
                более особенным, я добавил музыку, которая напомнит нам о наших
                прекрасных моментах вместе.
              </p>
              <div className="space-y-4">
                <button
                  onClick={handleStart}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-xl w-full text-lg font-medium"
                >
                  Начать с музыкой 🎵
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-gray-800 px-8 py-4 rounded-xl transition-all w-full text-lg font-medium hover:bg-gray-100"
                >
                  Без музыки
                </button>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 text-sm text-gray-500 italic"
              >
                P.S. На этой странице есть что-то особенное... Будь внимательна
                ✨
              </motion.p>
            </motion.div>

            {/* Декоративные элементы */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 to-transparent" />
            <motion.div
              className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-100 rounded-full opacity-50"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            <motion.div
              className="absolute -left-16 -bottom-16 w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-100 rounded-full opacity-50"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 0.5,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
