import React from 'react';
import { Navbar } from './components/Navbar';
import { BlueprintHero } from './components/BlueprintHero';
import { IntroSection } from './components/IntroSection';
import { EmploymentSection } from './components/EmploymentSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeCertificationsSection } from './components/ResumeCertificationsSection';
import { AboutEducationSection } from './components/AboutEducationSection';
import { personalProfile } from './data/portfolioData';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Signature Blueprint Hero Banner */}
        <BlueprintHero />

        {/* Profile Introduction & Quick Socials */}
        <IntroSection />

        {/* Career & Experience Timeline */}
        <EmploymentSection />

        {/* Projects & Solutions Showcase */}
        <ProjectsSection />

        {/* Certifications, Skills Matrix & Resume Download */}
        <ResumeCertificationsSection />

        {/* About Me, Education & Contact */}
        <AboutEducationSection />
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-[#09162e] text-slate-400 py-10 px-6 border-t border-white/10" role="contentinfo">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-2 font-mono tracking-widest text-slate-300 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>{personalProfile.name}</span>
          </div>

          <div className="text-slate-400 text-center sm:text-right">
            <div>© {new Date().getFullYear()} Sajjad Ali. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
