"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, FileText, Linkedin, MapPin, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Icon } from "@/components/ui/Icon";

export function ProfileSidebar() {
  const [activeSection, setActiveSection] = useState<string>(portfolioData.navigation[0].href);

  useEffect(() => {
    const sections = portfolioData.navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-18% 0px -68%", threshold: [0.08, 0.3, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <aside className="hidden border-r border-line bg-white shadow-rail lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[300px] lg:flex-col lg:justify-between lg:p-8">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-bold tracking-[-0.08em] text-white">
              {portfolioData.profile.monogram}
            </div>
            <div>
              <p className="font-display text-sm font-bold tracking-[-0.04em] text-ink">{portfolioData.profile.shortName}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#7C8491]">Portfolio / 2026</p>
            </div>
          </div>

          <div className="avatar-wash relative mb-6 flex aspect-square w-full items-center justify-center overflow-hidden rounded-[28px] border border-line">
            <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 260 260" fill="none">
              <path d="M28 211C52 168 96 148 128 148C165 148 204 171 232 211" stroke="#141824" strokeWidth="2" strokeLinecap="round" opacity=".16" />
              <path d="M65 102C67 67 92 44 129 44C166 44 191 67 193 102" stroke="#141824" strokeWidth="2" strokeLinecap="round" opacity=".16" />
              <circle cx="130" cy="111" r="47" stroke="#141824" strokeWidth="2" opacity=".16" />
              <path d="M103 111C111 120 121 124 130 124C139 124 149 120 157 111" stroke="#141824" strokeWidth="2" strokeLinecap="round" opacity=".16" />
              <path d="M99 98C106 92 114 90 120 92M140 92C147 90 155 92 161 98" stroke="#141824" strokeWidth="2" strokeLinecap="round" opacity=".16" />
            </svg>
            <span className="relative z-10 font-script text-7xl font-semibold tracking-tight text-ink">{portfolioData.profile.monogram}</span>
            <span className="absolute bottom-4 right-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#7C8491]">headshot ready</span>
          </div>

          <div className="space-y-2">
            <h1 className="font-display text-[1.45rem] font-extrabold leading-[1.08] tracking-[-0.06em] text-ink">{portfolioData.profile.name}</h1>
            <p className="max-w-[210px] text-sm leading-6 text-muted">{portfolioData.profile.role}</p>
          </div>

          <div className="mt-5 space-y-3 border-t border-line pt-5 text-xs text-muted">
            <p className="flex items-center gap-2"><MapPin aria-hidden="true" size={14} /> {portfolioData.profile.location}</p>
            <p className="flex items-center gap-2"><GraduationCap aria-hidden="true" size={14} /> {portfolioData.profile.education}</p>
          </div>

          <div className="mt-7 space-y-2">
            <a className="flex min-h-11 items-center justify-between rounded-full bg-ink px-4 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5" href={portfolioData.resumePath} target="_blank" rel="noreferrer">
              <span className="flex items-center gap-2"><FileText aria-hidden="true" size={15} /> View Resume</span>
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <a className="flex min-h-11 items-center justify-between rounded-full border border-ink px-4 text-sm font-bold text-ink transition-colors duration-200 hover:bg-[#F5F1EB]" href={portfolioData.links.linkedin} target="_blank" rel="noreferrer">
              <span className="flex items-center gap-2"><Linkedin aria-hidden="true" size={15} /> LinkedIn Profile</span>
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>

          <nav aria-label="Portfolio sections" className="mt-9 border-t border-line pt-5">
            <ul className="space-y-1">
              {portfolioData.navigation.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <li key={item.href}>
                    <a
                      aria-current={isActive ? "page" : undefined}
                      className={`flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-semibold transition-colors duration-200 ${isActive ? "bg-accent text-ink" : "text-muted hover:bg-[#F8F5F0] hover:text-ink"}`}
                      href={item.href}
                    >
                      <Icon name={item.icon} size={16} />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#7C8491]">{portfolioData.profile.degree}</p>
      </aside>

      <div className="sticky top-0 z-40 border-b border-line bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <a href="#about" className="flex min-h-11 items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-bold tracking-[-0.08em] text-white">{portfolioData.profile.monogram}</span>
            <span className="font-display text-sm font-bold tracking-[-0.04em] text-ink">{portfolioData.profile.shortName}</span>
          </a>
          <a className="flex min-h-11 items-center gap-1 rounded-full bg-ink px-4 text-xs font-bold text-white" href={portfolioData.resumePath} target="_blank" rel="noreferrer">
            Resume <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </div>
        <nav aria-label="Mobile portfolio sections" className="mt-3 -mx-1 flex gap-1 overflow-x-auto pb-1">
          {portfolioData.navigation.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a className={`flex min-h-10 shrink-0 items-center rounded-full px-3 text-xs font-semibold ${isActive ? "bg-accent text-ink" : "text-muted"}`} href={item.href} key={item.href}>
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}
