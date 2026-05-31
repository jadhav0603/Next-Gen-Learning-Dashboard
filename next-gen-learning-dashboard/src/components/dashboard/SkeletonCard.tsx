import GlowCard from "@/components/ui/GlowCard";

export default function SkeletonCard() {
  return (
    <GlowCard hoverable={false} className="min-h-[260px] animate-[pulse_2.4s_ease-in-out_infinite] p-5">
      <div className="h-3 w-20 rounded-full bg-white/10" />
      <div className="mt-4 h-6 w-3/4 rounded-full bg-white/12" />
      <div className="mt-3 h-4 w-full rounded-full bg-white/10" />
      <div className="mt-2 h-4 w-5/6 rounded-full bg-white/10" />
      <div className="mt-6 flex gap-3">
        <div className="h-10 w-28 rounded-full bg-white/10" />
        <div className="h-10 w-24 rounded-full bg-white/10" />
      </div>
      <div className="mt-6 h-2 rounded-full bg-white/10" />
    </GlowCard>
  );
}
