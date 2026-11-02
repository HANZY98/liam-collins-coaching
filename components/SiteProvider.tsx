"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { CoachingLevel } from "@/lib/content";

type SiteContextValue = {
  level: CoachingLevel | "";
  setLevel: (level: CoachingLevel | "") => void;
  enquire: (level?: CoachingLevel) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite() {
  const value = useContext(SiteContext);
  if (!value) throw new Error("useSite must be used within SiteProvider");
  return value;
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [level, setLevel] = useState<CoachingLevel | "">("");

  function enquire(next?: CoachingLevel) {
    if (next) setLevel(next);
    const target = document.getElementById("enquire-form");
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }

  return (
    <SiteContext.Provider value={{ level, setLevel, enquire }}>{children}</SiteContext.Provider>
  );
}
