/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operaxon — Your AI Operating System",
  description:
    "You need a 3-person operations team. You can't afford $15,000/month. We built the alternative. Starting at $997/mo.",
};

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      <Nav />
      <Hero />
      <TeamComparison />
      <Problem />
      <Solution />
      <HowItWorks />
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
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <a
          href="/apply"
          className="bg-[#6366f1] hover:bg-[#5254cc] text-white text-sm font-medium px-4 py-2 rounded transition-colors"
        >
          Apply for a Spot →
        </a>
      </div>
    </header>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="pt-40 pb-28 px-6 relative overflow-hidden">
      {/* Star watermark */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <svg
          viewBox="-300 -300 600 600"
          style={{ width: "680px", height: "680px", opacity: 0.07, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -54%)" }}
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
          Limited spots available this quarter
        </div>
        <div className="flex justify-center mb-10">
          <img src="/logo.svg" alt="Operaxon" style={{ height: "90px", width: "auto" }} />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-8">
          You need a<br />
          <span className="text-[#6366f1]">3-person ops team.</span><br />
          <span className="text-white/50">Not a $15K/mo payroll.</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed">
          Operaxon installs an autonomous AI operating system for your business. The output of an operations manager, executive assistant, and research analyst — at a fraction of the cost.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="/apply"
            className="bg-[#6366f1] hover:bg-[#5254cc] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Apply for a Spot →
          </a>
          <a href="#pricing" className="text-white/60 hover:text-white text-lg transition-colors">
            See plans ↓
          </a>
        </div>
        <p className="text-white/30 text-sm mt-6">We work with a limited number of clients per quarter · Application required</p>
      </div>
    </section>
  );
}

