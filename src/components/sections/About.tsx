import { portfolioData } from "@/data/portfolio";
import { Icon } from "@/components/ui/Icon";

export function About() {
  const { about } = portfolioData;

  return (
    <section aria-labelledby="about-title" className="border-b border-line py-16 sm:py-20 lg:py-24" id="about">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="script-accent highlight-amber inline-block text-[1.65rem] leading-none text-ink sm:text-[2rem]">{about.eyebrow}</p>
          <h1 className="mt-7 max-w-[620px] font-display text-[clamp(2.8rem,5vw,5.25rem)] font-extrabold leading-[.98] tracking-[-0.07em] text-ink" id="about-title">
            <span className="block">{about.headline.lineOne}</span>
            <span className="block highlight-sky w-fit">{about.headline.lineTwo}</span>
          </h1>

          <div className="mt-8 max-w-[590px] space-y-5 text-base leading-7 text-muted">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <dl className="mt-10 grid max-w-[560px] grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-5">
            {about.details.map((detail) => (
              <div key={detail.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C8491]">{detail.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-ink">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <div className="mb-5">
            <p className="eyebrow">{about.toolkitLabel}</p>
            <h2 className="section-title mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">{about.toolkitTitle}</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {about.toolkit.map((group, index) => (
              <article className="rounded-2xl border border-line bg-white p-6 shadow-card" key={group.label}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-base font-extrabold tracking-[-0.03em] text-ink">{group.label}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C8491]">0{index + 1}</span>
                </div>
                <ul aria-label={`${group.label} toolkit`} className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => <li className="rounded-full border border-line bg-[#FFFEFC] px-3 py-1.5 text-xs font-medium text-muted" key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-line pt-16 sm:mt-20 sm:pt-20">
        <p className="eyebrow">{about.snapshotsLabel}</p>
        <h2 className="section-title mt-3 max-w-[720px] font-display text-3xl font-extrabold text-ink sm:text-4xl">{about.snapshotsTitle}</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {about.snapshots.map((snapshot, index) => (
            <article className="rounded-2xl border border-line bg-white p-6 shadow-card" key={snapshot.id}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F1EB] text-ink">
                  <Icon name={snapshot.icon} size={20} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#7C8491]">0{index + 1}</span>
              </div>
              <h3 className="mt-7 font-display text-xl font-extrabold tracking-[-0.045em] text-ink">{snapshot.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{snapshot.summary}</p>
              <ul aria-label={`${snapshot.title} tags`} className="mt-6 flex flex-wrap gap-2">
                {snapshot.tags.map((tag) => <li className="rounded-full bg-[#F8F5F0] px-3 py-1.5 font-mono text-[10px] text-[#7C8491]" key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
