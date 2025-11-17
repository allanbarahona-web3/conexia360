import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PointCloud from '@/components/layout/PointCloud';
import { Toaster } from '@/components/ui/toaster';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-transparent flex flex-col relative">
      <PointCloud />
      <Header />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;