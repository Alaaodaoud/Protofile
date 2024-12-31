import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProfileSection from './ProfileSection';

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/10"
              style={{
                width: Math.random() * 300 + 50 + 'px',
                height: Math.random() * 300 + 50 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left column - Text content */}
            <div className="space-y-8 lg:space-y-12 order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10">
                  <span className="animate-pulse w-2 h-2 rounded-full bg-blue-500 mr-3" />
                  <span className="text-blue-400 text-sm sm:text-base">Full Stack Developer & AI Expert</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-white">Alaa Daoud</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                    Software Engineer
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Specialized in AI-driven development and full-stack applications. 
                  Creating innovative solutions that bridge technology and user experience.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {[
                  { value: '8+', label: 'Years Experience' },
                  { value: '100+', label: 'Projects Completed' },
                  { value: '50+', label: 'AI Integrations' }
                ].map((stat, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-2xl group-hover:bg-blue-500/30 transition-colors duration-300" />
                    <div className="relative p-3 sm:p-6 rounded-2xl border border-blue-500/20 bg-black/50">
                      <div className="text-xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <a href="#projects" className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 transition-transform group-hover:scale-105 duration-300" />
                  <div className="relative flex items-center justify-center text-white font-medium">
                    View My Work
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
                <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-blue-500/30 hover:bg-blue-500/10 transition-colors text-white font-medium text-center">
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right column - Profile section */}
            <div className="order-1 lg:order-2">
              <ProfileSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}