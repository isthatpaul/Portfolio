"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, GraduationCap, Linkedin, MapPin } from "lucide-react";
import { portfolioData, sitePath } from "@/data/portfolio";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [avatarFailed, setAvatarFailed] = useState(false);
  const { profile, hero, personal, links } = portfolioData;
  const greeting = profile.greeting;

  return (
    <section aria-labelledby="hero-title" className="border-b border-line pb-16 pt-2 sm:pb-20 sm:pt-4 lg:pb-24 lg:pt-4" id="hero">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-line/80 pb-4 lg:hidden">
        <div className="flex items-center gap-3">
          <div className="avatar-wash relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line">
            {avatarFailed ? (
              <span className="font-script text-xl font-semibold text-ink">{profile.monogram}</span>
            ) : (
              <Image
                alt={`${profile.name} portrait`}
                className="h-full w-full object-cover object-center"
                fill
                priority
                sizes="40px"
                src={personal.avatarUrl}
                onError={() => setAvatarFailed(true)}
              />
            )}
          </div>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs font-medium text-muted">
            <span className="inline-flex items-center gap-1">
              <GraduationCap aria-hidden="true" size={13} />
              DLSU &apos;28
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin aria-hidden="true" size={13} />
              Manila
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 text-xs font-semibold text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-elevated"
            href={links.github}
            rel="noreferrer"
            target="_blank"
          >
            <Github aria-hidden="true" size={14} />
            GitHub
            <ArrowUpRight aria-hidden="true" size={13} />
          </a>
          <a
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 text-xs font-semibold text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-elevated"
            href={links.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin aria-hidden="true" size={14} />
            LinkedIn
            <ArrowUpRight aria-hidden="true" size={13} />
          </a>
        </div>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(290px,.85fr)] lg:gap-10">
        <div>
          <motion.p
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            aria-label={greeting}
            className="script-accent highlight-amber mb-5 inline-block text-[1.65rem] leading-none text-ink sm:text-[2rem]"
            initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {greeting}
          </motion.p>

          <motion.h1
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="max-w-[720px] font-display text-[clamp(2.5rem,5.5vw,4.25rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink lg:text-[clamp(2.9rem,3.4vw,3.8rem)]"
            id="hero-title"
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            transition={{ delay: 0.08, duration: 0.55, ease: "easeOut" }}
          >
            {hero.headline.lineOne}{" "}
            <span className="highlight-sky">{hero.headline.lineTwo}</span>
          </motion.h1>

          <motion.p
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="mt-6 max-w-[54ch] text-base leading-7 text-muted sm:text-[1.05rem] sm:leading-8"
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            transition={{ delay: 0.16, duration: 0.5, ease: "easeOut" }}
          >
            {hero.intro}
          </motion.p>

          <motion.div
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            transition={{ delay: 0.24, duration: 0.5, ease: "easeOut" }}
          >
            <a className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ink bg-surface px-5 text-sm font-bold text-ink transition-colors duration-200 hover:bg-ink hover:text-white" href={sitePath("/#academic-works")}>
              {hero.primaryAction} <ArrowRight aria-hidden="true" size={16} />
            </a>
            <a className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-surface px-5 text-sm font-bold text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-elevated lg:hidden" href="#footer">
              {portfolioData.navigationCta} <ArrowDown aria-hidden="true" size={16} />
            </a>
          </motion.div>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-muted-strong">{profile.degree}</p>
        </div>

        <motion.div
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="w-full"
          initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
          transition={{ delay: 0.14, duration: 0.5, ease: "easeOut" }}
        >
          <div className="rounded-2xl border border-line bg-surface p-5 shadow-card sm:p-6">
            <div className="flex items-center justify-between border-b border-line pb-3.5">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-strong">
                {hero.focusHeading}
              </span>
              <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-xs font-medium text-ink">
                DLSU &apos;28
              </span>
            </div>

            <ul className="divide-y divide-line">
              {hero.focusAreas.map((area) => (
                <li className="py-4 first:pt-4 last:pb-1" key={area.title}>
                  <a className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4" href={sitePath("/#academic-works")}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-display text-sm font-extrabold tracking-[-0.02em] text-ink group-hover:underline underline-offset-4">
                        {area.title}
                      </span>
                      <ArrowRight aria-hidden="true" className="shrink-0 text-muted-strong transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-ink" size={14} />
                    </div>
                    <p className="mt-1 font-mono text-xs text-muted-strong">{area.stack}</p>
                    <p className="mt-1.5 text-xs leading-5 text-muted">{area.detail}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
