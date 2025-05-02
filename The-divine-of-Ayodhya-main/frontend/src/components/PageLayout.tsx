import React from 'react';
import FlowerPetals from './FlowerPetals';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      {/* Hindu Symbols Pattern Background */}
      <div className="hindu-symbols-pattern"></div>
      
      {/* Flower Petals Animation */}
      <FlowerPetals count={15} />
      
      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
