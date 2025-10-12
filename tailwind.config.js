/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          primary: '#0a0a23',
          secondary: '#6366f1',
          accent: '#fbbf24',
          success: '#10b981',
          text: '#f8fafc',
          muted: '#64748b',
          dark: '#1e1e2e',
          purple: '#8b5cf6',
          blue: '#3b82f6',
          
          // Enhanced theme colors for CS + Finance + Neuroscience
          neural: '#ff6b6b',      // Neural network red
          finance: '#4ecdc4',     // Financial teal
          tech: '#45b7d1',        // Technology blue
          brain: '#f093fb',       // Brain/neuroscience pink
          quantum: '#c3a6ff',     // Quantum computing purple
          gold: '#ffd700',        // Financial gold
          emerald: '#50e3c2',     // Success/growth green
          neon: '#00ffff',        // Neon cyber blue
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'typewriter': 'typewriter 2s steps(40) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'particle': 'particle 20s linear infinite',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #6366f1' },
          '100%': { boxShadow: '0 0 20px #6366f1, 0 0 30px #6366f1' },
        },
        particle: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)' },
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0a0a23 0%, #1e1e2e 35%, #2d1b69 70%, #1a1a3e 100%)',
        'neural-gradient': 'linear-gradient(45deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%)',
        'finance-gradient': 'linear-gradient(135deg, #4ecdc4 0%, #ffd700 50%, #50e3c2 100%)',
        'tech-gradient': 'linear-gradient(90deg, #45b7d1 0%, #c3a6ff 50%, #f093fb 100%)',
        'star-field': 'radial-gradient(2px 2px at 20px 30px, #eee, transparent), radial-gradient(2px 2px at 40px 70px, #fff, transparent)',
      },
    },
  },
  plugins: [],
}

