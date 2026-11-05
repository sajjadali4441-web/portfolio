import React from 'react';
import { personalProfile } from '../data/portfolioData';

export const BlueprintHero: React.FC = () => {
  return (
    <section
      id="home"
      aria-label="Blueprint Header"
      className="blueprint-canvas relative w-full overflow-hidden border-b border-blue-900/50 py-16 sm:py-24 md:py-32 px-4 flex flex-col items-center justify-center select-none"
    >
      {/* Full-width Engineering Horizontal Projection Drafting Lines */}
      <div className="draft-line draft-line-h top-10 opacity-20"></div>
      <div className="draft-line draft-line-h bottom-10 opacity-20"></div>
      <div className="draft-line draft-line-h draft-line-dashed top-1/4 opacity-15"></div>
      <div className="draft-line draft-line-h draft-line-dashed bottom-1/4 opacity-15"></div>

      {/* Main Drafting Canvas Container */}
      <div className="relative max-w-5xl w-full mx-auto text-center py-6 px-2 sm:px-4">
        {/* Upper Drafting Horizon Line */}
        <div className="absolute left-0 right-0 top-2 h-[1px] bg-white/30 hidden sm:block"></div>
        {/* Lower Drafting Baseline Line */}
        <div className="absolute left-0 right-0 bottom-6 h-[1px] bg-white/30 hidden sm:block"></div>

        {/* Blueprint Name Header - Clean, Focused on Name */}
        <div className="relative inline-block py-2 max-w-full">
          {/* Subtle Diagonal Drafting Guide Lines in Background of Text */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          <h1
            id="hero-name"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.16em] sm:tracking-[0.25em] text-white font-mono blueprint-sketch-text blueprint-crosshatch break-words"
          >
            {personalProfile.name}
          </h1>
        </div>
      </div>
    </section>
  );
};
