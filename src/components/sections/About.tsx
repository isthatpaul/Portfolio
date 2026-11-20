"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
    <section aria-labelledby="about-title" className="py-16 sm:py-20 lg:py-24" id="about">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[280px_1fr] lg:gap-12">
        <div className="relative mx-auto h-72 w-full max-w-[320px] lg:mx-0 sm:h-80">
          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 sm:h-64 sm:w-64">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-[#FEF08A] ring-4 ring-white shadow-sm">
              {portraitSource === "fallback" ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-script text-8xl font-semibold tracking-tight text-ink">{portfolioData.profile.monogram}</span>
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
        </div>

        <div>
          <h1 className="max-w-[690px] font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-[#141824] sm:text-5xl" id="about-title">
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
          <a className="inline-flex items-center gap-2 rounded-full bg-[#FBCFE8] px-5 py-2 text-sm font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5" href={sitePath("/life")}>
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

        </div>
      </div>
    </section>
  );
}
