/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Morning Brief for Founders — Operaxon",
  description: "An AI-powered morning brief that delivers competitor moves, market intel, and daily priorities to your phone at 7 AM — before you open your laptop.",
  openGraph: {
    title: "AI Morning Brief for Founders — Operaxon",
    description: "Stop starting your day reactive. Your autonomous AI agent delivers a 5-minute brief every morning: competitors, market moves, content ideas, priorities.",
    url: "https://operaxon.com/ai-morning-brief",
    siteName: "Operaxon",
  },
};

const briefSections = [
  { time: "3:00 AM", label: "Competitor scan", detail: "Your agent checks competitor websites, pricing pages, job boards, and social profiles. Flags anything that changed." },
  { time: "4:30 AM", label: "Industry intelligence", detail: "Scans your industry for news, regulatory changes, and signals relevant to your business. Filters the noise." },
  { time: "5:30 AM", label: "Content ideas drafted", detail: "Based on trending topics in your niche, your agent drafts 2-3 content ideas for you to review and post." },
  { time: "6:45 AM", label: "Brief compiled", detail: "Everything packaged into a 5-minute read. Formatted for your phone. Delivered via Telegram." },
  { time: "7:00 AM", label: "Brief delivered to your phone", detail: "You wake up informed. You already know what happened overnight. You start the day ahead — not catching up." },
];

export default function AIMorningBrief() {
  return (
    <main style={{ background: "#080808", color: "#fff", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(8,8,8,0.9)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontWeight: 800, fontSize: "18px", letterSpacing: "-0.5px", textDecoration: "none", color: "#fff" }}>OPERA<span style={{ color: "#6366f1" }}>X</span>ON</a>
        <a href="/apply" style={{ background: "#6366f1", color: "#fff", padding: "8px 16px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>Apply for a Spot →</a>
      </header>

      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#6366f1", fontSize: "13px", fontWeight: 600, border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.08)", borderRadius: "100px", padding: "6px 16px", marginBottom: "40px" }}>
          AI Morning Brief for Founders
        </div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 800, lineHeight: 1.05, marginBottom: "28px", letterSpacing: "-1px" }}>
          Your agent works all night.<br />
          <span style={{ color: "#6366f1" }}>You read 5 minutes. Then you operate.</span>
        </h1>
        <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "48px" }}>
          Most founders start their day reactive. Checking email, catching up, trying to remember what mattered yesterday. The ones pulling ahead start informed — because their agent already did the work overnight.
        </p>
        <a href="/apply" style={{ display: "inline-block", background: "#6366f1", color: "#fff", padding: "16px 32px", borderRadius: "10px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
          Get Your Morning Brief Set Up →
        </a>
      </section>

      {/* Timeline */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "#6366f1", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>While you sleep</p>
          <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "48px" }}>Here&apos;s what happens every night.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {briefSections.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "24px", paddingBottom: "28px", borderBottom: i < briefSections.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", marginBottom: i < briefSections.length - 1 ? "28px" : "0" }}>
                <div style={{ minWidth: "70px", color: "#6366f1", fontWeight: 700, fontSize: "13px", paddingTop: "2px" }}>{item.time}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "6px" }}>{item.label}</div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What&apos;s In the Brief */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "16px" }}>What&apos;s in every brief.</h2>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "16px", lineHeight: 1.7, marginBottom: "40px" }}>Every brief is configured for your specific business — your competitors, your market, your priorities. It&apos;s not a template. It&apos;s your intelligence layer.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
          {[
            { title: "Competitor moves", body: "What your top 3-10 competitors did yesterday. Pricing changes, new content, job postings, announcements." },
            { title: "Market intelligence", body: "Industry news filtered to what matters. No noise — just signal relevant to your business and goals." },
            { title: "Content ideas", body: "2-3 content ideas based on what&apos;s trending in your niche. Ready to post or use as a starting point." },
            { title: "Today&apos;s priorities", body: "Based on context about your goals and current projects, your agent surfaces the 3 most important things for today." },
            { title: "Opportunity flags", body: "Anything worth acting on — a competitor vulnerability, a market gap, a trend you could capitalize on." },
            { title: "Your customizations", body: "Add anything: stock prices, specific keywords, customer mentions, regulatory updates. It&apos;s your brief." },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "24px" }}>
              <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "8px", color: "#e2e8f0" }}>{item.title}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: 1.6 }}>{item.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0a0a0a", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 800, marginBottom: "16px" }}>Your brief fires tomorrow morning.</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "17px", lineHeight: 1.7, marginBottom: "40px" }}>72 hours from your application to your first brief. We handle the entire setup — hardware, agent, memory, automations. You just read it.</p>
          <a href="/apply" style={{ display: "inline-block", background: "#6366f1", color: "#fff", padding: "16px 36px", borderRadius: "10px", fontWeight: 700, fontSize: "16px", textDecoration: "none", marginBottom: "20px" }}>Apply for a Spot →</a>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px" }}>Solo Operator: $997/mo · Business OS: $1,997/mo · Month to month.</p>
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
