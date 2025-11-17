'use client';

import React from 'react';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const handleLinkClick = (): void => {
    toast({
      description: "🚧 Esta funcionalidad no está implementada aún—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  return (
    <footer className="border-t border-white/10 py-8 px-6 sm:px-8 lg:px-12 mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <span className="text-[#9CA3AF] text-sm">
              © {new Date().getFullYear()} Cuenta Conmigo Solutions. Todos los derechos reservados.
            </span>
          </div>
          
          <div className="flex space-x-2">
            <Button onClick={handleLinkClick} variant="ghost" size="sm">
              Privacidad
            </Button>
            <Button onClick={handleLinkClick} variant="ghost" size="sm">
              Términos
            </Button>
            <Button onClick={handleLinkClick} variant="ghost" size="sm">
              Soporte
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;