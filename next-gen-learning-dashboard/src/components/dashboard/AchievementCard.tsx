import GlowCard from "@/components/ui/GlowCard";
import type { Course } from "@/types/course";
import { Award, Sparkles, Star } from "lucide-react";

type AchievementCardProps = {
  courses: Course[];
};

function getAverageProgress(courses: Course[]) {
  if (courses.length === 0) {
    return 0;
  }

  const total = courses.reduce((sum, course) => sum + course.progress, 0);

  return Math.round(total / courses.length);
}

export default function AchievementCard({ courses }: AchievementCardProps) {
  const averageProgress = getAverageProgress(courses);
  const topCourse = courses.reduce<Course | null>((currentTop, course) => {
    if (!currentTop || course.progress > currentTop.progress) {
      return course;
    }

    return currentTop;
  }, null);

  const summaryItems = [
    `${courses.length} synced courses`,
    `${averageProgress}% average progress`,
    topCourse ? `Top course: ${topCourse.title}` : "Waiting for your first course",
  ];

  return (
    <GlowCard as="section" hoverable className="min-h-[320px] p-6" id="achievements">
      <header className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
            Summary
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">Achievement panel</h2>
        </div>
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-300/10 text-indigo-100">
          <Award className="h-5 w-5" />
        </span>
      </header>

      <section className="mt-6 rounded-[24px] border border-white/10 bg-slate-950/35 p-5">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
          Performance snapshot
        </p>
        <div className="mt-4 flex items-end gap-3">
          <strong className="text-4xl font-semibold text-white">
            {averageProgress}%
          </strong>
          <span className="pb-1 text-sm text-emerald-200">steady upward trend</span>
        </div>
      </section>

      <ul className="mt-6 space-y-3">
        {summaryItems.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 rounded-[22px] border border-white/10 bg-slate-950/35 px-4 py-3 text-sm text-slate-200"
          >
            <Star className="h-4 w-4 text-indigo-200" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <footer className="mt-6 rounded-[24px] border border-white/10 bg-white/6 p-4">
        <div className="flex items-center gap-2 text-sm text-sky-100">
          <Sparkles className="h-4 w-4" />
          <span>Next milestone: push every course above 80% completion.</span>
        </div>
      </footer>
    </GlowCard>
  );
}
