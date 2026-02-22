import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

async function sendTelegram(message: string): Promise<{ ok: boolean; error?: string }> {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });
    const body = await res.json();
    if (!res.ok) {
      return { ok: false, error: JSON.stringify(body) };
    }
    return { ok: true };
  } catch (e: unknown) {
    return { ok: false, error: String(e) };
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const name = data.name || "Unknown";
    const company = data.company || "—";
    const role = data.role || "—";
    const email = data.email || "—";
    const phone = data.phone || "—";
    const telegram = data.telegram || "—";
    const business = data.business || "—";
    const revenue = data.revenue || "—";
    const competitors = data.competitors || "—";
    const topics = data.topics || "—";
    const briefTime = data.briefTime || "—";
    const timezone = data.timezone || "—";
    const success = data.success || "—";
    const hardware = data.hardware || "—";
    const notes = data.notes || "—";

    const message = `🔥 *NEW OPERAXON LEAD*

👤 *${name}* — ${role} @ ${company}
📧 ${email}
📱 ${phone}
💬 Telegram: ${telegram}

🏢 *Business:* ${business}
💰 *Revenue:* ${revenue}
🥊 *Competitors:* ${competitors}
📋 *Topics to monitor:* ${topics}
⏰ *Brief time:* ${briefTime} (${timezone})
✅ *Success looks like:* ${success}
💻 *Hardware:* ${hardware}
📝 *Notes:* ${notes}

→ Reply within 1 hour for best conversion`;

    const result = await sendTelegram(message);
    if (!result.ok) {
      console.error("Telegram delivery failed:", result.error);
      return NextResponse.json({ error: "Telegram delivery failed", detail: result.error, tokenSet: !!TELEGRAM_BOT_TOKEN, chatIdSet: !!TELEGRAM_CHAT_ID }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Submit error:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
