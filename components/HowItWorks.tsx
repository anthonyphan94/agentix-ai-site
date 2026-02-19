const steps = [
  {
    step: "01",
    title: "Install the CLI",
    description: "One global install gives you access to the full module registry.",
    code: "npm install -g agentix-ai",
  },
  {
    step: "02",
    title: "Browse & discover",
    description: "Explore 73 modules grouped by category — languages, infrastructure, security, AI, and more.",
    code: "agentix-ai list",
  },
  {
    step: "03",
    title: "Activate in Claude Code",
    description: "Installed modules load their agents, commands, and skills. Everything else stays dormant.",
    code: "agentix-ai install backend_development",
  },
];

export default function HowItWorks() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Up and running in minutes
          </h2>
          <p className="text-[#a1a1aa] max-w-xl mx-auto">
            No configuration files. No system prompts to write. Install a module and the right specialists appear in Claude Code automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.step} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-[#333] to-transparent z-0" />
              )}
              <div className="relative z-10">
                <div className="text-[#00ff41] font-mono text-sm font-bold mb-4">{step.step}</div>
                <h3 className="text-white font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4">{step.description}</p>
                <div className="bg-[#0d0d0d] border border-[#222] rounded-lg px-4 py-2.5 font-mono text-sm text-[#a1a1aa]">
                  <span className="text-[#00ff41]">$ </span>{step.code}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
