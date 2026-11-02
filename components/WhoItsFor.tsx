import { whoItsFor } from "@/lib/content";

export function WhoItsFor() {
  return (
    <section id="who" className="scroll-mt-20 border-t border-white/10 bg-ink px-5 py-16 text-center text-white md:px-20 md:py-24 md:text-left">
      <p className="text-sm uppercase tracking-[0.16em] text-white/55">Who it’s for</p>
      <h2 className="mx-auto mt-3 max-w-3xl text-[40px] font-bold leading-none tracking-[-0.03em] md:mx-0 md:text-5xl">
        This could be for you if…
      </h2>
      <ul className="mx-auto mt-10 max-w-3xl divide-y divide-white/15 border-y border-white/15 md:mx-0">
        {whoItsFor.map((item) => (
          <li key={item} className="py-5 text-lg leading-7 md:text-xl">
            {item}
          </li>
        ))}
      </ul>
      <p className="mx-auto mt-8 max-w-xl text-base leading-7 md:mx-0">
        You don’t need to fit into a category. Your coaching doesn’t either.
      </p>
    </section>
  );
}
