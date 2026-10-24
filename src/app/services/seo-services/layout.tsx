import React, { ReactNode } from 'react';
import {Header} from '@/sections/Header';
import {Footer} from '@/sections/Footer';

interface LayoutProps {
  children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-clip">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
