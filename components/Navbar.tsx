"use client";
import Link from "next/link";
import { GUMROAD_URL } from "@/lib/modules";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#222] bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-white font-semibold text-lg tracking-tight">
          Agentix<span className="text-[#00ff41]">-AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-[#a1a1aa]">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#modules" className="hover:text-white transition-colors">Modules</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <a
          href={GUMROAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00ff41] hover:bg-[#00cc33] text-black text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Get Your Edge — $49
        </a>
      </div>
    </nav>
  );
}
