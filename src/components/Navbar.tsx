import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Database } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-blue-900/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Database className="h-8 w-8 text-blue-500" />
            <span className="font-bold text-xl">Portfolio</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/" className={`transition-colors hover:text-blue-500 ${
                location.pathname === '/' ? 'text-blue-500' : 'text-white'
              }`}>Home</Link>
              <Link to="/projects" className={`transition-colors hover:text-blue-500 ${
                location.pathname === '/projects' ? 'text-blue-500' : 'text-white'
              }`}>Projects</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-900/90 backdrop-blur-sm">
          <Link to="/" className="block px-3 py-2 rounded-md hover:bg-blue-800/50">Home</Link>
          <Link to="/projects" className="block px-3 py-2 rounded-md hover:bg-blue-800/50">Projects</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;