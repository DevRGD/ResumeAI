'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function IdleSkeleton() {
  return (
    <motion.div
      key="skeleton"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-md p-8 shadow-2xl relative overflow-hidden h-full min-h-150 flex flex-col"
    >
      <div className="flex items-start justify-between mb-8 border-b border-white/5 pb-6 shrink-0">
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_1px_rgba(16,185,129,0.8)]" />
            <span className="text-[8px] text-slate-600 font-mono font-bold tracking-wider">PWR</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_1px_rgba(59,130,246,0.8)]" />
            <span className="text-[8px] text-slate-600 font-mono font-bold tracking-wider">NET</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/20" />
            <span className="text-[8px] text-slate-600 font-mono font-bold tracking-wider">BUSY</span>
          </div>
        </div>
        <div className="text-[10px] text-slate-500 font-mono tracking-widest pt-1 uppercase">Standby_Active</div>
      </div>

      <div className="space-y-6 grow">
        <div className="flex gap-4">
          <div className="h-16 w-16 bg-linear-to-br from-slate-800 to-slate-950 border border-white/10 rounded-md animate-pulse" />
          <div className="space-y-3 grow pt-1">
            <div className="h-4 w-3/4 bg-slate-800/60 rounded-md animate-pulse" />
            <div className="h-3 w-1/2 bg-slate-800/40 rounded-md animate-pulse" />
            <div className="h-2 w-1/4 bg-slate-800/20 rounded-md animate-pulse" />
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="h-2 w-full bg-slate-800/40 rounded-md animate-pulse" />
          <div className="h-2 w-full bg-slate-800/40 rounded-md animate-pulse" />
          <div className="h-2 w-5/6 bg-slate-800/40 rounded-md animate-pulse" />
          <div className="h-2 w-4/6 bg-slate-800/30 rounded-md animate-pulse" />
          <div className="h-2 w-full bg-slate-800/20 rounded-md animate-pulse" />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="relative h-32 bg-teal-500/3 border border-teal-500/20 rounded-lg p-4 overflow-hidden shadow-[0_0_15px_rgba(20,184,166,0.05)]">
            <div className="h-2 w-12 bg-teal-500/20 rounded mb-2 animate-pulse" />
            <div className="h-1.5 w-full bg-teal-500/10 rounded mb-1.5 animate-pulse" />
            <div className="h-1.5 w-2/3 bg-teal-500/10 rounded animate-pulse" />
            <div className="absolute -bottom-2 -right-2 opacity-10 rotate-12">
              <Zap size={70} className="text-teal-400" />
            </div>
          </div>

          <div className="relative h-32 bg-amber-500/3 border border-amber-500/20 rounded-lg p-4 overflow-hidden shadow-[0_0_15px_rgba(245,158,11,0.05)]">
            <div className="h-2 w-12 bg-amber-500/20 rounded mb-2 animate-pulse" />
            <div className="h-1.5 w-full bg-amber-500/10 rounded mb-1.5 animate-pulse" />
            <div className="h-1.5 w-2/3 bg-amber-500/10 rounded animate-pulse" />
            <div className="absolute -bottom-2 -right-2 opacity-10 -rotate-12">
              <Zap size={70} className="text-amber-400" />
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="h-2 w-full bg-slate-800/40 rounded-md animate-pulse" />
          <div className="h-2 w-11/12 bg-slate-800/30 rounded-md animate-pulse" />
          <div className="h-2 w-4/5 bg-slate-800/20 rounded-md animate-pulse" />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-500/2 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-white/5 to-transparent" />
    </motion.div>
  );
}
