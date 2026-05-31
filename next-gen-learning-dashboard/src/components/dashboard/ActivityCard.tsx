import GlowCard from "@/components/ui/GlowCard";
import { Activity, Sparkles } from "lucide-react";

const activityValues = [
  1, 3, 2, 4, 2, 5, 3,
  2, 4, 1, 3, 5, 2, 4,
  3, 5, 4, 2, 1, 4, 5,
  2, 3, 4, 1, 3, 5, 4,
];

function getCellClass(value: number) {
  if (value >= 5) {
    return "bg-cyan-300/80";
  }

  if (value === 4) {
    return "bg-cyan-300/60";
  }

  if (value === 3) {
    return "bg-sky-300/45";
  }

  if (value === 2) {
    return "bg-indigo-300/35";
  }

  return "bg-white/10";
}

export default function ActivityCard() {
  return (
    <GlowCard as="section" hoverable className="min-h-[320px] p-6" id="activity">
      <header className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
            Activity
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">Contribution pulse</h2>
        </div>
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-300/10 text-sky-100">
          <Activity className="h-5 w-5" />
        </span>
      </header>

      <section className="mt-6 rounded-[24px] border border-white/10 bg-slate-950/35 p-4">
        <div className="grid grid-cols-7 gap-2">
          {activityValues.map((value, index) => (
            <span
              key={`${value}-${index}`}
              className={`h-8 rounded-xl border border-white/5 ${getCellClass(value)}`}
            />
          ))}
        </div>
      </section>

      <footer className="mt-6 flex items-start gap-3 rounded-[24px] border border-white/10 bg-white/6 p-4 text-sm text-slate-300">
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-sky-200" />
        <p className="leading-6">
          Learning activity is distributed across the month to balance focus,
          consistency, and course completion.
        </p>
      </footer>
    </GlowCard>
  );
}
