'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import HeartSection from '@/components/HeartSection';
import LoveSection from '@/components/LoveSection';
import ApologySection from '@/components/ApologySection';
import MemoriesSection from '@/components/MemoriesSection';
import FinalSection from '@/components/FinalSection';
import MusicPlayer from '@/components/MusicPlayer';
import EasterEggs from '@/components/EasterEggs';
import WelcomeModal from '@/components/WelcomeModal';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handlePlayMusic = () => {
    // @ts-expect-error - Global function added by MusicPlayer component
    window.playMusic?.();
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <HeartSection />
        <LoveSection />
        <ApologySection />
        <MemoriesSection />
        <FinalSection />
      </motion.div>
      <MusicPlayer />
      <EasterEggs />
      <WelcomeModal onPlayMusic={handlePlayMusic} />

      <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-2 z-40">
        {['❤️', '💕', '🙏', '📸', '💝'].map((emoji, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              const sections = document.querySelectorAll('section');
              sections[index]?.scrollIntoView();
            }}
            className="block p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            {emoji}
          </motion.button>
        ))}
      </nav>
    </main>
  );
}
