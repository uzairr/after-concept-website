"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';          // ← Added this
import Link from 'next/link';
import {
  FaBolt, FaCode, FaMicrochip,
  FaPencilAlt, FaChartLine, FaBuilding,
  FaBrain, FaUniversity, FaEnvelope,
  FaMapMarkerAlt, FaClock,
  FaInstagram, FaFacebook, FaLinkedinIn
} from 'react-icons/fa';

export default function Footer() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
    check();
    setMounted(true);
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className={`
        border-t py-16 px-6 transition-colors duration-500
        ${isDark
          ? 'bg-[#061529] border-[#1e3a5f] text-white'
          : 'bg-slate-50 border-slate-200 text-slate-900'}
      `}
      style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.3s ease' }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

          {/* Brand Column */}
          <div className="footer-brand flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/* 
                LOGO PLACEHOLDER:
                Replace the src below with your own image URL or import.
              */}
              <Image
                src={isDark ? '/images/brand/AC_LogoWhite.svg' : '/images/brand/AC_LogoBlack.svg'}
                alt="After Concept Logo"
                className="h-10 w-auto object-contain"
                width={160}
                height={40}
                unoptimized
                priority
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className={`text-xl font-bold tracking-tighter transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                AFTER CONCEPT
              </span>
            </div>
            <p className={`text-sm leading-6 transition-colors duration-500 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Production‑ready products for founders with validated ideas. We embed as your technical co-pilot.
            </p>
            <div className="text-blue-500 border-l-2 border-blue-500 pl-3 text-xs font-medium">
              <FaBolt className="inline mr-1" /> You focus on vision. We bring the product to life.
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn
            title="Quick Links"
            isDark={isDark}
            links={[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Work', href: '/work' },
              { name: 'Contact', href: '/contact' },
            ]}
          />

          {/* Services */}
          <FooterColumn
            title="Services"
            isDark={isDark}
            links={[
              { name: 'Custom Software', href: '#', icon: <FaCode /> },
              { name: 'AI Integrations', href: '#', icon: <FaMicrochip /> },
              { name: 'Product Design', href: '#', icon: <FaPencilAlt /> },
              { name: 'Growth Eng', href: '#', icon: <FaChartLine /> },
            ]}
          />

          {/* Recent Work */}
          <FooterColumn
            title="Recent Work"
            isDark={isDark}
            links={[
              { name: 'Land Design', href: '#', icon: <FaBuilding /> },
              { name: 'EVT SaaS', href: '#', icon: <FaBrain /> },
              { name: 'Bultra Bank', href: '#', icon: <FaUniversity /> },
            ]}
          />

          {/* Connect */}
          <div>
            <h3 className={`text-sm font-bold uppercase tracking-wider mb-5 transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Connect
            </h3>
            <div className={`flex flex-col gap-3 text-sm transition-colors duration-500 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <a
                href="mailto:afterconcept786@gmail.com"
                className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors duration-300"
              >
                <FaEnvelope /> contact@afterconcept.io
              </a>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt /> Pakistan — Global
              </div>
              <div className="flex items-center gap-2">
                <FaClock /> Response within 24h
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/afterrconcept"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`
                  w-9 h-9 rounded-xl flex items-center justify-center
                  transition-all duration-300 ease-in-out
                  hover:scale-110 hover:bg-[#0077b5] hover:text-white hover:shadow-lg
                  ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-600'}
                `}
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`
                  w-9 h-9 rounded-xl flex items-center justify-center
                  transition-all duration-300 ease-in-out
                  hover:scale-110 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 hover:text-white hover:shadow-lg
                  ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-600'}
                `}
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={`
                  w-9 h-9 rounded-xl flex items-center justify-center
                  transition-all duration-300 ease-in-out
                  hover:scale-110 hover:bg-blue-600 hover:text-white hover:shadow-lg
                  ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-600'}
                `}
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`
          flex flex-col md:flex-row justify-between items-center pt-8
          border-t gap-4 text-xs transition-colors duration-500
          ${isDark ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-400'}
        `}>
          <span>© 2026 After Concept · All rights reserved</span>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className={`transition-colors duration-300 hover:text-blue-500 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className={`transition-colors duration-300 hover:text-blue-500 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  isDark,
}: {
  title: string;
  links: { name: string; href: string; icon?: React.ReactNode }[];
  isDark: boolean;
}) {
  return (
    <div>
      <h3 className={`text-sm font-bold uppercase tracking-wider mb-5 transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className={`
                group text-sm flex items-center gap-2
                transition-all duration-300 ease-in-out
                hover:text-blue-500 hover:translate-x-1
                ${isDark ? 'text-slate-400' : 'text-slate-500'}
              `}
            >
              {link.icon && (
                <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {link.icon}
                </span>
              )}
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}