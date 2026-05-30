import { X, Bookmark, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import coursesDataRaw from '@/data/courses.json';
import { Course } from '@/lib/types';

const coursesData = coursesDataRaw as Course[];

interface BookmarksSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
}

export function BookmarksSidebar({ isOpen, onClose, bookmarkedIds, onToggleBookmark }: BookmarksSidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/50 z-40 backdrop-blur-sm"
          />
          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm sm:max-w-md bg-white/70 backdrop-blur-2xl shadow-2xl z-50 flex flex-col border-l border-white/50"
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bookmark className="w-6 h-6 text-red-900" />
                <h2 className="text-xl font-bold text-slate-900">Bookmarked Courses</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              {bookmarkedIds.length === 0 ? (
                <div className="text-center text-slate-500 mt-10">
                  <Bookmark className="w-12 h-12 mx-auto mb-4 text-slate-200" strokeWidth={1.5} />
                  <p>You haven&apos;t bookmarked any courses yet.</p>
                </div>
              ) : (
                coursesData.filter(c => bookmarkedIds.includes(c.id)).map(course => (
                  <div key={course.id} className="p-5 border border-white/60 rounded-2xl relative hover:border-red-900/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1 shadow-sm bg-white/50 backdrop-blur-md group">
                    <button
                      onClick={() => onToggleBookmark(course.id)}
                      className="absolute top-4 right-4 text-slate-300 hover:text-red-900 transition-colors focus:outline-none"
                      aria-label="Remove bookmark"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="flex flex-col gap-1 pr-8">
                      <span className="text-[10px] font-bold text-red-900 uppercase tracking-wider">{course.code}</span>
                      <h4 className="font-bold text-slate-800 text-sm leading-tight">{course.name}</h4>
                      <p className="text-xs text-slate-500 mt-1 font-medium">{course.college}</p>
                      <a
                        href={`/pdfs/${course.pdfFileName}`}
                        download={course.pdfFileName}
                        className="mt-4 text-xs font-bold text-slate-500 hover:text-red-900 flex items-center gap-1 w-max transition-colors"
                      >
                        <Download className="w-4 h-4" /> Download Prospectus
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
