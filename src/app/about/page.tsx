import { PortfolioShell } from "@/components/layout/PortfolioShell";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function AboutPage() {
  return (
    <PortfolioShell>
      <About />
      <Contact />
    </PortfolioShell>
  );
}
