/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Answers = {
  businessType: string;
  employees: string;
  leadResponse: string;
  adminTime: string;
  aiTools: string[];
  leadFallthrough: string;
  automation: string;
  bottleneck: string;
};

/* ─── SCORING ─── */
function calculateScore(answers: Partial<Answers>): number {
  let score = 0;

  // Q2: Employees (max 14)
  const empScores: Record<string, number> = {
    just_me: 6,
    "2_10": 8,
    "11_50": 10,
    "51_200": 12,
    "200plus": 14,
  };
  score += empScores[answers.employees ?? ""] ?? 0;

  // Q3: Lead response time (max 16)
  const responseScores: Record<string, number> = {
    "5min": 16,
    "1hour": 12,
    same_day: 8,
    next_day: 4,
    dont_track: 0,
  };
  score += responseScores[answers.leadResponse ?? ""] ?? 0;

  // Q4: Admin time (max 16, inverted — less waste = more ready)
  const adminScores: Record<string, number> = {
    lt_2h: 16,
    "2_5h": 12,
    "5_10h": 8,
    "10_20h": 4,
    gt_20h: 0,
  };
  score += adminScores[answers.adminTime ?? ""] ?? 0;

  // Q5: AI tools (max 16)
  const aiTools = answers.aiTools ?? [];
  if (aiTools.includes("custom_ai")) {
    score += 16;
  } else if (!aiTools.includes("no_ai")) {
    let aiScore = 0;
    if (aiTools.includes("chatgpt")) aiScore += 3;
    if (aiTools.includes("crm_ai")) aiScore += 4;
    if (aiTools.includes("automated_email")) aiScore += 4;
    if (aiTools.includes("ai_scheduling")) aiScore += 4;
    score += Math.min(aiScore, 16);
  }

  // Q6: Lead fallthrough (max 16, inverted)
  const fallthroughScores: Record<string, number> = {
    rarely: 16,
    occasionally: 12,
    regularly: 8,
    constantly: 4,
    no_visibility: 0,
  };
  score += fallthroughScores[answers.leadFallthrough ?? ""] ?? 0;

  // Q7: Automation (max 16)
  const workflowScores: Record<string, number> = {
    multiple_247: 16,
    basic_auto: 8,
    everything_stops: 2,
    not_sure: 1,
  };
  score += workflowScores[answers.automation ?? ""] ?? 0;

  // Q8: Bottleneck — 6 pts for any honest answer
  if (answers.bottleneck) score += 6;

  return Math.min(score, 100);
}

/* ─── QUESTIONS ─── */
const QUESTIONS = [
  {
    id: "businessType",
    question: "What type of business do you run?",
    multi: false,
    options: [
      { label: "Car dealership", value: "car_dealership" },
      { label: "Service business (HVAC, plumbing, landscaping, etc.)", value: "service" },
      { label: "Agency (marketing, creative, digital)", value: "agency" },
      { label: "Professional services (law, accounting, consulting)", value: "professional" },
      { label: "E-commerce / retail", value: "ecommerce" },
      { label: "Other", value: "other" },
    ],
  },
  {
    id: "employees",
    question: "How many employees do you have?",
    multi: false,
    options: [
      { label: "Just me (1)", value: "just_me" },
      { label: "2–10", value: "2_10" },
      { label: "11–50", value: "11_50" },
      { label: "51–200", value: "51_200" },
      { label: "200+", value: "200plus" },
    ],
  },
  {
    id: "leadResponse",
    question: "How quickly does your team respond to new leads?",
    multi: false,
    options: [
      { label: "Within 5 minutes", value: "5min" },
      { label: "Within 1 hour", value: "1hour" },
      { label: "Same day", value: "same_day" },
      { label: "Next day or longer", value: "next_day" },
      { label: "We don't track this", value: "dont_track" },
    ],
  },
  {
    id: "adminTime",
    question: "How much of your week is spent on admin tasks you wish were automated?",
    multi: false,
    options: [
      { label: "Less than 2 hours", value: "lt_2h" },
      { label: "2–5 hours", value: "2_5h" },
      { label: "5–10 hours", value: "5_10h" },
      { label: "10–20 hours", value: "10_20h" },
      { label: "More than 20 hours", value: "gt_20h" },
    ],
  },
  {
    id: "aiTools",
    question: "Which AI tools does your business currently use?",
    subtitle: "Select all that apply",
    multi: true,
    options: [
      { label: "ChatGPT or similar (basic)", value: "chatgpt" },
      { label: "CRM with AI features", value: "crm_ai" },
      { label: "Automated email / follow-up", value: "automated_email" },
      { label: "AI scheduling or booking", value: "ai_scheduling" },
      { label: "We don't use any AI tools", value: "no_ai" },
      { label: "We have custom AI workflows", value: "custom_ai" },
    ],
  },
  {
    id: "leadFallthrough",
    question: "How often do qualified leads fall through the cracks?",
    multi: false,
    options: [
      { label: "Rarely — we have a tight process", value: "rarely" },
      { label: "Occasionally — maybe 1–2/month", value: "occasionally" },
      { label: "Regularly — it's a known problem", value: "regularly" },
      { label: "Constantly — we lose leads every week", value: "constantly" },
      { label: "We don't have visibility into this", value: "no_visibility" },
    ],
  },
  {
    id: "automation",
    question: "Does your business run automated workflows while you're not working?",
    subtitle: "Nights, weekends, holidays",
    multi: false,
    options: [
      { label: "Yes — multiple systems running 24/7", value: "multiple_247" },
      { label: "Yes — basic automations (email sequences, etc.)", value: "basic_auto" },
      { label: "No — everything stops when the team stops", value: "everything_stops" },
      { label: "I'm not sure what's running", value: "not_sure" },
    ],
  },
  {
    id: "bottleneck",
    question: "What's your biggest operational bottleneck right now?",
    multi: false,
    options: [
      { label: "Speed — things take too long", value: "speed" },
      { label: "Consistency — quality varies by person", value: "consistency" },
      { label: "Visibility — I don't know what's happening in my business", value: "visibility" },
      { label: "Capacity — we can't take on more without hiring", value: "capacity" },
      { label: "All of the above", value: "all" },
    ],
  },
] as const;

