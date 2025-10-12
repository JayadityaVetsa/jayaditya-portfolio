import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { TypewriterEffect, RotatingText } from '../animations/TypewriterEffect';
import { CSSParticles, FloatingShapes, StarField } from '../animations/ParticleSystem';
import { personalInfo } from '../../data/personal';
import { useSmoothScroll } from '../../hooks/useScrollAnimation';
import { staggerContainer, staggerItem, floating } from '../../utils/animations';

export const Hero: React.FC = () => {
  const { scrollToElement } = useSmoothScroll();

  const rotatingTexts = [
    'AI Researcher',
    'ML Developer',
    'Quant Analyst',
    'Tech Innovator',
    'Problem Solver',
  ];

  const handleExploreClick = () => {
    scrollToElement('about', 80);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0">
        <StarField count={150} />
        <CSSParticles count={30} />
        <FloatingShapes />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-primary/20 via-transparent to-cosmic-primary/40" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            variants={staggerItem}
            className="text-cosmic-accent text-lg md:text-xl font-medium"
          >
            Hello, I'm
          </motion.div>

          {/* Name with Gradient Effect */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="gradient-text font-poppins">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Dynamic Title */}
          <motion.div
            variants={staggerItem}
            className="text-xl md:text-2xl lg:text-3xl text-cosmic-text/90 font-medium"
          >
            <RotatingText texts={rotatingTexts} interval={2500} />
          </motion.div>

          {/* Typewriter Subtitle */}
          <motion.div
            variants={staggerItem}
            className="text-lg md:text-xl text-cosmic-muted max-w-4xl mx-auto"
          >
            <TypewriterEffect
              texts={[
                personalInfo.subtitle,
                'Passionate about AI & Machine Learning',
                'Building the future with code',
                'Exploring the intersection of tech and finance',
              ]}
              speed={50}
              deleteSpeed={30}
              pauseTime={3000}
            />
          </motion.div>

          {/* Published Preprints Highlight */}
          <motion.div
            variants={staggerItem}
            className="flex justify-center gap-4 mt-4"
          >
            <div className="bg-gradient-to-r from-cosmic-accent/20 to-cosmic-purple/20 border border-cosmic-accent/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cosmic-accent rounded-full animate-pulse" />
                <span className="text-cosmic-text font-medium">2 Published Preprints in IEEE TechRxiv</span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 md:mt-12"
          >
            <Button
              size="lg"
              variant="primary"
              onClick={handleExploreClick}
              className="group w-full sm:w-auto min-w-[200px]"
            >
              Explore My Journey
              <motion.div
                className="ml-2"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </Button>

          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={staggerItem}
            className="flex justify-center gap-6 mt-8"
          >
            <Button
              variant="ghost"
              size="sm"
              href={personalInfo.socialLinks.github}
              target="_blank"
              icon={<Github size={18} />}
              className="hover:text-cosmic-accent"
            >
              GitHub
            </Button>
            <Button
              variant="ghost"
              size="sm"
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              icon={<Linkedin size={18} />}
              className="hover:text-cosmic-accent"
            >
              LinkedIn
            </Button>
            <Button
              variant="ghost"
              size="sm"
              href={`mailto:${personalInfo.email}`}
              icon={<Mail size={18} />}
              className="hover:text-cosmic-accent"
            >
              Email
            </Button>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 max-w-5xl mx-auto"
          >
            {[
              { label: 'Users', value: '20K+', desc: 'Monthly Visits' },
              { label: 'Students', value: '100+', desc: 'Taught & Mentored' },
              { label: 'Preprints', value: '2', desc: 'IEEE TechRxiv' },
              { label: 'Global', value: 'Top 24', desc: 'Investment Summit' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-3 md:p-4 bg-cosmic-dark/40 rounded-xl border border-cosmic-secondary/20 backdrop-blur-sm hover:bg-cosmic-dark/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-cosmic-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-cosmic-text font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-cosmic-muted">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={floating}
        animate="animate"
      >
        <div className="flex flex-col items-center text-cosmic-muted">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </motion.div>

      {/* Geometric Accents */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-cosmic-secondary/20 rounded-full opacity-20" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-cosmic-accent/20 rotate-45 opacity-20" />
      <div className="absolute top-1/2 left-5 w-12 h-12 border-2 border-cosmic-purple/20 opacity-20" />
      <div className="absolute top-1/3 right-5 w-24 h-24 border-2 border-cosmic-secondary/20 rounded-full opacity-20" />
    </section>
  );
}; 