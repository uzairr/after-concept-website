import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-indigo-300 pt-16 pb-8 px-8">
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-11">
        <div>
          {/* Logo Badge + Updated Company Name */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 transition-transform hover:scale-105"
          >
            <span className="bg-white text-[#2e2a5e] text-sm font-bold w-9 h-9 rounded-lg flex items-center justify-center leading-none tracking-tight shadow-sm">
              ac
            </span>

            {/* Same Logo Text Style as Header */}
            <span className="text-xl font-bold tracking-tight text-white flex items-center">
              <span>after</span>
              <span
                style={{
                  WebkitTextStroke: "1px #ffffff",
                  color: "transparent",
                }}
              >
                concept
              </span>
            </span>
          </Link>

          <p className="text-white text-[15px] font-medium mt-4 max-w-[280px]">
            Every concept deserves an after.
          </p>
          <p className="text-indigo-300 text-sm max-w-[300px] mt-4 leading-relaxed">
            Production-ready digital products for founders. Your technical
            co-pilot from vision to launch. Proudly part of Pakistan&apos;s
            $4.6B tech export sector (FY2026, +21% YoY).
          </p>

          {/* Social Icons (LinkedIn, Instagram, Facebook) */}
          <div className="flex gap-3.5 mt-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/afterrconcept/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-[34px] h-[34px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-[34px] h-[34px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-[34px] h-[34px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className="font-space text-[13px] font-semibold uppercase tracking-wider text-white mb-4">
            Quick Links
          </h4>
          <ul className="list-none space-y-3">
            <li>
              <Link
                href="/"
                className="text-sm text-indigo-300 hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="text-sm text-indigo-300 hover:text-white transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#work"
                className="text-sm text-indigo-300 hover:text-white transition-colors"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/#ladder"
                className="text-sm text-indigo-300 hover:text-white transition-colors"
              >
                Work with us
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-sm text-indigo-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="font-space text-[13px] font-semibold uppercase tracking-wider text-white mb-4">
            Proof
          </h4>
          <ul className="list-none space-y-3">
            <li>
              <Link
                href="/case-studies"
                className="text-sm text-indigo-300 hover:text-white transition-colors"
              >
                Case studies
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies/swiftcart"
                className="text-sm text-indigo-300 hover:text-white transition-colors"
              >
                Bultra Bank — Fintech
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies"
                className="text-sm text-indigo-300 hover:text-white transition-colors"
              >
                AI SaaS
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies"
                className="text-sm text-indigo-300 hover:text-white transition-colors"
              >
                Healthcare
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="font-space text-[13px] font-semibold uppercase tracking-wider text-white mb-4">
            Connect
          </h4>
          <ul className="list-none space-y-3">
            <li>
              <a
                href="mailto:contact@afterconcept.io"
                className="inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-white transition-colors"
              >
                <span>contact@afterconcept.io</span>
                <span className="text-[10.5px] font-semibold tracking-wider text-ember-600 bg-ember-100 rounded px-1.5 py-0.5 uppercase">
                  Confirm
                </span>
              </a>
            </li>
            <li className="text-sm text-indigo-300">Pakistan — Global</li>
            <li className="text-sm text-indigo-300">9am – 5pm (UTC)</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto border-t border-white/10 pt-5 flex justify-between flex-wrap gap-3 text-[13px] text-indigo-300">
        <span>© 2026 After Concept. All rights reserved.</span>
        <span className="space-x-2">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <span>·</span>
          <Link href="#" className="hover:text-white">
            Terms of Service
          </Link>
        </span>
      </div>
    </footer>
  );
}
