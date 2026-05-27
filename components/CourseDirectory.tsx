'use client';

import { useState, useEffect, useMemo } from 'react';
import { Search, BookOpen, ArrowUp, Bookmark } from 'lucide-react';
import { coursesData, colleges } from '@/lib/data';
import { CourseCard } from '@/components/CourseCard';
import { motion, AnimatePresence } from 'motion/react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { toast } from 'sonner';
import { BookmarksSidebar } from '@/components/BookmarksSidebar';
import { CompareFloatingBar } from '@/components/CompareFloatingBar';
import { CompareModal } from '@/components/CompareModal';

export function CourseDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCollege, setActiveCollege] = useState("All Colleges");
  const [sortOption, setSortOption] = useState("Default");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<string[]>('bookmarkedCourses', []);
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
        toast.error("You can only compare up to 3 courses.");
        return prev;
      }
      return [...prev, id];
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter and Sort Logic
  const filteredCourses = useMemo(() => {
    let filtered = coursesData.filter(course => {
      const matchesSearch = course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCollege = activeCollege === "All Colleges" || course.college === activeCollege;

      return matchesSearch && matchesCollege;
    });

    filtered.sort((a, b) => {
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

    return filtered;
  }, [searchQuery, activeCollege, sortOption]);

  return (
    <section id="courses" className="py-12 px-6 md:px-12 bg-transparent relative min-h-screen">
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
              className="w-full bg-white/50 backdrop-blur-md border border-white/60 rounded-full py-4 pl-16 pr-8 text-lg text-slate-700 placeholder:text-slate-400 focus:outline-none focus:bg-white/80 focus:border-red-900/50 transition-all duration-500 font-medium shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] focus:shadow-[0_0_0_4px_rgba(127,29,29,0.1)]"
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
            className="w-full bg-white/50 backdrop-blur-md border border-white/60 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-700 focus:outline-none focus:border-red-900/50 focus:bg-white/80 transition-all shadow-sm appearance-none cursor-pointer"
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
              className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 shadow-sm border ${activeCollege === college
                  ? "bg-red-900 text-white border-red-900 shadow-[0_8px_20px_rgba(127,29,29,0.25)] scale-105"
                  : "bg-white/50 backdrop-blur-md text-slate-600 border-white/60 hover:bg-white/80 hover:scale-105 hover:shadow-md"
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
              className="flex items-center gap-2 bg-white/50 backdrop-blur-md hover:bg-white/80 text-slate-700 hover:text-red-900 border border-white/60 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md"
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
              className="bg-white/50 backdrop-blur-md border border-white/60 text-slate-700 text-sm rounded-lg focus:ring-red-900 focus:border-red-900 block p-2 outline-none font-medium transition-all duration-300 cursor-pointer hover:bg-white/80 shadow-sm"
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
                {filteredCourses.map((course, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
                    transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5), ease: "easeOut" }}
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

      <BookmarksSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        bookmarkedIds={bookmarkedIds}
        onToggleBookmark={toggleBookmark}
      />

      <CompareFloatingBar
        compareIds={compareIds}
        onClear={() => setCompareIds([])}
        onCompare={() => setIsCompareModalOpen(true)}
      />

      <CompareModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        compareIds={compareIds}
        onToggleCompare={toggleCompare}
      />
    </section>
  );
}
