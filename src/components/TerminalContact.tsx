'use client';

import { useState } from 'react';
import { RESUME_DATA } from '@/data/resumeData';

export default function TerminalContact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="space-y-6">
      <div className="border-b border-track-200 dark:border-carbon-border pb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-papaya font-bold uppercase tracking-wider">
          <span className="w-2 h-2 bg-papaya"></span>
          <span>PIT_WALL.DISPATCH // CONTACT DAEMON</span>
        </div>
        <h2 className="font-headline text-4xl sm:text-5xl font-black uppercase text-track-text dark:text-white tracking-tight">
          DIRECT TELEMETRY & INTERACTIVE TERMINAL
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {/* Terminal Window Card */}
        <div className="rounded-xl bg-track-100 dark:bg-carbon-950 border border-track-200 dark:border-carbon-700 shadow-2xl p-5 sm:p-7 space-y-4">
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between border-b border-track-200 dark:border-carbon-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="font-mono text-xs text-track-subtext dark:text-gray-400 ml-2">
                advaith@ln4-station:~/contact
              </span>
            </div>
            <span className="font-mono text-[11px] text-papaya font-bold uppercase tracking-widest">
              ENCRYPTED_SSH-ED25519
            </span>
          </div>

          {/* Terminal Content */}
          <div className="font-mono text-xs sm:text-sm text-track-text dark:text-gray-200 space-y-3">
            <p className="text-track-subtext dark:text-gray-400">
              <span className="text-papaya font-bold">advaith@ln4-station:~$</span> contact --get-endpoints --output=json
            </p>

            {/* JSON Output */}
            <div className="p-4 rounded-lg bg-track-50 dark:bg-carbon-900 border border-track-200 dark:border-carbon-800 font-mono leading-relaxed space-y-1">
              <div className="text-gray-500">&#123;</div>
              <div className="pl-4">
                <span className="text-papaya">&quot;engineer&quot;:</span>{' '}
                <span className="text-track-text dark:text-white">&quot;{RESUME_DATA.personal.name}&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-papaya">&quot;email&quot;:</span>{' '}
                <span className="text-track-text dark:text-white">&quot;{RESUME_DATA.personal.email}&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-papaya">&quot;phone&quot;:</span>{' '}
                <span className="text-track-text dark:text-white">&quot;{RESUME_DATA.personal.phone}&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-papaya">&quot;location&quot;:</span>{' '}
                <span className="text-track-text dark:text-white">&quot;{RESUME_DATA.personal.location}&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-papaya">&quot;github&quot;:</span>{' '}
                <span className="text-track-text dark:text-white">&quot;{RESUME_DATA.personal.github}&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-papaya">&quot;linkedin&quot;:</span>{' '}
                <span className="text-track-text dark:text-white">&quot;{RESUME_DATA.personal.linkedin}&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-papaya">&quot;leetcode&quot;:</span>{' '}
                <span className="text-track-text dark:text-white">&quot;{RESUME_DATA.personal.leetcode}&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-papaya">&quot;roles&quot;:</span>{' '}
                <span className="text-track-subtext dark:text-gray-300">
                  [&quot;Software Development Engineer&quot;, &quot;Full-Stack Developer&quot;, &quot;Systems Architect&quot;]
                </span>,
              </div>
              <div className="pl-4">
                <span className="text-papaya">&quot;status&quot;:</span>{' '}
                <span className="text-emerald-500 font-bold">&quot;AVAILABLE_FOR_ROLES&quot;</span>
              </div>
              <div className="text-gray-500">&#125;</div>
            </div>

            {/* Interactive Command Line */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-papaya font-bold">advaith@ln4-station:~$</span>
                <span className="text-track-subtext dark:text-gray-300">mailx {RESUME_DATA.personal.email}</span>
                <span className="inline-block w-2 h-4 bg-papaya animate-pulse"></span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`px-3.5 py-2 rounded bg-track-200 dark:bg-carbon-800 hover:border-papaya border border-transparent font-mono text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    copied ? 'text-papaya' : 'text-track-text dark:text-gray-200 hover:text-papaya'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">content_copy</span>
                  <span>{copied ? 'COPIED::OK!' : 'copy::email'}</span>
                </button>
                <a
                  href={`mailto:${RESUME_DATA.personal.email}`}
                  className="px-4 py-2 rounded bg-papaya text-black font-headline text-base font-bold uppercase tracking-wider hover:bg-papaya-light transition-all flex items-center gap-1.5 shadow-md shadow-papaya/20"
                >
                  <span className="material-symbols-outlined text-[16px]">send</span>
                  <span>dispatch()</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SSG / Next.js Banner */}
        <div className="p-4 rounded-xl bg-track-100 dark:bg-carbon-850 border border-track-200 dark:border-carbon-border flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-track-subtext dark:text-gray-300">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-papaya text-lg">verified</span>
            <span className="font-bold text-track-text dark:text-white">Next.js App Router Architecture</span>
            <span>•</span>
            <span>FastAPI / Spring Boot / React / .NET</span>
          </div>
          <div className="flex items-center gap-2 text-papaya font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Verified Resume Parity</span>
          </div>
        </div>
      </div>
    </section>
  );
}
