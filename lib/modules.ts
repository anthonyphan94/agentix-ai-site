export const GUMROAD_URL = "https://YOUR_GUMROAD_URL"; // Replace with your Gumroad link

export const featuredModules = [
  {
    name: "agent_teams",
    category: "workflows",
    description: "Coordinate parallel agent squads for concurrent code review, evidence-based debugging, and coordinated feature delivery.",
  },
  {
    name: "conductor",
    category: "workflows",
    description: "Context-first development pipeline that converts Claude Code into a structured project orchestration system.",
  },
  {
    name: "full_stack_orchestration",
    category: "workflows",
    description: "Complete feature lifecycle coordination — backend, database, frontend, testing, security, and deployment in sequence.",
  },
  {
    name: "python_development",
    category: "languages",
    description: "Python 3.12+ specialists with Django, FastAPI, async patterns, testing, and UV package manager skills.",
  },
  {
    name: "backend_development",
    category: "development",
    description: "Server-side API construction, GraphQL schema design, Temporal workflow coordination, and test-first backend engineering.",
  },
  {
    name: "security_scanning",
    category: "security",
    description: "Static application security testing, package vulnerability auditing, and OWASP compliance checking.",
  },
  {
    name: "kubernetes_operations",
    category: "infrastructure",
    description: "K8s manifest generation, Helm chart scaffolding, GitOps pipelines, and security policy enforcement.",
  },
  {
    name: "llm_application_dev",
    category: "ai-ml",
    description: "LangGraph orchestration, prompt engineering, RAG pipelines, evaluation frameworks, and vector search patterns.",
  },
];

export const stats = [
  { value: "73", label: "Modules" },
  { value: "100+", label: "AI Specialists" },
  { value: "146+", label: "Skills" },
  { value: "91", label: "Workflows" },
];

export const categoryColors: Record<string, string> = {
  workflows: "bg-[#00ff41]/10 text-[#00ff41] border-[#00ff41]/20",
  languages: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  development: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  security: "bg-red-500/10 text-red-400 border-red-500/20",
  infrastructure: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "ai-ml": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  documentation: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  quality: "bg-teal-500/10 text-teal-400 border-teal-500/20",
};
