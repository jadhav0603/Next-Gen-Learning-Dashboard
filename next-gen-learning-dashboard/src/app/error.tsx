"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

import GlowCard from "@/components/ui/GlowCard";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <GlowCard
        as="section"
        hoverable={false}
        className="w-full max-w-2xl p-8 text-center sm:p-10"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-300/20 bg-rose-300/10 text-rose-100">
          <AlertTriangle className="h-6 w-6" />
        </div>

        <p className="mt-6 text-sm uppercase tracking-[0.32em] text-sky-200/70">
          Dashboard Error
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Something went wrong while opening the dashboard.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
          {error.message || "Please try again. The issue may be temporary."}
        </p>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-3 text-sm font-medium text-sky-100 transition hover:border-sky-300/50 hover:bg-sky-300/15"
          >
            <RefreshCcw className="h-4 w-4" />
            <span>Try again</span>
          </button>
        </div>
      </GlowCard>
    </main>
  );
}
