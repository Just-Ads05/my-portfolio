import { RESUME_DATA } from '@/data/resumeData';

export default function AcademicsSection() {
  const { education, certifications } = RESUME_DATA;

  return (
    <section id="education" className="space-y-6">
      <div className="border-b border-track-200 dark:border-carbon-border pb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-papaya font-bold uppercase tracking-wider">
          <span className="w-2 h-2 bg-papaya"></span>
          <span>ACADEMICS // CERTIFICATIONS & SPEC</span>
        </div>
        <h2 className="font-headline text-4xl sm:text-5xl font-black uppercase text-track-text dark:text-white tracking-tight">
          EDUCATION & CERTIFICATIONS
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Degree (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-xl bg-track-100 dark:bg-carbon-850 border border-track-200 dark:border-carbon-border flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-papaya font-bold uppercase">DEGREE // BACHELOR OF TECHNOLOGY</span>
              <span className="px-2 py-0.5 rounded bg-papaya/10 text-papaya border border-papaya/30 font-bold uppercase">
                {education.timeline}
              </span>
            </div>
            <h3 className="font-headline text-3xl font-bold uppercase text-track-text dark:text-white">
              {education.degree}
            </h3>
            <p className="font-headline text-xl text-track-subtext dark:text-gray-300 font-semibold uppercase">
              {education.institution}
            </p>
            <p className="font-body text-sm text-track-subtext dark:text-gray-300">
              {education.details}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-track-200 dark:border-carbon-700 font-mono text-xs">
            <div className="p-3 rounded bg-track-50 dark:bg-carbon-900 border border-track-200 dark:border-carbon-800">
              <span className="text-gray-500 block uppercase">CUMULATIVE CGPA</span>
              <span className="font-headline text-2xl font-black text-papaya">{education.cgpa}</span>
            </div>
            <div className="p-3 rounded bg-track-50 dark:bg-carbon-900 border border-track-200 dark:border-carbon-800">
              <span className="text-gray-500 block uppercase">CURRENT SEMESTER</span>
              <span className="font-headline text-2xl font-black text-track-text dark:text-white">{education.semester}</span>
            </div>
          </div>
        </div>

        {/* Certifications (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-xl bg-track-100 dark:bg-carbon-850 border border-track-200 dark:border-carbon-border space-y-4">
          <div className="flex items-center gap-2 border-b border-track-200 dark:border-carbon-700 pb-3">
            <span className="material-symbols-outlined text-papaya text-xl">workspace_premium</span>
            <h3 className="font-headline text-2xl font-bold uppercase text-track-text dark:text-white">
              CERTIFICATIONS
            </h3>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-3 rounded bg-track-50 dark:bg-carbon-900 border border-track-200 dark:border-carbon-800 space-y-1"
              >
                <div className="flex items-center justify-between text-papaya font-bold">
                  <span>{cert.issuer}</span>
                  <span>{cert.detail}</span>
                </div>
                <p className="font-body text-sm text-track-text dark:text-gray-200 font-medium">
                  {cert.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
