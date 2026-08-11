import Image from "next/image";
import { profile } from "@/data/content";

export function Hero() {
  return (
    <section id="inicio" className="section-pad relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="rise text-[12px] uppercase tracking-[0.28em] text-gold">
            {profile.location}
          </p>
          <h1 className="font-display rise mt-4 text-[3.1rem] leading-[0.95] text-paper sm:text-7xl lg:text-[5.4rem]" style={{ animationDelay: "80ms" }}>
            {profile.name}
          </h1>
          <p className="rise mt-5 max-w-xl text-lg text-muted sm:text-xl" style={{ animationDelay: "160ms" }}>
            {profile.role}. {profile.headline}
          </p>
          <div className="rise mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#proyectos"
              className="rounded-full bg-gold px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-ink hover:bg-gold-soft"
            >
              Ver proyectos
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-6 py-3 text-[13px] uppercase tracking-[0.14em] text-paper hover:border-gold/50"
            >
              Perfil LinkedIn
            </a>
          </div>
          <p className="rise mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-muted" style={{ animationDelay: "320ms" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {profile.availability}
          </p>
        </div>
        <div className="rise relative mx-auto w-full max-w-sm lg:max-w-none" style={{ animationDelay: "180ms" }}>
          <div className="absolute -inset-3 rounded-[2rem] border border-gold/25" />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-line">
            <Image
              src="/diego.jpg"
              alt={profile.name}
              width={640}
              height={640}
              priority
              className="aspect-[4/5] w-full object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-display text-2xl text-paper">
              Full stack · Datos · Producto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
