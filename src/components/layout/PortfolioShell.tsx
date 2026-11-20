import { ProfileSidebar } from "@/components/layout/ProfileSidebar";
import { Footer } from "@/components/layout/Footer";

interface PortfolioShellProps {
  children: React.ReactNode;
}

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[300px_minmax(0,1fr)]" id="top">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-full focus:bg-ink focus:px-4 focus:text-sm focus:font-bold focus:text-white focus:shadow-lg"
        href="#main-content"
      >
        Skip to main content
      </a>
      <ProfileSidebar />
      <main className="flex min-w-0 flex-col" id="main-content">
        <div className="mx-auto w-full max-w-5xl flex-1 px-6 pb-20 pt-6 sm:px-12 sm:pt-10 lg:pt-12">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
