'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const getRandomValue = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
const getRandomNumber = (min: number, max: number) => Math.random() * (max - min) + min;

const FloatingBubble = ({ id, onExit, bubbleTexts, scrollOffset }: { id: number; onExit: (id: number) => void; bubbleTexts: string[]; scrollOffset: number }) => {
  const [text, setText] = useState(getRandomValue(bubbleTexts));
  const [style, setStyle] = useState({
    top: `${getRandomNumber(10, 80)}%`,
    left: `${getRandomNumber(5, 95)}%`,
    transform: `translateX(-50%)`,
  });

  const duration = getRandomNumber(4, 8);
  const lifeSpan = getRandomNumber(8000, 12000);

  useEffect(() => {
    const timer = setTimeout(() => {
      onExit(id);
    }, lifeSpan);
    return () => clearTimeout(timer);
  }, [id, onExit, lifeSpan]);

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 220, damping: 20 } }}
      style={style}
      className="absolute"
    >
      <motion.div
        animate={{ 
          y: [0, -15, 0]
        }}
        style={{
          transform: `translateX(${Math.sin(scrollOffset * 0.05) * 20}px)`
        }}
        transition={{
          duration: duration,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 text-sm font-mono text-white/90 shadow-[0_0_12px_rgba(0,255,209,.18)] whitespace-nowrap"
      >
        {text}
      </motion.div>
    </motion.div>
  );
};

const FloatingBubblesAnimation = ({ bubbleTexts }: { bubbleTexts: string[] }) => {
  const [bubbles, setBubbles] = useState<{ id: number }[]>([]);
  const [scrollOffset, setScrollOffset] = useState(0);
  const maxBubbles = window.innerWidth < 768 ? 4 : 8;

  useEffect(() => {
    const addBubble = () => {
      setBubbles(currentBubbles => {
        if (currentBubbles.length < maxBubbles) {
          const newId = Date.now() + Math.random();
          return [...currentBubbles, { id: newId }];
        }
        return currentBubbles;
      });
    };

    const interval = setInterval(addBubble, 2000);
    addBubble(); 

    return () => clearInterval(interval);
  }, [maxBubbles]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll detected:', window.scrollY); // Debug temporal
      setScrollOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const removeBubble = (id: number) => {
    setBubbles(currentBubbles => currentBubbles.filter(b => b.id !== id));
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <AnimatePresence>
        {bubbles.map(bubble => (
          <FloatingBubble 
            key={bubble.id} 
            id={bubble.id} 
            onExit={removeBubble} 
            bubbleTexts={bubbleTexts}
            scrollOffset={scrollOffset}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingBubblesAnimation;