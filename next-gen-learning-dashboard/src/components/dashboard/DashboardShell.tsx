import BentoGrid from "@/components/dashboard/BentoGrid";
import MobileNav from "@/components/dashboard/MobileNav";
import Sidebar from "@/components/dashboard/Sidebar";
import type { Course } from "@/types/course";

type DashboardShellProps = {
  courses: Course[];
  studentName: string;
  streak: number;
  isLoading?: boolean;
  courseError?: string | null;
  isSetupError?: boolean;
};

export default function DashboardShell({
  courses,
  studentName,
  streak,
  isLoading = false,
  courseError = null,
  isSetupError = false,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen text-slate-100">
      <div className="mx-auto max-w-[1440px] px-4 pb-28 pt-4 sm:px-6 md:pb-10 xl:px-8">
        <MobileNav />

        <div className="md:grid md:grid-cols-[80px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[288px_minmax(0,1fr)]">
          <Sidebar studentName={studentName} streak={streak} />

          <main className="space-y-6">
            <header className="space-y-2 px-1" id="dashboard">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-200/70">
                Next-Gen Learning Dashboard
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Student command center
              </h1>
            </header>

            <BentoGrid
              courses={courses}
              studentName={studentName}
              streak={streak}
              isLoading={isLoading}
              courseError={courseError}
              isSetupError={isSetupError}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
