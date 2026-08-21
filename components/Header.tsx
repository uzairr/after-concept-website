"use client";

import React from "react";
import Link from "next/link"; // Client-side routing ke liye import

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
              style={{ width: "90px", height: "90px", objectFit: "contain" }}
            />
          </div>
          <div
            className="flex items-center font-bold tracking-tight text-xl text-white"
            style={{ marginLeft: "-26px" }}
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
          <a
            href="#case-studies"
            className="relative transition-colors duration-300 group text-stone-300 hover:text-white"
          >
            Case Studies
            {/* Underline Effect */}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center justify-center font-medium text-sm shadow-sm"
          style={{
            backgroundColor: "#e05638",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "12px",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#c8481d";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 6px 24px rgba(224, 86, 40, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#e05638";
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
