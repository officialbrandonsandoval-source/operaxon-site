/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent for Car Dealerships — Operaxon",
  description: "An autonomous AI agent built for car dealerships. Speed to lead, dead CRM reactivation, competitor inventory monitoring, and a morning brief for GMs — deployed in 72 hours.",
  openGraph: {
    title: "AI Agent for Car Dealerships — Operaxon",
    description: "Your dealership has a speed-to-lead problem, dead CRM leads, and no real-time competitive intelligence. One agent fixes all three.",
    url: "https://operaxon.com/ai-agent-for-car-dealership",
    siteName: "Operaxon",
  },
};

export default function AIAgentForCarDealership() {
  return (
    <main style={{ background: "#080808", color: "#fff", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(8,8,8,0.9)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontWeight: 800, fontSize: "18px", letterSpacing: "-0.5px", textDecoration: "none", color: "#fff" }}>OPERA<span style={{ color: "#6366f1" }}>X</span>ON</a>
        <a href="/apply" style={{ background: "#6366f1", color: "#fff", padding: "8px 16px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>Apply for a Spot →</a>
      </header>

      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#6366f1", fontSize: "13px", fontWeight: 600, border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.08)", borderRadius: "100px", padding: "6px 16px", marginBottom: "40px" }}>
          AI Agent for Car Dealerships
        </div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 800, lineHeight: 1.05, marginBottom: "28px", letterSpacing: "-1px" }}>
          Your internet leads go cold in 2 hours.<br />
          <span style={{ color: "#6366f1" }}>Your agent responds in minutes.</span>
        </h1>
        <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "48px" }}>
          The average dealership loses $50,000–$200,000 per year to slow lead response, dead CRM contacts, and blind competitive positioning. An autonomous agent running in your dealership closes those gaps — overnight, without headcount.
        </p>
        <a href="/apply" style={{ display: "inline-block", background: "#6366f1", color: "#fff", padding: "16px 32px", borderRadius: "10px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
          Deploy Your Dealership Agent →
        </a>
      </section>

      {/* The 5 problems */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "#6366f1", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>What your agent solves</p>
          <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "48px" }}>Five revenue leaks. One agent.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                problem: "Speed to lead",
                stat: "2+ hour average response time",
                solution: "Your agent monitors new internet leads and flags hot ones in real time — before they submit to your competitor.",
              },
              {
                problem: "Dead CRM leads",
                stat: "73% of CRM leads never get a second follow-up",
                solution: "Agent scans your lead database, identifies dormant contacts with reactivation potential, and surfaces them with context for your BDC team.",
              },
              {
                problem: "Competitive blindness",
                stat: "Competitor pricing changes daily — most GMs find out weeks later",
                solution: "Monitors competitor inventory, pricing, and ads every day. Delivers a digest in your morning brief before your team arrives.",
              },
              {
                problem: "No intelligence before 9 AM",
                stat: "Most GMs start their day reactive — fixing problems instead of anticipating them",
                solution: "Every morning at 7 AM: competitor moves, market demand signals, OEM incentive changes, and today&apos;s top 3 operational priorities.",
              },
              {
                problem: "Information silos",
                stat: "GMs, BDC, F&I, and service operate with different data and no shared intelligence",
                solution: "Studio tier deploys coordinated agents across departments — each briefed on their domain, sharing context across the operation.",
              },
            ].map((item, i) => (
              <div key={i} style={{ paddingBottom: "32px", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none", marginBottom: i < 4 ? "32px" : "0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
                  <div style={{ fontWeight: 700, fontSize: "18px" }}>{item.problem}</div>
                  <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", color: "#f87171", fontSize: "12px", padding: "4px 12px", borderRadius: "100px", fontWeight: 600 }}>{item.stat}</div>
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.7 }}>
                  <span style={{ color: "#4ade80", fontWeight: 600 }}>→ </span>{item.solution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why hardware matters for dealers */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "24px" }}>Runs in your dealership. Your customer data never leaves.</h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "17px", lineHeight: 1.8, marginBottom: "24px" }}>
          Dealerships handle sensitive customer data — financial information, contact details, purchase history. Sending that to a shared SaaS cloud isn&apos;t just a bad idea; in some states it&apos;s a liability.
        </p>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "17px", lineHeight: 1.8, marginBottom: "40px" }}>
          Operaxon runs your agent on a Mac mini or Mac Studio in your building. Your data never leaves your network. It&apos;s configured to work alongside your existing CRM — not replace it.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
          {[
            { label: "Data stays in-store", detail: "No shared servers. No third-party data access." },
            { label: "Works with your CRM", detail: "Complements Reynolds, CDK, DealerSocket — doesn&apos;t replace them." },
            { label: "No IT required", detail: "We set everything up. Your team never touches it." },
            { label: "72-hour deployment", detail: "Application to first brief in 72 hours." },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "24px" }}>
              <div style={{ color: "#6366f1", fontWeight: 700, fontSize: "14px", marginBottom: "8px" }}>✓ {item.label}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: 1.6 }}>{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "16px" }}>The math is straightforward.</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "16px", lineHeight: 1.7, marginBottom: "40px" }}>One incremental unit per month from a reactivated lead covers the annual cost of the service.</p>
          <div style={{ background: "#0d0d0d", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "16px", padding: "32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
              <div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", marginBottom: "4px" }}>Average gross per vehicle</div>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "#4ade80" }}>$3,000–$5,000</div>
              </div>
              <div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", marginBottom: "4px" }}>Operaxon Solo Operator tier (annual)</div>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "#f87171" }}>$5,964</div>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "24px" }}>
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", marginBottom: "8px" }}>Break-even point</div>
              <div style={{ fontSize: "32px", fontWeight: 800, color: "#6366f1" }}>1–2 reactivated leads per year</div>
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", marginTop: "8px" }}>Your dead CRM has hundreds of them right now.</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
        <div style={{ maxWidth: "540px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 800, marginBottom: "16px" }}>Your competition is already looking at this.</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "17px", lineHeight: 1.7, marginBottom: "40px" }}>Operaxon is working with a limited number of dealers this quarter. If you&apos;re seeing this, the window is open.</p>
          <a href="/apply" style={{ display: "inline-block", background: "#6366f1", color: "#fff", padding: "16px 36px", borderRadius: "10px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>Apply for Your Dealership →</a>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px", marginTop: "20px" }}>Solo Operator: $997/mo · Business OS: $1,997/mo · 72-hour deployment</p>
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
