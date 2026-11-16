import { portfolioData } from "@/data/portfolio";

export function About() {
  const { sectionCopy, profile, skillGroups, aboutDetails } = portfolioData;

  return (
    <section aria-labelledby="about-title" className="border-b border-line py-16 sm:py-20 lg:py-24" id="about">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,.9fr)_minmax(420px,1.1fr)] lg:gap-16">
        <div>
          <p className="eyebrow">{sectionCopy.about.eyebrow}</p>
          <h2 className="section-title mt-3 font-display text-4xl font-extrabold text-ink sm:text-5xl" id="about-title">{sectionCopy.about.title}</h2>
          <p className="mt-6 max-w-[470px] text-base leading-7 text-muted">{profile.extendedBio}</p>
          <p className="mt-5 max-w-[470px] text-sm leading-6 text-muted">{sectionCopy.about.description}</p>
          <dl className="mt-8 grid max-w-[500px] grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-5">
            {aboutDetails.map((detail) => (
              <div key={detail.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C8491]">{detail.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-ink">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div key={group.label} className="border-t border-line pt-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-sm font-extrabold tracking-[-0.03em] text-ink">{group.label}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C8491]">0{index + 1}</span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={group.label}>
                {group.items.map((skill) => (
                  <li className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-muted" key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
