import React, { ReactNode } from 'react';
import {Footer} from '@/sections/Footer';
import { Header } from '@/components/navbar/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
