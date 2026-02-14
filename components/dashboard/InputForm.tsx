import { ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Cpu, FileText, Upload, CheckCircle2, AlertOctagon, ArrowRight } from 'lucide-react';

interface InputFormProps {
  file: File | null;
  jobDescription: string;
  error: string;
  isScanning: boolean;
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onJobDescriptionChange: (val: string) => void;
  onAnalyze: () => void;
}

export default function InputForm({
  file,
  jobDescription,
  error,
  isScanning,
  onFileChange,
  onJobDescriptionChange,
  onAnalyze,
}: InputFormProps) {
  return (
    <motion.div
      key="form"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="pl-0 lg:pl-10 h-full flex flex-col"
    >
      <div className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-md p-8 h-full min-h-150 flex flex-col">
        <h3 className="text-white text-xl font-bold mb-8 flex items-center gap-2 shrink-0">
          <Cpu size={20} className="text-gold-400" />
          Input Configuration
        </h3>

        <div className="space-y-6 grow flex flex-col">
          <div className="group">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block">
              Resume Document (PDF)
            </label>
            <div className="relative">
              <input
                type="file"
                accept=".pdf"
                onChange={onFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                disabled={isScanning}
              />
              <div
                className={`w-full bg-slate-900/50 border rounded-md p-8 transition-all duration-300 flex items-center gap-5 ${
                  file
                    ? 'border-teal-500/30 bg-teal-500/5'
                    : 'border-slate-800 hover:border-gold-500/30 hover:bg-slate-900/80'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                    file ? 'bg-teal-500/20 text-teal-400' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {file ? <FileText size={28} /> : <Upload size={28} />}
                </div>
                <div className="overflow-hidden">
                  <p className={`text-sm font-medium truncate ${file ? 'text-teal-400' : 'text-slate-300'}`}>
                    {file ? file.name : 'Upload File'}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{file ? 'Ready for scan' : 'Drag & drop or click'}</p>
                </div>
                {file && <CheckCircle2 size={18} className="text-teal-400 ml-auto shrink-0" />}
              </div>
            </div>
          </div>

          <div className="grow flex flex-col">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block">
              Target Description
            </label>
            <textarea
              className="w-full grow bg-slate-900/50 border border-slate-800 rounded-md p-5 text-slate-200 text-sm focus:outline-none focus:border-gold-500/30 focus:bg-slate-900/80 transition-all placeholder:text-slate-600 resize-none font-mono leading-relaxed min-h-50"
              placeholder="Paste the job description here..."
              value={jobDescription}
              onChange={(e) => onJobDescriptionChange(e.target.value)}
              disabled={isScanning}
            />
          </div>

          {error && (
            <div className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 p-4 rounded-md flex items-center gap-3 shrink-0">
              <AlertOctagon size={16} /> {error}
            </div>
          )}

          <button
            onClick={onAnalyze}
            disabled={!file || !jobDescription || isScanning}
            className="w-full h-14 rounded-md bg-linear-to-r from-gold-500 to-gold-600 text-slate-950 font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_25px_rgba(251,191,36,0.3)] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2 group shrink-0"
          >
            {isScanning ? (
              <>Processing...</>
            ) : (
              <>
                Initiate Analysis <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
