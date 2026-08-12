import { skills } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="font-mono text-[12px] text-cmt">// skills.ts</p>
        <h2 className="font-mono mt-3 text-2xl text-paper sm:text-3xl">Stack técnico</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.group} className="rounded-xl border border-line bg-[#010409] p-5">
              <p className="font-mono text-[12px] text-gold">
                {`// ${group.group.toLowerCase()}`}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="rounded-md border border-line px-2.5 py-1 font-mono text-[12px] text-paper"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
