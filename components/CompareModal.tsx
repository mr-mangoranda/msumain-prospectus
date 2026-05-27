import { X, GitCompare, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { coursesData } from '@/lib/data';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  compareIds: string[];
  onToggleCompare: (id: string) => void;
}

export function CompareModal({ isOpen, onClose, compareIds, onToggleCompare }: CompareModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-900/60 z-[60] backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white/80 backdrop-blur-2xl rounded-[2rem] border border-white/60 shadow-[0_20px_60px_rgb(0,0,0,0.1)] w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-white/40 flex items-center justify-between bg-white/40">
              <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                <GitCompare className="w-6 h-6 text-red-900" />
                Course Comparison
              </h2>
              <button 
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-red-900 hover:bg-red-50 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesData.filter(c => compareIds.includes(c.id)).map(course => (
                  <div key={course.id} className="border border-white/60 bg-white/40 backdrop-blur-sm rounded-2xl p-6 flex flex-col relative h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <button 
                      onClick={() => onToggleCompare(course.id)}
                      className="absolute top-4 right-4 text-slate-300 hover:text-red-900"
                      title="Remove"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <span className="text-xs font-bold text-red-900 mb-2 tracking-wider">{course.code}</span>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight mb-4">{course.name}</h3>
                    <p className="text-sm text-slate-600 mb-6 flex-1">{course.description}</p>
                    
                    <div className="space-y-4 border-t border-slate-100 pt-4">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">College</p>
                        <p className="text-sm font-semibold text-slate-800">{course.college}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Duration</p>
                        <p className="text-sm font-semibold text-slate-800">{course.duration}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Career Paths</p>
                        <p className="text-sm font-semibold text-slate-800">{course.careers}</p>
                      </div>
                    </div>

                    <a 
                      href={`/pdfs/${course.pdfFileName}`} 
                      download={course.pdfFileName}
                      className="mt-6 w-full py-2.5 flex items-center justify-center gap-2 rounded-xl bg-slate-50 text-slate-700 font-bold text-sm hover:bg-red-900 hover:text-white transition-colors border border-slate-200 hover:border-transparent"
                    >
                      <Download className="w-4 h-4" /> Download Prospectus
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
