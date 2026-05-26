'use client';

import { useState, useEffect } from 'react';
import { Search, BookOpen, ArrowUp, Bookmark, X, Download, GitCompare } from 'lucide-react';
import { coursesData, colleges } from '@/lib/data';
import { CourseCard } from '@/components/CourseCard';
import { motion, AnimatePresence } from 'motion/react';

export function CourseDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCollege, setActiveCollege] = useState("All Colleges");
  const [sortOption, setSortOption] = useState("Default");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('bookmarkedCourses');
    if (saved) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setBookmarkedIds(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse bookmarks", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarkedCourses', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  const toggleCompare = (id: string) => {
    setCompareIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(cId => cId !== id);
      }
      if (prev.length >= 3) {
        alert("You can only compare up to 3 courses.");
        return prev;
      }
      return [...prev, id];
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter Logic
  let filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.code.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCollege = activeCollege === "All Colleges" || course.college === activeCollege;
    
    return matchesSearch && matchesCollege;
  });

  // Sort Logic
  filteredCourses.sort((a, b) => {
    if (sortOption === "A-Z") return a.name.localeCompare(b.name);
    if (sortOption === "Z-A") return b.name.localeCompare(a.name);
    if (sortOption === "Masters First") {
      const aIsMaster = a.name.toLowerCase().includes("master");
      const bIsMaster = b.name.toLowerCase().includes("master");
      if (aIsMaster && !bIsMaster) return -1;
      if (!aIsMaster && bIsMaster) return 1;
      return a.name.localeCompare(b.name);
    }
    if (sortOption === "Techno First") {
      const aIsTechno = a.duration === "2 Years";
      const bIsTechno = b.duration === "2 Years";
      if (aIsTechno && !bIsTechno) return -1;
      if (!aIsTechno && bIsTechno) return 1;
      return a.name.localeCompare(b.name);
    }
    return 0; // Default
  });

  return (
    <section id="courses" className="py-12 px-6 md:px-12 bg-white relative min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-red-900 uppercase tracking-tight leading-none" style={{ textShadow: "3px 3px 0px #FECACA" }}>
            Course Directory
          </h2>
          <p className="text-slate-500 text-lg md:text-[1.1rem] leading-relaxed max-w-2xl mx-auto px-4 font-medium">
            Find the perfect program for your career goals. Filter by college or search for specific degrees to download the official prospectus.
          </p>
        </div>

        {/* Search Input */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-2xl group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-slate-400 group-focus-within:text-red-900 transition-colors">
              <Search size={22} strokeWidth={2.5} />
            </div>
            <input
              type="text"
              placeholder="Search by course name, college, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F8FAFC] border-2 border-slate-100 rounded-full py-4 pl-16 pr-8 text-lg text-slate-700 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-red-900 transition-all font-medium shadow-sm hover:border-slate-200 focus:shadow-[0_0_0_4px_rgba(127,29,29,0.1)]"
            />
          </div>
        </div>

        {/* Mobile & Tablet Filter Select */}
        <div className="lg:hidden w-full max-w-md mx-auto px-4 mb-8">
          <label htmlFor="college-filter" className="block text-sm font-bold text-slate-700 mb-2">Filter by College</label>
          <select
            id="college-filter"
            value={activeCollege}
            onChange={(e) => setActiveCollege(e.target.value)}
            className="w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-700 focus:outline-none focus:border-red-900 focus:ring-0 shadow-sm appearance-none cursor-pointer"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
          >
            {colleges.map((college) => (
              <option key={college} value={college}>{college}</option>
            ))}
          </select>
        </div>

        {/* Desktop Filters Grid */}
        <div className="hidden lg:flex flex-wrap justify-center gap-3 max-w-5xl mx-auto px-4 mb-12">
          {colleges.map((college) => (
            <button
              key={college}
              onClick={() => setActiveCollege(college)}
              className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all shadow-sm border ${
                activeCollege === college 
                  ? "bg-red-900 text-white border-red-900 shadow-red-900/20 shadow-md scale-105" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {college}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-bold px-2 py-4 border-b border-slate-100/80 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm">{filteredCourses.length} programs found</span>
            {activeCollege !== "All Colleges" && (
              <button onClick={() => setActiveCollege("All Colleges")} className="text-red-900 text-sm hover:underline">
                Clear Filters
              </button>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center gap-2 bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-red-900 border border-slate-200 hover:border-red-200 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <Bookmark className="w-4 h-4" />
              <span className="hidden sm:inline">Bookmarks ({bookmarkedIds.length})</span>
              <span className="sm:hidden">{bookmarkedIds.length}</span>
            </button>
            <label htmlFor="sort" className="text-sm font-medium text-slate-500 hidden sm:inline">Sort by:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-red-900 focus:border-red-900 block p-2 outline-none font-medium transition-colors cursor-pointer hover:bg-slate-100"
            >
              <option value="Default">Default</option>
              <option value="A-Z">A to Z</option>
              <option value="Z-A">Z to A</option>
              <option value="Techno First">Techno (Short Courses) First</option>
              <option value="Masters First">Masters First</option>
            </select>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode='popLayout'>
            {filteredCourses.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredCourses.map(course => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    key={course.id}
                  >
                    <CourseCard 
                      course={course} 
                      isBookmarked={bookmarkedIds.includes(course.id)}
                      onToggleBookmark={() => toggleBookmark(course.id)} 
                      isCompared={compareIds.includes(course.id)}
                      onToggleCompare={() => toggleCompare(course.id)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 text-slate-400 font-medium flex flex-col items-center justify-center"
              >
                <BookOpen size={48} className="mb-4 text-slate-200" strokeWidth={1.5} />
                <p className="text-xl text-slate-600 font-bold mb-2">No programs found</p>
                <p className="text-base text-slate-400 max-w-md">We couldn&apos;t find any courses matching your current filters. Try adjusting your search.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-red-900 text-white shadow-lg hover:bg-red-950 hover:shadow-xl transition-all hover:-translate-y-1 z-50 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-red-900/20"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Bookmarks Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-slate-900/50 z-40 backdrop-blur-sm"
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm sm:max-w-md bg-white shadow-2xl z-50 flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bookmark className="w-6 h-6 text-red-900" />
                  <h2 className="text-xl font-bold text-slate-900">Bookmarked Courses</h2>
                </div>
                <button 
                  onClick={() => setIsSidebarOpen(false)}
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
                    <div key={course.id} className="p-5 border border-slate-100 rounded-2xl relative hover:border-red-900/30 transition-colors shadow-sm bg-white group">
                      <button 
                        onClick={() => toggleBookmark(course.id)}
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
      {/* Compare Floating Bar */}
      <AnimatePresence>
        {compareIds.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 p-4 pointer-events-none"
          >
            <div className="max-w-md mx-auto bg-slate-900 text-white rounded-2xl shadow-2xl p-4 flex items-center justify-between pointer-events-auto">
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
                    onClick={() => setIsCompareModalOpen(true)}
                    className="bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-100 transition-colors"
                  >
                    Compare
                  </button>
                )}
                <button 
                  onClick={() => setCompareIds([])}
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compare Modal */}
      <AnimatePresence>
        {isCompareModalOpen && (
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
              className="bg-white rounded-[2rem] shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                  <GitCompare className="w-6 h-6 text-red-900" />
                  Course Comparison
                </h2>
                <button 
                  onClick={() => setIsCompareModalOpen(false)}
                  className="p-2 text-slate-400 hover:text-red-900 hover:bg-red-50 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coursesData.filter(c => compareIds.includes(c.id)).map(course => (
                    <div key={course.id} className="border border-slate-200 rounded-2xl p-6 flex flex-col relative h-full">
                      <button 
                        onClick={() => toggleCompare(course.id)}
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
    </section>
  );
}
