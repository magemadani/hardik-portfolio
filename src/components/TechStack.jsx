import { sections, stackGroups } from '../data'
import Reveal from './Reveal'
import { Arrow, iconMap } from './Icons'

export default function TechStack() {
  const { eyebrow, title, sub } = sections.stack
  return (
    <section id="expertise" className="py-16 sm:py-20">
      <div className="shell">
        <Reveal className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-3 h2">{title}</h2>
            <p className="mt-3 text-[15px]">{sub}</p>
          </div>
          <a href="#projects" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-dark">
            View all technologies <Arrow />
          </a>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((g, i) => {
            const Icon = iconMap[g.icon]
            return (
              <Reveal key={g.title} delay={i * 0.08}>
                <div className="card h-full p-6 transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                        g.icon === 'magento' ? 'bg-[#FFF1E9] text-[#F26322]' : 'bg-accent-soft text-accent'
                      }`}
                    >
                      <Icon />
                    </span>
                    <h3 className="text-[15px] font-extrabold tracking-tight text-ink">{g.title}</h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {g.items.map((it) => (
                      <li key={it} className="text-[13px] leading-snug text-slate-550">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
