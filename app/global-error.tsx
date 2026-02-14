'use client';

import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-200 min-h-screen flex items-center justify-center`}>
        <div className="flex flex-col items-center justify-center p-6 text-center max-w-lg">
          <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20 mb-6 animate-pulse">
            <AlertTriangle size={40} className="text-red-500" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Critical System Failure</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            A fatal exception has occurred in the root application layer. Immediate manual reset is required.
          </p>
          <button
            onClick={() => reset()}
            className="px-8 py-4 rounded-md bg-linear-to-r from-red-600 to-red-700 text-white font-bold tracking-wider hover:brightness-110 transition-all shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)] flex items-center gap-3"
          >
            <RefreshCw size={20} />
            INITIATE SYSTEM RESET
          </button>
        </div>
      </body>
    </html>
  );
}
