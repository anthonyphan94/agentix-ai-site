"use client";
import { useEffect, useState } from "react";
import { GUMROAD_URL } from "@/lib/modules";

const terminalLines = [
  { prompt: "$ ", text: "npm install -g agentix-ai", delay: 0 },
  { prompt: "", text: "✓ agentix-ai installed", delay: 800, dim: true },
  { prompt: "$ ", text: "agentix-ai install python_development backend_development", delay: 1400 },
  { prompt: "", text: "✓ python_development — 3 agents, 5 skills loaded", delay: 2400, dim: true },
  { prompt: "", text: "✓ backend_development — 4 agents, 7 skills loaded", delay: 2700, dim: true },
  { prompt: "", text: "✓ 2 modules ready. Run claude to start.", delay: 3000, dim: true },
];

function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    terminalLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay + 400);
    });
  }, []);

  return (
    <div className="bg-[#0d0d0d] border border-[#222] rounded-xl overflow-hidden font-mono text-sm w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#222]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[#52525b] text-xs">terminal</span>
      </div>
      <div className="p-4 space-y-1 min-h-[140px]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={line.dim ? "text-[#52525b]" : "text-[#ededed]"}>
            {line.prompt && <span className="text-[#00ff41]">{line.prompt}</span>}
            {line.text}
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <div>
            <span className="text-[#00ff41]">$ </span>
            <span className="animate-pulse">▊</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 bg-[#00ff41]/10 border border-[#00ff41]/20 text-[#00ff41] text-xs font-medium px-3 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse" />
          Built for Claude Code
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
          Your AI Development Team{" "}
          <span className="text-[#00ff41]">for Claude Code</span>
        </h1>

        <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto mb-10 leading-relaxed">
          73 domain-specialist modules — agents, skills, and orchestration workflows.
          Install only what your project needs. Zero bloat, maximum precision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00ff41] hover:bg-[#00cc33] text-black font-semibold px-8 py-3.5 rounded-xl transition-colors text-base w-full sm:w-auto text-center"
          >
            Get Access — $49
          </a>
          <a
            href="#modules"
            className="border border-[#333] hover:border-[#444] text-[#a1a1aa] hover:text-white font-medium px-8 py-3.5 rounded-xl transition-colors text-base w-full sm:w-auto text-center"
          >
            Browse Modules →
          </a>
        </div>

        <Terminal />

        <p className="mt-6 text-xs text-[#52525b]">
          One-time payment · Lifetime access · Instant GitHub access
        </p>
      </div>
    </section>
  );
}
