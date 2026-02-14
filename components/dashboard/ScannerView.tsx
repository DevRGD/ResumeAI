import { motion } from 'framer-motion';
import Scanner from '@/components/dashboard/Scanner';

export default function ScannerView() {
  return (
    <motion.div
      key="scanner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full min-h-150"
    >
      <Scanner isScanning={true} />
      <div className="absolute -bottom-12 left-0 w-full text-center">
        <p className="text-gold-400 font-mono text-xs uppercase tracking-[0.3em] animate-pulse">
          Processing Data Layers...
        </p>
      </div>
    </motion.div>
  );
}
