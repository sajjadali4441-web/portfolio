import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { education, personalProfile } from '../data/portfolioData';

export const AboutEducationSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-20 bg-white border-b border-slate-200/80 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About & Contact
          </h2>
          <div className="w-12 h-1 bg-blue-900 mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Narrative & Education */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Professional Background
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                I am a Software Engineer with over four years of experience designing and delivering reliable, high-availability software across enterprise and banking environments. My work spans full-stack application development, intelligent workflow automation, and scalable cloud solutions.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base mt-4">
                I enjoy engineering solutions that combine modern web frameworks (React.js, .NET Core) with intelligent automation and emerging AI capabilities. Through projects at Allied Bank Limited and Stewart Pakistan, I have led technical architectures, optimized high-throughput database systems, and automated complex business operations.
              </p>
            </div>

            {/* Education Card */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="text-xs font-mono font-semibold tracking-wider text-blue-900 uppercase mb-4 flex items-center space-x-2">
                <GraduationCap size={16} />
                <span>Education</span>
              </h4>

              <div className="flex items-start justify-between">
                <div>
                  <h5 className="text-lg font-bold text-slate-900">
                    {education.degree}
                  </h5>
                  <div className="text-sm font-semibold text-slate-800 mt-1">
                    {education.institution}
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-1">
                    {education.location}
                  </div>
                </div>

                <span className="text-xs font-mono font-bold bg-white text-slate-700 px-3 py-1 rounded border border-slate-200">
                  {education.period}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-7 shadow-lg relative overflow-hidden">
              {/* Subtle Blueprint Grid Accent */}
              <div className="absolute inset-0 opacity-10 bg-blueprint-grid bg-blueprint pointer-events-none"></div>

              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white tracking-tight">
                  Get In Touch
                </h4>
                <p className="text-slate-300 text-xs mt-1 mb-6">
                  Feel free to reach out for software engineering opportunities, collaborations, or inquiries.
                </p>

                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href={`mailto:${personalProfile.socials.email}`}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <Mail size={18} className="text-cyan-300 shrink-0" />
                    <div className="text-xs">
                      <div className="text-slate-400 font-mono">Email</div>
                      <div className="text-white font-medium break-all">{personalProfile.socials.email}</div>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${personalProfile.socials.phone.replace(/\s+/g, '')}`}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <Phone size={18} className="text-cyan-300 shrink-0" />
                    <div className="text-xs">
                      <div className="text-slate-400 font-mono">Phone / WhatsApp</div>
                      <div className="text-white font-medium">{personalProfile.socials.phone}</div>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <MapPin size={18} className="text-cyan-300 shrink-0" />
                    <div className="text-xs">
                      <div className="text-slate-400 font-mono">Location</div>
                      <div className="text-white font-medium">{personalProfile.socials.location}</div>
                    </div>
                  </div>

                  {/* LinkedIn & GitHub Links */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <a
                      href={personalProfile.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg bg-[#0077b5] text-white text-xs font-semibold hover:bg-[#006097] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      <Linkedin size={15} />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href={personalProfile.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 transition-colors border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      <Github size={15} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Email CTA Button */}
            <a
              href={`mailto:${personalProfile.socials.email}?subject=Software%20Engineering%20Inquiry%20-%20Sajjad%20Ali`}
              className="w-full inline-flex items-center justify-center space-x-2 bg-blue-950 text-white py-3.5 px-6 rounded-xl text-xs tracking-wider font-bold uppercase hover:bg-blue-900 transition-all shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Send size={15} />
              <span>Send An Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
