import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { picsumImage } from "@/lib/images";
import { GlowCard } from "@/components/ui/GlowCard";

export const metadata: Metadata = {
  title: "Services | After Concept",
  description:
    "Software development, WordPress, generative AI, and machine learning — expert engineering for select projects.",
};

export default function ServicesPage() {
  const serviceRows = [
    {
      index: "01",
      title: "Software Development",
      body: "We design and engineer scalable web applications, internal platforms, and product ecosystems tailored to your operations and growth goals.",
      tags: ["Next.js", "Node.js", "APIs", "Cloud"],
    },
    {
      index: "02",
      title: "WordPress Development",
      body: "From marketing sites to custom WordPress systems, we build high-performance experiences with modern UI, SEO foundations, and flexible CMS workflows.",
      tags: ["WordPress", "WooCommerce", "ACF", "Headless"],
    },
    {
      index: "03",
      title: "Generative AI & LLMs",
      body: "We implement practical AI features including assistants, content pipelines, and retrieval-driven experiences grounded in product use-cases.",
      tags: ["LLMs", "RAG", "Automation", "Prompt Systems"],
    },
    {
      index: "04",
      title: "Machine Learning",
      body: "We build ML solutions that turn data into decisions: forecasting, classification, recommendation, and model-backed intelligence for digital products.",
      tags: ["MLOps", "Python", "Model Serving", "Analytics"],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discover",
      body: "We align on scope, constraints, and business goals before writing a single line of code.",
    },
    {
      step: "02",
      title: "Design",
      body: "Information architecture and interface decisions are mapped into a clear product direction.",
    },
    {
      step: "03",
      title: "Build",
      body: "Engineering executes in focused sprints with transparent updates and quality checkpoints.",
    },
    {
      step: "04",
      title: "Scale",
      body: "We launch, monitor, and continuously optimize for performance, adoption, and growth.",
    },
  ];

  return (
    
    <div className="bg-base min-h-screen text-foreground">
      <section className="w-full flex h-[280px] items-center justify-center bg-page-hero-banner px-6 text-center md:px-12">
        <div>
          <p className="font-sans text-[12px] text-muted">Home / Services</p>
          <h1 className="mt-4 font-display text-[clamp(38px,5vw,52px)] font-extrabold text-foreground">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-[16px] text-muted">
            Expert engineering across software, WordPress, AI and ML
          </p>
          <span className="mx-auto mt-5 block h-[2px] w-[60px] bg-accent" />
        </div>
      </section>

      <section className="w-full bg-base px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            {/* WHAT WE OFFER tag removed */}
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(34px,4.5vw,64px)] font-extrabold leading-[1.08] text-foreground">
              Enhance Your Project With Expert Engineering
            </h2>
            <p className="mt-6 max-w-xl font-sans text-[16px] leading-[1.8] text-muted">
              We partner with product teams, startups, and established businesses to
              deliver software systems, design-led WordPress builds, and AI-powered
              capabilities that are ready for real-world scale.
            </p>
            <Link href="/contact" className="btn-primary mt-10">
              GET IN TOUCH FOR A QUOTE
            </Link>
          </div>
          <div className="relative flex justify-center">
            <GlowCard className="w-full max-w-[520px] rounded-2xl border border-line bg-theme-surface p-4 shadow-[0_30px_80px_rgba(37,99,235,0.15)] [transform:rotate(-3deg)_translateY(-6px)] h-full">
              <div className="relative min-h-[280px] overflow-hidden rounded-xl p-8">
                <Image
                  src={picsumImage("services-intro-stack", 720, 560)}
                  alt="Development workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-accent-gradient opacity-[0.96]" />
                <div className="relative z-[1]">
                  <p className="font-display text-[28px] font-extrabold text-white">
                    Engineering Stack
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {["Next.js", "React", "Python", "LLMs", "WP", "Cloud"].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-white/20 bg-white/10 px-3 py-3 text-center font-sans text-[12px] font-medium uppercase tracking-[0.06em] text-white"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      <section className="w-full bg-base px-6 pb-20 md:px-12 md:pb-24">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 lg:gap-24">
          {serviceRows.map((service, idx) => (
            <GlowCard
              key={service.title}
              className="rounded-2xl border border-line bg-theme-surface"
            >
              <div className="grid grid-cols-1 items-center gap-8 p-6 md:p-8 lg:grid-cols-2 h-full">
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative h-[250px] overflow-hidden rounded-xl border border-line bg-surface-2">
                  <Image
                    src={picsumImage(`services-row-${service.index}`, 960, 600)}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-theme-surface/85 via-surface-2/50 to-transparent" />
                </div>
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                {/* service.index tag removed */}
                <h3 className="mt-3 font-display text-[clamp(28px,3.2vw,32px)] font-bold leading-[1.2] text-foreground">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-xl font-sans text-[16px] leading-[1.8] text-muted">
                  {service.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[20px] bg-theme-accent/10 px-[14px] py-1 font-sans text-[12px] font-medium uppercase tracking-[0.06em] text-theme-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      <section className="w-full bg-surface-2 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto w-full max-w-[1400px]">
          {/* HOW WE WORK tag removed */}
          <h2 className="mt-5 font-display text-h2 text-foreground">Simple. Transparent. Effective.</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {process.map((item, index) => (
              <GlowCard key={item.step} className="relative rounded-xl border border-line bg-theme-surface p-6 h-full">
                {/* item.step tag removed */}
                <h3 className="mt-4 font-display text-[20px] font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.8] text-muted">
                  {item.body}
                </p>
                {index < process.length - 1 ? (
                  <span className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 border-t border-dashed border-line lg:block" />
                ) : null}
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface border-y border-line px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-3xl font-display text-[clamp(32px,4.2vw,60px)] font-extrabold leading-[1.1] text-primary">
            Ready to Build Something Great?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-button border border-outline bg-transparent px-9 py-[14px] font-sans text-[13px] font-medium uppercase tracking-cta text-primary transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            START A CONVERSATION
          </Link>
        </div>
      </section>
    </div>
    
  );
}
