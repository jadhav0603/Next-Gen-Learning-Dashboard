# Next-Gen Learning Dashboard

A futuristic student learning dashboard built for a Frontend Intern Challenge.
The project uses a dark mode Bento Grid layout, animated dashboard cards, Supabase-powered course data, and smooth Framer Motion interactions.

## Live Demo

Vercel Link: https://jadhav0603-next-gen-learning-dashbo.vercel.app/

## Tech Stack

* Next.js App Router
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React
* npm

## Features

* Dark futuristic dashboard UI
* Responsive Bento Grid layout
* Collapsible sidebar for desktop and tablet
* Bottom navigation for mobile screens
* Dynamic course cards fetched from Supabase
* Server Component based data fetching
* Animated course progress bars
* Staggered page load animations
* Smooth spring-based card hover effects
* Sidebar active item animation using Framer Motion `layoutId`
* Loading skeleton UI
* Graceful error handling
* Reusable component structure
* `.env.example` included for setup

## Project Structure

```txt
src/
  app/
    layout.tsx
    page.tsx
    loading.tsx
    error.tsx
    globals.css

  components/
    dashboard/
      DashboardShell.tsx
      Sidebar.tsx
      MobileNav.tsx
      BentoGrid.tsx
      HeroCard.tsx
      CourseCard.tsx
      ActivityCard.tsx
      AchievementCard.tsx
      SkeletonCard.tsx

    ui/
      GlowCard.tsx

  lib/
    supabase.ts
    courses.ts
    icons.tsx

  types/
    course.ts
```

## Supabase Setup

Create a Supabase project and add a table named `courses`.

### Table Schema

```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone default now()
);
```

### Seed Data

```sql
insert into courses (title, progress, icon_name)
values
  ('Advanced React Patterns', 75, 'Brain'),
  ('TypeScript Mastery', 62, 'Code2'),
  ('UI Animation Basics', 48, 'Sparkles'),
  ('Database Design', 84, 'Database');
```

### Row Level Security Policy

```sql
alter table courses enable row level security;

create policy "Allow public read access for courses"
on courses
for select
to anon
using (true);
```

## Environment Variables

Create a `.env.local` file in the root folder and add your Supabase details.

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

A `.env.example` file is also included to show which variables are required.

Important: Do not commit `.env.local` to GitHub.

## How to Run Locally

Clone the project:

```bash
git clone your_repository_url
cd jadhav0603-next-gen-learning-dashboard
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app in your browser:

```txt
http://localhost:3000
```

Create production build:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Architecture Explanation

The project uses the Next.js App Router with a clean separation between server and client logic.

Course data is fetched from Supabase inside a Server Component. This keeps the data fetching secure and avoids unnecessary client-side API calls. The main page fetches the course list and passes it to dashboard components as props.

Framer Motion is used only in client components where animations and interactions are needed. This keeps the server/client component split clean and easy to understand.

The UI is divided into small reusable components such as `Sidebar`, `HeroCard`, `CourseCard`, `ActivityCard`, and `GlowCard`. This makes the code easier to maintain and avoids putting too much logic inside one file.

## Animation Approach

The dashboard uses Framer Motion for a smooth user experience.

* Bento cards appear with staggered fade and slight upward movement.
* Card hover animations use transform-based scale effects.
* Sidebar active state uses `layoutId` for smooth background movement.
* Course progress bars animate from `0%` to the actual progress value.
* Loading skeletons use a subtle pulse animation.

To avoid layout shifts, hover and entrance animations are handled using `transform` and `opacity` instead of changing width, height, margin, or padding.

## Responsive Design

The layout is designed for desktop, tablet, and mobile screens.

* Desktop: Full sidebar with Bento Grid layout
* Tablet: Sidebar becomes compact with icons
* Mobile: Sidebar is replaced with bottom navigation and cards stack vertically

## Error Handling

The app includes basic graceful error handling.

* If Supabase environment variables are missing, a setup message is shown.
* If Supabase data fetching fails, the user sees a clean error card.
* If no courses are found, the dashboard shows an empty state instead of breaking.

## Deployment

The project can be deployed on Vercel.

Steps:

1. Push the project to a public GitHub repository.
2. Import the repository in Vercel.
3. Add these environment variables in Vercel project settings:

```env
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

4. Deploy the project.

## Challenge Requirements Covered

* Next.js App Router
* Supabase database integration
* Server Component data fetching
* Tailwind CSS styling
* Framer Motion animations
* Lucide React icons
* Dynamic course tiles
* Loading skeletons
* Error handling
* Bento Grid layout
* Responsive dashboard
* Semantic HTML structure
* `.env.example`
* README with setup and architecture explanation

## Author

Vijay Jadhav
