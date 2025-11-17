'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import TypingEffect from '@/components/animations/TypingEffect';
const Hero = () => {
  const chips = [{
    label: "Chatbots IA",
    path: "/feature/chatbots-ia"
  }, {
    label: "Automatización con n8n",
    path: "/feature/automatizacion-n8n"
  }, {
    label: "Campañas SMS masivas",
    path: "/feature/campanas-sms"
  }, {
    label: "Agentes IA a medida",
    path: "/feature/agentes-ia"
  }, {
    label: "Marketing digital inteligente",
    path: "/feature/marketing-digital-ia"
  }, {
    label: "CRM automatizado",
    path: "/feature/crm-automatizado"
  }];
  return <section id="hero" className="relative pt-32 pb-16 px-6 sm:px-8 lg:px-12 min-h-screen flex items-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Tu socio estratégico en{' '}
                <TypingEffect 
                  phrases={[
                    "innovación y eficiencia",
                    "automatización e IA", 
                    "crecimiento escalable"
                  ]}
                  className="text-[#00FFD1] text-shadow-glow"
                />
                .
              </h1>
              
              <p className="text-lg sm:text-xl text-[#9CA3AF] leading-relaxed max-w-2xl">Transforma tu idea con soluciones inteligentes que automatizan procesos, optimizan ventas y mejoran la experiencia del cliente las 24 horas del día.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.99
            }}>
                <Button variant="primary" size="lg" asChild className="uppercase w-full sm:w-auto">
                  <Link href="/contacto">AGENDAR ASESORÍA</Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.99
            }}>
                 <Button variant="secondary" size="lg" asChild className="uppercase w-full sm:w-auto">
                  <Link href="/servicios">VER SERVICIOS</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {chips.map((chip, index) => <motion.div key={chip.path} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.3,
            delay: 0.6 + index * 0.05,
            type: "spring",
            stiffness: 100
          }} whileHover={{
            scale: 1.05,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10
            }
          }} className="group relative">
                <Button asChild variant="chip" className="w-full h-full text-center">
                  <Link href={chip.path}>
                    {chip.label}
                  </Link>
                </Button>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;