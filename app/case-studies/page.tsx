import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Case Studies — After Concept',
  description: 'A sample of the products we\'ve taken from concept to production. Real results, real engagements.',
};

const cases = [
  {
    href: '/case-studies/swiftcart',
    thumb: 'SwiftCart',
    industry: 'Retail tech',
    title: 'Real-time inventory sync across 12 warehouses, without a single spreadsheet',
    client: 'SwiftCart',
    stat: '4×',
    statLabel: 'order throughput after go-live',
    readLabel: 'Read the case study →',
  },
  {
    href: '#',
    thumb: 'Northbridge Clinic',
    industry: 'Healthcare',
    title: 'Patient scheduling automated end to end across three clinics',
    client: 'Northbridge Clinic',
    stat: '27hrs',
    statLabel: 'admin time saved weekly',
    readLabel: 'Read the case study →',
  },
  {
    href: '#',
    thumb: 'Ledgerly',
    industry: 'FinTech · SaaS',
    title: 'Automated reconciliation dashboard replaces a 3-day month-end close',
    client: 'Ledgerly',
    stat: '3d→2h',
    statLabel: 'month-end close time',
    readLabel: 'Read the case study →',
  },
  {
    href: '#',
    thumb: 'Fieldwise',
    industry: 'Construction',
    title: 'A dispatch app that routes crews without a single phone call',
    client: 'Fieldwise',
    stat: '2×',
    statLabel: 'jobs completed per crew, per day',
    readLabel: 'Read the case study →',
  },
  {
    href: '#',
    thumb: 'Loop Logistics',
    industry: 'Logistics',
    title: 'Route optimization that cut fuel spend without new hires',
    client: 'Loop Logistics',
    stat: '18%',
    statLabel: 'reduction in fuel cost',
    readLabel: 'Read the case study →',
  },
  {
    href: '#',
    thumb: 'Tandem Legal',
    industry: 'Legal',
    title: 'Contract review copilot cuts first-pass review time for associates',
    client: 'Tandem Legal',
    stat: '65%',
    statLabel: 'faster first-pass review',
    readLabel: 'Read the case study →',
  },
];

const filters = ['All', 'Retail tech', 'Healthcare', 'FinTech', 'Construction', 'Logistics', 'Legal'];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />

      <div className="page-head wrap">
        <span className="eyebrow">
          Proof{' '}
          <span className="test-tag">Test data</span>
        </span>
        <h1>Results that speak</h1>
        <p>A sample of the products we&apos;ve taken from concept to production. Every figure below is illustrative — swap in your real engagements as they close.</p>
      </div>

      <div className="filters">
        {filters.map((f, i) => (
          <span key={f} className={`filter-pill${i === 0 ? ' active' : ''}`}>{f}</span>
        ))}
      </div>

      <div className="case-grid">
        {cases.map((c) => (
          <Link href={c.href} key={c.title} className="case-card">
            <div className="case-thumb">{c.thumb}</div>
            <div className="case-body">
              <div className="case-industry">{c.industry}</div>
              <h3>{c.title}</h3>
              <div className="case-client">{c.client}</div>
              <div className="case-meta">
                <div className="case-stat">{c.stat}</div>
                <div className="case-stat-label">{c.statLabel}</div>
              </div>
              <span className="read-link">{c.readLabel}</span>
            </div>
          </Link>
        ))}
      </div>

      <section className="cta" style={{ borderTop: '1px solid var(--line)', background: '#fff' }}>
        <h2>Want results like these?</h2>
        <p>Tell us about your workflow. We&apos;ll show you what we&apos;d build.</p>
        <Link href="/#contact" className="btn-primary">Book a free scoping call</Link>
      </section>

      <Footer />
    </>
  );
}
