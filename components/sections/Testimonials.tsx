'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  { name: "Ana García", role: "CEO, Tech Innovators", text: "La automatización de nuestro soporte ha sido un antes y un después. El equipo de Conex-IA lo hizo posible en tiempo récord.", rating: 5 },
  { name: "Carlos Ruiz", role: "Director de Marketing, Creative Solutions", text: "Gracias a sus agentes de IA, nuestro equipo de ventas ahora se enfoca en cerrar tratos, no en calificar leads. ¡Impresionante!", rating: 5 },
  { name: "Laura Méndez", role: "COO, Logística Global", text: "Las horas que hemos ahorrado con las automatizaciones de n8n son incalculables. Un socio tecnológico indispensable.", rating: 5 },
  { name: "Javier Torres", role: "Fundador, Startup X", text: "El chatbot que desarrollaron no solo responde preguntas, entiende la intención del cliente. La satisfacción ha subido notablemente.", rating: 4 },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex text-[#00FFD1]">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : 'fill-current text-white/20'}`} viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isHovered]);

  const slideVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <SectionWrapper id="testimonios">
      <SectionHeader title="Lo que dicen nuestros clientes" />
      <div 
        className="relative max-w-3xl mx-auto bg-black/20 border border-white/10 p-8 sm:p-12 text-center rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="min-h-[200px] flex flex-col justify-center items-center"
            aria-live="polite"
          >
            <p className="text-lg italic text-[#E5E7EB] mb-6">"{testimonials[index].text}"</p>
            <div className="flex flex-col items-center">
              <StarRating rating={testimonials[index].rating} />
              <p className="font-bold mt-4">{testimonials[index].name}</p>
              <p className="text-sm text-[#9CA3AF]">{testimonials[index].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <Button 
          onClick={prevSlide} 
          variant="icon"
          size="icon"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2"
          aria-label="Testimonio anterior"
        >
          <ChevronLeft size={24} />
        </Button>
        <Button 
          onClick={nextSlide} 
          variant="icon"
          size="icon"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2"
          aria-label="Siguiente testimonio"
        >
          <ChevronRight size={24} />
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;