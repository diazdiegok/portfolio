import { about, skills } from "@/data/content";

export function About() {
  return (
    <section id="sobre-mi" className="section-pad border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-[12px] uppercase tracking-[0.28em] text-gold">Quién soy</p>
        <div className="mt-6 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              {about.heading}
            </h2>
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-muted">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="space-y-8">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {about.facts.map((f) => (
                <div key={f.label} className="bg-ink p-5">
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-gold">{f.label}</dt>
                  <dd className="mt-2 text-sm text-paper">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="space-y-5">
              {skills.map((s) => (
                <div key={s.group}>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted">{s.group}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line px-2.5 py-1 text-[12px] text-paper/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
