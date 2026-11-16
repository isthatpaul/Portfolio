import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { ProfileSidebar } from "@/components/layout/ProfileSidebar";

interface PortfolioShellProps {
  children: React.ReactNode;
}

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[300px_minmax(0,1fr)]">
      <ProfileSidebar />
      <main className="min-w-0">
        <div className="mx-auto w-full max-w-[1120px] px-4 pb-16 pt-4 sm:px-8 lg:px-12 lg:pb-24 lg:pt-7">
          <div className="mb-10 hidden items-center justify-between lg:flex">
            <nav aria-label="Quick section switcher" className="flex items-center gap-1 rounded-full border border-line bg-white/80 p-1 shadow-card">
              {portfolioData.topNavigation.map((item, index) => (
                <a className={`rounded-full px-4 py-2 text-xs font-bold transition-colors duration-200 ${index === 0 ? "bg-[#F5F1EB] text-ink" : "text-muted hover:bg-[#F5F1EB] hover:text-ink"}`} href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a className="flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5" href="#contact">
              Get in touch <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
