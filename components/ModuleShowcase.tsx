import { featuredModules, categoryColors } from "@/lib/modules";

export default function ModuleShowcase() {
  return (
    <section id="modules" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built for every part of the stack
          </h2>
          <p className="text-[#a1a1aa] max-w-xl mx-auto">
            From languages to infrastructure, security to AI — specialists for every domain, installed only when you need them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredModules.map((mod) => {
            const colorClass = categoryColors[mod.category] ?? "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
            return (
              <div
                key={mod.name}
                className="bg-[#111] border border-[#222] rounded-xl p-5 hover:border-[#333] hover:bg-[#141414] transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-md border ${colorClass}`}>
                    {mod.category}
                  </span>
                </div>
                <h3 className="text-white font-mono text-sm font-medium mb-2 group-hover:text-[#33ff66] transition-colors">
                  {mod.name}
                </h3>
                <p className="text-[#52525b] text-xs leading-relaxed">{mod.description}</p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[#52525b] text-sm mt-10">
          + 65 more modules across 19 categories
        </p>
      </div>
    </section>
  );
}
