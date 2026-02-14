'use client';

import { useEffect } from 'react';
import { AlertOctagon, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20 mb-8 shadow-[0_0_30px_-10px_rgba(239,68,68,0.3)] backdrop-blur-sm">
        <AlertOctagon size={48} className="text-red-500" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">System Malfunction</h2>
      <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
        We encountered a critical error while processing your request. The neural engine has been paused to prevent data
        corruption.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 rounded-md bg-red-600 text-white font-bold hover:bg-red-500 transition-colors flex items-center gap-2 shadow-lg shadow-red-900/20 uppercase tracking-wider text-xs"
        >
          <RefreshCw size={16} />
          Reboot System
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-md bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-wider text-xs font-bold"
        >
          <Home size={16} />
          Return Home
        </Link>
      </div>
    </div>
  );
}
