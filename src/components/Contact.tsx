import { profile } from "@/data/content";

export function Contact() {
  return (
    <section id="contacto" className="section-pad border-t border-line py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="font-mono text-[12px] text-cmt">// contacto.sh</p>
        <h2 className="font-mono mt-3 text-2xl text-paper sm:text-3xl">Contacto</h2>
        <pre className="mt-6 overflow-x-auto rounded-xl border border-line bg-[#010409] p-5 font-mono text-[13px] leading-7 sm:text-[14px]">
          <span className="text-cmt"># Paraná, Entre Ríos</span>
          {"\n"}
          <span className="text-gold">$</span> echo{" "}
          <a href={`mailto:${profile.email}`} className="text-str underline-offset-2 hover:underline">
            {profile.email}
          </a>
          {"\n"}
          <span className="text-gold">$</span> open{" "}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-str underline-offset-2 hover:underline">
            linkedin
          </a>
          {"\n"}
          <span className="text-gold">$</span> curl{" "}
          <a href={profile.portfolio} target="_blank" rel="noreferrer" className="text-str underline-offset-2 hover:underline">
            diegodiaz.vercel.app
          </a>
          {"\n"}
          <span className="text-gold">$</span> git clone{" "}
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-str underline-offset-2 hover:underline">
            github.com/diazdiegok
          </a>
        </pre>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-gold px-5 py-2.5 font-mono text-[13px] text-ink hover:bg-gold-soft"
          >
            mail
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
            href={profile.portfolio}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-5 py-2.5 font-mono text-[13px] text-paper hover:border-gold/50"
          >
            portfolio
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-5 py-2.5 font-mono text-[13px] text-paper hover:border-gold/50"
          >
            github
          </a>
        </div>
      </div>
    </section>
  );
}
