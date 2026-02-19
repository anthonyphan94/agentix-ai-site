"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What is Claude Code?",
    a: "Claude Code is Anthropic's official CLI for Claude. It lets you run Claude as an AI coding assistant in your terminal, with access to your codebase. Agentix-AI extends it with specialist agents and workflows.",
  },
  {
    q: "Do I need a Claude Pro subscription?",
    a: "You need access to Claude Code, which requires a Claude account. A Claude Pro or Max plan is recommended for heavy use. Agentix-AI itself is a one-time $49 purchase on top of your existing Claude setup.",
  },
  {
    q: "How do I install after purchasing?",
    a: "After payment you'll receive a GitHub invite to the private repo at your purchase email. Accept the invite, then run: npm install -g agentix-ai followed by agentix-ai install <module-name> for the modules you want.",
  },
  {
    q: "Can I install specific modules or do I get everything?",
    a: "You install exactly what you need. Run agentix-ai list to browse all 73 modules, then agentix-ai install python_development to add just that module. Use agentix-ai install --all to get everything at once.",
  },
  {
    q: "Does this work with any project?",
    a: "Yes. Agentix-AI modules load into your Claude Code session — they work with any codebase in any language. The Python module gives you Python specialists; install a different module for a different stack.",
  },
  {
    q: "What happens when new modules are added?",
    a: "Your GitHub access persists. When new modules are added to the repo, run git pull followed by npm install to get the updates. Your $49 covers all future additions.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Frequently asked questions
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#222] rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left text-white font-medium hover:bg-[#111] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className={`text-[#52525b] transition-transform ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-[#a1a1aa] text-sm leading-relaxed border-t border-[#1a1a1a]">
                  <div className="pt-4">{faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
