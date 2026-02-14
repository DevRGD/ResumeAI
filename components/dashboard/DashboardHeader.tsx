export default function DashboardHeader() {
  return (
    <div className="mb-16 w-full max-w-360">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium uppercase tracking-wider mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
        Analysis Console
      </div>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
        Initialize <br />
        <span className="text-transparent bg-clip-text bg-linear-to-b from-gold-400 via-gold-500 to-gold-600">
          Resume Intelligence.
        </span>
      </h1>
      <p className="text-sm md:text-lg text-slate-400 leading-relaxed max-w-2xl">
        Upload your resume and the target job description. Our AI will compare your profile against the role to
        calculate your match score and identify missing keywords.
      </p>
    </div>
  );
}
