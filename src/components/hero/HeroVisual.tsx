import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Database, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Terminal as TerminalIcon,
  CheckCircle,
  Clock
} from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'metrics' | 'terminal'>('architecture');
  const [requestsCount, setRequestsCount] = useState(148290);
  const [activeUsers, setActiveUsers] = useState(4280);

  useEffect(() => {
    const interval = setInterval(() => {
      setRequestsCount((prev) => prev + Math.floor(Math.random() * 8) + 3);
      if (Math.random() > 0.6) {
        setActiveUsers((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Precision Rim Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-indigo-500/10 to-teal-500/20 rounded-3xl blur-xl opacity-60 pointer-events-none" />

      {/* Main Architectural Console Panel */}
      <div className="relative rounded-2xl bg-white/95 dark:bg-[#0B0F19]/95 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="text-xs font-mono text-slate-600 dark:text-slate-400 ml-2 font-medium flex items-center gap-1">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> techsynchronic://prod-cluster
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-slate-950/80 px-2 py-0.5 rounded-lg border border-emerald-200 dark:border-slate-800 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>99.999% SLA</span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-4 pt-2 bg-slate-50 dark:bg-slate-900/40 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`pb-2.5 px-3 font-semibold transition-all border-b-2 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'architecture'
                  ? 'text-cyan-600 dark:text-cyan-400 border-cyan-500'
                  : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Topology</span>
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`pb-2.5 px-3 font-semibold transition-all border-b-2 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'metrics'
                  ? 'text-cyan-600 dark:text-cyan-400 border-cyan-500'
                  : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Telemetry</span>
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`pb-2.5 px-3 font-semibold transition-all border-b-2 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'terminal'
                  ? 'text-cyan-600 dark:text-cyan-400 border-cyan-500'
                  : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>DevOps Pipeline</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-5">
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              {/* Architecture Nodes Flow */}
              <div className="grid grid-cols-3 gap-3">
                {/* Node 1 */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/30 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase font-bold">Client Layer</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"></span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-0.5">React + Tailwind</div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Micro-frontend SPA</p>
                  <div className="mt-2 text-[10px] text-cyan-700 dark:text-cyan-300 font-mono bg-cyan-50 dark:bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-200 dark:border-cyan-900">
                    Latency: 14ms
                  </div>
                </div>

                {/* Node 2 */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-indigo-500/30 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 uppercase font-bold">Services</span>
                    <Zap className="w-3 h-3 text-indigo-500" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-0.5">FastAPI & Node</div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Async Task Queues</p>
                  <div className="mt-2 text-[10px] text-indigo-700 dark:text-indigo-300 font-mono bg-indigo-50 dark:bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-200 dark:border-indigo-900">
                    16 Workers
                  </div>
                </div>

                {/* Node 3 */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-emerald-500/30 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase font-bold">Data Store</span>
                    <Database className="w-3 h-3 text-emerald-500" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-0.5">Postgres + Vector</div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">ACID + Embeddings</p>
                  <div className="mt-2 text-[10px] text-emerald-700 dark:text-emerald-300 font-mono bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-900">
                    Sync: 0ms
                  </div>
                </div>
              </div>

              {/* Telemetry Bar */}
              <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Current Velocity</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                      {requestsCount.toLocaleString()} req/hr
                    </div>
                  </div>
                </div>

                <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800" />

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Zero-Trust RBAC</div>
                    <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                      Enforced
                    </div>
                  </div>
                </div>
              </div>

              {/* Pipeline Command Preview */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                <div className="flex items-center justify-between text-slate-500 text-[10px] pb-1 border-b border-slate-800">
                  <span>deploy_pipeline.yml</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> SUCCESS (0.24s)
                  </span>
                </div>
                <p className="text-cyan-400">
                  <span className="text-slate-600">01</span> $ techsync deploy --env=production --cluster=vps-ha
                </p>
                <p className="text-emerald-400">
                  <span className="text-slate-600">02</span> ✓ Database migrations verified [PostgreSQL v16.2]
                </p>
              </div>
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                  <div className="text-slate-500 dark:text-slate-400 text-[11px] mb-1">Active Users</div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">{activeUsers}</div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1">↑ 14.2% today</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                  <div className="text-slate-500 dark:text-slate-400 text-[11px] mb-1">Latency p99</div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">22.4 ms</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">&lt; 45ms guaranteed</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex justify-between text-slate-700 dark:text-slate-300 text-xs">
                  <span>VPS Cluster Load (8 Cores)</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">28% Normal</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full w-[28%] rounded-full" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'terminal' && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5">
              <p className="text-slate-500"># Production Task Queue & Sockets</p>
              <p className="text-cyan-300">&gt; [INFO] Redis broker connected @ redis://127.0.0.1:6379</p>
              <p className="text-emerald-400">&gt; [SYNC] Biometric sync listener: 3,500 punches processed in 420ms</p>
              <p className="text-indigo-300">&gt; [CRM] WhatsApp Business webhook dispatched (status: delivered)</p>
              <div className="flex items-center gap-1.5 text-cyan-400 pt-2">
                <span className="animate-pulse">_</span>
                <span className="text-slate-500 text-[11px]">System ready for production sprint</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Badge */}
        <div className="px-5 py-2.5 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Bi-Weekly Agile Sprints</span>
          </div>
          <span className="font-mono text-slate-500 dark:text-slate-400">Ready for Q3/Q4</span>
        </div>
      </div>
    </div>
  );
};
