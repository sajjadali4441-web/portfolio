import React from 'react';
import { Mail, Github, Linkedin, Phone, MapPin, FileDown, Eye } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

export const IntroSection: React.FC = () => {
  return (
    <section
      aria-label="Professional Introduction"
      className="bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Updated Professional Introduction */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-slate-700 font-normal leading-relaxed max-w-2xl">
          Hi, I'm <strong className="font-bold text-slate-900">Sajjad Ali</strong>, a Software Engineer passionate about building scalable applications, intelligent automation, and AI-powered solutions.
        </h2>

        {/* Circular Profile Avatar (Clean, Minimalist Framing matching reference) */}
        <div className="mt-10 relative">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl ring-1 ring-slate-200 transition-transform duration-300 hover:scale-105">
            <img
              src={personalProfile.avatarUrl}
              alt="Sajjad Ali - Software Engineer"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </div>

        {/* Social Icons Row (Clean vector row with accessible touch targets) */}
        <div className="flex items-center justify-center space-x-3 sm:space-x-5 mt-8">
          {/* Email */}
          <a
            href={`mailto:${personalProfile.socials.email}`}
            className="text-slate-600 hover:text-blue-900 transition-colors duration-200 w-11 h-11 flex items-center justify-center hover:bg-slate-100 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label={`Send email to ${personalProfile.socials.email}`}
            title={`Email: ${personalProfile.socials.email}`}
          >
            <Mail size={22} strokeWidth={1.8} />
          </a>

          {/* GitHub */}
          <a
            href={personalProfile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-black transition-colors duration-200 w-11 h-11 flex items-center justify-center hover:bg-slate-100 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Visit Sajjad Ali's GitHub Profile"
            title="GitHub: sajjadali4441-web"
          >
            <Github size={22} strokeWidth={1.8} />
          </a>

          {/* LinkedIn */}
          <a
            href={personalProfile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-[#0077b5] transition-colors duration-200 w-11 h-11 flex items-center justify-center hover:bg-slate-100 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Visit Sajjad Ali's LinkedIn Profile"
            title="LinkedIn: Sajjad Ali"
          >
            <Linkedin size={22} strokeWidth={1.8} />
          </a>

          {/* Phone */}
          <a
            href={`tel:${personalProfile.socials.phone.replace(/\s+/g, '')}`}
            className="text-slate-600 hover:text-emerald-700 transition-colors duration-200 w-11 h-11 flex items-center justify-center hover:bg-slate-100 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label={`Call Sajjad Ali at ${personalProfile.socials.phone}`}
            title={`Phone: ${personalProfile.socials.phone}`}
          >
            <Phone size={20} strokeWidth={1.8} />
          </a>
        </div>

        {/* Location Indicator */}
        <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-mono mt-3">
          <MapPin size={14} className="text-slate-400" aria-hidden="true" />
          <span>{personalProfile.socials.location}</span>
        </div>

        {/* High-Contrast Resume Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4">
          <a
            href={personalProfile.resumeUrl}
            download="Sajjad-Ali-CV.pdf"
            className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#111827] text-white px-8 py-3.5 text-xs tracking-[0.2em] font-bold uppercase rounded-lg hover:bg-blue-950 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
          >
            <span>RESUME</span>
            <FileDown size={15} className="opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href={personalProfile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs tracking-wider text-slate-700 font-semibold hover:text-blue-900 transition-colors py-3 px-5 border border-slate-300 rounded-lg hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <Eye size={14} />
            <span>PREVIEW CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};
