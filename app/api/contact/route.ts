import {
  contactSendFailedMessage,
  contactUnavailableMessage,
  studio,
} from "@/lib/content";
import {
  honeypotFilled,
  validateContact,
  type ContactResponse,
} from "@/lib/contact";

const MAX_BODY_BYTES = 20_000;

function json(body: ContactResponse, status: number) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function resolveFrom(value: string): string | null {
  const wrapped = value.match(/<([^>]+)>\s*$/);
  if (wrapped) {
    return isEmail(wrapped[1].trim()) ? value : null;
  }
  return isEmail(value) ? `Wutke Media <${value}>` : null;
}

function originAllowed(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  let originHost = "";
  try {
    originHost = new URL(origin).host;
  } catch {
    return false;
  }

  const hosts = [
    request.headers.get("x-forwarded-host"),
    request.headers.get("host"),
  ].filter((host): host is string => Boolean(host));

  return hosts.includes(originHost);
}

export async function POST(request: Request) {
  if (!originAllowed(request)) {
    return json(
      {
        ok: false,
        error: `The form couldn’t be sent from this page. Email ${studio.email} instead.`,
      },
      403,
    );
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return json(
      { ok: false, error: "Send the enquiry as JSON." },
      415,
    );
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return json(
      { ok: false, error: "That message is too long to send." },
      413,
    );
  }

  let body: unknown;
  try {
    body = JSON.parse(raw) as unknown;
  } catch {
    return json(
      { ok: false, error: "The form couldn’t be read. Please try again." },
      400,
    );
  }

  if (honeypotFilled(body)) {
    console.error("Contact form honeypot filled; enquiry was not emailed.");
    return json({ ok: true }, 200);
  }

  const validation = validateContact(body);
  if (!validation.ok) {
    return json(
      { ok: false, error: validation.error, fields: validation.fields },
      400,
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim() ?? "";
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() ?? "";
  const fromEmail = resolveFrom(process.env.CONTACT_FROM_EMAIL?.trim() ?? "");
  const missing = [
    !apiKey ? "RESEND_API_KEY" : null,
    !toEmail || !isEmail(toEmail) ? "CONTACT_TO_EMAIL" : null,
    !fromEmail ? "CONTACT_FROM_EMAIL" : null,
  ].filter((name): name is string => Boolean(name));

  if (missing.length > 0) {
    console.error(
      `Contact form is not configured. Missing or invalid environment variable${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}.`,
    );
    return json({ ok: false, error: contactUnavailableMessage }, 503);
  }

  const { name, email, phone, projectType, message } = validation.data;
  const text = [
    "New enquiry for Wutke Media",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Project: ${projectType}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Wutke Media enquiry — ${name}`.slice(0, 180),
        text,
      }),
      signal: AbortSignal.timeout(12_000),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error(
        "Resend rejected the contact form email",
        response.status,
        detail.slice(0, 500),
      );
      return json({ ok: false, error: contactSendFailedMessage }, 502);
    }
  } catch (error) {
    console.error(
      "Contact form email failed",
      error instanceof Error ? error.message : "unknown error",
    );
    return json({ ok: false, error: contactSendFailedMessage }, 502);
  }

  return json({ ok: true }, 200);
}
