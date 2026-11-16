"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

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
    <section aria-labelledby="about-title" className="py-16 sm:py-20 lg:py-24" id="about">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[280px_1fr] lg:gap-12">
        <div className="relative mx-auto w-full max-w-[280px] px-8 pb-10 pt-0 lg:mx-0">
          <div className="relative z-0 aspect-[4/5] overflow-hidden rounded-[46%_54%_60%_40%/42%_48%_52%_58%] border border-[#E8D883] bg-[#FEF08A]">
            {portraitSource === "fallback" ? (
              <>
                <div className="absolute inset-5 flex items-center justify-center rounded-[42%_58%_48%_52%/54%_44%_56%_46%] border border-[#FACC15] bg-[#FFFCE2]">
                  <span className="font-script text-8xl font-semibold tracking-tight text-ink">{portfolioData.profile.monogram}</span>
                </div>
                <span className="absolute bottom-5 left-0 right-0 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-[#6D5D16]">portrait placeholder</span>
              </>
            ) : (
              <Image
                key={portraitSource}
                alt={`${portfolioData.profile.name} portrait`}
                className="h-full w-full object-cover object-center"
                fill
                sizes="280px"
                src={portraitSource === "about" ? personal.aboutPhotoUrl : personal.avatarUrl}
                onError={handlePortraitError}
              />
            )}
          </div>
          <svg aria-hidden="true" className="pointer-events-none absolute -inset-2 z-20 h-[calc(100%+1rem)] w-[calc(100%+1rem)] text-[#6D5D16]" fill="none" viewBox="0 0 300 330">
            <defs>
              <path d="M 150 165 m -126 0 a 126 126 0 1 1 252 0 a 126 126 0 1 1 -252 0" id="about-motto-path" />
            </defs>
            <text fill="currentColor" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="2.3">
              <textPath href="#about-motto-path" startOffset="2%">{about.motto}</textPath>
            </text>
          </svg>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#71717A]">{about.eyebrow}</p>
          <h1 className="mt-5 max-w-[690px] font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-[#141824] sm:text-5xl" id="about-title">
            {about.headline}
          </h1>

          <div className="mt-8 max-w-2xl space-y-4 text-[15.5px] leading-relaxed text-[#525866] sm:text-base">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <a className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FACC15] px-5 py-2 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5" href={portfolioData.resumePath} rel="noreferrer" target="_blank">
            {about.resumeLabel}
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>

          <div className="mt-12 border-t border-line pt-10">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <h2 className="mb-4 font-display text-2xl font-bold tracking-tight text-[#141824] sm:text-3xl">{about.beyondScreen.title}</h2>
              <a className="inline-flex items-center gap-2 rounded-full bg-[#FBCFE8] px-5 py-2 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5" href="/life">
                {about.beyondScreen.ctaLabel}
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
            <p className="mb-4 text-[15.5px] leading-relaxed text-[#525866] sm:text-base">{about.beyondScreen.intro}</p>
            <ul className="space-y-2.5 text-[15px] text-[#525866]">
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
