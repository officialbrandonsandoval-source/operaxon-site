/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Governance Protocol — Operaxon",
  description: "The first open framework for business AI agent ownership, succession, certification, and memory escrow. Published February 26, 2026 by Operaxon.",
  openGraph: {
    title: "Agent Governance Protocol v1.0 — Operaxon",
    description: "Who owns the agent when the business is sold? The framework nobody built — until now.",
    url: "https://operaxon.com/governance",
    siteName: "Operaxon",
  },
};

export default function GovernancePage() {
  return (
    <main className="bg-[#080808] text-white min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-white font-bold text-lg tracking-tight">OPERA<span className="text-[#6366f1]">X</span>ON</a>
          <a href="/apply" className="bg-[#6366f1] hover:bg-[#5254cc] text-white text-sm font-medium px-4 py-2 rounded transition-colors">Apply for a Spot →</a>
        </div>
      </header>

      <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6366f1] border border-[#6366f1]/30 bg-[#6366f1]/10 rounded-full px-3 py-1">Open Standard</span>
            <span className="text-xs text-white/25">Published February 26, 2026</span>
            <span className="text-xs text-white/25">·</span>
            <span className="text-xs text-white/25">CC BY 4.0</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-8">
            Agent Governance
            <br />
            Protocol
            <br />
            <span className="text-white/25">v1.0</span>
          </h1>
          <p className="text-white/50 text-xl leading-relaxed max-w-2xl mb-6">
            The first open framework for business AI agent ownership, succession, certification, and memory custody. Built for the world that's coming — where agents don't just assist businesses, they operate them.
          </p>
          <p className="text-white/30 text-base leading-relaxed max-w-2xl">
            By Brandon Sandoval, Operaxon. This document establishes public prior art for the Agent Governance Protocol framework. All versions are published with timestamps.
          </p>
        </div>

        {/* The question */}
        <div className="border border-white/8 bg-[#0d0d0d] rounded-2xl p-10 mb-10">
          <h2 className="text-2xl font-bold mb-6">The problem nobody is asking about</h2>
          <p className="text-white/55 leading-relaxed mb-4">
            AI agents are beginning to operate businesses autonomously. They monitor competitors, manage communications, execute workflows, make operational decisions, and accumulate years of irreplaceable business context.
          </p>
          <p className="text-white/55 leading-relaxed mb-6">
            And yet — no legal framework exists to answer the most fundamental questions about them.
          </p>
          <div className="space-y-3">
            {[
              "Who owns the agent?",
              "What happens to it when the business is sold?",
              "Who is accountable when an autonomous agent makes a bad decision?",
              "How does an agent's accumulated memory transfer in an acquisition?",
              "What standards must an agent meet before an enterprise client can trust it?",
            ].map((q, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#6366f1] shrink-0 mt-0.5">?</span>
                <span className="text-white font-medium">{q}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-white/5 mt-8 pt-8">
            <p className="text-white/40 text-sm leading-relaxed">
              These are not hypothetical. They are questions that will define the next decade of business law, insurance, and enterprise technology adoption. The organizations that have frameworks in place before the urgency arrives will define the standards. Everyone else will comply with them.
            </p>
          </div>
        </div>

        {/* The four pillars */}
        <h2 className="text-3xl font-bold mb-8">The Four Pillars</h2>

        {[
          {
            number: "01",
            name: "Agent Deed of Trust",
            color: "#6366f1",
            tagline: "Identity + Ownership",
            description: "A formal document establishing the identity, ownership, operational scope, and principal hierarchy of a business AI agent. Executed before deployment. The legal foundation every agent needs.",
            covers: [
              "Agent identity — name, model, deployment date, version",
              "Principal hierarchy — who the agent serves and in what order",
              "Operational scope — autonomous actions vs. approval-required",
              "Data custody — where memory lives and who controls access",
              "Liability assignment — who is accountable for in-scope decisions",
              "Override protocols — who can pause or terminate the agent",
            ],
          },
          {
            number: "02",
            name: "Agent Succession Protocol",
            color: "#10b981",
            tagline: "Transfer + Continuity",
            description: "A structured process for the transfer, continuity, or termination of a business AI agent when the operating entity changes — through sale, acquisition, death, dissolution, or retirement.",
            covers: [
              "Business sale — what transfers with the business, what stays",
              "Founder death — succession rights and emergency access",
              "Acquisition — due diligence framework for agent assets",
              "Memory portability — encrypted export in vendor-neutral format",
              "Identity continuity — whether the agent's mission carries over",
              "Data retention — previous operator rights post-transfer",
            ],
          },
          {
            number: "03",
            name: "Agent Certification Standard",
            color: "#f59e0b",
            tagline: "Compliance + Trust",
            description: "A three-level certification framework that verifiable confirms a business AI agent meets minimum standards for safety, accountability, and operational reliability.",
            covers: [
              "Level 1 Operational — principal hierarchy, human override, audit log",
              "Level 2 Trusted — encrypted memory, defined scope, annual audit",
              "Level 3 Enterprise — succession tested, insured, SLA-backed",
              "Third-party audit requirements for each level",
              "Renewal and revocation processes",
              "Public certification registry",
            ],
          },
          {
            number: "04",
            name: "Agent Memory Escrow",
            color: "#8b5cf6",
            tagline: "Custody + Portability",
            description: "A secure custodial service for business AI agent memory — ensuring years of accumulated business intelligence is preserved, portable, and protected regardless of vendor relationship.",
            covers: [
              "Encrypted weekly backups in vendor-neutral format",
              "Client-held encryption keys — vendor cannot access without authorization",
              "Export capability to any compliant agent runtime",
              "Chain of custody documentation for legal purposes",
              "30-day export window upon relationship termination",
              "Independent custody independent of deployment vendor",
            ],
          },
        ].map((pillar) => (
          <div key={pillar.number} className="border border-white/8 bg-[#0d0d0d] rounded-2xl p-8 mb-5">
            <div className="flex items-start gap-5 mb-6">
              <div className="text-5xl font-bold shrink-0" style={{ color: `${pillar.color}25` }}>{pillar.number}</div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: pillar.color }}>{pillar.tagline}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{pillar.name}</h3>
                <p className="text-white/45 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-2 pl-0 md:pl-16">
              {pillar.covers.map((item, i) => (
                <div key={i} className="flex gap-2 items-start text-white/40 text-sm">
                  <span className="shrink-0 mt-0.5" style={{ color: pillar.color }}>·</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* The stack diagram */}
        <div className="border border-white/5 bg-[#0d0d0d] rounded-2xl p-10 mb-10">
          <h2 className="text-2xl font-bold mb-8">The Governance Stack</h2>
          <div className="space-y-1 font-mono text-sm max-w-lg">
            {[
              { label: "HUMAN OPERATOR", sub: "Principal — always in control", color: "#10b981", top: true },
              { label: "Agent Deed of Trust", sub: "Identity + Ownership", color: "#6366f1" },
              { label: "Agent Certification", sub: "Compliance + Verification", color: "#f59e0b" },
              { label: "Agent Memory Escrow", sub: "Custody + Portability", color: "#8b5cf6" },
              { label: "Agent Succession Protocol", sub: "Transfer + Continuity", color: "#10b981" },
              { label: "AUTONOMOUS AGENT", sub: "Operator — always accountable", color: "#6366f1", bottom: true },
            ].map((row, i) => (
              <div key={i} className="border border-white/8 rounded-lg px-5 py-3 flex justify-between items-center">
                <span className="font-bold" style={{ color: row.color }}>{row.label}</span>
                <span className="text-white/25 text-xs">{row.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why now */}
        <div className="border border-[#6366f1]/20 bg-[#6366f1]/5 rounded-2xl p-10 mb-10">
          <h2 className="text-2xl font-bold mb-4">Why now</h2>
          <p className="text-white/55 leading-relaxed mb-4">
            Anthropic's acquisition of Vercept (February 25, 2026) signals that AI agents will soon be capable of operating any computer software autonomously — not just tools with APIs, but any application a human can use. When that capability lands in production, the volume and consequence of autonomous agent actions increases by an order of magnitude.
          </p>
          <p className="text-white/55 leading-relaxed mb-4">
            The governance questions above shift from theoretical to urgent within 12–18 months.
          </p>
          <p className="text-white font-semibold">
            The organizations with frameworks in place before the urgency arrives will define the standards. Everyone else will comply with them.
          </p>
        </div>

        {/* Open standard */}
        <div className="border border-white/8 bg-[#0d0d0d] rounded-2xl p-10 mb-16">
          <h2 className="text-2xl font-bold mb-4">Open Standard</h2>
          <p className="text-white/50 leading-relaxed mb-6">
            This framework is published under Creative Commons Attribution 4.0. Any organization may implement, extend, or build upon it — with attribution. The goal is a standard the industry adopts, not a product we lock behind a paywall.
          </p>
          <div className="space-y-3">
            {[
              { label: "GitHub", value: "github.com/operaxon/agent-governance-protocol", note: "Canonical reference + version history" },
              { label: "Certification", value: "brandon@operaxon.com", note: "Certification inquiries and implementation support" },
              { label: "License", value: "CC BY 4.0", note: "Free to use with attribution" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 text-sm border-b border-white/5 pb-3">
                <span className="text-white/30 w-24 shrink-0">{item.label}</span>
                <span className="text-[#6366f1]">{item.value}</span>
                <span className="text-white/20 hidden md:block">{item.note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Deploy your first governed agent</h2>
          <p className="text-white/40 mb-8 max-w-lg mx-auto">
            Every Operaxon deployment operates under this framework from day one. Your agent has an identity, a mission, a principal hierarchy, and a governance structure before it runs its first workflow.
          </p>
          <a href="/apply" className="inline-block bg-[#6366f1] hover:bg-[#5254cc] text-white px-10 py-4 rounded-xl font-semibold text-lg transition-colors">
            Apply for a Spot →
          </a>
          <p className="text-white/20 text-sm mt-4">operaxon.com · Operaxon · Published Feb 26, 2026</p>
        </div>
      </div>

      <footer className="border-t border-white/5 py-10 px-6 text-center text-white/20 text-sm">
        <p>Operaxon · <a href="/" className="hover:text-white/40 transition-colors">Home</a> · <a href="/workflows" className="hover:text-white/40 transition-colors">Workflows</a> · <a href="/apply" className="hover:text-white/40 transition-colors">Apply</a> · brandon@operaxon.com</p>
        <p className="mt-2">Agent Governance Protocol v1.0 · CC BY 4.0 · Brandon Sandoval, 2026</p>
      </footer>
    </main>
  );
}
