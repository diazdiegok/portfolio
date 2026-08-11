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
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-4 font-mono text-[13px]">
                    <span className="text-paper">{item.name}</span>
                    <span className="text-cmt">{item.level}</span>
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
