import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  const baseStyles =
    'px-6 py-3 rounded-md font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-linear-to-r from-gold-500 to-gold-600 text-slate-950 shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.6)] hover:brightness-110 border border-gold-400/20',
    secondary:
      'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-600 shadow-lg',
    outline: 'bg-transparent border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500',
  };

  return (
    <button className={twMerge(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
