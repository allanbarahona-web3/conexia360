'use client';

import React, { useState } from 'react';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SectionHeader from '@/components/shared/SectionHeader';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', company: '', interest: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let tempErrors: Record<string, string> = {};
    if (!formData.name) tempErrors.name = "El nombre es requerido.";
    if (!formData.email) {
      tempErrors.email = "El email es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "El formato del email es inválido.";
    }
    if (!formData.interest) tempErrors.interest = "Debes seleccionar un interés.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarnos. Te escribiremos en 24-48h.",
          className: "bg-[#00FFD1] text-black border-0 rounded-lg"
        });
        setFormData({ name: '', email: '', company: '', interest: '', message: '' });
        setErrors({});
      }, 600);
    }
  };

  const inputClass = "w-full bg-white/5 border border-white/10 p-3 text-white placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#00FFD1] focus:ring-1 focus:ring-[#00FFD1] transition-colors rounded-lg";
  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <SectionWrapper id="contacto">
      <SectionHeader title="Hablemos de tu proyecto" subtitle="Completa el formulario y uno de nuestros especialistas se pondrá en contacto contigo. No se necesita tarjeta de credito" />
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={inputClass} aria-invalid={!!errors.name} />
              {errors.name && <p className={errorClass} aria-live="assertive">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={inputClass} aria-invalid={!!errors.email} />
              {errors.email && <p className={errorClass} aria-live="assertive">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">Empresa (Opcional)</label>
              <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm font-medium mb-2">Interés</label>
              <select name="interest" id="interest" value={formData.interest} onChange={handleChange} className={inputClass} aria-invalid={!!errors.interest}>
                <option value="" disabled>Selecciona una opción...</option>
                <option value="Chatbots">Chatbots y Asistentes IA</option>
                <option value="n8n">Automatizaciones con n8n</option>
                <option value="Make">Automatizaciones con Make</option>
                <option value="Agentes IA">Agentes de IA a medida</option>
                <option value="Marketing">Marketing Digital con IA</option>
              </select>
              {errors.interest && <p className={errorClass} aria-live="assertive">{errors.interest}</p>}
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje (Opcional)</label>
            <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className={inputClass}></textarea>
          </div>
          <div className="text-center">
            <motion.div className="inline-block" whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.99 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                size="lg"
                className="uppercase"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </motion.div>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;