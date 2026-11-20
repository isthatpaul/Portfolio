"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { editorialFooter, links } = portfolioData;
  const reduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = window.setTimeout(() => {
        setCopied(false);
        copyTimerRef.current = null;
      }, 2600);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  return (
    <>
      <footer className="mb-0 w-full scroll-mt-36 border-t border-footer-line bg-footer-surface lg:scroll-mt-6" id="footer">
        <div className="mx-auto max-w-5xl px-6 pb-10 pt-14 sm:px-12 sm:pt-16">
          <div>
            <h2 className="max-w-[680px] font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.5rem]">
              <span className="block">{editorialFooter.headline.lineOne}</span>{" "}
              <span className="highlight-sky inline-block">{editorialFooter.headline.lineTwo}</span>
            </h2>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                href={`mailto:${links.email}`}
              >
                <Mail aria-hidden="true" size={16} />
                <span>{links.email}</span>
              </a>
              <button
                aria-label={copied ? "Email copied to clipboard" : `Copy ${links.email} email address`}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/15 bg-accent px-4 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-accent-strong"
                onClick={handleCopyEmail}
                type="button"
              >
                {copied ? <Check aria-hidden="true" size={16} /> : <Copy aria-hidden="true" size={16} />}
                <span>{copied ? "Copied" : "Copy email"}</span>
              </button>
              <a className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-elevated" href={links.linkedin} rel="noreferrer" target="_blank">
                <Linkedin aria-hidden="true" size={16} />
                {editorialFooter.linkedinLabel}
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
              <a className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-elevated" href={links.github} rel="noreferrer" target="_blank">
                <Github aria-hidden="true" size={16} />
                {editorialFooter.githubLabel}
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-footer-line pt-6 text-xs text-muted-strong sm:flex-row sm:items-center sm:justify-between">
            <p>{editorialFooter.metadata}</p>
            <a className="inline-flex min-h-11 items-center gap-1 rounded-full px-3 -mx-3 font-semibold text-ink transition-colors hover:bg-black/5" href="#top">{editorialFooter.backToTop}</a>
          </div>
        </div>
      </footer>

      <div aria-atomic="true" aria-live="polite" className="pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2" role="status">
        <AnimatePresence>
          {copied ? (
            <motion.div
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              className="flex items-center gap-2 whitespace-nowrap rounded-full bg-ink px-4 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(20,24,36,0.18)]"
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            >
              <Check aria-hidden="true" size={15} /> Email copied to clipboard
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
}
