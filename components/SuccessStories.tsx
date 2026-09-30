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
    title: "Travly", // Dummy project
    image: "https://placehold.co/600x600/e2e8f0/1e293b?text=Travly",
    link: "#"
  }
];

export default function SuccessStories() {
  return (
    <section className="w-full h-auto lg:h-[calc(100vh-80px)] bg-[#11458A] py-12 lg:py-16 flex flex-col overflow-hidden box-border !px-6 lg:!px-[50px] min-[2500px]:!px-[590px]">
      <div className="w-full flex flex-col  min-h-0">
        
        <h2 className="text-white text-3xl md:text-[2.75rem] font-bold mb-[95px] tracking-tight shrink-0">
          Our Success Stories, Creating Change For The Better
        </h2>
        
        {/* min-h-0 ensures this flex child can shrink to fit 100vh. content-center perfectly centers the grid track. */}
        <ul className="w-full !ml-0 !pl-0 flex-1 min-h-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 content-center">
          {stories.map((story, i) => (
            <li 
              key={i} 
              className={`flex flex-col bg-white w-full shadow-lg hover:shadow-xl transition-all group cursor-pointer 
                h-auto 
                ${i % 2 !== 0 ? 'lg:translate-y-[35px]' : 'lg:-translate-y-[35px]'}`}
            >
              <div className="relative w-full aspect-[5/4] overflow-hidden bg-gray-200 shrink-0">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-white px-6 py-6 flex flex-col justify-center border-t border-gray-100 shrink-0">
                <h3 className="text-xl font-bold text-black mb-1">{story.title}</h3>
                <a href={story.link} className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors font-medium text-xs uppercase tracking-wider">
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

