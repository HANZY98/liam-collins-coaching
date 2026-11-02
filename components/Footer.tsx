import { defaultWhatsappText, whatsappLink } from "@/lib/contact";
import { instagramUrl, nav } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

export function Footer() {
  const whatsapp = whatsappLink(defaultWhatsappText);

  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-14 text-white md:px-20">
      <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <a href="#top" className="leading-none">
          <span className="block font-display text-lg font-bold tracking-[0.14em]">LIAM COLLINS</span>
          <span className="mt-1 block text-[11px] tracking-[0.22em] text-white/60">COACHING</span>
        </a>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-start" aria-label="Footer">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm uppercase tracking-[0.12em]">
              {item.label}
            </a>
          ))}
          <a href="#enquire" className="text-sm uppercase tracking-[0.12em]">
            Enquire
          </a>
        </nav>
        <div className="flex flex-col items-center gap-3 text-sm uppercase tracking-[0.12em] md:items-start">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          {whatsapp ? (
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          ) : (
            <span className="text-white/60">WhatsApp</span>
          )}
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-6 text-white/55 md:mx-0 md:text-left">
        © 2026 Liam Collins Coaching. Results may vary and depend on individual circumstances. Timeframes are not guaranteed.
      </p>
    </footer>
  );
}
