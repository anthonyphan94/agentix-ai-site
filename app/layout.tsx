import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const shareTechMono = Share_Tech_Mono({ weight: "400", variable: "--font-share-tech-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentix-AI — Ship Faster with AI Specialist Agents for Claude Code",
  description: "73 plug-and-play AI agent modules for Claude Code. Stop losing clients to faster developers. Get specialist agents for Python, DevOps, security, AI/ML and more — $49 one-time.",
  keywords: ["claude code", "ai agents", "developer tools", "anthropic", "specialist agents", "freelance developer tools", "ai coding assistant", "claude code modules"],
  openGraph: {
    title: "Agentix-AI — Ship Faster with AI Specialist Agents",
    description: "73 plug-and-play AI agent modules for Claude Code. Stop losing clients to faster developers. $49 one-time.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentix-AI — Ship Faster with AI Specialist Agents",
    description: "73 plug-and-play AI agent modules for Claude Code. Stop losing clients to faster developers. $49 one-time.",
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
