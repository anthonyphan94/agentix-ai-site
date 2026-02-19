const pains = [
  {
    icon: "⚡",
    title: "Context Overload",
    description:
      "Loading every agent and skill into Claude's context burns tokens before you've written a line of code. Most of it you'll never use.",
  },
  {
    icon: "🎯",
    title: "Generic Responses",
    description:
      "Without domain specialists, Claude gives shallow, one-size-fits-all answers. A backend architect and a security auditor think very differently.",
  },
  {
    icon: "🔁",
    title: "Repetitive Setup",
    description:
      "Rebuilding system prompts, copying skill instructions, and reconfiguring workflows from scratch every single project.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-[#52525b] text-sm font-medium uppercase tracking-widest mb-12">
          Sound familiar?
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="bg-[#111] border border-[#222] rounded-xl p-6 hover:border-[#333] transition-colors"
            >
              <div className="text-3xl mb-4">{pain.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-3">{pain.title}</h3>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
