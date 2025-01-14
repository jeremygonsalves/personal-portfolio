import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import { WaveProvider } from './context/WaveContext';

function App() {
  return (
    <WaveProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#46494C] via-[#4C5C68] to-[#0E4958] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </WaveProvider>
  );
}

export default App;