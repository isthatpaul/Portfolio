"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { editorialFooter, links } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  return (
    <>
      <footer className="border-t border-line py-16 sm:py-20 lg:py-24" id="global-footer">
        <div className="relative">
          <svg aria-hidden="true" className="absolute -left-2 -top-4 h-14 w-14 text-[#F59E0B] sm:-left-4 sm:-top-5" fill="none" viewBox="0 0 56 56">
            <path d="M10 40C16 30 21 23 31 16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            <path d="M33 8V18M28 13H38M43 23L49 29M46 26H40" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            <circle cx="11" cy="40" fill="currentColor" r="3" />
          </svg>

          <p className="eyebrow">{editorialFooter.eyebrow}</p>
          <h2 className="mt-4 max-w-[760px] font-display text-[clamp(3rem,7vw,6.5rem)] font-extrabold leading-[.94] tracking-[-0.075em] text-ink">
            <span className="block">{editorialFooter.headline.lineOne}</span>
            <span className="block highlight-sky w-fit">{editorialFooter.headline.lineTwo}</span>
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            <button className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FDBA74] px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5" onClick={handleCopyEmail} type="button">
              {copied ? <Check aria-hidden="true" size={16} /> : <Copy aria-hidden="true" size={16} />}
              {copied ? "Email copied" : editorialFooter.emailLabel}
            </button>
            <a className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FDE047] px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5" href={links.linkedin} rel="noreferrer" target="_blank">
              <Linkedin aria-hidden="true" size={16} />
              {editorialFooter.linkedinLabel}
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <a className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#BAE6FD] px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5" href={links.github} rel="noreferrer" target="_blank">
              <Github aria-hidden="true" size={16} />
              {editorialFooter.githubLabel}
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-5 text-xs text-[#7C8491] sm:flex-row sm:items-center sm:justify-between">
          <p>{editorialFooter.metadata}</p>
          <a className="inline-flex items-center gap-1 font-semibold text-ink" href="#hero">{editorialFooter.backToTop}</a>
        </div>
      </footer>

      <AnimatePresence>
        {copied ? (
          <motion.div animate={{ opacity: 1, y: 0 }} aria-live="polite" className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(20,24,36,0.18)]" exit={{ opacity: 0, y: 8 }} initial={{ opacity: 0, y: 8 }} role="status">
            <Check aria-hidden="true" size={15} /> Email copied to clipboard
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
