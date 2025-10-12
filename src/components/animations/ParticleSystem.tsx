import React from 'react';
import { motion } from 'framer-motion';

// Simple CSS-based particle component for cosmic effect
export const CSSParticles: React.FC<{ count?: number }> = ({ count = 50 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 20,
    animationDuration: 15 + Math.random() * 10,
    size: Math.random() * 4 + 1,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cosmic-secondary rounded-full opacity-30"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [800, -50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.animationDuration,
            repeat: Infinity,
            delay: particle.animationDelay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

// Floating geometric shapes
export const FloatingShapes: React.FC = () => {
  const shapes = [
    { type: 'circle', size: 60, color: 'cosmic-secondary' },
    { type: 'square', size: 40, color: 'cosmic-purple' },
    { type: 'triangle', size: 50, color: 'cosmic-accent' },
    { type: 'circle', size: 30, color: 'cosmic-blue' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{
            left: `${20 + index * 20}%`,
            top: `${30 + index * 15}%`,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {shape.type === 'circle' && (
            <div className={`w-full h-full rounded-full bg-${shape.color}`} />
          )}
          {shape.type === 'square' && (
            <div className={`w-full h-full bg-${shape.color}`} />
          )}
          {shape.type === 'triangle' && (
            <div 
              className={`w-full h-full bg-${shape.color}`}
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Simple star field
export const StarField: React.FC<{ count?: number }> = ({ count = 100 }) => {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 3,
    size: Math.random() * 2 + 1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: star.animationDelay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}; 