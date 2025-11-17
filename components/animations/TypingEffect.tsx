'use client';

import React, { useState, useEffect, useRef } from 'react';

const TypingEffect = ({ phrases = [], className = "" }: { phrases?: string[]; className?: string }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  
  // Use refs to avoid stale closures
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cursorIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isTypingRef = useRef(true);
  const currentTextRef = useRef('');
  const currentPhraseIndexRef = useRef(0);

  // Safety check for phrases array
  const safePhrases = phrases.length > 0 ? phrases : ["innovación y eficiencia"];

  // Update refs when state changes
  useEffect(() => {
    isTypingRef.current = isTyping;
    currentTextRef.current = currentText;
    currentPhraseIndexRef.current = currentPhraseIndex;
  }, [isTyping, currentText, currentPhraseIndex]);

  // Main typing logic
  useEffect(() => {
    const runTypingCycle = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const currentPhrase = safePhrases[currentPhraseIndexRef.current];
      
      if (isTypingRef.current) {
        // Typing phase
        if (currentTextRef.current.length < currentPhrase.length) {
          timeoutRef.current = setTimeout(() => {
            setCurrentText(currentPhrase.slice(0, currentTextRef.current.length + 1));
          }, 80 + Math.random() * 40);
        } else {
          // Pause before deleting
          timeoutRef.current = setTimeout(() => {
            setIsTyping(false);
          }, 2500);
        }
      } else {
        // Deleting phase
        if (currentTextRef.current.length > 0) {
          timeoutRef.current = setTimeout(() => {
            setCurrentText(currentTextRef.current.slice(0, -1));
          }, 50);
        } else {
          // Move to next phrase
          timeoutRef.current = setTimeout(() => {
            setCurrentPhraseIndex((prev) => (prev + 1) % safePhrases.length);
            setIsTyping(true);
          }, 300);
        }
      }
    };

    runTypingCycle();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, isTyping, currentPhraseIndex, safePhrases]);

  // Cursor blinking effect
  useEffect(() => {
    cursorIntervalRef.current = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current);
      }
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current);
      }
    };
  }, []);

  return (
    <span className={className}>
      {currentText}
      <span 
        className={`inline-block ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
        style={{ color: 'inherit' }}
      >
        |
      </span>
    </span>
  );
};

export default TypingEffect;