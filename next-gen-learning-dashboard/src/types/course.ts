export interface Course {
  id: string;
  title: string;
  progress: number;
  iconName: string;
  createdAt: string;
}

export interface CoursesResult {
  courses: Course[];
  error: string | null;
  isSetupError: boolean;
}
