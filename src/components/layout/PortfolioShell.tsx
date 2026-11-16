import { ProfileSidebar } from "@/components/layout/ProfileSidebar";
import { Navbar } from "@/components/layout/Navbar";

interface PortfolioShellProps {
  children: React.ReactNode;
}

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[300px_minmax(0,1fr)]">
      <ProfileSidebar />
      <main className="min-w-0">
        <div className="mx-auto w-full max-w-[1120px] px-4 pb-16 pt-4 sm:px-8 lg:px-12 lg:pb-24 lg:pt-7">
          <Navbar />
          {children}
        </div>
      </main>
    </div>
  );
}
