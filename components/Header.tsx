'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl transition-colors duration-300 ${
        isMobileMenuOpen ? 'bg-slate-950' : 'bg-slate-950/70'
      }`}
    >
      <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between relative z-50">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:shadow-gold-500/30 transition-all duration-300">
            <span className="font-bold text-slate-950 text-xl">R</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none text-slate-100 tracking-tight">
              Resume<span className="text-gold-400">AI</span>
            </span>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest leading-none mt-1">
              Intelligence System
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-slate-400 hover:text-gold-400 transition-colors uppercase tracking-wider"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-slate-400 hover:text-gold-400 transition-colors uppercase tracking-wider"
          >
            Dashboard
          </Link>
        </nav>

        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors p-2 flex flex-col justify-center items-center gap-1.5 w-10 h-10 relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-current rounded-full origin-center"
            animate={isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
          <motion.span
            className="w-6 h-0.5 bg-current rounded-full origin-center"
            animate={isMobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 h-screen w-screen bg-slate-950 z-40 md:hidden flex flex-col"
          >
            <nav className="flex flex-col p-8 pt-28 gap-6">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-slate-300 hover:text-gold-400 transition-colors border-b border-white/5 pb-4"
              >
                Home
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-slate-300 hover:text-gold-400 transition-colors border-b border-white/5 pb-4"
              >
                Dashboard
              </Link>
            </nav>

            <div className="mt-auto p-12">
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 bg-slate-800 rounded-full" />
                <div className="w-2 h-2 bg-slate-800 rounded-full" />
                <div className="w-2 h-2 bg-slate-800 rounded-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
