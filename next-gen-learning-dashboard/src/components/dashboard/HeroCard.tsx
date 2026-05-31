import GlowCard from "@/components/ui/GlowCard";
import { courseIcon, heroIcon, progressIcon, streakIcon } from "@/lib/icons";

type HeroCardProps = {
  studentName: string;
  streak: number;
  courseCount: number;
};

export default function HeroCard({
  studentName,
  streak,
  courseCount,
}: HeroCardProps) {
  const HeroIcon = heroIcon;
  const StreakIcon = streakIcon;
  const CourseIcon = courseIcon;
  const ProgressIcon = progressIcon;

  const stats = [
    { label: "Live courses", value: String(courseCount).padStart(2, "0"), icon: CourseIcon },
    { label: "Learning streak", value: `${streak} days`, icon: StreakIcon },
    { label: "Current phase", value: "Supabase sync", icon: ProgressIcon },
  ];

  return (
    <GlowCard hoverable className="min-h-[320px] p-6 sm:p-8">
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2 rounded-full border border-sky-300/15 bg-sky-300/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-sky-100">
          <HeroIcon className="h-4 w-4" />
          <span>Next learning orbit</span>
        </div>
        <div className="rounded-full border border-emerald-300/15 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
          {streak}-day streak
        </div>
      </header>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
            Learning command deck
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Welcome back, {studentName}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Your premium learning dashboard is live with futuristic cards, animated
            progress, and course data flowing in from Supabase.
          </p>
        </div>

        <aside className="rounded-[26px] border border-white/10 bg-slate-950/35 p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
            Session pulse
          </p>
          <div className="mt-5 flex items-center justify-center">
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-sky-300/20 bg-[radial-gradient(circle,rgba(96,165,250,0.24),transparent_60%)]">
              <div className="absolute h-36 w-36 rounded-full border border-indigo-300/10" />
              <div className="absolute h-20 w-20 rounded-full border border-sky-300/20" />
              <span className="text-center text-sm font-medium text-sky-100">
                {streak}
                <br />
                day run
              </span>
            </div>
          </div>
        </aside>
      </section>

      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-[24px] border border-white/10 bg-slate-950/35 p-4"
            >
              <dt className="flex items-center gap-2 text-sm text-slate-400">
                <Icon className="h-4 w-4 text-sky-200" />
                <span>{stat.label}</span>
              </dt>
              <dd className="mt-3 text-2xl font-semibold text-white">{stat.value}</dd>
            </div>
          );
        })}
      </dl>
    </GlowCard>
  );
}
