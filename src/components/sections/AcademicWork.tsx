"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Copy, Github, Mail, X } from "lucide-react";
import type { AcademicWork } from "@/data/portfolio";
import { portfolioData } from "@/data/portfolio";
import { Icon } from "@/components/ui/Icon";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function AcademicWork() {
  const { sectionCopy, academicWorks, links } = portfolioData;
  const works: readonly AcademicWork[] = academicWorks;
  const [selectedWork, setSelectedWork] = useState<AcademicWork | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const reduceMotion = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const copyTimerRef = useRef<number | null>(null);

  const closeModal = () => {
    setSelectedWork(null);
    setCopiedEmail(false);
  };

  const handleCopyModalEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopiedEmail(true);
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = window.setTimeout(() => {
        setCopiedEmail(false);
        copyTimerRef.current = null;
      }, 2400);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  useEffect(() => {
    return () => {
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!selectedWork) return;

    const opener = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      } else {
        dialogRef.current?.focus();
      }
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusables = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((el) => el.offsetParent !== null);

      if (focusables.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (!active || active === first || !dialogRef.current.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (!active || active === last || !dialogRef.current.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      opener?.focus();
    };
  }, [selectedWork]);

  return (
    <section aria-labelledby="academic-work-title" className="scroll-mt-36 border-b border-line py-16 sm:py-20 lg:scroll-mt-6 lg:py-24" id="academic-works">
      <div className="max-w-[680px]">
        <h2 className="section-title font-display text-4xl font-extrabold text-ink sm:text-5xl" id="academic-work-title">
          <span className="highlight-amber">{sectionCopy.academicWorks.title}</span>
        </h2>
        <p className="mt-5 max-w-[58ch] text-sm leading-6 text-muted sm:text-base">{sectionCopy.academicWorks.description}</p>
      </div>

      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {works.map((work, index) => (
          <motion.article
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="group relative flex min-h-[268px] cursor-pointer flex-col rounded-2xl border border-line bg-surface p-6 shadow-card transition-colors duration-200 hover:border-ink/30 focus-within:border-ink/40"
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            key={work.id}
            onClick={(event) => {
              if (window.getSelection()?.toString()) return;
              if ((event.target as HTMLElement).closest("button, a")) return;
              const btn = event.currentTarget.querySelector<HTMLButtonElement>("button[data-card-trigger]");
              triggerRef.current = btn;
              setSelectedWork(work);
            }}
            transition={{ delay: reduceMotion ? 0 : index * 0.035, duration: 0.32, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-elevated text-ink">
                <Icon name={work.icon} size={21} />
              </div>
              <span className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-muted-strong">{work.category}</span>
            </div>

            <div className="mt-6">
              <h3 className="font-display text-xl font-extrabold tracking-[-0.03em] text-ink sm:text-2xl">{work.title}</h3>
              <p className="mt-1 text-xs font-semibold text-muted">{work.context}</p>
              <p className="mt-4 max-w-[48ch] text-sm leading-6 text-muted">{work.summary}</p>
            </div>

            <div className="mt-auto space-y-4 pt-6">
              <ul aria-label={`${work.title} technology tags`} className="flex flex-wrap gap-2">
                {work.tags.map((tag) => <li className="rounded-full border border-line/80 bg-chip px-3 py-1 font-mono text-xs text-muted-strong" key={tag}>{tag}</li>)}
              </ul>
              <div className="flex items-center justify-between gap-3 border-t border-line/70 pt-3">
                <span className="font-mono text-xs text-muted-strong">
                  {work.repoUrl || work.reportUrl ? "Source linked" : "Walkthrough on request"}
                </span>
                <button
                  aria-label={`${work.title} — ${sectionCopy.academicWorks.inspectAction}`}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-2 text-xs font-bold text-ink transition-transform duration-200 group-hover:translate-x-0.5"
                  data-card-trigger=""
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget;
                    setSelectedWork(work);
                  }}
                  type="button"
                >
                  {sectionCopy.academicWorks.inspectAction} <ArrowRight aria-hidden="true" size={15} />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedWork ? (
          <motion.div animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-end justify-center bg-ink/35 p-3 backdrop-blur-[2px] sm:items-center sm:p-8" exit={{ opacity: 0 }} initial={{ opacity: 0 }} onMouseDown={(event) => { if (event.currentTarget === event.target) closeModal(); }}>
            <motion.div
              aria-describedby="artifact-modal-description"
              aria-labelledby="artifact-modal-title"
              aria-modal="true"
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              className="flex max-h-[min(760px,calc(100vh-24px))] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_24px_80px_rgba(20,24,36,0.18)] focus:outline-none"
              exit={reduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
              initial={reduceMotion ? undefined : { opacity: 0, y: 14, scale: 0.98 }}
              ref={dialogRef}
              role="dialog"
              tabIndex={-1}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="overflow-y-auto p-5 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="section-title font-display text-2xl font-extrabold text-ink sm:text-4xl" id="artifact-modal-title">{selectedWork.title}</h3>
                    <p className="mt-1.5 text-sm font-semibold text-muted">{selectedWork.context} · {selectedWork.category}</p>
                  </div>
                  <button
                    aria-label="Close project details"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-ink/30 hover:text-ink"
                    onClick={closeModal}
                    ref={closeButtonRef}
                    type="button"
                  >
                    <X aria-hidden="true" size={18} />
                  </button>
                </div>

                <p className="mt-5 text-sm leading-7 text-muted sm:mt-6 sm:text-base" id="artifact-modal-description">{selectedWork.details}</p>

                {selectedWork.previewImage ? (
                  <figure className="mt-6 overflow-hidden rounded-2xl border border-line bg-elevated">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        alt={selectedWork.previewImage.alt}
                        className="object-cover object-center"
                        fill
                        sizes="(max-width: 640px) calc(100vw - 4rem), 600px"
                        src={selectedWork.previewImage.src}
                      />
                    </div>
                    <figcaption className="border-t border-line bg-surface px-4 py-2.5 text-xs text-muted">
                      {selectedWork.previewImage.caption}
                    </figcaption>
                  </figure>
                ) : null}

                <div className="mt-6 grid gap-5 border-t border-line pt-5 sm:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-strong">What was built</h4>
                    <ul className="mt-3 space-y-2 text-sm font-semibold text-ink">
                      {selectedWork.outcomes.map((outcome) => <li className="flex gap-2" key={outcome}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-dot" />{outcome}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-strong">Stack</h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {selectedWork.tags.map((tag) => <li className="rounded-full border border-line/80 bg-chip px-3 py-1 font-mono text-xs text-muted-strong" key={tag}>{tag}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="shrink-0 border-t border-line bg-cream/70 px-5 py-4 sm:px-8 sm:py-5">
                {(selectedWork.reportUrl || selectedWork.repoUrl) ? (
                  <div className="flex flex-wrap gap-2.5">
                    {selectedWork.reportUrl ? (
                      <a className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm font-bold text-white" href={selectedWork.reportUrl} target="_blank" rel="noreferrer">
                        Read report <ArrowUpRight aria-hidden="true" size={15} />
                      </a>
                    ) : null}
                    {selectedWork.repoUrl ? (
                      <a className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-bold text-ink" href={selectedWork.repoUrl} target="_blank" rel="noreferrer">
                        View code <ArrowUpRight aria-hidden="true" size={15} />
                      </a>
                    ) : null}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-xs leading-5 text-muted sm:text-sm">{sectionCopy.academicWorks.walkthroughNote}</p>
                    <div className="flex flex-wrap gap-2.5">
                      <a
                        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 text-xs font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 sm:text-sm"
                        href={links.github}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Github aria-hidden="true" size={15} />
                        {sectionCopy.academicWorks.githubAction}
                        <ArrowUpRight aria-hidden="true" size={15} />
                      </a>
                      <a
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-xs font-bold text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-elevated sm:text-sm"
                        href={`mailto:${links.email}?subject=${encodeURIComponent(`Walkthrough request: ${selectedWork.title}`)}`}
                      >
                        <Mail aria-hidden="true" size={15} />
                        {sectionCopy.academicWorks.requestAction}
                      </a>
                      <button
                        aria-label={copiedEmail ? "Email copied to clipboard" : `Copy ${links.email}`}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/15 bg-accent px-4 text-xs font-bold text-ink transition-colors duration-200 hover:bg-accent-strong sm:text-sm"
                        onClick={handleCopyModalEmail}
                        type="button"
                      >
                        {copiedEmail ? <Check aria-hidden="true" size={15} /> : <Copy aria-hidden="true" size={15} />}
                        {copiedEmail ? "Copied" : "Copy email"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
