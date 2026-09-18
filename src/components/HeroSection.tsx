import { RESUME_DATA } from '@/data/resumeData';

export default function HeroSection() {
  return (
    <section id="about" className="pt-6 md:pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: Bio & Tech Stack */}
        <div className="lg:col-span-7 flex flex-col space-y-5">
          {/* Status Pill */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-track-100 dark:bg-carbon-800 border-l-4 border-papaya border-y border-r border-track-200 dark:border-carbon-700">
              <span className="w-2 h-2 rounded-full bg-papaya animate-pulse"></span>
              <span className="font-mono text-xs font-semibold text-papaya tracking-wider uppercase">
                {RESUME_DATA.personal.statusText}
              </span>
              <span className="text-xs text-track-subtext dark:text-gray-400 font-mono">
                // {RESUME_DATA.personal.location}
              </span>
            </div>
            <span className="text-xs font-mono px-2 py-1 rounded bg-track-200 dark:bg-carbon-800 text-track-subtext dark:text-gray-400 uppercase tracking-widest font-medium">
              FULL-STACK & SYSTEMS ENGINEER
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs text-papaya uppercase tracking-widest font-semibold">
              <span>SYSTEM.INITIALIZE</span>
              <span className="text-track-300 dark:text-carbon-600">///</span>
              <span>CAR_04 // ADVAITH_MANOJ</span>
            </div>
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-track-text dark:text-white leading-[0.9]">
              ADVAITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-papaya via-papaya-light to-amber-400">MANOJ</span>
            </h1>
            <p className="font-headline text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide text-track-subtext dark:text-gray-300">
              {RESUME_DATA.personal.title} <span className="text-papaya font-black">/</span> {RESUME_DATA.personal.subtitle}
            </p>
          </div>

          {/* Bio text */}
          <p className="font-body text-base sm:text-lg text-track-subtext dark:text-gray-300 leading-relaxed max-w-2xl font-normal">
            {RESUME_DATA.personal.bio}
          </p>

          {/* Tech Matrix Badges */}
          <div className="space-y-2 pt-2">
            <div className="font-mono text-xs font-bold text-track-subtext dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-papaya"></span> ACTIVE RUNTIME STACK & SPEC PRIMITIVES
            </div>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.personal.activeStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-track-100 dark:bg-carbon-800 border border-track-200 dark:border-carbon-700 font-mono text-xs font-semibold text-track-text dark:text-gray-200 flex items-center gap-1.5 hover:border-papaya/50 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-papaya"></span>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded bg-papaya hover:bg-papaya-light text-black font-headline text-lg uppercase font-bold tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-papaya/25 transform -skew-x-6 hover:-skew-x-3"
            >
              <span className="transform skew-x-6 flex items-center gap-1.5">
                Explore Projects
                <span className="material-symbols-outlined text-[18px]">speed</span>
              </span>
            </a>
            <a
              href="#experience"
              className="px-5 py-3 rounded bg-track-100 dark:bg-carbon-800 border border-track-200 dark:border-carbon-700 hover:border-papaya/60 text-track-text dark:text-white font-headline text-lg uppercase font-bold tracking-wider transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px] text-papaya">work</span>
              <span>Career Experience</span>
            </a>
          </div>
        </div>

        {/* Right: Driver Card Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm sm:max-w-md">
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-papaya via-papaya-dark to-amber-500 rounded-2xl opacity-90 blur-sm transform -rotate-1"></div>
            <div className="relative rounded-2xl bg-track-100 dark:bg-carbon-850 border-2 border-papaya/40 dark:border-papaya/30 overflow-hidden shadow-2xl p-2.5">
              <div className="flex items-center justify-between px-3 py-1.5 mb-2 bg-track-200/80 dark:bg-carbon-900/90 rounded border border-track-300/60 dark:border-carbon-700 font-mono text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-papaya"></span>
                  <span className="font-bold text-papaya">LN4::SPEC</span>
                </div>
                <span className="text-track-subtext dark:text-gray-400">ENGINEER::04</span>
                <span className="font-semibold text-track-text dark:text-white">SYS_RT_VERIFIED</span>
              </div>
              <div className="relative w-full h-[400px] sm:h-[450px] rounded-xl overflow-hidden bg-carbon-950 flex flex-col justify-end p-6">
                <img
                  src={RESUME_DATA.personal.photoUrl}
                  alt="Advaith Manoj"
                  className="absolute inset-0 w-full h-full object-cover object-top filter contrast-105 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div className="absolute top-3 right-3 flex flex-col gap-1 items-end opacity-80 pointer-events-none">
                  <div className="w-12 h-1 bg-papaya transform -skew-x-12"></div>
                  <div className="w-8 h-1 bg-white transform -skew-x-12"></div>
                  <div className="w-4 h-1 bg-papaya transform -skew-x-12"></div>
                </div>
                <div className="relative z-10 p-3 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-headline text-2xl font-black uppercase tracking-wider text-white leading-none">
                      ADVAITH <span className="text-papaya">MANOJ</span>
                    </span>
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest pt-0.5">
                      SDE // Systems & Backend
                    </span>
                  </div>
                  <div className="px-2 py-1 rounded bg-papaya text-black font-headline font-black text-sm uppercase italic tracking-tighter">
                    #04 SDE
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 mt-2 pt-1 font-mono text-[11px] text-center text-track-subtext dark:text-gray-300">
                <div className="py-1 px-1.5 bg-track-200/60 dark:bg-carbon-900 rounded">
                  <span className="text-[9px] block text-gray-500 uppercase">Core</span>
                  <span className="font-bold text-papaya">Python/Java</span>
                </div>
                <div className="py-1 px-1.5 bg-track-200/60 dark:bg-carbon-900 rounded">
                  <span className="text-[9px] block text-gray-500 uppercase">Education</span>
                  <span className="font-bold text-track-text dark:text-white">B.Tech CSE</span>
                </div>
                <div className="py-1 px-1.5 bg-track-200/60 dark:bg-carbon-900 rounded">
                  <span className="text-[9px] block text-gray-500 uppercase">CGPA</span>
                  <span className="font-bold text-emerald-500 dark:text-emerald-400">{RESUME_DATA.education.cgpa.split(' ')[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
