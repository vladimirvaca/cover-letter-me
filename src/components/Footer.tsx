import React from 'react';
import { SOCIAL_MEDIA } from '../constants/Constants.ts';

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex justify-center py-20 px-4 md:px-10 border-t border-black/5 dark:border-white/5 mt-auto bg-background-light dark:bg-background-dark">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 items-center text-center">
        <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white mb-6">
          Let's build something <span className="text-primary">amazing</span>.
        </h2>
        <p className="text-black/60 dark:text-white/60 max-w-xl mb-10 text-lg">
          Currently open for new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <a
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:-translate-y-1 shadow-xl shadow-primary/25"
          href="mailto:hello@example.com"
        >
          <span className="material-symbols-outlined">mail</span>
          Say Hello
        </a>
        <div className="flex gap-8 mt-12">
          {SOCIAL_MEDIA.map((social) => (
            <a
              key={social.name}
              className="text-black/40 dark:text-white/40 hover:text-primary transition-colors"
              href={social.url}
              target="_blank"
            >
              <span className="sr-only">{social.name}</span>
              <img src={social.icon} alt="" className="h-6 w-6" />
            </a>
          ))}
        </div>
        <div className="mt-12 text-black/30 dark:text-white/30 text-sm">
          © {new Date().getFullYear()} - Vladimir Vaca - Full Stack Engineer.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
