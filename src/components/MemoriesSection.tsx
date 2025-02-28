'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const memories = [
  {
    title: 'Наша первая встреча',
    description: 'Тот момент, когда я впервые увидел твою улыбку',
    placeholder:
      'Здесь должна была быть наша фотография, где мы держимся за руки... Но у меня её нет, поэтому представь, как нежно я держу твою ладонь в своей ❤️',
    hint: 'P.S. Знаешь, я до сих пор помню каждую деталь того дня... Твой взгляд, твою улыбку, даже то, как ты поправляла волосы ✨',
    emoji: '🤝',
    imageSrc: '/memories/first-meeting.jpg',
  },
  {
    title: 'Наше первое свидание',
    description: 'Как мы гуляли и разговаривали часами',
    placeholder:
      'А тут должна была быть наша совместная фотография, но мы не успели сфотографироваться... Зато я помню этот прекрасный букет роз, который подарил тебе 🌹',
    hint: 'Помнишь, как мы потерялись во времени? Казалось, прошло всего несколько минут, а на часах уже была ночь... 🌙',
    emoji: '💐',
    imageSrc: '/memories/first-date.jpg',
  },
  {
    title: 'Наши особенные моменты',
    description: 'Все те мелочи, которые делают нас счастливыми',
    placeholder: 'Каждый момент с тобой особенный...',
    hint: 'В каждом из этих моментов я влюблялся в тебя заново... И продолжаю влюбляться каждый день 💫',
    emoji: '✨',
    imageSrc: '/memories/special-moments.jpg',
  },
  {
    title: 'Наши мечты',
    description: 'Планы на будущее, которые мы строили вместе',
    placeholder: 'Наше будущее будет прекрасным...',
    hint: 'Знаешь, все эти мечты... Они обязательно сбудутся. Потому что ты - моя главная мечта ❤️',
    emoji: '🌟',
    imageSrc: '/memories/dreams.jpg',
  },
];

const MemoriesSection = () => {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);
  const [secretMessage, setSecretMessage] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>(
    []
  );

  const handleHeartClick = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const newHeart = { id: Date.now(), x: clientX, y: clientY };
    setHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
    }, 1000);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === 'л') {
        setSecretMessage(true);
        setTimeout(() => setSecretMessage(false), 5000);
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  return (
    <section className="min-h-screen py-20 flex flex-col items-center justify-center relative">
      {/* Анимированные сердечки */}
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ x: heart.x, y: heart.y, scale: 1, opacity: 1 }}
            animate={{ y: heart.y - 100, scale: 0.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="fixed text-2xl pointer-events-none z-50"
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Секретное сообщение */}
      {secretMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl z-50 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Я люблю тебя! ❤️
          </h3>
          <p className="text-gray-800 mb-4">
            Каждую секунду, каждую минуту, каждый час...
          </p>
          <p className="text-rose-500 text-sm italic">
            P.S. Ты нашла секретное послание! ✨
          </p>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-gray-800 mb-12 text-center"
      >
        Наши прекрасные моменты
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            onClick={() => setSelectedMemory(index)}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src={memory.imageSrc}
                alt={memory.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 group-hover:to-black/70 transition-all">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-4xl">{memory.emoji}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-center px-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {memory.placeholder}
                </p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {memory.title}
            </h3>
            <p className="text-gray-600">{memory.description}</p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-2xl mt-4"
              onClick={handleHeartClick}
            >
              💝
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMemory !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMemory(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white/95 backdrop-blur-md rounded-2xl p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative w-full mb-6 overflow-hidden rounded-lg"
                style={{ maxHeight: '70vh' }}
              >
                <Image
                  src={memories[selectedMemory].imageSrc}
                  alt={memories[selectedMemory].title}
                  fill={false}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                  <span className="text-6xl">
                    {memories[selectedMemory].emoji}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                {memories[selectedMemory].title}
              </h3>
              <p className="text-gray-800 text-lg mb-4">
                {memories[selectedMemory].description}
              </p>
              <p className="text-gray-600 italic mb-4">
                {memories[selectedMemory].placeholder}
              </p>
              <p className="text-rose-500 text-sm font-light italic">
                {memories[selectedMemory].hint}
              </p>
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-4xl"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MemoriesSection;
