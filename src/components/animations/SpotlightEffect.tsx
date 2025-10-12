import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SpotlightEffectProps {
  children: React.ReactNode;
  className?: string;
}

export const SpotlightEffect: React.FC<SpotlightEffectProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Transform scroll position to spotlight opacity (dims as you scroll)
  const spotlightOpacity = useTransform(scrollY, [0, 1000], [0.7, 0.1]);
  const spotlightBlur = useTransform(scrollY, [0, 1000], [150, 300]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Background overlay */}
      <motion.div
        className="absolute inset-0 bg-cosmic-dark/40"
        style={{ opacity: spotlightOpacity }}
      />
      
      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(99, 102, 241, 0.3) 0%, 
            rgba(99, 102, 241, 0.1) 20%, 
            transparent 50%)`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Animated spotlight glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x - 75,
          top: mousePosition.y - 75,
          width: 150,
          height: 150,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          filter: `blur(${spotlightBlur}px)`,
          opacity: spotlightOpacity,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}; 