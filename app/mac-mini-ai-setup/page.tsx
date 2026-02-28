/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mac mini AI Setup for Business — Operaxon",
  description: "Deploy a done-for-you autonomous AI agent on a Mac mini. Your hardware, your office, your data. Operaxon handles the entire setup in 72 hours.",
  openGraph: {
    title: "Mac mini AI Setup for Business — Operaxon",
    description: "Your AI agent runs on a Mac mini in your office — not a shared cloud server. Local models + API intelligence. Done-for-you setup in 72 hours.",
    url: "https://operaxon.com/mac-mini-ai-setup",
    siteName: "Operaxon",
  },
};

export default function MacMiniAISetup() {
  return (
    <main style={{ background: "#080808", color: "#fff", minHeight: "100vh", fontFamily: "sans-serif" }}>
      {/* Nav */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(8,8,8,0.9)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontWeight: 800, fontSize: "18px", letterSpacing: "-0.5px", textDecoration: "none", color: "#fff" }}>OPERA<span style={{ color: "#6366f1" }}>X</span>ON</a>
        <a href="/apply" style={{ background: "#6366f1", color: "#fff", padding: "8px 16px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>Apply for a Spot →</a>
      </header>

      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#6366f1", fontSize: "13px", fontWeight: 600, border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.08)", borderRadius: "100px", padding: "6px 16px", marginBottom: "40px" }}>
          Mac mini AI Setup for Business
        </div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 800, lineHeight: 1.05, marginBottom: "28px", letterSpacing: "-1px" }}>
          Your AI agent lives in your office.<br />
          <span style={{ color: "#6366f1" }}>Not someone else&apos;s cloud.</span>
        </h1>
        <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "48px" }}>
          Every AI tool you pay for right now sends your business data to a server you don&apos;t control. Operaxon runs your agent on a Mac mini in your building. Your data. Your hardware. Your intelligence.
        </p>
        <a href="/apply" style={{ display: "inline-block", background: "#6366f1", color: "#fff", padding: "16px 32px", borderRadius: "10px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
          Get Your Mac mini Setup →
        </a>
      </section>

      {/* Why Hardware */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "24px" }}>Why a Mac mini?</h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "17px", lineHeight: 1.8, marginBottom: "24px" }}>
            Apple Silicon — specifically the M4 chip — is the most efficient hardware ever built for running AI models locally. A Mac mini M4 can run models powerful enough to handle real business intelligence tasks, at a fraction of the cost of a cloud subscription, indefinitely.
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "17px", lineHeight: 1.8, marginBottom: "48px" }}>
            It sits on your desk (or in your server closet), draws about 10-20 watts, and runs 24/7 without complaint. After setup, you never touch it again.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { label: "Data sovereignty", body: "Your business context, your competitors, your goals — none of it leaves your building." },
              { label: "Zero cloud dependency", body: "Your agent runs whether or not Anthropic, OpenAI, or anyone else is up. Local models handle the baseline." },
              { label: "No per-seat pricing", body: "One device. Unlimited agent operations. No usage limits tied to how much your agent thinks." },
              { label: "M4 Apple Silicon", body: "Purpose-built for AI workloads. Runs 70B parameter models locally with enough RAM." },
              { label: "Silent, low-power", body: "10-20 watts. Runs 24/7 without noise, heat, or attention." },
              { label: "Owned, not rented", body: "You own the hardware. Not a SaaS subscription. Not something that disappears if you cancel." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "24px" }}>
                <div style={{ color: "#6366f1", fontWeight: 700, fontSize: "15px", marginBottom: "8px" }}>✓ {item.label}</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.6 }}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Setup */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "48px" }}>What the setup includes.</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {[
            { step: "01", title: "Hardware sourced or configured", body: "We source a Mac mini at Apple retail cost — no markup — or configure your existing Mac. Solo Operator: M4 16GB ($599) or M4 Pro 24GB ($799). Business OS: Mac Studio M4 Max ($2,499)." },
            { step: "02", title: "Agent runtime installed", body: "OpenClaw — an open-source autonomous agent runtime — is installed and configured. This is the operating layer your intelligence runs on." },
            { step: "03", title: "Identity and memory architecture built", body: "Your agent gets a name, a mission, and a memory system loaded with your business context: competitors, goals, industry, key people." },
            { step: "04", title: "Intelligence layers connected", body: "Local AI models for baseline tasks. Anthropic and OpenAI API for heavy reasoning. The right model for the right task, every time." },
            { step: "05", title: "Automations and brief configured", body: "Morning brief scheduled for your preferred time. Competitor monitoring set up. Content Scout configured. All crons tested." },
            { step: "06", title: "Delivered to your Telegram", body: "Your brief arrives via Telegram every morning. Real-time alerts go there too. You never need to open a dashboard." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "24px", paddingBottom: "32px", borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.05)" : "none", marginBottom: i < 5 ? "32px" : "0" }}>
              <div style={{ color: "#6366f1", fontWeight: 800, fontSize: "24px", minWidth: "48px" }}>{item.step}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "18px", marginBottom: "8px" }}>{item.title}</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "15px", lineHeight: 1.7 }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hardware Tiers */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "48px" }}>Choose your hardware.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { tier: "Solo Operator", device: "Mac mini M4 16GB", deviceCost: "$599 at cost", setup: "$997 setup", monthly: "$997/mo", capacity: "1 agent, local models + API" },
              { tier: "Solo Operator", device: "Mac mini M4 Pro 24GB", deviceCost: "$799 at cost", setup: "$997 setup", monthly: "$997/mo", capacity: "Up to 3 agents, full cron suite", popular: true },
              { tier: "Business OS", device: "Mac Studio M4 Max 48GB", deviceCost: "$2,499 at cost", setup: "$1,997 setup", monthly: "$1,997/mo", capacity: "5+ agents, full civilization" },
            ].map((t, i) => (
              <div key={i} style={{ background: "#0d0d0d", border: t.popular ? "1px solid #6366f1" : "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "28px", position: "relative" }}>
                {t.popular && <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#6366f1", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "4px 14px", borderRadius: "100px" }}>Most Popular</div>}
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>{t.tier}</div>
                <div style={{ fontWeight: 700, fontSize: "17px", marginBottom: "4px" }}>{t.device}</div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", marginBottom: "16px" }}>{t.deviceCost} (optional)</div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>{t.setup}</div>
                <div style={{ fontSize: "32px", fontWeight: 800, margin: "4px 0" }}>{t.monthly.replace("/mo","")}<span style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>/mo</span></div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", marginBottom: "20px" }}>{t.capacity}</div>
                <a href="/apply" style={{ display: "block", textAlign: "center", background: t.popular ? "#6366f1" : "transparent", border: t.popular ? "none" : "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "10px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>Apply →</a>
              </div>
            ))}
          </div>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px", marginTop: "20px", textAlign: "center" }}>Already own a Mac? Same pricing — skip the device line.</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "48px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center", color: "rgba(255,255,255,0.25)", fontSize: "13px" }}>
        <a href="/" style={{ color: "#6366f1", textDecoration: "none", fontWeight: 700, marginBottom: "16px", display: "block" }}>OPERA<span style={{ color: "#818cf8" }}>X</span>ON</a>
        <p>Done for you. First time. Right way.</p>
        <p style={{ marginTop: "8px" }}>Questions? <a href="mailto:brandon@operaxon.com" style={{ color: "rgba(255,255,255,0.4)" }}>brandon@operaxon.com</a></p>
      </footer>
    </main>
  );
}
