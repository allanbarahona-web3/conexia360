import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Integrations from '@/components/sections/Integrations';
import Services from '@/components/sections/Services';
import Metrics from '@/components/sections/Metrics';
import Cases from '@/components/sections/Cases';
import Testimonials from '@/components/sections/Testimonials';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';

export const metadata = {
  title: 'Cuenta Conmigo Solutions - Automatización e IA para tu negocio',
  description: 'Plataforma de automatización e IA para hacer crecer tu negocio. Chatbots inteligentes, campañas SMS masivas y marketing digital automatizado.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Integrations />
      <Services />
      <Metrics />
      <Cases />
      <Testimonials />
      <Team />
      <Contact />
    </>
  );
}
