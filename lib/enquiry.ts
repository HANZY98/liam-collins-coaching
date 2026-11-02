import { goals, levelLabel, tiers, type CoachingLevel } from "@/lib/content";

export type ContactPreference = "email" | "whatsapp";

export type EnquiryPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  level: CoachingLevel | "";
  goals: string[];
  message: string;
  preference: ContactPreference;
  company?: string;
};

export type EnquiryErrors = Partial<
  Record<
    "firstName" | "lastName" | "email" | "phone" | "level" | "goals" | "message" | "form",
    string
  >
>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const levelIds = new Set<string>(tiers.map((tier) => tier.id));
const goalSet = new Set<string>(goals);

export function validateEnquiry(input: EnquiryPayload): EnquiryErrors | null {
  const errors: EnquiryErrors = {};

  if (!input.firstName.trim()) errors.firstName = "Add your first name.";
  else if (input.firstName.trim().length > 80) errors.firstName = "Use 80 characters or fewer.";

  if (!input.lastName.trim()) errors.lastName = "Add your last name.";
  else if (input.lastName.trim().length > 80) errors.lastName = "Use 80 characters or fewer.";

  if (!input.email.trim()) errors.email = "Add your email address.";
  else if (!emailPattern.test(input.email.trim()) || input.email.trim().length > 120) {
    errors.email = "Enter a valid email address.";
  }

  const digits = input.phone.replace(/\D/g, "");
  if (!input.phone.trim()) errors.phone = "Add a phone number.";
  else if (digits.length < 7 || input.phone.trim().length > 30) {
    errors.phone = "Enter a phone number we can reach you on.";
  }

  if (!input.level || !levelIds.has(input.level)) {
    errors.level = "Choose a coaching level.";
  }

  if (!input.goals.length) errors.goals = "Choose at least one goal.";
  else if (input.goals.some((goal) => !goalSet.has(goal))) {
    errors.goals = "Choose a goal from the list.";
  }

  if (input.message.length > 2000) errors.message = "Keep your message under 2000 characters.";

  return Object.keys(errors).length ? errors : null;
}

export async function sendEnquiry(payload: EnquiryPayload) {
  if (payload.company?.trim()) return { ok: true as const };

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return {
      ok: false as const,
      error:
        "Email isn’t connected yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY so enquiries land in Liam’s inbox.",
    };
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

  const data = (await response.json().catch(() => null)) as { success?: boolean } | null;
  if (!response.ok || !data?.success) {
    return { ok: false as const, error: "The enquiry didn’t send. Please try again in a moment." };
  }

  return { ok: true as const };
}
