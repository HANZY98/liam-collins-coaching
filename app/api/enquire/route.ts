import { levelLabel } from "@/lib/content";
import { validateEnquiry, type EnquiryPayload } from "@/lib/enquiry";

export async function POST(request: Request) {
  let payload: EnquiryPayload;

  try {
    payload = (await request.json()) as EnquiryPayload;
  } catch {
    return Response.json({ ok: false, error: "That enquiry couldn’t be read." }, { status: 400 });
  }

  if (payload.company?.trim()) {
    return Response.json({ ok: true });
  }

  const errors = validateEnquiry({
    ...payload,
    goals: Array.isArray(payload.goals) ? payload.goals : [],
    message: payload.message ?? "",
    preference: payload.preference === "whatsapp" ? "whatsapp" : "email",
  });

  if (errors) {
    return Response.json(
      { ok: false, error: Object.values(errors)[0] ?? "Check the form and try again." },
      { status: 400 },
    );
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return Response.json(
      {
        ok: false,
        error:
          "Email isn’t connected yet. Add WEB3FORMS_ACCESS_KEY so enquiries land in Liam’s inbox.",
      },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Coaching enquiry — ${payload.firstName.trim()} ${payload.lastName.trim()} (${levelLabel(payload.level)})`,
      from_name: "Liam Collins Coaching",
      name: `${payload.firstName.trim()} ${payload.lastName.trim()}`,
      email: payload.email.trim(),
      phone: payload.phone.trim(),
      coaching_level: levelLabel(payload.level),
      goals: payload.goals.join(", "),
      contact_preference: payload.preference === "whatsapp" ? "WhatsApp" : "Email",
      message: payload.message.trim() || "No message added.",
    }),
  });

  const data = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;

  if (!response.ok || !data?.success) {
    return Response.json(
      { ok: false, error: "The enquiry didn’t send. Please try again in a moment." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
