"use client";

import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  const { sectionCopy, experience } = portfolioData;
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="experience-title" className="scroll-mt-36 py-16 sm:py-20 lg:scroll-mt-6 lg:py-24" id="experience">
      <div className="max-w-[850px]">
        <h2 className="section-title font-display text-4xl font-extrabold text-ink sm:text-5xl" id="experience-title">{sectionCopy.experience.title}</h2>
        <p className="mt-5 max-w-[58ch] text-sm leading-6 text-muted sm:text-base">{sectionCopy.experience.description}</p>
      </div>

      <div className="mt-10 divide-y divide-line border-t border-line sm:mt-12">
        {experience.map((item, index) => (
          <motion.article
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="py-8 last:pb-0 sm:py-9"
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            key={item.id}
            transition={{ delay: reduceMotion ? 0 : index * 0.06, duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-extrabold tracking-[-0.03em] text-ink sm:text-2xl">{item.organization}</h3>
                <p className="mt-1 text-sm font-semibold text-muted">{item.role}</p>
              </div>
              {(item.date || item.current) ? (
                <div className="flex flex-wrap items-center gap-2.5">
                  {item.date ? (
                    <span className="font-mono text-xs font-medium uppercase leading-5 tracking-[0.08em] text-muted-strong">{item.date}</span>
                  ) : null}
                  {item.current ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-accent px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.08em] text-ink">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-dot" />
                      Current
                    </span>
                  ) : null}
                </div>
              ) : null}
            </div>

            <ul className="mt-4 max-w-[65ch] space-y-2.5 text-sm leading-6 text-muted">
              {item.impact.map((point) => (
                <li className="flex gap-3" key={point}><span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-dot" />{point}</li>
              ))}
            </ul>
            <ul aria-label={`${item.organization} focus tags`} className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => <li className="rounded-full border border-line/80 bg-chip px-3 py-1 font-mono text-xs text-muted-strong" key={tag}>{tag}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
