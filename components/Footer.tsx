import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-indigo-300 pt-16 pb-8 px-8">
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-11">
        <div>
          {/* Logo Badge + Company Name */}
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 transition-transform hover:scale-105"
          >
            <span className="bg-white text-[#2e2a5e] text-sm font-bold w-9 h-9 rounded-lg flex items-center justify-center leading-none tracking-tight shadow-sm">
              ac
            </span>
            <span className="text-white text-lg font-semibold tracking-tight">
              After Concept
            </span>
          </Link>
          <p className="text-white text-[15px] font-medium mt-4 max-w-[280px]">
            Every concept deserves an after.
          </p>
          <p className="text-indigo-300 text-sm max-w-[300px] mt-4">
            Production-ready products for founders with validated ideas. We
            embed as your technical co-pilot. Proudly part of Pakistan&apos;s
            $4.6B tech export sector (FY2026, +21% YoY).
          </p>
          <div className="flex gap-3.5 mt-5">
            <a
              href="https://www.linkedin.com/company/afterrconcept/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[34px] h-[34px] rounded-full border border-white/20 flex items-center justify-center text-[11px] text-white hover:bg-white/10 transition-colors"
            >
              in
            </a>
            <a
              href="https://www.linkedin.com/company/afterrconcept/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[34px] h-[34px] rounded-full border border-white/20 flex items-center justify-center text-[11px] text-white hover:bg-white/10 transition-colors"
            >
              ig
            </a>
            <a
              href="https://www.linkedin.com/company/afterrconcept/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[34px] h-[34px] rounded-full border border-white/20 flex items-center justify-center text-[11px] text-white hover:bg-white/10 transition-colors"
            >
              fb
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
