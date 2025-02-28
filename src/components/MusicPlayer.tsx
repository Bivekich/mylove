'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    playMusic?: () => void;
  }
}

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setAudio(new Audio('/music.mp3'));
  }, []);

  const playMusic = useCallback(() => {
    if (audio && !isPlaying) {
      audio.play();
      audio.loop = true;
      setIsPlaying(true);
    }
  }, [audio, isPlaying]);

  const togglePlay = useCallback(() => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
        audio.loop = true;
      }
      setIsPlaying(!isPlaying);
    }
  }, [audio, isPlaying]);

  // Экспортируем функцию воспроизведения
  useEffect(() => {
    window.playMusic = playMusic;
    return () => {
      window.playMusic = undefined;
    };
  }, [playMusic]);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      onClick={togglePlay}
      className="fixed bottom-4 right-4 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg"
      aria-label={isPlaying ? 'Выключить музыку' : 'Включить музыку'}
    >
      {isPlaying ? '🎵' : '🔇'}
    </motion.button>
  );
};

export default MusicPlayer;
