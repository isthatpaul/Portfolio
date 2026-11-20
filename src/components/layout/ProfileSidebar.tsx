"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, FileText, Github, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { portfolioData, sitePath } from "@/data/portfolio";
import { Icon } from "@/components/ui/Icon";
import { useActiveNav } from "@/components/layout/useActiveNav";

export function ProfileSidebar() {
  const activeSection = useActiveNav();
  const [avatarFailed, setAvatarFailed] = useState(false);

  return (
    <>
      <aside className="hidden border-r border-line bg-white shadow-rail lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[300px] lg:flex-col lg:items-center lg:overflow-y-auto lg:p-8 lg:pb-10 lg:text-center">
        <div className="flex w-full flex-col items-center">
          <div className="avatar-wash relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-line">
            {avatarFailed ? (
              <>
                <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 260 260" fill="none">
                  <path d="M28 211C52 168 96 148 128 148C165 148 204 171 232 211" stroke="#141824" strokeWidth="2" strokeLinecap="round" opacity=".16" />
                  <path d="M65 102C67 67 92 44 129 44C166 44 191 67 193 102" stroke="#141824" strokeWidth="2" strokeLinecap="round" opacity=".16" />
                  <circle cx="130" cy="111" r="47" stroke="#141824" strokeWidth="2" opacity=".16" />
                  <path d="M103 111C111 120 121 124 130 124C139 124 149 120 157 111" stroke="#141824" strokeWidth="2" strokeLinecap="round" opacity=".16" />
                  <path d="M99 98C106 92 114 90 120 92M140 92C147 90 155 92 161 98" stroke="#141824" strokeWidth="2" strokeLinecap="round" opacity=".16" />
                </svg>
                <span className="relative z-10 font-script text-7xl font-semibold tracking-tight text-ink">{portfolioData.profile.monogram}</span>
              </>
            ) : (
              <Image
                alt={`${portfolioData.profile.name} portrait`}
                className="h-full w-full object-cover object-center"
                fill
                priority
                sizes="112px"
                src={portfolioData.personal.avatarUrl}
                onError={() => setAvatarFailed(true)}
              />
            )}
          </div>

          <div className="mt-5 space-y-2">
            <h1 className="font-display text-[1.35rem] font-extrabold leading-[1.08] tracking-[-0.06em] text-ink">{portfolioData.profile.name}</h1>
            <p className="text-sm leading-6 text-muted">{portfolioData.profile.role}</p>
          </div>

          <div className="mt-5 flex flex-col items-center gap-3 text-xs text-muted">
            <p className="flex items-center gap-2"><MapPin aria-hidden="true" size={14} /> {portfolioData.profile.location}</p>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-[#FAF8F5] px-3 py-2"><GraduationCap aria-hidden="true" size={14} /> {portfolioData.profile.education}</p>
          </div>

          <div className="mt-6 flex w-full flex-col gap-2.5">
            <a className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5" href={portfolioData.resumePath} target="_blank" rel="noreferrer">
              <FileText aria-hidden="true" size={15} />
              Resume
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a
                className="flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-line bg-white px-3 text-xs font-semibold text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-[#F5F1EB]"
                href={portfolioData.links.github}
                rel="noreferrer"
                target="_blank"
              >
                <Github aria-hidden="true" size={14} />
                <span>GitHub</span>
                <ArrowUpRight aria-hidden="true" size={13} />
              </a>
              <a
                className="flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-line bg-white px-3 text-xs font-semibold text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-[#F5F1EB]"
                href={portfolioData.links.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                <Linkedin aria-hidden="true" size={14} />
                <span>LinkedIn</span>
                <ArrowUpRight aria-hidden="true" size={13} />
              </a>
            </div>
            <a
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-line bg-[#FAF8F5] px-4 text-xs font-semibold text-ink transition-colors duration-200 hover:border-ink/30 hover:bg-[#F5F1EB]"
              href="#footer"
            >
              <Mail aria-hidden="true" size={14} />
              <span>{portfolioData.navigationCta}</span>
              <ArrowDown aria-hidden="true" size={13} />
            </a>
          </div>

          <nav aria-label="Portfolio sections" className="mt-7 w-full border-t border-line pt-6 text-left">
            <ul className="flex w-full flex-col items-start gap-1.5 text-left">
              {portfolioData.topNavigation.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <li className="w-full" key={item.href}>
                    <a
                      aria-current={isActive ? "page" : undefined}
                      className={`flex min-h-11 w-full items-center justify-start gap-3 rounded-xl border px-3.5 py-2 text-left text-sm transition-colors duration-200 ${isActive ? "border-ink/15 bg-accent font-bold text-ink" : "border-transparent font-semibold text-muted hover:bg-[#F8F5F0] hover:text-ink"}`}
                      href={sitePath(item.href)}
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

      </aside>

      <div className="sticky top-0 z-40 border-b border-line bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <a href={sitePath("/")} className="flex min-h-11 items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-bold tracking-[-0.08em] text-white">{portfolioData.profile.monogram}</span>
            <span className="font-display text-sm font-bold tracking-[-0.04em] text-ink">{portfolioData.profile.shortName}</span>
          </a>
          <a className="flex min-h-11 items-center gap-1 rounded-full bg-ink px-4 text-xs font-bold text-white" href={portfolioData.resumePath} target="_blank" rel="noreferrer">
            Resume <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </div>
        <nav aria-label="Mobile portfolio sections" className="mt-3 -mx-1 flex gap-1 overflow-x-auto pb-1">
          {portfolioData.topNavigation.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-10 shrink-0 items-center rounded-full px-3 text-xs transition-colors duration-200 ${isActive ? "bg-accent font-bold text-ink" : "font-semibold text-muted"}`}
                href={sitePath(item.href)}
                key={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}
