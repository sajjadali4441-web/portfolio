import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const EmploymentSection: React.FC = () => {
  return (
    <section
      id="employment"
      aria-labelledby="employment-heading"
      className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200/80 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean, Professional Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <h2 id="employment-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Experience
          </h2>
          <div className="w-12 h-1 bg-blue-900 mt-3"></div>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mt-3">
            Professional background building reliable, high-availability software across enterprise and banking environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-900/20 ml-3 sm:ml-32 md:ml-40 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Indicator Dot */}
              <div
                className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-900 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300"
                aria-hidden="true"
              ></div>

              {/* Date Badge */}
              <div className="sm:absolute sm:-left-36 md:-left-44 top-0.5 mb-3 sm:mb-0">
                <span className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold tracking-wider text-blue-950 bg-blue-50 px-2.5 py-1 rounded border border-blue-200/60">
                  <Calendar size={13} className="text-blue-800" aria-hidden="true" />
                  <span>{exp.period}</span>
                </span>
              </div>

              {/* Experience Card */}
              <div className="bg-white rounded-xl p-5 sm:p-8 shadow-sm border border-slate-200/90 hover:shadow-md hover:border-blue-900/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm font-semibold text-blue-900 mt-1">
                      <Briefcase size={16} aria-hidden="true" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-xs text-slate-500 font-mono">
                    <MapPin size={14} className="text-slate-400" aria-hidden="true" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="mt-5 space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start space-x-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle2 size={17} className="text-blue-800 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Badges */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-slate-400 mr-1 uppercase">
                    Technologies:
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
