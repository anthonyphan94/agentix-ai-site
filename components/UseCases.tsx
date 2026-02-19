const useCases = [
  {
    who: "Freelancer on Upwork",
    icon: "💼",
    before:
      "Spends 4+ hours per project on setup, boilerplate, and patterns you've solved before. Clients see slow timelines and pick someone faster.",
    after:
      "Scaffolds the entire project in 20 minutes with domain-specific agents. Submits proposals with shorter timelines. Wins more contracts.",
    timeSaved: "3–4 hours per project start",
  },
  {
    who: "Agency Owner",
    icon: "🏢",
    before:
      "Junior devs ship inconsistent code. Senior devs spend half their day reviewing instead of building. Deadlines slip.",
    after:
      "AI agents handle first-pass code reviews, security scanning, and architecture checks automatically. Seniors review findings, not raw code.",
    timeSaved: "10+ hours per week across team",
  },
  {
    who: "Solo Founder",
    icon: "🚀",
    before:
      "Wears every hat — backend, frontend, DevOps, security. Context-switching between domains kills velocity. Mistakes pile up.",
    after:
      "Each domain has a specialist agent. Switch from backend to frontend to deployment without losing depth or making rookie mistakes.",
    timeSaved: "Full-stack velocity as one person",
  },
  {
    who: "Bootcamp Graduate",
    icon: "🎓",
    before:
      "Knows the basics but struggles with production patterns — security, testing, deployment. Feels imposter syndrome on every client project.",
    after:
      "AI specialists teach production patterns as you build. Ship like a senior developer. Win clients on speed and quality, not price.",
    timeSaved: "Months of learning curve compressed",
  },
];

export default function UseCases() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built for developers like you
          </h2>
          <p className="text-[#a1a1aa] max-w-xl mx-auto">
            No matter where you are in your career, the right AI agents multiply your output.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((uc) => (
            <div
              key={uc.who}
              className="bg-[#111] border border-[#222] rounded-xl p-6 hover:border-[#333] transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{uc.icon}</span>
                <h3 className="text-white font-semibold text-lg">{uc.who}</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-red-400 font-medium">Before: </span>
                  <span className="text-[#a1a1aa]">{uc.before}</span>
                </div>
                <div>
                  <span className="text-[#00ff41] font-medium">After: </span>
                  <span className="text-[#a1a1aa]">{uc.after}</span>
                </div>
                <div className="pt-2 border-t border-[#1a1a1a]">
                  <span className="text-[#00ff41] font-mono text-xs">
                    ⏱ {uc.timeSaved}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
