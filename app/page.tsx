import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';
import TimelineSection from '@/components/TimelineSection';

export default function Home() {
  return (
    <>

<ScrollObserver />
<Header />

<section className="hero fade-in-section">
  <div className="hero-grid">
    <div className="hero-copy fade-in-element">
      <span className="eyebrow brand-line">Concept is easy. After is the work.</span>
      <h1>We deliver products <span className="accent">SMEs</span> actually need.</h1>
      <p className="hero-sub">Production-ready digital products for founders with validated ideas. We embed as your technical co-pilot <br/> you focus on vision, we bring the product to life.</p>
      <div className="hero-actions">
        <a href="#contact" className="btn-primary">Start a Project</a>
        <a href="#work" className="btn-ghost">View Our Work</a>
      </div>
    </div>
    <div className="hero-stage fade-in-element">
      <div className="glow"></div>
      <div className="float-group">
        <div className="browser">
          <div className="browser-bar">
            <div className="dot"></div><div className="dot"></div><div className="dot"></div>
            <div className="url">app.afterconcept.io</div>
          </div>
          <div className="app-body">
            <div className="sidebar">
              <div className="chip active"></div>
              <div className="chip"></div>
              <div className="chip"></div>
              <div className="chip"></div>
            </div>
            <div className="main-panel">
              <div className="stat-row">
                <div className="stat"><div className="n">4×</div><div className="l">Throughput</div></div>
                <div className="stat"><div className="n">96%</div><div className="l">On-time</div></div>
                <div className="stat"><div className="n">6 wks</div><div className="l">To launch</div></div>
              </div>
              <div className="chart-card">
                <div className="bars">
                  <div className="bar" style={{ height: "40%" }}></div>
                  <div className="bar" style={{ height: "55%" }}></div>
                  <div className="bar" style={{ height: "70%" }}></div>
                  <div className="bar" style={{ height: "50%" }}></div>
                  <div className="bar" style={{ height: "85%" }}></div>
                  <div className="bar" style={{ height: "65%" }}></div>
                  <div className="bar" style={{ height: "95%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="peek-card">
          <div className="tag">Onboarding</div>
          <div className="val">-40%</div>
          <div className="sub">Drop-off after redesign</div>
          <div className="check"><span className="checkdot">✓</span> Shipped &amp; live</div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="marquee fade-in-section fade-in-element">
  <div className="marquee-track">
    <span>Bultra Bank</span><span>·</span><span>Faraway Yachting</span><span>·</span><span>Nkosi &amp; Associates</span><span>·</span><span>EVT SaaS</span><span>·</span><span>Land Design</span><span>·</span><span>SkyRoutes</span><span>·</span><span>MediCore</span><span>·</span><span>Finova</span><span>·</span>
    <span>Bultra Bank</span><span>·</span><span>Faraway Yachting</span><span>·</span><span>Nkosi &amp; Associates</span><span>·</span><span>EVT SaaS</span><span>·</span><span>Land Design</span><span>·</span><span>SkyRoutes</span><span>·</span><span>MediCore</span><span>·</span><span>Finova</span><span>·</span>
  </div>
</div>

<section className="origin fade-in-section">
  <div className="wrap origin-grid">
    <div className="fade-in-element">
      <span className="eyebrow">The origin story </span>
      <p className="origin-quote">Founders deserve one trusted team to own the entire journey from strategy and design to engineering and product launch."</p>
      <p className="body">That's still how we work. One embedded team follows your product from the first discovery call through the growth work that happens after launch not a relay of subcontractors passing the baton.</p>
      <div className="founder-row">
        <div className="founder-photo">FN</div>
        <div>
          <div className="founder-name">[Founder name]</div>
          <div className="founder-title">Founder, After Concept</div>
        </div>
      </div>
    </div>
    <div className="origin-stats">
      <div className="stat-card fade-in-element"><div className="stat-num">40+</div><div className="stat-label">Projects Shipped</div></div>
      <div className="stat-card fade-in-element"><div className="stat-num">6+</div><div className="stat-label">Years Building</div></div>
      <div className="stat-card fade-in-element"><div className="stat-num">98%</div><div className="stat-label">Client Satisfaction</div></div>
      <div className="stat-card fade-in-element"><div className="stat-num">9+</div><div className="stat-label">Industries Served</div></div>
    </div>
  </div>
</section>

<section className="fade-in-section">
  <div className="wrap">
    <div className="section-head fade-in-element">
      <span className="eyebrow">Why this matters</span>
      <h2>The market you're actually competing in</h2>
      <p>Real, cited figures not projections about After Concept, but the market context behind how we price and structure engagements.</p>
    </div>
    <div className="results-grid">
      <div className="result-card fade-in-element"><div className="result-num">31%</div><div className="result-label">Of software projects finish on time, on budget, with full scope industry-wide</div><div className="result-source">Standish Group, CHAOS Report 2024</div></div>
      <div className="result-card fade-in-element"><div className="result-num">$2K–15K</div><div className="result-label">Typical cost of a clickable prototype not a production-ready MVP</div><div className="result-source">2026 MVP cost benchmarks</div></div>
      <div className="result-card fade-in-element"><div className="result-num">85%</div><div className="result-label">Of SMEs that successfully adopt new technology report increased sales</div><div className="result-source">SME tech-adoption research, 2026</div></div>
      <div className="result-card fade-in-element"><div className="result-num">62%</div><div className="result-label">Of small-business digital transformations fail from buying tech before mapping the process</div><div className="result-source">SME digitalisation research, 2026</div></div>
    </div>
  </div>
</section>

<section id="ladder" className="fade-in-section">
  <div className="wrap">
    <div className="section-head fade-in-element">
      <span className="eyebrow">How we work together </span>
      <h2>Start Small, Scale Smart</h2>
      <p>Wherever you are just validating an idea or ready to build there's a next step sized to match.</p>
    </div>
    <div className="ladder-grid">
      <div className="tier-card fade-in-element">
        <span className="tier-num">01</span>
        <div className="tier-price">Free</div>
        <h3>Discovery call</h3>
        <p>A 30-minute conversation on your idea, your constraints, and whether we're the right technical co-pilot for it.</p>
        <div className="tier-meta">30 min · No obligation</div>
        <div className="tier-who"><b>Who it's for</b>Founders with a validated idea and a question about what building it actually takes.</div>
        <a href="#contact" className="tier-cta">Book the call</a>
      </div>
      <div className="tier-card featured fade-in-element">
        <span className="tier-badge">Most popular</span>
        <span className="tier-num">02</span>
        <div className="tier-price">$3,000–$6,000</div>
        <h3>Product sprint</h3>
        <p>A fixed-scope, fixed-price sprint information architecture, UI, and a technical plan you can hand to any team.</p>
        <div className="tier-meta">2–3 weeks · Fixed price</div>
        <div className="tier-who"><b>Who it's for</b>Founders who need a concrete, fundable plan before committing to a full build.</div>
        <a href="#contact" className="tier-cta">Scope a sprint</a>
      </div>
      <div className="tier-card fade-in-element">
        <span className="tier-num">03</span>
        <div className="tier-price">$15,000–$50,000</div>
        <h3>Full build</h3>
        <p>Embedded team delivery of your product end to end Discover, Design, Build, and the Scale work after launch.</p>
        <div className="tier-meta">Custom scope · In production</div>
        <div className="tier-who"><b>Who it's for</b>Founders ready to build and ship, with or without in-house engineers.</div>
        <a href="#contact" className="tier-cta">Start a build</a>
      </div>
    </div>
  </div>
</section>

<section id="services" className="fade-in-section" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
  <div className="wrap">
    <div className="section-head fade-in-element">
      <span className="eyebrow">What we build</span>
      <h2>Four practices, one embedded team</h2>
      <p>Not a generic template. Software built around your business logic, from first sprint to the growth work that comes after launch.</p>
    </div>
    <div className="services-grid">
      <div className="service-card fade-in-element">
        <h3>Custom Software</h3>
        <p>Scalable web platforms, internal tools, and backend systems designed around your business logic — not a generic SaaS template. We've shipped fintech backends handling 10K+ daily transactions.</p>
        <div className="tag-row"><span className="tag-pill">Next.js</span><span className="tag-pill">Node.js</span><span className="tag-pill">PostgreSQL</span><span className="tag-pill">Cloud</span></div>
      </div>
      <div className="service-card fade-in-element">
        <h3>AI Integrations</h3>
        <p>Production AI — not demos. We build LLM assistants, RAG pipelines, and automation workflows that handle real user load and deliver measurable outcomes.</p>
        <div className="tag-row"><span className="tag-pill">LLMs</span><span className="tag-pill">RAG</span><span className="tag-pill">LangChain</span><span className="tag-pill">OpenAI</span></div>
      </div>
      <div className="service-card fade-in-element">
        <h3>Product Design</h3>
        <p>Interface and system design that earns user trust from first login. We work from information architecture to polished UI, building design systems that scale.</p>
        <div className="tag-row"><span className="tag-pill">Figma</span><span className="tag-pill">Design Systems</span><span className="tag-pill">UX Research</span></div>
      </div>
      <div className="service-card fade-in-element">
        <h3>Growth Engineering</h3>
        <p>After launch is where most agencies disappear. We stay embedded — instrumenting analytics, running A/B tests, and iterating so your product compounds.</p>
        <div className="tag-row"><span className="tag-pill">Analytics</span><span className="tag-pill">A/B Testing</span><span className="tag-pill">SEO</span><span className="tag-pill">DevOps</span></div>
      </div>
    </div>
  </div>
</section>

<TimelineSection />

<section className="fade-in-section">
  <div className="wrap">
    <div className="section-head fade-in-element">
      <span className="eyebrow">What clients gain </span>
      <h2>The typical outcome</h2>
      <p>Real figures from real engagements, with specifics filled in as each case study is finished.</p>
    </div>
    <div className="results-grid">
      <div className="result-card fade-in-element"><div className="result-num">40%</div><div className="result-label">Drop in onboarding drop-off after launch</div><div className="result-source">Bultra Bank</div></div>
      <div className="result-card fade-in-element"><div className="result-num">10K+</div><div className="result-label">Daily transactions handled by a shipped fintech backend</div><div className="result-source">Client engagement</div></div>
      <div className="result-card fade-in-element"><div className="result-num">10</div><div className="result-label">Days average, kickoff to first release</div><div className="result-source">Across projects</div></div>
      <div className="result-card fade-in-element"><div className="result-num">99+</div><div className="result-label">Projects delivered on time and on budget</div><div className="result-source">Since founding</div></div>
    </div>
  </div>
</section>

<section id="work" className="fade-in-section" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
  <div className="wrap">
    <div className="section-head fade-in-element">
      <span className="eyebrow">Projects that shipped</span>
      <h2>Continuously delivering for ambitious SME teams</h2>
      <p>A sample of the web apps, AI engines, and cloud platforms we've taken from concept to production.</p>
    </div>
    <div className="work-grid">
      <a href="/case-studies" className="work-card fade-in-element">
        <div className="work-thumb">Bultra Bank</div>
        <div className="work-body">
          <div className="work-industry">Fintech</div>
          <h3>Bultra Bank</h3>
          <p>A challenger bank entering a new market — secure auth, transaction APIs, a customer dashboard, and onboarding flow.</p>
          <span className="work-link">Read the case study →</span>
        </div>
      </a>
      <a href="/case-studies" className="work-card fade-in-element">
        <div className="work-thumb">EVT SaaS</div>
        <div className="work-body">
          <div className="work-industry">AI SaaS</div>
          <h3>EVT SaaS</h3>
          <p>Greenfield AI operations platform with intelligent automation workflows. Scope grew mid-engagement, driven by delivery quality and communication.</p>
          <span className="work-link">View Project →</span>
        </div>
      </a>
      <a href="/case-studies" className="work-card fade-in-element">
        <div className="work-thumb">Land Design</div>
        <div className="work-body">
          <div className="work-industry">Real Estate</div>
          <h3>Land Design</h3>
          <p>Digital platform for land planning and property visualisation with GIS tooling — parcels, zoning data, and interactive maps.</p>
          <span className="work-link">View Project →</span>
        </div>
      </a>
      <a href="/case-studies" className="work-card fade-in-element">
        <div className="work-thumb">Mercato</div>
        <div className="work-body">
          <div className="work-industry">DevOps</div>
          <h3>Mercato</h3>
          <p>Node.js performance overhaul and AWS infrastructure rebuild for a high-throughput SaaS product.</p>
          <span className="work-link">View Project →</span>
        </div>
      </a>
      <a href="/case-studies" className="work-card fade-in-element">
        <div className="work-thumb">Medicore</div>
        <div className="work-body">
          <div className="work-industry">Healthcare</div>
          <h3>Medicore</h3>
          <p>Digital health platform for patient management and telemedicine services.</p>
          <span className="work-link">View Project →</span>
        </div>
      </a>
      <a href="/case-studies" className="work-card fade-in-element">
        <div className="work-thumb">SkyRoutes</div>
        <div className="work-body">
          <div className="work-industry">Logistics</div>
          <h3>SkyRoutes</h3>
          <p>Full-stack route optimisation tool with real-time tracking and driver assignment.</p>
          <span className="work-link">View Project →</span>
        </div>
      </a>
    </div>
    <div style={{ textAlign: "center", marginTop: "44px" }} className="fade-in-element">
      <a href="/case-studies" className="btn-ghost">See all case studies</a>
    </div>
  </div>
</section>

<section className="fade-in-section">
  <div className="wrap">
    <div className="section-head center fade-in-element">
      <span className="eyebrow">What clients say after the work ships</span>
      <h2>In their words</h2>
    </div>
    <div className="testi-grid">
      <div className="testi-card fade-in-element">
        <div className="testi-top">
          <span className="testi-mark">"</span>
          <span className="testi-company-badge">Bultra Bank · Fintech</span>
        </div>
        <p className="testi-quote">They shipped a production-grade fintech product in weeks, and our onboarding drop-off rate fell 40% post-launch. Exceptional technical depth and clear communication throughout.</p>
        <div className="testi-footer">
          <div className="testi-photo">MV</div>
          <div><div className="testi-name">Marco Visibelli</div><div className="testi-role">Head of Engineering</div></div>
        </div>
      </div>
      <div className="testi-card fade-in-element">
        <div className="testi-top">
          <span className="testi-mark">"</span>
          <span className="testi-company-badge">EVT SaaS · AI</span>
        </div>
        <p className="testi-quote">The team laid the foundations of an ambitious product with remarkable clarity. When our brief grew in scope, we restructured into a larger contract together — a sign of genuine mutual trust.</p>
        <div className="testi-footer">
          <div className="testi-photo">M</div>
          <div><div className="testi-name">Michael</div><div className="testi-role">Founder</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="cta fade-in-section" id="contact">
  <span className="eyebrow fade-in-element">Ready when you are</span>
  <h2 className="fade-in-element">Ready to build something great?</h2>
  <div className="flex justify-center mt-4 fade-in-element">
    <a href="mailto:contact@afterconcept.io" className="btn-primary">Start a Conversation</a>
  </div>
</section>

<Footer />


    </>
  );
}
