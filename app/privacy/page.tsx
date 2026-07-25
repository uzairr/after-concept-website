import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | After Concept",
  description:
    "Learn how After Concept collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-page px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-[800px]">
        {/* Header */}
        <div className="mb-12">

          <h1 className="mt-5 font-display text-h2 text-primary">
            Privacy Policy
          </h1>
          <p className="mt-3 font-sans text-[14px] text-secondary">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 font-sans text-[15px] leading-[1.8] text-secondary">
          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              1. Information We Collect
            </h2>
            <p>
              When you contact us through our website, we collect the personal
              information you voluntarily provide, including your name, email
              address, and details about your project. We do not collect any
              information automatically beyond standard server logs.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information you provide solely to respond to your
              enquiry and to evaluate potential collaboration. We do not sell,
              rent, or share your personal data with third parties for marketing
              purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              3. Data Retention
            </h2>
            <p>
              We retain your contact information for as long as necessary to
              fulfil the purpose for which it was collected, or as required by
              applicable law. You may request deletion of your data at any time
              by emailing us.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              4. Cookies
            </h2>
            <p>
              This website uses a single first-party cookie to store your
              light/dark theme preference. No third-party tracking or advertising
              cookies are used.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              5. Third-Party Services
            </h2>
            <p>
              We use Formspree to process contact form submissions. By submitting
              the contact form, your data is processed according to Formspree&apos;s
              privacy policy. We do not use Google Analytics or similar tracking
              tools.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or request deletion of your
              personal data. To exercise these rights, please contact us at{" "}
              <a
                href="mailto:hello@afterconcept.io"
                className="text-accent underline underline-offset-2 hover:opacity-80"
              >
                hello@afterconcept.io
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. Material changes will
              be communicated by updating the &quot;Last updated&quot; date at
              the top of this page.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-[20px] font-semibold text-primary">
              8. Contact
            </h2>
            <p>
              For any privacy-related questions, please email{" "}
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
