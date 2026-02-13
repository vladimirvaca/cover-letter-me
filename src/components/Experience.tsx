import React from 'react';
import { COMPANIES } from '../constants/Constants.ts';

const Experience: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-12 md:py-24 px-4 md:px-10" id="experience">
      <div className="layout-content-container flex flex-col max-w-240 flex-1">
        <div className="flex flex-col items-center gap-8 mb-10 text-center">
          <p className="text-sm font-bold text-primary uppercase tracking-widest">
            Previously worked with
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-4xl items-center justify-items-center opacity-60">
            {COMPANIES.map((company) => (
              <div
                key={company.name}
                className="flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105 cursor-default"
              >
                <div className={`${company.size} flex items-center justify-center`}>
                  <img
                    src={company.icon}
                    alt={`${company.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
