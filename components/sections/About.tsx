'use client';

import React from 'react';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
import { Zap, GitMerge, RefreshCw, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
const About = () => {
  const features = [{
    icon: <Zap size={24} className="text-[#00FFD1]" />,
    text: "Implementación rápida y medible"
  }, {
    icon: <GitMerge size={24} className="text-[#00FFD1]" />,
    text: "Integración con tus herramientas"
  }, {
    icon: <RefreshCw size={24} className="text-[#00FFD1]" />,
    text: "Soporte y evolución continua"
  }, {
    icon: <Target size={24} className="text-[#00FFD1]" />,
    text: "Enfoque en ROI, no en hype"
  }];
  return <SectionWrapper id="about">
      <SectionHeader title="Automatizamos tu crecimiento con IA" />
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-[#9CA3AF] mb-12">Diseñamos e implementamos soluciones de IA a medida: desde chatbots y automatizaciones con n8n/Make hasta agentes inteligentes y marketing digital basado en datos para potenciar tu negocio.  Per no somos cualquier empresa de IA, también te enseñamos con asesorías para que aprendas a usar las herramientas que nosotros mismos usamos.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => <div key={index} className="flex flex-col items-center space-y-3">
              {feature.icon}
              <span className="text-base text-center text-[#E5E7EB]">{feature.text}</span>
            </div>)}
        </div>
        <motion.div className="inline-block" whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.99
      }}>
          <Button size="lg" asChild className="uppercase">
            <Link href="/contacto">Conversemos hoy</Link>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>;
};
export default About;