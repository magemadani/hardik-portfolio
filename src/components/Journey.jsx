import { journey, sections } from '../data'
import Reveal from './Reveal'
import { Bulb, Code, Share, Trend } from './Icons'

const icons = { bulb: Bulb, code: Code, share: Share, trend: Trend }

export default function Journey() {
  const { eyebrow, title, sub } = sections.journey

  return (
    <section id="journey" className="py-16 sm:py-20">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 h2">{title}</h2>
          <p className="mt-3 max-w-2xl text-[15px]">{sub}</p>
        </Reveal>

        <ol className="relative mt-12 space-y-5 lg:max-w-3xl">
          {/* the rail, fading out past the last milestone */}
          <span
            aria-hidden
            className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-accent/50 via-accent/25 to-transparent"
          />

          {journey.map((j, i) => {
            const Icon = icons[j.icon]
            return (
              <Reveal key={j.year} delay={i * 0.09} as="li" className="relative flex gap-5">
                <span
                  className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl border shadow-card ${
                    j.current ? 'border-accent/30 bg-accent text-white' : 'border-line bg-white text-accent'
                  }`}
                >
                  <Icon />
                </span>

                <div
                  className={`card flex-1 p-5 transition hover:-translate-y-0.5 hover:shadow-lift sm:p-6 ${
                    j.current ? 'border-accent/25 bg-accent-soft/50' : ''
                  }`}
                >
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] ${
                      j.current ? 'bg-accent text-white' : 'bg-accent-soft text-accent'
                    }`}
                  >
                    {j.year}
                  </span>
                  <h3 className="mt-3 text-[17px] font-extrabold tracking-tight text-ink">{j.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed">{j.detail}</p>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
