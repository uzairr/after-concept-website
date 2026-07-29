import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SwiftcartCaseStudy() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] py-24 px-8 flex items-center justify-center text-center">
        <div>
          <h1 className="font-space font-semibold text-4xl text-indigo-900 mb-4">Swiftcart Case Study</h1>
          <p className="text-charcoal-soft mb-8">This page is currently being migrated.</p>
          <Link href="/case-studies" className="text-indigo-500 font-semibold hover:underline">
            ← Back to Case Studies
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
