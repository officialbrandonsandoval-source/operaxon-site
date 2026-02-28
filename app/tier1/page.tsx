/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Delivery — Operaxon",
  description:
    "A custom AI operator, delivered to your Telegram, done-for-you. Daily intelligence briefs, competitor monitoring, and market tracking — starting at $997/mo.",
};

export default function Tier1Page() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      <Nav />
      <Hero />
      <FoundingClient />
      <WhatThisIs />
      <WhatYouGet />
      <Pricing />
      <HowItWorks />
      <WhoItsFor />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ─── FOUNDING CLIENT ─── */
function FoundingClient() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="relative border border-[#f59e0b]/40 bg-[#f59e0b]/5 rounded-2xl p-8 text-center overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b]" />
          <div className="inline-block bg-[#f59e0b]/20 border border-[#f59e0b]/40 text-[#fbbf24] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            🔥 Founding Client Offer — 2 of 3 Spots Left
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            30 days free.<br />
            <span className="text-[#fbbf24]">$997/mo locked in forever after.</span>
          </h2>
          <p className="text-white/60 text-lg mb-6 leading-relaxed max-w-xl mx-auto">
            I'm taking on 3 founding clients at no cost for the first 30 days. After that, your rate locks in at $997/mo — grandfathered for life, even when the public price moves to $1,997.
          </p>
          <p className="text-white/40 text-sm mb-8">
            Only ask: an honest testimonial (voice note or video) after your first month.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a
              href="/onboarding"
              className="bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Claim a Founding Spot →
            </a>
          </div>
          <p className="text-white/30 text-xs">
            No credit card required to start · 72-hour delivery · Cancel anytime after trial
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── NAV ─── */
function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/">
          <img src="/logo.svg" alt="Operaxon" style={{ height: "44px", width: "auto" }} />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
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

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="pt-36 pb-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#818cf8] text-xs font-medium px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
          Agent Delivery — No Hardware Required
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          You run your business.
          <br />
          <span className="text-[#6366f1]">Your AI operator runs everything else.</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
          Every morning, before you open your laptop, you already know: what moved in your market,
          what your competitors are doing, and what you should be focused on today.
        </p>
        <p className="text-lg text-white/50 max-w-xl mx-auto mb-10">
          That's what Operaxon builds for you — a custom AI operator, delivered to your Telegram, done-for-you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/onboarding"
            className="bg-[#6366f1] hover:bg-[#5254cc] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get Your Operator →
          </a>
          <a
            href="#how-it-works"
            className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-medium px-8 py-4 rounded-lg transition-colors text-lg"
          >
            See How It Works
          </a>
        </div>
        <p className="text-white/30 text-sm mt-6">$997 setup · $997–$1,997/mo · Live in 72 hours</p>
      </div>
    </section>
  );
}

/* ─── WHAT THIS IS ─── */
function WhatThisIs() {
  const steps = [
    "Fill out a 10-minute intake form at operaxon.com/onboarding",
    "I build a custom AI operator scoped to your business, your market, and your daily workflow",
    "Your operator goes live in your Telegram — zero setup required on your end",
    "Every morning at your preferred time, it delivers an intelligence brief: market news, competitor moves, and the one thing you need to know today",
    "You reply to it when you have questions. It knows your business.",
  ];

  return (
    <section className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Not a chatbot subscription.<br />
          <span className="text-[#6366f1]">Not another SaaS tool. An operator.</span>
        </h2>
        <p className="text-white/50 text-center mb-12 text-lg">Here's exactly what happens when you hire Operaxon:</p>
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-5 items-start bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="w-8 h-8 bg-[#6366f1] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <p className="text-white/80 text-base leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-white/40 mt-10 text-sm">
          No dashboards. No logins. No new software to learn. It's just there, in Telegram, doing its job.
        </p>
      </div>
    </section>
  );
}

