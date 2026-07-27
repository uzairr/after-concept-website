import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { picsumImage } from "@/lib/images";
import { GlowCard } from "@/components/ui/GlowCard";

export const metadata: Metadata = {
  title: "About | After Concept",
  description:
    "Learn about After Concept — our story, team, and values. A digital agency for software, WordPress, AI, and machine learning.",
};

export default function AboutPage() {
  const stats = [
    { value: "12", label: "Team Members" },
    { value: "50+", label: "Projects Done" },
    { value: "3+", label: "Years Active" },
    { value: "20+", label: "Technologies Used" },
  ];

  const values = [
    {
      title: "Clarity First",
      body: "We simplify complexity and keep every deliverable grounded in clear outcomes.",
    },
    {
      title: "Build With Care",
      body: "From architecture to polish, we focus on quality systems that scale over time.",
    },
    {
      title: "Partner Mindset",
      body: "We operate as collaborators, not vendors, with shared ownership in results.",
    },
  ];

  const team = [
    { name: "Areeb Khan", role: "Product Lead", initials: "AK" },
    { name: "Mariam Zafar", role: "Design Director", initials: "MZ" },
    { name: "Hassan Ali", role: "Engineering Lead", initials: "HA" },
    { name: "Rida Noor", role: "AI Strategist", initials: "RN" },
  ];

  return (
    
    <div className="bg-base min-h-screen text-foreground">
      <section className="w-full flex h-[280px] items-center justify-center bg-page-hero-banner px-6 text-center md:px-12">
        <div>
          <p className="font-sans text-[12px] text-muted">Home / About</p>
          <h1 className="mt-4 font-display text-[clamp(38px,5vw,52px)] font-extrabold text-foreground">
            About Us
          </h1>
          <span className="mx-auto mt-5 block h-[2px] w-[60px] bg-accent" />
        </div>
      </section>

      <section className="w-full bg-base px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mt-5 font-display text-[clamp(32px,4vw,40px)] font-bold leading-[1.15] text-foreground">
              We Are After Concept
            </h2>
            <p className="mt-6 max-w-xl font-sans text-[16px] leading-[1.8] text-muted">
              After Concept is a digital agency focused on software, AI, and product
              experiences built for modern teams. We combine strategy, design, and
              engineering to help ambitious brands move from idea to execution.
            </p>
            <p className="mt-5 max-w-xl font-sans text-[16px] leading-[1.8] text-muted">
              Our process is collaborative, practical, and deeply outcome-driven. We
              care about lasting systems, not one-off launches, and we work closely with
              clients to build products that are both elegant and effective.
            </p>
            <div className="mt-8 max-w-lg rounded-xl border border-theme-accent/25 bg-theme-accent/10 p-6">
              <p className="font-display text-[28px] font-bold text-foreground">50+ Projects</p>
              <p className="mt-2 font-sans text-[14px] leading-[1.7] text-muted">
                Delivered across software, AI solutions, and digital product ecosystems.
              </p>
            </div>
          </div>

          <GlowCard className="rounded-2xl border border-line bg-theme-surface p-6 shadow-[0_20px_60px_rgba(26,26,46,0.06)] h-full">
            <div className="relative min-h-[340px] overflow-hidden rounded-xl">
              <Image
                src={picsumImage("about-team-collaboration", 900, 1000)}
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-theme-surface via-surface-2/75 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 rounded-xl border border-line bg-theme-surface/95 p-6 shadow-sm backdrop-blur">
                <p className="font-display text-[24px] font-bold text-foreground">
                  Team Collaboration
                </p>
                <p className="mt-3 font-sans text-[14px] leading-[1.7] text-muted">
                  Cross-functional thinking, clean communication, and shared ownership.
                </p>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      <section className="w-full border-y border-line bg-theme-surface px-6 py-10 md:px-12 md:py-14">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 divide-y divide-line md:grid-cols-4 md:divide-x md:divide-y-0">
          {stats.map((item) => (
            <div key={item.label} className="px-6 py-6 md:py-3">
              <p className="font-display text-[40px] font-bold leading-none text-foreground">
                {item.value}
              </p>
              <p className="mt-3 font-sans text-[14px] text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-base px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto w-full max-w-[1400px]">
          <h2 className="mt-5 font-display text-h2 text-foreground">How We Work</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <GlowCard
                key={value.title}
                className="rounded-xl border border-line bg-theme-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(92,133,255,0.18)]"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-theme-accent/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-theme-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 12h16M12 4v16" />
                  </svg>
                </div>
                <h3 className="font-display text-[20px] font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-4 font-sans text-[15px] leading-[1.8] text-muted">
                  {value.body}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-2 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto w-full max-w-[1400px]">
          <h2 className="mt-5 font-display text-h2 text-foreground">Meet the Collaborators</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <GlowCard
                key={member.name}
                className="rounded-xl border border-line bg-theme-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(92,133,255,0.18)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-theme-accent/10 font-display text-[20px] font-bold text-theme-accent">
                  {member.initials}
                </div>
                <h3 className="mt-5 font-display text-[22px] font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-2 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                  {member.role}
                </p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-theme-accent hover:text-theme-accent"
                  aria-label={`LinkedIn profile for ${member.name}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M6.94 8.5a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM5.52 9.66h2.84V18H5.52V9.66Zm4.62 0H12.9v1.14h.04c.39-.74 1.35-1.52 2.78-1.52 2.98 0 3.53 1.96 3.53 4.5V18h-2.84v-3.72c0-.89-.02-2.03-1.24-2.03-1.24 0-1.43.97-1.43 1.97V18h-2.84V9.66Z" />
                  </svg>
                </a>
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
