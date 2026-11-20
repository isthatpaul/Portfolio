import { ProfileSidebar } from "@/components/layout/ProfileSidebar";
import { Footer } from "@/components/layout/Footer";

interface PortfolioShellProps {
  children: React.ReactNode;
}

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[300px_minmax(0,1fr)]" id="top">
      <ProfileSidebar />
      <main className="flex min-w-0 flex-col">
        <div className="mx-auto w-full max-w-5xl flex-1 px-6 pb-20 pt-6 sm:px-12 sm:pt-10 lg:pt-12">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
