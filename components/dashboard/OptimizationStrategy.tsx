import { motion } from 'framer-motion';
import { Sparkles, RefreshCw } from 'lucide-react';
import { AnalysisResult } from '@/lib/aiService';

interface OptimizationStrategyProps {
  result: AnalysisResult;
  onReset: () => void;
}

export default function OptimizationStrategy({ result, onReset }: OptimizationStrategyProps) {
  return (
    <motion.div
      key="results-details"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="pl-0 lg:pl-10 h-full flex flex-col"
    >
      <div className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-md p-8 h-full min-h-150 flex flex-col">
        <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2 shrink-0">
          <Sparkles size={20} className="text-gold-400" />
          Optimization Strategy
        </h3>

        <div className="space-y-6 grow overflow-y-auto pr-2 custom-scrollbar">
          <div className="bg-slate-900/30 rounded-md border border-white/5 p-6 h-full">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">Tactical Recommendations</h4>
            <ul className="space-y-4">
              {result.suggestions.map((suggestion, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                  {suggestion.replace(/"/g, '&quot;')}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 shrink-0">
          <button
            onClick={onReset}
            className="w-full py-4 rounded-md bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2 border border-slate-700"
          >
            <RefreshCw size={14} /> Reset System
          </button>
        </div>
      </div>
    </motion.div>
  );
}
