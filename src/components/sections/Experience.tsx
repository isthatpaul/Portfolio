"use client";

import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  const { sectionCopy, experience } = portfolioData;
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="experience-title" className="py-16 sm:py-20 lg:py-24" id="experience">
      <div className="max-w-[850px]">
        <h2 className="section-title font-display text-4xl font-extrabold text-ink sm:text-5xl" id="experience-title">{sectionCopy.experience.title}</h2>
        <p className="mt-5 max-w-[58ch] text-sm leading-6 text-muted sm:text-base">{sectionCopy.experience.description}</p>
      </div>

      <div className="mt-12 space-y-0 sm:mt-16">
        {experience.map((item, index) => (
          <motion.article
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="border-b border-line py-8 first:pt-0 last:border-b-0 sm:py-10"
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            key={item.id}
            transition={{ delay: reduceMotion ? 0 : index * 0.06, duration: 0.4, ease: "easeOut" }}
          >
            <div className="relative border-l border-[#D9D3C9] pl-6 sm:pl-9">
              <span aria-hidden="true" className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-white bg-ink ring-1 ring-ink/10" />
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-extrabold tracking-[-0.03em] text-ink sm:text-2xl">{item.role}</h3>
                  <p className="mt-1 text-sm font-semibold text-muted">
                    {item.organization} <span aria-hidden="true" className="text-muted-strong">·</span> {item.location}
                  </p>
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

              <p className="mt-5 max-w-[650px] text-sm leading-6 text-muted">{item.summary}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                {item.impact.map((point) => (
                  <li className="flex gap-3" key={point}><span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-dot" />{point}</li>
                ))}
              </ul>
              <ul aria-label={`${item.role} skill tags`} className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => <li className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted-strong" key={tag}>{tag}</li>)}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
