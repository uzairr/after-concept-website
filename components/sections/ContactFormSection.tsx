"use client";

import { type FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "@/lib/constants";
import {
  contactInfo,
  budgetOptions,
  serviceInterestOptions,
} from "@/lib/contact-content";
import { SocialIconByName } from "@/components/ui/SocialIcons";

const inputClass =
  "peer w-full border-0 border-b border-[rgba(240,236,228,0.2)] bg-transparent py-2.5 text-[15px] text-primary outline-none transition-colors placeholder:text-transparent focus:border-accent";

const inputLabelClass =
  "pointer-events-none absolute left-0 top-2.5 origin-left text-[15px] text-secondary transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-[15px] peer-focus:top-[-18px] peer-focus:text-[11px] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-[-18px] peer-[:not(:placeholder-shown)]:text-[11px]";

const selectClass =
  "w-full cursor-pointer appearance-none border-0 border-b border-[rgba(240,236,228,0.2)] bg-transparent py-2.5 pr-8 text-[15px] text-primary outline-none transition-colors focus:border-accent";

const selectLabelClass =
  "mb-2 block font-sans text-[11px] font-normal uppercase tracking-[0.14em] text-secondary";

const chevronBg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%239a96a0'%3E%3Cpath d='M2 4l4 4 4-4' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E\")";

export default function ContactFormSection() {
  const [success, setSuccess] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess(true);
  }

  return (
    <section className="border-t border-[rgba(240,236,228,0.08)] bg-page px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-24">
        <div>
          <h2 className="font-display text-[28px] font-light text-primary">
            {contactInfo.title}
          </h2>
          <p className="mt-5 font-sans text-[15px] leading-relaxed text-secondary md:text-[16px]">
            {contactInfo.paragraph}
          </p>

          <dl className="mt-10 space-y-0">
            <div className="border-b border-[rgba(240,236,228,0.15)] py-4 first:pt-0">
              <dt className="font-sans text-[11px] font-normal uppercase tracking-[0.14em] text-secondary">
                Email
              </dt>
              <dd className="mt-1 font-sans text-[14px] text-primary">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {contactInfo.email}
                </a>
              </dd>
            </div>
            <div className="border-b border-[rgba(240,236,228,0.15)] py-4">
              <dt className="font-sans text-[11px] font-normal uppercase tracking-[0.14em] text-secondary">
                Location
              </dt>
              <dd className="mt-1 font-sans text-[14px] text-primary">
                {contactInfo.location}
              </dd>
            </div>
            <div className="border-b border-[rgba(240,236,228,0.15)] py-4">
              <dt className="font-sans text-[11px] font-normal uppercase tracking-[0.14em] text-secondary">
                Response time
              </dt>
              <dd className="mt-1 font-sans text-[14px] text-primary">
                {contactInfo.responseTime}
              </dd>
            </div>
          </dl>

          <ul className="mt-10 flex items-center gap-6">
            {socialLinks.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary transition-colors hover:text-accent"
                  aria-label={s.name}
                >
                  <SocialIconByName name={s.name} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="flex flex-col items-center justify-center py-16 text-center"
                role="status"
              >
                <svg
                  className="h-10 w-10 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  aria-hidden
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-6 font-display text-xl font-light italic text-primary md:text-2xl">
                  We&apos;ll be in touch soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={onSubmit}
                className="space-y-8"
              >
                <div className="relative pt-1">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder=" "
                  />
                  <label htmlFor="contact-name" className={inputLabelClass}>
                    Name
                  </label>
                </div>

                <div className="relative pt-1">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder=" "
                  />
                  <label htmlFor="contact-email" className={inputLabelClass}>
                    Email
                  </label>
                </div>

                <div>
                  <label htmlFor="contact-service" className={selectLabelClass}>
                    Service interest
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    defaultValue=""
                    className={selectClass}
                    style={{
                      backgroundImage: chevronBg,
                      backgroundPosition: "right 0 top 50%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "12px",
                    }}
                  >
                    {serviceInterestOptions.map((opt) => (
                      <option
                        key={opt.value || "empty-s"}
                        value={opt.value}
                        disabled={opt.value === ""}
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-budget" className={selectLabelClass}>
                    Budget
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    required
                    defaultValue=""
                    className={selectClass}
                    style={{
                      backgroundImage: chevronBg,
                      backgroundPosition: "right 0 top 50%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "12px",
                    }}
                  >
                    {budgetOptions.map((opt) => (
                      <option
                        key={opt.value || "empty-b"}
                        value={opt.value}
                        disabled={opt.value === ""}
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative pt-1">
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className={`peer ${inputClass} min-h-[120px] resize-y py-3`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="contact-message"
                    className="pointer-events-none absolute left-0 top-3 origin-left text-[15px] text-secondary transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-[15px] peer-focus:top-[-18px] peer-focus:text-[11px] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-[-18px] peer-[:not(:placeholder-shown)]:text-[11px]"
                  >
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full border border-solid border-[rgba(240,236,228,0.6)] bg-transparent px-[48px] py-[12px] font-sans text-[12px] font-normal uppercase tracking-[0.22em] text-primary transition-colors duration-300 hover:bg-[rgba(240,236,228,0.08)]"
                >
                  SEND MESSAGE
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
