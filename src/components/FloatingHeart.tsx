'use client';

import { motion } from 'framer-motion';

interface FloatingHeartProps {
  x: number;
  y: number;
}

const FloatingHeart = ({ x, y }: FloatingHeartProps) => {
  return (
    <motion.div
      initial={{ x, y, opacity: 1, scale: 1 }}
      animate={{
        y: y - 100,
        opacity: 0,
        scale: 0.5,
      }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
      className="fixed pointer-events-none z-50 text-2xl"
      onAnimationComplete={() => {
        const element = document.getElementById('floating-heart');
        if (element) element.remove();
      }}
    >
      ❤️
    </motion.div>
  );
};

export default FloatingHeart;
