import { RESUME_DATA } from '@/data/resumeData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6">
      <div className="border-b border-track-200 dark:border-carbon-border pb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-papaya font-bold uppercase tracking-wider">
          <span className="w-2 h-2 bg-papaya"></span>
          <span>CAREER.LOG // PROFESSIONAL TELEMETRY</span>
        </div>
        <h2 className="font-headline text-4xl sm:text-5xl font-black uppercase text-track-text dark:text-white tracking-tight">
          SOFTWARE DEVELOPMENT EXPERIENCE
        </h2>
        <p className="font-body text-sm sm:text-base text-track-subtext dark:text-gray-300 max-w-2xl">
          Production REST APIs, LAN-first healthcare architectures, and enterprise checklist controllers shipped across startup, freelance, and intern roles.
        </p>
      </div>

      <div className="space-y-6">
        {RESUME_DATA.experiences.map((exp) => (
          <div
            key={exp.id}
            className="p-6 rounded-xl bg-track-100 dark:bg-carbon-850 border border-track-200 dark:border-carbon-border hover:border-papaya/60 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-papaya"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-3 border-b border-track-200 dark:border-carbon-700/60">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-papaya font-bold uppercase">
                  <span>{exp.company}</span>
                  <span className="text-track-subtext dark:text-gray-500">//</span>
                  <span className="text-track-text dark:text-gray-200">{exp.role}</span>
                </div>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold uppercase text-track-text dark:text-white pt-1">
                  {exp.badge}
                </h3>
              </div>
              <div className="flex flex-col md:items-end font-mono text-xs text-track-subtext dark:text-gray-400">
                <span className="px-2.5 py-1 rounded bg-papaya/10 text-papaya border border-papaya/30 font-bold uppercase">
                  {exp.timeline}
                </span>
                <span className="text-[11px] pt-1">{exp.location}</span>
              </div>
            </div>

            <ul className="mt-4 space-y-2 font-body text-sm text-track-subtext dark:text-gray-300">
              {exp.highlights.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-papaya font-bold font-mono">▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded bg-track-200 dark:bg-carbon-800 font-mono text-xs text-papaya font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
