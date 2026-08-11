import { projects } from "@/data/content";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="proyectos" className="section-pad border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-[12px] uppercase tracking-[0.28em] text-gold">Trabajo propio</p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-xl text-4xl sm:text-5xl">Proyectos seleccionados</h2>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Sitios, catálogos y tableros que diseñé y desarrollé. La mayoría están publicados en GitHub Pages; Eternity y el modelo de datos del estudio viven en repositorio.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featured.map((p, i) => (
            <article
              key={p.slug}
              className={`group flex flex-col justify-between rounded-3xl border border-line p-7 transition hover:border-gold/40 ${
                i === 0 ? "lg:col-span-2 lg:flex-row lg:gap-12 lg:p-10" : ""
              }`}
            >
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-gold">
                  <span>{p.category}</span>
                  <span className="text-line">/</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="font-display mt-3 text-3xl text-paper lg:text-4xl">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">{p.client}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{p.description}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-paper/70">{p.detail}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-paper/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex shrink-0 flex-col justify-end gap-2 lg:mt-0">
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-[12px] uppercase tracking-[0.14em] text-ink hover:bg-gold-soft"
                  >
                    Ver sitio
                  </a>
                ) : null}
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-line px-5 py-2.5 text-[12px] uppercase tracking-[0.14em] text-paper hover:border-gold/50"
                >
                  Código en GitHub
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 divide-y divide-line border-y border-line">
          {rest.map((p) => (
            <article key={p.slug} className="grid gap-4 py-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-gold">
                  <span>{p.category}</span>
                  <span className="text-muted">· {p.year}</span>
                </div>
                <h3 className="mt-2 text-xl text-paper">{p.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] text-muted">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-gold/40 px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-gold-soft hover:bg-gold hover:text-ink"
                  >
                    Sitio
                  </a>
                ) : null}
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-paper hover:border-gold/50"
                >
                  Repo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
