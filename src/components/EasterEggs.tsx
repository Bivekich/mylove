'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EasterEggs = () => {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const [showSecret, setShowSecret] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Показываем подсказку через 5 секунд после загрузки
    const hintTimer = setTimeout(() => setShowHint(true), 5000);
    return () => clearTimeout(hintTimer);
  }, []);

  useEffect(() => {
    let sequence = '';
    const secretCode = 'любовь';

    const handleKeyPress = (e: KeyboardEvent) => {
      sequence += e.key.toLowerCase();
      if (sequence.length > secretCode.length) {
        sequence = sequence.slice(1);
      }

      if (sequence === secretCode) {
        setShowSecret(true);
        setTimeout(() => setShowSecret(false), 3000);
      }

      // Создаем сердечко при нажатии пробела
      if (e.code === 'Space') {
        e.preventDefault(); // Предотвращаем прокрутку страницы
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        setHearts((prev) => [...prev, { id: Date.now(), x, y }]);
        setTimeout(() => {
          setHearts((prev) => prev.filter((heart) => heart.id !== Date.now()));
        }, 1000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <>
      <AnimatePresence>
        {/* Подсказка о пасхалках */}
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 left-4 z-50"
          >
            <motion.div
              className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-4 max-w-xs border border-pink-100"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-800 text-sm">
                ✨ Здесь спрятаны волшебные секреты... Найди их все!
              </p>
            </motion.div>
          </motion.div>
        )}

        {showSecret && (
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
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-4xl mb-4"
                >
                  🎉
                </motion.div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Секретное послание!
                </h3>
                <p className="text-gray-800 text-xl leading-relaxed">
                  Ты - моё самое большое счастье в жизни! ❤️
                </p>
              </div>

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
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 2, y: -100 }}
            transition={{ duration: 1 }}
            className="fixed text-4xl pointer-events-none z-50"
            style={{ left: heart.x, top: heart.y }}
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default EasterEggs;
