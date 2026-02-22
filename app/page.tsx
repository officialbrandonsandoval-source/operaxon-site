/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operaxon — Your business, operated by AI.",
  description:
    "A done-for-you AI operating system. Daily intelligence briefs, competitor monitoring, and market tracking — delivered to your Telegram. No hardware required. Starting at $297/mo.",
};

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      <Nav />
      <FoundingBanner />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <WhatYouGet />
      <Pricing />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ─── NAV ─── */
function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <img src="/logo.svg" alt="Operaxon" style={{ height: "44px", width: "auto" }} />
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="/tier1" className="hover:text-white transition-colors">Agent Delivery</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <a
          href="/onboarding"
          className="bg-[#6366f1] hover:bg-[#5254cc] text-white text-sm font-medium px-4 py-2 rounded transition-colors"
        >
          Get Your Operator →
        </a>
      </div>
    </header>
  );
}

/* ─── FOUNDING BANNER ─── */
function FoundingBanner() {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-[#f59e0b] text-black text-center text-sm font-semibold py-2 px-4">
      🔥 Founding Client Offer: 30 days free · $297/mo locked in forever after · 2 of 3 spots left —{" "}
      <a href="/tier1#founding" className="underline hover:no-underline">Claim yours →</a>
    </div>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="pt-52 pb-28 px-6 relative overflow-hidden">
      {/* Star watermark */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <svg
          viewBox="-300 -300 600 600"
          style={{ width: "680px", height: "680px", opacity: 0.09, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -54%)" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="wmHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="1" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </radialGradient>
            <filter id="wmGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="18" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <ellipse cx="0" cy="0" rx="200" ry="180" fill="url(#wmHalo)" />
          <g filter="url(#wmGlow)">
            <path d="M 0,-240 L 28,-32 L 160,0 L 28,32 L 0,148 L -28,32 L -160,0 L -28,-32 Z" fill="white" />
            <path d="M 0,-240 L 10,-300 L 0,-370 L -10,-300 Z" fill="white" opacity="0.6" />
            <circle cx="0" cy="0" r="22" fill="white" />
          </g>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 text-[#6366f1] text-sm font-medium mb-8 border border-[#6366f1]/30 bg-[#6366f1]/10 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse"></span>
          Now deploying — live in 72 hours
        </div>
        <div className="flex justify-center mb-10">
          <img src="/logo.svg" alt="Operaxon" style={{ height: "90px", width: "auto" }} />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-8">
          Your business,<br />
          <span className="text-[#6366f1]">operated by AI.</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed">
          A custom AI operator — configured for your business, delivered to your Telegram — that sends you daily intelligence, tracks your competitors, and keeps you informed while you focus on running your company.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="/onboarding"
            className="bg-[#6366f1] hover:bg-[#5254cc] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get Your Operator →
          </a>
          <a href="/tier1" className="text-white/60 hover:text-white text-lg transition-colors">
            See Agent Delivery plans ↓
          </a>
        </div>
        <p className="text-white/30 text-sm mt-6">No hardware required to start · $750 setup · $297–$497/mo</p>
      </div>
    </section>
  );
}

/* ─── PROBLEM ─── */
function Problem() {
  const problems = [
    {
      heading: "You're drowning in information, starving for intelligence.",
      body: "You check 6 tools, 4 dashboards, and 12 tabs before you can make your first decision of the day. By then, your competitors already moved. The problem isn't lack of data — it's that nobody's synthesizing it for you.",
    },
    {
      heading: "Your team is busy doing. Nobody's watching.",
      body: "Competitor changed their pricing? You'll find out next week. Market shifted? You'll notice when revenue dips. New opportunity emerged? Someone else got there first. You don't have anyone whose job it is to watch everything, every day.",
    },
    {
      heading: "AI tools promised to help. They didn't.",
      body: "You tried ChatGPT. Cool for a day, then you forgot about it. The problem was never access to AI — it's that nobody configured it, maintained it, or made it actually work for your specific business.",
    },
  ];

  return (
    <section className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-6">The operator's problem</p>
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {problems.map((p, i) => (
            <div key={i} className="bg-[#0a0a0a] p-8">
              <div className="text-[#6366f1] text-3xl font-bold mb-4 opacity-30">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-xl font-semibold mb-4 leading-snug">{p.heading}</h3>
              <p className="text-white/50 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SOLUTION ─── */
function Solution() {
  return (
    <section className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-6">Meet your AI operator.</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
            A dedicated operator.<br />Running for you.
          </h2>
        </div>
        <div className="space-y-6 text-white/60 text-lg leading-relaxed">
          <p>
            Operaxon deploys a custom AI agent configured specifically for your business. It monitors your competitors, tracks your market, and delivers a structured intelligence brief to your phone every morning.
          </p>
          <p className="text-white font-medium">You don't log in. You don't prompt it. You don't manage it.</p>
          <p>You just read the brief and make better decisions.</p>
          <p>
            Choose Agent Delivery — fully managed by us, delivered via Telegram, no hardware needed — or our Installed OS for clients who want dedicated hardware in their office. Both include full setup, configuration, and ongoing optimization.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */
function HowItWorks() {
  const steps = [
    { num: "01", title: "Fill out the intake form (10 min)", body: "Tell us your business, your competitors, your market, and your preferred brief time. No calls required to start." },
    { num: "02", title: "We build your operator (24–48 hours)", body: "We configure your AI operator from scratch — custom identity, your specific business context, monitored topics, brief format. Not a template. Built for you." },
    { num: "03", title: "Your Telegram bot goes live (Day 2–3)", body: "You get your bot username. Search it in Telegram, send a message, and you're live. Zero setup on your end." },
    { num: "04", title: "Intelligence, delivered.", body: "Every morning at your preferred time, your operator delivers the brief. Competitive moves, market news, one thing to focus on. Read it in 5 minutes. Act on it all day." },
  ];

  return (
    <section id="how-it-works" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-4">Live in 72 hours. Four steps.</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How it works</h2>
        </div>
        <div className="space-y-px">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-8 md:gap-16 items-start p-8 bg-[#0f0f0f] border border-white/5 hover:border-[#6366f1]/30 transition-colors">
              <span className="text-[#6366f1]/40 text-4xl font-bold shrink-0">{s.num}</span>
              <div>
                <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-8 bg-[#6366f1]/5 border border-[#6366f1]/20 text-white/60 text-lg">
          <span className="text-[#6366f1] font-semibold">Ongoing: </span>
          We monitor, optimize, and improve your agent continuously. You just read the briefs.
        </div>
      </div>
    </section>
  );
}

/* ─── WHAT YOU GET ─── */
function WhatYouGet() {
  const deliverables = [
    { title: "Daily Intelligence Brief", body: "Competitive moves, market shifts, industry news, and prioritized action items — delivered to your phone every morning at your chosen time." },
    { title: "Competitor Monitoring", body: "Your competitors watched daily. Pricing changes, new announcements, marketing shifts — caught and reported the day they happen." },
    { title: "Market Intelligence", body: "Industry trends, emerging opportunities, and relevant news — filtered for your business, not generic headlines." },
    { title: "On-Demand Q&A", body: "Reply to your operator anytime with a question. It knows your business and responds with context." },
    { title: "Weekly Strategic Digest (Pro)", body: "A weekly summary of patterns, trends, and opportunities your operator spotted — delivered every Monday." },
    { title: "Custom Deliverables (Pro)", body: "Lead scans, content briefs, competitive deep-dives, or KPI tracking. Pick one to add to your operator." },
  ];

  return (
    <section className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-4">Not features. Deliverables.</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What you get</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {deliverables.map((d, i) => (
            <div key={i} className="bg-[#0a0a0a] p-8 hover:bg-[#0f0f0f] transition-colors">
              <div className="w-2 h-2 bg-[#6366f1] rounded-full mb-6"></div>
              <h3 className="text-xl font-semibold mb-3">{d.title}</h3>
              <p className="text-white/50 leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-4">Simple pricing. No contracts.</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Pricing</h2>
        </div>

        {/* Founding Client Banner */}
        <div className="mb-12 p-6 border border-[#f59e0b]/40 bg-[#f59e0b]/5 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[#fbbf24] font-bold text-lg">🔥 Founding Client Offer — 2 spots left</p>
            <p className="text-white/60 text-sm mt-1">30 days free · $297/mo locked in forever after · honest testimonial in exchange</p>
          </div>
          <a href="/tier1" className="bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
            Claim a Spot →
          </a>
        </div>

        {/* Two tiers */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Tier 1 */}
          <div className="border border-[#6366f1] bg-[#6366f1]/5 rounded-2xl p-8">
            <div className="text-[#818cf8] text-xs font-bold uppercase tracking-widest mb-3">Tier 1 — Agent Delivery</div>
            <h3 className="text-2xl font-bold mb-1">No hardware needed</h3>
            <p className="text-white/40 text-sm mb-6">We run everything. You get the results.</p>
            <div className="mb-6">
              <div className="text-3xl font-bold">$750 <span className="text-white/40 text-base font-normal">setup</span></div>
              <div className="text-white/60 text-sm mt-1">then $297/mo Starter or $497/mo Pro</div>
            </div>
            <ul className="space-y-2 mb-8 text-sm text-white/60">
              {["Custom AI operator built for your business", "Daily morning intelligence brief via Telegram", "Competitor + market monitoring", "On-demand Q&A", "Pro: weekly digest + custom deliverable"].map((f, i) => (
                <li key={i} className="flex gap-2"><span className="text-[#6366f1]">✓</span>{f}</li>
              ))}
            </ul>
            <a href="/tier1" className="block w-full text-center bg-[#6366f1] hover:bg-[#5254cc] text-white py-3 rounded-lg font-semibold transition-colors">
              See Agent Delivery Plans →
            </a>
          </div>

          {/* Tier 2 */}
          <div className="border border-white/10 bg-[#0f0f0f] rounded-2xl p-8">
            <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Tier 2 — Installed OS</div>
            <h3 className="text-2xl font-bold mb-1">Your hardware, your data</h3>
            <p className="text-white/40 text-sm mb-6">Mac mini in your office. Full dedicated system.</p>
            <div className="mb-6">
              <div className="text-3xl font-bold">$750 <span className="text-white/40 text-base font-normal">setup</span></div>
              <div className="text-white/60 text-sm mt-1">then $997–$2,500/mo depending on scope</div>
            </div>
            <ul className="space-y-2 mb-8 text-sm text-white/60">
              {["Everything in Agent Delivery", "Dedicated Mac mini in your office", "Your data stays local — never on our servers", "Deeper integrations + custom workflows", "Priority support + quarterly reviews"].map((f, i) => (
                <li key={i} className="flex gap-2"><span className="text-white/30">✓</span>{f}</li>
              ))}
            </ul>
            <a href="/onboarding" className="block w-full text-center border border-white/20 hover:border-white/40 text-white py-3 rounded-lg font-semibold transition-colors">
              Apply for Tier 2 →
            </a>
          </div>
        </div>
        <p className="text-white/30 text-sm text-center">
          Not sure which tier? Start with Agent Delivery. Most clients upgrade to Installed OS after the first month.
        </p>
      </div>
    </section>
  );
}

/* ─── SOCIAL PROOF ─── */
function SocialProof() {
  const testimonials = [
    { text: "The first brief hit at 7:15 AM and covered something my competitor announced that I hadn't seen yet. I was on the phone with a prospect referencing it by 9 AM. This paid for itself in the first week.", author: "Founder, B2B SaaS company" },
    { text: "I used to spend 45 minutes every morning reading newsletters and checking Twitter. Now I read one message and I'm fully briefed. My mornings are back.", author: "CEO, Professional Services firm" },
    { text: "Brandon built this thing in two days and it already knows my business better than most of my employees. The competitor section alone is worth it.", author: "Operator, E-commerce brand" },
  ];

  return (
    <section className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-4">Operators trust operators.</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What they say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-white/10 p-8 rounded-xl">
              <p className="text-white/60 italic leading-relaxed text-sm mb-6">"{t.text}"</p>
              <p className="text-white/30 text-xs">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const faqs = [
    { q: "What exactly do I get every day?", a: "A structured intelligence brief in your Telegram at your chosen time. Competitive moves, market news, industry updates, and one thing to focus on that day. Read it in 5 minutes. Act on it all day." },
    { q: "Do I need hardware?", a: "Not for Tier 1 (Agent Delivery). We run everything on our end. You just download Telegram and add your bot. Tier 2 (Installed OS) uses a Mac mini in your office for clients who want their data local." },
    { q: "How is this different from ChatGPT?", a: "ChatGPT waits for you to ask it something. Operaxon proactively delivers intelligence every morning without you lifting a finger. It's configured for your specific business, monitors your specific competitors, and runs 24/7." },
    { q: "Can I cancel anytime?", a: "Yes. Month-to-month, 30-day notice. No contracts, no cancellation fees. The setup fee is non-refundable once your operator is built and delivered." },
    { q: "How fast does it start?", a: "72 hours from intake form submission and payment. Most clients get their first brief in under 48 hours." },
    { q: "Is my data private?", a: "Yes. Your operator runs in an isolated instance — no other clients can see your data. For Tier 1, data processes via Anthropic's Claude API (industry-standard privacy). For Tier 2, your data never leaves your office hardware." },
    { q: "What AI powers this?", a: "Anthropic's Claude — currently Claude Sonnet. One of the most capable and reliable models available. We update when meaningfully better versions are released. You don't manage any of that." },
    { q: "What if I want to change what's monitored?", a: "Message me. Updates happen same day for Pro clients, within 48 hours for Starter. Your operator isn't a locked black box — it evolves with your business." },
  ];

  return (
    <section id="faq" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-4">Questions operators ask.</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">FAQ</h2>
        </div>
        <div className="space-y-px">
          {faqs.map((faq, i) => (
            <details key={i} className="group border-t border-white/5">
              <summary className="flex justify-between items-center py-6 cursor-pointer list-none">
                <span className="font-medium text-lg pr-8">{faq.q}</span>
                <span className="text-[#6366f1] shrink-0 text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="pb-6 text-white/50 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  return (
    <section className="py-28 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-6">Stop guessing. Start operating.</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
          Every morning you wake up<br />without an intelligence brief<br />
          <span className="text-white/40">is a morning your competitors<br />might have the edge.</span>
        </h2>
        <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
          Your operator is 72 hours away. Fill out the 10-minute form. No calls, no demos, no pitch decks.
        </p>
        <a
          href="/onboarding"
          className="inline-block bg-[#6366f1] hover:bg-[#5254cc] text-white font-semibold px-10 py-5 rounded-lg text-xl transition-colors mb-6"
        >
          Build My Operator →
        </a>
        <p className="text-white/30 text-sm">$750 setup · $297–$497/mo · Live in 72 hours</p>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          <div>
            <p className="font-semibold text-lg mb-1">Operaxon</p>
            <p className="text-white/40 text-sm">Your business, operated by AI.</p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-white/50">
            <a href="/onboarding" className="hover:text-white transition-colors">Get Started</a>
            <a href="/tier1" className="hover:text-white transition-colors">Agent Delivery</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="mailto:brandon@operaxon.com" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-white/30">
          <p>© 2026 Operaxon. All rights reserved.</p>
          <p>
            <a href="mailto:brandon@operaxon.com" className="hover:text-white/60 transition-colors text-white/50">brandon@operaxon.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
