import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function About() {
  const { about } = portfolioData;

  return (
    <section aria-labelledby="about-title" className="py-16 sm:py-20 lg:py-24" id="about">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[280px_1fr] lg:gap-12">
        <div className="relative mx-auto w-full max-w-[280px] px-8 py-10 lg:mx-0 lg:mt-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[46%_54%_60%_40%/42%_48%_52%_58%] border border-[#E8D883] bg-[#FEF08A]">
            <div className="absolute inset-5 flex items-center justify-center rounded-[42%_58%_48%_52%/54%_44%_56%_46%] border border-[#FACC15] bg-[#FFFCE2]">
              <span className="font-script text-8xl font-semibold tracking-tight text-ink">{portfolioData.profile.monogram}</span>
            </div>
            <span className="absolute bottom-5 left-0 right-0 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-[#6D5D16]">portrait placeholder</span>
          </div>
          <svg aria-hidden="true" className="pointer-events-none absolute -inset-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)] text-[#6D5D16]" fill="none" viewBox="0 0 300 330">
            <defs>
              <path d="M 150 165 m -126 0 a 126 126 0 1 1 252 0 a 126 126 0 1 1 -252 0" id="about-motto-path" />
            </defs>
            <text fill="currentColor" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2.3">
              <textPath href="#about-motto-path" startOffset="2%">{about.motto}</textPath>
            </text>
          </svg>
        </div>

        <div className="lg:pt-6">
          <p className="eyebrow">{about.eyebrow}</p>
          <h1 className="mt-5 max-w-[690px] font-display text-[clamp(3rem,6vw,6.2rem)] font-extrabold leading-[.92] tracking-[-0.08em] text-ink" id="about-title">
            {about.headline}
          </h1>

          <div className="mt-8 max-w-[700px] space-y-5 text-base leading-7 text-muted">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <a className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FACC15] px-5 py-2 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5" href={portfolioData.resumePath} rel="noreferrer" target="_blank">
            {about.resumeLabel}
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>

          <div className="mt-16 border-t border-line pt-10">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <h2 className="font-display text-3xl font-extrabold tracking-[-0.06em] text-ink sm:text-4xl">{about.beyondScreen.title}</h2>
              <a className="inline-flex items-center gap-2 rounded-full bg-[#FBCFE8] px-5 py-2 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5" href="/life">
                {about.beyondScreen.ctaLabel}
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
            <p className="mt-5 text-base leading-7 text-muted">{about.beyondScreen.intro}</p>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-ink sm:grid-cols-2">
              {about.beyondScreen.interests.map((interest) => (
                <li className="flex items-start gap-3" key={interest}>
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FACC15]" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <p className="font-display text-xl font-extrabold tracking-[-0.05em] text-ink sm:text-2xl">{about.signoff}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold text-ink">
              <a className="inline-flex items-center gap-2 transition-colors hover:text-[#7C8491]" href={portfolioData.links.linkedin} rel="noreferrer" target="_blank">
                <Linkedin aria-hidden="true" size={16} /> {about.linkLabels.linkedin}
              </a>
              <a className="inline-flex items-center gap-2 transition-colors hover:text-[#7C8491]" href={portfolioData.links.github} rel="noreferrer" target="_blank">
                <Github aria-hidden="true" size={16} /> {about.linkLabels.github}
              </a>
              <a className="inline-flex items-center gap-2 transition-colors hover:text-[#7C8491]" href={`mailto:${portfolioData.links.email}`}>
                <Mail aria-hidden="true" size={16} /> {about.linkLabels.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
