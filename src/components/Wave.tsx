import React from 'react';
import { useWave } from '../context/WaveContext';

const Wave: React.FC = () => {
  const { scrollProgress } = useWave();
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 opacity-30">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${50 + Math.sin(scrollProgress * Math.PI * 2 + i) * 10}% ${50 + Math.cos(scrollProgress * Math.PI * 2 + i) * 10}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
              transform: `scale(${1 + scrollProgress * 0.2}) rotate(${scrollProgress * 360 * (i + 1)}deg)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Wave;