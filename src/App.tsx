import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { MobileWarning } from './components/common/MobileWarning';
import { pageTransition } from './utils/animations';

function App() {
  return (
    <motion.div
      className="bg-cosmic-gradient text-cosmic-text"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Mobile Warning */}
      <MobileWarning />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />
    </motion.div>
  );
}

export default App;
