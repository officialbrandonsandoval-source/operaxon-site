/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operaxon — Your business, operated by AI.",
  description:
    "A dedicated AI operator — running 24/7 on hardware you own — that delivers daily intelligence, competitive monitoring, and content directly to your phone.",
};

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <WhatYouGet />
      <SocialProof />
      <Pricing />
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
        <img src="/logo.svg" alt="Operaxon" style={{ height: '44px', width: 'auto' }} />
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <a
          href="mailto:hello@operaxon.com"
          className="bg-[#6366f1] hover:bg-[#5254cc] text-white text-sm font-medium px-4 py-2 rounded transition-colors"
        >
          Book a Demo
        </a>
      </div>
    </header>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="pt-40 pb-28 px-6 relative overflow-hidden">
      {/* Large star glyph watermark — centered behind hero text */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <svg
          viewBox="-300 -300 600 600"
          style={{ width: '680px', height: '680px', opacity: 0.09, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -54%)' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="wmHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="1"/>
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
            </radialGradient>
            <filter id="wmGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="18" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Halo */}
          <ellipse cx="0" cy="0" rx="200" ry="180" fill="url(#wmHalo)"/>
          {/* 4-pointed star */}
          <g filter="url(#wmGlow)">
            <path
              d="M 0,-240 L 28,-32 L 160,0 L 28,32 L 0,148 L -28,32 L -160,0 L -28,-32 Z"
              fill="white"
            />
            {/* secondary top spike */}
            <path d="M 0,-240 L 10,-300 L 0,-370 L -10,-300 Z" fill="white" opacity="0.6"/>
            <circle cx="0" cy="0" r="22" fill="white"/>
          </g>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 text-[#6366f1] text-sm font-medium mb-8 border border-[#6366f1]/30 bg-[#6366f1]/10 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse"></span>
          Now deploying
        </div>
        <div className="flex justify-center mb-10">
          <img src="/logo.svg" alt="Operaxon" style={{ height: '90px', width: 'auto' }} />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-8">
          Your business,<br />
          <span className="text-[#6366f1]">operated by AI.</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed">
          A dedicated AI operator — running 24/7 on hardware you own — that delivers daily intelligence, competitive monitoring, and content directly to your phone. No software to learn. No dashboards to check. Just decisions, delivered.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="mailto:hello@operaxon.com"
            className="bg-[#6366f1] hover:bg-[#5254cc] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Book a Demo →
          </a>
          <a href="#how-it-works" className="text-white/60 hover:text-white text-lg transition-colors">
            See how it works ↓
          </a>
        </div>
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
      body: "Competitor changed their pricing? You'll find out next week. Market shifted? You'll notice when revenue dips. New opportunity emerged? Someone else got there first. You don't have anyone whose job is to watch everything, every day.",
    },
    {
      heading: "AI tools promised to help. They didn't.",
      body: "You tried ChatGPT. Cool for a day, then you forgot about it. You signed up for 3 AI tools — now they're tabs you never open. The problem was never access to AI. It's that nobody configured it, maintained it, or made it actually work for your business.",
    },
  ];

  return (
    <section className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-6">
          The operator's problem
        </p>
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {problems.map((p, i) => (
            <div key={i} className="bg-[#0a0a0a] p-8">
              <div className="text-[#6366f1] text-3xl font-bold mb-4 opacity-30">
                {String(i + 1).padStart(2, "0")}
              </div>
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
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-6">
            Meet your AI operator.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
            A dedicated operator.<br />Running for you.
          </h2>
        </div>
        <div className="space-y-6 text-white/60 text-lg leading-relaxed">
          <p>
            Operaxon deploys a dedicated AI agent on a Mac mini — yours, in your office — configured specifically for your business. It monitors your competitors, tracks your market, drafts your content, and delivers a structured intelligence brief to your phone every morning.
          </p>
          <p className="text-white font-medium">
            You don't log in. You don't prompt it. You don't manage it.
          </p>
          <p>
            You just read the brief and make better decisions.
          </p>
          <p>
            We handle everything: setup, configuration, monitoring, optimization. Your AI operator gets smarter every week because we're actively managing it. This isn't a tool you buy and forget — it's a managed service that runs your intelligence layer.
          </p>
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
      title: "We learn your business.",
      body: "A 30-minute call. We learn who your competitors are, what you need to monitor, and how you like information delivered. That's all we need.",
    },
    {
      num: "02",
      title: "We build your operator.",
      body: "We configure your AI agent, set up your Mac mini (or ship you one), and tune everything until the output is exactly what you need. You do nothing.",
    },
    {
      num: "03",
      title: "Intelligence, delivered.",
      body: "Every morning, your brief arrives in Telegram. Competitive moves. Market shifts. Content drafts. Action items. Read it in 5 minutes. Act on it all day.",
    },
  ];

  return (
    <section id="how-it-works" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-4">
            Live in 5 days. Three steps.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How it works</h2>
        </div>
        <div className="space-y-px">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex gap-8 md:gap-16 items-start p-8 bg-[#0f0f0f] border border-white/5 hover:border-[#6366f1]/30 transition-colors"
            >
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
    {
      title: "Daily Intelligence Brief",
      body: "Competitive moves, market shifts, industry news, and prioritized action items — delivered to your phone by 7 AM. Every single day.",
    },
    {
      title: "Competitive Monitoring",
      body: "Your competitors watched 24/7. Pricing changes, new listings, marketing shifts, strategic moves — caught and reported the day they happen.",
    },
    {
      title: "Content Drafts",
      body: "Social media posts, article drafts, and content ideas — written in your voice, delivered on schedule, ready to edit and post.",
    },
    {
      title: "Market Intelligence",
      body: "Industry trends, regulatory changes, market data, and emerging opportunities — filtered for relevance to your business.",
    },
    {
      title: "Dedicated Hardware",
      body: "Your AI runs on a Mac mini you own. Your data never leaves your office. No shared servers. No cloud dependencies. It's yours.",
    },
    {
      title: "Managed Service",
      body: "We configure, deploy, monitor, and optimize. You don't touch the tech. If something needs adjusting, we handle it — often before you even notice.",
    },
  ];

  return (
    <section className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-4">
            Not features. Deliverables.
          </p>
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

/* ─── SOCIAL PROOF ─── */
function SocialProof() {
  const testimonials = [
    "[TESTIMONIAL 1 — e.g., 'I used to spend 2 hours every morning just getting up to speed. Now it takes 5 minutes. The brief is waiting when I wake up.' — [NAME], [TITLE], [COMPANY]]",
    "[TESTIMONIAL 2 — e.g., 'We caught a competitor's pricing shift the day it happened and adjusted before our customers even noticed. That alone paid for 6 months.' — [NAME], [TITLE], [COMPANY]]",
    "[TESTIMONIAL 3 — e.g., 'I've tried every AI tool. This is the first one that actually stuck — because I don't have to do anything. It just shows up.' — [NAME], [TITLE], [COMPANY]]",
  ];

  return (
    <section className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-4">
            Operators trust operators.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What they say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-white/10 p-8 text-white/40 italic leading-relaxed text-sm"
            >
              &ldquo;{t}&rdquo;
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ─── */
interface PricingPlan {
  name: string;
  price: string;
  setup: string;
  features: string[];
  bestFor: string;
  highlight?: boolean;
}

function Pricing() {
  const plans: PricingPlan[] = [
    {
      name: "Dealership AI OS",
      price: "$997",
      setup: "$500 setup fee",
      bestFor: "Franchise dealership GMs and COOs",
      features: [
        "Daily intelligence brief (competitive pricing, market moves, OEM updates)",
        "5 competitors monitored daily",
        "3 social media posts per week",
        "Weekly competitive report",
        "Email support (24hr response)",
        "Monthly optimization call",
      ],
    },
    {
      name: "Operator",
      price: "$1,500",
      setup: "$750 setup fee",
      bestFor: "Entrepreneurs and operators ($500K–$10M revenue)",
      highlight: true,
      features: [
        "Everything in Dealership AI OS",
        "Up to 5 competitors + 3 industry topics",
        "5 social posts + 1 long-form draft per week",
        "Bi-weekly strategy calls",
        "12-hour support response time",
        "Monthly market landscape report",
      ],
    },
    {
      name: "Operator Pro",
      price: "$2,500",
      setup: "$750 setup fee",
      bestFor: "Executives running $5M+ businesses",
      features: [
        "Everything in Operator",
        "Up to 15 competitors + 10 topics",
        "7 social posts + 2 long-form drafts per week",
        "Weekly strategy calls",
        "4-hour priority support",
        "Board-ready monthly intelligence reports",
        "Quarterly business review",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-4">
            Simple pricing. No contracts.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Pricing</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 border flex flex-col ${
                plan.highlight
                  ? "border-[#6366f1] bg-[#6366f1]/5"
                  : "border-white/10 bg-[#0f0f0f]"
              }`}
            >
              {plan.highlight && (
                <div className="text-[#6366f1] text-xs font-semibold uppercase tracking-widest mb-4">
                  Most popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-white/50">/month</span>
              </div>
              <p className="text-white/40 text-sm mb-8">{plan.setup}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/60">
                    <span className="text-[#6366f1] shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-white/30 mb-6">
                <span className="font-medium text-white/50">Best for:</span> {plan.bestFor}
              </p>
              <a
                href="mailto:hello@operaxon.com"
                className={`text-center py-3 text-sm font-semibold rounded transition-colors ${
                  plan.highlight
                    ? "bg-[#6366f1] hover:bg-[#5254cc] text-white"
                    : "border border-white/20 hover:border-white/40 text-white"
                }`}
              >
                Get Started →
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm text-white/40">
          <p>Month-to-month. No long-term contracts. 30-day cancellation.</p>
          <p>Annual option: Pay upfront, get 2 months free.</p>
          <p>Mac mini sourced and pre-configured for $699, or use your own.</p>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const faqs = [
    {
      q: "What exactly do I get every day?",
      a: "A structured intelligence brief delivered to your Telegram by 7 AM. It includes: top priorities for the day, competitive moves, market intelligence, industry news, and specific action items. Think of it as your chief of staff's morning report — except it's never late, never sick, and never misses anything.",
    },
    {
      q: "Do I need to be technical?",
      a: "No. You read a message on your phone. That's it. We handle every aspect of the technology — setup, configuration, monitoring, optimization. If you can read a text message, you can use Operaxon.",
    },
    {
      q: "What hardware do I need?",
      a: "A Mac mini (M2 or later). You can use one you already have, or we'll source and pre-configure one for $699. It sits in your office, stays plugged in, and runs your AI agent 24/7.",
    },
    {
      q: "Where does my data live?",
      a: "On your Mac mini, in your office. We don't store your data on our servers. Your competitive intelligence, business information, and agent configurations live on hardware you physically own and control.",
    },
    {
      q: "What are the API costs?",
      a: "Your AI agent uses Anthropic (Claude) and Brave Search APIs. You create accounts directly with these providers. Typical monthly API costs are $40–120 depending on your package. We help you set up accounts during onboarding.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Month-to-month, 30-day notice. No cancellation fees. No long-term contracts. We keep you because the briefs are valuable, not because of a contract.",
    },
    {
      q: "How is this different from ChatGPT or other AI tools?",
      a: "ChatGPT waits for you to ask it something. Operaxon proactively delivers intelligence every morning without you lifting a finger. It's configured for your specific business, monitors your specific competitors, and runs 24/7 on dedicated hardware. It's the difference between having a search engine and having a chief of staff.",
    },
    {
      q: "What if I want to change what's being monitored?",
      a: "Just tell us. Competitor changes, new topics, different brief format — we adjust within 24 hours. Your agent is continuously optimized.",
    },
    {
      q: "How long does setup take?",
      a: "5 business days from signed agreement to first live brief. Most of that is us configuring and testing. Your time commitment during setup: about 30 minutes total.",
    },
    {
      q: "Do you offer a trial?",
      a: "We don't offer free trials, but we do offer a 30-day satisfaction guarantee. If the briefs aren't making your mornings better after 30 days, we'll refund your first month.",
    },
  ];

  return (
    <section id="faq" className="py-28 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-4">
            Questions operators ask.
          </p>
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
        <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-6">
          Stop guessing. Start operating.
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
          Every morning you wake up<br />without an intelligence brief<br />
          <span className="text-white/40">is a morning your competitors<br />might have the edge.</span>
        </h2>
        <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
          Operaxon is live and deploying now. Setup takes 5 days. The brief shows up on Day 6.
        </p>
        <a
          href="mailto:hello@operaxon.com"
          className="inline-block bg-[#6366f1] hover:bg-[#5254cc] text-white font-semibold px-10 py-5 rounded-lg text-xl transition-colors mb-6"
        >
          Book Your Demo →
        </a>
        <p className="text-white/30 text-sm">
          30-minute call. No pitch deck. We'll show you a real brief and you'll decide if it's worth $33/day to never fly blind again.
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
            <p className="font-semibold text-lg mb-1">Operaxon</p>
            <p className="text-white/40 text-sm">Your business, operated by AI.</p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm text-white/50">
            <a href="mailto:hello@operaxon.com" className="hover:text-white transition-colors">Book a Demo</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-white/30">
          <p>© 2026 Operaxon. All rights reserved.</p>
          <p>
            Email:{" "}
            <a href="mailto:hello@operaxon.com" className="hover:text-white transition-colors text-white/50">
              hello@operaxon.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
