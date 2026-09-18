import { RESUME_DATA } from '@/data/resumeData';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="space-y-6">
      <div className="border-b border-track-200 dark:border-carbon-border pb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-papaya font-bold uppercase tracking-wider">
          <span className="w-2 h-2 bg-papaya"></span>
          <span>INITIATIVES // LEADERSHIP & COMPETITION</span>
        </div>
        <h2 className="font-headline text-4xl sm:text-5xl font-black uppercase text-track-text dark:text-white tracking-tight">
          LEADERSHIP & ACHIEVEMENTS
        </h2>
        <p className="font-body text-sm sm:text-base text-track-subtext dark:text-gray-300 max-w-2xl">
          Mentoring peer developers, directing entrepreneurship boot camps for 500+ participants, and securing national hackathon ranks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leadership Roles */}
        <div className="space-y-4">
          {RESUME_DATA.leadership.map((role) => (
            <div
              key={role.id}
              className="p-5 rounded-xl bg-track-100 dark:bg-carbon-850 border border-track-200 dark:border-carbon-border"
            >
              <div className="flex items-center justify-between pb-2 border-b border-track-200 dark:border-carbon-700">
                <h3 className="font-headline text-xl font-bold uppercase text-track-text dark:text-white">
                  {role.title}
                </h3>
                <span className="font-mono text-xs text-papaya font-semibold">{role.unit}</span>
              </div>
              <p className="font-mono text-xs text-track-subtext dark:text-gray-400 pt-2 pb-2">
                {role.organization}
              </p>
              <ul className="space-y-1.5 font-body text-sm text-track-subtext dark:text-gray-300">
                {role.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-papaya font-bold font-mono">▸</span>
                    <span dangerouslySetInnerHTML={{ __html: h.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Honors & Awards */}
        <div className="p-6 rounded-xl bg-track-100 dark:bg-carbon-850 border border-track-200 dark:border-carbon-border flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-track-200 dark:border-carbon-700 pb-3">
              <span className="material-symbols-outlined text-papaya text-2xl">trophy</span>
              <h3 className="font-headline text-2xl font-bold uppercase text-track-text dark:text-white">
                COMPETITIVE HONORS & AWARDS
              </h3>
            </div>

            <div className="space-y-4">
              {RESUME_DATA.achievements.map((ach) => (
                <div key={ach.id} className="flex items-start gap-3">
                  <div
                    className={`px-2 py-1 rounded font-headline font-black text-sm uppercase ${
                      ach.badgeType === 'winner'
                        ? 'bg-papaya text-black'
                        : 'bg-track-200 dark:bg-carbon-800 text-papaya border border-papaya/30 font-bold'
                    }`}
                  >
                    {ach.badge}
                  </div>
                  <div>
                    <h4 className="font-headline text-lg font-bold text-track-text dark:text-white uppercase">
                      {ach.title}
                    </h4>
                    <p className="font-body text-sm text-track-subtext dark:text-gray-300">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-track-200 dark:border-carbon-700 font-mono text-xs text-track-subtext dark:text-gray-400 flex items-center justify-between">
            <span>VERIFIED COMPETITION RECORDS</span>
            <span className="text-papaya font-bold">100% SUCCESS RATE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
