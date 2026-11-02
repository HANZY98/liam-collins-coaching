"use client";

import { useRef } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Photo } from "@/components/Photo";
import { stories, transformations } from "@/lib/content";

export function Results() {
  const scroller = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: number) {
    const node = scroller.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollBy({
      left: direction * Math.min(node.clientWidth * 0.85, 320),
      behavior: reduce ? "auto" : "smooth",
    });
  }

  return (
    <section id="results" className="scroll-mt-20 border-t border-white/10 bg-ink px-5 py-16 text-center text-white md:px-20 md:py-24 md:text-left">
      <p className="text-sm uppercase tracking-[0.16em] text-white/55">Results</p>
      <h2 className="mx-auto mt-3 max-w-3xl text-[40px] font-bold uppercase leading-none tracking-[-0.03em] md:mx-0 md:text-5xl">
        Different goals. Real results.
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-base leading-7 md:mx-0">
        Whether the goal is getting faster, going further, getting stronger or changing your body — the coaching is built around the person doing it.
      </p>

      <div className="mt-12">
        <h3 className="font-sans text-sm uppercase tracking-[0.16em]">Running & performance</h3>
        <div className="mt-5 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible">
          {stories.map((story) => (
            <article
              key={story.kicker}
              className="w-[min(86vw,360px)] shrink-0 snap-start overflow-hidden rounded-3xl bg-white text-ink md:w-auto"
            >
              <div className="relative">
                {"photo" in story ? (
                  <Photo
                    src={story.photo.src}
                    alt={story.photo.alt}
                    position={story.photo.position}
                    sizes="(min-width: 768px) 33vw, 86vw"
                    className="aspect-[4/5] rounded-none"
                  />
                ) : (
                  <ImagePlaceholder label={story.image} className="aspect-[4/5] rounded-none" />
                )}
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-ink">
                  Example
                </span>
              </div>
              <div className="p-6 text-center md:text-left">
                <p className="text-sm uppercase tracking-[0.12em] text-ink/55">{story.metric}</p>
                <h4 className="mt-2 font-display text-2xl font-bold leading-tight tracking-[-0.02em]">
                  {story.kicker}
                </h4>
                <p className="mt-3 text-base leading-7">“{story.quote}”</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="font-sans text-sm uppercase tracking-[0.16em] text-white/55">Body composition</h3>
            <p className="mx-auto mt-3 max-w-xl font-display text-[28px] font-bold leading-none tracking-[-0.03em] md:mx-0 md:text-[36px]">
              The work I’ve done with clients over the years.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              className="h-10 w-10 rounded-full border border-white"
              aria-label="Previous transformations"
              onClick={() => scrollByCard(-1)}
            >
              ←
            </button>
            <button
              type="button"
              className="h-10 w-10 rounded-full border border-white"
              aria-label="Next transformations"
              onClick={() => scrollByCard(1)}
            >
              →
            </button>
          </div>
        </div>
        <div
          ref={scroller}
          className="mt-6 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {transformations.map((item) => (
            <figure key={item.label} className="w-[220px] shrink-0 snap-start md:w-[260px]">
              <ImagePlaceholder label={item.label} className="aspect-[3/4] rounded-3xl" />
              <figcaption className="mt-3 text-center text-sm text-white/55 md:text-left">Placeholder</figcaption>
            </figure>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-base leading-7 md:mx-0">
          Fat loss. Muscle gain. Getting stronger. Building better habits. Different starting points and different goals — no one-size-fits-all approach.
        </p>
        <p className="mx-auto mt-6 max-w-xl font-display text-[28px] font-bold leading-none tracking-[-0.03em] md:mx-0 md:text-4xl">
          Your goal doesn’t have to look like anyone else’s.
        </p>
        <a
          href="#enquire"
          className="mx-auto mt-8 flex h-12 w-fit items-center rounded-full bg-white px-6 text-sm uppercase tracking-[0.08em] text-ink md:mx-0"
        >
          Start yours
        </a>
      </div>
    </section>
  );
}
