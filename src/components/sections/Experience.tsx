"use client";

import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Icon } from "@/components/ui/Icon";

export function Experience() {
  const { sectionCopy, experience } = portfolioData;
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="experience-title" className="border-b border-line py-16 sm:py-20 lg:py-24" id="experience">
      <div className="max-w-[850px]">
        <p className="eyebrow">{sectionCopy.experience.eyebrow}</p>
        <h2 className="section-title mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl" id="experience-title">{sectionCopy.experience.title}</h2>
        <p className="mt-5 max-w-[610px] text-sm leading-6 text-muted sm:text-base">{sectionCopy.experience.description}</p>
      </div>

      <div className="mt-12 space-y-0 sm:mt-16">
        {experience.map((item, index) => (
          <motion.article
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="grid gap-5 border-b border-line py-8 first:pt-0 last:border-b-0 sm:grid-cols-[145px_minmax(0,1fr)] sm:gap-8 sm:py-10"
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            key={item.id}
            transition={{ delay: reduceMotion ? 0 : index * 0.06, duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-start gap-3 sm:justify-end">
              <span className="mt-0.5 font-mono text-[11px] font-medium uppercase leading-5 tracking-[0.08em] text-[#7C8491] sm:text-right">{item.date}</span>
            </div>

            <div className="relative border-l border-[#D9D3C9] pl-7 sm:pl-9">
              <span aria-hidden="true" className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full border-2 border-white bg-ink ring-1 ring-ink/10" />
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C8491]">{item.organization}</p>
                  <h3 className="mt-2 font-display text-xl font-extrabold tracking-[-0.045em] text-ink sm:text-2xl">{item.role}</h3>
                  <p className="mt-1 text-xs font-semibold text-muted">{item.location}</p>
                </div>
                <div className="flex items-center gap-3">
                  {item.current ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E0F2FE] px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#2B8FC4]" />
                      Current
                    </span>
                  ) : null}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-muted">
                    <Icon name={item.icon} size={17} />
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-[650px] text-sm leading-6 text-muted">{item.summary}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                {item.impact.map((point) => (
                  <li className="flex gap-3" key={point}><span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8CCEF1]" />{point}</li>
                ))}
              </ul>
              <ul aria-label={`${item.role} skill tags`} className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => <li className="rounded-full bg-white px-3 py-1.5 font-mono text-[10px] text-[#7C8491]" key={tag}>{tag}</li>)}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
