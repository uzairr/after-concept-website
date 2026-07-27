"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { formatCompanyMarquee, hero } from "@/lib/siteContent";
import { ProductMorphArt } from "@/components/sections/ProductMorphArt";
import { AnimatedCounter } from "@/components/sections/AnimatedCounter";

const rotatingWords = hero.rotatingWords;
const headlineLines = hero.headlineLines;

const charContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

const charItem = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return reducedMotion;
}

function useTypewriter(words: readonly string[], reducedMotion: boolean) {
  const [wordIndex, setWordIndex] = useState(0);
  const text = words[wordIndex];
  const [displayed, setDisplayed] = useState(reducedMotion ? text : "");
  const [phase, setPhase] = useState<"typing" | "pause" | "erasing" | "idle">("typing");

  useEffect(() => {
    if (reducedMotion) {
      setDisplayed(text);
    }
  }, [text, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, 65); // optimal typing speed
      } else {
        timeout = setTimeout(() => setPhase("pause"), 500); // reduced pause
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("erasing"), 0);
    } else if (phase === "erasing") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 35); // smooth snappy erase
      } else {
        setWordIndex((prev) => (prev + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, displayed, text, reducedMotion, words.length]);

  return { displayed, phase, wordIndex, text };
}

function useTypewriterOnce(text: string, reducedMotion: boolean, delayMs = 600) {
  const [displayed, setDisplayed] = useState(reducedMotion ? text : "");
  const [started, setStarted] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayed(text);
      return;
    }
    const startTimer = setTimeout(() => setStarted(true), delayMs);
    return () => clearTimeout(startTimer);
  }, [text, reducedMotion, delayMs]);

  useEffect(() => {
    if (!started || reducedMotion) return;
    if (indexRef.current >= text.length) return;

    const tick = setInterval(() => {
      indexRef.current += 1;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) clearInterval(tick);
    }, 14);

    return () => clearInterval(tick);
  }, [started, text, reducedMotion]);

  return displayed;
}

