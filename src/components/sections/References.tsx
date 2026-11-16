import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function References() {
  const { sectionCopy, references } = portfolioData;

  return (
    <section aria-labelledby="references-title" className="border-b border-line py-16 sm:py-20 lg:py-24" id="references">
      <div className="max-w-[850px]">
        <p className="eyebrow">{sectionCopy.references.eyebrow}</p>
        <h2 className="section-title mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl" id="references-title">
          <span className="highlight-sky">{sectionCopy.references.title}</span>
        </h2>
        <p className="mt-5 max-w-[610px] text-sm leading-6 text-muted sm:text-base">{sectionCopy.references.description}</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {references.map((reference, index) => (
          <article className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-card sm:p-7" key={reference.id}>
            <span aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-1 bg-[#D9F0FC]" />
            <div className="flex items-start justify-between gap-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#7C8491]">{reference.type}</p>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#7C8491]">0{index + 1}</span>
            </div>
            <h3 className="mt-8 font-display text-xl font-extrabold tracking-[-0.045em] text-ink">{reference.name}</h3>
            <p className="mt-2 text-xs font-semibold text-muted">{reference.context}</p>
            <p className="mt-6 border-l-2 border-[#BDE3FA] pl-4 text-sm leading-6 text-muted">{reference.note}</p>
            <div className="mt-7 flex items-center justify-between gap-4 border-t border-line pt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C8491]">{reference.availability}</span>
              <a className="inline-flex min-h-10 items-center gap-1 text-xs font-bold text-ink" href="#contact">
                Connect <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
