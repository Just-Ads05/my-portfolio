import { RESUME_DATA } from '@/data/resumeData';

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-track-100 dark:bg-carbon-950 border-t border-track-200 dark:border-carbon-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-track-subtext dark:text-gray-400">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1">
            <span className="text-papaya font-bold">{RESUME_DATA.personal.shortName}</span>
            <span>// 2026.ENGINEERING_BUILD</span>
          </div>
          <span className="hidden sm:inline text-track-300 dark:text-carbon-700">|</span>
          <div className="flex items-center gap-1">
            <span className="text-papaya">●</span>
            <span>
              {RESUME_DATA.personal.location}: <span className="text-emerald-500 font-bold">LIVE</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-papaya transition-colors">
            top::init()
          </a>
          <a href="#contact" className="hover:text-papaya transition-colors">
            ping::host()
          </a>
          <span className="text-track-300 dark:text-carbon-700">
            © 2026 Advaith Manoj. Rigor & Velocity.
          </span>
        </div>
      </div>
    </footer>
  );
}
