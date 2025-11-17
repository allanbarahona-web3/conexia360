'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeader from '@/components/shared/SectionHeader';

const teamMembers = [
  { name: "David Chen", role: "Arquitecto de Automatizaciones", focus: "n8n / IA" },
  { name: "Luciano Silva", role: "Especialista en IA Conversacional", focus: "Chatbots / Agentes" },
  { name: "Fernando Silva", role: "Desarrollador Full-Stack", focus: "Codigo / Integraciones / Data" },
  { name: "José Várgas", role: "Estratega de Marketing Digital", focus: "IA / Data / ADS" }, 
];

const TeamMemberCard = ({ name, role, focus }: { name: string; role: string; focus: string }) => (
  <motion.div 
    className="group bg-black/20 border border-white/10 rounded-lg p-6 text-center hover:border-[#00FFD1]/50 hover:glow-cyan-soft transition-all duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
      <span className="text-3xl font-bold text-[#9CA3AF]">{name.split(' ').map(n => n[0]).join('')}</span>
    </div>
    <h3 className="text-xl font-bold tech-underline group-hover:tech-underline-active">{name}</h3>
    <p className="text-[#9CA3AF] text-sm mt-1">{role}</p>
    <p className="text-xs uppercase tracking-wider text-[#00FFD1] mt-2">{focus}</p>
  </motion.div>
);

const Team = () => {
  return (
    <SectionWrapper id="equipo" className="bg-black/30">
      <SectionHeader title="Nuestro Equipo" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, i) => (
          <TeamMemberCard key={i} {...member} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Team;