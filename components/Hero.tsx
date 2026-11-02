import { HeroVideo } from "@/components/HeroVideo";
import { ArrowIcon } from "@/components/icons";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-ink text-white md:min-h-[calc(100svh-3.5rem)]">
      <HeroVideo />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/20" />
      <div className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-between px-5 py-10 md:min-h-[calc(100svh-3.5rem)] md:px-20 md:py-16">
        <div className="max-w-[880px] pt-6 md:pt-16">
          <p className="text-sm uppercase tracking-[0.18em]">{hero.eyebrow}</p>
          <h1 className="mt-4 max-w-[12ch] text-[48px] font-bold leading-none tracking-[-0.03em] md:text-[84px]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[28rem] font-display text-2xl leading-snug md:text-[32px] md:leading-[1.3]">
            {hero.line}
            <span className="mt-1 block">{hero.lineTwo}</span>
          </p>
          <p className="mt-6 max-w-md text-base leading-6">{hero.body}</p>
        </div>
        <a
          href="#enquire"
          className="mt-10 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-white px-6 text-sm uppercase tracking-[0.08em] text-ink"
        >
          {hero.cta}
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
