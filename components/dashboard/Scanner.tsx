'use client';

import { motion } from 'framer-motion';
import { Target, ShieldCheck } from 'lucide-react';

interface ScannerProps {
  isScanning: boolean;
}

export default function Scanner({ isScanning }: ScannerProps) {
  return (
    <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-md overflow-hidden shadow-2xl relative h-full min-h-150 flex flex-col">
      <div className="flex items-start justify-between p-8 border-b border-white/5 shrink-0 bg-slate-900/50 z-20">
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_2px_rgba(16,185,129,0.8)]" />
            <span className="text-[8px] text-slate-400 font-mono font-bold tracking-wider">PWR</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_2px_rgba(59,130,246,0.8)]" />
            <span className="text-[8px] text-slate-400 font-mono font-bold tracking-wider">NET</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_2px_rgba(245,158,11,0.8)]" />
            <span className="text-[8px] text-slate-400 font-mono font-bold tracking-wider">READ</span>
          </div>
        </div>
        <div className="text-[10px] text-teal-400 font-mono tracking-widest pt-1 animate-pulse uppercase">
          Scan_Active
        </div>
      </div>

      <div className="p-8 relative grow flex flex-col gap-6 overflow-hidden">
        <div className="flex gap-4 z-10">
          <div className="h-16 w-16 bg-linear-to-br from-teal-500/20 to-slate-950 border border-teal-500/20 rounded-md animate-pulse" />
          <div className="space-y-3 grow pt-1">
            <div className="h-4 w-3/4 bg-slate-800/60 rounded-md animate-pulse" />
            <div className="h-3 w-1/2 bg-slate-800/40 rounded-md animate-pulse" />
            <div className="h-2 w-1/4 bg-slate-800/20 rounded-md animate-pulse" />
          </div>
        </div>

        <div className="space-y-3 z-10">
          <div className="h-2 w-full bg-slate-800/40 rounded-md animate-pulse" />
          <div className="h-2 w-full bg-slate-800/40 rounded-md animate-pulse" />
          <div className="h-2 w-5/6 bg-slate-800/40 rounded-md animate-pulse" />
          <div className="h-2 w-4/6 bg-slate-800/30 rounded-md animate-pulse" />
          <div className="h-2 w-full bg-slate-800/20 rounded-md animate-pulse" />
        </div>

        <div className="grid grid-cols-2 gap-4 z-10">
          <div className="relative h-32 bg-teal-500/3 border border-teal-500/20 rounded-lg p-4 overflow-hidden shadow-[0_0_15px_rgba(20,184,166,0.05)]">
            <div className="h-2 w-12 bg-teal-500/20 rounded mb-2 animate-pulse" />
            <div className="h-1.5 w-full bg-teal-500/10 rounded mb-1.5 animate-pulse" />
            <div className="h-1.5 w-2/3 bg-teal-500/10 rounded animate-pulse" />
            <div className="absolute -bottom-2 -right-2 opacity-10">
              <Target size={70} className="text-teal-400" />
            </div>
          </div>

          <div className="relative h-32 bg-amber-500/3 border border-amber-500/20 rounded-lg p-4 overflow-hidden shadow-[0_0_15px_rgba(245,158,11,0.05)]">
            <div className="h-2 w-12 bg-amber-500/20 rounded mb-2 animate-pulse" />
            <div className="h-1.5 w-full bg-amber-500/10 rounded mb-1.5 animate-pulse" />
            <div className="h-1.5 w-2/3 bg-amber-500/10 rounded animate-pulse" />
            <div className="absolute -bottom-2 -right-2 opacity-10">
              <ShieldCheck size={70} className="text-amber-400" />
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-2 z-10">
          <div className="h-2 w-full bg-slate-800/40 rounded-md animate-pulse" />
          <div className="h-2 w-11/12 bg-slate-800/30 rounded-md animate-pulse" />
          <div className="h-2 w-4/5 bg-slate-800/20 rounded-md animate-pulse" />
        </div>

        {isScanning && (
          <>
            <motion.div
              className="absolute left-0 right-0 h-1 bg-teal-400 shadow-[0_0_30px_4px_rgba(45,212,191,0.6)] z-30"
              initial={{ top: '0%' }}
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{
                duration: 3,
                ease: 'linear',
                repeat: Infinity,
              }}
            />
            <div className="absolute inset-0 bg-linear-to-b from-teal-500/10 via-transparent to-transparent pointer-events-none z-20" />
          </>
        )}
      </div>
    </div>
  );
}
