import {
  Activity,
  Award,
  Brain,
  BookOpen,
  BrainCircuit,
  Clock3,
  Code2,
  Database,
  Flame,
  LayoutDashboard,
  Rocket,
  Settings,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const navigationItems: NavigationItem[] = [
  { label: "Dashboard", href: "#dashboard", icon: LayoutDashboard },
  { label: "Courses", href: "#courses", icon: BookOpen },
  { label: "Activity", href: "#activity", icon: Activity },
  { label: "Achievements", href: "#achievements", icon: Award },
  { label: "Settings", href: "#settings", icon: Settings },
];

export const brandIcon = BrainCircuit;
export const heroIcon = Sparkles;
export const streakIcon = Flame;
export const progressIcon = Rocket;
export const courseIcon = BookOpen;
export const durationIcon = Clock3;

type CourseGlyphProps = {
  iconName: string;
  className?: string;
};

export function CourseGlyph({ iconName, className }: CourseGlyphProps) {
  if (iconName === "Brain") {
    return <Brain className={className} />;
  }

  if (iconName === "Code2") {
    return <Code2 className={className} />;
  }

  if (iconName === "Database") {
    return <Database className={className} />;
  }

  if (iconName === "Sparkles") {
    return <Sparkles className={className} />;
  }

  return <BookOpen className={className} />;
}
