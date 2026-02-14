import Link from 'next/link';
import { Github, Twitter, Linkedin, Activity, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/5 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-gold-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="w-full px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/10 group-hover:shadow-gold-500/20 transition-all">
                <span className="font-bold text-slate-950">R</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Resume<span className="text-gold-400">AI</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Advanced neural architecture for career optimization. Deconstruct, analyze, and reconstruct your
              professional profile with military-grade precision.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/5 border border-emerald-400/10 px-3 py-1.5 rounded-md w-fit">
              <span className="relative flex h-1.5 w-1.5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              All Systems Operational
            </div>
          </div>

          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Platform</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/dashboard" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                  Analysis Engine
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                  Live Scanner
                </Link>
              </li>
              <li>
                {/* Linking to repo for showcase purposes */}
                <Link
                  href="https://github.com/DevRGD/ResumeAI"
                  target="_blank"
                  className="text-slate-400 hover:text-gold-400 text-sm transition-colors"
                >
                  Keyword Database
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/DevRGD/ResumeAI"
                  target="_blank"
                  className="text-slate-400 hover:text-gold-400 text-sm transition-colors"
                >
                  API Access
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://github.com/DevRGD/ResumeAI/blob/main/README.md"
                  target="_blank"
                  className="text-slate-400 hover:text-gold-400 text-sm transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                  Career Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                  System Status
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 lg:ml-auto">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Global Network</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-md bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 transition-all">
                  <Activity size={18} />
                </div>
                <div>
                  <p className="text-white text-xs font-bold group-hover:text-teal-400 transition-colors">
                    System Online
                  </p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-wider">99.9% Uptime Verified</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-md bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/20 transition-all">
                  <Globe size={18} />
                </div>
                <div>
                  <p className="text-white text-xs font-bold group-hover:text-gold-400 transition-colors">
                    Asia-South-1
                  </p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-wider">Kolkata, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs font-medium">
            &copy; {new Date().getFullYear()} ResumeAI Intelligence Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/DevRGD"
              target="_blank"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </Link>
            <Link
              href="https://x.com/DevRGD"
              target="_blank"
              className="text-slate-500 hover:text-blue-400 transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter size={18} />
            </Link>
            <Link
              href="https://linkedin.com/in/DevRGD"
              target="_blank"
              className="text-slate-500 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
