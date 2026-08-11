"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/content";

export function Navbar() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <button
          type="button"
          onClick={() => goTo("inicio")}
          className="font-display text-lg tracking-wide text-paper"
        >
          DD
        </button>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(item.id)}
              className={`rounded-full px-3.5 py-1.5 text-[13px] tracking-wide transition ${
                active === item.id
                  ? "bg-gold/15 text-gold-soft"
                  : "text-muted hover:text-paper"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-gold/40 px-3.5 py-1.5 text-[12px] uppercase tracking-[0.16em] text-gold-soft hover:bg-gold hover:text-ink"
        >
          LinkedIn
        </a>
      </div>
      <nav
        className="flex gap-1 overflow-x-auto px-4 pb-2.5 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Móvil"
      >
        {nav.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goTo(item.id)}
            className={`shrink-0 rounded-full px-3 py-1 text-[12px] ${
              active === item.id
                ? "bg-gold/20 text-gold-soft"
                : "text-muted"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
