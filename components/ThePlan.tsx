import { hero, plan } from "@/lib/content";

export function ThePlan() {
  return (
    <>
      <section className="border-t border-white/10 bg-ink px-5 py-20 text-center text-white md:px-20 md:py-28 md:text-left">
        <p className="mx-auto max-w-4xl font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] md:mx-0 md:text-[72px]">
          {hero.line}
        </p>
      </section>
      <section id="plan" className="scroll-mt-20 border-t border-white/10 bg-ink px-5 py-16 text-center text-white md:px-20 md:py-24 md:text-left">
        <div className="mx-auto max-w-[640px] md:mx-0">
          <h2 className="text-[40px] font-bold leading-none tracking-[-0.03em] md:text-5xl">
            <span className="text-white/60">{plan.titleLead}</span> {plan.titleRest}
          </h2>
          <div className="mt-8 space-y-4 text-base leading-7 text-white/85">
            {plan.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
