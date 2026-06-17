import type { Metadata } from "next";
import ContactPageClient from "@/components/sections/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact | After Concept",
  description:
    "Get in touch with After Concept — we read every message. Software, WordPress, AI, and ML engagements.",
};

export default function ContactPage() {
  return (
    <div className="bg-base min-h-screen text-foreground">
      <section className="flex h-[280px] items-center justify-center bg-page-hero-banner px-6 text-center md:px-12">
        <div>
          <p className="font-sans text-[12px] text-muted">Home / Contact</p>
          <h1 className="mt-4 font-display text-[clamp(38px,5vw,52px)] font-extrabold text-foreground">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-[16px] text-muted">
            We read every message. Reach out and let&apos;s build something.
          </p>
          <span className="mx-auto mt-5 block h-[2px] w-[60px] bg-accent" />
        </div>
      </section>
      <ContactPageClient />
    </div>
  );
}
