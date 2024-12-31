import React, { useState, useEffect } from 'react';
import { getTechDescription } from '../utils/techDescriptions';

interface TechBadgeProps {
  text: string;
  color: string;
  index: number;
  totalBadges: number;
  isGrouped: boolean;
  isExploding: boolean;
  containerSize: {
    width: number;
    height: number;
  };
}

export default function TechBadge({ 
  text, 
  color, 
  index, 
  totalBadges, 
  isGrouped, 
  isExploding,
  containerSize 
}: TechBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [randomPosition, setRandomPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    if (isExploding) {
      const viewportWidth = Math.min(window.innerWidth - 40, 1200);
      const viewportHeight = window.innerHeight - 40;
      
      const padding = Math.min(containerSize.width * 0.1, 100);
      const randomX = (Math.random() * (viewportWidth - padding * 2)) - (viewportWidth / 2) + padding;
      const randomY = (Math.random() * (viewportHeight - padding * 2)) - (viewportHeight / 2) + padding;
      
      setRandomPosition({ x: randomX, y: randomY });
    }
  }, [isExploding, containerSize]);

  const spacing = containerSize.width * 0.1;
  const rows = Math.ceil(Math.sqrt(totalBadges));
  const cols = Math.ceil(totalBadges / rows);
  const row = Math.floor(index / cols);
  const col = index % cols;
  
  const groupedX = (col - (cols - 1) / 2) * spacing;
  const groupedY = (containerSize.height * 0.5) + (row * spacing);

  const posX = isGrouped ? groupedX : randomPosition.x;
  const posY = isGrouped ? groupedY : randomPosition.y;

  return (
    <div
      className={`fixed transition-opacity duration-300 ${isGrouped ? 'opacity-0' : 'opacity-100'}`}
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(${posX}px, ${posY}px)`,
        zIndex: isHovered ? 50 : 10,
        transition: `all ${isExploding ? '500ms' : '2000ms'} ${
          isExploding 
            ? 'cubic-bezier(0.22, 1, 0.36, 1)'
            : 'cubic-bezier(0.4, 0, 0.2, 1)'
        }`,
      }}
    >
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap 
            transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer animate-float
            ${isHovered ? 'scale-110' : 'scale-100'}`}
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            animationDelay: `${index * 0.2}s`,
          }}
        >
          <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
            {text}
          </span>
        </div>
        
        {isHovered && (
          <div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-4 rounded-lg"
            style={{
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              zIndex: 60
            }}
          >
            <div className="text-sm font-medium mb-2">
              <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{text}</span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              {getTechDescription(text)}
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rotate-45"
              style={{
                background: 'rgba(0, 0, 0, 0.95)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderTop: 'none',
                borderLeft: 'none'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}