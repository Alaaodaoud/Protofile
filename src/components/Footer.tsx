import React from 'react';
import { Github, Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Alaa Daoud</h3>
            <p className="text-gray-400">Full-Stack Software Engineer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/Alaaodaoud" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://instagram.com/alaadaoud94" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/aodaoud" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-2 text-red-500" /> by Alaa Daoud © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}