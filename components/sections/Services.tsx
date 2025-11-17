'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: "Chatbots y Asistentes IA",
    subtitle: "Atiende 24/7 con el tono de tu marca.",
    bullets: ["Hand-off a humano", "Entrenamiento con FAQs/Docs"],
  },
  {
    title: "Automatizaciones con n8n",
    subtitle: "Orquesta procesos y elimina tareas manuales.",
    bullets: ["Integraciones a medida", "Alertas y logs de ejecución"],
  },
  {
    title: "Automatizaciones con Make",
    subtitle: "Crea escenarios robustos y escalables.",
    bullets: ["Plantillas reutilizables", "Monitoreo de consumo"],
  },
  {
    title: "Agentes de IA a medida",
    subtitle: "Delega tareas cognitivas repetitivas.",
    bullets: ["RAG para bases de conocimiento", "Evaluación de calidad y precisión"],
  },
  {
    title: "Marketing Digital con IA",
    subtitle: "Segmentación, copy y reporting inteligente.",
    bullets: ["Dashboards en tiempo real", "A/B testing de mensajes"],
  },
  {
    title: "Capacitación y Mentorías",
    subtitle: "Te enseñamos a dominar las herramientas. Aprende haciendo con expertos.",
    bullets: ["Cursos personalizados", "Mentoría one-on-one", "Aprende a tu ritmo"],
  },
];

const ServiceCard = ({ title, subtitle, bullets }: { title: string; subtitle: string; bullets: string[] }) => {
  return (
    <motion.div
      className="group bg-black/20 border border-white/10 rounded-lg p-6 flex flex-col h-full hover:border-[#00FFD1]/50 hover:glow-cyan-soft transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-bold mb-2 tech-underline group-hover:tech-underline-active">{title}</h3>
      <p className="text-[#9CA3AF] mb-4 flex-grow">{subtitle}</p>
      <ul className="space-y-2 text-sm text-[#E5E7EB] mb-6">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-center">
            <span className="text-[#00FFD1] mr-2">◆</span>
            {bullet}
          </li>
        ))}
      </ul>
      <Button asChild variant="ghost" size="sm" className="mt-auto self-start uppercase">
        <Link href="/servicios">Saber más →</Link>
      </Button>
    </motion.div>
  );
};

const Services = () => {
  return (
    <SectionWrapper id="servicios" className="bg-black/30">
      <SectionHeader title="Nuestros Servicios" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;