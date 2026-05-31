"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import GlowCard from "@/components/ui/GlowCard";
import { brandIcon, navigationItems, streakIcon } from "@/lib/icons";

type SidebarProps = {
  studentName: string;
  streak: number;
};

export default function Sidebar({ studentName, streak }: SidebarProps) {
  const BrandIcon = brandIcon;
  const StreakIcon = streakIcon;
  const [activeItem, setActiveItem] = useState("#dashboard");

  return (
    <aside className="sticky top-4 hidden self-start md:block">
      <GlowCard
        as="section"
        hoverable={false}
        className="flex min-h-[calc(100vh-2rem)] w-20 flex-col px-3 py-4 lg:w-72 lg:px-5 lg:py-6"
      >
        <header className="border-b border-white/10 pb-5">
          <div className="flex items-center justify-center lg:justify-start lg:gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-300/10 text-sky-100">
              <BrandIcon className="h-6 w-6" />
            </span>
            <div className="hidden lg:block">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Learning Hub
              </p>
              <h2 className="mt-1 text-lg font-semibold text-white">
                {studentName}&apos;s space
              </h2>
            </div>
          </div>
        </header>

        <nav aria-label="Sidebar" className="mt-6 flex-1">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.href;

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    title={item.label}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setActiveItem(item.href)}
                    className="relative flex items-center justify-center overflow-hidden rounded-2xl px-3 py-3 text-slate-300 transition hover:text-white lg:justify-start lg:gap-3 lg:px-4"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="sidebar-active-pill"
                        className="absolute inset-0 rounded-2xl border border-sky-300/20 bg-sky-300/12"
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    )}
                    <Icon className="relative h-4 w-4 shrink-0" />
                    <span className="relative hidden text-sm lg:inline">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <section
          className="mt-6 rounded-[24px] border border-white/10 bg-slate-950/45 p-3 lg:p-4"
          id="settings"
        >
          <div className="flex items-center justify-center gap-2 text-sky-100 lg:justify-start">
            <StreakIcon className="h-4 w-4" />
            <span className="hidden text-sm lg:inline">{streak} day streak</span>
          </div>
          <p className="mt-3 hidden text-sm leading-6 text-slate-400 lg:block">
            The dashboard is tuned for a clean frontend challenge handoff.
          </p>
        </section>
      </GlowCard>
    </aside>
  );
}
