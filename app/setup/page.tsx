import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup Guide — Agentix-AI",
  description: "Get started with Agentix-AI in under 5 minutes. Step-by-step setup instructions after purchase.",
};

const steps = [
  {
    number: "01",
    title: "Accept your GitHub invitation",
    description:
      "After purchase, you\u2019ll receive a GitHub organization invite from agentix-ai-org. Check your email and click the link to accept, or visit:",
    code: null,
    link: {
      text: "Accept invitation \u2192",
      href: "https://github.com/orgs/agentix-ai-org/invitation",
    },
  },
  {
    number: "02",
    title: "Create a personal access token",
    description:
      "You need a GitHub token so the CLI can download modules from the private repo. Go to the link below, or navigate manually: GitHub \u2192 Settings \u2192 Developer settings (bottom of sidebar) \u2192 Personal access tokens \u2192 Fine-grained tokens.",
    bullets: [
      "Click Generate new token",
      "Resource owner: agentix-ai-org",
      "Repository access: Only select repositories \u2192 agentix-ai",
      "Permissions: Contents \u2192 Read-only",
      "Click Generate token and copy it immediately \u2014 GitHub only shows it once",
    ],
    code: null,
    link: {
      text: "Create token \u2192",
      href: "https://github.com/settings/tokens?type=beta",
    },
  },
  {
    number: "03",
    title: "Install the CLI",
    description: "Install Agentix-AI globally via npm:",
    code: "npm install -g agentix-ai",
    note: "On Linux/Mac, you may need: sudo npm install -g agentix-ai",
  },
  {
    number: "04",
    title: "Authenticate",
    description: "Log in with the token you created in step 2. Run the command below, then paste your token when prompted:",
    code: "agentix-ai auth login",
    note: "You can also pass it directly: agentix-ai auth login YOUR_TOKEN_HERE \u2014 your token is saved locally at ~/.agentix-ai/config.json",
  },
  {
    number: "05",
    title: "Install your modules",
    description: "Browse available modules and install what you need:",
    code: "agentix-ai list\nagentix-ai install python_development\nagentix-ai install backend_development",
    note: "Or install everything at once: agentix-ai install --all",
  },
  {
    number: "06",
    title: "Start building",
    description:
      "Open Claude Code in any project. Your installed specialists are automatically loaded and ready to use.",
    code: "claude",
  },
];

export default function SetupPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="mx-auto max-w-2xl px-6 py-20">
        <div className="mb-16">
          <a href="/" className="text-[#52525b] text-sm hover:text-[#a1a1aa] transition-colors">
            &larr; Back to home
          </a>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">
            Setup Guide
          </h1>
          <p className="text-[#a1a1aa] text-lg">
            Get up and running in under 5 minutes. Follow these steps after your purchase.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="relative pl-12">
              <div className="absolute left-0 top-0 text-[#00ff41] font-mono text-sm font-bold">
                {step.number}
              </div>
              <h2 className="text-white font-semibold text-xl mb-3">
                {step.title}
              </h2>
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-4">
                {step.description}
              </p>

              {"bullets" in step && step.bullets && (
                <ul className="space-y-2 mb-4">
                  {step.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#a1a1aa]">
                      <span className="text-[#00ff41] mt-0.5 flex-shrink-0">&#10003;</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {step.code && (
                <div className="bg-[#0d0d0d] border border-[#222] rounded-lg px-4 py-3 font-mono text-sm text-[#a1a1aa] mb-3">
                  {step.code.split("\n").map((line, i) => (
                    <div key={i}>
                      <span className="text-[#00ff41]">$ </span>
                      {line}
                    </div>
                  ))}
                </div>
              )}

              {"note" in step && step.note && (
                <p className="text-[#52525b] text-xs">{step.note}</p>
              )}

              {"link" in step && step.link && (
                <a
                  href={step.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#00ff41] text-sm font-medium hover:underline mt-1"
                >
                  {step.link.text}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#222]">
          <h3 className="text-white font-semibold mb-3">Need help?</h3>
          <p className="text-[#a1a1aa] text-sm">
            If you run into any issues, email us at{" "}
            <a href="mailto:support@agentix-ai.com" className="text-[#00ff41] hover:underline">
              support@agentix-ai.com
            </a>{" "}
            and we&apos;ll get you sorted.
          </p>
        </div>
      </div>
    </main>
  );
}
