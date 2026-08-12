"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@/data/content";
import { Typewriter } from "@/components/Typewriter";

export function Hero() {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const p = Math.min(1, Math.max(0, progress));

  return (
    <section id="inicio" className="section-pad grid-bg relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="font-mono text-[12px] text-cmt">// intro.ts</p>
          <div className="mt-4 rounded-xl border border-line bg-[#010409] p-5 sm:p-7">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-[11px] text-cmt">profile.ts</span>
            </div>
            <h1 className="sr-only">{profile.name}</h1>
            <Typewriter onProgress={setProgress} onDone={() => setReady(true)} />
          </div>
          <div
            className={`mt-6 flex flex-wrap gap-3 transition-opacity duration-500 ${
              ready ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href="#proyectos"
              className="rounded-md bg-gold px-5 py-2.5 font-mono text-[13px] text-ink hover:bg-gold-soft"
            >
              ./proyectos
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-line px-5 py-2.5 font-mono text-[13px] text-paper hover:border-gold/50"
            >
              github
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-line px-5 py-2.5 font-mono text-[13px] text-paper hover:border-gold/50"
            >
              linkedin
            </a>
            <a
              href={profile.cv}
              download
              className="rounded-md border border-line px-5 py-2.5 font-mono text-[13px] text-paper hover:border-gold/50"
            >
              cv.pdf
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md border border-line px-5 py-2.5 font-mono text-[13px] text-paper hover:border-gold/50"
            >
              mail
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[360px]">
          <div className="overflow-hidden rounded-xl border border-line bg-[#010409]">
            <div className="flex items-center gap-2 border-b border-line px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-[11px] text-cmt">diego.png</span>
              <span className="ml-auto font-mono text-[11px] text-gold">
                {Math.round(p * 100)}%
              </span>
            </div>
            <div className="relative aspect-square overflow-hidden bg-[#010409]">
              <Image
                src="/diego.png"
                alt={profile.name}
                width={720}
                height={720}
                priority
                className="h-full w-full object-cover object-[center_18%] transition-[filter,opacity] duration-150"
                style={{
                  opacity: 0.12 + p * 0.88,
                  filter: `grayscale(${(1 - p) * 80}%) blur(${(1 - p) * 10}px)`,
                  clipPath: `inset(0 0 ${(1 - p) * 100}% 0)`,
                }}
              />
              {p < 1 ? (
                <div className="photo-scan" style={{ top: `${p * 100}%` }} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
