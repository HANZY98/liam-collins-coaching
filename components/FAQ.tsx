"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 border-t border-white/10 bg-ink px-5 py-16 text-center text-white md:px-20 md:py-24 md:text-left">
      <h2 className="text-[40px] font-bold leading-none tracking-[-0.03em] md:text-5xl">Questions?</h2>
      <div className="mx-auto mt-10 max-w-3xl border-t border-white/15 md:mx-0">
        {faqs.map((item, index) => {
          const expanded = open === index;
          return (
            <div key={item.question} className="border-b border-white/15">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-5 text-center md:text-left"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? null : index)}
              >
                <span className="flex-1 text-lg font-medium leading-snug md:text-xl">{item.question}</span>
                <span aria-hidden="true" className="text-2xl leading-none">
                  {expanded ? "–" : "+"}
                </span>
              </button>
              {expanded ? <p className="mx-auto max-w-2xl pb-6 text-base leading-7 md:mx-0">{item.answer}</p> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
