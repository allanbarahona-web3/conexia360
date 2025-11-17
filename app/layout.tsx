import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PointCloud from '@/components/layout/PointCloud';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: "Cuenta Conmigo Solutions",
  description: "Automatización e IA para tu negocio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <div className="min-h-screen bg-transparent flex flex-col relative">
          <PointCloud />
          <Header />
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
