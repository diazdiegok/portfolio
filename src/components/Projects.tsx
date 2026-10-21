import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="proyectos" className="section-pad border-t border-line py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="font-mono text-[12px] text-cmt">// proyectos/</p>
        <h2 className="font-mono mt-3 text-2xl text-paper sm:text-3xl">Proyectos</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col overflow-hidden rounded-xl border border-line bg-[#010409] transition hover:border-gold/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#010409]">
                <img
                  src={p.preview}
                  alt={`Vista previa de ${p.title}`}
                  className={
                    p.slug === "geller-mysql"
                      ? "h-full w-full object-contain bg-[#0b1220]"
                      : "h-full w-full object-cover object-top"
                  }
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-[11px] text-gold">
                  {p.category} · {p.year}
                </p>
                <h3 className="font-mono mt-2 text-lg text-paper">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                {p.note ? (
                  <p className="mt-2 font-mono text-[11px] text-cmt">{p.note}</p>
                ) : null}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-str"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {p.links ? (
                  <ul className="mt-5 space-y-2 border-t border-line pt-4">
                    {p.links.map((link) => (
                      <li
                        key={link.title}
                        className="flex flex-wrap items-center justify-between gap-2 font-mono text-[12px]"
                      >
                        <span className="text-paper">{link.title}</span>
                        <span className="flex gap-2">
                          <a
                            href={link.live}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gold hover:text-gold-soft"
                          >
                            live
                          </a>
                          <a
                            href={link.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="text-cmt hover:text-paper"
                          >
                            repo
                          </a>
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-5 flex gap-2">
                    {p.live ? (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center rounded-md bg-gold px-4 py-2 font-mono text-[12px] text-ink hover:bg-gold-soft"
                      >
                        live
                      </a>
                    ) : null}
                    {p.repo ? (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center justify-center rounded-md border border-line px-4 py-2 font-mono text-[12px] text-paper hover:border-gold/50 ${
                          p.live ? "" : "flex-1"
                        }`}
                      >
                        repo
                      </a>
                    ) : null}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
