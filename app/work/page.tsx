import type { Metadata } from "next";
import Link from "next/link";
import WorkPortfolioClient from "@/components/sections/WorkPortfolioClient";

export const metadata: Metadata = {
  title: "Work | After Concept",
  description:
    "Selected projects from After Concept — software, WordPress, generative AI, and machine learning.",
};

export default function WorkPage() {
  return (
    <div className="bg-base min-h-screen text-foreground">
      <section className="flex h-[280px] items-center justify-center bg-page-hero-banner px-6 text-center md:px-12">
        <div>
          <p className="font-sans text-[12px] text-muted">Home / Work</p>
          <h1 className="mt-4 font-display text-[clamp(38px,5vw,52px)] font-extrabold text-foreground">
            Our Work
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-[16px] text-muted">
            A selection of projects across software, AI, and web development
          </p>
          <span className="mx-auto mt-5 block h-[2px] w-[60px] bg-accent" />
        </div>
      </section>

      <WorkPortfolioClient />

      <section className="bg-accent-gradient px-6 py-20 md:px-12">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-3xl font-display text-[clamp(32px,4.2vw,60px)] font-extrabold leading-[1.1] text-white">
            Ready to Build Something Great?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-button border border-white bg-transparent px-9 py-[14px] font-sans text-[13px] font-medium uppercase tracking-cta text-white transition-colors duration-200 hover:bg-white hover:text-accent"
          >
            START A CONVERSATION
          </Link>
        </div>
      </section>
    </div>
  );
}
