"use client";

import React, { useState, useEffect, useRef } from 'react';

// Icons
const IconGeneric = () => (
  <svg className="w-5 h-5 text-[#0a76db] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const IconUser = () => (
  <svg className="w-5 h-5 text-[#0a76db] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconAward = () => (
  <svg className="w-5 h-5 text-[#0a76db] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const IconCode = () => (
  <svg className="w-5 h-5 text-[#0a76db] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const IconCloud = () => (
  <svg className="w-5 h-5 text-[#0a76db] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-5 h-5 text-[#0a76db] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconBriefcase = () => (
  <svg className="w-5 h-5 text-[#0a76db] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconHeart = () => (
  <svg className="w-5 h-5 text-[#0a76db] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const IconExternalLink = () => (
  <svg className="w-4 h-4 ml-auto text-[#0a76db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

type SubmenuItem = {
  title: string;
  description: string;
  href: string;
  icon: JSX.Element;
  isExternal?: boolean;
};

type NavCategory = {
  name: string;
  href: string;
  description: string;
  submenus: SubmenuItem[];
};

const navData: NavCategory[] = [
  {
    name: 'About',
    href: '#about',
    description: 'What After Concept is All About',
    submenus: [
      { title: 'Leadership', description: 'Guiding After Concept forward', href: '#', icon: <IconUser /> },
      { title: 'Open Source', description: 'Powered by Open Source', href: '#', icon: <IconCode />, isExternal: true },
      { title: 'Partners', description: 'Trusted partners across proven platforms', href: '#', icon: <IconCheck /> },
      { title: 'Testimonials', description: 'In the words of those we build with', href: '#', icon: <IconHeart /> },
      { title: 'Awards & Certificates', description: 'Recognized for quality & excellence', href: '#', icon: <IconAward /> },
      { title: 'Platform Expertise', description: 'Expertise that spans your stack', href: '#', icon: <IconCloud /> },
      { title: 'Venture Studio', description: 'We build for ourselves', href: '#', icon: <IconGeneric />, isExternal: true },
      { title: 'Careers', description: 'Explore open roles & life', href: '#', icon: <IconBriefcase />, isExternal: true }
    ]
  },
  {
    name: 'Services',
    href: '#services',
    description: 'Explore What We Offer',
    submenus: [
      { title: 'Web Development', description: 'Custom web applications', href: '#', icon: <IconCode /> },
      { title: 'Mobile App Development', description: 'iOS and Android solutions', href: '#', icon: <IconCode /> },
      { title: 'UI/UX Design', description: 'Intuitive and engaging designs', href: '#', icon: <IconHeart /> },
      { title: 'Cloud Computing', description: 'Scalable cloud architecture', href: '#', icon: <IconCloud /> },
      { title: 'DevOps', description: 'Streamlined deployment pipelines', href: '#', icon: <IconGeneric /> },
      { title: 'QA & Testing', description: 'Rigorous quality assurance', href: '#', icon: <IconCheck /> }
    ]
  },
  {
    name: 'Solutions',
    href: '#solutions',
    description: 'Targeted Industry Solutions',
    submenus: [
      { title: 'E-commerce', description: 'Digital storefronts and platforms', href: '#', icon: <IconBriefcase /> },
      { title: 'Fintech', description: 'Financial technology applications', href: '#', icon: <IconAward /> },
      { title: 'Healthcare', description: 'Medical and health solutions', href: '#', icon: <IconHeart /> },
      { title: 'Education', description: 'EdTech platforms and tools', href: '#', icon: <IconUser /> }
    ]
  },
  {
    name: 'Industries',
    href: '#industries',
    description: 'Sectors We Specialize In',
    submenus: [
      { title: 'Retail', description: 'Transforming retail experiences', href: '#', icon: <IconBriefcase /> },
      { title: 'Finance', description: 'Secure financial systems', href: '#', icon: <IconAward /> },
      { title: 'Healthcare', description: 'Innovative health solutions', href: '#', icon: <IconHeart /> },
      { title: 'Logistics', description: 'Supply chain management', href: '#', icon: <IconGeneric /> }
    ]
  },
  {
    name: 'Our Products',
    href: '#products',
    description: 'Software Built By Us',
    submenus: [
      { title: 'Product Alpha', description: 'Enterprise management tool', href: '#', icon: <IconCloud />, isExternal: true },
      { title: 'Product Beta', description: 'Analytics and reporting suite', href: '#', icon: <IconCode />, isExternal: true },
      { title: 'Product Gamma', description: 'Customer engagement platform', href: '#', icon: <IconHeart />, isExternal: true }
    ]
  },
  {
    name: 'Engagement Models',
    href: '#engagement-models',
    description: 'How We Collaborate',
    submenus: [
      { title: 'Dedicated Team', description: 'Your extended development team', href: '#', icon: <IconUser /> },
      { title: 'Fixed Price', description: 'Defined scope and budget', href: '#', icon: <IconAward /> },
      { title: 'Time & Material', description: 'Flexible ongoing development', href: '#', icon: <IconCheck /> }
    ]
  }
];

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledTop, setIsScrolledTop] = useState(true);

  // Mega menu states
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const headerCenterY = 40; // middle of the 80px header
      let overDarkSection = false;

      // Dark sections in this layout are the hero section and footer
      const darkElements = document.querySelectorAll('.hero, .hero-custom-container, footer');
      
      darkElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Check if the center of the header overlaps with the dark element
        if (rect.top <= headerCenterY && rect.bottom >= headerCenterY) {
          overDarkSection = true;
        }
      });

      setIsDark(overDarkSection);
      setIsScrolledTop(window.scrollY < 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeCategory = navData.find(cat => cat.name === activeMenu);

  return (
    <>
      <header ref={headerRef} onMouseLeave={() => setActiveMenu(null)} className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${activeMenu ? 'bg-white border-b border-gray-200' : (isScrolledTop ? 'bg-transparent border-transparent' : 'bg-[#060f1c] border-b border-[#1f3f66]')}`}>
        <nav className="w-full max-w-none px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between relative">
          
          {/* Logo & Brand Name (Left) */}
          <a href="#" className="flex items-center group">
            <div className="relative">
              <img 
                src="/image.png" 
                alt="After Concept Logo" 
                className={`transition-all duration-300 ease-in-out ${ (!activeMenu && (isDark || !isScrolledTop)) ? 'brightness-0 invert' : ''}`} 
                style={{ width: '110px', height: '110px', objectFit: 'contain' }}
              />
            </div>
            <div className={`flex items-center font-bold tracking-tight text-xl transition-colors duration-300 ${ (!activeMenu && (isDark || !isScrolledTop)) ? 'text-white' : 'text-[#26215c]'}`} style={{ marginLeft: '-32px' }}>
              <span>AFTER</span>
              <span className={`text-transparent ml-0.5 transition-colors duration-300 ${ (!activeMenu && (isDark || !isScrolledTop)) ? '[-webkit-text-stroke:1px_#ffffff]' : '[-webkit-text-stroke:1px_#26215c]'}`}>CONCEPT</span>
            </div>
          </a>
          
          {/* Right Side Group (Links + Button) */}
          <div className="flex items-center gap-6 lg:gap-10 h-full">
            {/* Desktop Nav Links */}
            <div className={`hidden lg:flex items-center h-full font-medium transition-colors duration-300 ${ (!activeMenu && (isDark || !isScrolledTop)) ? 'text-stone-300' : 'text-stone-600'}`} style={{ fontSize: '0.95rem' }}>
              {navData.map((item) => (
                <div 
                  key={item.name}
                  className="relative h-full flex items-center px-4 cursor-pointer"
                  onMouseEnter={() => setActiveMenu(item.name)}
                  onClick={() => setActiveMenu(activeMenu === item.name ? null : item.name)}
                >
                  <div 
                    className={`relative transition-colors duration-300 group whitespace-nowrap flex items-center gap-1 ${ (!activeMenu && (isDark || !isScrolledTop)) ? 'hover:text-white' : 'hover:text-[#26215c]'} ${activeMenu === item.name ? 'text-[#0a76db]' : ''}`}
                  >
                    {item.name}
                    <svg className={`w-4 h-4 transition-transform duration-300 ${activeMenu === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {/* Underline Effect */}
                    <span className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${activeMenu === item.name ? 'w-full' : 'w-0 group-hover:w-full'} ${ (!activeMenu && (isDark || !isScrolledTop)) ? 'bg-white' : 'bg-[#0a76db]'}`}></span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* CTA Button with Hover Effect */}
              <a 
                href="#contact" 
                className="hidden sm:inline-flex items-center justify-center font-medium text-sm shadow-sm"
                style={{
                  backgroundColor: '#0a76db',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#085ab3';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(10, 118, 219, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0a76db';
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                Contact Us
              </a>

              {/* Mobile Menu Button */}
              <button 
                className={`lg:hidden p-2 ${(!activeMenu && (isDark || !isScrolledTop)) ? 'text-white' : 'text-[#26215c]'}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mega Menu Dropdown */}
        <div 
          className={`hidden lg:block absolute left-0 w-full bg-white border-t border-b border-gray-200 shadow-2xl transition-all duration-300 origin-top overflow-hidden ${activeMenu ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}
          style={{ top: '100%', height: 'calc(100dvh - 200px)' }}
        >
          <div className="max-w-[1400px] mx-auto flex h-full">
            {/* Left Column: Categories */}
            <div className="w-[280px] shrink-0 border-r border-gray-200 py-4 px-4 bg-gray-50 overflow-y-auto">
              <div className="flex flex-col gap-1">
                {navData.map((category) => (
                  <button
                    key={category.name}
                    className={`text-left p-2 rounded-xl transition-all duration-200 group flex items-center justify-between ${activeMenu === category.name ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-gray-900'}`}
                    onMouseEnter={() => setActiveMenu(category.name)}
                    onClick={() => { window.location.href = category.href; setActiveMenu(null); }}
                  >
                    <div>
                      <div className="font-semibold text-sm">{category.name}</div>
                      <div className="text-xs mt-0.5 text-gray-500">
                        {category.description}
                      </div>
                    </div>
                    <svg className={`w-4 h-4 transition-transform text-[#0a76db] ${activeMenu === category.name ? 'translate-x-1' : 'group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Submenus Grid */}
            <div className="flex-1 p-8 py-8 overflow-y-auto bg-white">
              {activeCategory && (
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {activeCategory.submenus.map((sub, idx) => (
                    <a
                      key={idx}
                      href={sub.href}
                      className="group flex items-start gap-3 p-3 rounded-xl transition-all hover:bg-gray-200 border border-transparent w-full"
                      onClick={() => setActiveMenu(null)}
                    >
                      <div className="shrink-0 mt-0.5 p-1.5 rounded-lg bg-[#0a76db]/10 group-hover:bg-[#0a76db] transition-colors">
                        {sub.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 transition-colors flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {sub.title}
                            <svg className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#0a76db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                          {sub.isExternal && <IconExternalLink />}
                        </div>
                        <div className="text-gray-500 text-sm mt-1">
                          {sub.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#060f1c] border-b border-[#1f3f66] px-4 pt-2 pb-6 absolute top-full left-0 w-full shadow-lg max-h-[80vh] overflow-y-auto">
            {navData.map((item) => (
              <div key={item.name} className="border-b border-[#1f3f66]/50 last:border-0">
                <a
                  href={item.href}
                  className="block text-white py-4 text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
                <div className="pl-4 pb-2 flex flex-col gap-3">
                  {item.submenus.map((sub, idx) => (
                    <a
                      key={idx}
                      href={sub.href}
                      className="text-stone-400 hover:text-[#0a76db] text-sm flex items-center gap-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0a76db]/50"></span>
                      {sub.title}
                      {sub.isExternal && (
                        <svg className="w-3 h-3 ml-1 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <a
              href="#contact"
              className="block mt-6 text-center text-white bg-[#0a76db] hover:bg-[#085ab3] rounded-lg py-3 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        )}
      </header>
    </>
  );
}
