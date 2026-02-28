/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent for Small Business — Operaxon",
  description: "Deploy an autonomous AI agent that monitors your competitors, delivers daily intelligence briefs, and runs your business operations 24/7. No tech team required. Live in 72 hours.",
  openGraph: {
    title: "AI Agent for Small Business — Operaxon",
    description: "Deploy an autonomous AI agent that monitors your competitors, delivers daily intelligence briefs, and runs your business operations 24/7.",
    url: "https://operaxon.com/ai-agent-for-small-business",
    siteName: "Operaxon",
  },
};

export default function AIAgentSmallBusiness() {
  return (
    <main className="bg-[#080808] text-white min-h-screen font-sans">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-white font-bold text-lg tracking-tight">OPERA<span className="text-[#6366f1]">X</span>ON</a>
          <a href="/apply" className="bg-[#6366f1] hover:bg-[#5254cc] text-white text-sm font-medium px-4 py-2 rounded transition-colors">
            Apply for a Spot →
          </a>
        </div>
      </header>

      <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">

        {/* Hero */}
        <div className="mb-20">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-6">AI Agent for Small Business</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-8">
            You don't need a tech team.
            <br />
            <span className="text-[#6366f1]">You need an agent</span>
            <br />
            that already knows
            <br />
            how to run a business.
          </h1>
          <p className="text-white/50 text-xl leading-relaxed max-w-2xl">
            Every morning at 7 AM, your competitors are already moving. Your agent has already been watching them all night — and the brief is waiting on your phone before your coffee finishes brewing.
          </p>
        </div>

        {/* The problem */}
        <div className="border border-white/5 bg-[#0d0d0d] rounded-2xl p-10 mb-10">
          <h2 className="text-2xl font-bold mb-6">The real problem isn't that you don't have time.</h2>
          <p className="text-white/55 text-lg leading-relaxed mb-6">
            It's that you're spending your limited time on the wrong category of work. Monitoring. Researching. Staying informed. Tracking competitors. Deciding what to post. Building your priority list.
          </p>
          <p className="text-white/55 text-lg leading-relaxed mb-6">
            None of that is building. All of it is necessary. And it's eating 8-12 hours of your week before you've done a single hour of actual work.
          </p>
          <p className="text-white font-semibold text-lg">
            That entire category of work can be automated. Not with a chatbot. With an operating intelligence.
          </p>
        </div>

        {/* What it does */}
        <h2 className="text-3xl font-bold mb-8">Here's what your agent does every single day</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {[
            {
              icon: "🌅",
              title: "Morning Brief — 7 AM, Telegram",
              body: "Before you open your laptop: competitor moves, industry news, content opportunities, and your top 3 priorities — delivered to your phone. 5 minutes to read. Then you start your day already ahead."
            },
            {
              icon: "🔍",
              title: "Competitor Monitoring",
              body: "Your agent watches your competitors' websites, pricing, job postings, and marketing — every day. When something changes, it flags it. You find out the same morning instead of three weeks later."
            },
            {
              icon: "📰",
              title: "Industry Intelligence",
              body: "The news and signals that matter to your business — filtered from the noise. Your agent reads it, summarizes what's relevant, and buries the rest. No doom-scrolling required."
            },
            {
              icon: "✍️",
              title: "Content Drafts",
              body: "Three content ideas per week, drafted and ready to review. Based on what's trending in your niche, what your competitors are doing, and what your audience responds to."
            },
            {
              icon: "🧠",
              title: "Persistent Memory",
              body: "You tell it something once — your goals, your context, your competitors — and it knows forever. It never asks twice. It builds on what it knows about you every single week."
            },
            {
              icon: "🔒",
              title: "Your Hardware, Your Data",
              body: "Everything runs on a Mac mini in your office. Your data never touches a cloud you don't control. No shared servers. No subscription that owns your business intelligence."
            },
          ].map((item, i) => (
            <div key={i} className="border border-white/8 bg-[#0d0d0d] rounded-xl p-6">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Who this is for */}
        <div className="border border-[#6366f1]/20 bg-[#6366f1]/5 rounded-2xl p-10 mb-16">
          <h2 className="text-2xl font-bold mb-6">This was built for operators who are doing everything themselves</h2>
          <div className="space-y-3 text-white/60">
            {[
              "You're running a real business with real revenue — but you're still wearing every hat",
              "You've tried ChatGPT and a dozen other tools — they help with tasks but don't change how you operate",
              "You know AI should be doing more for you — you just haven't found the thing that actually runs",
              "You don't want to hire a tech team, learn to code, or spend 6 months configuring something yourself",
              "You want leverage — the kind that compounds every week without requiring your attention",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[#6366f1] mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <h2 className="text-3xl font-bold mb-8">How it works</h2>
        <div className="space-y-4 mb-16">
          {[
            { step: "01", title: "You apply", body: "Fill out the form. Tell us about your business, your competitors, and what a good morning brief looks like for you." },
            { step: "02", title: "We build your agent", body: "In 72 hours, your agent is configured with your business context, memory architecture, competitors, and delivery preferences. Named. Ready." },
            { step: "03", title: "You wake up to a brief", body: "First morning: your agent's first brief hits your phone. Competitors checked. Intel gathered. Priorities set. You read it in 5 minutes." },
            { step: "04", title: "It compounds", body: "Every week it gets sharper. Every conversation adds context. Every correction makes it more accurate. This isn't a tool you use — it's an operator that learns." },
          ].map((item, i) => (
            <div key={i} className="flex gap-6 border border-white/5 bg-[#0d0d0d] rounded-xl p-6">
              <div className="text-4xl font-bold text-[#6366f1]/30 shrink-0 w-10">{item.step}</div>
              <div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing preview */}
        <div className="border border-white/10 bg-[#0d0d0d] rounded-2xl p-10 mb-16">
          <h2 className="text-2xl font-bold mb-2">Transparent pricing</h2>
          <p className="text-white/40 mb-8">Hardware at Apple cost. Real money is in the monthly service.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { tier: "Solo Operator", device: "Mac mini M4 — $599", setup: "$997 setup", monthly: "$997/mo", note: "1 agent, local models + API" },
              { tier: "Solo Operator", device: "Mac mini M4 Pro — $799", setup: "$997 setup", monthly: "$997/mo", note: "Up to 3 agents, full cron suite", popular: true },
              { tier: "Business OS", device: "Mac Studio M4 Max — $2,499", setup: "$1,997 setup", monthly: "$1,997/mo", note: "5+ agents, full civilization" },
            ].map((t, i) => (
              <div key={i} className={`rounded-xl p-5 border ${t.popular ? "border-[#6366f1] bg-[#6366f1]/5" : "border-white/5"}`}>
                <div className="font-bold text-sm mb-1">{t.tier}</div>
                <div className="text-2xl font-bold text-[#6366f1] mb-1">{t.monthly}</div>
                <div className="text-white/30 text-xs mb-1">{t.setup}</div>
                <div className="text-white/20 text-xs mb-3">{t.device}</div>
                <div className="text-white/40 text-xs">{t.note}</div>
              </div>
            ))}
          </div>
          <p className="text-white/25 text-xs mt-6">Own a Mac already? Same monthly, skip the device fee. Month-to-month, no contracts.</p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to stop doing this manually?</h2>
          <p className="text-white/40 mb-8 max-w-lg mx-auto">72 hours from now, your agent is live. First brief fires the next morning. You never touched a terminal.</p>
          <a href="/apply" className="inline-block bg-[#6366f1] hover:bg-[#5254cc] text-white px-10 py-4 rounded-xl font-semibold text-lg transition-colors">
            Apply for a Spot →
          </a>
          <p className="text-white/20 text-sm mt-4">Done for you. First time. Right way.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6 text-center text-white/20 text-sm">
        <p>Operaxon · <a href="/" className="hover:text-white/40 transition-colors">Home</a> · <a href="/apply" className="hover:text-white/40 transition-colors">Apply</a> · brandon@operaxon.com</p>
      </footer>
    </main>
  );
}
