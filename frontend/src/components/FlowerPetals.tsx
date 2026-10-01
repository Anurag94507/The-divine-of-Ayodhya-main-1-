import React, { useEffect, useState, useMemo } from 'react';

interface FlowerPetalData {
  id: number;
  x: number;
  delay: number;
  size: number;
  color: string;
  duration: number;
  swayAmount: number;
  opacity: number;
}

const FlowerPetals: React.FC<{ count?: number }> = ({ count = 25 }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const colors = useMemo(() => [
    '#FF9933',
    '#FFB347',
    '#FFCC80',
    '#FFD700',
    '#FFA726',
  ], []);

  const petals = useMemo<FlowerPetalData[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      size: 10 + Math.random() * 14,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 8 + Math.random() * 6,
      swayAmount: 20 + Math.random() * 40,
      opacity: 0.4 + Math.random() * 0.3,
    }));
  }, [count, colors]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: '-30px',
            animation: `petal-fall ${petal.duration}s linear infinite ${petal.delay}s`,
          }}
        >
          <div
            style={{
              animation: `petal-sway ${2 + Math.random() * 2}s ease-in-out infinite alternate`,
            }}
          >
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 20 20"
              fill={petal.color}
              style={{ opacity: petal.opacity }}
            >
              {/* Petal shape */}
              <ellipse cx="10" cy="7" rx="5" ry="7" transform="rotate(15, 10, 10)" />
              <ellipse cx="10" cy="7" rx="3" ry="5" transform="rotate(-15, 10, 10)" fill={petal.color} opacity="0.6" />
            </svg>
          </div>
        </div>
      ))}
      <style>
        {`
          @keyframes petal-fall {
            0% {
              transform: translateY(-30px) rotate(0deg);
              opacity: 0;
            }
            5% {
              opacity: 1;
            }
            85% {
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0;
            }
          }

          @keyframes petal-sway {
            from {
              transform: translateX(-20px);
            }
            to {
              transform: translateX(20px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default FlowerPetals;
