"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is this just free repos repackaged?",
    a: "No. Every module is custom-built — original agent definitions, skill architectures, and orchestration workflows designed specifically for Claude Code. This isn\u2019t a curated list of links. It\u2019s 73 production-ready modules you can\u2019t find anywhere else.",
  },
  {
    q: "Will I be able to use this if I\u2019m still learning?",
    a: "That\u2019s exactly who benefits most. Each module comes with specialist agents that guide you through production patterns — testing, security, deployment — as you build. It\u2019s like pairing with a senior dev on every project.",
  },
  {
    q: "Why should I pay when there are free alternatives?",
    a: "Free prompts give you generic advice. Agentix-AI gives you structured specialist agents with domain knowledge, progressive skill loading, and multi-agent orchestration. The difference is like reading a blog post vs. hiring a team. One saves you minutes, the other saves you weeks.",
  },
  {
    q: "Is $49 actually worth it?",
    a: "If you bill $30/hr and save just 2 hours in your first week, you\u2019ve made your money back. Most users report saving 10+ hours in the first week alone. That\u2019s a 6x return before day 7.",
  },
  {
    q: "What if it doesn\u2019t work for me?",
    a: "You have 30 days to try everything. If Agentix-AI doesn\u2019t save you time, email us and get a full refund. No questions asked.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Still on the fence?
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
