import { X, GitCompare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CompareFloatingBarProps {
  compareIds: string[];
  onClear: () => void;
  onCompare: () => void;
}

export function CompareFloatingBar({ compareIds, onClear, onCompare }: CompareFloatingBarProps) {
  return (
    <AnimatePresence>
      {compareIds.length > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 pointer-events-none"
        >
          <div className="max-w-md mx-auto bg-slate-900/80 backdrop-blur-xl border border-white/20 text-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <GitCompare className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm">Compare Courses</p>
                <p className="text-xs text-slate-300">{compareIds.length} of 3 selected</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {compareIds.length > 1 && (
                <button 
                  onClick={onCompare}
                  className="bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-100 transition-colors"
                >
                  Compare
                </button>
              )}
              <button 
                onClick={onClear}
                className="p-2 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
