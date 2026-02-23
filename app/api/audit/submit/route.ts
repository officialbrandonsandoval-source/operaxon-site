import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = "8130999567:AAGCT8juk6a3RUI8rYfvVG2eB7Tz8da8b-Q";
const TELEGRAM_CHAT_ID = "8570412390";

const BUSINESS_LABELS: Record<string, string> = {
  car_dealership: "Car dealership",
  service: "Service business (HVAC, plumbing, landscaping, etc.)",
  agency: "Agency (marketing, creative, digital)",
  professional: "Professional services (law, accounting, consulting)",
  ecommerce: "E-commerce / retail",
  other: "Other",
};

const EMPLOYEE_LABELS: Record<string, string> = {
  just_me: "Solo (just me)",
  "2_10": "2–10 employees",
  "11_50": "11–50 employees",
  "51_200": "51–200 employees",
  "200plus": "200+ employees",
};

const RESPONSE_LABELS: Record<string, string> = {
  "5min": "Within 5 minutes",
  "1hour": "Within 1 hour",
  same_day: "Same day",
  next_day: "Next day or longer",
  dont_track: "Don't track this",
};

const ADMIN_LABELS: Record<string, string> = {
  lt_2h: "Less than 2 hours/week",
  "2_5h": "2–5 hours/week",
  "5_10h": "5–10 hours/week",
  "10_20h": "10–20 hours/week",
  gt_20h: "More than 20 hours/week",
};

const AI_TOOL_LABELS: Record<string, string> = {
  chatgpt: "ChatGPT or similar",
  crm_ai: "CRM with AI features",
  automated_email: "Automated email/follow-up",
  ai_scheduling: "AI scheduling or booking",
  no_ai: "No AI tools",
  custom_ai: "Custom AI workflows",
};

const FALLTHROUGH_LABELS: Record<string, string> = {
  rarely: "Rarely (tight process)",
  occasionally: "Occasionally (1–2/month)",
  regularly: "Regularly (known problem)",
  constantly: "Constantly (every week)",
  no_visibility: "No visibility into this",
};

const AUTOMATION_LABELS: Record<string, string> = {
  multiple_247: "Multiple systems running 24/7",
  basic_auto: "Basic automations only",
  everything_stops: "Nothing automated — stops when team stops",
  not_sure: "Not sure what is running",
};

const BOTTLENECK_LABELS: Record<string, string> = {
  speed: "Speed — things take too long",
  consistency: "Consistency — quality varies by person",
  visibility: "Visibility — don't know what's happening",
  capacity: "Capacity — can't take on more without hiring",
  all: "All of the above",
};

function getTierLabel(score: number): string {
  if (score <= 25) return "AI Infant";
  if (score <= 50) return "AI Curious";
  if (score <= 75) return "AI Active";
  return "AI Operator";
}

