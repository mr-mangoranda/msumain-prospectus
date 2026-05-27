import { Course } from "@/lib/data";
import { Clock, Briefcase, GraduationCap, Download, Bookmark, BookmarkCheck, GitCompare } from "lucide-react";

export function CourseCard({ 
  course, 
  isBookmarked, 
  onToggleBookmark,
  isCompared,
  onToggleCompare
}: { 
  course: Course;
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
  isCompared?: boolean;
  onToggleCompare?: () => void;
}) {
  const colorMap = {
    maroon: {
      badge: "bg-red-900 text-white",
      bgTint: "bg-red-50/50",
      accent: "text-red-900",
      polygon: "stroke-red-200",
    },
    blue: {
      badge: "bg-blue-600 text-white",
      bgTint: "bg-blue-50/50",
      accent: "text-blue-500",
      polygon: "stroke-blue-200",
    },
    orange: {
      badge: "bg-orange-500 text-white",
      bgTint: "bg-orange-50/50",
      accent: "text-orange-500",
      polygon: "stroke-orange-200",
    },
    purple: {
      badge: "bg-purple-500 text-white",
      bgTint: "bg-purple-50/50",
      accent: "text-purple-500",
      polygon: "stroke-purple-200",
    },
    yellow: {
      badge: "bg-yellow-500 text-white",
      bgTint: "bg-yellow-50/50",
      accent: "text-yellow-500",
      polygon: "stroke-yellow-200",
    },
    green: {
      badge: "bg-emerald-500 text-white",
      bgTint: "bg-emerald-50/50",
      accent: "text-emerald-500",
      polygon: "stroke-emerald-200",
    },
    pink: {
      badge: "bg-pink-500 text-white",
      bgTint: "bg-pink-50/50",
      accent: "text-pink-500",
      polygon: "stroke-pink-200",
    },
  };

  const scheme = colorMap[course.colorScheme];

  return (
    <div className="group relative bg-white/60 backdrop-blur-xl rounded-2xl md:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex flex-col overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgb(127,29,29,0.08)] hover:-translate-y-2 hover:bg-white/80 h-full">
      {/* Background Tint at top */}
      <div className={`absolute top-0 right-0 w-full h-32 lg:h-48 ${scheme.bgTint} rounded-b-[2rem] lg:rounded-b-[4rem] z-0 opacity-80 transition-all duration-500 group-hover:h-36 lg:group-hover:h-52`} />
      
      {/* Background Hexagon Graphic */}
      <svg 
        viewBox="0 0 100 100" 
        className={`absolute top-2 right-2 w-24 h-24 lg:w-32 lg:h-32 fill-transparent ${scheme.polygon} z-0 opacity-60 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <polygon points="50 3 93 25 93 75 50 97 7 75 7 25" />
        <polygon points="50 12 80 29 80 68 50 85 20 68 20 29" strokeOpacity="0.4" />
      </svg>

      {/* Top Right Actions */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        {/* Compare Button */}
        {onToggleCompare && (
          <button 
            onClick={onToggleCompare}
            className={`p-2.5 rounded-full shadow-sm backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-900/20 hover:scale-110 hover:-translate-y-1 cursor-pointer ${isCompared ? 'bg-red-900 text-white shadow-[0_0_15px_rgba(127,29,29,0.5)]' : 'bg-white/70 hover:bg-white text-slate-500 hover:text-slate-700'}`}
            aria-label={isCompared ? "Remove from comparison" : "Add to comparison"}
            title={isCompared ? "Remove from comparison" : "Add to comparison"}
          >
            <GitCompare className="w-5 h-5" />
          </button>
        )}

        {/* Bookmark Button */}
        {onToggleBookmark && (
          <button 
            onClick={onToggleBookmark}
            className="p-2.5 rounded-full bg-white/70 hover:bg-white shadow-sm backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-900/20 hover:scale-110 hover:-translate-y-1 cursor-pointer"
            aria-label={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
            title={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
          >
            {isBookmarked ? (
              <BookmarkCheck className={`w-5 h-5 ${scheme.accent}`} />
            ) : (
              <Bookmark className="w-5 h-5 text-slate-500 hover:text-slate-700" />
            )}
          </button>
        )}
      </div>

      <div className="p-6 pb-4 sm:p-5 lg:p-8 lg:pb-5 flex-1 relative z-10 flex flex-col">
        {/* Header Ribbon */}
        <div className="mb-4">
          <span className={`inline-flex items-center px-3 py-1 lg:px-4 lg:py-1.5 rounded-full text-[11px] lg:text-xs font-bold tracking-wide ${scheme.badge}`}>
            {course.code}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="font-heading font-bold text-xl sm:text-lg lg:text-2xl text-slate-900 leading-tight mb-3 lg:mb-4 tracking-tight">
          {course.name}
        </h3>
        <p className="text-slate-500 text-[15px] sm:text-sm lg:text-[15px] leading-relaxed mb-5 lg:mb-6 font-medium line-clamp-3">
          {course.description}
        </p>

        <div className="flex-1 mt-auto">
          {/* Divider */}
          <div className="w-full h-[1px] bg-slate-100/80 mb-5 lg:mb-6 group-hover:bg-slate-200 transition-colors"></div>

          {/* Meta Details */}
          <ul className="space-y-4 sm:space-y-3 lg:space-y-4">
            <li className="flex items-start gap-4 sm:gap-3 lg:gap-4">
              <div className={`mt-[1px] w-5 sm:w-4 lg:w-5 flex justify-center ${scheme.accent}`}>
                <GraduationCap className="w-5 h-5 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-[9px] lg:text-[10px] uppercase tracking-[0.1em] font-bold text-slate-400 mb-0.5">College</span>
                <span className="text-[13px] font-semibold text-slate-700 leading-tight">{course.college}</span>
              </div>
            </li>

            <li className="flex items-start gap-4 sm:gap-3 lg:gap-4">
              <div className={`mt-[1px] w-5 sm:w-4 lg:w-5 flex justify-center ${scheme.accent}`}>
                <Clock className="w-5 h-5 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-[9px] lg:text-[10px] uppercase tracking-[0.1em] font-bold text-slate-400 mb-0.5">Duration</span>
                <span className="text-[13px] font-semibold text-slate-700">{course.duration}</span>
              </div>
            </li>

            <li className="flex items-start gap-4 sm:gap-3 lg:gap-4">
              <div className={`mt-[1px] w-5 sm:w-4 lg:w-5 flex justify-center ${scheme.accent}`}>
                <Briefcase className="w-5 h-5 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-[9px] lg:text-[10px] uppercase tracking-[0.1em] font-bold text-slate-400 mb-0.5">Careers</span>
                <span className="text-[13px] font-semibold text-slate-700 leading-tight line-clamp-2 md:line-clamp-none">{course.careers}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Action Footer for Prospectus Download feature */}
      <div className="px-6 pb-6 pt-2 sm:px-5 sm:pb-5 lg:px-8 lg:pb-6 lg:pt-2 z-10 mt-1">
        <a 
          href={`/pdfs/${course.pdfFileName}`}
          download={course.pdfFileName}
          className={`w-full py-3 sm:py-2.5 lg:py-3 flex items-center justify-center gap-2 rounded-xl sm:rounded-lg lg:rounded-xl bg-white/50 backdrop-blur-sm text-slate-600 font-semibold text-sm transition-all duration-300 shadow-sm border border-white/60 
            hover:text-white hover:shadow-lg group-hover:border-transparent ${colorMap[course.colorScheme].badge.split(' ')[0].replace('bg-', 'hover:bg-')}
          `}
        >
          <Download className="w-4 h-4" />
          <span>Download Prospectus</span>
        </a>
      </div>
    </div>
  );
}
