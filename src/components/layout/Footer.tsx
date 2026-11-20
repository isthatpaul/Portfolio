"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from "lucide-react";
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
      <footer className="mb-0 w-full border-t border-[#E6E0D6] bg-[#F3EFEA]" id="footer">
        <div className="mx-auto max-w-5xl px-6 pb-10 pt-16 sm:px-12">
          <div>
            <svg aria-hidden="true" className="-ml-1 mb-2 h-11 w-11 text-[#F59E0B]" fill="none" viewBox="0 0 56 56">
              <path d="M10 40C16 30 21 23 31 16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              <path d="M33 8V18M28 13H38M43 23L49 29M46 26H40" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              <circle cx="11" cy="40" fill="currentColor" r="3" />
            </svg>

            <p className="eyebrow">{editorialFooter.eyebrow}</p>
            <h2 className="mt-4 max-w-[680px] font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
              <span className="block">{editorialFooter.headline.lineOne}</span>
              <span className="relative isolate inline-block w-fit">
                <span aria-hidden="true" className="absolute bottom-[0.06em] left-0 right-0 top-[46%] -z-10 -rotate-1 rounded-[45%_55%_48%_52%] bg-[#E0F2FE]" />
                {editorialFooter.headline.lineTwo}
              </span>
            </h2>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FDBA74] px-5 py-2.5 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5"
                href={`mailto:${links.email}`}
              >
                <Mail aria-hidden="true" size={16} />
                <span>{links.email}</span>
              </a>
              <button
                aria-label={copied ? "Email copied to clipboard" : `Copy ${links.email} email address`}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-[#F5F1EB]"
                onClick={handleCopyEmail}
                type="button"
              >
                {copied ? <Check aria-hidden="true" size={16} /> : <Copy aria-hidden="true" size={16} />}
                <span>{copied ? "Copied" : "Copy email"}</span>
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

          <div className="mt-14 flex flex-col gap-3 border-t border-[#E6E0D6] pt-6 text-xs text-[#7C8491] sm:flex-row sm:items-center sm:justify-between">
            <p>{editorialFooter.metadata}</p>
            <a className="inline-flex items-center gap-1 font-semibold text-ink" href="#top">{editorialFooter.backToTop}</a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {copied ? (
          <motion.div animate={{ opacity: 1, y: 0 }} aria-atomic="true" aria-label="Email copied to clipboard" aria-live="polite" className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(20,24,36,0.18)]" exit={{ opacity: 0, y: 8 }} initial={{ opacity: 0, y: 8 }} role="status">
            <Check aria-hidden="true" size={15} /> Email copied to clipboard
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
