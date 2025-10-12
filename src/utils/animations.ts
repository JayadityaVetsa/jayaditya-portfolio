import type { Variants } from 'framer-motion';

// Common animation variants
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Card hover animations
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Button animations
export const buttonHover: Variants = {
  rest: {
    scale: 1,
    backgroundColor: '#6366f1',
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    backgroundColor: '#8b5cf6',
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
};

// Typewriter animation
export const typewriter: Variants = {
  hidden: {
    width: '0%',
  },
  visible: {
    width: '100%',
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

// Rotating text animation
export const rotateText: Variants = {
  enter: {
    opacity: 0,
    y: 20,
    rotateX: 90,
  },
  center: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    rotateX: -90,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

// Glow effect animation
export const glowEffect: Variants = {
  hidden: {
    boxShadow: '0 0 0px rgba(99, 102, 241, 0)',
  },
  visible: {
    boxShadow: [
      '0 0 10px rgba(99, 102, 241, 0.5)',
      '0 0 20px rgba(99, 102, 241, 0.8)',
      '0 0 10px rgba(99, 102, 241, 0.5)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Floating animation
export const floating: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Particle animation
export const particleFloat: Variants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 5, 0],
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Page transition animations
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

// Counter animation
export const counterAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Slide in animations for sections
export const slideInFromBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Loading animation
export const loadingDots: Variants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const loadingDot: Variants = {
  start: {
    y: '0%',
  },
  end: {
    y: '100%',
  },
};

// Skill bar animation
export const skillBar: Variants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: '100%',
    transition: {
      duration: 1.5,
      ease: 'easeOut',
    },
  },
};

// Timeline animation
export const timelineItem: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Magnetic hover effect
export const magneticHover = {
  rest: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Parallax scroll effect
export const parallaxScroll = (offset: number) => ({
  y: offset,
  transition: {
    duration: 0,
    ease: 'linear',
  },
});

export const transitionDefaults = {
  duration: 0.6,
  ease: 'easeOut',
};

export const springTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}; 