"use client";

import { motion } from "framer-motion";

import GlowCard from "@/components/ui/GlowCard";
import { CourseGlyph, durationIcon } from "@/lib/icons";
import type { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
};

function formatCreatedAt(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Added recently";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}

export default function CourseCard({ course }: CourseCardProps) {
  const DurationIcon = durationIcon;

  return (
    <GlowCard hoverable className="min-h-[260px] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.14),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(129,140,248,0.16),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.12),rgba(2,6,23,0.38))]" />
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]" />

      <header className="relative flex items-start justify-between gap-4">
        <div className="max-w-[15rem]">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
            Supabase course
          </p>
          <h3 className="mt-2 text-lg font-semibold leading-7 text-white">
            {course.title}
          </h3>
        </div>

        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-sky-100">
          <CourseGlyph iconName={course.iconName} className="h-5 w-5" />
        </span>
      </header>

      <p className="relative mt-4 text-sm leading-6 text-slate-300">
        Track steady progress, keep momentum high, and continue stacking wins in your
        learning journey.
      </p>

      <dl className="relative mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/45 px-3 py-2">
          <CourseGlyph iconName={course.iconName} className="h-4 w-4 text-sky-200" />
          <dt className="sr-only">Icon</dt>
          <dd>{course.iconName}</dd>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/45 px-3 py-2">
          <DurationIcon className="h-4 w-4 text-sky-200" />
          <dt className="sr-only">Created at</dt>
          <dd>{formatCreatedAt(course.createdAt)}</dd>
        </div>
      </dl>

      <section className="relative mt-6">
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>Progress</span>
          <strong className="font-medium text-white">{course.progress}%</strong>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: course.progress / 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.2 }}
            className="h-full origin-left rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400"
          />
        </div>
      </section>
    </GlowCard>
  );
}
