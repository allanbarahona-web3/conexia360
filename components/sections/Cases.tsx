'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeader from '@/components/shared/SectionHeader';

const cases = [
  {
    title: "Soporte automatizado 24/7",
    company: "E-commerce de Moda",
    result: "-40% tiempo de respuesta, +22% NPS",
    description: "Implementamos un chatbot en WhatsApp que resuelve el 80% de las consultas frecuentes.",
  },
  {
    title: "Lead scoring con IA",
    company: "SaaS B2B",
    result: "+31% tasa de conversión",
    description: "Un agente IA califica leads en tiempo real, priorizando los de mayor potencial para el equipo de ventas.",
  },
  {
    title: "Operaciones con n8n",
    company: "Agencia de Marketing",
    result: "-18 h/semana en tareas manuales",
    description: "Automatizamos la creación de reportes y la sincronización de datos entre 5 plataformas.",
  },
];

const CaseCard = ({ title, company, result, description }: { title: string; company: string; result: string; description: string }) => (
  <motion.div 
    className="bg-black/20 border border-white/10 rounded-lg p-6 hover:border-[#00FFD1]/50 hover:glow-cyan-soft transition-all duration-300"
    whileHover={{ y: -5 }}
  >
    <p className="text-sm text-[#9CA3AF] mb-2">{company}</p>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-2xl font-bold text-[#00FFD1] text-shadow-glow mb-4">{result}</p>
    <p className="text-[#E5E7EB] text-sm">{description}</p>
  </motion.div>
);

const Cases = () => {
  return (
    <SectionWrapper id="casos" className="bg-black/30">
      <SectionHeader title="Casos de Éxito" />
      <div className="grid md:grid-cols-3 gap-8">
        {cases.map((c, i) => (
          <CaseCard key={i} {...c} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Cases;