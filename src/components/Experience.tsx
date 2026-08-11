import { experience } from "@/data/content";

export function Experience() {
  return (
    <section id="experiencia" className="section-pad border-t border-line py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-[12px] uppercase tracking-[0.28em] text-gold">Qué hago</p>
        <h2 className="font-display mt-4 text-4xl sm:text-5xl">Experiencia</h2>
        <div className="mt-12 space-y-0">
          {experience.map((job) => (
            <article
              key={job.title + job.period}
              className="grid gap-4 border-t border-line py-10 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]"
            >
              <p className="text-[13px] uppercase tracking-[0.14em] text-muted">{job.period}</p>
              <div>
                <h3 className="text-xl text-paper">
                  {job.title}
                  <span className="text-gold"> · {job.org}</span>
                </h3>
                <p className="mt-1 text-sm text-muted">{job.place}</p>
                <ul className="mt-5 space-y-2 text-[15px] leading-relaxed text-muted">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
