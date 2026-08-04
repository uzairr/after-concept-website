'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#work' },
  { name: 'Work with us', href: '/#ladder' },
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const underlineRef = useRef<HTMLDivElement>(null);

  // Scroll Behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // ScrollSpy
  useEffect(() => {
    const intersectingSections: Record<string, number> = {};
    
    const observer = new IntersectionObserver(
      (entries) => {
        let hasChanges = false;
        entries.forEach((entry) => {
          const key = entry.target.id || (entry.target.classList.contains('hero') ? 'hero' : '');
          if (key) {
            intersectingSections[key] = entry.intersectionRatio;
            hasChanges = true;
          }
        });

        if (!hasChanges) return;

        let maxRatio = 0;
        let maxId = '';
        for (const [id, ratio] of Object.entries(intersectingSections)) {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id;
          }
        }

        if (maxRatio > 0.1) {
          if (maxId === 'hero') {
            setActiveHash('');
          } else {
            setActiveHash(`/#${maxId}`);
          }
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i * 0.1),
        rootMargin: '-20% 0px -40% 0px', // Trigger slightly earlier
      }
    );

    // Initial check for hash in URL
    const hash = window.location.hash;
    if (hash && NAV_LINKS.some(l => l.href === `/${hash}` || l.href === hash)) {
      setActiveHash(hash.startsWith('/') ? hash : `/${hash}`);
    }

    NAV_LINKS.forEach((link) => {
      const id = link.href.split('#')[1];
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    
    const heroEl = document.querySelector('.hero');
    if (heroEl) observer.observe(heroEl);

    return () => observer.disconnect();
  }, []);

  // Handle Underline Animation
  useEffect(() => {
    const targetHash = activeHash;
    const targetEl = navRefs.current[targetHash];
    const underlineEl = underlineRef.current;
    
    if (!underlineEl) return;

    if (targetEl) {
      const isCurrentlyHidden = underlineEl.style.opacity === '0' || underlineEl.style.opacity === '';
      
      if (isCurrentlyHidden) {
        // Snap to starting position instantly
        underlineEl.style.transition = 'none';
        underlineEl.style.left = `${targetEl.offsetLeft + 16}px`;
        underlineEl.style.width = '0px';
        
        // Force reflow
        void underlineEl.offsetWidth;
      }
      
      // Animate to final position
      underlineEl.style.transition = 'left 300ms ease, width 300ms ease, opacity 250ms ease';
      underlineEl.style.left = `${targetEl.offsetLeft + 16}px`;
      underlineEl.style.width = `${targetEl.offsetWidth - 32}px`;
      underlineEl.style.opacity = '1';
    } else {
      // Hide underline smoothly
      underlineEl.style.transition = 'opacity 250ms ease';
      underlineEl.style.opacity = '0';
    }
  }, [activeHash, isScrolled]);

  // Debounced resize handler for underline
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const targetHash = activeHash;
        const targetEl = navRefs.current[targetHash];
        const underlineEl = underlineRef.current;
        if (targetEl && underlineEl) {
          underlineEl.style.transition = 'none';
          underlineEl.style.left = `${targetEl.offsetLeft + 16}px`;
          underlineEl.style.width = `${targetEl.offsetWidth - 32}px`;
          void underlineEl.offsetWidth;
          underlineEl.style.transition = 'left 300ms ease, width 300ms ease, opacity 250ms ease';
        }
      }, 50);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [activeHash]);

  return (
    <header 
      className={`sticky top-0 inset-x-0 w-full z-50 transition-[padding,background-color,backdrop-filter,box-shadow] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isScrolled 
          ? 'py-1 bg-cream/90 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border-b border-line' 
          : 'py-2 bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-8 max-w-[1160px] mx-auto relative z-20">
        <Link href="/" className="logo large font-space font-semibold text-xl tracking-tight flex items-center group outline-none focus-visible:ring-2 focus-visible:ring-indigo-900 rounded-sm">
          <span className="text-indigo-900">after</span>
          <span className="concept-outline text-transparent">concept</span>
        </Link>
        
        <div className="hidden md:flex items-center relative">
          <div className="flex gap-4 text-[14.5px] relative">
            {NAV_LINKS.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  ref={(el) => {
                    navRefs.current[link.href] = el;
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-indigo-900 rounded-md font-medium group transition-colors duration-300 ease-out hover:text-indigo-900 ${isActive ? 'text-indigo-900' : 'text-charcoal-soft'}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                  {/* Hover Underline */}
                  {!isActive && (
                    <span 
                      className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-charcoal-soft rounded-full origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"
                    />
                  )}
                </Link>
              );
            })}
            
            {/* Shared Active Underline */}
            <div 
              ref={underlineRef}
              className="absolute bottom-1 left-0 h-[1.5px] bg-charcoal-soft rounded-full pointer-events-none"
              style={{ opacity: 0 }}
            />
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link 
            href="/#contact" 
            className="bg-ember-600 text-ember-100 px-5 py-2.5 rounded-lg text-[14.5px] font-semibold transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-indigo-900 hover:-translate-y-px outline-none focus-visible:ring-2 focus-visible:ring-indigo-900 focus-visible:ring-offset-2 focus-visible:ring-offset-cream inline-block relative overflow-hidden hover-shine"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-900 rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`block w-6 h-[2px] bg-indigo-900 rounded-full transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] origin-center ${isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : '-translate-y-1'}`}></span>
          <span className={`block w-6 h-[2px] bg-indigo-900 rounded-full transition-opacity duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-[2px] bg-indigo-900 rounded-full transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] origin-center ${isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : 'translate-y-1'}`}></span>
        </button>
      </nav>

      {/* Mobile Nav Drawer */}
      <div 
        className={`fixed inset-0 bg-cream/95 backdrop-blur-md z-10 flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-2xl font-medium w-full px-8">
          {NAV_LINKS.map((link, i) => {
            const isActive = activeHash === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col items-center group outline-none focus-visible:ring-2 focus-visible:ring-indigo-900 rounded-md p-2 hover:text-indigo-900 ${isActive ? 'text-indigo-900' : 'text-charcoal-soft'}`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${100 + i * 50}ms` : '0ms',
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
              >
                {link.name}
                <div 
                  className={`h-[1.5px] bg-charcoal-soft rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] mt-1.5 ${
                    isActive ? 'w-12 opacity-100' : 'w-0 opacity-0 group-hover:w-6 group-hover:opacity-50'
                  }`}
                />
              </Link>
            );
          })}
          
          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mt-4 bg-ember-600 text-ember-100 px-8 py-3.5 rounded-lg text-lg font-semibold transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] w-full max-w-[200px] text-center outline-none focus-visible:ring-2 focus-visible:ring-indigo-900 focus-visible:ring-offset-2 focus-visible:ring-offset-cream relative overflow-hidden hover-shine`}
            style={{
              transitionDelay: isMobileMenuOpen ? `${100 + NAV_LINKS.length * 50}ms` : '0ms',
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isMobileMenuOpen ? 1 : 0
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
