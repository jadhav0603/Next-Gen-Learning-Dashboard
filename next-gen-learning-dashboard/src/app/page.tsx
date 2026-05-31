import { getCourses } from "@/lib/courses";
import DashboardShell from "@/components/dashboard/DashboardShell";

export default async function Home() {
  const { courses, error, isSetupError } = await getCourses();

  return (
    <DashboardShell
      courses={courses}
      studentName="Vijay"
      streak={12}
      courseError={error}
      isSetupError={isSetupError}
    />
  );
}
