import React, { useState } from 'react';
import { Check, Building2, ExternalLink, Smartphone } from 'lucide-react';
import { projects } from '../data/portfolioData';

type CategoryFilter = 'All' | 'Full-Stack & .NET' | 'Power Platform' | 'SharePoint';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');

  const filterTabs: { label: string; value: CategoryFilter; count: number }[] = [
    { label: 'All Projects', value: 'All', count: projects.length },
    {
      label: 'Full-Stack & .NET',
      value: 'Full-Stack & .NET',
      count: projects.filter((p) => p.category === 'Full-Stack & .NET').length,
    },
    {
      label: 'Intelligent Automation & Power Apps',
      value: 'Power Platform',
      count: projects.filter((p) => p.category === 'Power Platform').length,
    },
    {
      label: 'Enterprise Systems',
      value: 'SharePoint',
      count: projects.filter((p) => p.category === 'SharePoint').length,
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Full-Stack & .NET':
        return 'bg-blue-50 text-blue-900 border-blue-200';
      case 'Power Platform':
        return 'bg-purple-50 text-purple-900 border-purple-200';
      case 'SharePoint':
        return 'bg-teal-50 text-teal-900 border-teal-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'Full-Stack & .NET':
        return 'Full-Stack & .NET';
      case 'Power Platform':
        return 'Intelligent Automation';
      case 'SharePoint':
        return 'Enterprise Systems';
      default:
        return category;
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 sm:py-20 bg-white border-b border-slate-200/80 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-blue-900 mt-3"></div>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mt-3">
            A selection of full-stack systems, automated business workflows, and enterprise solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter Projects by Category"
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.value)}
                className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isActive
                    ? 'bg-blue-950 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                    isActive ? 'bg-blue-800 text-cyan-200' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="tech-card bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-900/40 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Meta Badges Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded border ${getCategoryBadgeClass(
                      project.category
                    )}`}
                  >
                    {getCategoryLabel(project.category)}
                  </span>

                  {project.organization && (
                    <span className="inline-flex items-center space-x-1 text-xs text-slate-500 font-mono">
                      <Building2 size={13} className="text-slate-400" aria-hidden="true" />
                      <span>{project.organization}</span>
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/title inline-flex items-center gap-2 text-xl font-bold text-blue-700 hover:text-blue-900 transition-colors"
                    title={`Open ${project.title} live project`}
                  >
                    <span className="underline decoration-blue-300 hover:decoration-blue-700 underline-offset-4">
                      {project.title}
                    </span>
                    <ExternalLink size={18} className="text-blue-600 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {project.title}
                  </h3>
                )}

                <div className="text-xs font-mono font-medium text-blue-900 mt-1">
                  {project.subtitle}
                </div>

                {(project.liveUrl || project.mobileUrl) && (
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white border border-blue-200 transition-all shadow-sm active:scale-95"
                      >
                        <span>Live Web Portal</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    {project.mobileUrl && (
                      <a
                        href={project.mobileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 hover:bg-emerald-600 hover:text-white border border-emerald-200 transition-all shadow-sm active:scale-95"
                      >
                        <Smartphone size={13} className="text-emerald-700" />
                        <span>Live Mobile App (Instant)</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                )}

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mt-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-5 space-y-2">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    Key Features & Architecture:
                  </div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <Check size={14} className="text-blue-800 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Redirect Link Footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                    Detail Stack:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3 mt-2 sm:mt-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      <span>Web Portal</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                  {project.mobileUrl && (
                    <a
                      href={project.mobileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline transition-colors"
                    >
                      <Smartphone size={13} />
                      <span>Mobile App</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
