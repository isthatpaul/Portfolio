"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import type { AcademicWork } from "@/data/portfolio";
import { portfolioData } from "@/data/portfolio";
import { Icon } from "@/components/ui/Icon";

export function AcademicWork() {
  const { sectionCopy, filters, academicWorks } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>(filters[0]);
  const [selectedWork, setSelectedWork] = useState<AcademicWork | null>(null);
  const reduceMotion = useReducedMotion();

  const visibleWorks = useMemo(() => {
    if (activeFilter === "All") return academicWorks;
    return academicWorks.filter((work) => work.category === activeFilter);
  }, [academicWorks, activeFilter]);

  useEffect(() => {
    if (!selectedWork) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedWork(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedWork]);

  return (
    <section aria-labelledby="academic-work-title" className="border-b border-line py-16 sm:py-20 lg:py-24" id="academic-works">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">{sectionCopy.academicWorks.eyebrow}</p>
          <h2 className="section-title mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl" id="academic-work-title">
            <span className="highlight-amber">{sectionCopy.academicWorks.title}</span>
          </h2>
          <p className="mt-5 max-w-[600px] text-sm leading-6 text-muted sm:text-base">{sectionCopy.academicWorks.description}</p>
        </div>

        <div aria-label={sectionCopy.academicWorks.filterLabel} className="flex max-w-full gap-2 overflow-x-auto pb-1" role="group">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                aria-pressed={isActive}
                className={`min-h-10 shrink-0 rounded-full border px-4 text-xs font-bold transition-colors duration-200 ${isActive ? "border-ink bg-ink text-white" : "border-line bg-white text-muted hover:border-ink/30 hover:text-ink"}`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <motion.div className="mt-9 grid gap-4 md:grid-cols-2" layout>
        <AnimatePresence initial={false} mode="popLayout">
          {visibleWorks.map((work, index) => (
            <motion.article
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              className="group flex min-h-[280px] flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-colors duration-200 hover:border-ink/30"
              exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
              initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
              key={work.id}
              layout
              transition={{ delay: reduceMotion ? 0 : index * 0.035, duration: 0.32, ease: "easeOut" }}
            >
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F1EB] text-ink">
                  <Icon name={work.icon} size={21} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#7C8491]">0{index + 1}</span>
              </div>

              <div className="mt-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C8491]">{work.category}</p>
                <h3 className="mt-2 font-display text-xl font-extrabold tracking-[-0.045em] text-ink sm:text-2xl">{work.title}</h3>
                <p className="mt-1 text-xs font-semibold text-muted">{work.context}</p>
                <p className="mt-4 max-w-[470px] text-sm leading-6 text-muted">{work.summary}</p>
              </div>

              <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-7">
                <ul aria-label={`${work.title} technology tags`} className="flex max-w-[70%] flex-wrap gap-2">
                  {work.tags.map((tag) => <li className="rounded-full bg-[#F8F5F0] px-2.5 py-1 font-mono text-[10px] text-[#7C8491]" key={tag}>{tag}</li>)}
                </ul>
                <button className="inline-flex min-h-11 items-center gap-1.5 text-xs font-bold text-ink transition-transform duration-200 group-hover:translate-x-0.5" onClick={() => setSelectedWork(work)} type="button">
                  {sectionCopy.academicWorks.inspectAction} <ArrowUpRight aria-hidden="true" size={15} />
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedWork ? (
          <motion.div animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-end justify-center bg-ink/35 p-3 backdrop-blur-[2px] sm:items-center sm:p-8" exit={{ opacity: 0 }} initial={{ opacity: 0 }} onMouseDown={(event) => { if (event.currentTarget === event.target) setSelectedWork(null); }}>
            <motion.div
              aria-describedby="artifact-modal-description"
              aria-labelledby="artifact-modal-title"
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              className="max-h-[min(720px,calc(100vh-24px))] w-full max-w-2xl overflow-y-auto rounded-3xl border border-line bg-white p-6 shadow-[0_24px_80px_rgba(20,24,36,0.18)] sm:p-9"
              exit={reduceMotion ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
              initial={reduceMotion ? undefined : { opacity: 0, y: 14, scale: 0.98 }}
              role="dialog"
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="eyebrow">{selectedWork.category}</p>
                  <h3 className="section-title mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl" id="artifact-modal-title">{selectedWork.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-muted">{selectedWork.context}</p>
                </div>
                <button aria-label="Close artifact preview" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-ink/30 hover:text-ink" onClick={() => setSelectedWork(null)} type="button">
                  <X aria-hidden="true" size={18} />
                </button>
              </div>

              <p className="mt-8 text-base leading-7 text-muted" id="artifact-modal-description">{selectedWork.details}</p>

              <div className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#7C8491]">Focus</h4>
                  <ul className="mt-3 space-y-2 text-sm font-semibold text-ink">
                    {selectedWork.outcomes.map((outcome) => <li className="flex gap-2" key={outcome}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8CCEF1]" />{outcome}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#7C8491]">Stack</h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {selectedWork.tags.map((tag) => <li className="rounded-full bg-[#F8F5F0] px-3 py-1.5 font-mono text-[10px] text-muted" key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </div>

              {(selectedWork.reportUrl || selectedWork.repoUrl) ? (
                <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
                  {selectedWork.reportUrl ? <a className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm font-bold text-white" href={selectedWork.reportUrl} target="_blank" rel="noreferrer">Inspect report <ExternalLink aria-hidden="true" size={15} /></a> : null}
                  {selectedWork.repoUrl ? <a className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-bold text-ink" href={selectedWork.repoUrl} target="_blank" rel="noreferrer">View code <ExternalLink aria-hidden="true" size={15} /></a> : null}
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
