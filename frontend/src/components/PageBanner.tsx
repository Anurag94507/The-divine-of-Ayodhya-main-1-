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
      className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center mb-0 bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-ayodhya-maroon/20 via-transparent to-ayodhya-saffron/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-ayodhya-saffron/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-ayodhya-gold/10 rounded-full blur-3xl" />
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ayodhya-light to-transparent" />
      
      {/* Content */}
      <div className="relative text-center z-10 p-4 max-w-4xl mx-auto">
        <div className="inline-block mb-4">
          <div className="ornament-wide opacity-60 mb-6" />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white shadow-text-heavy leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 shadow-text max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="ornament-wide mt-6 opacity-60" />
      </div>
    </div>
  );
};

export default PageBanner;
