import React from 'react';
import { PROJECTS } from '../constants/Constants.ts';

const Projects: React.FC = () => {
  return (
    <section className="w-full flex justify-center md:py-24 px-4 md:px-10" id="projects">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
          <h2 className="text-black dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col gap-4 rounded-xl bg-white dark:bg-background-dark border border-black/5 dark:border-white/5 p-4 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-surface-dark relative">
                <img
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded bg-black/50 text-white text-[10px] font-bold tracking-wide uppercase backdrop-blur-sm border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-black dark:text-white">{project.title}</h3>
                <p className="text-sm text-black/60 dark:text-white/60">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-primary">
                      {tag}
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

export default Projects;
