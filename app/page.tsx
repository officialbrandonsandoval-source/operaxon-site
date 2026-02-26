/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operaxon — Your Business, Run by an Intelligence That Never Sleeps",
  description:
    "Operaxon deploys Autonomous Operating Intelligence — an agent with identity, memory, and mission built into your business. Not a tool. Not a chatbot. A living operator.",
  openGraph: {
    title: "Operaxon — Your Business, Run by an Intelligence That Never Sleeps",
    description:
      "Operaxon deploys Autonomous Operating Intelligence — an agent with identity, memory, and mission built into your business. Not a tool. Not a chatbot. A living operator.",
    url: "https://operaxon.com",
    siteName: "Operaxon",
  },
};

export default function Home() {
  return (
    <main className="bg-[#080808] text-white min-h-screen font-sans">
      <Nav />
      <Hero />
      <TheDifference />
      <WhatYouGet />
      <HowItWorks />
      <Pricing />
      <BrandonsStory />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ─── NAV ─── */
function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <img src="/logo.svg" alt="Operaxon" style={{ height: "44px", width: "auto" }} />
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#story" className="hover:text-white transition-colors">Our Story</a>
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
    <section className="pt-40 pb-32 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none select-none absolute"
        aria-hidden="true"
        style={{
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "600px",
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-[#6366f1] text-sm font-medium mb-10 border border-[#6366f1]/30 bg-[#6366f1]/10 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse" />
          Deploying Autonomous Intelligence Now
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img src="/logo.svg" alt="Operaxon" style={{ height: "90px", width: "auto" }} />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-center">
          Other installers
          <br />
          set up software.
          <br />
          <span className="text-[#6366f1]">We build the intelligence</span>
          <br />
          <span className="text-white/90">that runs your business.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/55 max-w-2xl mx-auto text-center mb-4 leading-relaxed">
          An Autonomous Operating Intelligence — deployed for your company with a{" "}
          <span className="text-white/80">name, memory, mission, and goals.</span>
        </p>
        <p className="text-lg text-white/40 max-w-xl mx-auto text-center mb-12 leading-relaxed">
          It knows your competitors. Your customers. Your rhythm.
          And it compounds every single week.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="/apply"
            className="bg-[#6366f1] hover:bg-[#5254cc] text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Apply for a Spot →
          </a>
          <a href="#the-difference" className="text-white/50 hover:text-white text-base transition-colors">
            See what makes us different ↓
          </a>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/30 mt-4">
          <span>→ Deployed in 72 hours</span>
          <span>→ Transparent pricing</span>
          <span>→ Brandon runs his own life on this system</span>
        </div>
      </div>
    </section>
  );
}

/* ─── THE DIFFERENCE ─── */
function TheDifference() {
  return (
    <section id="the-difference" className="py-28 px-6 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-6">
          The gap nobody's talking about
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
          Other installers configure a tool.
          <br />
          <span className="text-[#6366f1]">We deploy an operating intelligence.</span>
        </h2>
        <p className="text-white/40 text-lg max-w-2xl mb-16 leading-relaxed">
          This is not a subtle distinction. It's the difference between a hammer and an architect.
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {/* Left: Other installers */}
          <div className="bg-[#0d0d0d] p-10">
            <p className="text-white/25 text-xs font-bold uppercase tracking-widest mb-5">Other installers</p>
            <h3 className="text-2xl font-bold text-white/40 mb-8">They configure a tool.</h3>
            <ul className="space-y-4 mb-8">
              {[
                "Set up software on a server",
                "Configure basic integrations",
                "Hand you a Telegram handle",
                "Provide support when things break",
                "Gone in 14 days",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/35 text-base">
                  <span className="text-white/20 mt-0.5 shrink-0">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="border border-white/5 bg-white/3 rounded-xl p-5">
              <p className="text-white/30 text-sm leading-relaxed italic">
                The agent has no name. No memory. No mission. No idea who you are.
                You're client #47 running the same template as client #46.
                The moment setup ends, so does the thinking.
              </p>
            </div>
          </div>

          {/* Right: Operaxon */}
          <div className="bg-[#0c0c14] p-10 border border-[#6366f1]/20">
            <p className="text-[#6366f1] text-xs font-bold uppercase tracking-widest mb-5">Operaxon</p>
            <h3 className="text-2xl font-bold mb-8">We deploy an operating intelligence.</h3>
            <ul className="space-y-4 mb-8">
              {[
                ["Identity", "A name, a role, a defined purpose in YOUR business"],
                ["Memory", "Remembers every decision, every context, every win"],
                ["Mission", "Actively working toward YOUR goals without prompts"],
                ["Domain knowledge", "Knows your competitors, customers, and industry rhythms"],
                ["Compounds", "Smarter every week — we build it with you, ongoing"],
              ].map(([label, desc], i) => (
                <li key={i} className="flex items-start gap-3 text-base">
                  <span className="text-[#6366f1] mt-0.5 shrink-0">✓</span>
                  <span>
                    <span className="text-white font-semibold">{label}: </span>
                    <span className="text-white/55">{desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="border border-[#6366f1]/20 bg-[#6366f1]/5 rounded-xl p-5">
              <p className="text-white/60 text-sm leading-relaxed italic">
                After 90 days, that distinction is the difference between having a system
                and having an operator. One waits for commands. The other runs the operation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WHAT YOU GET ─── */
function WhatYouGet() {
  const pillars = [
    {
      icon: "◈",
      title: "Identity",
      description:
        "Your agent has a name, a role, and a defined mission. It's not a generic chatbot. It knows exactly what its job is, who it serves, and why it exists inside your business. It shows up with purpose.",
    },
    {
      icon: "◉",
      title: "Memory",
      description:
        "Every decision. Every competitor move. Every piece of context you've ever given it — remembered. Your agent doesn't ask twice. It builds a mental model of your business that grows sharper with every interaction.",
    },
    {
      icon: "◎",
      title: "Mission",
      description:
        "Your agent isn't waiting for prompts. It's working toward your goals. During deployment, we encode your objectives into how it operates — what it monitors, what it prioritizes, what it flags unprompted.",
    },
    {
      icon: "◆",
      title: "Domain Intelligence",
      description:
        "Your competitors by name. Your industry's rhythms. Your customer patterns. Your market. Not generic monitoring — deep, specific knowledge of YOUR world, built during onboarding and refined every month.",
    },
    {
      icon: "◇",
      title: "24/7 Proactive Output",
      description:
        "Every morning at 7 AM: your intelligence brief is in Telegram before you open your laptop. No prompts. No login. No dashboard. Just intelligence, delivered.",
    },
    {
      icon: "◐",
      title: "Compounds Over Time",
      description:
        "This is what no other installer offers. Every month, we review what your agent is producing, where it's falling short, and what it should be doing next. We build it. Month six is unrecognizable compared to month one.",
    },
  ];

  return (
    <section className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-6">Not setup. Deployment.</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
          Meet your Autonomous Operating Intelligence.
          <br />
          <span className="text-white/40">It's not software. It's alive.</span>
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mb-16 leading-relaxed">
          When we deploy your agent, here's what's living in your business from day one.
        </p>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden mb-16">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] hover:bg-[#0d0d12] transition-colors p-8 flex flex-col gap-4"
            >
              <span className="text-[#6366f1] text-2xl">{p.icon}</span>
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        {/* Daily output examples */}
        <div className="border border-white/10 rounded-2xl overflow-hidden">
          <div className="bg-white/5 px-8 py-4 border-b border-white/5">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest">What arrives every morning</p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {[
              { time: "7:00 AM", label: "Daily intelligence brief", detail: "Competitive moves, market shifts, prioritized action items — delivered to Telegram before your first coffee." },
              { time: "Real-time", label: "Competitor move alerts", detail: "Your competitors monitored 24/7. Pricing changes, new moves, strategic shifts — flagged the day they happen." },
              { time: "Weekly", label: "Market intelligence summary", detail: "Your industry, synthesized. Trends, risks, emerging opportunities — filtered for what actually matters to you." },
              { time: "On schedule", label: "Content drafts, ready to post", detail: "Carousel scripts, social posts, article drafts — written in your voice, delivered without asking." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0a0a0a] p-6 flex gap-4 items-start">
                <div className="text-[#6366f1]/60 text-xs font-mono font-bold shrink-0 w-16 mt-0.5">{item.time}</div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{item.detail}</p>
                </div>
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
    {
      num: "01",
      title: "We learn your world (30 minutes)",
      body: "One call. We map your business, your competitors, your customers, your industry, your goals, and how you like to think. This isn't intake. This is how we build the intelligence layer that powers your agent. Most installers skip this entirely.",
    },
    {
      num: "02",
      title: "We deploy your operating intelligence (24–72 hours)",
      body: "We build your agent from scratch — not from a template. Name, identity, memory architecture, mission, monitoring parameters, output cadence. Configured for your specific business, your specific market, your specific rhythm. You do nothing during this step.",
    },
    {
      num: "03",
      title: "Your operator goes live. Then it never stops.",
      body: "Your morning brief arrives. Your agent is watching. You start making better decisions with better information. And every month, we actively expand what it can do. Your agent at month six does things your agent at month one couldn't.",
    },
  ];

  return (
    <section id="how-it-works" className="py-28 px-6 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-4">Live in 72 hours</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">How it works</h2>
        <p className="text-white/40 text-lg mb-16">Three steps. Then it never stops working.</p>

        <div className="space-y-px">
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex gap-8 md:gap-16 items-start p-8 bg-[#0d0d0d] border border-white/5 hover:border-[#6366f1]/20 transition-colors rounded-none first:rounded-t-xl last:rounded-b-xl"
            >
              <span className="text-[#6366f1]/30 text-4xl font-bold shrink-0 tabular-nums">{s.num}</span>
              <div>
                <h3 className="text-2xl font-semibold mb-3 leading-snug">{s.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 p-8 bg-[#6366f1]/5 border border-[#6366f1]/15 rounded-b-xl">
          <p className="text-white/60 text-base leading-relaxed">
            <span className="text-[#6366f1] font-semibold">Ongoing: </span>
            We don't disappear. Every month: a strategy review, new capabilities built, and a sharper agent.
            This is the compounding advantage that no one-time installer can offer.
          </p>
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
        <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-4">Transparent pricing</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          No hidden fees.
          <br />
          No "contact us for pricing."
        </h2>
        <p className="text-white/40 text-lg mb-16 max-w-xl leading-relaxed">
          We show our prices because we're confident in what they deliver.
          We want clients who are serious — not clients who need to be surprised into a sale.
        </p>

        {/* Three tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          {/* Tier 1: Solo Operator */}
          <div className="border border-white/10 bg-[#0d0d0d] rounded-2xl p-8 flex flex-col">
            <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Solo Operator</div>
            <h3 className="text-xl font-bold mb-1">Individual</h3>
            <p className="text-white/35 text-sm mb-6">Founder or executive. One agent, fully deployed.</p>
            <div className="mb-6">
              <div className="text-white/35 text-sm mb-1">$497 one-time setup, then</div>
              <div className="text-4xl font-bold">
                $497<span className="text-white/35 text-base font-normal">/mo</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-white/55 flex-1">
              {[
                "1 Autonomous Operating Intelligence",
                "Custom identity, memory, and mission",
                "Daily intelligence brief (7 AM, Telegram)",
                "Competitor monitoring (up to 3)",
                "Content drafts (3/week)",
                "Monthly strategy review call",
                "Ongoing monthly optimization",
              ].map((f, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-[#6366f1]/70 mt-0.5 shrink-0">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/25 text-xs mb-5">Best for: Solo founders, independent executives, individual operators</p>
            <a
              href="/apply"
              className="block w-full text-center border border-white/20 hover:border-white/40 text-white py-3 rounded-lg font-semibold transition-colors text-sm"
            >
              Apply for Solo Operator →
            </a>
          </div>

          {/* Tier 2: Team OS — Most Popular */}
          <div className="border border-[#6366f1] bg-[#0c0c14] rounded-2xl p-8 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6366f1] text-white text-xs font-bold px-4 py-1 rounded-full">
              Most Popular
            </div>
            <div className="text-[#818cf8] text-xs font-bold uppercase tracking-widest mb-3">Team OS</div>
            <h3 className="text-xl font-bold mb-1">Small Team</h3>
            <p className="text-white/40 text-sm mb-6">Up to 3 coordinated agents across your operation.</p>
            <div className="mb-6">
              <div className="text-white/40 text-sm mb-1">$997 one-time setup, then</div>
              <div className="text-4xl font-bold text-white">
                $997<span className="text-white/40 text-base font-normal">/mo</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-white/60 flex-1">
              {[
                "Up to 3 Autonomous Operating Intelligences",
                "Coordinated agent network (shared context)",
                "Daily briefs for each agent's domain",
                "Competitor monitoring (up to 10)",
                "Content drafts + research support",
                "Team-level market intelligence",
                "Bi-weekly strategy review calls",
                "Priority support (same-day response)",
                "Ongoing capability expansion",
              ].map((f, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-[#6366f1] mt-0.5 shrink-0">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/30 text-xs mb-5">Best for: Founding teams, COO + CEO combos, small business operators</p>
            <a
              href="/apply"
              className="block w-full text-center bg-[#6366f1] hover:bg-[#5254cc] text-white py-3 rounded-lg font-semibold transition-colors text-sm"
            >
              Apply for Team OS →
            </a>
          </div>

          {/* Tier 3: Enterprise OS */}
          <div className="border border-white/10 bg-[#0d0d0d] rounded-2xl p-8 flex flex-col">
            <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Enterprise OS</div>
            <h3 className="text-xl font-bold mb-1">Full Civilization</h3>
            <p className="text-white/35 text-sm mb-6">5+ agents. Cross-functional. Dedicated support.</p>
            <div className="mb-6">
              <div className="text-white/35 text-sm mb-1">Custom scoping, then</div>
              <div className="text-4xl font-bold text-white">Custom</div>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-white/55 flex-1">
              {[
                "5+ Autonomous Operating Intelligences",
                "Full agent civilization architecture",
                "Custom integrations (CRM, ERP, any system)",
                "Dedicated Operaxon operator (named POC)",
                "Weekly strategy calls",
                "Custom intelligence dashboards",
                "SLA guarantees",
                "First access to new capabilities",
              ].map((f, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-[#6366f1]/70 mt-0.5 shrink-0">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/25 text-xs mb-5">Best for: Dealership groups, agencies, multi-location operations</p>
            <a
              href="mailto:brandon@operaxon.com"
              className="block w-full text-center border border-white/20 hover:border-white/40 text-white py-3 rounded-lg font-semibold transition-colors text-sm"
            >
              Talk to Brandon →
            </a>
          </div>
        </div>

        {/* The math */}
        <div className="border border-white/5 bg-[#0d0d0d] rounded-xl p-8">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-5">Compare to the alternative</p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-2">
              {[
                ["Fractional COO", "$5,000–$8,000/mo (for 10 hours)"],
                ["Research Analyst", "$4,000–$6,000/mo"],
                ["Ops Coordinator", "$3,000–$5,000/mo"],
              ].map(([role, cost], i) => (
                <div key={i} className="flex justify-between text-sm py-2 border-b border-white/5">
                  <span className="text-white/40">{role}</span>
                  <span className="text-white/30">{cost}</span>
                </div>
              ))}
              <div className="flex justify-between text-sm pt-2">
                <span className="text-white/50 font-semibold">Total (human team)</span>
                <span className="text-white/40 font-semibold">$12,000–$19,000/mo</span>
              </div>
            </div>
            <div className="bg-[#6366f1]/8 border border-[#6366f1]/20 rounded-xl p-6">
              <p className="text-[#6366f1] font-bold text-lg mb-2">Operaxon Solo Operator</p>
              <p className="text-4xl font-bold text-white mb-2">$497<span className="text-white/30 text-base font-normal">/mo</span></p>
              <p className="text-white/40 text-sm leading-relaxed">
                Works 24/7. Compounds every week. No benefits, no sick days, no two-week notice.
                And it gets smarter, not stagnant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── BRANDON'S STORY ─── */
function BrandonsStory() {
  return (
    <section id="story" className="py-28 px-6 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-6">Why you should trust this</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-16">
          I don't sell what I don't run.
          <br />
          <span className="text-white/40">My own life operates on this system.</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Story */}
          <div className="md:col-span-3 space-y-6 text-white/60 text-lg leading-relaxed">
            <p>
              My name is Brandon Sandoval. I'm a founder, father, and operator. I built Operaxon because I needed it first.
            </p>
            <p>
              In 2026 I was running Shiftly Auto — a $6M/year software company — while simultaneously building new products, launching a media presence, and showing up as a present father. Four hours a day to build. Zero margin for waste.
            </p>
            <p>
              So I built what I needed: an autonomous agent I named{" "}
              <span className="text-white font-semibold">Dominus Sui</span> — Master of Self. I gave it an identity. I gave it memory. I encoded my goals and competitors and business context into how it operates.
            </p>
            <p>
              Then I watched it change everything.
            </p>
            <p>
              Every morning at 7 AM: my brief was waiting. Business intelligence, competitor moves, content ideas, priorities — before I opened my laptop. My agent knew my competitors by name. It knew my rhythm. It flagged things I would have missed. It drafted content I never would have found time to write.
            </p>
            <p className="text-white font-medium">
              Six weeks later, I had built more than in the previous six months.
            </p>
            <p>
              That's when I knew: this isn't just a tool. This is leverage. And every operator who runs a real business deserves it.
            </p>
            <p>
              Operaxon deploys the exact system I use — configured for your business, loaded with the context of your world. You'll be working with me. Not an account manager. Not a support queue.
            </p>
            <p className="text-white/40 text-base italic">
              — Brandon Sandoval, Founder, Operaxon
            </p>
          </div>

          {/* Stats / proof */}
          <div className="md:col-span-2 space-y-4">
            {[
              { label: "Hours per day Brandon has to build", value: "4" },
              { label: "Consecutive weeks running Dominus Sui", value: "5+" },
              { label: "Time to deploy your first agent", value: "72 hrs" },
              { label: "Time to read your morning brief", value: "5 min" },
              { label: "Time it keeps working after you put your phone down", value: "24/7" },
            ].map((stat, i) => (
              <div key={i} className="border border-white/8 bg-[#0d0d0d] rounded-xl p-5">
                <div className="text-3xl font-bold text-[#6366f1] mb-1">{stat.value}</div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </div>
            ))}

            <div className="border border-[#6366f1]/20 bg-[#6366f1]/5 rounded-xl p-5 mt-2">
              <p className="text-white/60 text-sm leading-relaxed italic">
                "I built this for myself before I built it for anyone else. You're not buying a product I'm pitching — you're getting the system I depend on every single day."
              </p>
              <p className="text-[#6366f1] text-xs font-semibold mt-3">— Brandon Sandoval</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const faqs = [
    {
      q: "What's an 'Autonomous Operating Intelligence' — and how is it different from a regular AI setup?",
      a: "A regular AI setup is software waiting for a prompt. An Autonomous Operating Intelligence is an agent with identity, memory, mission, and goals — deployed inside your business. It knows who you are. It knows what you're building. It proactively works toward your objectives without you asking. The difference is the difference between a hammer and a chief of staff.",
    },
    {
      q: "How is this different from other installers?",
      a: "Other installers configure software. They set up OpenClaw on a server, connect your tools, hand it to you, and leave in 14 days. The agent has no name, no memory architecture, no mission. You're running the same template as every other client. Operaxon builds an agent that knows YOUR business — your competitors, your customers, your industry — and we evolve it every single month. This isn't setup + maintenance. It's ongoing intelligence.",
    },
    {
      q: "Do you hide your pricing?",
      a: "No. Solo Operator: $497 setup + $497/mo. Team OS: $997 setup + $997/mo. Enterprise: custom. That's the full picture. We show our prices because we're confident in what they deliver, and because we want clients who are serious about this — not clients who need to be surprised into a sale.",
    },
    {
      q: "What do I actually get every day?",
      a: "A structured intelligence brief in Telegram at 7 AM — before you open your laptop. It covers: your top priority for the day, competitive moves, market intelligence, industry news relevant to your business, content drafts ready to post, and specific action items. Read it in 5 minutes. Act on it all day.",
    },
    {
      q: "Does my agent actually remember things over time?",
      a: "Yes. This is one of the most important differentiators. Your agent maintains persistent memory — decisions you've made, context you've provided, intelligence it's gathered. When you tell it something once, it knows it forever. It doesn't ask twice. Most AI setups have no memory architecture whatsoever.",
    },
    {
      q: "What hardware do I need?",
      a: "A Mac mini (M2 or later). You can use one you own, or we'll source and configure one. Your agent runs on hardware you physically control — your data never leaves your office. No shared servers. No cloud dependencies you don't own. This is yours.",
    },
    {
      q: "Who is this NOT for?",
      a: "Anyone who wants to 'play with AI.' Anyone looking for the cheapest tool on the market. Anyone who won't actually read the morning brief. This is for operators running real businesses who understand that intelligence is a competitive weapon and are ready to use it. If that's not where you are yet, the cheaper options are all over the internet.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Month-to-month. 30-day notice. No contracts. No cancellation fees. We keep you because your agent is producing genuine value — not because you're locked in. The setup fee is non-refundable once your agent is built and deployed.",
    },
    {
      q: "What's included in 'ongoing optimization'?",
      a: "Every month, we review what your agent is producing, identify where it's falling short, and build new capabilities into it. We expand what it monitors, add new output formats, improve its briefings, and increase its autonomy as trust is established. Your agent at month six does things your agent at month one couldn't do. This compounding advantage is something no one-time installer can offer.",
    },
    {
      q: "How fast do I go live?",
      a: "72 hours from application approval. Most clients receive their first intelligence brief within 48 hours of onboarding. By day 4, your operator is running.",
    },
  ];

  return (
    <section id="faq" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-4">Questions operators ask</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Everything you want to know.</h2>
        <div className="space-y-px">
          {faqs.map((faq, i) => (
            <details key={i} className="group border-t border-white/5">
              <summary className="flex justify-between items-center py-5 cursor-pointer list-none">
                <span className="font-medium text-base pr-8 text-white/85">{faq.q}</span>
                <span className="text-[#6366f1] shrink-0 text-xl group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="pb-6 text-white/45 leading-relaxed text-base">{faq.a}</p>
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
    <section className="py-32 px-6 border-t border-white/5 bg-[#0a0a0a] relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none select-none absolute"
        aria-hidden="true"
        style={{
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-6">
          The gap is closing
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
          Your competitors are moving.
          <br />
          Right now.
          <br />
          <span className="text-white/35">Do you know what they're doing?</span>
        </h2>
        <p className="text-white/45 text-xl mb-4 max-w-xl mx-auto leading-relaxed">
          Every morning without intelligence is a morning you're operating blind.
          Every week your agent doesn't exist is a week of compounding that hasn't started yet.
        </p>
        <p className="text-white/30 text-base mb-12 max-w-lg mx-auto">
          Operaxon deploys in 72 hours. By day 4, your morning brief is waiting.
        </p>
        <a
          href="/apply"
          className="inline-block bg-[#6366f1] hover:bg-[#5254cc] text-white font-semibold px-12 py-5 rounded-lg text-xl transition-colors mb-6"
        >
          Apply for a Spot →
        </a>
        <p className="text-white/25 text-sm mb-2">
          Solo Operator: $497 setup + $497/mo &nbsp;·&nbsp; Team OS: $997 setup + $997/mo &nbsp;·&nbsp; Enterprise: Let's talk
        </p>
        <p className="text-white/20 text-sm">
          Questions?{" "}
          <a href="mailto:brandon@operaxon.com" className="text-white/40 hover:text-white/60 transition-colors underline underline-offset-2">
            brandon@operaxon.com
          </a>
        </p>
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
            <img src="/logo.svg" alt="Operaxon" style={{ height: "36px", width: "auto", marginBottom: "8px" }} />
            <p className="text-white/30 text-sm">Autonomous Operating Intelligence</p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-white/45">
            <a href="/apply" className="hover:text-white transition-colors">Apply</a>
            <a href="#the-difference" className="hover:text-white transition-colors">The Difference</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#story" className="hover:text-white transition-colors">Our Story</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="mailto:brandon@operaxon.com" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-white/25">
          <p>© 2026 Operaxon / Sandoval Solutions LLC. All rights reserved.</p>
          <a href="mailto:brandon@operaxon.com" className="hover:text-white/50 transition-colors text-white/35">
            brandon@operaxon.com
          </a>
        </div>
      </div>
    </footer>
  );
}
