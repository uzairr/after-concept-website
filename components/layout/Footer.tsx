"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { useResolvedTheme } from "@/lib/useResolvedTheme";
import { agency, social } from "@/lib/siteContent";

export default function Footer() {
  const resolvedTheme = useResolvedTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <div className="relative md:sticky bottom-0 left-0 w-full z-0 bg-base transition-colors duration-300">
      <footer className="w-full px-6 pb-6 pt-8 md:px-12 md:pb-12 md:pt-24">
        <div className="mx-auto w-full max-w-[1400px] rounded-[32px] md:rounded-[40px] border border-line bg-theme-surface px-4 py-6 md:px-10 md:py-10 shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-colors duration-300">
        
        {/* Footer Top Content */}
        <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:justify-between md:mb-8 md:gap-10">
          
          {/* Brand & Socials (Left Column) */}
          <div className="flex flex-col gap-4 lg:max-w-sm md:gap-6">
            <div className="flex items-center gap-3">
              <Image
                src={isDark ? "/images/brand/AC_LogoWhite.svg" : "/images/brand/AC_LogoBlack.svg"}
                alt="After Concept Logo"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <span className="font-display text-base md:text-[20px] font-bold tracking-wide text-foreground">
                AFTER CONCEPT
              </span>
            </div>
            
            <p className="font-sans text-sm md:text-[17px] leading-relaxed text-secondary transition-colors duration-300">
              Production-ready products for founders with validated ideas. We embed as your technical co-pilot—making your vision easier to build, launch, and scale.
            </p>

            {/* Mission Highlight */}
            <div className="flex items-start gap-3 border-l-2 border-accent pl-4 text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mt-1 h-[14px] w-[14px] shrink-0">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <p className="font-sans text-sm md:text-[16px] font-medium leading-snug">
                You focus on vision. We bring the<br />product to life.
              </p>
            </div>
            
            {/* Social Icons (Moved under description per screenshot) */}
            <div className="mt-2 flex gap-4">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-2 text-muted transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#0077b5] hover:text-white hover:shadow-lg"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-2 text-muted transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 hover:text-white hover:shadow-lg"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-2 text-muted transition-all duration-300 ease-in-out hover:scale-110 hover:bg-blue-600 hover:text-white hover:shadow-lg"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Links Grid (Right Columns) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-20">
            {/* 1. Quick Links */}
            <FooterColumn
              title="Quick Links"
              links={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Work", href: "/work" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ]}
            />

            {/* 2. Services */}
            <FooterColumn
              title="Services"
              links={[
                { name: "Custom Software", href: "/services" },
                { name: "AI Integrations", href: "/services" },
                { name: "Product Design", href: "/services" },
                { name: "Growth Eng", href: "/services" },
              ]}
            />

            {/* 3. Connect (Converted to match link style) */}
            <div>
              <h3 className="mb-5 flex h-8 items-center text-[17px] font-bold text-foreground transition-colors duration-300">
                Connect
              </h3>
              <ul className="flex flex-col gap-4 text-[16px] text-muted">
                <li>
                  <a href={agency.emailHref} className="transition-colors hover:text-foreground">
                    {agency.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  Pakistan — Global
                </li>
                <li className="flex items-center gap-2">
                  9am – 5pm (UTC)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col flex-wrap items-center justify-between gap-6 border-t border-line pt-6 md:flex-row transition-colors duration-300">
          <p className="text-[14.5px] text-muted transition-colors duration-300">
            © {new Date().getFullYear()} After Concept. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:justify-end text-[14.5px] font-medium text-muted">
            <Link href="/privacy" className="underline-offset-4 transition-colors hover:text-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="underline-offset-4 transition-colors hover:text-foreground hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-3 md:mb-5 flex h-8 items-center text-sm md:text-[17px] font-bold text-foreground transition-colors duration-300">
        {title}
      </h3>
      <ul className="flex flex-col gap-2 md:gap-4 text-sm md:text-[16px]">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="text-xs md:text-[14px] text-muted transition-colors duration-200 hover:text-foreground"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}