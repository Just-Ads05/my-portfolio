'use client';

import { useState, useEffect } from 'react';
import { RESUME_DATA } from '@/data/resumeData';

export default function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-track-50/90 dark:bg-carbon-900/90 backdrop-blur-md border-b border-track-200 dark:border-carbon-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-4">
          <a href="#about" className="flex items-center gap-2 group focus:outline-none">
            <div className="w-8 h-8 rounded bg-papaya flex items-center justify-center font-headline font-black italic text-xl text-black tracking-tighter transform -skew-x-12 group-hover:scale-105 transition-transform shadow-md shadow-papaya/30">
              {RESUME_DATA.personal.shortName}
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-extrabold uppercase text-lg tracking-wider leading-none text-track-text dark:text-white flex items-center gap-1">
                ADVAITH <span className="text-papaya font-black">MANOJ</span>
              </span>
              <span className="font-mono text-[10px] tracking-widest text-track-subtext dark:text-gray-400 uppercase font-medium">
                SDE // SYS.ARCH
              </span>
            </div>
          </a>
          {/* Status Tag */}
          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-papaya/10 border border-papaya/30 text-papaya">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-papaya opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-papaya"></span>
            </span>
            <span className="font-mono text-[11px] font-bold tracking-wider uppercase">
              {RESUME_DATA.personal.availability}
            </span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <a href="#about" className="font-headline text-base uppercase tracking-wider font-semibold text-track-subtext hover:text-papaya dark:text-gray-300 dark:hover:text-papaya transition-colors">
            01 // About
          </a>
          <a href="#experience" className="font-headline text-base uppercase tracking-wider font-semibold text-track-subtext hover:text-papaya dark:text-gray-300 dark:hover:text-papaya transition-colors">
            02 // Experience
          </a>
          <a href="#projects" className="font-headline text-base uppercase tracking-wider font-semibold text-track-subtext hover:text-papaya dark:text-gray-300 dark:hover:text-papaya transition-colors">
            03 // Projects
          </a>
          <a href="#leadership" className="font-headline text-base uppercase tracking-wider font-semibold text-track-subtext hover:text-papaya dark:text-gray-300 dark:hover:text-papaya transition-colors">
            04 // Leadership
          </a>
          <a href="#education" className="font-headline text-base uppercase tracking-wider font-semibold text-track-subtext hover:text-papaya dark:text-gray-300 dark:hover:text-papaya transition-colors">
            05 // Academics
          </a>
          <a href="#contact" className="font-headline text-base uppercase tracking-wider font-semibold text-track-subtext hover:text-papaya dark:text-gray-300 dark:hover:text-papaya transition-colors">
            06 // Terminal
          </a>
        </nav>

        {/* Right Tools */}
        <div className="flex items-center gap-2.5">
          {/* Light/Dark Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-track-200 dark:border-carbon-700 bg-track-100 dark:bg-carbon-800 text-track-subtext dark:text-gray-200 hover:text-papaya dark:hover:text-papaya hover:border-papaya/40 transition-all focus:outline-none"
          >
            <span className="material-symbols-outlined text-[20px] dark:hidden">dark_mode</span>
            <span className="material-symbols-outlined text-[20px] hidden dark:inline">light_mode</span>
          </button>

          {/* GitHub */}
          <a
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg border border-track-200 dark:border-carbon-700 bg-track-100 dark:bg-carbon-800 text-track-subtext dark:text-gray-300 hover:text-papaya dark:hover:text-papaya hover:border-papaya/40 transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={RESUME_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg border border-track-200 dark:border-carbon-700 bg-track-100 dark:bg-carbon-800 text-track-subtext dark:text-gray-300 hover:text-papaya dark:hover:text-papaya hover:border-papaya/40 transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>

          {/* LeetCode */}
          <a
            href={RESUME_DATA.personal.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode Profile"
            className="p-2 rounded-lg border border-track-200 dark:border-carbon-700 bg-track-100 dark:bg-carbon-800 text-track-subtext dark:text-gray-300 hover:text-papaya dark:hover:text-papaya hover:border-papaya/40 transition-all font-mono text-xs font-bold"
          >
            [LC]
          </a>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded font-headline text-base uppercase font-bold tracking-wider bg-papaya hover:bg-papaya-light text-black transition-all shadow-md shadow-papaya/20 transform -skew-x-6 hover:-skew-x-3"
          >
            <span className="transform skew-x-6">DEPLOY // CONTACT</span>
          </a>
        </div>
      </div>
    </header>
  );
}
