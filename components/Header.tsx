import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#fdfbf7]/80 backdrop-blur-md border-b border-stone-200/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Brand Name */}
        <a href="#" className="flex items-center group">
          <div className="relative">
            <img 
              src="/image.png" 
              alt="After Concept Logo" 
              className="transition-transform duration-300 ease-in-out group-hover:scale-110"
              style={{ width: '90px', height: '90px', objectFit: 'contain' }}
            />
          </div>
          <div className="flex items-center font-bold tracking-tight text-xl text-[#26215c]" style={{ marginLeft: '-15px' }}>
            <span>AFTER</span>
            <span className="text-transparent [-webkit-text-stroke:1px_#26215c] ml-0.5">CONCEPT</span>
          </div>
        </a>
        
        {/* Nav Link with Smooth Underline */}
        <div className="hidden md:flex items-center gap-8 font-medium text-stone-600" style={{ fontSize: '1rem' }}>
          <a 
            href="#case-studies" 
            className="relative transition-colors duration-300 group"
            style={{ color: '#57534e' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#26215c'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#57534e'}
          >
            Case Studies
            {/* Underline Effect */}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#26215c] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* CTA Button */}
        <a 
          href="#contact" 
          className="hidden sm:inline-flex items-center justify-center font-medium text-sm shadow-sm transition-all duration-200"
          style={{
            backgroundColor: '#e05638',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '12px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#26215c';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e05638';
            e.currentTarget.style.color = '#ffffff';
          }}
        >
          Get Started
        </a>

      </nav>
    </header>
  );
}