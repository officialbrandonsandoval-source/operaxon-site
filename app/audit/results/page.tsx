/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type Recommendation = {
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
};

type TierInfo = {
  label: string;
  tagline: string;
  color: string;
  bg: string;
  border: string;
  emoji: string;
};

function getTier(score: number): TierInfo {
  if (score <= 25)
    return {
      label: "AI Infant",
      tagline: "You're operating manually in an automated world. The gap is widening.",
      color: "#ef4444",
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      emoji: "🔴",
    };
  if (score <= 50)
    return {
      label: "AI Curious",
      tagline: "You're aware of AI but haven't built systems yet. You're in the largest group.",
      color: "#eab308",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      emoji: "🟡",
    };
  if (score <= 75)
    return {
      label: "AI Active",
      tagline: "You're using tools but not operating with AI. There's a difference.",
      color: "#f97316",
      bg: "bg-orange-500/10",
      border: "border-orange-500/30",
      emoji: "🟠",
    };
  return {
    label: "AI Operator",
    tagline: "You're in the top 5%. Your systems work while you sleep.",
    color: "#22c55e",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    emoji: "🟢",
  };
}

const PRIORITY_STYLES: Record<string, { label: string; classes: string }> = {
  high: { label: "High Priority", classes: "bg-red-500/15 text-red-400 border border-red-500/20" },
  medium: { label: "Medium Priority", classes: "bg-orange-500/15 text-orange-400 border border-orange-500/20" },
  low: { label: "Lower Priority", classes: "bg-[#6366f1]/15 text-[#818cf8] border border-[#6366f1]/20" },
};

