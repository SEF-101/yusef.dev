import nodemailer from "nodemailer";
import { site } from "@/lib/site";

/**
 * The quote form posts here. The request is emailed to contact@sef101.com through
 * the iCloud mailbox that already hosts it, so there's no outside form service.
 *
 * Environment variables (Vercel → Project → Settings → Environment Variables,
 * or .env.local for running it on your own computer):
 *   SMTP_USER  your Apple Account's iCloud Mail address (name@icloud.com)
 *   SMTP_PASS  an app-specific password made at account.apple.com
 * Optional:
 *   CONTACT_TO    where requests go (default: site.email)
 *   CONTACT_FROM  the sender, an address on the same iCloud account (default: site.email)
 *   SMTP_HOST / SMTP_PORT  only to point at a test mail server
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NEEDS = ["Website", "IT help", "Business IT setup", "Something else"];
const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]{2,}$/;

/** A few requests per visitor per 10 minutes. Kept in memory, so it is per server instance. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

/** Only accept posts sent by a page on this site. */
function sameOrigin(req: Request) {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

const oneLine = (s: string) => s.replace(/[\r\n\t]+/g, " ").trim();

export async function POST(req: Request) {
  if (!sameOrigin(req)) return json({ error: "forbidden" }, 403);

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return json({ error: "bad_request" }, 400);
  }

  const str = (k: string) => (typeof data[k] === "string" ? (data[k] as string) : "");
  const name = oneLine(str("name")).slice(0, 100);
  const email = oneLine(str("email")).slice(0, 254);
  const need = NEEDS.includes(str("need")) ? str("need") : "Something else";
  const message = str("message").trim().slice(0, 5000);
  const honeypot = str("fax");
  const elapsed = typeof data.elapsed === "number" ? data.elapsed : 0;

  // Bots fill the hidden field or submit instantly. Pretend it worked so they don't adapt.
  if (honeypot || elapsed < 2500) return json({ ok: true });

  if (!name || !EMAIL_RE.test(email) || message.length < 2) {
    return json({ error: "invalid" }, 400);
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "local";
  if (rateLimited(ip)) return json({ error: "rate_limited" }, 429);

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    console.error("Contact form: SMTP_USER / SMTP_PASS are not set");
    return json({ error: "not_configured" }, 503);
  }

  const host = process.env.SMTP_HOST || "smtp.mail.me.com";
  const port = Number(process.env.SMTP_PORT || 587);
  const transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: host === "smtp.mail.me.com",
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const to = process.env.CONTACT_TO || site.email;
  const from = process.env.CONTACT_FROM || site.email;
  const when = new Date().toLocaleString("en-US", { timeZone: "America/Chicago", dateStyle: "medium", timeStyle: "short" });

  try {
    await transport.sendMail({
      from: { name: `${site.name} website`, address: from },
      to,
      replyTo: { name, address: email },
      subject: `${need} request from ${name}`,
      text: [
        `Need: ${need}`,
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message,
        "",
        "—",
        `Sent from the form on ${new URL(site.url).host} on ${when} (Central).`,
        "Hit Reply to answer them directly.",
      ].join("\n"),
    });
    return json({ ok: true });
  } catch (err) {
    console.error("Contact form: send failed", err);
    return json({ error: "send_failed" }, 502);
  }
}
