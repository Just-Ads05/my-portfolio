'use client';

import { useState } from 'react';
import { RESUME_DATA, Project } from '@/data/resumeData';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = RESUME_DATA.projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category.includes(filter);
  });

  const filterButtons = [
    { label: '[ALL]', value: 'all' },
    { label: '[FEATURED]', value: 'featured' },
    { label: '[SYSTEMS]', value: 'systems' },
    { label: '[FULL-STACK]', value: 'fullstack' },
    { label: '[AI & CLOUD]', value: 'ai-cloud' },
    { label: '[PYTHON]', value: 'python' }
  ];

  return (
    <section id="projects" className="space-y-6">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-track-200 dark:border-carbon-border pb-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-papaya font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-papaya"></span>
            <span>CATALOG.PROJECTS // RUNTIME SPEC</span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl font-black uppercase text-track-text dark:text-white tracking-tight">
            FEATURED PROJECTS & CORE SYSTEMS
          </h2>
          <p className="font-body text-sm sm:text-base text-track-subtext dark:text-gray-300 max-w-2xl">
            LLM-powered cloud APIs, placement training suites, hackathon-winning document architectures, embedded IoT safety systems, and core Python state engines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-track-100 dark:bg-carbon-850 border border-track-200 dark:border-carbon-700 overflow-x-auto">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              type="button"
              onClick={() => setFilter(btn.value)}
              className={`px-3 py-1 rounded font-mono text-xs font-bold uppercase transition-all ${
                filter === btn.value
                  ? 'bg-papaya text-black'
                  : 'text-track-subtext dark:text-gray-300 hover:text-papaya'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project: Project) => (
          <article
            key={project.id}
            className="project-card flex flex-col justify-between p-5 rounded-xl bg-track-100 dark:bg-carbon-850 border border-track-200 dark:border-carbon-border hover:border-papaya transition-all shadow-sm group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs pb-1">
                <span className="flex items-center gap-1.5 text-papaya font-semibold">
                  <span className="w-2 h-2 rounded-full bg-papaya"></span>
                  {project.id}::spec
                </span>
                <span className="px-2 py-0.5 rounded bg-papaya/10 text-papaya border border-papaya/30 font-bold uppercase text-[10px]">
                  {project.badge}
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase text-track-text dark:text-white group-hover:text-papaya transition-colors">
                {project.title}
              </h3>
              <p className="font-body text-sm text-track-subtext dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-track-200 dark:bg-carbon-800 font-mono text-[11px] text-track-subtext dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-5 border-t border-track-200 dark:border-carbon-700/60 mt-4">
              <div className="flex items-center gap-3 font-mono text-xs">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-track-subtext dark:text-gray-300 hover:text-papaya transition-colors"
                >
                  <span className="material-symbols-outlined text-[15px]">code</span>
                  <span>repo::src</span>
                </a>
              </div>
              <span className="font-mono text-xs font-bold text-papaya">{project.highlightText}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
