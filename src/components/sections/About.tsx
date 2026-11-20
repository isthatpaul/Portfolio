"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { portfolioData, sitePath } from "@/data/portfolio";

export function About() {
  const { about, personal } = portfolioData;
  const [portraitSource, setPortraitSource] = useState<"about" | "avatar" | "fallback">("about");

  const handlePortraitError = () => {
    setPortraitSource((currentSource) => {
      if (currentSource === "about") return "avatar";
      return "fallback";
    });
  };

  return (
    <section aria-labelledby="about-title" className="scroll-mt-36 py-12 sm:py-16 lg:scroll-mt-6 lg:py-20" id="about">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[260px_1fr] lg:gap-12">
        <div className="mx-auto w-56 sm:w-64 lg:mx-0">
          <div className="relative aspect-square w-full overflow-hidden rounded-full border border-line bg-elevated shadow-card ring-4 ring-surface">
            {portraitSource === "fallback" ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-script text-7xl font-semibold tracking-tight text-ink">{portfolioData.profile.monogram}</span>
              </div>
            ) : (
              <Image
                key={portraitSource}
                alt={`${portfolioData.profile.name} portrait`}
                className="h-full w-full object-cover object-top"
                fill
                sizes="(max-width: 639px) 224px, 256px"
                src={portraitSource === "about" ? personal.aboutPhotoUrl : personal.avatarUrl}
                onError={handlePortraitError}
              />
            )}
          </div>
        </div>

        <div>
          <h1 className="max-w-[690px] font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl" id="about-title">
            {about.headline}
          </h1>

          <div className="mt-7 max-w-[62ch] space-y-4 text-[15.5px] leading-relaxed text-muted sm:text-base">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <a className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 py-2 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5" href={portfolioData.resumePath} rel="noreferrer" target="_blank">
            {about.resumeLabel}
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>

          <div className="mt-12 border-t border-line pt-10">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <h2 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink sm:text-3xl">{about.beyondScreen.title}</h2>
              <a className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-5 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-elevated" href={sitePath("/life")}>
                {about.beyondScreen.ctaLabel}
                <ArrowRight aria-hidden="true" size={16} />
              </a>
            </div>
            <p className="mt-4 max-w-[60ch] text-[15.5px] leading-relaxed text-muted sm:text-base">{about.beyondScreen.intro}</p>
            <ul className="mt-4 space-y-2.5 text-[15px] text-muted">
              {about.beyondScreen.interests.map((interest) => (
                <li className="flex items-start gap-3" key={interest}>
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-dot" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
