import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(246,244,238,0.9)] backdrop-blur-md border-b border-line">
      <nav className="flex items-center justify-between px-8 py-5 max-w-[1160px] mx-auto">
        <Link href="/" className="logo large font-space font-semibold text-xl tracking-tight flex items-center">
          <span className="text-indigo-900">after</span>
          <span className="concept-outline text-transparent">concept</span>
        </Link>
        <div className="hidden md:flex gap-9 text-[14.5px] font-medium text-charcoal-soft">
          <Link href="/#services" className="hover:text-indigo-900 transition-colors">Services</Link>
          <Link href="/#work" className="hover:text-indigo-900 transition-colors">Work</Link>
          <Link href="/#ladder" className="hover:text-indigo-900 transition-colors">Work with us</Link>
          <Link href="/#contact" className="hover:text-indigo-900 transition-colors">Contact</Link>
        </div>
        <Link 
          href="/#contact" 
          className="bg-ember-600 text-ember-100 px-5 py-2.5 rounded-lg text-[14.5px] font-semibold transition-all hover:bg-indigo-900 hover:-translate-y-px"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
