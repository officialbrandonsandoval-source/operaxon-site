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
        parse_mode: "HTML",
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
    const tier = data.tier || "—";
    const business = data.business || "—";
    const revenue = data.revenue || "—";
    const competitors = data.competitors || "—";
    const topics = data.topics || "—";
    const briefTime = data.briefTime || "—";
    const timezone = data.timezone || "—";
    const success = data.success || "—";
    const hardware = data.hardware || "—";
    const morningWish = data.morningWish || "—";
    const notes = data.notes || "—";

    const tierEmoji: Record<string, string> = { byom: "🟢", mini: "🟡", studio: "🔵" };
    const tierLabel: Record<string, string> = { byom: "Bring Your Own Mac ($2,500 setup + $997/mo)", mini: "Mac mini ($5,000 setup + $997/mo)", studio: "Business OS / Mac Studio ($10,000 setup + $997/mo)" };

    // Escape HTML special chars in user-provided fields
    const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const message = `🔥 <b>NEW OPERAXON LEAD</b>

${tierEmoji[tier] || "⚪"} <b>Tier:</b> ${esc(tierLabel[tier] || tier)}

👤 <b>${esc(name)}</b> — ${esc(role)} @ ${esc(company)}
📧 ${esc(email)}
📱 ${esc(phone)}
💬 Telegram: ${esc(telegram)}

🏢 <b>Business:</b> ${esc(business)}
💰 <b>Revenue:</b> ${esc(revenue)}
🥊 <b>Competitors:</b> ${esc(competitors)}
📋 <b>Topics:</b> ${esc(topics)}
⏰ <b>Brief time:</b> ${esc(briefTime)} (${esc(timezone)})
🌅 <b>Wants every morning:</b> ${esc(morningWish)}
✅ <b>Success looks like:</b> ${esc(success)}
💻 <b>Hardware:</b> ${esc(hardware)}
📝 <b>Notes:</b> ${esc(notes)}

→ Reply within 1 hour for best conversion`;

    const result = await sendTelegram(message);
    if (!result.ok) {
      console.error("Telegram delivery failed:", result.error);
      return NextResponse.json({ error: "Telegram delivery failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Submit error:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
