import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#040C18] text-white pt-20 pb-8 px-6 md:px-12 lg:px-[50px] min-[2500px]:px-[590px]">
      <div className="w-full mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 mb-20">
          
          {/* Left: Brand and Headline */}
          <div className="lg:w-[45%] xl:w-[40%]">
            {/* Logo */}
            <div className="flex items-center font-bold tracking-tight text-3xl text-white mb-6">
              <span>AFTER</span>
              <span className="text-transparent ml-0.5 [-webkit-text-stroke:1px_#ffffff]">CONCEPT</span>
            </div>
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl xl:text-[44px] font-semibold leading-tight text-white mt-8">
              If You Can <span className="text-[#0a76db]">Imagine</span><br />
              It, We Can <span className="text-[#0a76db]">Build</span> It
                        </h2>
            
            {/* Office Info */}
            <div className="mt-12 flex flex-col">
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Our Office</h4>
              <p className="text-base font-bold text-gray-200 mb-2">Bahawalpur, Pakistan</p>
              <div className="flex items-start gap-2 text-sm text-gray-400 max-w-[280px]">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#0a76db]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <a href="https://www.google.com/maps/search/?api=1&query=htc+toop+chowk,+Bahawalpur+Cantt,+Bahawalpur,+63100" target="_blank" rel="noopener noreferrer" className="leading-relaxed hover:text-[#0a76db] transition-colors cursor-pointer">htc toop chowk, Bahawalpur Cantt, Bahawalpur, 63100</a>
              </div>
            </div>
          </div>

          {/* Right: Links Columns */}
          <div className="lg:w-[50%] flex flex-wrap sm:flex-nowrap gap-10 sm:gap-8 justify-between lg:justify-end xl:gap-20">
            
            {/* Capabilities */}
            <div className="flex flex-col min-w-[140px]">
              <h4 className="text-[15px] font-bold text-white mb-5">Our Capabilities</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Stack Modernization</Link></li>
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">New Product Development</Link></li>
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Managed Services</Link></li>
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">AI Gateways</Link></li>
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Enterprise AI</Link></li>
              </ul>
            </div>

            {/* Partners */}
            <div className="flex flex-col min-w-[120px]">
              <h4 className="text-[15px] font-bold text-white mb-5">Partners</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Open Edx</Link></li>
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Totara</Link></li>
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Databricks</Link></li>
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Odoo</Link></li>
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Salesforce</Link></li>
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Oracle</Link></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col min-w-[120px]">
              <h4 className="text-[15px] font-bold text-white mb-5">Useful Links</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact us</Link></li>
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Culture</Link></li>
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Success Stories</Link></li>
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Insights</Link></li>
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Sitemap</Link></li>
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Open Positions</Link></li>
                <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Media Inquiry</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Contact Email & Socials */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
          <a href="mailto:contact@afterconcept.io" className="flex items-center gap-2 text-sm text-white hover:text-[#0a76db] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            contact@afterconcept.io
          </a>
          
          <div className="flex items-center gap-4">
            {/* FB */}
            <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            {/* IN */}
            <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
            </a>
            {/* IG */}
            <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" /></svg>
            </a>
            {/* YT */}
            <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            {/* X */}
            <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div className="space-x-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">Security Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
          <span>© 2026 AfterConcept. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}