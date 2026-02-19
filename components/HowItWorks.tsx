const steps = [
  {
    step: "01",
    title: "Install once",
    description: "One command. No config files, no setup wizard, no YouTube tutorial needed.",
    code: "npm install -g agentix-ai",
  },
  {
    step: "02",
    title: "Pick your specialists",
    description: "Browse 73 modules by domain. Python, security, DevOps, AI — grab only what your project needs.",
    code: "agentix-ai install python_development",
  },
  {
    step: "03",
    title: "Start building faster",
    description: "Open Claude Code and your specialists are already loaded. No prompts to write. Just build.",
    code: "claude",
  },
];

export default function HowItWorks() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Three commands. That&apos;s it.
          </h2>
          <p className="text-[#a1a1aa] max-w-xl mx-auto">
            No configuration files. No learning curve. Install, pick your modules, and your AI specialists are ready before your coffee gets cold.
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
