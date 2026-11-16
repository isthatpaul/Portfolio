import { AcademicWork } from "@/components/sections/AcademicWork";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { PortfolioShell } from "@/components/layout/PortfolioShell";

export default function HomePage() {
  return (
    <PortfolioShell>
      <Hero />
      <AcademicWork />
      <Experience />
      <Contact />
    </PortfolioShell>
  );
}
