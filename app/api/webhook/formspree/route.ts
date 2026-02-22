import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;
const WEBHOOK_SECRET = process.env.FORMSPREE_WEBHOOK_SECRET;

async function sendTelegram(message: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    }),
  });
  return res.ok;
}

export async function POST(req: NextRequest) {
  try {
    // Optional: verify webhook secret header
    if (WEBHOOK_SECRET) {
      const sig = req.headers.get("x-formspree-signature") || req.headers.get("x-webhook-secret");
      if (sig !== WEBHOOK_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    const data = await req.json();

    // Extract fields from Formspree submission
    const name = data.name || data.full_name || "Unknown";
    const company = data.company || data.company_name || "—";
    const role = data.role || data.job_title || "—";
    const email = data.email || "—";
    const phone = data.phone || "—";
    const telegram = data.telegram || data.telegram_handle || "—";
    const business = data.business_description || data.about_business || "—";
    const revenue = data.revenue || data.annual_revenue || "—";
    const competitors = data.competitors || "—";
    const topics = data.topics || data.monitor_topics || "—";
    const briefTime = data.brief_time || data.preferred_time || "—";
    const timezone = data.timezone || "—";
    const success = data.success_definition || data.success || "—";
    const hardware = data.hardware || data.hardware_status || "—";
    const notes = data.notes || data.additional_notes || "—";

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

    const sent = await sendTelegram(message);

    if (!sent) {
      console.error("Failed to send Telegram message");
      return NextResponse.json({ error: "Telegram delivery failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

// Formspree also sends a GET to verify the endpoint
export async function GET() {
  return NextResponse.json({ ok: true, service: "Operaxon Formspree Webhook" });
}
