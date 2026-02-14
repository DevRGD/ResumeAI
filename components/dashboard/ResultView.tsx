import { motion } from 'framer-motion';
import { AnalysisResult } from '@/lib/aiService';
import { Zap, Target, AlertOctagon, CheckCircle2 } from 'lucide-react';

interface ResultViewProps {
  result: AnalysisResult;
}

export default function ResultView({ result }: ResultViewProps) {
  return (
    <motion.div
      key="score-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6 h-full"
    >
      <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-md p-8 shadow-2xl relative overflow-hidden group min-h-50 flex flex-col justify-center">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <Zap size={120} className="text-gold-400" />
        </div>

        <div className="relative z-10">
          <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">Match Score</h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-7xl font-bold text-white tracking-tighter">{result.score}</span>
            <span className="text-2xl text-gold-400 font-medium">/100</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${result.score}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className={`h-full ${result.score > 70 ? 'bg-teal-400' : 'bg-gold-400'}`}
            />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            {result.score > 70
              ? 'Profile demonstrates high alignment with target requirements.'
              : 'Profile requires strategic optimization to meet target threshold.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-slate-900/60 border border-white/10 rounded-md p-6 flex flex-col justify-center items-start gap-2 h-32">
          <div className="flex items-center gap-3">
            <div className="bg-teal-500/10 p-2 rounded-md text-teal-400">
              <Target size={20} />
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-wider">Matches</p>
          </div>
          <p className="text-3xl font-bold text-white">{result.matchedSkills.length}</p>
        </div>
        <div className="bg-slate-900/60 border border-white/10 rounded-md p-6 flex flex-col justify-center items-start gap-2 h-32">
          <div className="flex items-center gap-3">
            <div className="bg-red-500/10 p-2 rounded-md text-red-400">
              <AlertOctagon size={20} />
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-wider">Gaps</p>
          </div>
          <p className="text-3xl font-bold text-white">{result.missingSkills.length}</p>
        </div>
      </div>

      <div className="bg-slate-900/60 border border-white/10 rounded-md overflow-hidden">
        <div className="p-4 bg-slate-900/50 border-b border-white/5 flex items-center justify-between">
          <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 size={14} /> Verified Matches
          </h4>
        </div>
        <div className="p-4 flex flex-wrap gap-2">
          {result.matchedSkills.map((skill, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-teal-500/10 rounded-md border border-teal-500/10 text-[11px] font-medium text-teal-300"
            >
              {skill}
            </span>
          ))}
          {result.matchedSkills.length === 0 && (
            <span className="text-xs text-slate-500 italic">No direct matches found.</span>
          )}
        </div>
      </div>

      <div className="bg-slate-900/60 border border-white/10 rounded-md overflow-hidden">
        <div className="p-4 bg-slate-900/50 border-b border-white/5 flex items-center justify-between">
          <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
            <AlertOctagon size={14} /> Critical Missing Keywords
          </h4>
        </div>
        <div className="p-4 flex flex-wrap gap-2">
          {result.missingSkills.map((skill, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-red-500/10 rounded-md border border-red-500/10 text-[11px] font-medium text-red-300"
            >
              {skill}
            </span>
          ))}
          {result.missingSkills.length === 0 && (
            <span className="text-xs text-teal-500 italic">No critical gaps detected.</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
