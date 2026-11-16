"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Contact() {
  const { sectionCopy, contact, links, profile } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
    window.setTimeout(() => setSubmitted(false), 4200);
  };

  return (
    <>
      <section aria-labelledby="contact-title" className="py-16 sm:py-20 lg:py-24" id="contact">
        <div className="max-w-[850px]">
          <p className="eyebrow">{sectionCopy.contact.eyebrow}</p>
          <h2 className="section-title mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl" id="contact-title">
            <span className="highlight-amber">{sectionCopy.contact.title}</span>
          </h2>
          <p className="mt-5 max-w-[610px] text-sm leading-6 text-muted sm:text-base">{sectionCopy.contact.description}</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(230px,.72fr)_minmax(0,1.28fr)] lg:gap-14">
          <div>
            <div className="space-y-1 border-t border-line">
              <a className="group flex min-h-14 items-center justify-between gap-4 border-b border-line text-sm font-semibold text-ink" href={`mailto:${links.email}`}>
                <span className="flex items-center gap-3"><Mail aria-hidden="true" size={17} /> {links.email}</span>
                <ArrowUpRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={15} />
              </a>
              <p className="flex min-h-14 items-center gap-3 border-b border-line text-sm font-semibold text-ink"><MapPin aria-hidden="true" size={17} /> {profile.location}</p>
              <a className="group flex min-h-14 items-center justify-between gap-4 border-b border-line text-sm font-semibold text-ink" href={links.linkedin} target="_blank" rel="noreferrer">
                <span className="flex items-center gap-3"><Linkedin aria-hidden="true" size={17} /> {contact.detailLabels.linkedin}</span>
                <ArrowUpRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={15} />
              </a>
              <a className="group flex min-h-14 items-center justify-between gap-4 border-b border-line text-sm font-semibold text-ink" href={links.github} target="_blank" rel="noreferrer">
                <span className="flex items-center gap-3"><Github aria-hidden="true" size={17} /> {contact.detailLabels.github}</span>
                <ArrowUpRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={15} />
              </a>
            </div>

            <button className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border border-ink bg-white px-4 text-sm font-bold text-ink transition-colors hover:bg-[#F5F1EB]" onClick={handleCopyEmail} type="button">
              {copied ? <Check aria-hidden="true" size={15} /> : <Copy aria-hidden="true" size={15} />}
              {copied ? "Email copied" : "Copy email"}
            </button>
          </div>

          <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
            <h3 className="font-display text-xl font-extrabold tracking-[-0.045em] text-ink">{sectionCopy.contact.formTitle}</h3>
            <p className="mt-2 max-w-[480px] text-sm leading-6 text-muted">{sectionCopy.contact.formDescription}</p>

            <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-xs font-bold text-ink">
                  {contact.form.nameLabel}
                  <input autoComplete="name" className="mt-2 min-h-12 w-full rounded-xl border border-line bg-[#FFFEFC] px-4 text-sm font-medium text-ink placeholder:text-[#9BA2AD]" name="name" placeholder={contact.form.namePlaceholder} required />
                </label>
                <label className="block text-xs font-bold text-ink">
                  {contact.form.emailLabel}
                  <input autoComplete="email" className="mt-2 min-h-12 w-full rounded-xl border border-line bg-[#FFFEFC] px-4 text-sm font-medium text-ink placeholder:text-[#9BA2AD]" name="email" placeholder={contact.form.emailPlaceholder} required type="email" />
                </label>
              </div>
              <label className="block text-xs font-bold text-ink">
                {contact.form.messageLabel}
                <textarea className="mt-2 min-h-32 w-full resize-y rounded-xl border border-line bg-[#FFFEFC] px-4 py-3 text-sm font-medium leading-6 text-ink placeholder:text-[#9BA2AD]" name="message" placeholder={contact.form.messagePlaceholder} required />
              </label>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C8491]">{links.email}</span>
                <button className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5" type="submit">
                  {sectionCopy.contact.submitLabel} <Send aria-hidden="true" size={15} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-line py-6">
        <div className="flex flex-col gap-3 text-xs text-[#7C8491] sm:flex-row sm:items-center sm:justify-between">
          <p>{contact.footerNote}</p>
          <a className="inline-flex items-center gap-1 font-semibold text-ink" href="#hero">Back to top <ArrowUpRight aria-hidden="true" size={13} /></a>
        </div>
      </footer>

      <AnimatePresence>
        {copied || submitted ? (
          <motion.div animate={{ opacity: 1, y: 0 }} aria-live="polite" className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(20,24,36,0.18)]" exit={{ opacity: 0, y: 8 }} initial={{ opacity: 0, y: 8 }} role="status">
            <Check aria-hidden="true" size={15} /> {copied ? "Email copied to clipboard" : sectionCopy.contact.successMessage}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
