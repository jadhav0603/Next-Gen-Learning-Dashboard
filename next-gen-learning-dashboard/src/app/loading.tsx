import SkeletonCard from "@/components/dashboard/SkeletonCard";
import GlowCard from "@/components/ui/GlowCard";

function SidebarSkeleton() {
  return (
    <aside className="sticky top-4 hidden self-start md:block">
      <GlowCard
        as="section"
        hoverable={false}
        className="flex min-h-[calc(100vh-2rem)] w-20 animate-[pulse_2.4s_ease-in-out_infinite] flex-col px-3 py-4 lg:w-72 lg:px-5 lg:py-6"
      >
        <div className="border-b border-white/10 pb-5">
          <div className="flex items-center justify-center lg:justify-start lg:gap-3">
            <div className="h-12 w-12 rounded-2xl bg-white/10" />
            <div className="hidden space-y-2 lg:block">
              <div className="h-3 w-24 rounded-full bg-white/10" />
              <div className="h-4 w-32 rounded-full bg-white/12" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex-1 space-y-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="h-11 rounded-2xl bg-white/8 lg:h-12"
            />
          ))}
        </div>

        <div className="mt-6 rounded-[24px] border border-white/10 bg-slate-950/45 p-4">
          <div className="h-4 w-10 rounded-full bg-white/10" />
          <div className="mt-3 hidden h-4 w-full rounded-full bg-white/10 lg:block" />
          <div className="mt-2 hidden h-4 w-5/6 rounded-full bg-white/10 lg:block" />
        </div>
      </GlowCard>
    </aside>
  );
}

function HeroSkeleton() {
  return (
    <GlowCard
      hoverable={false}
      className="min-h-[320px] animate-[pulse_2.4s_ease-in-out_infinite] p-6 sm:p-8"
    >
      <div className="h-9 w-40 rounded-full bg-white/10" />
      <div className="mt-8 h-4 w-32 rounded-full bg-white/10" />
      <div className="mt-4 h-10 w-3/4 rounded-[18px] bg-white/12" />
      <div className="mt-4 h-4 w-full rounded-full bg-white/10" />
      <div className="mt-2 h-4 w-5/6 rounded-full bg-white/10" />

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="rounded-[24px] border border-white/10 bg-slate-950/35 p-4"
          >
            <div className="h-4 w-24 rounded-full bg-white/10" />
            <div className="mt-3 h-7 w-20 rounded-full bg-white/12" />
          </div>
        ))}
      </div>
    </GlowCard>
  );
}

function ActivitySkeleton() {
  return (
    <GlowCard
      as="section"
      hoverable={false}
      className="min-h-[320px] animate-[pulse_2.4s_ease-in-out_infinite] p-6"
    >
      <div className="h-4 w-20 rounded-full bg-white/10" />
      <div className="mt-3 h-7 w-40 rounded-full bg-white/12" />

      <div className="mt-6 rounded-[24px] border border-white/10 bg-slate-950/35 p-4">
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 28 }).map((_, index) => (
            <div
              key={index}
              className="h-8 rounded-xl bg-white/8"
            />
          ))}
        </div>
      </div>

      <div className="mt-6 h-20 rounded-[24px] bg-white/8" />
    </GlowCard>
  );
}

function MobileNavSkeleton() {
  return (
    <nav className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <GlowCard
        as="section"
        hoverable={false}
        className="animate-[pulse_2.4s_ease-in-out_infinite] px-3 py-2"
      >
        <div className="grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-14 rounded-2xl bg-white/8" />
          ))}
        </div>
      </GlowCard>
    </nav>
  );
}

export default function Loading() {
  return (
    <div className="min-h-screen text-slate-100">
      <div className="mx-auto max-w-[1440px] px-4 pb-28 pt-4 sm:px-6 md:pb-10 xl:px-8">
        <MobileNavSkeleton />

        <div className="md:grid md:grid-cols-[80px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[288px_minmax(0,1fr)]">
          <SidebarSkeleton />

          <main className="space-y-6">
            <header className="space-y-2 px-1">
              <div className="h-4 w-44 rounded-full bg-white/10" />
              <div className="h-10 w-72 rounded-[18px] bg-white/12" />
            </header>

            <section className="space-y-5">
              <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                <div className="md:col-span-2 xl:col-span-2">
                  <HeroSkeleton />
                </div>

                <ActivitySkeleton />

                <GlowCard
                  as="section"
                  hoverable={false}
                  className="min-h-[320px] animate-[pulse_2.4s_ease-in-out_infinite] p-6"
                >
                  <div className="h-4 w-20 rounded-full bg-white/10" />
                  <div className="mt-3 h-7 w-44 rounded-full bg-white/12" />
                  <div className="mt-6 h-28 rounded-[24px] bg-white/8" />
                  <div className="mt-6 space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="h-12 rounded-[22px] bg-white/8" />
                    ))}
                  </div>
                </GlowCard>
              </section>

              <section className="space-y-4">
                <header className="flex items-center justify-between gap-4 px-1">
                  <div>
                    <div className="h-4 w-20 rounded-full bg-white/10" />
                    <div className="mt-3 h-8 w-52 rounded-[18px] bg-white/12" />
                  </div>
                  <div className="h-9 w-28 rounded-full bg-white/10" />
                </header>

                <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {[1, 2, 3, 4].map((item) => (
                    <SkeletonCard key={item} />
                  ))}
                </section>
              </section>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
