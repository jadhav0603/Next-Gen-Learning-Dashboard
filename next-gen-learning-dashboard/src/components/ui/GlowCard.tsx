"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type GlowCardProps = {
  as?: "article" | "aside" | "div" | "section";
  children: ReactNode;
  className?: string;
  id?: string;
  hoverable?: boolean;
};

const motionTags = {
  article: motion.article,
  aside: motion.aside,
  div: motion.div,
  section: motion.section,
};

const hoverTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};

export default function GlowCard({
  as = "article",
  children,
  className = "",
  id,
  hoverable = false,
}: GlowCardProps) {
  const Tag = motionTags[as];

  return (
    <Tag
      id={id}
      whileHover={hoverable ? { scale: 1.015, y: -2 } : undefined}
      transition={hoverTransition}
      className={`group relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-white/6 shadow-[0_24px_80px_rgba(2,6,23,0.55)] backdrop-blur-xl ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,140,248,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.14),transparent_32%)]" />
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.18),transparent_35%),linear-gradient(135deg,rgba(129,140,248,0.12),transparent_60%)]" />
      <div className="absolute inset-px rounded-[27px] border border-transparent transition duration-300 group-hover:border-sky-300/20" />
      <div className="relative h-full">{children}</div>
    </Tag>
  );
}
