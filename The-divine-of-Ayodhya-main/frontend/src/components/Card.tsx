
import React from 'react';
import { Link } from 'react-router-dom';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  link?: string;
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  imageSrc, 
  link, 
  buttonText = "Learn More" 
}) => {
  const cardRef = useAnimateOnScroll();
  
  return (
    <div 
      className="card-custom flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1" // Added hover animation classes
      ref={cardRef}
    >
      <div className="image-container h-48 sm:h-56 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        {link && (
          <Link to={link} className="btn-primary self-start mt-auto hover:scale-105 transition-transform">
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
