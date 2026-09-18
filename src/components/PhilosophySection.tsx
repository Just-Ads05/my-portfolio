export default function PhilosophySection() {
  return (
    <section id="philosophy" className="space-y-6">
      <div className="border-b border-track-200 dark:border-carbon-border pb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-papaya font-bold uppercase tracking-wider">
          <span className="w-2 h-2 bg-papaya"></span>
          <span>SYSTEMS.ARCHITECTURE // RIGOR & PRINCIPLES</span>
        </div>
        <h2 className="font-headline text-4xl sm:text-5xl font-black uppercase text-track-text dark:text-white tracking-tight">
          ENGINEERING PHILOSOPHY & CORE COMPETENCIES
        </h2>
        <p className="font-body text-sm sm:text-base text-track-subtext dark:text-gray-300 max-w-2xl">
          Constructing reliable software requires predictable boundaries, strict typing from schema to wire, and fault-tolerant local failure modes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pillar 1 */}
        <div className="p-6 rounded-xl bg-track-100 dark:bg-carbon-850 border-t-4 border-t-papaya border-x border-b border-track-200 dark:border-carbon-border flex flex-col justify-between space-y-4 hover:border-papaya/60 transition-all">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-papaya/10 text-papaya flex items-center justify-center font-headline font-black text-xl">
              <span className="material-symbols-outlined text-[26px]">terminal</span>
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold uppercase text-track-text dark:text-white">
              High-Concurrency REST APIs
            </h3>
            <p className="font-body text-sm text-track-subtext dark:text-gray-300 leading-relaxed">
              Asynchronous I/O execution loops in FastAPI and Flask, Spring Boot service components, and .NET web controllers. Production configurations featuring relational database connection pooling (PostgreSQL, MySQL), strict Pydantic schemas, and optimized endpoints.
            </p>
          </div>
          <div className="pt-3 border-t border-track-200 dark:border-carbon-700/60 font-mono text-xs space-y-1.5 text-track-subtext dark:text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-papaya font-bold">✓</span> FastAPI & Spring Boot REST Endpoints
            </div>
            <div className="flex items-center gap-2">
              <span className="text-papaya font-bold">✓</span> PostgreSQL & MySQL Schema Architecture
            </div>
            <div className="flex items-center gap-2">
              <span className="text-papaya font-bold">✓</span> JWT Authentication & RBAC Authorization
            </div>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="p-6 rounded-xl bg-track-100 dark:bg-carbon-850 border-t-4 border-t-papaya border-x border-b border-track-200 dark:border-carbon-border flex flex-col justify-between space-y-4 hover:border-papaya/60 transition-all">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-papaya/10 text-papaya flex items-center justify-center font-headline font-black text-xl">
              <span className="material-symbols-outlined text-[26px]">hub</span>
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold uppercase text-track-text dark:text-white">
              LAN-First & Systems Architecture
            </h3>
            <p className="font-body text-sm text-track-subtext dark:text-gray-300 leading-relaxed">
              Architecting software with local storage parity and zero cloud preconditions. Deployed localized, LAN-first strategies for hospital data systems (CDC Medical College) ensuring offline reliability and strict patient data privacy.
            </p>
          </div>
          <div className="pt-3 border-t border-track-200 dark:border-carbon-700/60 font-mono text-xs space-y-1.5 text-track-subtext dark:text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-papaya font-bold">✓</span> Offline LAN-First Deployment Strategies
            </div>
            <div className="flex items-center gap-2">
              <span className="text-papaya font-bold">✓</span> Embedded IoT Telemetry & HUD Protocols
            </div>
            <div className="flex items-center gap-2">
              <span className="text-papaya font-bold">✓</span> Deterministic State-Machine Game Engines
            </div>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="p-6 rounded-xl bg-track-100 dark:bg-carbon-850 border-t-4 border-t-papaya border-x border-b border-track-200 dark:border-carbon-border flex flex-col justify-between space-y-4 hover:border-papaya/60 transition-all">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-papaya/10 text-papaya flex items-center justify-center font-headline font-black text-xl">
              <span className="material-symbols-outlined text-[26px]">cloud</span>
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold uppercase text-track-text dark:text-white">
              Full-Stack & Cloud Edge Integration
            </h3>
            <p className="font-body text-sm text-track-subtext dark:text-gray-300 leading-relaxed">
              Reactive frontends in React, Next.js, and Angular paired with cloud edge tools. Deployed LLM pipelines on Hugging Face using Cloudflare Workers/Tunnels, and Supabase database triggers for automated profile creation.
            </p>
          </div>
          <div className="pt-3 border-t border-track-200 dark:border-carbon-700/60 font-mono text-xs space-y-1.5 text-track-subtext dark:text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-papaya font-bold">✓</span> React & Next.js Modern Frontend
            </div>
            <div className="flex items-center gap-2">
              <span className="text-papaya font-bold">✓</span> Cloudflare Workers/Tunnels & Hugging Face
            </div>
            <div className="flex items-center gap-2">
              <span className="text-papaya font-bold">✓</span> Docker Containerization & Linux Scripting
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
