import { GUMROAD_URL } from "@/lib/modules";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-white font-semibold text-lg mb-1">
            Agentix<span className="text-[#00ff41]">-AI</span>
          </div>
          <p className="text-[#52525b] text-sm">Specialist Agents for Claude Code</p>
        </div>

        <div className="flex items-center gap-8 text-sm text-[#52525b]">
          <a href={GUMROAD_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Buy — $49
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://docs.anthropic.com/en/docs/claude-code" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Claude Code Docs
          </a>
        </div>

        <p className="text-[#52525b] text-xs">
          © {new Date().getFullYear()} Agentix-AI. MIT License.
        </p>
      </div>
    </footer>
  );
}