export default function ResultsPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [score, setScore] = useState(0);
  const [displayScore, setDisplayScore] = useState(0);
  const [answers, setAnswers] = useState<Record<string, unknown> | null>(null);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [error, setError] = useState("");
  const [revealed, setRevealed] = useState(false);
  const animRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ─── Mount: read localStorage ─── */
  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("operaxon-audit-answers");
      if (!stored) {
        router.push("/audit");
        return;
      }
      const { answers: a, score: s } = JSON.parse(stored);
      setAnswers(a);
      setScore(s ?? 0);
    } catch {
      router.push("/audit");
    }
  }, [router]);

  /* ─── Count-up animation ─── */
  useEffect(() => {
    if (!mounted || score === 0) return;
    // Delay slightly to let page render
    const delay = setTimeout(() => {
      let current = 0;
      const step = Math.ceil(score / 50); // ~50 frames
      animRef.current = setInterval(() => {
        current += step;
        if (current >= score) {
          setDisplayScore(score);
          setRevealed(true);
          if (animRef.current) clearInterval(animRef.current);
        } else {
          setDisplayScore(current);
        }
      }, 30);
    }, 400);
    return () => {
      clearTimeout(delay);
      if (animRef.current) clearInterval(animRef.current);
    };
  }, [mounted, score]);

  /* ─── Email submit → Claude recommendations ─── */
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/audit/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, email: email.trim(), score }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setRecommendations(data.recommendations ?? []);
      setEmailSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const tier = getTier(score);

  /* Share text */
  const shareText = encodeURIComponent(
    `I just took the Operaxon AI Readiness Audit. My score: ${score}/100 — ${tier.label}. Find out where your business stands: operaxon.com/audit`
  );

  if (!mounted) {
    return (
      <main className="bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-[#6366f1] border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Nav */}
      <header className="px-6 h-16 flex items-center justify-between max-w-6xl mx-auto">
        <a href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Operaxon" style={{ height: "36px", width: "auto" }} />
        </a>
        <a
          href="/audit"
          className="text-white/40 hover:text-white text-sm transition-colors"
        >
          Retake Audit
        </a>
      </header>

      {/* ─── SCORE HERO ─── */}
      <section className="px-6 pt-10 pb-12 max-w-2xl mx-auto text-center">
        <p className="text-white/40 text-sm mb-6">Your AI Readiness Score</p>

        {/* Animated score number */}
        <div className="relative inline-block mb-6">
          <span
            className="text-8xl md:text-9xl font-black tabular-nums"
            style={{ color: tier.color }}
          >
            {displayScore}
          </span>
          <span className="text-3xl font-bold text-white/30 ml-1">/100</span>
        </div>

        {/* Tier badge */}
        <div
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold mb-5 ${tier.bg} ${tier.border} border`}
          style={{ color: tier.color }}
        >
          <span>{tier.emoji}</span>
          <span>{tier.label}</span>
        </div>

        {/* Tagline — fade in after count-up */}
        <p
          className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg mx-auto transition-opacity duration-700"
          style={{ opacity: revealed ? 1 : 0 }}
        >
          {tier.tagline}
        </p>
      </section>

      {/* ─── EMAIL GATE / RECOMMENDATIONS ─── */}
      <section className="px-6 pb-16 max-w-2xl mx-auto">
        {!emailSubmitted ? (
          /* Email gate */
          <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold mb-2">Unlock your personalized recommendations</h2>
              <p className="text-white/50 text-sm">
                Enter your email to get 3 AI-generated recommendations specific to your business
                — and what to fix first.
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/15 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#6366f1]/60 transition-colors text-base"
              />
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#6366f1] hover:bg-[#5254cc] disabled:bg-white/10 disabled:text-white/30 text-white font-semibold py-4 rounded-xl transition-all text-base"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block" />
                    Generating recommendations...
                  </span>
                ) : (
                  "Get My Recommendations →"
                )}
              </button>
              <p className="text-white/25 text-xs text-center">
                No spam. We'll send your report once, then only if you book a call.
              </p>
            </form>
          </div>
        ) : (
          /* Recommendations */
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-6 text-center">
              Your 3 Priority Actions
            </h2>

            {recommendations.length > 0 ? (
              recommendations.map((rec, i) => {
                const ps = PRIORITY_STYLES[rec.priority] ?? PRIORITY_STYLES.medium;
                return (
                  <div
                    key={i}
                    className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/20 transition-colors"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <span className="text-[#6366f1]/50 text-lg font-bold tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${ps.classes}`}
                      >
                        {ps.label}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold mb-2">{rec.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{rec.description}</p>
                  </div>
                );
              })
            ) : (
              <p className="text-white/40 text-center py-4">
                Unable to generate recommendations. Please try again.
              </p>
            )}
          </div>
        )}
      </section>

      {/* ─── CTA ─── */}
      <section className="px-6 pb-16 max-w-2xl mx-auto">
        <div className="border border-[#6366f1]/30 bg-[#6366f1]/5 rounded-2xl p-8 text-center">
          <p className="text-[#818cf8] text-sm font-semibold uppercase tracking-widest mb-3">
            Want us to build this for you?
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
            We install done-for-you AI operations in 14 days.
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            No technical team required. We configure everything specific to your business and
            hand you a fully running system.
          </p>

          <a
            href="https://calendly.com/brandon-operaxon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#6366f1] hover:bg-[#5254cc] text-white font-semibold px-8 py-4 rounded-xl text-base transition-all hover:scale-105 active:scale-95 mb-4"
          >
            Book a Free 20-Min Assessment →
          </a>

          <div className="block">
            <a
              href="/tier1"
              className="text-white/40 hover:text-white/70 text-sm transition-colors"
            >
              See how Ryan Sawall improved his dealership's lead response from 2.4 hours to 6 minutes →
            </a>
          </div>
        </div>
      </section>

      {/* ─── SHARE ─── */}
      <section className="px-6 pb-20 max-w-2xl mx-auto">
        <div className="text-center">
          <p className="text-white/30 text-sm mb-4">Share your score</p>
          <div className="flex items-center justify-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/10 hover:border-white/25 text-white/60 hover:text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Share on X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://operaxon.com/audit")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/10 hover:border-white/25 text-white/60 hover:text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Share on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 text-center text-white/25 text-sm">
        <p>
          <a href="/" className="hover:text-white/50 transition-colors">
            operaxon.com
          </a>
          {" · "}
          <a href="/audit" className="hover:text-white/50 transition-colors">
            Retake Audit
          </a>
          {" · "}
          <a href="mailto:brandon@operaxon.com" className="hover:text-white/50 transition-colors">
            brandon@operaxon.com
          </a>
        </p>
      </footer>
    </main>
  );
}
