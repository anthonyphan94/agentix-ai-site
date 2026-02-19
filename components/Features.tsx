const features = [
  {
    badge: "Selective Loading",
    title: "Install only what you need",
    description:
      "Each module is fully isolated. Installing python_development loads Python specialists, a scaffolding command, and Python skills. The other 72 modules stay completely dormant — no tokens wasted.",
    detail: "Average 3.4 components per module. Zero cross-dependencies.",
    visual: (
      <div className="bg-[#0d0d0d] border border-[#222] rounded-xl p-5 font-mono text-sm space-y-2">
        <div className="text-[#52525b]"># Only this loads into context</div>
        <div><span className="text-[#00ff41]">agents/</span><span className="text-[#a1a1aa]">  python_pro, django_pro, fastapi_pro</span></div>
        <div><span className="text-[#00ff41]">commands/</span><span className="text-[#a1a1aa]"> python_scaffold</span></div>
        <div><span className="text-[#00ff41]">skills/</span><span className="text-[#a1a1aa]">   async_patterns, testing, packaging...</span></div>
        <div className="pt-2 text-[#52525b] border-t border-[#1a1a1a]"># The other 72 modules: dormant ✓</div>
      </div>
    ),
  },
  {
    badge: "Multi-Agent Orchestration",
    title: "Coordinate specialists in parallel",
    description:
      "Agent Teams spawns multiple specialists simultaneously — a security auditor, performance engineer, and architect all reviewing your code at once. No waiting for sequential reviews.",
    detail: "7 pre-built team configurations: review, debug, feature, fullstack, research, security, migration.",
    visual: (
      <div className="bg-[#0d0d0d] border border-[#222] rounded-xl p-5 font-mono text-sm space-y-2">
        <div><span className="text-[#00ff41]">$ </span><span className="text-[#a1a1aa]">/team_review src/ --reviewers security,perf,arch</span></div>
        <div className="pt-1 space-y-1 text-xs">
          <div className="flex items-center gap-2"><span className="text-emerald-400">●</span><span className="text-[#a1a1aa]">security_auditor scanning for OWASP issues...</span></div>
          <div className="flex items-center gap-2"><span className="text-blue-400">●</span><span className="text-[#a1a1aa]">performance_engineer profiling hot paths...</span></div>
          <div className="flex items-center gap-2"><span className="text-purple-400">●</span><span className="text-[#a1a1aa]">architect_review checking system design...</span></div>
        </div>
      </div>
    ),
  },
  {
    badge: "Progressive Skills",
    title: "Knowledge that loads on demand",
    description:
      "Skills use a three-tier architecture: metadata is always present (minimal tokens), instructions load when the skill activates, resources load only when referenced. Deep expertise without constant overhead.",
    detail: "146+ skills across 21 modules. Each skill is self-contained and independently updatable.",
    visual: (
      <div className="bg-[#0d0d0d] border border-[#222] rounded-xl p-5 font-mono text-xs space-y-3">
        {[
          { tier: "Tier 1 · Always loaded", label: "Metadata", size: "~50 tokens", color: "text-emerald-400" },
          { tier: "Tier 2 · On activation", label: "Instructions", size: "~300 tokens", color: "text-yellow-400" },
          { tier: "Tier 3 · On demand", label: "Resources", size: "~1000 tokens", color: "text-red-400" },
        ].map((t) => (
          <div key={t.tier} className="flex items-center justify-between">
            <div>
              <div className={`text-xs ${t.color} mb-0.5`}>{t.tier}</div>
              <div className="text-[#a1a1aa]">{t.label}</div>
            </div>
            <div className="text-[#52525b]">{t.size}</div>
          </div>
        ))}
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl space-y-24">
        {features.map((feature, i) => (
          <div
            key={feature.badge}
            className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div>
              <span className="text-xs font-medium text-[#00ff41] uppercase tracking-widest mb-4 block">
                {feature.badge}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-[#a1a1aa] leading-relaxed mb-4">{feature.description}</p>
              <p className="text-[#52525b] text-sm">{feature.detail}</p>
            </div>
            <div>{feature.visual}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
