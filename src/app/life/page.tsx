import { PortfolioShell } from "@/components/layout/PortfolioShell";
import { Contact } from "@/components/sections/Contact";
import { LifeAndAll } from "@/components/sections/LifeAndAll";

export default function LifePage() {
  return (
    <PortfolioShell>
      <LifeAndAll />
      <Contact />
    </PortfolioShell>
  );
}
