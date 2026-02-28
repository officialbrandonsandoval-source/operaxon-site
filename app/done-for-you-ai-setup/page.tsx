/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Done-For-You AI Setup — Operaxon",
  description: "Operaxon deploys a fully configured autonomous AI agent for your business in 72 hours. You never touch a terminal. We handle everything.",
  openGraph: {
    title: "Done-For-You AI Setup — Operaxon",
    description: "72 hours from application to first brief. Hardware, agent, memory, automations — all done for you. You just read the results.",
    url: "https://operaxon.com/done-for-you-ai-setup",
    siteName: "Operaxon",
  },
};

export default function DoneForYouAISetup() {
  return (
    <main style={{ background: "#080808", color: "#fff", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(8,8,8,0.9)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontWeight: 800, fontSize: "18px", letterSpacing: "-0.5px", textDecoration: "none", color: "#fff" }}>OPERA<span style={{ color: "#6366f1" }}>X</span>ON</a>
        <a href="/apply" style={{ background: "#6366f1", color: "#fff", padding: "8px 16px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>Apply for a Spot →</a>
      </header>

      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#6366f1", fontSize: "13px", fontWeight: 600, border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.08)", borderRadius: "100px", padding: "6px 16px", marginBottom: "40px" }}>
          Done-For-You AI Setup
        </div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 800, lineHeight: 1.05, marginBottom: "28px", letterSpacing: "-1px" }}>
          72 hours from now,<br />
          <span style={{ color: "#6366f1" }}>your agent is live.</span><br />
          You never touched a terminal.
        </h1>
        <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "48px" }}>
          You have a business to run. You don&apos;t have time to learn how to configure AI agents, install runtimes, or debug automation scripts. Operaxon does all of it. You fill out a form and show up to the result.
        </p>
        <a href="/apply" style={{ display: "inline-block", background: "#6366f1", color: "#fff", padding: "16px 32px", borderRadius: "10px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
          Apply Now — 72-Hour Deploy →
        </a>
      </section>

      {/* What "done for you" actually means */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "16px" }}>What &ldquo;done for you&rdquo; actually means.</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "16px", lineHeight: 1.7, marginBottom: "40px" }}>Other services say done-for-you and hand you a half-configured tool with a 40-page setup guide. Here&apos;s exactly what we mean.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { who: "You", task: "Fill out the onboarding form (15 minutes)", detail: "Tell us about your business: competitors, goals, industry, brief time preference. That&apos;s it." },
              { who: "We", task: "Source or configure your hardware", detail: "If you need a Mac mini, we source it at Apple retail cost. If you have one, we configure it remotely." },
              { who: "We", task: "Install and configure the agent runtime", detail: "OpenClaw installed, secured, configured. This is the operating layer your agent runs on." },
              { who: "We", task: "Build your agent&apos;s identity and memory", detail: "Your agent gets a name, a mission, and a memory system loaded with your business context." },
              { who: "We", task: "Connect your intelligence layers", detail: "Local models for baseline. Anthropic/OpenAI API for heavy reasoning. Configured and tested." },
              { who: "We", task: "Set up all automations and brief schedule", detail: "Morning brief, competitor monitoring, content scout, crons — all configured, tested, and running." },
              { who: "You", task: "Wake up to your first brief", detail: "7 AM. Telegram. Your first intelligence report. You read it, you operate. That&apos;s the whole loop." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "20px", paddingBottom: "24px", borderBottom: i < 6 ? "1px solid rgba(255,255,255,0.05)" : "none", marginBottom: i < 6 ? "24px" : "0" }}>
                <div style={{ minWidth: "48px", height: "28px", background: item.who === "You" ? "rgba(99,102,241,0.15)" : "rgba(34,197,94,0.12)", border: item.who === "You" ? "1px solid rgba(99,102,241,0.3)" : "1px solid rgba(34,197,94,0.25)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: item.who === "You" ? "#818cf8" : "#4ade80", flexShrink: 0 }}>{item.who}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>{item.task}</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not just setup */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "24px" }}>This isn&apos;t a setup. It&apos;s an ongoing deployment.</h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "17px", lineHeight: 1.8, marginBottom: "24px" }}>
          Most done-for-you services hand you something on day 14 and disappear. Operaxon maintains your agent every month — expanding capabilities, tuning its intelligence, adapting as your business changes.
        </p>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "17px", lineHeight: 1.8, marginBottom: "40px" }}>
          Your monthly subscription isn&apos;t maintenance. It&apos;s evolution. Every month your agent gets smarter, its context grows deeper, and its output gets more relevant.
        </p>
        <div style={{ background: "#0d0d0d", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "16px", padding: "32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px" }}>
          {[
            { value: "72 hrs", label: "From application to first brief" },
            { value: "5 min", label: "Time to read your daily brief" },
            { value: "0 hrs", label: "Time you spent on setup" },
            { value: "24/7", label: "Hours your agent operates" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "36px", fontWeight: 800, color: "#6366f1" }}>{stat.value}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0a0a0a", textAlign: "center" }}>
        <div style={{ maxWidth: "540px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 800, marginBottom: "16px" }}>Ready when you are.</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "17px", lineHeight: 1.7, marginBottom: "40px" }}>Fill out the form. We handle everything. Your agent is live in 72 hours.</p>
          <a href="/apply" style={{ display: "inline-block", background: "#6366f1", color: "#fff", padding: "16px 36px", borderRadius: "10px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>Apply for a Spot →</a>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px", marginTop: "20px" }}>Starting at $997/mo · Month to month · No contracts</p>
        </div>
      </section>

      <footer style={{ padding: "48px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center", color: "rgba(255,255,255,0.25)", fontSize: "13px" }}>
        <a href="/" style={{ color: "#6366f1", textDecoration: "none", fontWeight: 700, marginBottom: "16px", display: "block" }}>OPERA<span style={{ color: "#818cf8" }}>X</span>ON</a>
        <p>Done for you. First time. Right way.</p>
        <p style={{ marginTop: "8px" }}>Questions? <a href="mailto:brandon@operaxon.com" style={{ color: "rgba(255,255,255,0.4)" }}>brandon@operaxon.com</a></p>
      </footer>
    </main>
  );
}