/* ─── TEAM COMPARISON ─── */
function TeamComparison() {
  const hiringRows = [
    { role: "Operations Manager", range: "$6,000–$8,000/mo" },
    { role: "Executive Assistant", range: "$3,000–$5,000/mo" },
    { role: "Research Analyst", range: "$3,000–$5,000/mo" },
  ];

  return (
    <section className="py-20 px-6 border-t border-white/5 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-6">The math is simple</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          What a real ops team costs vs. Operaxon
        </h2>

        <div className="border border-white/10 rounded-xl overflow-hidden mb-8">
          <div className="grid grid-cols-2 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white/40">
            <span>Role</span>
            <span className="text-right">Market Rate</span>
          </div>
          {hiringRows.map((row, i) => (
            <div key={i} className="grid grid-cols-2 px-6 py-4 border-t border-white/5">
              <span className="text-white/70">{row.role}</span>
              <span className="text-right text-white/50">{row.range}</span>
            </div>
          ))}
          <div className="grid grid-cols-2 px-6 py-4 border-t border-white/10 bg-white/5">
            <span className="text-white font-semibold">Total market rate</span>
            <span className="text-right text-white font-semibold">$12,000–$18,000/mo</span>
          </div>
        </div>

        <div className="border border-[#6366f1]/40 bg-[#6366f1]/5 rounded-xl px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-[#818cf8] font-bold text-lg">Operaxon</p>
            <p className="text-white/50 text-sm mt-1">Same output. Autonomous. 24/7.</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-white">$997–$2,500<span className="text-white/40 text-base font-normal">/mo</span></p>
            <p className="text-[#6366f1] text-sm font-semibold mt-1">80%+ savings</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROBLEM ─── */
function Problem() {
  return (
    <section className="py-28 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-6">The real problem</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-12">
          Most business owners are<br />
          <span className="text-white/40">drowning in operations.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {[
            {
              heading: "Strategy doesn't get done.",
              body: "You know what needs to happen. You just never have time to think clearly. Every day is reactive. The important work keeps getting pushed.",
            },
            {
              heading: "Market intelligence doesn't get done.",
              body: "Your competitors moved last week. You'll find out next month — if you're lucky. Nobody's watching your market every day. Nobody's job is to catch what changes.",
            },
            {
              heading: "Content doesn't get done.",
              body: "You know you should be publishing. You know what you'd say if you had two hours and no other demands. But you never do. The backlog just grows.",
            },
          ].map((p, i) => (
            <div key={i} className="bg-[#0a0a0a] p-8">
              <div className="text-[#6366f1] text-3xl font-bold mb-4 opacity-30">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-xl font-semibold mb-4 leading-snug">{p.heading}</h3>
              <p className="text-white/50 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-white/40 text-lg mt-10 italic">You know this.</p>
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
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-6">The alternative</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
            An autonomous AI<br />operating system.<br />
            <span className="text-[#6366f1]">Installed for your business.</span>
          </h2>
        </div>
        <div className="space-y-6 text-white/60 text-lg leading-relaxed">
          <p>
            Operaxon installs an autonomous AI operating system for your business. It runs 24/7.
          </p>
          <p>
            It briefs you every morning. It monitors your market, your competitors, your industry. It builds your content. It handles what doesn't require you — so you can focus on what does.
          </p>
          <p className="text-white font-medium">You don't log in. You don't prompt it. You don't manage it.</p>
          <p>
            You read the brief, make better decisions, and get your time back.
          </p>
          <div className="pt-4 space-y-3">
            {[
              "Daily morning intelligence brief",
              "Competitor & market monitoring",
              "Content research & carousel automation",
              "Email & outreach support",
              "Autonomous — runs whether you think about it or not",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/70">
                <span className="text-[#6366f1] text-sm">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */
function HowItWorks() {
  const steps = [
    { num: "01", title: "Apply for a spot", body: "Tell us about your business, your operational bottlenecks, and which tier fits. We review every application — this isn't a self-serve product." },
    { num: "02", title: "We build your operating system (24–72 hours)", body: "We configure your AI system from scratch — custom to your business, your competitors, your market. Not a template. Built for you." },
    { num: "03", title: "You go live", body: "Agent Delivery clients get their system via Telegram. Command clients get their Mac mini shipped to their office with everything pre-installed." },
    { num: "04", title: "Intelligence, every morning.", body: "Before you open your laptop, your brief is already there. Competitive moves, market news, content ready to go, action items for the day. Read it in 5 minutes. Act on it all day." },
  ];

  return (
    <section id="how-it-works" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-4">Live in 72 hours.</p>
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
          We monitor, optimize, and evolve your system every month. This isn't set-it-and-forget-it — it gets sharper over time.
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
        <div className="mb-4">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-4">Two tiers. One system.</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Pricing</h2>
        </div>
        <p className="text-white/40 text-base mb-12">We work with a limited number of clients per quarter. All engagements begin with an application.</p>

        {/* Two tiers */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">

          {/* Core */}
          <div className="border border-[#6366f1] bg-[#6366f1]/5 rounded-2xl p-8">
            <div className="text-[#818cf8] text-xs font-bold uppercase tracking-widest mb-3">Operaxon Core</div>
            <h3 className="text-2xl font-bold mb-1">Agent Delivery</h3>
            <p className="text-white/40 text-sm mb-6">No hardware required. We run everything.</p>
            <div className="mb-6">
              <div className="text-white/40 text-sm mb-1">$750 one-time setup, then</div>
              <div className="text-4xl font-bold">$997<span className="text-white/40 text-base font-normal">/mo</span></div>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-white/60">
              {[
                "Daily Intelligence Briefing System",
                "Content research & carousel automation",
                "Competitive monitoring",
                "Email & outreach support",
                "Agent delivery via Telegram",
                "Monthly system optimization",
              ].map((f, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-[#6366f1] mt-0.5">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/30 text-xs mb-6">Best for: Solopreneurs, consultants, small teams</p>
            <a href="/apply" className="block w-full text-center bg-[#6366f1] hover:bg-[#5254cc] text-white py-3 rounded-lg font-semibold transition-colors">
              Apply for Core →
            </a>
          </div>

          {/* Command */}
          <div className="border border-white/20 bg-[#0f0f0f] rounded-2xl p-8 relative">
            <div className="absolute top-4 right-4 bg-white/10 text-white/60 text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>
            <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Operaxon Command</div>
            <h3 className="text-2xl font-bold mb-1">Full Installation</h3>
            <p className="text-white/40 text-sm mb-6">Mac mini shipped to your office. Full autonomous system.</p>
            <div className="mb-6">
              <div className="text-white/40 text-sm mb-1">$997 one-time setup, then</div>
              <div className="text-4xl font-bold">$2,500<span className="text-white/40 text-base font-normal">/mo</span></div>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-white/60">
              {[
                "Everything in Core",
                "Mac mini shipped & pre-installed",
                "Branded hardware (Operaxon skin + custom packaging)",
                "Dedicated private Telegram channel",
                "Monthly 30-min strategy call with Brandon",
                "Autonomous operations running 24/7",
                "Priority support",
              ].map((f, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-white/50 mt-0.5">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/30 text-xs mb-6">Best for: Growing SMBs, operators who want the full system</p>
            <a href="/apply" className="block w-full text-center border border-white/30 hover:border-white/60 text-white py-3 rounded-lg font-semibold transition-colors">
              Apply for Command →
            </a>
          </div>
        </div>

        {/* Enterprise */}
        <div className="border border-white/10 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg">Enterprise</p>
            <p className="text-white/40 text-sm mt-1">Multi-location businesses, dealerships, larger organizations. Custom scope, custom pricing.</p>
          </div>
          <a href="mailto:brandon@operaxon.com" className="shrink-0 border border-white/20 hover:border-white/40 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
            Contact for Pricing →
          </a>
        </div>

        <p className="text-white/30 text-sm text-center mt-8">
          Compare to hiring: $12,000–$18,000/mo for a real ops team. Operaxon delivers the same output for 80%+ less.
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
    { text: "Brandon built this thing and it already knows my business better than most of my employees. The competitor section alone is worth it.", author: "Operator, E-commerce brand" },
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
    { q: "What exactly do I get every day?", a: "A structured intelligence brief in your Telegram at your chosen time. Competitive moves, market news, industry updates, content ready to post, and one thing to focus on that day. Read it in 5 minutes. Act on it all day." },
    { q: "Do I need hardware?", a: "Not for Core (Agent Delivery). We run everything on our end — you just need Telegram. Command clients get a Mac mini shipped to their office with the full system pre-installed." },
    { q: "Why is this application-only?", a: "We work with a limited number of clients per quarter. Every system is custom-built, not templated. We want to make sure there's a genuine fit before we take anyone on." },
    { q: "How is this different from ChatGPT?", a: "ChatGPT waits for you to ask it something. Operaxon proactively delivers intelligence every morning without you lifting a finger. It's configured for your specific business, your competitors, and your market — and it runs 24/7 whether you think about it or not." },
    { q: "Can I cancel anytime?", a: "Yes. Month-to-month, 30-day notice. No contracts, no cancellation fees. The setup fee is non-refundable once your system is built and delivered." },
    { q: "How fast does it start?", a: "72 hours from application approval and payment. Most clients get their first brief within 48 hours." },
    { q: "Is my data private?", a: "Yes. Your operator runs in an isolated instance — no other clients can see your data. For Command clients with the Mac mini, your data never leaves your office hardware." },
    { q: "What AI powers this?", a: "Anthropic's Claude — one of the most capable and reliable models available. We handle all updates and model changes. You never touch any of that." },
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
        <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-6">Stop drowning. Start operating.</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
          Your competitors have<br />ops teams working for them.<br />
          <span className="text-white/40">Now you can too.</span>
        </h2>
        <p className="text-white/50 text-lg mb-4 max-w-xl mx-auto">
          We work with a limited number of clients per quarter. If you're serious about getting your operations handled, apply now.
        </p>
        <p className="text-white/30 text-sm mb-10">Spots are reviewed within 24 hours. No sales call required.</p>
        <a
          href="/apply"
          className="inline-block bg-[#6366f1] hover:bg-[#5254cc] text-white font-semibold px-10 py-5 rounded-lg text-xl transition-colors mb-6"
        >
          Apply for a Spot →
        </a>
        <p className="text-white/30 text-sm">Core: $750 setup · $997/mo · Command: $997 setup · $2,500/mo</p>
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
            <a href="/apply" className="hover:text-white transition-colors">Apply</a>
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
