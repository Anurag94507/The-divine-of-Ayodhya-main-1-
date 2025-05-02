import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ 
  title, 
  subtitle, 
  backgroundImage 
}) => {
  return (
    <div 
      className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center mb-12 bg-cover bg-center bg-no-repeat" // Increased height values
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundAttachment: 'fixed' // Added for parallax effect like homepage
      }}
    >
      {/* Overlay div removed, gradient applied via style */}
      <div className="relative text-center z-10 p-4 max-w-4xl mx-auto"> 
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg text-white" style={{ WebkitTextStroke: '1px black', textStroke: '1px black' }}>{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl font-bold drop-shadow-lg text-white" style={{ WebkitTextStroke: '1px black', textStroke: '1px black' }}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageBanner;
