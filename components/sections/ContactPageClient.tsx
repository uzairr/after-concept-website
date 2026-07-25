"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { picsumImage } from "@/lib/images";
/* 
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/ui/SocialIcons";
*/

type FaqItem = {
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    q: 'What does "no team required" actually mean?',
    a: "You bring the vision and the customer knowledge. We bring everything else — product thinking, design, engineering, and project management. You don't need to hire a CTO, designer, or dev team before working with us. We embed directly alongside you, communicate daily, and operate like your first technical co-founder.",
  },
  {
    q: "How quickly can we start?",
    a: "Typically 1–2 weeks from a signed agreement. We run a discovery sprint in week one regardless of project size — it's where we align on scope, success metrics, and constraints before any design or engineering begins. If you're urgent, get in touch and we'll tell you our exact availability.",
  },
  {
    q: "How to you handle time zones? You're based in Pakistan.",
    a: "Most of our clients are in the UK, US, and Europe — and we've structured our working hours accordingly. Core overlap is 9am–1pm UTC, with async coverage via Slack throughout the day. You get daily updates, weekly demos, and a shared Notion workspace where everything is visible. We've been remote-first since day one — it's not an afterthought.",
  },
  {
    q: "What does an engagement model look like, and what does it cost?",
    a: "We work in two main modes: fixed-scope project builds and ongoing monthly retainers. A typical MVP engagement runs 8–16 weeks and costs between $15K–$40K depending on scope. Full product builds range from $40K–$100K. Growth retainers start at $5K/month. Every engagement starts with a free discovery sprint so we both understand scope and fit before committing to a budget.",
  },
  {
    q: "Do you work with early-stage founders or only funded companies?",
    a: "Both — but we're most useful when you have a validated idea and are ready to build seriously. If you've talked to users, know what you're building, and need a technical partner to execute it, that's exactly what we're set up for — funded or bootstrapped.",
  },
  {
    q: "How owns the code and IP at the end?",
    a: "You do — fully. All code, designs, and documentation transfer to you at project completion. Our standard contract includes a full IP assignment clause. We can work in your existing repositories or set up new ones under your organisation from day one, so there's never an awkward handoff moment.",
  },
];

/*
function InfoIcon({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-theme-accent/10 text-theme-accent">
      {children}
    </span>
  );
}

function SocialButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-theme-accent hover:bg-theme-accent/10 hover:text-theme-accent"
    >
      {icon}
    </a>
  );
}
*/

