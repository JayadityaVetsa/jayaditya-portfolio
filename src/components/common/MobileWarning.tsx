import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Monitor, Smartphone } from 'lucide-react';

export const MobileWarning: React.FC = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
      
      // Show warning on mobile devices, but respect user's previous choice
      const hasSeenWarning = localStorage.getItem('mobileWarningDismissed');
      if (isMobileDevice && !hasSeenWarning) {
        setShowWarning(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDismiss = () => {
    setShowWarning(false);
    localStorage.setItem('mobileWarningDismissed', 'true');
  };

  const warningVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 }
  };

  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {showWarning && (
        <motion.div
          variants={warningVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-cosmic-secondary via-cosmic-purple to-cosmic-accent p-4 shadow-lg"
        >
          <div className="max-w-md mx-auto flex items-center justify-between text-white">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5" />
                <span className="text-lg">→</span>
                <Monitor className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">Best viewed on desktop</div>
                <div className="text-xs opacity-90">
                  This website is optimized for larger screens
                </div>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss warning"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 