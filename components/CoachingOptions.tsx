"use client";

import { CheckIcon } from "@/components/icons";
import { useSite } from "@/components/SiteProvider";
import { coachingFlexibility, tiers } from "@/lib/content";

export function CoachingOptions() {
  const { enquire } = useSite();

  return (
    <section id="coaching" className="scroll-mt-20 border-t border-white/10 bg-ink px-5 py-16 text-center text-white md:px-20 md:py-24 md:text-left">
      <p className="text-sm uppercase tracking-[0.16em] text-white/55">Coaching options</p>
      <h2 className="mx-auto mt-3 max-w-3xl text-[40px] font-bold leading-none tracking-[-0.03em] md:mx-0 md:text-5xl">
        Choose your level of coaching
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-base leading-7 md:mx-0">
        Same approach. Same personalised programming. Choose how much support you need along the way.
      </p>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {tiers.map((tier) => {
          const featured = Boolean(tier.popular);
          return (
            <article
              key={tier.id}
              className={`flex flex-col rounded-3xl p-6 text-center md:p-8 md:text-left ${
                featured ? "bg-white text-ink" : "border border-white/25 text-white"
              }`}
            >
              <div className="flex items-center justify-center gap-3 md:justify-between">
                <h3 className="font-sans text-sm uppercase tracking-[0.14em]">{tier.name}</h3>
                {featured ? (
                  <span className="rounded-full border border-ink/30 px-3 py-1 text-[11px] uppercase tracking-[0.12em]">
                    Most popular
                  </span>
                ) : null}
              </div>
              <p className="mt-6 font-display text-5xl font-bold tracking-[-0.03em]">
                {tier.price}
                <span className="ml-2 text-base font-normal opacity-70">{tier.period}</span>
              </p>
              <p className={`mt-5 text-base leading-7 ${featured ? "text-ink/80" : "text-white/80"}`}>
                {tier.summary}
              </p>
              {tier.lead ? <p className="mt-6 text-sm uppercase tracking-[0.08em]">{tier.lead}</p> : null}
              <ul className="mx-auto mt-4 w-full max-w-[16rem] space-y-3 text-left text-base leading-6 md:mx-0 md:max-w-none">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {tier.note ? (
                <p className={`mt-6 text-sm leading-6 ${featured ? "text-ink/70" : "text-white/65"}`}>
                  {tier.note}
                </p>
              ) : null}
              <button
                type="button"
                onClick={() => enquire(tier.id)}
                className={`mx-auto mt-8 flex h-12 w-fit items-center justify-center rounded-full px-6 text-sm uppercase tracking-[0.08em] md:mx-0 ${
                  featured ? "bg-ink text-white" : "bg-white text-ink"
                }`}
              >
                {tier.cta}
              </button>
            </article>
          );
        })}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-base leading-7 md:mx-0">{coachingFlexibility}</p>
    </section>
  );
}
