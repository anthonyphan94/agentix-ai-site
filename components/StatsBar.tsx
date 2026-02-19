import { stats } from "@/lib/modules";

export default function StatsBar() {
  return (
    <section className="py-12 px-6 border-y border-[#1a1a1a]">
      <div className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-[#52525b]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
