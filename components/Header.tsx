"use client";

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledTop, setIsScrolledTop] = useState(true);

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

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Industries', href: '#industries' },
    { name: 'Our Products', href: '#products' },
    { name: 'Engagement Models', href: '#engagement-models' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolledTop ? 'bg-transparent border-transparent' : 'bg-[#060f1c] border-b border-[#1f3f66]'}`}>
        <nav className="w-full max-w-none px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between">
          
          {/* Logo & Brand Name (Left) */}
          <a href="#" className="flex items-center group">
            <div className="relative">
              <img 
                src="/image.png" 
                alt="After Concept Logo" 
                className={`transition-all duration-300 ease-in-out ${ (isDark || !isScrolledTop) ? 'brightness-0 invert' : ''}`} 
                style={{ width: '110px', height: '110px', objectFit: 'contain' }}
              />
            </div>
            <div className={`flex items-center font-bold tracking-tight text-xl transition-colors duration-300 ${ (isDark || !isScrolledTop) ? 'text-white' : 'text-[#26215c]'}`} style={{ marginLeft: '-32px' }}>
              <span>AFTER</span>
              <span className={`text-transparent ml-0.5 transition-colors duration-300 ${ (isDark || !isScrolledTop) ? '[-webkit-text-stroke:1px_#ffffff]' : '[-webkit-text-stroke:1px_#26215c]'}`}>CONCEPT</span>
            </div>
          </a>
          
          {/* Right Side Group (Links + Button) */}
          <div className="flex items-center gap-6 lg:gap-10">
            {/* Desktop Nav Links */}
            <div className={`hidden lg:flex items-center gap-8 font-medium transition-colors duration-300 ${ (isDark || !isScrolledTop) ? 'text-stone-300' : 'text-stone-600'}`} style={{ fontSize: '0.95rem' }}>
              {navLinks.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className={`relative transition-colors duration-300 group whitespace-nowrap ${ (isDark || !isScrolledTop) ? 'hover:text-white' : 'hover:text-[#26215c]'}`}
                >
                  {item.name}
                  {/* Underline Effect */}
                  <span className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${ (isDark || !isScrolledTop) ? 'bg-white' : 'bg-[#26215c]'}`}></span>
                </a>
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
                className="lg:hidden text-white p-2"
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

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#060f1c] border-b border-[#1f3f66] px-4 pt-2 pb-6 space-y-2 absolute top-full left-0 w-full shadow-lg">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-stone-300 hover:text-white py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 text-center text-white bg-[#0a76db] hover:bg-[#085ab3] rounded-lg py-3 font-medium transition-colors"
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