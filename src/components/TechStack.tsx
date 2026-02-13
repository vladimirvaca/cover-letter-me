import React from 'react';
import { TECH_STACK } from '../constants/Constants.ts';

const TechStack: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-24 px-4 md:px-10 w-full" id="stack">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-primary text-3xl">layers</span>
          <h2 className="text-black dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
            Tech Stack &amp; Expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TECH_STACK.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-black/5 dark:border-white/5 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">{category.icon}</span>{' '}
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-blue-50 dark:bg-black/40 pl-2 pr-4 border border-blue-100 dark:border-white/5"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      {skill.icon}
                    </span>
                    <p className="text-gray-700 dark:text-white text-xs font-medium">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
