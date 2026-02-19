const useCases = [
  {
    who: "Freelancer building a SaaS MVP",
    icon: "💼",
    scenario:
      "A client on Upwork wants a full-stack app with auth, Stripe payments, and a REST API. Deadline: 2 weeks.",
    without:
      "You spend Day 1–3 setting up boilerplate, researching Stripe docs, writing auth middleware from scratch. By day 5, you're debugging CORS issues. The client is already asking for progress updates.",
    with: [
      { module: "api_scaffolding", result: "Generates the entire REST API structure in minutes" },
      { module: "payment_processing", result: "Stripe integration with checkout, webhooks, and error handling" },
      { module: "backend_api_security", result: "Auth middleware, rate limiting, and input validation — production-ready" },
      { module: "deployment_strategies", result: "Docker + CI/CD pipeline ready for deploy" },
    ],
    outcome: "MVP shipped in 5 days instead of 14. Client leaves a 5-star review. You raise your rate.",
  },
  {
    who: "Agency handling 4 client projects",
    icon: "🏢",
    scenario:
      "Your 3-person team is juggling a React dashboard, a Django backend, a mobile app, and a WordPress migration — all at once.",
    without:
      "Seniors spend half the day reviewing junior PRs for security holes and anti-patterns. One junior pushed an SQL injection vulnerability. You're scrambling to fix it before the client notices.",
    with: [
      { module: "code_review_ai", result: "AI-powered first-pass reviews catch issues before seniors even look" },
      { module: "security_scanning", result: "Auto-detects SQL injection, XSS, and OWASP Top 10 vulnerabilities" },
      { module: "python_development", result: "Django Pro agent enforces best practices in every PR" },
      { module: "frontend_mobile_development", result: "React component scaffolding follows your agency's patterns" },
    ],
    outcome: "Seniors review findings instead of raw code. Team ships 2x faster. Zero security incidents.",
  },
  {
    who: "Solo founder building a product",
    icon: "🚀",
    scenario:
      "You're building a data analytics platform alone. You need a Python backend, React frontend, PostgreSQL, Kubernetes deployment, and monitoring — all by yourself.",
    without:
      "You're Googling 'kubernetes helm chart tutorial' at 2am. Your database queries are slow but you don't know why. You skipped writing tests because there's no time. Technical debt is piling up.",
    with: [
      { module: "kubernetes_operations", result: "Helm charts, RBAC policies, and manifests generated correctly the first time" },
      { module: "database_design", result: "PostgreSQL query optimization — your slow queries now run in milliseconds" },
      { module: "tdd_workflows", result: "Tests generated alongside your code, not as an afterthought" },
      { module: "observability_monitoring", result: "Logging, metrics, and alerts set up before your first user" },
    ],
    outcome: "Ship a production-grade product as a one-person team. No corners cut.",
  },
  {
    who: "Junior developer on first client project",
    icon: "🎓",
    scenario:
      "You just got hired for a freelance gig building a Node.js API with a CI/CD pipeline. You've never set up a deployment pipeline before.",
    without:
      "You spend 2 days watching YouTube tutorials on GitHub Actions. Your pipeline fails 12 times before it works. The client asks why the API doesn't have input validation. You didn't know it needed any.",
    with: [
      { module: "cicd_automation", result: "Working GitHub Actions pipeline generated in one command" },
      { module: "javascript_typescript", result: "TypeScript scaffolding with proper project structure from the start" },
      { module: "backend_api_security", result: "Input validation and auth patterns — you didn't have to research them" },
      { module: "comprehensive_review", result: "AI reviews your code and teaches you what to improve" },
    ],
    outcome: "You ship like a senior. The client has no idea you graduated 3 months ago.",
  },
];

export default function UseCases() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real scenarios. Real results.
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto">
            These aren&apos;t hypotheticals. These are the exact situations where Agentix-AI
            pays for itself in the first project.
          </p>
        </div>
        <div className="space-y-8">
          {useCases.map((uc) => (
            <div
              key={uc.who}
              className="bg-[#111] border border-[#222] rounded-xl overflow-hidden hover:border-[#333] transition-colors"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-[#1a1a1a] flex items-center gap-3">
                <span className="text-2xl">{uc.icon}</span>
                <div>
                  <h3 className="text-white font-semibold text-lg">{uc.who}</h3>
                  <p className="text-[#71717a] text-sm">{uc.scenario}</p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                {/* Without */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                    <span className="text-red-400 text-xs font-semibold uppercase tracking-wider">
                      Without Agentix-AI
                    </span>
                  </div>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed pl-4">
                    {uc.without}
                  </p>
                </div>

                {/* With */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#00ff41] flex-shrink-0" />
                    <span className="text-[#00ff41] text-xs font-semibold uppercase tracking-wider">
                      With Agentix-AI
                    </span>
                  </div>
                  <div className="space-y-2 pl-4">
                    {uc.with.map((item) => (
                      <div key={item.module} className="flex items-start gap-3 text-sm">
                        <code className="text-[#00ff41] bg-[#0a0a0a] border border-[#222] rounded px-1.5 py-0.5 text-xs flex-shrink-0 mt-0.5 font-mono">
                          {item.module}
                        </code>
                        <span className="text-[#a1a1aa]">{item.result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="pt-4 border-t border-[#1a1a1a]">
                  <p className="text-white text-sm font-medium">
                    <span className="text-[#00ff41]">→</span> {uc.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
