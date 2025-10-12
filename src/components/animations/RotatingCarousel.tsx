import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Calendar, MapPin, Users, TrendingUp } from 'lucide-react';
import { projects } from '../../data/projects';
import { experiences } from '../../data/experience';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  category: string;
  impact: string;
  technologies: string[];
  type: 'project' | 'experience';
  data: any;
}

interface RotatingCarouselProps {
  itemCount?: number;
}

export const RotatingCarousel: React.FC<RotatingCarouselProps> = ({ itemCount = 8 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const scrollY = useMotionValue(0);
  const rotation = useSpring(useTransform(scrollY, [0, 1000], [0, 360]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01
  });

  // Combine and prepare carousel items
  const carouselItems: CarouselItem[] = [
    ...projects.slice(0, 4).map(project => ({
      id: project.id,
      title: project.title,
      description: project.description,
      category: project.category,
      impact: project.impact,
      technologies: project.technologies,
      type: 'project' as const,
      data: project
    })),
    ...experiences.slice(0, 4).map(exp => ({
      id: exp.id,
      title: exp.title,
      description: exp.description,
      category: exp.type,
      impact: exp.achievements[0] || 'Significant contribution',
      technologies: exp.technologies,
      type: 'experience' as const,
      data: exp
    }))
  ].slice(0, itemCount);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        scrollY.set(scrollProgress * 1000);
        
        // Update current index based on scroll
        const newIndex = Math.floor(scrollProgress * carouselItems.length) % carouselItems.length;
        setCurrentIndex(newIndex);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [carouselItems.length, scrollY]);

  const radius = 300;
  const angleStep = (2 * Math.PI) / carouselItems.length;

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-primary via-cosmic-dark to-cosmic-secondary/20" />
      
      {/* Central Axis Indicator */}
      <motion.div
        className="absolute w-2 h-2 bg-cosmic-accent rounded-full z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Rotating Cards Container */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          rotateY: rotation,
          perspective: 1000
        }}
      >
        {carouselItems.map((item, index) => {
          const angle = index * angleStep;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;
          
          return (
            <motion.div
              key={item.id}
              className="absolute w-80 h-96"
              style={{
                x: x,
                z: z,
                rotateY: -angle * (180 / Math.PI),
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <CarouselCard 
                item={item} 
                isActive={index === currentIndex}
                index={index}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Info Panel */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          className="bg-cosmic-dark/80 backdrop-blur-md rounded-lg p-6 border border-cosmic-secondary/30 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center">
            <div className="text-cosmic-accent text-sm font-medium mb-1">
              Currently Viewing
            </div>
            <div className="text-cosmic-text text-lg font-bold">
              {carouselItems[currentIndex]?.title}
            </div>
            <div className="text-cosmic-muted text-sm mt-1">
              {carouselItems[currentIndex]?.category}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface CarouselCardProps {
  item: CarouselItem;
  isActive: boolean;
  index: number;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ item, isActive }) => {
  const cardVariants = {
    inactive: {
      scale: 0.9,
      rotateY: 0,
      z: 0,
    },
    active: {
      scale: 1.1,
      rotateY: 0,
      z: 50,
    }
  };

  const getCardIcon = () => {
    if (item.type === 'project') {
      return <Github className="w-6 h-6" />;
    } else {
      switch (item.category) {
        case 'internship':
          return <TrendingUp className="w-6 h-6" />;
        case 'volunteer':
          return <Users className="w-6 h-6" />;
        case 'competition':
          return <Calendar className="w-6 h-6" />;
        default:
          return <MapPin className="w-6 h-6" />;
      }
    }
  };

  const getCardColor = () => {
    if (item.type === 'project') {
      switch (item.category) {
        case 'FinTech':
          return 'from-green-500/20 to-emerald-600/20 border-green-500/30';
        case 'AI/ML':
          return 'from-blue-500/20 to-cyan-600/20 border-blue-500/30';
        case 'Education':
          return 'from-purple-500/20 to-violet-600/20 border-purple-500/30';
        default:
          return 'from-cosmic-secondary/20 to-cosmic-accent/20 border-cosmic-secondary/30';
      }
    } else {
      switch (item.category) {
        case 'internship':
          return 'from-orange-500/20 to-red-600/20 border-orange-500/30';
        case 'volunteer':
          return 'from-pink-500/20 to-rose-600/20 border-pink-500/30';
        case 'competition':
          return 'from-yellow-500/20 to-amber-600/20 border-yellow-500/30';
        default:
          return 'from-cosmic-purple/20 to-cosmic-secondary/20 border-cosmic-purple/30';
      }
    }
  };

  return (
    <motion.div
      className={`
        relative w-full h-full rounded-xl backdrop-blur-sm border-2 overflow-hidden cursor-pointer
        bg-gradient-to-br ${getCardColor()}
        ${isActive ? 'shadow-2xl shadow-cosmic-accent/20' : 'shadow-lg shadow-cosmic-dark/20'}
      `}
      variants={cardVariants}
      animate={isActive ? 'active' : 'inactive'}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-3">
          <motion.div
            className="text-cosmic-accent"
            animate={{ rotate: isActive ? 360 : 0 }}
            transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
          >
            {getCardIcon()}
          </motion.div>
          <div className="text-xs text-cosmic-muted uppercase tracking-wide">
            {item.type}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-cosmic-text mb-2 line-clamp-2">
          {item.title}
        </h3>
        
        <p className="text-sm text-cosmic-muted mb-4 line-clamp-3">
          {item.description}
        </p>
      </div>

      {/* Card Body */}
      <div className="px-6 pb-6">
        <div className="mb-4">
          <div className="text-xs text-cosmic-accent font-medium mb-1">Impact</div>
          <div className="text-sm text-cosmic-text/80 line-clamp-2">
            {item.impact}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="text-xs text-cosmic-accent font-medium mb-2">Technologies</div>
          <div className="flex flex-wrap gap-1">
            {item.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-cosmic-dark/40 rounded-full text-xs text-cosmic-text/70"
              >
                {tech}
              </span>
            ))}
            {item.technologies.length > 3 && (
              <span className="px-2 py-1 bg-cosmic-dark/40 rounded-full text-xs text-cosmic-muted">
                +{item.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-cosmic-secondary/20">
          <div className="text-xs text-cosmic-muted">
            {item.category}
          </div>
          {item.type === 'project' && item.data.demoUrl && (
            <motion.a
              href={item.data.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-accent hover:text-cosmic-accent/80 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Active Indicator */}
      {isActive && (
        <motion.div
          className="absolute top-2 right-2 w-3 h-3 bg-cosmic-accent rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}; 