/* ── Stat items for the counter strip ── */
const counterStats = [
  { value: "50+", label: "Projects Shipped" },
  { value: "3+", label: "Years Building" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Industries Served" },
];

export function HeroSection() {
  const reducedMotion = usePrefersReducedMotion();
  const motionDuration = reducedMotion ? 0 : undefined;

  const { displayed: typewrittenWord, phase: twPhase, text: rotatingWord } = useTypewriter(rotatingWords, reducedMotion);
  const companyMarqueeText = formatCompanyMarquee(hero.marqueeCompanies);
  const subtextDisplayed = useTypewriterOnce(hero.subtext, reducedMotion, 900);

  return (
    <>
      <section
        id={hero.sectionId}
        className="hero-grid relative flex min-h-[calc(100dvh-var(--header-offset))] scroll-mt-32 flex-col overflow-hidden border-b border-line-strong bg-base"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.16),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(0,229,255,0.12),transparent_40%)]" />

        <div className="relative z-10 flex min-h-0 flex-1 flex-col">
          <div className="mx-auto flex w-full max-w-7xl min-[1920px]:max-w-[85rem] min-[2560px]:max-w-[96rem] flex-1 items-center px-6 py-8 md:px-10 md:py-10 min-[1920px]:px-12 min-[2560px]:px-14">
            <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start min-[1920px]:gap-16 min-[2560px]:gap-20">
              <div className="flex flex-col items-start justify-center text-left w-full">
                <motion.h1
                  className="font-display flex w-full max-w-full flex-col text-left text-[clamp(1.2rem,3.25vw+0.55rem,2.65rem)] font-bold normal-case leading-[1.12] tracking-tight text-foreground sm:leading-[1.1] min-[1920px]:text-[clamp(2.75rem,1.85vw+1.1rem,3.85rem)] min-[1920px]:leading-[1.1] min-[2560px]:text-[clamp(3.25rem,1.45vw+1.35rem,4.65rem)]"
                  initial={reducedMotion ? false : "hidden"}
                  animate="visible"
                  variants={reducedMotion ? undefined : charContainer}
                >
                  <span className="flex flex-col gap-3 sm:gap-4 min-[1920px]:gap-5 min-[2560px]:gap-6 text-left">
                    {headlineLines.map((line, lineIndex) => (
                      <span key={`headline-line-${lineIndex}`} className="flex flex-wrap text-left" style={{ columnGap: "0.25em" }}>
                        {line.split(" ").map((word, wordIndex) => (
                          <span key={`headline-line-${lineIndex}-word-${wordIndex}`} className="inline-flex whitespace-nowrap">
                            {word.split("").map((char, charIndex) => (
                              <motion.span
                                key={`headline-line-${lineIndex}-word-${wordIndex}-char-${charIndex}`}
                                variants={reducedMotion ? undefined : charItem}
                                transition={{ duration: motionDuration ?? 0.45, ease: "easeOut" }}
                                className="inline-block"
                              >
                                {char}
                              </motion.span>
                            ))}
                          </span>
                        ))}
                      </span>
                    ))}
                  </span>

                  <span className="relative mt-0.5 block shrink-0 overflow-hidden text-theme-accent leading-[1.12] text-left sm:mt-1">
                    {reducedMotion ? (
                      <span className="block text-left">{rotatingWord}</span>
                    ) : (
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={rotatingWord}
                          className="inline-block text-left"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                        >
                          {typewrittenWord}
                          <span
                            className="typewriter-cursor"
                            style={{
                              display: "inline-block",
                              position: "relative",
                              width: "0.06em",
                              height: "1em",
                              top: "0.15em",
                              background: "var(--theme-accent, #2563eb)",
                              marginLeft: "6px",
                              borderRadius: "1px",
                              boxShadow: "0 0 10px rgba(37, 99, 235, 0.5), 0 0 20px rgba(37, 99, 235, 0.25)",
                              animation: twPhase === "pause"
                                ? "tw-cursor-blink 0.7s step-end infinite, tw-cursor-glow 2s ease-in-out infinite"
                                : "tw-cursor-glow 2s ease-in-out infinite",
                              opacity: 1,
                            }}
                          />
                        </motion.span>
                      </AnimatePresence>
                    )}
                  </span>
                </motion.h1>

                <motion.p
                  className="mt-8 max-w-2xl text-left text-base text-muted tracking-wide md:text-sm min-[1920px]:mt-10 min-[1920px]:max-w-3xl min-[1920px]:text-lg min-[2560px]:mt-12 min-[2560px]:text-xl"
                  initial={reducedMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.01, delay: reducedMotion ? 0 : 0.88 }}
                >
                  {reducedMotion ? hero.subtext : subtextDisplayed}
                  {!reducedMotion && subtextDisplayed.length < hero.subtext.length && (
                    <span
                      style={{
                        display: "inline-block",
                        width: "2px",
                        height: "0.8em",
                        background: "var(--text-faint, rgba(255,255,255,0.52))",
                        marginLeft: "2px",
                        verticalAlign: "text-bottom",
                        borderRadius: "1px",
                        animation: "tw-cursor-blink 0.7s step-end infinite",
                      }}
                    />
                  )}
                </motion.p>

                <motion.div
                  className="mt-10 flex flex-wrap gap-4 justify-start items-center w-full min-[1920px]:mt-12 min-[1920px]:gap-5 min-[2560px]:mt-14 min-[2560px]:gap-6"
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: motionDuration ?? 0.6, delay: reducedMotion ? 0 : 1, ease: "easeOut" }}
                >
                  <Link
                    href={hero.primaryCta.href}
                    className="hero-primary-btn inline-flex px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] no-underline min-[1920px]:px-9 min-[1920px]:py-3.5 min-[1920px]:text-[0.875rem] min-[2560px]:px-10 min-[2560px]:py-4 min-[2560px]:text-[1rem]"
                  >
                    {hero.primaryCta.label}
                  </Link>
                  <Link
                    href={hero.secondaryCta.href}
                    className="hero-secondary-btn inline-flex px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] no-underline min-[1920px]:px-9 min-[1920px]:py-3.5 min-[1920px]:text-[0.875rem] min-[2560px]:px-10 min-[2560px]:py-4 min-[2560px]:text-[1rem]"
                  >
                    <span className="text-inherit">{hero.secondaryCta.label}</span>
                  </Link>
                </motion.div>
              </div>

              {/* Morph Art */}
              <motion.div
                className="relative hidden h-[320px] lg:-ml-8 lg:block min-[1920px]:h-[400px] min-[1920px]:-ml-10 min-[2560px]:h-[480px] min-[2560px]:-ml-12"
                initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: motionDuration ?? 0.7, delay: reducedMotion ? 0 : 0.4, ease: "easeOut" }}
              >
                <ProductMorphArt />
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
       
        </div>

        {/* Company marquee */}
        <div
          className="hero-marquee relative z-10 shrink-0 border-t border-line bg-base/90 backdrop-blur-sm min-[1920px]:!text-[12px] min-[2560px]:!text-[13px]"
          aria-label="Companies we work with"
        >
          <div className="marquee py-3 md:py-3.5 min-[1920px]:py-4 min-[2560px]:py-5">
            <div className="marquee-track">
              <span>{companyMarqueeText}</span>
              <span aria-hidden>{companyMarqueeText}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Counter Strip — directly below hero ── */}
      <motion.section
        aria-label="Key statistics"
        className="border-b border-line bg-base"
        initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-line lg:grid-cols-4 lg:divide-y-0 min-[1920px]:max-w-[85rem] min-[2560px]:max-w-[96rem]">
          {counterStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center gap-1 px-6 py-10 text-center md:px-8 md:py-12"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: reducedMotion ? 0 : i * 0.08,
                ease: "easeOut",
              }}
            >
              <p className="font-display text-[2.4rem] font-bold leading-none text-foreground min-[1920px]:text-[3rem] min-[2560px]:text-[3.5rem]">
                <AnimatedCounter value={stat.value} duration={1600} />
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}