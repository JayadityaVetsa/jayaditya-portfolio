import React from 'react';

export const SectionDivider: React.FC = () => (
  <div className="relative h-px max-w-4xl mx-auto my-0" aria-hidden="true">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmic-secondary/40 to-transparent" />
    <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full bg-cosmic-accent/60 blur-sm" />
  </div>
);
