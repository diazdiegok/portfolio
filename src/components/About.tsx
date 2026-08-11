import { about } from "@/data/content";

export function About() {
  return (
    <section id="sobre-mi" className="section-pad border-t border-line py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="font-mono text-[12px] text-cmt">// sobre-mi.md</p>
        <h2 className="font-mono mt-3 text-2xl text-paper sm:text-3xl">{about.heading}</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-[16px] leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mt-6 space-y-1 font-mono text-[13px] text-paper">
          {about.education.map((item) => (
            <li key={item}>
              <span className="text-gold">▸</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
