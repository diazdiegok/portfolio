import { profile } from "@/data/content";

export function Contact() {
  return (
    <section id="contacto" className="section-pad border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-[12px] uppercase tracking-[0.28em] text-gold">Hablemos</p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">
          Si tenés un producto, un estudio o una idea, la podemos construir.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Trabajo desde Paraná con clientes y proyectos propios. Lo más directo es LinkedIn; el código está en GitHub.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gold px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.14em] text-ink hover:bg-gold-soft"
          >
            Escribime en LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-7 py-3.5 text-[13px] uppercase tracking-[0.14em] text-paper hover:border-gold/50"
          >
            GitHub · diazdiegok
          </a>
        </div>
      </div>
    </section>
  );
}
