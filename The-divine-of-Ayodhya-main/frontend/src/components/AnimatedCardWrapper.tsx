import React, { useState, useCallback } from 'react';

interface AnimatedCardWrapperProps {
  children: React.ReactNode;
  className?: string; // Allow passing additional classes
}

const AnimatedCardWrapper: React.FC<AnimatedCardWrapperProps> = ({ children, className }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = useCallback(() => {
    // Trigger animation
    setIsAnimating(true);
    
    // Remove animation class after it finishes (500ms duration from index.css)
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    // Cleanup timer on unmount or if clicked again quickly
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onClick={handleClick}
      // Combine passed className with animation class conditionally
      className={`${className || ''} ${isAnimating ? 'animate-scale-up' : ''}`}
      style={{ cursor: 'pointer' }} // Indicate it's clickable
    >
      {children}
    </div>
  );
};

export default AnimatedCardWrapper;
