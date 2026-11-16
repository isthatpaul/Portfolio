"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { profile, hero } = portfolioData;

  return (
    <section aria-labelledby="hero-title" className="border-b border-line pb-16 pt-6 sm:pb-20 sm:pt-10 lg:pb-28 lg:pt-10" id="hero">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,.95fr)] lg:gap-10">
        <div>
          <motion.p
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="script-accent highlight-amber mb-6 inline-block text-[1.65rem] leading-none text-ink sm:text-[2rem]"
            initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {profile.greeting}
          </motion.p>

          <motion.h1
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="max-w-[720px] font-display text-[clamp(2.65rem,6vw,5.6rem)] font-extrabold leading-[.98] tracking-[-0.075em] text-ink"
            id="hero-title"
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            transition={{ delay: 0.08, duration: 0.55, ease: "easeOut" }}
          >
            {hero.headline.lineOne}{" "}
            <span className="highlight-sky">{hero.headline.lineTwo}</span>
          </motion.h1>

          <motion.p
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="mt-7 max-w-[590px] text-base leading-7 text-muted sm:text-[1.05rem] sm:leading-8"
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
            <a className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5" href="#academic-works">
              {hero.primaryAction} <ArrowRight aria-hidden="true" size={16} />
            </a>
            <a className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-white px-5 text-sm font-bold text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-[#F5F1EB]" href={portfolioData.resumePath} target="_blank" rel="noreferrer">
              {hero.secondaryAction} <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </motion.div>

          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-[#7C8491]">{profile.degree}</p>
        </div>

        <motion.div
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          className="relative mx-auto w-full max-w-[500px] lg:mx-0 lg:justify-self-end"
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
          transition={{ delay: 0.12, duration: 0.65, ease: "easeOut" }}
        >
          <div className="relative aspect-[1.1/1] overflow-hidden rounded-[28px] border border-line bg-white p-4 sm:p-7">
            <svg aria-labelledby="hero-illustration-title" className="h-full w-full" fill="none" role="img" viewBox="0 0 520 470">
              <title id="hero-illustration-title">{hero.illustrationLabel}</title>
              <path d="M46 384H470" stroke="#EAE6DF" strokeWidth="2" />
              <path d="M82 382C101 346 121 333 144 319C168 304 190 285 204 252" stroke="#141824" strokeLinecap="round" strokeWidth="3" />
              <path d="M206 252C181 243 159 224 149 198C176 193 201 209 211 237" stroke="#141824" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              <path d="M207 252C220 217 239 198 266 185C273 216 255 246 214 263" stroke="#141824" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              <path d="M208 255C190 281 181 306 185 339" stroke="#141824" strokeLinecap="round" strokeWidth="3" />
              <path d="M169 354H236L249 384H155L169 354Z" fill="#E0F2FE" stroke="#141824" strokeLinejoin="round" strokeWidth="3" />
              <path d="M108 363C108 347 121 335 137 335H281C297 335 310 347 310 363V377H108V363Z" fill="#FFFFFF" stroke="#141824" strokeLinejoin="round" strokeWidth="3" />
              <path d="M119 350L139 237H373L399 350H119Z" fill="#F8FBFC" stroke="#141824" strokeLinejoin="round" strokeWidth="3" />
              <path d="M147 319L177 270H345L372 319H147Z" fill="#FEF3C7" opacity=".9" />
              <path d="M181 290H338M197 277V306M226 277V306M255 277V306M284 277V306M313 277V306" stroke="#141824" strokeLinecap="round" strokeWidth="2" opacity=".68" />
              <path d="M191 211V161H269V211" stroke="#141824" strokeLinejoin="round" strokeWidth="3" />
              <rect fill="#FFFFFF" height="35" rx="5" stroke="#141824" strokeWidth="3" width="68" x="196" y="124" />
              <path d="M230 159V180M230 180H211M230 180H251" stroke="#141824" strokeLinecap="round" strokeWidth="3" />
              <rect fill="#E0F2FE" height="30" rx="5" stroke="#141824" strokeWidth="3" width="50" x="186" y="186" />
              <rect fill="#FEF3C7" height="30" rx="5" stroke="#141824" strokeWidth="3" width="50" x="248" y="186" />
              <path d="M404 222C428 205 447 188 454 160" stroke="#141824" strokeLinecap="round" strokeWidth="3" />
              <path d="M454 160C436 162 420 174 412 189C430 194 446 184 454 160Z" fill="#E0F2FE" stroke="#141824" strokeLinejoin="round" strokeWidth="3" />
              <path d="M455 161C471 151 478 137 479 122C461 124 451 139 455 161Z" fill="#FEF3C7" stroke="#141824" strokeLinejoin="round" strokeWidth="3" />
              <circle cx="91" cy="105" fill="#FEF3C7" r="28" />
              <path d="M79 105H103M91 93V117" stroke="#141824" strokeLinecap="round" strokeWidth="3" />
              <path d="M51 74C63 62 75 55 90 51M422 83C436 76 450 74 464 75" stroke="#141824" strokeDasharray="3 8" strokeLinecap="round" strokeWidth="2" opacity=".55" />
            </svg>
          </div>
          <p className="mt-3 text-right font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C8491]">data / systems / software</p>
        </motion.div>
      </div>
    </section>
  );
}
