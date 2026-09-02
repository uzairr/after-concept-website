"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <img
              src="/image.png"
              alt="After Concept Logo"
              className="transition-transform duration-300 ease-in-out group-hover:scale-110 brightness-0 invert"
             style={{ width: "60px", height: "35px", objectFit: "contain" }}
            />
          </div>
          <div
            className="flex items-center font-bold tracking-tight text-xl text-white"
           style={{ marginLeft: "-14px" }}
          >
            <span>AFTER</span>
            <span className="text-transparent [-webkit-text-stroke:1px_#ffffff] ml-0.5">
              CONCEPT
            </span>
          </div>
        </Link>

        {/* Nav Link */}
        <div
          className="hidden md:flex items-center gap-8 font-medium text-stone-300"
          style={{ fontSize: "1rem" }}
        >
          <Link
            href="/case-studies"
            className="relative transition-colors duration-300 group text-stone-300 hover:text-white"
          >
            Case Studies
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center justify-center font-semibold text-sm shadow-sm"
          style={{
            backgroundColor: "#ff7247",
            color: "#ffffff",
            padding: "11px 26px",
            borderRadius: "9999px",
            transition: "all 0.25s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#e85f35";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ff7247";
            e.currentTarget.style.transform = "";
          }}
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
