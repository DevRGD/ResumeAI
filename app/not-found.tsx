import Link from 'next/link';
import { FileQuestion, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-slate-900/50 rounded-2xl flex items-center justify-center border border-white/5 mb-8 shadow-2xl backdrop-blur-sm">
        <FileQuestion size={48} className="text-slate-500" />
      </div>
      <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">404 - Signal Lost</h2>
      <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
        The data layer you are looking for does not exist or has been moved to a secure archive.
      </p>
      <Link
        href="/"
        className="px-8 py-3 rounded-md bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-gold-500/30 transition-all flex items-center gap-2 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Return to Base
      </Link>
    </div>
  );
}
