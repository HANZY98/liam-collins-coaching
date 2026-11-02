import { Photo } from "@/components/Photo";
import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-t border-white/10 bg-ink px-5 py-16 text-center text-white md:px-20 md:py-24 md:text-left">
      <h2 className="mx-auto max-w-xl text-[40px] font-bold leading-none tracking-[-0.03em] md:mx-0 md:text-5xl">
        How it works
      </h2>
      <div className="mt-14 flex flex-col gap-16 md:gap-24">
        {steps.map((step, index) => (
          <article
            key={step.number}
            className={`flex flex-col gap-8 md:items-center md:gap-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <Photo
              src={step.image.src}
              alt={step.image.alt}
              position={step.image.position}
              className={`${"aspect" in step.image ? step.image.aspect : "aspect-[4/5]"} w-full rounded-3xl md:max-w-[480px] md:flex-1`}
            />
            <div className="md:max-w-md md:flex-1">
              <p className="text-sm tracking-[0.16em] text-white/55">{step.number}</p>
              <h3 className="mt-3 font-display text-[32px] font-bold leading-none tracking-[-0.03em] md:text-[41px]">
                {step.title}
              </h3>
              <p className="mx-auto mt-5 max-w-md text-base leading-7 md:mx-0">{step.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
