import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { useSmoothScroll } from '../../hooks/useScrollAnimation';
import { Button } from '../ui/Button';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToElement } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToElement(id, 80);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cosmic-primary/90 backdrop-blur-md border-b border-cosmic-secondary/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => handleNavClick('hero')}
            className="text-lg md:text-xl font-bold font-poppins gradient-text hover:opacity-80 transition-opacity"
          >
            JV
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-4 py-2 text-sm text-cosmic-muted hover:text-cosmic-accent transition-colors rounded-lg hover:bg-cosmic-secondary/10"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href={personalInfo.resumeUrl}
              target="_blank"
              icon={<Download size={16} />}
            >
              Resume
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-cosmic-text hover:text-cosmic-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cosmic-primary/95 backdrop-blur-md border-b border-cosmic-secondary/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="block w-full text-left px-4 py-3 text-cosmic-text hover:text-cosmic-accent hover:bg-cosmic-secondary/10 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                href={personalInfo.resumeUrl}
                target="_blank"
                icon={<Download size={16} />}
                className="w-full justify-center mt-2"
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
