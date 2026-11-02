import { levelLabel } from "@/lib/content";

export const whatsappNumber = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ""
).replace(/\D/g, "");

export const defaultWhatsappText =
  "Hi Liam, I'd like to find out more about coaching.";

export function whatsappLink(text: string) {
  if (!whatsappNumber) return null;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function enquiryWhatsappText(input: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  level: string;
  goals: string[];
  message: string;
}) {
  const lines = [
    "Hi Liam, I'd like to start coaching.",
    "",
    `Name: ${input.firstName} ${input.lastName}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone}`,
    `Coaching: ${levelLabel(input.level)}`,
    `Goals: ${input.goals.join(", ")}`,
  ];

  if (input.message.trim()) {
    lines.push(`Message: ${input.message.trim()}`);
  }

  return lines.join("\n");
}
