import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Instagram, Code2 } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-black/95 backdrop-blur-md border-b border-blue-500/10' : 'py-6 bg-transparent'
    }`}>
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-lg group-hover:bg-blue-500/30 transition-colors" />
              <div className="relative p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Alaa Daoud
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex space-x-8">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4 pl-8 border-l border-blue-500/20">
              <a 
                href="https://github.com/Alaaodaoud" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon group"
              >
                <Github size={18} className="text-blue-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://instagram.com/alaadaoud94" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon group"
              >
                <Instagram size={18} className="text-blue-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aodaoud" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon group"
              >
                <Linkedin size={18} className="text-blue-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative p-2 rounded-lg bg-blue-500/10 border border-blue-500/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} className="text-blue-400" /> : <Menu size={20} className="text-blue-400" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-blue-500/10">
            <div className="container mx-auto px-6 py-6 space-y-6">
              <div className="flex flex-col space-y-4">
                {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="nav-link text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
              
              <div className="flex space-x-6 pt-6 border-t border-blue-500/20">
                <a 
                  href="https://github.com/Alaaodaoud" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon group"
                >
                  <Github size={18} className="text-blue-400 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://instagram.com/alaadaoud94" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon group"
                >
                  <Instagram size={18} className="text-blue-400 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/aodaoud" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon group"
                >
                  <Linkedin size={18} className="text-blue-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}