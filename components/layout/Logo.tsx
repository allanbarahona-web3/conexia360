'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showGlow?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', showGlow = true }) => {
  const sizeClasses = {
    small: 'text-6xl',
    medium: 'text-8xl',
    large: 'text-9xl',
  };
  
  const numberSizeClasses = {
    small: 'text-3xl',
    medium: 'text-5xl',
    large: 'text-6xl',
  };

  const glowClass = showGlow ? 'group' : '';

  return (
    <Link href="/" className={`flex-shrink-0 cursor-pointer ${glowClass}`}>
      <div className="relative">
        {showGlow && (
          <div className="absolute -inset-4 bg-gradient-to-r from-[#0066FF] to-[#0044CC] rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition duration-300"></div>
        )}
        <div className={`relative bg-black px-10 py-5 rounded-2xl border-2 border-[#0066FF]/30 ${showGlow ? 'group-hover:border-[#0066FF]/60' : ''} transition-colors duration-300`}>
          <span className={`${sizeClasses[size]} font-black tracking-tight text-white whitespace-nowrap`}>
            ConexIA
            <span className={`text-[#0066FF] ${numberSizeClasses[size]} font-light ml-4`}>360</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
