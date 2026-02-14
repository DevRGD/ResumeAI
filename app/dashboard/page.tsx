'use client';

import { useState, ChangeEvent } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AnalysisResult } from '@/lib/aiService';
import InputForm from '@/components/dashboard/InputForm';
import ResultView from '@/components/dashboard/ResultView';
import ScannerView from '@/components/dashboard/ScannerView';
import IdleSkeleton from '@/components/dashboard/IdleSkeleton';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import OptimizationStrategy from '@/components/dashboard/OptimizationStrategy';

export default function Dashboard() {
  const [step, setStep] = useState<'input' | 'scanning' | 'result'>('input');
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === 'application/pdf') {
      setFile(selected);
      setError('');
    } else {
      setError('Please upload a valid PDF file.');
    }
  };

  const resetAnalysis = () => {
    setStep('input');
    setFile(null);
    setJobDescription('');
    setResult(null);
  };

  const handleAnalyze = async () => {
    if (!file || !jobDescription) {
      setError('Resume and Job Description are required.');
      return;
    }

    setStep('scanning');
    setError('');

    const formData = new FormData();
    formData.append('resume', file);
    formData.append('jobDescription', jobDescription);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Analysis failed');
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));
      setResult(data.data);
      setStep('result');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
      setError(errorMessage);
      setStep('input');
    }
  };

  return (
    <div className="grow flex flex-col justify-center pt-2">
      <div className="mx-auto px-12 py-12 lg:py-24 w-full max-w-360">
        <DashboardHeader />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <div className="relative order-2 lg:order-1 h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-125 h-125 bg-gold-500/5 rounded-full blur-[80px] -z-10" />

            <AnimatePresence mode="wait">
              {step === 'input' && <IdleSkeleton />}
              {step === 'scanning' && <ScannerView />}
              {step === 'result' && result && <ResultView result={result} />}
            </AnimatePresence>
          </div>

          <div className="order-1 lg:order-2 h-full">
            <AnimatePresence mode="wait">
              {step !== 'result' ? (
                <InputForm
                  file={file}
                  jobDescription={jobDescription}
                  error={error}
                  isScanning={step === 'scanning'}
                  onFileChange={handleFileChange}
                  onJobDescriptionChange={setJobDescription}
                  onAnalyze={handleAnalyze}
                />
              ) : (
                <OptimizationStrategy result={result!} onReset={resetAnalysis} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
