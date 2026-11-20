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
      <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-line bg-white p-4 shadow-card sm:flex-row sm:items-center sm:justify-between lg:hidden">
        <div className="flex items-center gap-3.5">
          <div className="avatar-wash relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line">
            {avatarFailed ? (
              <span className="font-script text-2xl font-semibold text-ink">{profile.monogram}</span>
            ) : (
              <Image
                alt={`${profile.name} portrait`}
                className="h-full w-full object-cover object-center"
                fill
                priority
                sizes="48px"
                src={personal.avatarUrl}
                onError={() => setAvatarFailed(true)}
              />
            )}
          </div>
          <div className="min-w-0">
            <p className="font-display text-sm font-extrabold text-ink">{profile.shortName}</p>
            <p className="mt-0.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-xs text-muted">
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
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line bg-[#FAF8F5] px-3.5 text-xs font-semibold text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-[#F5F1EB]"
            href={links.github}
            rel="noreferrer"
            target="_blank"
          >
            <Github aria-hidden="true" size={14} />
            GitHub
            <ArrowUpRight aria-hidden="true" size={13} />
          </a>
          <a
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line bg-[#FAF8F5] px-3.5 text-xs font-semibold text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-[#F5F1EB]"
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

      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(270px,.8fr)] lg:gap-8">
        <div>
          <motion.p
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            aria-label={greeting}
            className="script-accent highlight-amber mb-6 inline-block text-[1.65rem] leading-none text-ink sm:text-[2rem]"
            initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {greeting}
          </motion.p>

          <motion.h1
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="max-w-[720px] font-display text-[clamp(2.5rem,5.5vw,4.25rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink lg:text-[clamp(3rem,3.5vw,3.9rem)]"
            id="hero-title"
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            transition={{ delay: 0.08, duration: 0.55, ease: "easeOut" }}
          >
            {hero.headline.lineOne}{" "}
            <span>from </span>
            <span className="highlight-sky">data, systems, and curiosity.</span>
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
            <a className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5" href={sitePath("/#academic-works")}>
              {hero.primaryAction} <ArrowRight aria-hidden="true" size={16} />
            </a>
            <a className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-white px-5 text-sm font-bold text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-[#F5F1EB]" href="#footer">
              {portfolioData.navigationCta} <ArrowDown aria-hidden="true" size={16} />
            </a>
          </motion.div>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-muted-strong">{profile.degree}</p>
        </div>

        <motion.div
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          className="relative mx-auto w-full max-w-[500px] lg:mx-0 lg:justify-self-end"
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
          transition={{ delay: 0.12, duration: 0.65, ease: "easeOut" }}
        >
          <div className="relative aspect-[1.1/1] overflow-hidden rounded-[28px] border border-line bg-white p-4 shadow-card sm:p-6">
            <svg aria-labelledby="hero-illustration-title" className="h-full w-full" fill="none" role="img" viewBox="0 0 520 470">
              <title id="hero-illustration-title">{hero.illustrationLabel}</title>
              <defs>
                <pattern height="24" id="hero-draft-grid" patternUnits="userSpaceOnUse" width="24">
                  <circle cx="1.5" cy="1.5" fill="#E5E0D8" r="1.25" />
                </pattern>
                <marker id="hero-arrow" markerHeight="8" markerWidth="8" orient="auto-start-reverse" refX="6" refY="4" viewBox="0 0 8 8">
                  <path d="M1 1.5L6.5 4L1 6.5" stroke="#141824" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </marker>
              </defs>

              <rect fill="url(#hero-draft-grid)" height="430" rx="18" width="480" x="20" y="20" />

              {/* Module 1: Delay-weighted transit routing graph */}
              <rect fill="#FFFFFF" height="176" rx="16" stroke="#EAE6DF" strokeWidth="1.5" width="256" x="34" y="36" />
              <text fill="#59606E" fontFamily="var(--font-mono)" fontSize="11" fontWeight="500" letterSpacing="1.2" x="50" y="61">ROUTING GRAPH</text>

              <path d="M72 114L154 90L248 118" stroke="#141824" strokeDasharray="4 4" strokeWidth="1.75" opacity="0.45" />
              <path d="M72 114L146 164L248 118" stroke="#141824" strokeWidth="2.5" markerEnd="url(#hero-arrow)" />
              <path d="M154 90L146 164" stroke="#59606E" strokeWidth="1.5" opacity="0.5" />

              <rect fill="#E0F2FE" height="22" rx="11" width="40" x="92" y="148" />
              <text fill="#141824" fontFamily="var(--font-mono)" fontSize="11.5" fontWeight="600" textAnchor="middle" x="112" y="163">w₁</text>
              <rect fill="#FEF3C7" height="22" rx="11" width="44" x="180" y="73" />
              <text fill="#141824" fontFamily="var(--font-mono)" fontSize="11.5" fontWeight="600" textAnchor="middle" x="202" y="88">+Δt</text>

              <circle cx="72" cy="114" fill="#FFFFFF" r="14" stroke="#141824" strokeWidth="2.25" />
              <text fill="#141824" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" textAnchor="middle" x="72" y="118">A</text>
              <circle cx="154" cy="90" fill="#FEF3C7" r="13" stroke="#141824" strokeWidth="2" />
              <text fill="#141824" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" textAnchor="middle" x="154" y="94">B</text>
              <circle cx="146" cy="164" fill="#E0F2FE" r="14" stroke="#141824" strokeWidth="2.25" />
              <text fill="#141824" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" textAnchor="middle" x="146" y="168">C</text>
              <circle cx="248" cy="118" fill="#141824" r="14" />
              <text fill="#FFFFFF" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" textAnchor="middle" x="248" y="122">D</text>

              {/* Module 2: Normalized relational schema */}
              <rect fill="#FFFFFF" height="204" rx="16" stroke="#EAE6DF" strokeWidth="1.5" width="256" x="34" y="230" />
              <text fill="#59606E" fontFamily="var(--font-mono)" fontSize="11" fontWeight="500" letterSpacing="1.2" x="50" y="255">RELATIONAL SCHEMA</text>

              <rect fill="#FAF8F5" height="70" rx="10" stroke="#141824" strokeWidth="1.75" width="98" x="48" y="272" />
              <rect fill="#E0F2FE" height="22" rx="8" width="96" x="49" y="273" />
              <text fill="#141824" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" x="57" y="288">ACCOUNT</text>
              <text fill="#525866" fontFamily="var(--font-mono)" fontSize="11" x="57" y="310">PK id</text>
              <text fill="#525866" fontFamily="var(--font-mono)" fontSize="11" x="57" y="328">meter_id</text>

              <rect fill="#FAF8F5" height="70" rx="10" stroke="#141824" strokeWidth="1.75" width="100" x="176" y="272" />
              <rect fill="#FEF3C7" height="22" rx="8" width="98" x="177" y="273" />
              <text fill="#141824" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" x="185" y="288">BILLING</text>
              <text fill="#525866" fontFamily="var(--font-mono)" fontSize="11" x="185" y="310">FK acct</text>
              <text fill="#525866" fontFamily="var(--font-mono)" fontSize="11" x="185" y="328">usage</text>

              <path d="M146 307H176" stroke="#141824" strokeWidth="1.75" />
              <path d="M168 301L176 307L168 313" stroke="#141824" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <text fill="#59606E" fontFamily="var(--font-mono)" fontSize="11" textAnchor="middle" x="161" y="298">1:N</text>

              <rect fill="#FAF8F5" height="56" rx="10" stroke="#141824" strokeWidth="1.75" width="228" x="48" y="362" />
              <text fill="#141824" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600" x="58" y="384">PAYMENT_LEDGER</text>
              <text fill="#525866" fontFamily="var(--font-mono)" fontSize="11" x="58" y="403">FK bill_id · settled_at</text>
              <path d="M226 342V362" stroke="#141824" strokeWidth="1.75" />

              {/* Module 3: Clustering & predictive features */}
              <rect fill="#FFFFFF" height="398" rx="16" stroke="#EAE6DF" strokeWidth="1.5" width="180" x="306" y="36" />
              <text fill="#59606E" fontFamily="var(--font-mono)" fontSize="11" fontWeight="500" letterSpacing="1.2" x="322" y="61">DATA &amp; MODELS</text>

              {/* Cluster scatter region */}
              <path d="M326 218H466M326 84V218" stroke="#141824" strokeLinecap="round" strokeWidth="1.5" opacity="0.45" />
              <ellipse cx="368" cy="130" fill="#E0F2FE" opacity="0.9" rx="30" ry="26" />
              <ellipse cx="430" cy="176" fill="#FEF3C7" opacity="0.95" rx="28" ry="24" />

              <circle cx="356" cy="122" fill="#141824" r="4" />
              <circle cx="372" cy="116" fill="#141824" r="4" />
              <circle cx="380" cy="134" fill="#141824" r="4" />
              <circle cx="362" cy="140" fill="#0369A1" r="4.5" />
              <circle cx="370" cy="128" fill="#FFFFFF" r="3" stroke="#141824" strokeWidth="2" />

              <circle cx="418" cy="168" fill="#141824" r="4" />
              <circle cx="438" cy="166" fill="#141824" r="4" />
              <circle cx="442" cy="182" fill="#141824" r="4" />
              <circle cx="424" cy="188" fill="#141824" r="4" />
              <circle cx="431" cy="176" fill="#FFFFFF" r="3" stroke="#141824" strokeWidth="2" />

              <path d="M396 226V254" stroke="#141824" strokeWidth="1.75" markerEnd="url(#hero-arrow)" />

              {/* Feature-to-model pipeline */}
              <rect fill="#FAF8F5" height="36" rx="10" stroke="#141824" strokeWidth="1.75" width="144" x="324" y="262" />
              <text fill="#141824" fontFamily="var(--font-mono)" fontSize="11.5" fontWeight="600" textAnchor="middle" x="396" y="284">FEATURES</text>

              <path d="M396 298V320" stroke="#141824" strokeWidth="1.75" markerEnd="url(#hero-arrow)" />

              <rect fill="#E0F2FE" height="36" rx="10" stroke="#141824" strokeWidth="1.75" width="144" x="324" y="328" />
              <text fill="#141824" fontFamily="var(--font-mono)" fontSize="11.5" fontWeight="600" textAnchor="middle" x="396" y="350">MODEL FIT</text>

              <path d="M396 364V384" stroke="#141824" strokeWidth="1.75" markerEnd="url(#hero-arrow)" />

              <rect fill="#141824" height="32" rx="16" width="144" x="324" y="390" />
              <text fill="#FFFFFF" fontFamily="var(--font-mono)" fontSize="11.5" fontWeight="600" textAnchor="middle" x="396" y="410">INTERPRET</text>
            </svg>
          </div>
          <p className="mt-3 text-right font-mono text-xs uppercase tracking-[0.12em] text-muted-strong">systems · schemas · models</p>
        </motion.div>
      </div>
    </section>
  );
}
