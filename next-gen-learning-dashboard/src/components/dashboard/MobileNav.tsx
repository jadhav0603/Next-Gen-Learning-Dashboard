"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import GlowCard from "@/components/ui/GlowCard";
import { navigationItems } from "@/lib/icons";

export default function MobileNav() {
  const [activeItem, setActiveItem] = useState("#dashboard");

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-4 bottom-4 z-40 md:hidden"
    >
      <GlowCard as="section" hoverable={false} className="px-3 py-2">
        <ul className="grid grid-cols-5 gap-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.href;

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setActiveItem(item.href)}
                  className="relative flex flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl px-2 py-3 text-[11px] text-slate-300 transition hover:text-white"
                >
                  {isActive && (
                    <motion.span
                      layoutId="mobile-active-pill"
                      className="absolute inset-0 rounded-2xl border border-sky-300/20 bg-sky-300/12"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                  <Icon className="relative h-4 w-4" />
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </GlowCard>
    </nav>
  );
}
