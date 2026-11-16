"use client";

import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="mb-10 hidden grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 lg:grid">
      <div aria-hidden="true" />

      <nav aria-label="Primary portfolio navigation" className="flex items-center gap-1 rounded-full border border-line bg-white/80 p-1 shadow-card">
        {portfolioData.topNavigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <a
              aria-current={isActive ? "page" : undefined}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition-colors duration-200 ${isActive ? "bg-[#F5F1EB] text-ink" : "text-muted hover:bg-[#F5F1EB] hover:text-ink"}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="flex justify-end">
        <a className="flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5" href="#footer">
          {portfolioData.navigationCta} <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </div>
    </div>
  );
}
