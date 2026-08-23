import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export const AgencyComparison: React.FC = () => {
  const criteria = [
    {
      feature: 'Dedicated Senior Software Engineers',
      techsync: 'Direct Senior Architects & Lead Devs',
      traditional: 'Junior Devs + Heavy Account Managers',
      freelance: 'Single point of failure / variable skill'
    },
    {
      feature: 'Sprint Velocity & Working Demos',
      techsync: 'Bi-Weekly Live Demos & Working Code',
      traditional: 'Monthly or quarterly waterfall updates',
      freelance: 'Inconsistent check-ins & timeline drift'
    },
    {
      feature: '100% IP & Full Source Code Ownership',
      techsync: 'Complete Git Repo & IP Handover from Day 1',
      traditional: 'Proprietary lock-ins / extra licensing fees',
      freelance: 'Unclear licensing / untracked repos'
    },
    {
      feature: 'Linux VPS & DevOps Hardening Included',
      techsync: 'Included: Nginx, SSL, CI/CD, Backups & SLA',
      traditional: 'Expensive monthly cloud add-on fees',
      freelance: 'No infrastructure / manual FTP uploads'
    },
    {
      feature: 'Production Warranty & SLA Guarantee',
      techsync: '30-Day Bug Warranty + 24/7 Monitored SLA',
      traditional: 'High hourly support retainer required',
      freelance: 'Disappears after delivery / no warranty'
    }
  ];

  return (
    <div className="mt-16 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 sm:p-9 shadow-lg backdrop-blur-xl overflow-x-auto">
      <div className="text-left max-w-xl mb-8">
        <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
          ENGINEERING STANDARDS BENCHMARK
        </span>
        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display mt-1">
          Why Enterprises Choose TechSynchronic
        </h3>
      </div>

      <table className="w-full text-left border-collapse min-w-[640px]">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400">
            <th className="py-4 px-4 font-bold uppercase">Engineering Standard</th>
            <th className="py-4 px-4 font-bold text-cyan-700 dark:text-cyan-400 uppercase bg-cyan-50 dark:bg-cyan-950/40 rounded-t-xl border-t border-x border-cyan-200 dark:border-cyan-500/30">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>TechSynchronic</span>
              </div>
            </th>
            <th className="py-4 px-4 font-bold uppercase">Traditional Agency</th>
            <th className="py-4 px-4 font-bold uppercase">Freelancers</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-800/60 text-xs sm:text-sm">
          {criteria.map((item, index) => (
            <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
              <td className="py-4 px-4 font-semibold text-slate-900 dark:text-slate-200">
                {item.feature}
              </td>
              <td className="py-4 px-4 font-bold text-cyan-800 dark:text-cyan-300 bg-cyan-50/60 dark:bg-cyan-950/20 border-x border-cyan-200 dark:border-cyan-500/20">
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item.techsync}</span>
                </div>
              </td>
              <td className="py-4 px-4 text-slate-500 dark:text-slate-400">
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-rose-100 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item.traditional}</span>
                </div>
              </td>
              <td className="py-4 px-4 text-slate-500 dark:text-slate-400">
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-rose-100 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item.freelance}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
