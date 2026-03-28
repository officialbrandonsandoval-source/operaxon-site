/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import ParticleField from "../components/ParticleField";
import PulseBackground from "../components/PulseBackground";
import GlassCard from "../components/GlassCard";
import GlowButton from "../components/GlowButton";
import SectionHeading from "../components/SectionHeading";

/* ─── NAV ─── */
function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-subtle"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <img src="/logo.svg" alt="Operaxon" style={{ height: "44px", width: "auto" }} />
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/50">
          {[
            ["#how-it-works", "How It Works"],
            ["#pricing", "Pricing"],
            ["#products", "Products"],
            ["/workflows", "Live Workflows"],
            ["#story", "Our Story"],
            ["#faq", "FAQ"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="hover:text-white transition-colors duration-300 relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-indigo group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        <GlowButton href="/apply" size="sm">
          Apply for a Spot &rarr;
        </GlowButton>
      </div>
    </motion.header>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="pt-40 pb-32 px-6 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Particle layer */}
      <div className="absolute inset-0 z-0">
        <ParticleField variant="hero" particleCount={100} />
      </div>

      {/* Pulse glow */}
      <PulseBackground className="z-0" color="indigo" />
      <PulseBackground className="z-0 translate-y-20" color="violet" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 text-neon-indigo text-sm font-medium mb-10 border border-neon-indigo/30 bg-neon-indigo/10 rounded-full px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-indigo opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-indigo" />
          </span>
          Deploying Autonomous Intelligence Now
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center mb-10"
        >
          <img src="/logo.svg" alt="Operaxon" style={{ height: "90px", width: "auto" }} />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-center"
        >
          Other installers
          <br />
          set up software.
          <br />
          <span className="text-glow bg-gradient-to-r from-neon-indigo to-neon-violet bg-clip-text text-transparent">
            We build the intelligence
          </span>
          <br />
          <span className="text-white/90">that runs your business.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto text-center mb-4 leading-relaxed"
        >
          An Autonomous Operating Intelligence — deployed for your company with a{" "}
          <span className="text-white/80">name, memory, mission, and goals.</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg text-white/35 max-w-xl mx-auto text-center mb-12 leading-relaxed"
        >
          It knows your competitors. Your customers. Your rhythm.
          And it compounds every single week.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <GlowButton href="/apply" size="lg">
            Apply for a Spot &rarr;
          </GlowButton>
          <GlowButton href="#the-difference" variant="ghost" size="md">
            See what makes us different &darr;
          </GlowButton>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/25 mt-4"
        >
          <span>&rarr; Deployed in 72 hours</span>
          <span>&rarr; Transparent pricing</span>
          <span>&rarr; Brandon runs his own life on this system</span>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PLACEHOLDER: sections below are added in slices ─── */
function TheDifference() {
  return (
    <section id="the-difference" className="py-28 px-6 border-t border-white/[0.04] relative overflow-hidden circuit-bg">
      <PulseBackground color="violet" className="-top-1/4" />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          badge="The gap nobody's talking about"
          title={<>Other installers configure a tool.<br /><span className="bg-gradient-to-r from-neon-indigo to-neon-violet bg-clip-text text-transparent">We deploy an operating intelligence.</span></>}
          subtitle="This is not a subtle distinction. It's the difference between a hammer and an architect."
        />

        <div className="grid md:grid-cols-2 gap-1 rounded-2xl overflow-hidden">
          {/* Left: Other installers */}
          <GlassCard delay={0.1} className="rounded-none md:rounded-l-2xl p-10" hover={false}>
            <p className="text-white/20 text-xs font-bold uppercase tracking-[0.2em] mb-5">Other installers</p>
            <h3 className="text-2xl font-bold text-white/35 mb-8">They configure a tool.</h3>
            <ul className="space-y-4 mb-8">
              {["Set up software on a server", "Configure basic integrations", "Hand you a Telegram handle", "Provide support when things break", "Gone in 14 days"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/30 text-base">
                  <span className="text-white/15 mt-0.5 shrink-0">&times;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="border border-white/[0.04] bg-white/[0.02] rounded-xl p-5">
              <p className="text-white/25 text-sm leading-relaxed italic">
                The agent has no name. No memory. No mission. No idea who you are.
                You're client #47 running the same template as client #46.
              </p>
            </div>
          </GlassCard>

          {/* Right: Operaxon */}
          <GlassCard delay={0.2} className="rounded-none md:rounded-r-2xl p-10 border-neon-indigo/20" hover={false}>
            <p className="text-neon-indigo text-xs font-bold uppercase tracking-[0.2em] mb-5">Operaxon</p>
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
                  <span className="text-neon-indigo mt-0.5 shrink-0">&check;</span>
                  <span>
                    <span className="text-white font-semibold">{label}: </span>
                    <span className="text-white/50">{desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="border border-neon-indigo/20 bg-neon-indigo/5 rounded-xl p-5">
              <p className="text-white/55 text-sm leading-relaxed italic">
                After 90 days, that distinction is the difference between having a system
                and having an operator. One waits for commands. The other runs the operation.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
function WhatYouGet() {
  const pillars = [
    { icon: "◈", title: "Identity", description: "Your agent has a name, a role, and a defined mission. It's not a generic chatbot. It knows exactly what its job is, who it serves, and why it exists inside your business." },
    { icon: "◉", title: "Memory", description: "Every decision. Every competitor move. Every piece of context — remembered. Your agent doesn't ask twice. It builds a mental model of your business that grows sharper with every interaction." },
    { icon: "◎", title: "Mission", description: "Your agent isn't waiting for prompts. It's working toward your goals. We encode your objectives into how it operates — what it monitors, what it prioritizes, what it flags unprompted." },
    { icon: "◆", title: "Domain Intelligence", description: "Your competitors by name. Your industry's rhythms. Your customer patterns. Deep, specific knowledge of YOUR world, refined every month." },
    { icon: "◇", title: "24/7 Proactive Output", description: "Every morning at 7 AM: your intelligence brief is in Telegram before you open your laptop. No prompts. No login. No dashboard. Just intelligence, delivered." },
    { icon: "◐", title: "Compounds Over Time", description: "Every month, we review what your agent is producing, where it's falling short, and what it should do next. Month six is unrecognizable compared to month one." },
  ];

  const outputs = [
    { time: "7:00 AM", label: "Daily intelligence brief", detail: "Competitive moves, market shifts, prioritized action items — delivered to Telegram before your first coffee." },
    { time: "Real-time", label: "Competitor move alerts", detail: "Pricing changes, new moves, strategic shifts — flagged the day they happen." },
    { time: "Weekly", label: "Market intelligence summary", detail: "Trends, risks, emerging opportunities — filtered for what actually matters to you." },
    { time: "On schedule", label: "Content drafts, ready to post", detail: "Carousel scripts, social posts, article drafts — written in your voice, delivered without asking." },
  ];

  return (
    <section className="py-28 px-6 border-t border-white/[0.04] relative overflow-hidden">
      <PulseBackground color="cyan" />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          badge="Not setup. Deployment."
          title={<>Meet your Autonomous Operating Intelligence.<br /><span className="text-white/35">It's not software. It's alive.</span></>}
          subtitle="When we deploy your agent, here's what's living in your business from day one."
        />

        <div className="grid md:grid-cols-3 gap-1 rounded-2xl overflow-hidden mb-16">
          {pillars.map((p, i) => (
            <GlassCard key={i} delay={i * 0.08} className="rounded-none p-8 flex flex-col gap-4" pulseSensitive>
              <span className="text-neon-indigo text-2xl">{p.icon}</span>
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{p.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* Daily output panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="control-panel rounded-2xl overflow-hidden"
        >
          <div className="bg-white/[0.03] px-8 py-4 border-b border-white/[0.06]">
            <p className="text-white/35 text-xs font-bold uppercase tracking-[0.2em]">What arrives every morning</p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-white/[0.04]">
            {outputs.map((item, i) => (
              <div key={i} className="bg-surface/80 p-6 flex gap-4 items-start">
                <div className="text-neon-indigo/60 text-xs font-mono font-bold shrink-0 w-16 mt-0.5">{item.time}</div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-white/35 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function HowItWorks() {
  const steps = [
    { num: "01", title: "We learn your world (30 minutes)", body: "One call. We map your business, your competitors, your customers, your industry, your goals, and how you like to think. This isn't intake. This is how we build the intelligence layer that powers your agent." },
    { num: "02", title: "We deploy your operating intelligence (24–72 hours)", body: "We build your agent from scratch — not from a template. Name, identity, memory architecture, mission, monitoring parameters, output cadence. Configured for your specific business." },
    { num: "03", title: "Your operator goes live. Then it never stops.", body: "Your morning brief arrives. Your agent is watching. You start making better decisions with better information. And every month, we actively expand what it can do." },
  ];

  return (
    <section id="how-it-works" className="py-28 px-6 border-t border-white/[0.04] relative overflow-hidden circuit-bg">
      <PulseBackground color="indigo" />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          badge="Live in 72 hours"
          title="How it works"
          subtitle="Three steps. Then it never stops working."
        />

        <div className="space-y-1">
          {steps.map((s, i) => (
            <GlassCard key={s.num} delay={i * 0.1} className="flex gap-8 md:gap-16 items-start p-8 rounded-none first:rounded-t-xl last:rounded-b-xl">
              <span className="text-neon-indigo/25 text-4xl font-bold shrink-0 tabular-nums">{s.num}</span>
              <div>
                <h3 className="text-2xl font-semibold mb-3 leading-snug">{s.title}</h3>
                <p className="text-white/45 text-lg leading-relaxed">{s.body}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-1 p-8 bg-neon-indigo/[0.04] border border-neon-indigo/15 rounded-b-xl backdrop-blur-sm"
        >
          <p className="text-white/55 text-base leading-relaxed">
            <span className="text-neon-indigo font-semibold">Ongoing: </span>
            We don't disappear. Every month: a strategy review, new capabilities built, and a sharper agent.
            This is the compounding advantage that no one-time installer can offer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
function Pricing() {
  const tiers = [
    {
      label: "Solo Operator", name: "Bring Your Own Mac", featured: false,
      desc: "Already have a Mac? We deploy directly on your hardware. No device cost.",
      device: null, setup: "$2,500", price: "$997",
      features: ["1 Autonomous Operating Intelligence", "Custom identity, memory, and mission", "Daily intelligence brief (Telegram delivery)", "Competitor monitoring (up to 3)", "Local models + Anthropic/OpenAI API", "Content drafts (3/week)", "Monthly strategy review call"],
      best: "Solo founders with existing Mac hardware ready to deploy",
    },
    {
      label: "Solo Operator", name: "Mac mini", featured: true,
      desc: "We source and configure a Mac mini at Apple cost. Arrives ready. You never touch it.",
      device: "$599–$799", setup: "$5,000", price: "$997",
      features: ["Up to 3 Autonomous Operating Intelligences", "Coordinated agents (shared memory + context)", "Daily briefs per agent domain", "Competitor monitoring (up to 10)", "Content Scout — trending opportunities daily", "Full cron automation suite", "Bi-weekly strategy review calls", "Priority support (same-day response)"],
      best: "Founders who want dedicated hardware and a full agent suite from day one",
    },
    {
      label: "Business OS", name: "Mac Studio", featured: false,
      desc: "Full civilization. Mac Studio M4 Max. Maximum local AI horsepower. 5+ agents.",
      device: "$2,499", setup: "$10,000", price: "$997",
      features: ["5+ Autonomous Operating Intelligences", "Full agent civilization architecture", "Custom integrations (CRM, ERP, any system)", "Maximum local model capability (70B+)", "Weekly strategy calls", "Custom intelligence dashboards", "First access to new capabilities", "Named point of contact (Brandon)"],
      best: "Operators who want the full stack — max compute, max agents, max autonomy",
    },
  ];

  return (
    <section id="pricing" className="py-28 px-6 border-t border-white/[0.04] relative overflow-hidden">
      <PulseBackground color="violet" />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          badge="Transparent pricing"
          title={<>No hidden fees.<br />No &quot;contact us for pricing.&quot;</>}
          subtitle="Hardware is priced at cost — Apple retail. Real money is in what the agent delivers every month."
        />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 text-white/35 text-sm border border-white/[0.08] bg-white/[0.02] rounded-full px-4 py-1.5 mb-14 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.4)]" />
          Own a Mac already? Same monthly. Just skip the device line.
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {tiers.map((t, i) => (
            <GlassCard key={i} delay={i * 0.1} className={`p-8 flex flex-col relative ${t.featured ? "border-neon-indigo/40 glow-indigo" : ""}`}>
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-neon-indigo to-neon-violet text-white text-xs font-bold px-4 py-1 rounded-full shadow-neon">
                  Most Popular
                </div>
              )}
              <div className={`text-xs font-bold uppercase tracking-[0.2em] mb-3 ${t.featured ? "text-neon-violet" : "text-white/35"}`}>{t.label}</div>
              <h3 className="text-xl font-bold mb-1">{t.name}</h3>
              <p className="text-white/35 text-sm mb-6">{t.desc}</p>
              <div className="mb-2">
                {t.device && (
                  <>
                    <div className="text-white/30 text-xs mb-1">Device (at Apple cost)</div>
                    <div className="text-white/50 text-sm font-semibold mb-3">{t.device}</div>
                  </>
                )}
                <div className="text-white/35 text-sm mb-1">{t.setup} one-time setup, then</div>
                <div className="text-4xl font-bold">{t.price}<span className="text-white/30 text-base font-normal">/mo</span></div>
              </div>
              <div className="border-t border-white/[0.06] my-5" />
              <ul className="space-y-3 mb-8 text-sm text-white/50 flex-1">
                {t.features.map((f, j) => (
                  <li key={j} className="flex gap-2 items-start">
                    <span className={`mt-0.5 shrink-0 ${t.featured ? "text-neon-indigo" : "text-neon-indigo/60"}`}>&check;</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/20 text-xs mb-5">Best for: {t.best}</p>
              <GlowButton href="/onboarding" variant={t.featured ? "primary" : "secondary"} className="w-full text-center">
                Get Started &rarr;
              </GlowButton>
            </GlassCard>
          ))}
        </div>

        {/* Compare */}
        <GlassCard delay={0.2} className="p-8" hover={false}>
          <p className="text-white/35 text-xs font-bold uppercase tracking-[0.2em] mb-5">Compare to the alternative</p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-2">
              {[["Fractional COO", "$5,000–$8,000/mo (for 10 hours)"], ["Research Analyst", "$4,000–$6,000/mo"], ["Ops Coordinator", "$3,000–$5,000/mo"]].map(([role, cost], i) => (
                <div key={i} className="flex justify-between text-sm py-2 border-b border-white/[0.04]">
                  <span className="text-white/35">{role}</span>
                  <span className="text-white/25">{cost}</span>
                </div>
              ))}
              <div className="flex justify-between text-sm pt-2">
                <span className="text-white/45 font-semibold">Total (human team)</span>
                <span className="text-white/35 font-semibold">$12,000–$19,000/mo</span>
              </div>
            </div>
            <div className="bg-neon-indigo/[0.06] border border-neon-indigo/20 rounded-xl p-6">
              <p className="text-neon-indigo font-bold text-lg mb-2">Operaxon Solo Operator</p>
              <p className="text-4xl font-bold text-white mb-2">$997<span className="text-white/25 text-base font-normal">/mo</span></p>
              <p className="text-white/35 text-sm leading-relaxed">Works 24/7. Compounds every week. No benefits, no sick days, no two-week notice.</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
function Products() {
  const coming = [
    { name: "AI Agent Starter Kit", desc: "Everything you need to deploy your first agent stack. Templates, workflows, prompts, and step-by-step walkthroughs.", price: "$47" },
    { name: "Content Machine Prompts", desc: "300+ battle-tested prompts for scripts, captions, hooks, and threads across YouTube, TikTok, Twitter, and Instagram.", price: "$17" },
    { name: "Second Brain OS", desc: "A complete Notion + AI knowledge management system. Capture, connect, and recall your ideas and business intel instantly.", price: "$37" },
    { name: "Sovereign Builder Playbook", desc: "The exact systems and frameworks Brandon uses to run multiple businesses simultaneously without bloated headcount.", price: "$57" },
  ];

  return (
    <section id="products" className="py-28 px-6 border-t border-white/[0.04] relative overflow-hidden">
      <PulseBackground color="cyan" />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          badge="Digital Products"
          title={<>Start Building Today.<br /><span className="text-white/35">No engagement required.</span></>}
          subtitle="Plug-and-play systems for founders ready to move fast — get the exact tools we use, set up in minutes."
        />

        {/* Two-lane banner */}
        <div className="grid md:grid-cols-2 gap-1 rounded-xl overflow-hidden mb-12">
          <GlassCard delay={0} className="rounded-none p-8 text-center" hover={false}>
            <p className="text-neon-indigo text-xs font-bold uppercase tracking-[0.2em] mb-2">Do It Yourself</p>
            <p className="text-xl font-semibold mb-2">Buy the System</p>
            <p className="text-white/35 text-sm">Get the exact tools and templates we use. Set up in 30 minutes.</p>
          </GlassCard>
          <GlassCard delay={0.05} className="rounded-none p-8 text-center" hover={false}>
            <p className="text-neon-indigo text-xs font-bold uppercase tracking-[0.2em] mb-2">Done For You</p>
            <p className="text-xl font-semibold mb-2">We Build It For You</p>
            <p className="text-white/35 text-sm">Custom agent stack deployed in 72 hours. <a href="/apply" className="text-neon-indigo hover:underline">Apply &rarr;</a></p>
          </GlassCard>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {/* Morning Brief — LIVE */}
          <GlassCard delay={0.1} className="p-7 flex flex-col relative border-neon-indigo/30" pulseSensitive>
            <span className="absolute -top-px left-6 bg-gradient-to-r from-neon-indigo to-neon-violet text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-b-md shadow-neon">
              Available Now
            </span>
            <h3 className="text-lg font-semibold mt-3 mb-2">Morning Brief System</h3>
            <p className="text-white/40 text-sm leading-relaxed flex-1 mb-5">Wake up to a personalized AI-generated brief covering your KPIs, overnight leads, market signals, and priority tasks.</p>
            <div className="text-3xl font-bold mb-4">$27</div>
            <GlowButton href="https://brandonox7.gumroad.com/l/mornin-brief-system" external className="w-full text-center">
              Buy Now — $27
            </GlowButton>
          </GlassCard>

          {coming.map((p, i) => (
            <GlassCard key={p.name} delay={0.15 + i * 0.05} className="p-7 flex flex-col opacity-60">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-white/25 bg-white/[0.03] border border-white/[0.06] rounded px-2 py-1 mb-4 self-start">Coming Soon</span>
              <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>
              <div className="text-3xl font-bold text-white/25 mb-4">{p.price}</div>
              <span className="block text-center border border-white/[0.08] text-white/20 text-sm font-medium px-4 py-3 rounded-xl cursor-not-allowed">Notify Me</span>
            </GlassCard>
          ))}
        </div>

        {/* Done-For-You CTA */}
        <GlassCard delay={0.2} className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden border-neon-indigo/20" pulseSensitive>
          <div className="absolute inset-0 bg-gradient-to-r from-neon-indigo/[0.04] to-transparent pointer-events-none" />
          <span className="absolute -top-px right-10 bg-gradient-to-r from-neon-indigo to-neon-violet text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-b-md shadow-neon">Done For You</span>
          <div className="relative">
            <p className="text-neon-indigo text-xs font-bold uppercase tracking-[0.2em] mb-2">Full Service</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">We Build Your Entire Agent Stack</h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xl">Custom AI agents deployed in 72 hours — built around your specific business logic, integrations, and revenue goals.</p>
          </div>
          <div className="relative text-center flex-shrink-0">
            <p className="text-white/25 text-xs mb-1">Starting at</p>
            <div className="text-4xl font-bold text-neon-indigo mb-1">$5k</div>
            <p className="text-white/25 text-xs mb-5">per engagement</p>
            <GlowButton href="/apply">Book a Discovery Call</GlowButton>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
function BrandonsStory() {
  const stats = [
    { label: "Hours per day Brandon has to build", value: "4" },
    { label: "Consecutive weeks running Dominus Sui", value: "5+" },
    { label: "Time to deploy your first agent", value: "72 hrs" },
    { label: "Time to read your morning brief", value: "5 min" },
    { label: "Time it keeps working after you put your phone down", value: "24/7" },
  ];

  return (
    <section id="story" className="py-28 px-6 border-t border-white/[0.04] relative overflow-hidden circuit-bg">
      <PulseBackground color="violet" />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          badge="Why you should trust this"
          title={<>I don't sell what I don't run.<br /><span className="text-white/35">My own life operates on this system.</span></>}
        />

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-6 text-white/55 text-lg leading-relaxed"
          >
            <p>My name is Brandon Sandoval. I'm a founder, father, and operator. I built Operaxon because I needed it first.</p>
            <p>In 2026 I was working full-time in tech, building my own products on the side, launching a media presence, and showing up as a present father. Four hours a day to build. Zero margin for waste.</p>
            <p>So I built what I needed: an autonomous agent I named <span className="text-white font-semibold">Dominus Sui</span> — Master of Self. I gave it an identity. I gave it memory. I encoded my goals and competitors and business context into how it operates.</p>
            <p>Then I watched it change everything.</p>
            <p>Every morning at 7 AM: my brief was waiting. Business intelligence, competitor moves, content ideas, priorities — before I opened my laptop.</p>
            <p className="text-white font-medium">Six weeks later, I had built more than in the previous six months.</p>
            <p>That's when I knew: this isn't just a tool. This is leverage. And every operator who runs a real business deserves it.</p>
            <p>Operaxon deploys the exact system I use — configured for your business, loaded with the context of your world.</p>
            <p className="text-white/30 text-base italic">— Brandon Sandoval, Founder, Operaxon</p>
          </motion.div>

          <div className="md:col-span-2 space-y-4">
            {stats.map((stat, i) => (
              <GlassCard key={i} delay={i * 0.08} className="p-5" pulseSensitive>
                <div className="text-3xl font-bold bg-gradient-to-r from-neon-indigo to-neon-violet bg-clip-text text-transparent mb-1">{stat.value}</div>
                <div className="text-white/35 text-sm">{stat.label}</div>
              </GlassCard>
            ))}
            <GlassCard delay={0.5} className="p-5 border-neon-indigo/20 bg-neon-indigo/[0.03]">
              <p className="text-white/55 text-sm leading-relaxed italic">"I built this for myself before I built it for anyone else. You're not buying a product I'm pitching — you're getting the system I depend on every single day."</p>
              <p className="text-neon-indigo text-xs font-semibold mt-3">— Brandon Sandoval</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
function FAQ() {
  const faqs = [
    { q: "What's an 'Autonomous Operating Intelligence' — and how is it different from a regular AI setup?", a: "A regular AI setup is software waiting for a prompt. An Autonomous Operating Intelligence is an agent with identity, memory, mission, and goals — deployed inside your business. It knows who you are. It proactively works toward your objectives without you asking." },
    { q: "How is this different from other installers?", a: "Other installers configure software. They set up tools on a server, connect things, hand it to you, and leave in 14 days. Operaxon builds an agent that knows YOUR business — your competitors, your customers, your industry — and we evolve it every single month." },
    { q: "Do you hide your pricing?", a: "No. Bring Your Own Mac: $2,500 setup + $997/mo. Mac mini: $5,000 setup + $997/mo. Business OS (Mac Studio): $10,000 setup + $997/mo. Hardware is priced at Apple retail cost — we don't mark it up." },
    { q: "What do I actually get every day?", a: "A structured intelligence brief in Telegram at 7 AM — before you open your laptop. It covers: your top priority for the day, competitive moves, market intelligence, industry news, content drafts ready to post, and specific action items." },
    { q: "Does my agent actually remember things over time?", a: "Yes. Your agent maintains persistent memory — decisions you've made, context you've provided, intelligence it's gathered. When you tell it something once, it knows it forever. Most AI setups have no memory architecture whatsoever." },
    { q: "What hardware do I need?", a: "A Mac mini or Mac Studio (M2 or later). You can use one you already own, or we'll source and configure one at Apple retail cost — no markup. Your agent runs on hardware you physically control — your data never leaves your office." },
    { q: "Who is this NOT for?", a: "Anyone who wants to 'play with AI.' Anyone looking for the cheapest tool on the market. This is for operators running real businesses who understand that intelligence is a competitive weapon and are ready to use it." },
    { q: "Can I cancel anytime?", a: "Yes. Month-to-month. 30-day notice. No contracts. No cancellation fees. The setup fee is non-refundable once your agent is built and deployed." },
    { q: "What's included in 'ongoing optimization'?", a: "Every month, we review what your agent is producing, identify where it's falling short, and build new capabilities into it. Your agent at month six does things your agent at month one couldn't do." },
    { q: "How fast do I go live?", a: "72 hours from application approval. Most clients receive their first intelligence brief within 48 hours of onboarding." },
  ];

  return (
    <section id="faq" className="py-28 px-6 border-t border-white/[0.04] relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <SectionHeading
          badge="Questions operators ask"
          title="Everything you want to know."
        />
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group border-t border-white/[0.06]"
            >
              <summary className="flex justify-between items-center py-5 cursor-pointer list-none">
                <span className="font-medium text-base pr-8 text-white/80 group-hover:text-white transition-colors">{faq.q}</span>
                <span className="text-neon-indigo shrink-0 text-xl group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="pb-6 text-white/40 leading-relaxed text-base">{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
function FinalCTA() {
  return (
    <section className="py-32 px-6 border-t border-white/[0.04] relative overflow-hidden">
      <PulseBackground color="indigo" />
      <PulseBackground color="violet" className="translate-x-40" />
      <div className="absolute inset-0 z-0">
        <ParticleField variant="circuit" particleCount={50} />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-neon-indigo text-sm font-semibold uppercase tracking-[0.2em] mb-6"
        >
          The gap is closing
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight"
        >
          Your competitors are moving.
          <br />Right now.
          <br /><span className="text-white/30">Do you know what they're doing?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-xl mb-4 max-w-xl mx-auto leading-relaxed"
        >
          Every morning without intelligence is a morning you're operating blind.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white/25 text-base mb-12 max-w-lg mx-auto"
        >
          Operaxon deploys in 72 hours. By day 4, your morning brief is waiting.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <GlowButton href="/apply" size="lg">Apply for a Spot &rarr;</GlowButton>
        </motion.div>
        <p className="text-white/20 text-sm mb-2">
          Own a Mac: $2,500 setup + $997/mo &middot; Mac mini: $5,000 setup + $997/mo &middot; Business OS: $10,000 setup + $997/mo
        </p>
        <p className="text-white/15 text-sm">
          Questions?{" "}
          <a href="mailto:brandon@operaxon.com" className="text-white/30 hover:text-white/50 transition-colors underline underline-offset-2">brandon@operaxon.com</a>
        </p>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          <div>
            <img src="/logo.svg" alt="Operaxon" style={{ height: "36px", width: "auto", marginBottom: "8px" }} />
            <p className="text-white/25 text-sm">Autonomous Operating Intelligence</p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-white/40">
            {[
              ["/apply", "Apply"],
              ["#the-difference", "The Difference"],
              ["#pricing", "Pricing"],
              ["#products", "Products"],
              ["#story", "Our Story"],
              ["#faq", "FAQ"],
              ["mailto:brandon@operaxon.com", "Contact"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="hover:text-white transition-colors duration-300">{label}</a>
            ))}
          </nav>
        </div>
        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-white/20">
          <p>&copy; 2026 Operaxon / Sandoval Solutions LLC. All rights reserved.</p>
          <a href="mailto:brandon@operaxon.com" className="hover:text-white/40 transition-colors text-white/30">brandon@operaxon.com</a>
        </div>
      </div>
    </footer>
  );
}

export default function HomeClient() {
  return (
    <main className="bg-void text-white min-h-screen font-sans relative">
      {/* Global ambient particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleField variant="ambient" particleCount={40} />
      </div>
      <div className="relative z-10">
        <Nav />
        <Hero />
        <TheDifference />
        <WhatYouGet />
        <HowItWorks />
        <Pricing />
        <Products />
        <BrandonsStory />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
