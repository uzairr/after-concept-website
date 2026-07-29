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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

        {/* Results Grid 1 */}
        <section className="py-24 px-8">
          <div className="max-w-[1160px] mx-auto">
            <div className="max-w-[640px] mb-12">
              <span className="block text-[13px] font-semibold tracking-widest uppercase text-indigo-500 mb-4">Why this matters</span>
              <h2 className="font-space font-semibold text-3xl md:text-[40px] tracking-tight text-indigo-900 mb-4">The market you&apos;re actually competing in</h2>
              <p className="text-charcoal-soft text-[16.5px]">Real, cited figures — not projections about After Concept, but the market context behind how we price and structure engagements.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { n: '31%', l: 'Of software projects finish on time, on budget, with full scope — industry-wide', s: 'Standish Group, CHAOS Report 2024' },
                { n: '$2K–15K', l: 'Typical cost of a clickable prototype — not a production-ready MVP', s: '2026 MVP cost benchmarks' },
                { n: '85%', l: 'Of SMEs that successfully adopt new technology report increased sales', s: 'SME tech-adoption research, 2026' },
                { n: '62%', l: 'Of small-business digital transformations fail from buying tech before mapping the process', s: 'SME digitalisation research, 2026' }
              ].map(res => (
                <div key={res.n} className="bg-white border border-line rounded-[14px] p-6">
                  <div className="font-space font-semibold text-[32px] text-indigo-900">{res.n}</div>
                  <div className="text-[13.5px] text-charcoal-soft mt-2 leading-relaxed">{res.l}</div>
                  <div className="text-[11.5px] font-semibold text-indigo-500 mt-2.5">{res.s}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ladder */}
        <section id="ladder" className="py-24 px-8">
          <div className="max-w-[1160px] mx-auto">
            <div className="max-w-[640px] mb-12">
              <span className="block text-[13px] font-semibold tracking-widest uppercase text-indigo-500 mb-4">
                How we work together
                <span className="inline-block text-[10.5px] font-semibold tracking-wider text-ember-600 bg-ember-100 rounded px-1.5 py-0.5 ml-2 align-middle uppercase">2026 market-benchmarked</span>
              </span>
              <h2 className="font-space font-semibold text-3xl md:text-[40px] tracking-tight text-indigo-900 mb-4">A ladder, not a leap</h2>
              <p className="text-charcoal-soft text-[16.5px]">Wherever you are — just validating an idea or ready to build — there&apos;s a next step sized to match.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                { num: '01', price: 'Free', title: 'Discovery call', desc: 'A 30-minute conversation on your idea, your constraints, and whether we\'re the right technical co-pilot for it.', meta: '30 min · No obligation', who: 'Founders with a validated idea and a question about what building it actually takes.', cta: 'Book the call' },
                { num: '02', badge: 'Most popular', price: '$3,000–$6,000', title: 'Product sprint', desc: 'A fixed-scope, fixed-price sprint — information architecture, UI, and a technical plan you can hand to any team.', meta: '2–3 weeks · Fixed price', who: 'Founders who need a concrete, fundable plan before committing to a full build.', cta: 'Scope a sprint', featured: true },
                { num: '03', price: '$40,000–$120,000', title: 'Full build', desc: 'Embedded team delivery of your product end to end — Discover, Design, Build, and the Scale work after launch.', meta: 'Custom scope · In production', who: 'Founders ready to build and ship, with or without in-house engineers.', cta: 'Start a build' }
              ].map(tier => (
                <div key={tier.num} className={`bg-white border rounded-2xl p-8 flex flex-col relative transition-all hover:-translate-y-1 ${tier.featured ? 'border-2 border-ember-600' : 'border-line hover:border-indigo-300'}`}>
                  {tier.badge && <span className="absolute -top-3.5 left-6 bg-ember-600 text-ember-100 text-[11.5px] font-semibold px-3 py-1 rounded-full">{tier.badge}</span>}
                  <span className="font-space text-[13px] font-semibold text-ember-600 tracking-wider">{tier.num}</span>
                  <div className="font-space font-semibold text-[25px] text-indigo-900 mt-3 mb-1">{tier.price}</div>
                  <h3 className="font-space text-[18px] font-semibold text-indigo-900 mb-2">{tier.title}</h3>
                  <p className="text-[14px] text-charcoal-soft mb-4">{tier.desc}</p>
                  <div className="text-[12.5px] font-semibold text-indigo-500 mb-4">{tier.meta}</div>
                  <div className="mt-auto border-t border-line pt-3.5 pb-4">
                    <b className="block text-indigo-900 text-[12px] uppercase tracking-wider mb-1">Who it&apos;s for</b>
                    <span className="text-[13px] text-charcoal-soft">{tier.who}</span>
                  </div>
                  <Link href="#contact" className={`block text-center font-semibold text-[14px] py-2.5 rounded-lg border-2 ${tier.featured ? 'bg-ember-600 text-ember-100 border-ember-600' : 'border-indigo-900 text-indigo-900 hover:bg-indigo-100'} transition-colors`}>
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-white border-y border-line py-24 px-8">
          <div className="max-w-[1160px] mx-auto">
            <div className="max-w-[640px] mb-12">
              <span className="block text-[13px] font-semibold tracking-widest uppercase text-indigo-500 mb-4">What we build</span>
              <h2 className="font-space font-semibold text-3xl md:text-[40px] tracking-tight text-indigo-900 mb-4">Four practices, one embedded team</h2>
              <p className="text-charcoal-soft text-[16.5px]">Not a generic template. Software built around your business logic, from first sprint to the growth work that comes after launch.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Custom Software', desc: 'Scalable web platforms, internal tools, and backend systems designed around your business logic — not a generic SaaS template. We\'ve shipped fintech backends handling 10K+ daily transactions.', tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Cloud'] },
                { title: 'AI Integrations', desc: 'Production AI — not demos. We build LLM assistants, RAG pipelines, and automation workflows that handle real user load and deliver measurable outcomes.', tags: ['LLMs', 'RAG', 'LangChain', 'OpenAI'] },
                { title: 'Product Design', desc: 'Interface and system design that earns user trust from first login. We work from information architecture to polished UI, building design systems that scale.', tags: ['Figma', 'Design Systems', 'UX Research'] },
                { title: 'Growth Engineering', desc: 'After launch is where most agencies disappear. We stay embedded — instrumenting analytics, running A/B tests, and iterating so your product compounds.', tags: ['Analytics', 'A/B Testing', 'SEO', 'DevOps'] }
              ].map(svc => (
                <div key={svc.title} className="bg-white border border-line rounded-2xl p-8 transition-all hover:-translate-y-1 hover:border-indigo-300">
                  <h3 className="font-space text-[20px] font-semibold text-indigo-900 mb-3">{svc.title}</h3>
                  <p className="text-[15px] text-charcoal-soft mb-4">{svc.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {svc.tags.map(tag => (
                      <span key={tag} className="text-[12px] font-medium text-indigo-700 bg-indigo-100 px-3 py-1.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="bg-indigo-900 text-indigo-100 py-24 px-8">
          <div className="max-w-[1160px] mx-auto">
            <div className="max-w-[640px] mb-12">
              <span className="block text-[13px] font-semibold tracking-widest uppercase text-ember-300 mb-4">How we work</span>
              <h2 className="font-space font-semibold text-3xl md:text-[40px] tracking-tight text-white mb-4">Discover, design, build, scale</h2>
              <p className="text-indigo-300 text-[16.5px]">Four stages, no handoff between them — the same team stays accountable from first spec to post-launch growth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 relative">
              <div className="hidden md:block absolute top-[19px] left-0 right-0 h-px bg-white/10"></div>
              {[
                { num: '01', title: 'Discover', desc: 'We dig into your business context before touching the keyboard — user goals, technical constraints, timelines, and what success actually looks like.' },
                { num: '02', title: 'Design', desc: 'Information architecture, user flows, and interface decisions are locked before engineering starts.' },
                { num: '03', title: 'Build', desc: 'Focused two-week sprints with weekly demos, transparent progress tracking, and zero-surprise deliveries.' },
                { num: '04', title: 'Scale', desc: 'We monitor, optimise, and keep iterating after launch — the work that matters most starts after the product ships.', highlight: true }
              ].map(step => (
                <div key={step.num} className="md:pr-6 relative z-10">
                  <div className={`w-[38px] h-[38px] rounded-full flex items-center justify-center font-space font-semibold text-[14px] mb-6 border-2 ${step.highlight ? 'bg-ember-600 text-indigo-900 border-ember-600' : 'bg-indigo-900 text-ember-300 border-ember-300'}`}>
                    {step.num}
                  </div>
                  <h3 className="font-space font-semibold text-[18px] text-white mb-2.5">{step.title}</h3>
                  <p className="text-[14.5px] text-indigo-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Grid 2 */}
        <section className="py-24 px-8">
          <div className="max-w-[1160px] mx-auto">
            <div className="max-w-[640px] mb-12">
              <span className="block text-[13px] font-semibold tracking-widest uppercase text-indigo-500 mb-4">
                What clients gain 
                <span className="inline-block text-[10.5px] font-semibold tracking-wider text-ember-600 bg-ember-100 rounded px-1.5 py-0.5 ml-2 align-middle uppercase">Mix of real + placeholder</span>
              </span>
              <h2 className="font-space font-semibold text-3xl md:text-[40px] tracking-tight text-indigo-900 mb-4">The typical outcome</h2>
              <p className="text-charcoal-soft text-[16.5px]">Real figures from real engagements, with specifics filled in as each case study is finished.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { n: '40%', l: 'Drop in onboarding drop-off after launch', s: 'Bultra Bank' },
                { n: '10K+', l: 'Daily transactions handled by a shipped fintech backend', s: 'Client engagement' },
                { n: '[X]', t: 'Add', l: 'Weeks average, kickoff to first release', s: 'Across projects' },
                { n: '[X]%', t: 'Add', l: 'Projects delivered on time and on budget', s: 'Since founding' }
              ].map(res => (
                <div key={res.l} className="bg-white border border-line rounded-[14px] p-6">
                  <div className="font-space font-semibold text-[32px] text-indigo-900">
                    {res.n}
                    {res.t && <span className="inline-block text-[10.5px] font-semibold tracking-wider text-ember-600 bg-ember-100 rounded px-1.5 py-0.5 ml-1 align-middle uppercase">{res.t}</span>}
                  </div>
                  <div className="text-[13.5px] text-charcoal-soft mt-2 leading-relaxed">{res.l}</div>
                  <div className="text-[11.5px] font-semibold text-indigo-500 mt-2.5">{res.s}</div>
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
                { title: 'Bultra Bank', ind: 'Fintech', desc: 'A challenger bank entering a new market — secure auth, transaction APIs, a customer dashboard, and onboarding flow.', link: '/case-studies/bultra-bank' },
                { title: 'EVT SaaS', ind: 'AI SaaS', desc: 'Greenfield AI operations platform with intelligent automation workflows. Scope grew mid-engagement, driven by delivery quality.', link: '/case-studies' },
                { title: 'Land Design', ind: 'Real Estate', desc: 'Digital platform for land planning and property visualisation with GIS tooling — parcels, zoning data, and interactive maps.', link: '/case-studies' },
                { title: 'Mercato', ind: 'DevOps', desc: 'Node.js performance overhaul and AWS infrastructure rebuild for a high-throughput SaaS product.', link: '/case-studies' },
                { title: 'Medicore', ind: 'Healthcare', desc: 'Digital health platform for patient management and telemedicine services.', link: '/case-studies' },
                { title: 'SkyRoutes', ind: 'Logistics', desc: 'Full-stack route optimisation tool with real-time tracking and driver assignment.', link: '/case-studies' }
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

        {/* Testimonials */}
        <section className="py-24 px-8">
          <div className="max-w-[1160px] mx-auto">
            <div className="max-w-[640px] mx-auto text-center mb-12">
              <span className="block text-[13px] font-semibold tracking-widest uppercase text-indigo-500 mb-4">What clients say after the work ships</span>
              <h2 className="font-space font-semibold text-3xl md:text-[40px] tracking-tight text-indigo-900">In their words</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="bg-white rounded-[20px] shadow-[0_1px_2px_rgba(38,33,92,0.04),0_12px_32px_rgba(38,33,92,0.06)] border border-line overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(38,33,92,0.05),0_20px_40px_rgba(38,33,92,0.1)]">
                <div className="flex items-center justify-between px-8 pt-7">
                  <span className="w-[38px] h-[38px] rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-space text-[22px] font-bold leading-none">&quot;</span>
                  <span className="text-[11.5px] font-semibold uppercase tracking-wider text-ember-600 bg-ember-100 px-3 py-1.5 rounded-full">Bultra Bank · Fintech</span>
                </div>
                <p className="font-space text-[17px] font-medium text-indigo-900 leading-[1.55] px-8 pt-6">
                  They shipped a production-grade fintech product in weeks, and our onboarding drop-off rate fell 40% post-launch. Exceptional technical depth and clear communication throughout.
                </p>
                <div className="flex items-center gap-4 px-8 pt-6 pb-7 mt-6 border-t border-line">
                  <div className="w-11 h-11 rounded-full bg-indigo-900 flex items-center justify-center text-[13px] text-white font-semibold shrink-0">MV</div>
                  <div>
                    <div className="font-semibold text-[14.5px] text-indigo-900">Marco Visibelli</div>
                    <div className="text-[12.5px] text-charcoal-soft">Head of Engineering</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[20px] shadow-[0_1px_2px_rgba(38,33,92,0.04),0_12px_32px_rgba(38,33,92,0.06)] border border-line overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(38,33,92,0.05),0_20px_40px_rgba(38,33,92,0.1)]">
                <div className="flex items-center justify-between px-8 pt-7">
                  <span className="w-[38px] h-[38px] rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-space text-[22px] font-bold leading-none">&quot;</span>
                  <span className="text-[11.5px] font-semibold uppercase tracking-wider text-ember-600 bg-ember-100 px-3 py-1.5 rounded-full">EVT SaaS · AI</span>
                </div>
                <p className="font-space text-[17px] font-medium text-indigo-900 leading-[1.55] px-8 pt-6">
                  The team laid the foundations of an ambitious product with remarkable clarity. When our brief grew in scope, we restructured into a larger contract together — a sign of genuine mutual trust.
                </p>
                <div className="flex items-center gap-4 px-8 pt-6 pb-7 mt-6 border-t border-line">
                  <div className="w-11 h-11 rounded-full bg-indigo-900 flex items-center justify-center text-[13px] text-white font-semibold shrink-0">M</div>
                  <div>
                    <div className="font-semibold text-[14.5px] text-indigo-900">Michael</div>
                    <div className="text-[12.5px] text-charcoal-soft">Founder</div>
                  </div>
                </div>
              </div>
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
