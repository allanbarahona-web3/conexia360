'use client';

import React, { useEffect, useRef } from 'react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Integrations = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const integrations = [
    {
      name: "Google Workspace",
      url: "https://workspace.google.com/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      )
    },
    {
      name: "Hostinger",
      url: "https://www.hostinger.com/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#673DE6" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      name: "Horizons",
      url: "https://horizons.hostinger.com/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="10" fill="#00D4AA"/>
          <path fill="white" d="M8 8h8v2H8zM8 12h8v2H8zM8 16h6v2H8z"/>
        </svg>
      )
    },
    {
      name: "SendPulse",
      url: "https://sendpulse.com/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#00D4FF" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      name: "Lovable",
      url: "https://lovable.dev/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#FF6B6B" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    },
    {
      name: "Bolt",
      url: "https://bolt.new/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#FFD700" d="M13 2L3 14h6l-2 8 10-12h-6l2-8z"/>
        </svg>
      )
    },
    {
      name: "Base44",
      url: "https://base44.dev/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#2563EB"/>
          <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">44</text>
        </svg>
      )
    },
    {
      name: "Emergent",
      url: "https://emergent.dev/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="10" fill="#10B981"/>
          <path fill="white" d="M12 6l6 6-6 6-6-6z"/>
        </svg>
      )
    },
    {
      name: "Tadabase",
      url: "https://tadabase.io/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#8B5CF6"/>
          <path fill="white" d="M7 7h10v2H7zM7 11h10v2H7zM7 15h6v2H7z"/>
        </svg>
      )
    },
    {
      name: "MercadoPago",
      url: "https://www.mercadopago.com/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="10" fill="#00B1EA"/>
          <path fill="white" d="M8 8h8v8H8z"/>
        </svg>
      )
    },
    {
      name: "PayPal",
      url: "https://www.paypal.com/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#003087" d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.28A.641.641 0 0 1 5.577 1.7h6.156c1.88 0 3.248.394 4.062 1.171.814.777 1.221 1.9 1.221 3.369 0 2.65-1.301 4.716-3.902 6.195l-.702.399c-.675.384-1.059.756-1.152 1.115l-.093.359-.93 5.906a.641.641 0 0 1-.633.523z"/>
          <path fill="#0070BA" d="M18.904 8.582c.058-.45.058-.895 0-1.34-.116-.9-.58-1.643-1.39-2.23-.81-.587-1.92-.88-3.33-.88H7.05a.641.641 0 0 0-.633.523L3.372 20.249a.641.641 0 0 0 .633.74h4.606l.93-5.906.093-.359c.093-.359.477-.731 1.152-1.115l.702-.399c2.601-1.479 3.902-3.545 3.902-6.195 0-.537-.058-1.01-.174-1.42z"/>
        </svg>
      )
    },
    {
      name: "N8N",
      url: "https://n8n.io/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#EA4B71" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      name: "Make",
      url: "https://www.make.com/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="10" fill="#6366F1"/>
          <path fill="white" d="M8 8l8 8M16 8l-8 8"/>
        </svg>
      )
    },
    {
      name: "OpenAI",
      url: "https://openai.com/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#412991" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
        </svg>
      )
    },
    {
      name: "Claude",
      url: "https://claude.ai/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="10" fill="#CC785C"/>
          <path fill="white" d="M8 8h8v2H8zM8 12h8v2H8zM8 16h6v2H8z"/>
        </svg>
      )
    },
    {
      name: "Gemini",
      url: "https://gemini.google.com/",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path fill="#4285F4" d="M12 2l3.09 6.26L22 9.27l-5.18 4.73L18.18 22 12 18.77 5.82 22l1.36-7.73L2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="integrations">
      <SectionHeader title="Integraciones" />
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg text-[#9CA3AF] mb-12">
          Conectamos con las herramientas que ya usas para maximizar tu productividad y automatizar tus procesos de negocio.
        </p>
        
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-8 overflow-x-hidden"
            style={{ 
              scrollBehavior: 'smooth',
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            {/* Duplicamos las integraciones para el efecto infinito */}
            {[...integrations, ...integrations].map((integration, index) => (
              <motion.div
                key={`${integration.name}-${index}`}
                className="flex-shrink-0 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-[#1F2937] border border-[#374151] rounded-xl p-6 w-48 h-32 flex flex-col items-center justify-center space-y-3 hover:border-[#00FFD1] transition-all duration-300">
                  <div className="flex items-center justify-center">
                    {integration.logo}
                  </div>
                  <h3 className="text-sm font-medium text-[#E5E7EB] group-hover:text-[#00FFD1] transition-colors">
                    {integration.name}
                  </h3>
                  <a
                    href={integration.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-[#9CA3AF] hover:text-[#00FFD1] transition-colors"
                  >
                    <span>Visitar sitio</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <p className="text-sm text-[#6B7280]">
            Y muchas más herramientas que se adaptan a las necesidades específicas de tu negocio.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Integrations;