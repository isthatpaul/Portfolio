import { ProfileSidebar } from "@/components/layout/ProfileSidebar";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

interface PortfolioShellProps {
  children: React.ReactNode;
}

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[300px_minmax(0,1fr)]" id="top">
      <ProfileSidebar />
      <main className="flex min-w-0 flex-col">
        <div className="mx-auto w-full max-w-5xl flex-1 px-6 pb-20 pt-10 sm:px-12">
          <Navbar />
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
