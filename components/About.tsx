import { Photo } from "@/components/Photo";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-white/10 bg-ink px-5 py-16 text-center text-white md:px-20 md:py-24 md:text-left">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.8fr)]">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-white/55">About</p>
          <h2 className="mt-3 text-[40px] font-bold leading-none tracking-[-0.03em] md:text-5xl">
            {about.title}
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-7 md:mx-0">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 space-y-1 text-base">
            {about.credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <Photo
          src={about.portrait.src}
          alt={about.portrait.alt}
          position={about.portrait.position}
          className="aspect-[4/5] rounded-3xl"
        />
      </div>
      <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-white/15 pt-8 text-center md:text-left">
        {about.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="font-display text-[28px] font-bold leading-none tracking-[-0.03em] md:text-5xl">
              {stat.value}
            </dt>
            <dd className="mt-2 text-sm leading-5 text-white/60">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