export default function ContactPageClient() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState(0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      service: (form.elements.namedItem("service") as HTMLSelectElement)?.value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/contact@afterconcept.io", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: data.name,
          Email: data.email,
          "Service Interest": data.service,
          "Budget Range": data.budget,
          Project: data.message
        }),
      });

      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        setError("Something went wrong. Please email us directly.");
      }
    } catch {
      setError("Network error. Please email us directly at hello@afterconcept.io");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="px-6 py-20 md:px-12 md:py-24">
        {/* Centered Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mt-5 font-display text-[clamp(32px,4vw,46px)] font-bold leading-[1.15] text-foreground">
            Tell us what you&apos;re building
          </h2>
        </div>

        {/* 2-Column Layout grid */}
        <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-8 lg:grid-cols-2 items-stretch">
          
          {/* Left Column Box: Pricing only */}
          <div className="rounded-2xl bg-theme-surface p-6 sm:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-line flex flex-col justify-between h-full">
            <div>
              <p className="font-sans text-[13px] font-semibold text-foreground">Typical engagement sizes</p>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between border-b border-line pb-4">
                  <span className="font-sans text-[13px] text-muted">Discovery sprint</span>
                  <span className="font-sans text-[13px] font-bold text-foreground">Free</span>
                </div>
                <div className="flex justify-between border-b border-line pb-4">
                  <span className="font-sans text-[13px] text-muted">MVP build</span>
                  <span className="font-sans text-[13px] font-bold text-foreground">$15K – $40K</span>
                </div>
                <div className="flex justify-between border-b border-line pb-4">
                  <span className="font-sans text-[13px] text-muted">Full product</span>
                  <span className="font-sans text-[13px] font-bold text-foreground">$40K – $100K</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="font-sans text-[13px] text-muted">Growth retainer</span>
                  <span className="font-sans text-[13px] font-bold text-foreground">$5K – $12K / mo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Box: Form Card */}
          <div className="rounded-2xl bg-theme-surface p-5 sm:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)] md:p-10 border border-line flex flex-col justify-between h-full">
            <form
              className="space-y-5 flex flex-col justify-between h-full"
              onSubmit={handleSubmit}
              suppressHydrationWarning
            >
              <div className="space-y-5">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block font-sans text-[13px] font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg border border-line bg-surface-2 px-4 py-[14px] font-sans text-[15px] text-foreground outline-none transition focus:border-theme-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block font-sans text-[13px] font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-line bg-surface-2 px-4 py-[14px] font-sans text-[15px] text-foreground outline-none transition focus:border-theme-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                    />
                  </div>
                </div>

                {/* Row 2: Service interest and Budget range */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="service" className="mb-1.5 block font-sans text-[13px] font-medium text-foreground">
                      Service interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full rounded-lg border border-line bg-surface-2 px-4 py-[14px] font-sans text-[15px] text-foreground outline-none transition focus:border-theme-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                      defaultValue=""
                    >
                      <option value="" disabled hidden className="bg-theme-surface text-foreground">
                        Select a service
                      </option>
                      <option className="bg-theme-surface text-foreground">Software Development</option>
                      <option className="bg-theme-surface text-foreground">WordPress Development</option>
                      <option className="bg-theme-surface text-foreground">Generative AI & LLMs</option>
                      <option className="bg-theme-surface text-foreground">Machine Learning</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="mb-1.5 block font-sans text-[13px] font-medium text-foreground">
                      Budget range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      className="w-full rounded-lg border border-line bg-surface-2 px-4 py-[14px] font-sans text-[15px] text-foreground outline-none transition focus:border-theme-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                      defaultValue=""
                    >
                      <option value="" disabled hidden className="bg-theme-surface text-foreground">
                        Select a range
                      </option>
                      <option className="bg-theme-surface text-foreground">$5k-$15k</option>
                      <option className="bg-theme-surface text-foreground">$15k-$40k</option>
                      <option className="bg-theme-surface text-foreground">$40k-$100k</option>
                      <option className="bg-theme-surface text-foreground">$100k+</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: What are you building? */}
                <div>
                  <label htmlFor="message" className="mb-1.5 block font-sans text-[13px] font-medium text-foreground">
                    What are you building?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project — what problem it solves, where you are now, and what success looks like."
                    className="w-full resize-y rounded-lg border border-line bg-surface-2 px-4 py-[14px] font-sans text-[15px] text-foreground outline-none transition focus:border-theme-accent focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="h-[52px] px-8 rounded-full bg-accent-gradient font-sans text-[13px] font-bold uppercase tracking-cta text-white transition-opacity hover:opacity-90 inline-flex items-center justify-center w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Send message →"}
                </button>
              </div>
            </form>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="mt-4 flex items-start gap-2 text-red-500"
                >
                  <p className="font-sans text-[14px]">{error}</p>
                </motion.div>
              )}
              {sent && !error ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="mt-4 flex items-center gap-2 text-green-600"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                  <p className="font-sans text-[14px]">Message sent! We&apos;ll be in touch within 24 hours.</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Map location section */}
      <section className="px-6 pb-20 md:px-12">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-xl border border-line bg-surface-2">
          <div className="relative h-[260px] w-full md:h-[300px]">
            <Image
              src={picsumImage("contact-location-city", 1400, 600)}
              alt="Urban cityscape near our studio"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e121a]/45 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 flex items-center gap-3 rounded-lg bg-theme-surface/95 px-4 py-3 shadow-sm backdrop-blur">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 shrink-0 text-theme-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden
              >
                <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <div>
                <p className="font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-muted">
                  Pakistan
                </p>
                <p className="font-sans text-[14px] text-foreground">Remote-friendly studio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mt-6 border-t border-line">
            {faqs.map((item, idx) => {
              const open = openFaq === idx;
              return (
                <div
                  key={item.q}
                  className={`border-b border-line pl-4 transition-colors ${open ? "border-l-[3px] border-l-theme-accent bg-theme-accent/10" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : idx)}
                    className="flex w-full items-center justify-between py-5 pr-2 text-left"
                  >
                    <span className="font-display text-[16px] font-semibold text-foreground">
                      {item.q}
                    </span>
                    <span
                      className={`inline-block text-[22px] leading-none text-muted transition-transform duration-200 ${
                        open ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pr-6"
                      >
                        <p className="pb-5 font-sans text-[15px] leading-[1.8] text-muted">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}