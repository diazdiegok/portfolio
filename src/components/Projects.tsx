import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="proyectos" className="section-pad border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-[12px] uppercase tracking-[0.28em] text-gold">Trabajo</p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-xl text-4xl sm:text-5xl">Proyectos seleccionados</h2>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Sitios, catálogos y tableros desarrollados de forma independiente. Cada tarjeta incluye una vista previa y el acceso al código.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-ink transition hover:border-gold/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#141511]">
                <img
                  src={p.preview}
                  alt={`Vista previa de ${p.title}`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-gold">
                  {p.category} · {p.year}
                </p>
                <h3 className="font-display mt-2 text-2xl text-paper">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line px-2.5 py-1 text-[11px] text-paper/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-gold px-4 py-2.5 text-[11px] uppercase tracking-[0.14em] text-ink hover:bg-gold-soft"
                    >
                      Ver sitio
                    </a>
                  ) : null}
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center rounded-full border border-line px-4 py-2.5 text-[11px] uppercase tracking-[0.14em] text-paper hover:border-gold/50 ${
                      p.live ? "" : "flex-1"
                    }`}
                  >
                    Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
