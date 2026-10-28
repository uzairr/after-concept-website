import React from 'react';

const stories = [
  {
    title: "MBC",
    image: "/images/project-mbc-success.jpg",
    link: "#"
  },
  {
    title: "LandDesign",
    image: "/images/project-landdesign-success.jpg",
    link: "#"
  },
  {
    title: "PriceWatch",
    image: "/images/project-pricewatch-success-v2.jpg",
    link: "#"
  },
  {
    title: "Internal Angular Project",
    image: "/images/case-studies/angular-project.png",
    link: "/success-stories/internal-angular-project"
  }
];

export default function SuccessStories() {
  return (
    <section className="w-full bg-[#11458A] py-10 lg:py-14 flex flex-col overflow-hidden box-border font-sans">
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col">
        
        <h2 className="text-white text-2xl sm:text-3xl lg:text-[2.25rem] font-bold mb-6 sm:mb-8 tracking-tight shrink-0">
          Our Success Stories, Creating Change For The Better
        </h2>
        
        <ul className="w-full !ml-0 !pl-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {stories.map((story, i) => (
            <li 
              key={i} 
              className={`flex flex-col bg-white w-full shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer h-auto ${
                i % 2 !== 0 ? 'lg:translate-y-4' : 'lg:-translate-y-2'
              }`}
            >
              <div className="relative w-full aspect-[5/4] overflow-hidden bg-gray-200 shrink-0">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-white px-5 py-4 sm:py-5 flex flex-col justify-center border-t border-gray-100 shrink-0">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-1">{story.title}</h3>
                <a href={story.link} className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors font-semibold text-xs uppercase tracking-wider">
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
        
      </div>
    </section>
  );
}

