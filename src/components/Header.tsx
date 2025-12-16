import React, { useState, useEffect } from 'react';
import { SECTIONS } from '../constants/Constants.ts';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Sync state with DOM on mount
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 flex justify-center py-3">
          <div className="layout-content-container flex w-full max-w-[1200px] items-center justify-between">
            <div className="flex items-center gap-4 text-white">
              <div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-xl">terminal</span>
              </div>
              <h2 className="text-black dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                Vladimir Vaca
              </h2>
            </div>

            <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
              <div className="flex items-center gap-6">
                {SECTIONS.map((section) => (
                  <a
                    key={section.id}
                    className="text-black/70 dark:text-white/70 hover:text-primary transition-colors text-sm font-medium leading-normal"
                    href={`${section.href}`}
                  >
                    {section.name}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={toggleTheme}
                  className="size-10 flex items-center justify-center rounded-full text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {isDark ? 'light_mode' : 'dark_mode'}
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleTheme}
                className="size-10 flex items-center justify-center rounded-full text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle dark mode"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {isDark ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
              <div
                className="text-black dark:text-white cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="material-symbols-outlined">menu</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-black/5 dark:border-white/5 p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              className="text-black/70 dark:text-white/70 hover:text-primary font-medium"
              href={`${section.href}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {section.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