async function sendTelegram(message: string): Promise<void> {
  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    });
  } catch (e) {
    console.error("Telegram send failed:", e);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { answers, email, score } = await req.json();

    // Build human-readable answer summary for Claude
    const aiToolsList = Array.isArray(answers.aiTools)
      ? answers.aiTools.map((t: string) => AI_TOOL_LABELS[t] ?? t).join(", ")
      : "None specified";

    const answerSummary = `
- Business type: ${BUSINESS_LABELS[answers.businessType] ?? answers.businessType ?? "Unknown"}
- Team size: ${EMPLOYEE_LABELS[answers.employees] ?? answers.employees ?? "Unknown"}
- Lead response time: ${RESPONSE_LABELS[answers.leadResponse] ?? answers.leadResponse ?? "Unknown"}
- Weekly admin time wasted on manual tasks: ${ADMIN_LABELS[answers.adminTime] ?? answers.adminTime ?? "Unknown"}
- AI tools currently used: ${aiToolsList}
- Lead fallthrough frequency: ${FALLTHROUGH_LABELS[answers.leadFallthrough] ?? answers.leadFallthrough ?? "Unknown"}
- Automated workflows status: ${AUTOMATION_LABELS[answers.automation] ?? answers.automation ?? "Unknown"}
- Biggest operational bottleneck: ${BOTTLENECK_LABELS[answers.bottleneck] ?? answers.bottleneck ?? "Unknown"}
    `.trim();

    const tierLabel = getTierLabel(score);

    const claudePrompt = `You are an AI operations expert at Operaxon, a company that installs autonomous AI operating systems for small and medium businesses.

A business owner just completed an AI Readiness Audit and scored ${score}/100 (tier: "${tierLabel}").

Their answers:
${answerSummary}

Generate exactly 3 specific, actionable recommendations for this business. Each recommendation must:
1. Address a real gap or opportunity based on their specific answers
2. Suggest a concrete, implementable action
3. Include a brief estimated business impact (time saved, leads recovered, revenue potential, etc.)

Rules:
- Be direct and specific — no generic advice
- Reference their actual situation (their business type, size, lead response time, etc.)
- Keep each recommendation focused and actionable
- Prioritize by business impact

Respond with ONLY a valid JSON array. No markdown, no code fences, no extra text. Example format:
[{"title":"Fix Lead Response Speed","description":"Your leads are waiting hours for a response. An AI response agent running 24/7 would reply within 60 seconds, recovering an estimated 2-4 qualified leads per month at your volume.","priority":"high"},{"title":"...","description":"...","priority":"medium"},{"title":"...","description":"...","priority":"low"}]`;

    // Call Claude API directly via fetch
    const claudeRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY!,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5",
        max_tokens: 900,
        messages: [{ role: "user", content: claudePrompt }],
      }),
    });

    let recommendations: Array<{ title: string; description: string; priority: string }> = [];

    if (claudeRes.ok) {
      const claudeData = await claudeRes.json();
      const rawText =
        claudeData.content?.[0]?.type === "text" ? claudeData.content[0].text : "";
      try {
        const parsed = JSON.parse(rawText.trim());
        if (Array.isArray(parsed) && parsed.length > 0) {
          recommendations = parsed.slice(0, 3);
        }
      } catch {
        console.error("Failed to parse Claude response:", rawText);
      }
    } else {
      const errBody = await claudeRes.text();
      console.error("Claude API error:", claudeRes.status, errBody);
    }

    // Fallback recommendations if Claude fails
    if (recommendations.length === 0) {
      recommendations = [
        {
          title: "Automate Lead Response",
          description:
            "Implement an AI-powered lead response system that replies within 60 seconds, 24/7. Businesses that respond within 5 minutes are 9x more likely to close the lead.",
          priority: "high",
        },
        {
          title: "Reclaim Admin Hours",
          description:
            "Identify your top 3 recurring admin tasks and automate them with AI workflows. Most businesses save 5-10 hours per week — time better spent on revenue-generating work.",
          priority: "high",
        },
        {
          title: "Build a 24/7 Operations Layer",
          description:
            "Set up automated workflows that run while you sleep — follow-up sequences, scheduling, and lead nurturing. Your competitors who do this win deals you lose overnight.",
          priority: "medium",
        },
      ];
    }

    // Telegram lead notification (plain text — no parse_mode)
    const telegramMsg = `NEW AUDIT LEAD

Email: ${email}
Score: ${score}/100 (${tierLabel})

Business: ${BUSINESS_LABELS[answers.businessType] ?? answers.businessType ?? "Unknown"}
Team size: ${EMPLOYEE_LABELS[answers.employees] ?? "Unknown"}
Lead response: ${RESPONSE_LABELS[answers.leadResponse] ?? "Unknown"}
Admin waste: ${ADMIN_LABELS[answers.adminTime] ?? "Unknown"}
AI tools: ${aiToolsList}
Lead fallthrough: ${FALLTHROUGH_LABELS[answers.leadFallthrough] ?? "Unknown"}
Automation: ${AUTOMATION_LABELS[answers.automation] ?? "Unknown"}
Bottleneck: ${BOTTLENECK_LABELS[answers.bottleneck] ?? "Unknown"}

Reply within 1 hour for best conversion.`;

    await sendTelegram(telegramMsg);

    return NextResponse.json({ recommendations, score, tier: tierLabel });
  } catch (err) {
    console.error("Audit submit error:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
