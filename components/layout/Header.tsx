'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Header: React.FC = () => {
  const pathname = usePathname();

  const handleScroll = (elementId: string) => {
    if (pathname !== '/') {
      return;
    }
    
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'Servicios', id: 'servicios' },
    { name: 'Integraciones', id: 'integraciones' },
    { name: 'Casos', id: 'casos' },
    { name: 'Equipo', id: 'equipo' },
    { name: 'Contacto', id: 'contacto' }
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="h-32 mx-auto max-w-6xl px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo size="medium" showGlow={true} />

          {/* Navigation */}
          <nav className="flex items-center gap-6 ml-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="px-4 py-2 text-base font-medium text-gray-300 hover:text-[#0066FF] transition-colors duration-200 relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0066FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
            <Link href="#contacto">
              <Button 
                className="bg-gradient-to-r from-[#0066FF] to-[#0044CC] text-white font-semibold hover:shadow-lg hover:shadow-[#0066FF]/50 hover:from-[#0055EE] hover:to-[#0033BB] transition-all duration-300 px-6 py-3 text-base whitespace-nowrap"
                size="default"
              >
                Agendar Asesoría
              </Button>
            </Link>
          </nav>
        </div>
    </motion.header>
  );
};

export default Header;