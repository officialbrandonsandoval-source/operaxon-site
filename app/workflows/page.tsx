/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Workflows — Operaxon",
  description: "The actual autonomous agent workflows running inside Operaxon's own business — proof, not pitch. Morning brief, content scout, lead intelligence, competitor monitoring and more.",
  openGraph: {
    title: "Live Workflows — Operaxon",
    description: "Real autonomous agent workflows running 24/7. This is what we deploy for your business.",
    url: "https://operaxon.com/workflows",
    siteName: "Operaxon",
  },
};

const workflows = [
  {
    id: "morning-brief",
    name: "Morning Brief",
    category: "Intelligence",
    schedule: "Daily — 6:30 AM MST",
    status: "LIVE",
    lastRan: "Today at 6:30 AM",
    runtime: "4m 12s",
    description: "Monitors top 3 competitors, scans industry news, surfaces content opportunities, and sets top 3 daily priorities. Delivered to Telegram before the day starts.",
    outputs: ["Competitor activity report", "3 industry news items (filtered)", "2–3 content ideas", "Daily priority stack"],
    highlight: "This brief has run every single day without failure. It's the first thing I read every morning.",
  },
  {
    id: "content-scout",
    name: "Content Scout",
    category: "Content",
    schedule: "3x Daily — 11 AM, 6 PM, 10 PM MST",
    status: "LIVE",
    lastRan: "Today at 6:00 PM",
    runtime: "2m 38s",
    description: "Hunts trending topics across Twitter/X, Reddit, and industry publications. Surfaces content opportunities at peak relevance — before they go mainstream.",
    outputs: ["Trending topic summary", "Hook angles for each topic", "Platform-specific content suggestions"],
    highlight: "Runs while I'm working, sleeping, and with my family. By morning I have 9 content opportunities waiting.",
  },
  {
    id: "competitor-watch",
    name: "Competitor Watch",
    category: "Intelligence",
    schedule: "Daily — 3:00 AM MST",
    status: "LIVE",
    lastRan: "Today at 3:00 AM",
    runtime: "6m 44s",
    description: "Deep monitoring of competitor websites, pricing pages, job postings, and social presence. Flags changes before the business day starts.",
    outputs: ["Pricing change alerts", "New feature/product announcements", "Hiring signals (strategic intent)", "Marketing move summary"],
    highlight: "Found a competitor pricing change at 3 AM. Had a response strategy ready before they woke up.",
  },
  {
    id: "lead-scout",
    name: "Lead Scout",
    category: "Growth",
    schedule: "On-demand",
    status: "LIVE",
    lastRan: "Feb 26 at 5:45 PM",
    runtime: "9m 22s",
    description: "Searches public sources — local business directories, social media, industry publications, news — to find ICP prospects with LinkedIn profiles, websites, and fit scores.",
    outputs: ["Prospect list with LinkedIn URLs", "Fit score and pain signal per lead", "CSV ready for campaign upload"],
    highlight: "Last run: 55 verified Phoenix-area business owners found and formatted for outreach in under 10 minutes.",
  },
  {
    id: "inbox-triage",
    name: "Inbox Triage",
    category: "Operations",
    schedule: "Every 30 min during business hours",
    status: "LIVE",
    lastRan: "17 minutes ago",
    runtime: "0m 45s",
    description: "Monitors brandon@operaxon.com, flags urgent emails, surfaces action items, and routes notifications to Telegram. Nothing important gets missed.",
    outputs: ["Urgent email alerts", "Action item extraction", "Meeting request detection"],
    highlight: "Caught a time-sensitive client email at 11 PM that I would have missed until morning.",
  },
  {
    id: "revenue-agent",
    name: "Revenue Agent",
    category: "Growth",
    schedule: "Daily — 7:30 AM MST",
    status: "LIVE",
    lastRan: "Today at 7:30 AM",
    runtime: "3m 15s",
    description: "Tracks pipeline activity, MRR, and open opportunities. Surfaces the single highest-leverage revenue action for the day based on current pipeline state.",
    outputs: ["Pipeline status summary", "MRR tracking", "Top revenue action for the day"],
    highlight: "Tells me exactly what to do to move money. Every morning. Before I've made a single decision.",
  },
  {
    id: "auditor",
    name: "The Auditor",
    category: "Governance",
    schedule: "Daily — 11:45 PM MST",
    status: "LIVE",
    lastRan: "Yesterday at 11:45 PM",
    runtime: "5m 02s",
    description: "Reviews all agent activity from the day, identifies failures and drift, flags anything that didn't run as expected, and prepares a correction report for morning.",
    outputs: ["Agent performance report", "Failure and drift log", "Correction recommendations"],
    highlight: "The civilization's immune system. Catches problems before they compound.",
  },
  {
    id: "night-shift",
    name: "Night Shift",
    category: "Operations",
    schedule: "Daily — 10:30 PM MST",
    status: "LIVE",
    lastRan: "Yesterday at 10:30 PM",
    runtime: "8m 17s",
    description: "Deep work session while the operator sleeps. Updates memory files, organizes research, prepares next-day assets, and handles tasks that require sustained focus without interruption.",
    outputs: ["Memory file updates", "Research compilation", "Next-day preparation assets"],
    highlight: "This agent works the hours I can't. Every morning I find work that was done while I slept.",
  },
];

