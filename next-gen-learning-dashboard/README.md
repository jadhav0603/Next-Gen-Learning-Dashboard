# Next-Gen Learning Dashboard

## Overview

Next-Gen Learning Dashboard is a frontend intern challenge project built with Next.js App Router.  
It shows a futuristic student dashboard UI with course data coming from Supabase instead of hardcoded course cards.

The dashboard is designed for desktop, tablet, and mobile, with a dark premium bento layout and smooth Framer Motion animations.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- Supabase
- ESLint

## Features Completed

- Dark mode only dashboard UI
- Responsive sidebar for desktop
- Icon-only sidebar for tablet
- Bottom navigation for mobile
- Premium bento dashboard layout
- Dynamic course cards from Supabase
- Animated progress bars
- Staggered card entrance animations
- Dashboard-style loading screen
- Friendly error boundary with retry button
- Empty state and setup error handling
- Semantic HTML structure

## Supabase Table Schema

Table name: `courses`

Columns:

- `id` - `uuid`
- `title` - `text`
- `progress` - `integer`
- `icon_name` - `text`
- `created_at` - `timestamp`

## Environment Variables

Create a `.env.local` file in the project root and add:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Only the public anon key is used here.  
Do not commit the real `.env.local` file to the repository.

## How to Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

To create a production build:

```bash
npm run build
```

## Server Components

Course data is fetched on the server in `src/app/page.tsx` by calling `getCourses()` from `src/lib/courses.ts`.

This keeps Supabase data fetching out of the client components and makes the page safer and cleaner.

## Client Components

Client components are mainly used where Framer Motion is needed.

Examples:

- sidebar active highlight animation
- card hover motion
- staggered bento animations
- animated course progress bars

The Supabase fetching itself is not done in those client components.

## Zero Layout Shift Animations

To keep the UI stable during animation:

- opacity and transform are used for card entrance and hover effects
- progress bars animate with `scaleX` from the left instead of changing layout size
- card heights use fixed or minimum heights where needed
- hover effects do not animate width, height, margin, or padding

## Deployment on Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the environment variables in the Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy the project.

Vercel will run the Next.js build automatically.
