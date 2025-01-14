import React, { createContext, useContext, useState, useEffect } from 'react';

interface WaveContextType {
  scrollProgress: number;
}

const WaveContext = createContext<WaveContextType>({ scrollProgress: 0 });

export const useWave = () => useContext(WaveContext);

export const WaveProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      setScrollProgress(currentProgress / totalScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <WaveContext.Provider value={{ scrollProgress }}>
      {children}
    </WaveContext.Provider>
  );
};