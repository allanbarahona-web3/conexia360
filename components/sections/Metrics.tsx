'use client';

import React from 'react';
import SectionWrapper from '@/components/shared/SectionWrapper';

const metrics = [
  { value: "500+", label: "proyectos" },
  { value: "98%", label: "satisfacción" },
  { value: "<72h", label: "puesta en marcha" },
  { value: "-40%", label: "tiempo de respuesta" },
];

const Metrics = () => {
  return (
    <SectionWrapper id="estadisticas" className="py-12 sm:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {metrics.map((metric, index) => (
          <div key={index} className="relative">
            <p className="text-4xl sm:text-5xl font-bold text-[#00FFD1] text-shadow-glow">{metric.value}</p>
            <p className="text-sm uppercase tracking-widest text-[#9CA3AF] mt-2">{metric.label}</p>
            {index < metrics.length - 1 && (
              <div className="absolute top-1/2 right-0 h-12 w-px bg-white/10 -translate-y-1/2 hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Metrics;