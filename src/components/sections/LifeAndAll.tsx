import { portfolioData } from "@/data/portfolio";
import { Icon } from "@/components/ui/Icon";

export function LifeAndAll() {
  const { life } = portfolioData;

  return (
    <section aria-labelledby="life-title" className="py-16 sm:py-20 lg:py-24" id="life">
      <div className="max-w-[850px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{life.eyebrow}</p>
            <h1 className="section-title mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl" id="life-title">
              <span className="highlight-amber">{life.title}</span>
            </h1>
          </div>
          <span className="rounded-full border border-line bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C8491]">{life.status}</span>
        </div>
        <p className="mt-5 max-w-[610px] text-sm leading-6 text-muted sm:text-base">{life.description}</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {life.items.map((item, index) => (
          <article className="group min-h-[240px] rounded-2xl border border-line bg-white p-6 shadow-card transition-colors duration-200 hover:border-ink/30 sm:p-7" key={item.id}>
            <div className="flex items-start justify-between gap-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F1EB] text-ink">
                <Icon name={item.icon} size={21} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#7C8491]">0{index + 1}</span>
            </div>

            <h2 className="mt-8 font-display text-2xl font-extrabold tracking-[-0.045em] text-ink">{item.title}</h2>
            <p className="mt-3 max-w-[460px] text-sm leading-6 text-muted">{item.summary}</p>

            <ul aria-label={`${item.title} tags`} className="mt-7 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li className="rounded-full bg-[#F8F5F0] px-3 py-1.5 font-mono text-[10px] text-[#7C8491]" key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
