import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'SwiftCart — Real-time inventory sync across 12 warehouses | After Concept',
  description: 'How After Concept built an event-driven inventory sync engine for SwiftCart, eliminating overselling and quadrupling order throughput in 9 weeks.',
};

export default function SwiftCartCaseStudy() {
  return (
    <>
      <Header />

      <div className="back wrap" style={{ maxWidth: '1120px' }}>
        <Link href="/case-studies">← All case studies</Link>
      </div>

      <div className="hero wrap" style={{ maxWidth: '1120px', paddingTop: '36px', paddingBottom: '60px' }}>
        <span className="eyebrow">
          Retail tech{' '}
          <span className="test-tag">Test data</span>
        </span>
        <h1>Real-time inventory sync across 12 warehouses, without a single spreadsheet</h1>
        <p className="hero-sub">
          SwiftCart was overselling on marketplaces and understocking in-store, because three teams were reconciling the same inventory by hand, in three different spreadsheets.
        </p>
        <div className="hero-stats">
          <div className="hstat"><div className="hstat-num">4×</div><div className="hstat-label">order throughput after go-live</div></div>
          <div className="hstat"><div className="hstat-num">0</div><div className="hstat-label">overselling incidents since launch</div></div>
          <div className="hstat"><div className="hstat-num">9wks</div><div className="hstat-label">from kickoff to production</div></div>
        </div>
      </div>

      <div className="thumb-banner">
        <div className="box">SwiftCart — inventory sync dashboard</div>
      </div>

      <div className="meta-row">
        <div className="meta-item"><div className="meta-label">Industry</div><div className="meta-value">Retail tech / e-commerce</div></div>
        <div className="meta-item"><div className="meta-label">Built by</div><div className="meta-value">After Concept</div></div>
        <div className="meta-item"><div className="meta-label">Engagement</div><div className="meta-value">Full build, 9 weeks</div></div>
        <div className="meta-item"><div className="meta-label">Stack</div><div className="meta-value">React, Node, Postgres, Shopify + WMS APIs</div></div>
      </div>

      <article className="wrap">
        <span className="section-label">Challenge</span>
        <h2>Three teams, three spreadsheets, one shared inventory that never agreed with itself.</h2>
        <p>SwiftCart sells the same catalogue across its own storefront, two marketplaces, and 12 regional warehouses. Every sales channel needed an accurate, current stock count — but the only source of truth was a set of spreadsheets, updated manually, on different schedules, by different teams.</p>
        <p>The gap between &ldquo;what the spreadsheet says&rdquo; and &ldquo;what&apos;s actually on the shelf&rdquo; showed up as overselling, cancelled orders, and warehouse staff burning hours a day just reconciling counts by phone and email.</p>
        <ul>
          <li><b>No single source of truth</b> — each warehouse tracked stock locally; the storefront and marketplaces synced from a nightly export that was stale within hours.</li>
          <li><b>Manual reconciliation at scale</b> — a small team spent most of each morning cross-checking spreadsheets against warehouse counts before channels could be trusted.</li>
          <li><b>Order cancellations eroding trust</b> — customers were buying items that were already sold elsewhere, forcing refunds and apology emails that cost more than the sale.</li>
          <li><b>Growth was making it worse</b> — every new warehouse or channel added another manual reconciliation step, not less.</li>
        </ul>
        <p className="pull">
          &ldquo;We weren&apos;t losing money on bad products. We were losing it on bad arithmetic.&rdquo; — Priya Anand, COO, SwiftCart{' '}
          <span className="test-tag">Test data</span>
        </p>
      </article>

      <article className="alt-bg wrap" style={{ maxWidth: '1120px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span className="section-label">Solution</span>
          <h2>One inventory service every channel reads from, updated in real time.</h2>
          <p>After Concept didn&apos;t start with a dashboard. The first step was mapping every place stock could change — a sale, a return, a transfer between warehouses, a manual correction — and designing a single event-driven inventory service that every channel would read from and write to.</p>
          <p>Warehouses update stock through simple scanner-driven web forms. Every channel — storefront, marketplaces, and the internal ops dashboard — reads from the same live service, so what a customer sees online matches what&apos;s on the shelf at that moment.</p>
          <ul>
            <li><b>Event-driven sync engine:</b> every stock movement is captured as an event and propagated to all channels within seconds, replacing the nightly batch export entirely.</li>
            <li><b>Conflict resolution rules:</b> when two channels report a change to the same SKU near-simultaneously, a rules engine resolves the conflict automatically instead of surfacing it as a support ticket.</li>
            <li><b>Warehouse-friendly interfaces:</b> scanner-first web forms mean warehouse staff update stock in the same motion as picking or receiving, not as a separate admin task.</li>
            <li><b>Ops dashboard with live alerts:</b> the ops team sees stock levels, in-flight transfers, and low-stock alerts across all 12 warehouses on one screen.</li>
          </ul>
        </div>
      </article>

      <article className="wrap">
        <span className="section-label">Key capabilities</span>
        <h2>What the system does.</h2>
        <ul>
          <li><b>Real-time multi-warehouse sync:</b> stock changes at any of the 12 warehouses propagate to every sales channel within seconds.</li>
          <li><b>Channel-aware allocation:</b> reserves stock intelligently across storefront and marketplace listings so no two channels sell the same last unit.</li>
          <li><b>Automatic low-stock alerts:</b> ops and purchasing teams get notified before a SKU hits zero, not after.</li>
          <li><b>Full audit trail:</b> every stock change is logged with source, timestamp, and actor — reconciliation disputes are resolved by looking at a log, not calling five people.</li>
        </ul>
      </article>

      <article className="alt-bg wrap" style={{ maxWidth: '1120px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span className="section-label">Results</span>
          <h2>From reactive reconciliation to a system that runs ahead of demand.</h2>
          <p>The reconciliation team that used to spend mornings cross-checking spreadsheets now spends that time on purchasing strategy and vendor relationships. Overselling incidents dropped to zero. Order throughput across all channels roughly quadrupled without adding headcount to fulfilment.</p>
          <div className="final-stats">
            <div className="fstat"><div className="fstat-num">4×</div><div className="fstat-label">order throughput, same team size</div></div>
            <div className="fstat"><div className="fstat-num">0</div><div className="fstat-label">overselling incidents since launch</div></div>
            <div className="fstat"><div className="fstat-num">~6hrs/day</div><div className="fstat-label">reconciliation time eliminated</div></div>
          </div>
          <p>This is what After Concept builds: not a dashboard bolted onto a broken process, but the underlying system rebuilt so the dashboard has something true to show.</p>
        </div>
      </article>

      <section className="cta">
        <h2>Have a similar problem?</h2>
        <p>Tell us where your team is stuck reconciling things by hand. We&apos;ll show you what we&apos;d build.</p>
        <Link href="/#contact" className="btn-primary">Book a free scoping call</Link>
        <Link href="/case-studies" className="btn-ghost">See more case studies</Link>
      </section>

      <footer style={{ borderTop: '1px solid var(--line)', padding: '40px 32px', background: '#fff' }}>
        <div className="footer-inner">
          <Link href="/" className="logo">
            <span className="after">after</span>
            <span style={{ color: 'transparent', WebkitTextStroke: '1.2px #26215C' }}>concept</span>
          </Link>
          <span>© 2026 After Concept</span>
        </div>
      </footer>
    </>
  );
}
