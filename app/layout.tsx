import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const shareTechMono = Share_Tech_Mono({ weight: "400", variable: "--font-share-tech-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentix-AI — Specialist Agents for Claude Code",
  description: "73 domain-specialist modules for Claude Code. Install only what you need. Agents, skills, and orchestration workflows for AI-powered development.",
  keywords: ["claude code", "ai agents", "developer tools", "anthropic", "specialist agents"],
  openGraph: {
    title: "Agentix-AI — Specialist Agents for Claude Code",
    description: "73 domain-specialist modules for Claude Code. Install only what you need.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentix-AI — Specialist Agents for Claude Code",
    description: "73 domain-specialist modules for Claude Code. Install only what you need.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${shareTechMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
