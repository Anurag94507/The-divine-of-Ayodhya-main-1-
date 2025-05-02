import React, { useEffect, useState } from 'react';

interface FlowerPetal {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  color: string;
  delay: number;
}

const FlowerPetals: React.FC<{ count?: number }> = ({ count = 50 }) => {
  const [petals, setPetals] = useState<FlowerPetal[]>([]);

  const colors = [
    '#FF9933', // Saffron
    '#FFA500', // Orange
    '#FFB366', // Light Orange
    '#FFCC99', // Peach
    '#FFE5CC', // Light Peach
  ];

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const initialPetals: FlowerPetal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * windowWidth,
      y: -50 - Math.random() * 500, // Start above the viewport with different heights
      rotation: Math.random() * 360,
      size: 15 + Math.random() * 15,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2 // Random delay between 0-2 seconds
    }));
    setPetals(initialPetals);

    // Reset animation every 10 seconds
    const interval = setInterval(() => {
      setPetals(prevPetals => prevPetals.map(petal => ({
        ...petal,
        y: -50 - Math.random() * 500,
        x: Math.random() * windowWidth,
        rotation: Math.random() * 360
      })));
    }, 10000);

    return () => clearInterval(interval);
  }, [count, colors]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: petal.x,
            top: petal.y,
            transform: `rotate(${petal.rotation}deg)`,
            transition: 'all 10s linear',
            animation: `
              fall 10s linear infinite ${petal.delay}s,
              sway 3s ease-in-out infinite alternate ${petal.delay}s
            `,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill={petal.color}
            style={{ opacity: 0.8 }}
          >
            <path d="M12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2ZM2 10C2 4.47715 6.47715 0 12 0C17.5228 0 22 4.47715 22 10C22 15.5228 17.5228 20 12 20C6.47715 20 2 15.5228 2 10Z" />
            <path d="M12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5Z" />
          </svg>
        </div>
      ))}
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-50px) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes sway {
            from {
              transform: translateX(-25px);
            }
            to {
              transform: translateX(25px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default FlowerPetals;
