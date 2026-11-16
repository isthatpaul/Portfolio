import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  Database,
  FileText,
  GraduationCap,
  Mail,
  Route,
  UsersRound,
} from "lucide-react";
import type { IconName } from "@/data/portfolio";

const icons: Record<IconName, LucideIcon> = {
  brain: BrainCircuit,
  chart: BarChart3,
  "file-text": FileText,
  database: Database,
  route: Route,
  briefcase: BriefcaseBusiness,
  users: UsersRound,
  calendar: CalendarDays,
  "graduation-cap": GraduationCap,
  mail: Mail,
};

interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function Icon({ name, size = 18, strokeWidth = 1.7, className }: IconProps) {
  const Component = icons[name];

  return <Component aria-hidden="true" className={className} size={size} strokeWidth={strokeWidth} />;
}
