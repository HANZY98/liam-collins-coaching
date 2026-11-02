"use client";

import { useEffect, useState } from "react";
import { defaultWhatsappText, whatsappLink } from "@/lib/contact";
import { nav } from "@/lib/content";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const whatsapp = whatsappLink(defaultWhatsappText);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-ink text-white">
      <div className="flex h-16 items-center justify-between gap-3 px-4 md:h-14 md:px-8">
        <a href="#top" className="leading-none" onClick={() => setOpen(false)}>
          <span className="block font-display text-[12px] font-bold tracking-[0.14em] md:text-sm">
            LIAM COLLINS
          </span>
          <span className="mt-0.5 block text-[10px] tracking-[0.22em] text-white/60">COACHING</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] uppercase tracking-[0.12em] hover:opacity-60"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {whatsapp ? (
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on WhatsApp"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-white md:inline-flex"
            >
              <WhatsAppIcon />
            </a>
          ) : null}
          <a
            href="#enquire"
            className="inline-flex h-9 items-center rounded-full bg-white px-4 text-[13px] uppercase tracking-[0.08em] text-ink"
          >
            Enquire
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-ink px-6 py-10 text-white lg:hidden"
        >
          <nav className="flex flex-col items-center gap-7 text-center" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-[32px] uppercase leading-none tracking-[0.04em]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {whatsapp ? (
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 font-display text-[32px] uppercase leading-none tracking-[0.04em]"
                onClick={() => setOpen(false)}
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            ) : null}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
