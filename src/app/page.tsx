import { AcademicWork } from "@/components/sections/AcademicWork";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { References } from "@/components/sections/References";
import { PortfolioShell } from "@/components/layout/PortfolioShell";

export default function HomePage() {
  return (
    <PortfolioShell>
      <Hero />
      <About />
      <AcademicWork />
      <Experience />
      <References />
      <Contact />
    </PortfolioShell>
  );
}
