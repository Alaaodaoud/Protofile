import React, { useState, useEffect } from 'react';
import TechBadge from './TechBadge';

const techBadges = [
  { text: 'AI Expert', color: 'from-purple-400 to-purple-600' },
  { text: 'Full Stack', color: 'from-blue-400 to-blue-600' },
  { text: 'React Native', color: 'from-cyan-400 to-cyan-600' },
  { text: 'Node.js', color: 'from-green-400 to-green-600' },
  { text: 'Python', color: 'from-yellow-400 to-yellow-600' },
  { text: 'AWS', color: 'from-orange-400 to-orange-600' },
  { text: 'ChatGPT', color: 'from-teal-400 to-teal-600' },
  { text: 'TensorFlow', color: 'from-red-400 to-red-600' },
  { text: 'Swift', color: 'from-pink-400 to-pink-600' }
];

export default function ProfileSection() {
  const [isGrouped, setIsGrouped] = useState(true);
  const [isExploding, setIsExploding] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 600, height: 600 });

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      let size;
      if (width < 640) { // sm
        size = 300;
      } else if (width < 1024) { // lg
        size = 400;
      } else {
        size = 600;
      }
      setContainerSize({ width: size, height: size });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const explodeInterval = setInterval(() => {
      setIsExploding(true);
      setIsGrouped(false);
      
      setTimeout(() => {
        setIsExploding(false);
        setIsGrouped(true);
      }, 2000);
    }, 8000);

    return () => clearInterval(explodeInterval);
  }, []);

  return (
    <div className="relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-rotate-gradient" />
      
      <div className="relative">
        <div 
          className="relative mx-auto"
          style={{ 
            width: containerSize.width,
            height: containerSize.height,
            maxWidth: '100%',
            aspectRatio: '1/1'
          }}
        >
          {/* Rotating borders */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin-slow" />
          <div className="absolute inset-[12%] rounded-full border-2 border-purple-500/20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          <div className="absolute inset-[24%] rounded-full border-2 border-blue-500/10 animate-spin-slow" style={{ animationDuration: '15s' }} />
          
          {/* Profile image */}
          <div className="absolute inset-[20%] rounded-full overflow-hidden border-4 border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent">
            <img 
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Tech badges container */}
          <div className="fixed inset-0 pointer-events-none">
            {techBadges.map((tech, i) => (
              <TechBadge
                key={tech.text}
                text={tech.text}
                color={tech.color}
                index={i}
                totalBadges={techBadges.length}
                isGrouped={isGrouped}
                isExploding={isExploding}
                containerSize={containerSize}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}