import React from "react";

const testimonials = [
  {
    name: "Ed Zarecor",
    role: "Director of Engineering",
    companyLogo: "edX",
    quote: "Arbisoft has been a valued partner to edX since 2013. We work with their engineers day in and day out to advance the Open edX platform and support our learners across the world.",
    image: "/section2.png" 
  },
  {
    name: "Miki Goyal",
    role: "VP Of Engineering",
    companyLogo: "Reify HEALTH",
    quote: "Working with this team has dramatically improved our product delivery timeline and quality.",
    image: "/section2.png"
  },
  {
    name: "Jake Peters",
    role: "CEO & Co-Founder",
    companyLogo: "payperks",
    quote: "An incredible experience from start to finish. They truly understand our business needs.",
    image: "/section2.png"
  },
  {
    name: "Jane Doe",
    role: "Product Manager",
    companyLogo: "TechCorp",
    quote: "The best engineering partner we have ever worked with. Highly recommended for any complex project.",
    image: "/section2.png"
  }
];

export default function TestimonialsCarousel() {
  return (
    <section className="w-full bg-white py-10 lg:py-14 border-b border-gray-200 relative overflow-hidden font-sans">
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative">
        <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-black tracking-tight mb-6 sm:mb-8 text-left">
          In The Words of Those We Build With
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="relative bg-[#0b1221] border border-[#1e293b] hover:border-[#2563eb] hover:bg-[#0f192e] flex flex-col justify-between p-6 sm:p-7 rounded-[4px] shadow-sm hover:shadow-md transition-all duration-300 group aspect-[3/4] w-full cursor-default"
            >
              {/* Top: Quote Icon & Company Logo */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <svg 
                  className="w-8 h-8 text-[#2563eb]/70 group-hover:text-[#2563eb] transition-colors" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <span className="text-xs sm:text-sm font-bold tracking-tight text-white/80 group-hover:text-white transition-colors">
                  {t.companyLogo}
                </span>
              </div>

              {/* Middle: Testimonial Quote */}
              <div className="flex-1 flex items-center py-2">
                <p className="text-xs sm:text-[13.5px] leading-relaxed text-gray-200 line-clamp-6 m-0 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Bottom: Author Info */}
              <div className="pt-4 border-t border-white/10 mt-auto">
                <div className="text-sm sm:text-[15px] font-bold text-white mb-0.5 truncate leading-tight">
                  {t.name}
                </div>
                <div className="text-[11px] sm:text-xs text-gray-400 truncate leading-tight">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

