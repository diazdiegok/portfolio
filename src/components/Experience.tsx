import { experience } from "@/data/content";

export function Experience() {
  return (
    <section id="experiencia" className="section-pad border-t border-line py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="font-mono text-[12px] text-cmt">// experiencia.log</p>
        <h2 className="font-mono mt-3 text-2xl text-paper sm:text-3xl">Experiencia</h2>
        <div className="mt-8 space-y-0">
          {experience.map((job) => (
            <article
              key={job.title + job.period}
              className="grid gap-3 border-t border-line py-8 md:grid-cols-[180px_1fr]"
            >
              <p className="font-mono text-[12px] text-cmt">{job.period}</p>
              <div>
                <h3 className="font-mono text-[16px] text-paper">
                  {job.title}
                  <span className="text-gold"> @ {job.org}</span>
                </h3>
                <p className="mt-1 font-mono text-[12px] text-muted">{job.place}</p>
                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="font-mono text-gold">▸</span>
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
