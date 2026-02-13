import React from 'react';
import Terminal from './Terminal';
import profileImage from '../assets/img/profile.jpeg';

const Developer: React.FC = () => {
  return (
    <>
      <section className="w-full flex justify-center py-12 md:py-24 px-4 md:px-10" id="about">
        <div className="layout-content-container flex flex-col max-w-240 flex-1">
          <div className="@container">
            <div className="flex flex-col gap-12 items-center text-center">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-linear-to-r from-primary to-cyan-400 opacity-25 blur transition duration-500 group-hover:opacity-75"></div>
                <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-white dark:border-background-dark shadow-xl">
                  <img
                    alt="Portrait of a smiling male developer"
                    className="h-full w-full object-cover"
                    src={profileImage.src}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 max-w-3xl">
                <h1 className="text-black dark:text-white text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-[-0.033em]">
                  Transforming Ideas into <span className="text-primary">Impactful Software.</span>
                </h1>
                <p className="text-black/60 dark:text-white/60 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
                  Full-stack developer with 10+ years of experience building software from the
                  ground up and enhancing existing systems. Passionate about continuous learning and
                  staying at the forefront of modern technologies.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center w-full">
                <a
                  href="#projects"
                  className="flex min-w-35 cursor-pointer items-center justify-center gap-2 rounded-full h-12 px-8 bg-primary text-white text-base font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                >
                  <span>View Projects</span>
                  <span className="material-symbols-outlined text-lg">arrow_downward</span>
                </a>
                <a
                  className="flex min-w-35 cursor-pointer items-center justify-center gap-2 rounded-full h-12 px-8 bg-white dark:bg-white/10 hover:bg-gray-50 dark:hover:bg-white/20 text-black dark:text-white text-base font-bold transition-all border border-black/10 dark:border-white/10 shadow-sm"
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-lg">visibility</span>
                  <span>View CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Terminal />
    </>
  );
};

export default Developer;
