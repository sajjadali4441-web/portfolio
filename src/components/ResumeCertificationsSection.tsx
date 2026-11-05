import React from 'react';
import { Award, FileDown, CheckCircle2, Sparkles, Cpu, Database, Share2, Layers, Bot } from 'lucide-react';
import { certifications, skillCategories, personalProfile } from '../data/portfolioData';

export const ResumeCertificationsSection: React.FC = () => {
  const officialCerts = certifications.filter((c) => c.badgeType === 'official');
  const otherCerts = certifications.filter((c) => c.badgeType !== 'official');

  const getSkillCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cpu className="text-blue-600" size={20} />;
      case 1:
        return <Bot className="text-purple-600" size={20} />;
      case 2:
        return <Share2 className="text-teal-600" size={20} />;
      case 3:
        return <Database className="text-emerald-600" size={20} />;
      default:
        return <Sparkles className="text-blue-600" size={20} />;
    }
  };

  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200/80 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <h2 id="resume-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certifications & Skills
          </h2>
          <div className="w-12 h-1 bg-blue-900 mt-3"></div>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mt-3">
            Industry-recognized credentials, hackathon contributions, and technical competencies.
          </p>
        </div>

        {/* Featured Microsoft Official Certification Banner */}
        {officialCerts.map((cert) => (
          <div
            key={cert.id}
            className="mb-12 bg-gradient-to-r from-[#0d2347] to-[#16366f] rounded-2xl p-6 sm:p-8 text-white shadow-lg border border-blue-400/20 relative overflow-hidden"
          >
            {/* Blueprint Grid Overlay in Banner */}
            <div className="absolute inset-0 opacity-10 bg-blueprint-grid bg-blueprint pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border-2 border-cyan-400/50 flex items-center justify-center shrink-0 shadow-inner">
                  <Award size={36} className="text-cyan-300" />
                </div>

                <div>
                  <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/30">
                    <span>MICROSOFT OFFICIAL CREDENTIAL</span>
                    <span>•</span>
                    <span>{cert.code}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-100/80 text-sm leading-relaxed mt-2 max-w-2xl">
                    {cert.highlight}
                  </p>
                </div>
              </div>

              {/* Verified Action */}
              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <a
                  href={personalProfile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white text-blue-950 px-6 py-3 text-xs tracking-wider font-bold uppercase rounded-lg hover:bg-cyan-50 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <CheckCircle2 size={16} className="text-blue-900" />
                  <span>Verify on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Additional Professional Certifications & Hackathons */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center space-x-2">
            <Sparkles size={18} className="text-blue-900" />
            <span>Credentials & Hackathon Recognitions</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherCerts.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm hover:border-blue-900/30 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                    {cert.code}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {cert.issuer}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {cert.title}
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {cert.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Matrix */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Layers size={18} className="text-blue-900" />
              <span>Technical Skills</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={cat.title}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                    {getSkillCategoryIcon(idx)}
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    {cat.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-blue-50 hover:text-blue-950 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download CTA Box */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-900">
              Download Curriculum Vitae (CV)
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Complete professional history, project deliverables, and academic background.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={personalProfile.resumeUrl}
              download="Sajjad-Ali-CV.pdf"
              className="inline-flex items-center space-x-2 bg-[#111827] text-white px-7 py-3.5 text-xs tracking-widest font-bold uppercase rounded-lg hover:bg-blue-950 transition-all shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900"
            >
              <FileDown size={16} />
              <span>DOWNLOAD PDF (122 KB)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