/* ─── WHAT YOU GET ─── */
function WhatYouGet() {
  const items = [
    { title: "Custom AI operator", desc: "Purpose-built for your business, not a template" },
    { title: "Daily morning intelligence brief", desc: "Delivered to Telegram at your chosen time" },
    { title: "Competitor monitoring", desc: "Your top competitors watched daily, every relevant move surfaced" },
    { title: "Industry & market tracking", desc: "The topics that matter to your business, not generic news" },
    { title: "Your own private Telegram bot", desc: "No shared instances, no other clients in your channel" },
    { title: "Full operator configuration", desc: "Identity, business context, and delivery scope — all built by me" },
    { title: "Ongoing maintenance", desc: "I keep it tuned. Monthly check-ins, prompt updates, context refreshes." },
    { title: "Direct support", desc: "You message me, I respond. No ticket queue." },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Everything is done for you.
        </h2>
        <p className="text-white/50 text-center mb-12 text-lg">Here's what gets built:</p>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 p-5 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-[#6366f1] text-lg flex-shrink-0">✅</div>
              <div>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-white/50 text-sm mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 p-6 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-xl text-center">
          <p className="text-white/70">
            <span className="text-white font-semibold">You provide:</span> your onboarding form answers and your Telegram handle.
            <span className="text-white font-semibold ml-2">I handle:</span> everything else.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple pricing. No surprises.</h2>
        <p className="text-white/50 text-center mb-6 text-lg">$750 one-time setup · then choose your plan</p>
        <p className="text-white/40 text-center mb-12 text-sm">
          Setup fee covers full build-out: operator configuration, bot creation, brief templates, delivery testing, and go-live. Paid once. Non-refundable after go-live.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Starter */}
          <div className="border border-white/10 rounded-2xl p-8">
            <div className="text-white/50 text-sm font-medium uppercase tracking-wide mb-2">Solo Operator</div>
            <div className="text-4xl font-bold mb-1">$997<span className="text-white/40 text-lg font-normal">/mo</span></div>
            <p className="text-white/40 text-sm mb-8">The core product — powerful on its own.</p>
            <ul className="space-y-3 mb-8">
              {[
                "Daily morning intelligence brief",
                "Competitor monitoring (up to 3)",
                "Industry topic tracking (up to 3)",
                "On-demand Q&A via Telegram",
                "Standard support",
              ].map((f, i) => (
                <li key={i} className="flex gap-3 text-white/70 text-sm">
                  <span className="text-[#6366f1]">✓</span> {f}
                </li>
              ))}
            </ul>
            <a href="/onboarding" className="block w-full text-center border border-white/20 hover:border-[#6366f1] text-white py-3 rounded-lg transition-colors font-medium">
              Apply — Solo Operator →
            </a>
          </div>

          {/* Pro */}
          <div className="border border-[#6366f1] rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6366f1] text-white text-xs font-semibold px-4 py-1 rounded-full">
              Most Popular
            </div>
            <div className="text-[#818cf8] text-sm font-medium uppercase tracking-wide mb-2">Pro</div>
            <div className="text-4xl font-bold mb-1">$997<span className="text-white/40 text-lg font-normal">/mo</span></div>
            <p className="text-white/40 text-sm mb-8">For operators who want full leverage.</p>
            <ul className="space-y-3 mb-8">
              {[
                "Everything in Solo Operator",
                "Competitor monitoring (up to 5)",
                "Industry topic tracking (up to 6)",
                "Weekly strategic digest",
                "Second custom deliverable (your choice)",
                "Monthly operator tuning session",
                "Priority support",
              ].map((f, i) => (
                <li key={i} className="flex gap-3 text-white/70 text-sm">
                  <span className="text-[#6366f1]">✓</span> {f}
                </li>
              ))}
            </ul>
            <a href="/onboarding" className="block w-full text-center bg-[#6366f1] hover:bg-[#5254cc] text-white py-3 rounded-lg transition-colors font-medium">
              Start with Pro →
            </a>
          </div>
        </div>

        <div className="mt-8 p-5 bg-white/5 border border-white/10 rounded-xl">
          <p className="text-white/60 text-sm text-center">
            <span className="text-white font-semibold">Pro custom deliverables — pick one:</span> Weekly lead/opportunity scan · Weekly content brief (LinkedIn, newsletter) · Monthly competitive intelligence deep-dive · Weekly KPI tracking + trend flagging
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */
function HowItWorks() {
  const steps = [
    { num: "01", title: "Fill out the form (10 min)", desc: "operaxon.com/onboarding captures everything I need: your business, your market, your competitors, your brief time, and what success looks like to you. No calls required upfront." },
    { num: "02", title: "I build your operator (24–48 hours)", desc: "I configure your AI operator from scratch — custom identity, your specific business context, your monitored topics, your brief format. Not a template. Built for you." },
    { num: "03", title: "You get a Telegram bot (Day 2–3)", desc: "I send you your bot username and a go-live message. You search it in Telegram, send it a message, and you're live." },
    { num: "04", title: "First brief arrives", desc: "Your operator delivers your first morning intelligence brief at your preferred time. Everything it covers is specific to your business and market." },
    { num: "05", title: "It gets smarter over time", desc: "Every month I review and tune based on what's useful and what isn't. Your operator gets sharper, not staler." },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          From intake form to live operator
        </h2>
        <p className="text-[#6366f1] text-center font-semibold mb-12 text-lg">in under 72 hours.</p>
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-6 items-start">
              <div className="text-[#6366f1] font-mono font-bold text-xl w-10 flex-shrink-0 pt-0.5">{step.num}</div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex-1">
                <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHO IT'S FOR ─── */
function WhoItsFor() {
  const fits = [
    "You run or lead a business and need to stay informed without spending an hour reading news",
    "You care what your competitors are doing but don't have time to stalk them manually",
    "You want a daily edge — not a weekly newsletter you'll never read",
    "You use Telegram (or you're willing to — it's a free 2-min download)",
    "You have better things to do than set up AI tools yourself",
  ];
  const notFits = [
    "You want to tinker with the prompts yourself (that's what Tier 3 is for)",
    "You need CRM integrations, calendar access, or email management (that's Tier 2+)",
    "You're looking for a $20/mo chatbot subscription",
  ];

  return (
    <section className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tier 1 is built for founders and operators<br />
          <span className="text-[#6366f1]">who are tired of drowning in information noise.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-green-400 font-semibold mb-4 text-lg">✅ You're a good fit if:</h3>
            <ul className="space-y-3">
              {fits.map((f, i) => (
                <li key={i} className="flex gap-3 text-white/70 text-sm leading-relaxed">
                  <span className="text-green-400 flex-shrink-0">→</span> {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white/40 font-semibold mb-4 text-lg">❌ You're not a fit if:</h3>
            <ul className="space-y-3">
              {notFits.map((f, i) => (
                <li key={i} className="flex gap-3 text-white/40 text-sm leading-relaxed">
                  <span className="flex-shrink-0">→</span> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  const quotes = [
    { text: "The first morning brief hit at 7:15 AM and covered something my competitor announced that I hadn't seen yet. I was on the phone with a prospect referencing it by 9 AM. This paid for itself in the first week.", name: "Founder, B2B SaaS company" },
    { text: "I used to spend 45 minutes every morning reading newsletters and checking Twitter. Now I read one message and I'm fully briefed. My mornings are back.", name: "CEO, Professional Services firm" },
    { text: "Brandon built this thing in two days and it already knows my business better than most of my employees. The competitor section alone is worth it.", name: "Operator, E-commerce brand" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What operators say after their first week.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"{q.text}"</p>
              <p className="text-white/40 text-xs">— {q.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const items = [
    { q: "Is my data private?", a: "Yes. Your operator runs in an isolated instance — you have your own workspace, your own bot, your own context files. No other Operaxon client can see your data. I'm the only one who accesses your configuration. I don't share client data. Ever." },
    { q: "What AI powers this?", a: "Your operator is built on Anthropic's Claude — currently Claude Sonnet, one of the most capable and reliable models available. I update the underlying model when a meaningfully better version is available. You don't manage any of that." },
    { q: "Can I cancel anytime?", a: "Yes. Monthly subscriptions cancel with 30 days notice — just message me. No contracts, no annual lock-in. The $750 setup fee is non-refundable once the operator is built and delivered (because that's the work), but your monthly is fully cancel-at-will." },
    { q: "How fast does it start?", a: "Goal is live within 72 hours of intake form submission and payment. Most clients get their first brief within 48 hours. If I'm running close to capacity I'll give you an honest timeline upfront before you pay." },
    { q: "Do I need to install anything?", a: "Telegram. That's it. If you already use it, there's literally nothing to install. If you don't, it's a free download and takes 2 minutes to set up. Everything else runs on my end." },
    { q: "What if I want to change what the brief covers?", a: "Message me. I update your operator's configuration same day for Pro clients, within 48 hours for Solo Operator. This isn't a locked black box — I tune it based on your feedback. That's part of the monthly maintenance." },
    { q: "What happens if a brief doesn't arrive?", a: "I monitor delivery logs daily. If something breaks, I catch it and fix it — usually before you notice. If you notice a missed brief first, message me and I'll fire a manual one same day." },
    { q: "Can I upgrade from Solo Operator to Business OS later?", a: "Yes. You pay the difference ($1,000/mo) and I build out your second deliverable. No new setup fee. Upgrades process mid-cycle and you get Pro deliverables starting the next brief cycle." },
    { q: "What's the difference between Solo Operator and Business OS?", a: "Solo Operator is the daily brief + on-demand Q&A — powerful on its own. Pro adds a second deliverable (your choice), a weekly strategic digest, deeper competitor tracking, a monthly tuning session, and priority support." },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Straight answers.</h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">{item.q}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  return (
    <section className="py-32 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Your operator is<br />
          <span className="text-[#6366f1]">72 hours away.</span>
        </h2>
        <p className="text-white/60 text-lg mb-4 leading-relaxed">
          Fill out the 10-minute intake form. I'll review it, confirm your scope, and send you a payment link. Once that clears, I build. You're live before the week is out.
        </p>
        <p className="text-white/40 text-sm mb-10">
          No calls required to start. No demos. No "get a quote" nonsense.
        </p>
        <a
          href="/onboarding"
          className="inline-block bg-[#6366f1] hover:bg-[#5254cc] text-white font-bold px-10 py-5 rounded-xl transition-colors text-xl"
        >
          Build My Operator →
        </a>
        <p className="text-white/30 text-xs mt-6">
          Questions? Email brandon@operaxon.com
        </p>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="/">
          <img src="/logo.svg" alt="Operaxon" style={{ height: "32px", width: "auto", opacity: 0.6 }} />
        </a>
        <p className="text-white/30 text-xs text-center">
          Operaxon is a done-for-you AI operating system service. Individual results vary. This is not a SaaS subscription — it's a managed service.
        </p>
        <div className="flex gap-6 text-white/30 text-xs">
          <a href="/" className="hover:text-white/60 transition-colors">Home</a>
          <a href="/onboarding" className="hover:text-white/60 transition-colors">Onboarding</a>
          <a href="mailto:brandon@operaxon.com" className="hover:text-white/60 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
