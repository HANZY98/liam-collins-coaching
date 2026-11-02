"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { enquiryWhatsappText, whatsappLink } from "@/lib/contact";
import { finalCta, goals, tiers } from "@/lib/content";
import { sendEnquiry, validateEnquiry, type ContactPreference, type EnquiryErrors } from "@/lib/enquiry";
import { useSite } from "@/components/SiteProvider";
import { cn } from "@/lib/cn";

const fieldClass =
  "h-12 w-full rounded-full border bg-white px-4 text-left text-base outline-none focus-visible:border-ink";

export function EnquireForm() {
  const { level, setLevel } = useSite();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [preference, setPreference] = useState<ContactPreference>("email");
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [whatsappHref, setWhatsappHref] = useState<string | null>(null);

  function toggleGoal(goal: string) {
    setSelectedGoals((current) =>
      current.includes(goal) ? current.filter((item) => item !== goal) : [...current, goal],
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = {
      firstName,
      lastName,
      email,
      phone,
      level,
      goals: selectedGoals,
      message,
      preference,
      company,
    };
    const nextErrors = validateEnquiry(payload);
    if (nextErrors) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("sending");
    const link =
      preference === "whatsapp"
        ? whatsappLink(
            enquiryWhatsappText({
              firstName,
              lastName,
              email,
              phone,
              level,
              goals: selectedGoals,
              message,
            }),
          )
        : null;

    try {
      const data = await sendEnquiry(payload);

      if (link) {
        setWhatsappHref(link);
        window.open(link, "_blank", "noopener,noreferrer");
      }

      if (!data.ok) {
        setStatus("error");
        setErrors({
          form: link
            ? `${data.error} Your WhatsApp chat should be open with the same details.`
            : data.error,
        });
        return;
      }

      setStatus("sent");
    } catch {
      if (link) {
        setWhatsappHref(link);
        window.open(link, "_blank", "noopener,noreferrer");
      }
      setStatus("error");
      setErrors({
        form: link
          ? "Email didn’t send. Your WhatsApp chat should be open with the same details."
          : "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <section id="enquire" className="scroll-mt-20">
      <div className="border-t border-white/10 bg-ink px-5 py-20 text-center text-white md:px-20 md:py-28 md:text-left">
        <p className="text-sm uppercase tracking-[0.16em] text-white/70">{finalCta.kicker}</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-[40px] font-bold leading-none tracking-[-0.03em] md:mx-0 md:text-6xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-7 text-white/80 md:mx-0">{finalCta.body}</p>
        <a
          href="#enquire-form"
          className="mx-auto mt-10 flex h-12 w-fit items-center rounded-full bg-white px-6 text-sm uppercase tracking-[0.08em] text-ink md:mx-0"
        >
          {finalCta.cta}
        </a>
      </div>

      <div id="enquire-form" className="scroll-mt-20 bg-ink px-4 py-16 text-white md:px-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(220px,0.6fr)] md:gap-16">
          <div className="text-center md:order-2 md:pt-4 md:text-left">
            <h3 className="font-display text-4xl font-bold leading-none tracking-[-0.03em] md:text-5xl">
              Enquire now
            </h3>
            <p className="mx-auto mt-4 max-w-xs text-base leading-7 text-white/70 md:mx-0">
              For coaching details and how to get started. I’ll reply by email, and on WhatsApp if you ask for it.
            </p>
          </div>

          {status === "sent" ? (
            <div className="rounded-[28px] bg-white p-6 text-center text-ink md:order-1 md:p-10 md:text-left">
              <h3 className="font-display text-3xl font-bold tracking-[-0.03em]">Thank you.</h3>
              <p className="mx-auto mt-4 max-w-md text-base leading-7 md:mx-0">
                Your enquiry is on its way. I’ll be in touch.
              </p>
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto mt-8 flex h-12 w-fit items-center rounded-full bg-ink px-6 text-sm uppercase tracking-[0.08em] text-white md:mx-0"
                >
                  Open WhatsApp
                </a>
              ) : null}
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="relative rounded-[28px] bg-white p-5 text-center text-ink md:order-1 md:p-10 md:text-left"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name" error={errors.firstName}>
                  <input
                    className={cn(fieldClass, errors.firstName ? "border-ink" : "border-line")}
                    name="firstName"
                    autoComplete="given-name"
                    value={firstName}
                    aria-invalid={Boolean(errors.firstName)}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </Field>
                <Field label="Last name" error={errors.lastName}>
                  <input
                    className={cn(fieldClass, errors.lastName ? "border-ink" : "border-line")}
                    name="lastName"
                    autoComplete="family-name"
                    value={lastName}
                    aria-invalid={Boolean(errors.lastName)}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </Field>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Email" error={errors.email}>
                  <input
                    className={cn(fieldClass, errors.email ? "border-ink" : "border-line")}
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={email}
                    aria-invalid={Boolean(errors.email)}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input
                    className={cn(fieldClass, errors.phone ? "border-ink" : "border-line")}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={phone}
                    aria-invalid={Boolean(errors.phone)}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </Field>
              </div>

              <fieldset className="mt-8">
                <legend className="text-sm uppercase tracking-[0.12em]">Coaching level</legend>
                <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                  {tiers.map((tier) => {
                    const selected = level === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setLevel(tier.id)}
                        className={cn(
                          "h-11 rounded-full border px-4 text-sm uppercase tracking-[0.06em]",
                          selected ? "border-ink bg-ink text-white" : "border-line bg-white text-ink",
                        )}
                      >
                        {tier.name}
                      </button>
                    );
                  })}
                </div>
                {errors.level ? <p className="mt-2 text-sm">{errors.level}</p> : null}
              </fieldset>

              <fieldset className="mt-8">
                <legend className="text-sm uppercase tracking-[0.12em]">Your goal</legend>
                <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                  {goals.map((goal) => {
                    const selected = selectedGoals.includes(goal);
                    return (
                      <button
                        key={goal}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => toggleGoal(goal)}
                        className={cn(
                          "h-11 rounded-full border px-4 text-sm",
                          selected ? "border-ink bg-ink text-white" : "border-line bg-white text-ink",
                        )}
                      >
                        {selected ? goal : `+ ${goal}`}
                      </button>
                    );
                  })}
                </div>
                {errors.goals ? <p className="mt-2 text-sm">{errors.goals}</p> : null}
              </fieldset>

              <Field label="Message" error={errors.message} className="mt-8">
                <textarea
                  className="min-h-32 w-full rounded-3xl border border-line bg-white px-4 py-3 text-left text-base outline-none focus-visible:border-ink"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Field>

              <fieldset className="mt-8">
                <legend className="text-sm uppercase tracking-[0.12em]">Reply by</legend>
                <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                  {(["email", "whatsapp"] as const).map((option) => {
                    const selected = preference === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setPreference(option)}
                        className={cn(
                          "h-11 rounded-full border px-4 text-sm uppercase tracking-[0.06em]",
                          selected ? "border-ink bg-ink text-white" : "border-line bg-white text-ink",
                        )}
                      >
                        {option === "email" ? "Email" : "WhatsApp"}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="hidden" aria-hidden="true">
                <label>
                  Company
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                  />
                </label>
              </div>

              {errors.form ? (
                <p className="mt-6 text-sm leading-6" role="alert">
                  {errors.form}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mx-auto mt-8 flex h-12 w-fit items-center rounded-full bg-ink px-6 text-sm uppercase tracking-[0.08em] text-white disabled:opacity-60 md:mx-0"
              >
                {status === "sending" ? "Sending" : "Submit"}
              </button>
              <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted md:mx-0">
                By sending this, you agree I can reply about your enquiry by email or WhatsApp.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-2 block text-center text-sm uppercase tracking-[0.12em] md:text-left">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm">{error}</span> : null}
    </label>
  );
}
