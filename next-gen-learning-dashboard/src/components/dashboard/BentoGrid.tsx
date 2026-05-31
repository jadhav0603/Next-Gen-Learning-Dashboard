"use client";

import { motion } from "framer-motion";

import AchievementCard from "@/components/dashboard/AchievementCard";
import ActivityCard from "@/components/dashboard/ActivityCard";
import CourseCard from "@/components/dashboard/CourseCard";
import HeroCard from "@/components/dashboard/HeroCard";
import SkeletonCard from "@/components/dashboard/SkeletonCard";
import GlowCard from "@/components/ui/GlowCard";
import type { Course } from "@/types/course";

type BentoGridProps = {
  courses: Course[];
  studentName: string;
  streak: number;
  isLoading?: boolean;
  courseError?: string | null;
  isSetupError?: boolean;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut" as const,
    },
  },
};

export default function BentoGrid({
  courses,
  studentName,
  streak,
  isLoading = false,
  courseError = null,
  isSetupError = false,
}: BentoGridProps) {
  const hasError = Boolean(courseError);
  const isEmpty = !isLoading && !hasError && courses.length === 0;

  return (
    <section className="space-y-5">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
      >
        <motion.div variants={cardVariants} className="md:col-span-2 xl:col-span-2">
          <HeroCard studentName={studentName} streak={streak} courseCount={courses.length} />
        </motion.div>

        <motion.div variants={cardVariants} className="xl:col-span-1">
          <ActivityCard />
        </motion.div>

        <motion.div variants={cardVariants} className="xl:col-span-1">
          <AchievementCard courses={courses} />
        </motion.div>
      </motion.section>

      <section id="courses" className="space-y-4">
        <header className="flex items-center justify-between gap-4 px-1">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Courses</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Supabase course tiles</h2>
          </div>
          <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs text-slate-300">
            {isLoading
              ? "Loading courses"
              : hasError
                ? "Unable to load"
                : isEmpty
                  ? "No courses yet"
                  : `${courses.length} active`}
          </span>
        </header>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {isLoading &&
            [1, 2, 3, 4].map((item) => (
              <motion.div key={item} variants={cardVariants}>
                <SkeletonCard />
              </motion.div>
            ))}

          {hasError && (
            <motion.article variants={cardVariants} className="md:col-span-2 xl:col-span-4">
              <GlowCard as="article" hoverable={false} className="min-h-[220px] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-rose-200/80">
                  {isSetupError ? "Supabase setup needed" : "Course loading failed"}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {isSetupError
                    ? "Connect your public Supabase environment variables"
                    : "Courses are temporarily unavailable"}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  {courseError}
                </p>
              </GlowCard>
            </motion.article>
          )}

          {isEmpty && (
            <motion.article variants={cardVariants} className="md:col-span-2 xl:col-span-4">
              <GlowCard as="article" hoverable={false} className="min-h-[220px] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-sky-200/70">
                  Empty state
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  No courses found in Supabase yet
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  Add rows to the <code className="font-mono text-sky-100">courses</code> table
                  and they will appear here automatically.
                </p>
              </GlowCard>
            </motion.article>
          )}

          {!isLoading &&
            !hasError &&
            courses.map((course) => (
              <motion.div key={course.id} variants={cardVariants}>
                <CourseCard course={course} />
              </motion.div>
            ))}
        </motion.section>
      </section>
    </section>
  );
}
