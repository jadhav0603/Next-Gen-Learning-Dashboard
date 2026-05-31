import { createSupabaseClient, hasSupabaseEnv } from "@/lib/supabase";
import type { Course, CoursesResult } from "@/types/course";

type CourseRow = {
  id: string;
  title: string;
  progress: number | null;
  icon_name: string | null;
  created_at: string | null;
};

function getText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function getProgress(value: unknown) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return 0;
  }

  if (value < 0) {
    return 0;
  }

  if (value > 100) {
    return 100;
  }

  return value;
}

function mapCourse(item: CourseRow, index: number): Course {
  return {
    id: item.id ?? `course-${index + 1}`,
    title: getText(item.title, "Untitled course"),
    progress: getProgress(item.progress),
    iconName: getText(item.icon_name, "BookOpen"),
    createdAt: getText(item.created_at, new Date(0).toISOString()),
  };
}

export async function getCourses(): Promise<CoursesResult> {
  if (!hasSupabaseEnv()) {
    return {
      courses: [],
      error:
        "Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local file to load courses.",
      isSetupError: true,
    };
  }

  const supabase = createSupabaseClient();

  if (!supabase) {
    return {
      courses: [],
      error:
        "Supabase client could not be created. Please recheck your public URL and anon key.",
      isSetupError: true,
    };
  }

  try {
    const { data, error } = await supabase
      .from("courses")
      .select("id, title, progress, icon_name, created_at")
      .order("created_at", { ascending: true });

    if (error) {
      return {
        courses: [],
        error: "We could not load courses from Supabase right now. Please try again soon.",
        isSetupError: false,
      };
    }

    const courses = (data ?? []).map((item, index) => mapCourse(item, index));

    return {
      courses,
      error: null,
      isSetupError: false,
    };
  } catch {
    return {
      courses: [],
      error: "The dashboard could not reach Supabase right now. Please check your connection and try again.",
      isSetupError: false,
    };
  }
}
