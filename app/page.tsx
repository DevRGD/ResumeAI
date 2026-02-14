import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ArrowRight, Zap, Target, ShieldCheck, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="grow flex flex-col justify-center pt-2">
      <div className="mx-auto px-12 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-left space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Advanced Resume Intelligence
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Match Your Resume <br />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-gold-400 via-gold-500 to-gold-600">
                To Your Dream Job.
              </span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Don&apos;t leave your career to chance. Our Llama 3.3 powered engine analyzes your resume against specific
              job descriptions to identify missing keywords, score your compatibility, and generate tactical
              improvements to bypass ATS filters.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard">
                <Button className="h-12 px-8">
                  Start Analysis Now <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gold-500/10 rounded-full blur-[100px] -z-10" />
            <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>

              <div className="space-y-4 opacity-75">
                <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-slate-800 rounded animate-pulse" />
                <div className="space-y-2 pt-4">
                  <div className="h-3 w-full bg-slate-800/50 rounded" />
                  <div className="h-3 w-full bg-slate-800/50 rounded" />
                  <div className="h-3 w-5/6 bg-slate-800/50 rounded" />
                </div>
                <div className="flex gap-4 pt-4">
                  <div className="h-20 w-full bg-teal-500/5 border border-teal-500/20 rounded-lg p-3">
                    <div className="h-2 w-16 bg-teal-500/20 rounded mb-2" />
                    <div className="h-8 w-8 bg-teal-500/20 rounded-full" />
                  </div>
                  <div className="h-20 w-full bg-gold-500/5 border border-gold-500/20 rounded-lg p-3">
                    <div className="h-2 w-16 bg-gold-500/20 rounded mb-2" />
                    <div className="h-8 w-8 bg-gold-500/20 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 p-8">
                <Zap className="text-gold-400 opacity-20" size={120} />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-slate-800 p-4 rounded-md border border-white/10 shadow-xl flex items-center gap-4">
              <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                <Target size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400">Match Score</p>
                <p className="text-lg font-bold text-white">94/100</p>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-slate-800 p-4 rounded-md border border-white/10 shadow-xl flex items-center gap-4">
              <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400">ATS Status</p>
                <p className="text-lg font-bold text-white">Passed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-12 py-12 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-360 text-left">
          <div className="group p-8 rounded-md bg-slate-900/50 border border-white/5 hover:border-teal-500/30 hover:bg-slate-900/80 transition-all duration-300 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6 text-teal-400 group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">AI Resume Parsing</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Instantly deconstruct your PDF resume into structured data points for deep algorithmic analysis.
            </p>
          </div>

          <div className="group p-8 rounded-md bg-slate-900/50 border border-white/5 hover:border-gold-500/30 hover:bg-slate-900/80 transition-all duration-300 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 text-gold-400 group-hover:scale-110 transition-transform">
              <Target size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Keyword Synchronization</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We cross-reference your skills against the job description to highlight exactly what recruiters want.
            </p>
          </div>

          <div className="group p-8 rounded-md bg-slate-900/50 border border-white/5 hover:border-indigo-500/30 hover:bg-slate-900/80 transition-all duration-300 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">ATS Optimization</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Receive a detailed strategy to improve your score and ensure your resume reaches the top of the pile.
            </p>
          </div>

          <div className="group p-8 rounded-md bg-slate-900/50 border border-white/5 hover:border-amber-500/30 hover:bg-slate-900/80 transition-all duration-300 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 transition-transform">
              <Sparkles size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Strategic Insights</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Unlock personalized recommendations tailored to your specific industry and level of experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