/* ─── MAIN COMPONENT ─── */
type Phase = "landing" | "quiz" | "loading";

export default function AuditPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("landing");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [multiSelected, setMultiSelected] = useState<string[]>([]);
  const [fading, setFading] = useState(false);

  const currentQ = QUESTIONS[step];
  const progressPct = Math.round(((step + 1) / 8) * 100);

  /* ─── handlers ─── */
  const advance = (newAnswers: Partial<Answers>, nextStep: number) => {
    setFading(true);
    setTimeout(() => {
      setAnswers(newAnswers);
      setFading(false);
      if (nextStep >= 8) {
        finishQuiz(newAnswers);
      } else {
        setStep(nextStep);
        setMultiSelected([]);
      }
    }, 220);
  };

  const handleSingleSelect = (value: string) => {
    if (fading) return;
    const newAnswers = { ...answers, [currentQ.id]: value };
    advance(newAnswers, step + 1);
  };

  const handleMultiToggle = (value: string) => {
    if (value === "no_ai") {
      setMultiSelected(["no_ai"]);
      return;
    }
    if (value === "custom_ai") {
      setMultiSelected(["custom_ai"]);
      return;
    }
    setMultiSelected((prev) => {
      const clean = prev.filter((v) => v !== "no_ai" && v !== "custom_ai");
      return clean.includes(value) ? clean.filter((v) => v !== value) : [...clean, value];
    });
  };

  const handleMultiConfirm = () => {
    if (multiSelected.length === 0) return;
    const newAnswers = { ...answers, aiTools: multiSelected };
    advance(newAnswers, step + 1);
  };

  const handleBack = () => {
    if (step === 0) {
      setPhase("landing");
      return;
    }
    setFading(true);
    setTimeout(() => {
      setStep(step - 1);
      const prev = QUESTIONS[step - 1];
      if (prev.multi) {
        setMultiSelected((answers.aiTools as string[]) ?? []);
      }
      setFading(false);
    }, 150);
  };

  const finishQuiz = (finalAnswers: Partial<Answers>) => {
    setPhase("loading");
    const score = calculateScore(finalAnswers);
    try {
      localStorage.setItem(
        "operaxon-audit-answers",
        JSON.stringify({ answers: finalAnswers, score })
      );
    } catch {
      /* localStorage unavailable */
    }
    setTimeout(() => {
      router.push("/audit/results");
    }, 2800);
  };

  /* ─── LANDING ─── */
  if (phase === "landing") {
    return (
      <main className="bg-[#0a0a0a] text-white min-h-screen flex flex-col">
        <header className="px-6 h-16 flex items-center justify-between max-w-6xl mx-auto w-full">
          <a href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Operaxon" style={{ height: "36px", width: "auto" }} />
          </a>
          <a
            href="/apply"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            Apply for a Spot →
          </a>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-[#6366f1] text-sm font-medium mb-8 border border-[#6366f1]/30 bg-[#6366f1]/10 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse" />
              Free · 3 Minutes · Instant Results
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Find out where your<br />
              <span className="text-[#6366f1]">business stands.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Score your AI readiness 0–100. Get 3 personalized recommendations.
              No fluff — just your real gap and how to close it.
            </p>

            <button
              onClick={() => setPhase("quiz")}
              className="bg-[#6366f1] hover:bg-[#5254cc] text-white font-semibold px-10 py-5 rounded-xl text-lg transition-all hover:scale-105 active:scale-95"
            >
              Start Free Audit →
            </button>

            <p className="text-white/30 text-sm mt-6">8 questions · No account required</p>

            <div className="mt-16 grid grid-cols-3 gap-6 text-center">
              {[
                { label: "Score", sub: "0–100 AI readiness score" },
                { label: "Insights", sub: "3 personalized recommendations" },
                { label: "Action", sub: "Clear next steps for your business" },
              ].map((item) => (
                <div key={item.label} className="border border-white/5 rounded-xl p-5 bg-white/[0.02]">
                  <p className="text-[#6366f1] font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-white/40 text-xs leading-snug">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* ─── LOADING ─── */
  if (phase === "loading") {
    return (
      <main className="bg-[#0a0a0a] text-white min-h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <div className="relative mx-auto mb-8 w-20 h-20">
            <div className="absolute inset-0 border-2 border-[#6366f1]/20 rounded-full" />
            <div className="absolute inset-0 border-2 border-[#6366f1] border-t-transparent rounded-full animate-spin" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Analyzing your business...</h2>
          <p className="text-white/40">Building your personalized AI Readiness Report</p>
        </div>
      </main>
    );
  }

  /* ─── QUIZ ─── */
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen flex flex-col">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/10 z-50">
        <div
          className="h-full bg-[#6366f1] transition-all duration-500 ease-out"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Header */}
      <header className="pt-8 px-6 flex items-center justify-between max-w-2xl mx-auto w-full">
        <button
          onClick={handleBack}
          className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-2"
        >
          ← Back
        </button>
        <span className="text-white/30 text-sm font-medium">
          {step + 1} <span className="text-white/20">/ 8</span>
        </span>
      </header>

      {/* Question */}
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-6 pt-10 pb-16">
        <div
          className="transition-opacity duration-200"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <p className="text-[#6366f1] text-xs font-bold uppercase tracking-widest mb-5">
            Question {step + 1} of 8
          </p>

          <h1 className="text-2xl md:text-3xl font-bold leading-snug mb-2">
            {currentQ.question}
          </h1>

          {"subtitle" in currentQ && currentQ.subtitle && (
            <p className="text-white/40 text-sm mb-8">{currentQ.subtitle}</p>
          )}
          {(!("subtitle" in currentQ) || !currentQ.subtitle) && (
            <div className="mb-8" />
          )}

          {/* Multi-select (Q5) */}
          {currentQ.multi ? (
            <div className="space-y-3">
              {currentQ.options.map((opt) => {
                const selected = multiSelected.includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleMultiToggle(opt.value)}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                      selected
                        ? "border-[#6366f1] bg-[#6366f1]/10 text-white"
                        : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                          selected ? "border-[#6366f1] bg-[#6366f1]" : "border-white/20"
                        }`}
                      >
                        {selected && (
                          <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                            <path
                              d="M1 4L4 7.5L10 1"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm md:text-base">{opt.label}</span>
                    </span>
                  </button>
                );
              })}

              <button
                onClick={handleMultiConfirm}
                disabled={multiSelected.length === 0}
                className={`w-full py-4 rounded-xl font-semibold transition-all mt-2 ${
                  multiSelected.length > 0
                    ? "bg-[#6366f1] hover:bg-[#5254cc] text-white"
                    : "bg-white/5 text-white/25 cursor-not-allowed"
                }`}
              >
                Continue →
              </button>
            </div>
          ) : (
            /* Single-select */
            <div className="space-y-3">
              {currentQ.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSingleSelect(opt.value)}
                  className="w-full text-left px-5 py-4 rounded-xl border border-white/10 bg-white/[0.03] text-white/70 hover:border-[#6366f1]/60 hover:bg-[#6366f1]/8 hover:text-white transition-all text-sm md:text-base"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
