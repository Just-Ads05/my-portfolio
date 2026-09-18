import { RESUME_DATA } from '@/data/resumeData';

export default function MetricsBar() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {RESUME_DATA.metrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-xl bg-track-100 dark:bg-carbon-850 border border-track-200 dark:border-carbon-border relative overflow-hidden group hover:border-papaya/50 transition-all"
          >
            <div className="absolute top-0 right-0 w-12 h-1 bg-papaya"></div>
            <div className="flex items-center justify-between pb-1">
              <span className="font-mono text-xs text-track-subtext dark:text-gray-400 uppercase tracking-widest font-semibold">
                {metric.label}
              </span>
              <span className="material-symbols-outlined text-papaya text-lg">{metric.icon}</span>
            </div>
            <div className="font-headline text-4xl sm:text-5xl font-black text-track-text dark:text-white tracking-tight">
              {metric.value}
              <span className="text-papaya text-2xl font-bold ml-0.5">{metric.unit}</span>
            </div>
            <p className="font-mono text-[11px] text-track-subtext dark:text-gray-400 pt-1">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
