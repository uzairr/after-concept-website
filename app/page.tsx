import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-14 px-8 text-center max-w-[1160px] mx-auto">
          <span className="block text-[14px] font-space font-medium tracking-wide text-indigo-700 mb-5">
            Concept is easy. After is the work.
          </span>
          <h1 className="font-space font-semibold text-4xl md:text-6xl lg:text-[74px] leading-[1.05] tracking-tight max-w-[920px] mx-auto mb-6 text-indigo-900">
            We deliver products <span className="text-ember-600">SMEs</span> actually need.
          </h1>
          <p className="text-lg text-charcoal-soft max-w-[600px] mx-auto mb-10">
            Production-ready digital products for founders with validated ideas. We embed as your technical co-pilot — you focus on vision, we bring the product to life.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="#contact" className="bg-ember-600 text-ember-100 px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(216,90,48,0.28)]">
              Start a Project
            </Link>
            <Link href="#work" className="border-2 border-indigo-900 text-indigo-900 px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-colors hover:bg-indigo-100">
              View Our Work
            </Link>
          </div>
        </section>

        {/* Marquee */}
        <div className="border-y border-line py-5 overflow-hidden whitespace-nowrap bg-white">
          <div className="inline-block animate-scroll font-space text-[15px] font-medium text-charcoal-soft">
            {[...Array(2)].map((_, i) => (
              <span key={i}>
                <span className="mx-[22px]">Bultra Bank</span><span>·</span>
                <span className="mx-[22px]">Faraway Yachting</span><span>·</span>
                <span className="mx-[22px]">Nkosi & Associates</span><span>·</span>
                <span className="mx-[22px]">EVT SaaS</span><span>·</span>
                <span className="mx-[22px]">Land Design</span><span>·</span>
                <span className="mx-[22px]">SkyRoutes</span><span>·</span>
                <span className="mx-[22px]">MediCore</span><span>·</span>
                <span className="mx-[22px]">Finova</span><span>·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Origin */}
        <section className="bg-white border-b border-line py-24 px-8">
          <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <div>
              <span className="block text-[13px] font-semibold tracking-widest uppercase text-indigo-500 mb-5">
                The origin story
                <span className="inline-block text-[10.5px] font-semibold tracking-wider text-ember-600 bg-ember-100 rounded px-1.5 py-0.5 ml-2 align-middle uppercase">Add real quote</span>
              </span>
              <p className="font-space font-medium text-2xl md:text-[28px] leading-[1.4] text-indigo-900 mb-5">
                <span className="text-ember-600 mr-1">&quot;</span>
                Founders kept coming to us with beautiful decks and half-built software from their last agency. We started After Concept to be the team that owns the whole thing — design and engineering, spec to production, no handoff to lose the plot in.&quot;
              </p>
              <p className="text-[15.5px] text-charcoal-soft mb-6">
                That&apos;s still how we work. One embedded team follows your product from the first discovery call through the growth work that happens after launch — not a relay of subcontractors passing the baton.
              </p>
              <div className="flex items-center gap-3.5">
                <div className="w-[52px] h-[52px] rounded-full bg-indigo-100 flex items-center justify-center text-[14px] text-indigo-700 font-semibold">FN</div>
                <div>
                  <div className="font-semibold text-[14.5px] text-indigo-900">
                    [Founder name] <span className="inline-block text-[10.5px] font-semibold tracking-wider text-ember-600 bg-ember-100 rounded px-1.5 py-0.5 ml-2 align-middle uppercase">Add name</span>
                  </div>
                  <div className="text-[13.5px] text-charcoal-soft">Founder, After Concept</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { n: '40+', l: 'Projects Shipped' },
                { n: '6+', l: 'Years Building' },
                { n: '98%', l: 'Client Satisfaction' },
                { n: '9+', l: 'Industries Served' }
              ].map(stat => (
                <div key={stat.l} className="bg-cream rounded-[14px] p-6 border border-line">
                  <div className="font-space font-semibold text-3xl text-indigo-900">
                    {stat.n} <span className="inline-block text-[10.5px] font-semibold tracking-wider text-ember-600 bg-ember-100 rounded px-1.5 py-0.5 ml-1 align-middle uppercase">Confirm</span>
                  </div>
                  <div className="text-[13.5px] text-charcoal-soft mt-1.5">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Grid */}
        <section id="work" className="bg-white border-y border-line py-24 px-8">
          <div className="max-w-[1160px] mx-auto">
            <div className="max-w-[640px] mb-12">
              <span className="block text-[13px] font-semibold tracking-widest uppercase text-indigo-500 mb-4">Projects that shipped</span>
              <h2 className="font-space font-semibold text-3xl md:text-[40px] tracking-tight text-indigo-900 mb-4">Continuously delivering for ambitious SME teams</h2>
              <p className="text-charcoal-soft text-[16.5px]">A sample of the web apps, AI engines, and cloud platforms we&apos;ve taken from concept to production.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Bultra Bank', ind: 'Fintech', desc: 'A challenger bank entering a new market — secure auth, transaction APIs, a customer dashboard, and onboarding flow.', link: '/case-studies/bultra' },
                { title: 'EVT SaaS', ind: 'AI SaaS', desc: 'Greenfield AI operations platform with intelligent automation workflows. Scope grew mid-engagement.', link: '/case-studies' },
                { title: 'Land Design', ind: 'Real Estate', desc: 'Digital platform for land planning and property visualisation with GIS tooling — parcels, zoning data, and interactive maps.', link: '/case-studies' },
              ].map(project => (
                <Link href={project.link} key={project.title} className="bg-white border border-line rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:border-indigo-300 block">
                  <div className="h-[140px] bg-gradient-to-br from-indigo-100 to-ember-100 flex items-center justify-center font-space font-semibold text-[15px] text-indigo-700 opacity-75">
                    {project.title}
                  </div>
                  <div className="p-6">
                    <div className="text-[11.5px] font-semibold uppercase tracking-wider text-ember-600 mb-2">{project.ind}</div>
                    <h3 className="font-space text-[17px] font-semibold text-indigo-900 mb-2">{project.title}</h3>
                    <p className="text-[13.5px] text-charcoal-soft mb-4">{project.desc}</p>
                    <span className="text-[13px] font-semibold text-indigo-500">View Project →</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/case-studies" className="inline-block border-2 border-indigo-900 text-indigo-900 px-7 py-3 rounded-xl font-semibold text-[14px] transition-colors hover:bg-indigo-100">
                See all case studies
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-[110px] px-8 text-center bg-cream">
          <span className="block text-[13px] font-semibold tracking-widest uppercase text-indigo-500 mb-5">Ready when you are</span>
          <h2 className="font-space font-semibold text-3xl md:text-[48px] tracking-tight text-indigo-900 max-w-[640px] mx-auto mb-8">
            Ready to build something great?
          </h2>
          <a href="mailto:hello@afterconcept.io" className="inline-block bg-ember-600 text-ember-100 px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(216,90,48,0.28)]">
            Start a Conversation
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
