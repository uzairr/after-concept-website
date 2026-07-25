import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | After Concept",
  description:
    "Read the terms and conditions governing use of After Concept's website and services.",
};

export default function TermsPage() {
  return (
    <div className="bg-page px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-[800px]">
        {/* Header */}
        <div className="mb-12">

          <h1 className="mt-5 font-display text-h2 text-primary">
            Terms of Service
          </h1>
          <p className="mt-3 font-sans text-[14px] text-secondary">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 font-sans text-[15px] leading-[1.8] text-secondary">
          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using the After Concept website, you agree to be
              bound by these Terms of Service. If you do not agree, please do not
              use this website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              2. Services
            </h2>
            <p>
              After Concept provides bespoke software development, AI
              integrations, product design, and growth engineering services. The
              specific terms of any engagement are governed by a separate signed
              agreement between After Concept and the client.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              3. Intellectual Property
            </h2>
            <p>
              All content on this website — including text, graphics, logos, and
              code — is the property of After Concept unless otherwise stated.
              You may not reproduce, distribute, or create derivative works
              without explicit written permission.
            </p>
            <p className="mt-4">
              Client deliverables are governed by individual project agreements,
              which include full intellectual property assignment to the client
              upon project completion.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              4. Limitation of Liability
            </h2>
            <p>
              After Concept&apos;s website is provided &quot;as is&quot; without
              warranties of any kind. We are not liable for any indirect,
              incidental, or consequential damages arising from your use of this
              website or any information contained herein.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              5. External Links
            </h2>
            <p>
              This website may contain links to third-party websites. After
              Concept is not responsible for the content or privacy practices of
              those sites and does not endorse them.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              6. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of Pakistan. Any disputes
              shall be resolved through good-faith negotiation before formal
              proceedings.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these terms at any time. Continued
              use of the website after changes constitutes acceptance of the
              updated terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              8. Contact
            </h2>
            <p>
              Questions about these terms? Email us at{" "}
              <a
                href="mailto:hello@afterconcept.io"
                className="text-accent underline underline-offset-2 hover:opacity-80"
              >
                hello@afterconcept.io
              </a>
              .
            </p>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-14 border-t border-border pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-[13px] font-medium text-accent hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