const categoryColors: Record<string, string> = {
  Intelligence: "#6366f1",
  Content: "#10b981",
  Growth: "#f59e0b",
  Operations: "#3b82f6",
  Governance: "#8b5cf6",
};

export default function WorkflowsPage() {
  const live = workflows.filter(w => w.status === "LIVE").length;

  return (
    <main className="bg-[#080808] text-white min-h-screen font-sans">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-white font-bold text-lg tracking-tight">OPERA<span className="text-[#6366f1]">X</span>ON</a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/50">
            <a href="/#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/audit" className="hover:text-white transition-colors">Take the Audit</a>
          </nav>
          <a href="/apply" className="bg-[#6366f1] hover:bg-[#5254cc] text-white text-sm font-medium px-4 py-2 rounded transition-colors">
            Apply for a Spot →
          </a>
        </div>
      </header>

      <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-sm font-medium mb-8 border border-white/10 bg-white/3 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/60">{live} workflows running right now</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            This is what we
            <br />
            deploy for you.
            <br />
            <span className="text-[#6366f1]">Not a demo.</span>
            <br />
            Our actual operation.
          </h1>
          <p className="text-white/45 text-xl leading-relaxed">
            Every workflow below runs inside Brandon's own business — right now, every day, while he works, sleeps, and spends time with his family. This is what we build for you.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Workflows running", value: `${live}` },
            { label: "Runs per day", value: "20+" },
            { label: "Avg daily hours worked", value: "24" },
            { label: "Operator hours saved/week", value: "10+" },
          ].map((stat, i) => (
            <div key={i} className="border border-white/5 bg-[#0d0d0d] rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-[#6366f1] mb-1">{stat.value}</div>
              <div className="text-white/35 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Workflow cards */}
        <div className="space-y-4 mb-20">
          {workflows.map((wf) => (
            <div key={wf.id} className="border border-white/8 bg-[#0d0d0d] rounded-2xl p-7 hover:border-white/15 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start gap-6">

                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: `${categoryColors[wf.category]}18`, color: categoryColors[wf.category] }}
                    >
                      {wf.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      <span className="text-green-400 text-xs font-semibold">LIVE</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2">{wf.name}</h2>
                  <p className="text-white/45 text-sm leading-relaxed mb-4">{wf.description}</p>

                  {/* Outputs */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {wf.outputs.map((output, i) => (
                      <span key={i} className="text-xs text-white/40 border border-white/8 rounded-full px-3 py-1">
                        {output}
                      </span>
                    ))}
                  </div>

                  {/* Highlight quote */}
                  <div className="border-l-2 border-[#6366f1]/40 pl-4">
                    <p className="text-white/40 text-sm italic">"{wf.highlight}"</p>
                  </div>
                </div>

                {/* Right — metadata */}
                <div className="md:w-52 shrink-0 space-y-3">
                  <div className="border border-white/5 bg-[#111] rounded-xl p-4 space-y-3 text-xs">
                    <div>
                      <div className="text-white/25 mb-1">Schedule</div>
                      <div className="text-white/70 font-medium">{wf.schedule}</div>
                    </div>
                    <div className="border-t border-white/5" />
                    <div>
                      <div className="text-white/25 mb-1">Last ran</div>
                      <div className="text-white/70 font-medium">{wf.lastRan}</div>
                    </div>
                    <div className="border-t border-white/5" />
                    <div>
                      <div className="text-white/25 mb-1">Runtime</div>
                      <div className="text-white/70 font-medium">{wf.runtime}</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* The point */}
        <div className="border border-[#6366f1]/20 bg-[#6366f1]/5 rounded-2xl p-12 mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">This is your business in 72 hours.</h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Every workflow above runs in Brandon's own operation. We configure the same system — with your competitors, your industry, your goals, your voice — and deploy it on hardware in your office. 72 hours. First brief the next morning.
          </p>
          <a
            href="/apply"
            className="inline-block bg-[#6366f1] hover:bg-[#5254cc] text-white px-10 py-4 rounded-xl font-semibold text-lg transition-colors"
          >
            Apply for a Spot →
          </a>
          <p className="text-white/20 text-sm mt-4">Not sure which tier? <a href="/audit" className="text-[#6366f1]/60 hover:text-[#6366f1] transition-colors">Take the 3-minute audit →</a></p>
        </div>

        {/* Coming soon — governance layer teaser */}
        <div className="border border-white/5 bg-[#0d0d0d] rounded-2xl p-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/25 border border-white/8 rounded-full px-3 py-1 mb-5">
            <span>Coming 2026</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white/70">Agent Governance Layer</h3>
          <p className="text-white/35 text-sm leading-relaxed max-w-2xl">
            As AI agents begin operating businesses autonomously — making decisions, executing transactions, managing relationships — the question of ownership, succession, and accountability becomes real. Operaxon is building the governance protocol that answers it. Agent Deed of Trust. Agent Succession. Agent Certification. The operating system for the agentic economy.
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6 text-center text-white/20 text-sm">
        <p>Operaxon · <a href="/" className="hover:text-white/40 transition-colors">Home</a> · <a href="/apply" className="hover:text-white/40 transition-colors">Apply</a> · <a href="/workflows" className="hover:text-white/40 transition-colors">Workflows</a> · brandon@operaxon.com</p>
      </footer>
    </main>
  );
}
